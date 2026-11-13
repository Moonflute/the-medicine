import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const source = fs.readFileSync(new URL("../src/lib/qbank-theory-selection.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const compiledModule = { exports: {} };
vm.runInNewContext(compiled, { module: compiledModule, exports: compiledModule.exports });
const { theorySourceType, theorySelectionKey, hasTheorySelection, normalizeTheorySelections } = compiledModule.exports;
const question = (targetType, specialtySlug = "cardiology", questionBank = "theory") => ({ targetType, specialtySlug, questionBank });

test("lab and skill questions share disease specialty selections without changing their reference type", () => {
  for (const type of ["disease", "lab", "skill"]) {
    const item = question(type);
    assert.equal(theorySourceType(item), "disease");
    assert.equal(theorySelectionKey(item), "disease:cardiology");
    assert.equal(item.targetType, type);
    assert.ok(hasTheorySelection(new Set(["disease:cardiology"]), item));
  }
});

test("CC and drug scopes remain separate, including within the same specialty", () => {
  for (const type of ["cc", "drug"]) {
    const item = question(type);
    assert.equal(theorySourceType(item), type);
    assert.equal(theorySelectionKey(item), `${type}:cardiology`);
    assert.equal(hasTheorySelection(new Set(["disease:cardiology"]), item), false);
  }
  assert.equal(theorySourceType(question("unknown")), "other");
});

test("legacy other URLs still select the original lab/skill scope", () => {
  const selected = new Set(["other:cardiology"]);
  assert.ok(hasTheorySelection(selected, question("lab")));
  assert.ok(hasTheorySelection(selected, question("skill")));
  assert.equal(hasTheorySelection(selected, question("disease")), false);
  assert.equal(hasTheorySelection(selected, question("cc")), false);
  assert.equal(hasTheorySelection(selected, question("lab", "renal")), false);
  assert.ok(hasTheorySelection(new Set(["cardiology"]), question("lab")));
});

test("saved other selections restore to one visible group with matching counts", () => {
  const questions = [question("disease"), question("lab"), question("skill"), question("cc"), question("drug"), question("disease", "renal")];
  const restored = normalizeTheorySelections(["other:cardiology", "disease:cardiology", "other:removed"], questions);
  assert.equal(JSON.stringify(restored), JSON.stringify(["disease:cardiology"]));
  const visibleCount = questions.filter(item => restored.includes(theorySelectionKey(item))).length;
  const sessionCount = questions.filter(item => hasTheorySelection(new Set(restored), item)).length;
  assert.equal(visibleCount, 3);
  assert.equal(sessionCount, visibleCount);
  assert.equal(normalizeTheorySelections([], questions).length, 0);
  assert.equal(normalizeTheorySelections(["cardiology"], [question("disease", "cardiology", "clinical")]).length, 0);
});

test("all lab/skill source questions belong to a disease specialty, retaining their target links", () => {
  const notesRoot = fileURLToPath(new URL("../../../source_notes/", import.meta.url));
  const specialties = new Set(fs.readdirSync(path.join(notesRoot, "02 Diseases"), { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name));
  const theoryRoot = path.join(notesRoot, "99 Q-bank", "Theory");
  const files = fs.readdirSync(theoryRoot, { recursive: true }).filter(file => file.endsWith(".md"));
  let count = 0;
  for (const file of files) {
    const text = fs.readFileSync(path.join(theoryRoot, file), "utf8");
    const field = name => text.match(new RegExp(`^${name}:\\s*(.*)$`, "m"))?.[1].trim().replace(/^"|"$/g, "");
    if (!["lab", "skill"].includes(field("target_type"))) continue;
    count++;
    const specialty = field("specialty");
    assert.ok(specialties.has(specialty), `${file}: no disease specialty for ${specialty}`);
    assert.equal(file.split(path.sep)[0], specialty, `${file}: directory/metadata mismatch`);
    assert.ok(field("target_slug"), `${file}: missing reference`);
    assert.equal(theorySourceType({ targetType: field("target_type") }), "disease");
  }
  assert.ok(count > 0);
  const moved = fs.readFileSync(path.join(theoryRoot, "05 신장", "theory-practice-calculated-total-serum-osmolality-includes-urea.md"), "utf8");
  assert.match(moved, /^id: theory-practice-calculated-total-serum-osmolality-includes-urea$/m);
  assert.match(moved, /^target_type: lab$/m);
});
