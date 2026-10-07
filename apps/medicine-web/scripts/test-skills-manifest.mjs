import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSkillsManifest } from "./skills-manifest.mjs";

function record(id, changes = {}) {
  return {
    categoryOrder: 3, subcategoryOrder: 1, order: 1,
    iconName: "Droplet", legacyCategoryIds: [],
    ...changes,
    skill: { id, name: id, categoryId: "blood", categoryName: "채혈·혈관접근", subcategory: "채혈", ...changes.skill },
  };
}

test("skill sources use the five agreed headings without a separate references section", () => {
  const root = fileURLToPath(new URL("../../../source_notes/07 Skills/", import.meta.url));
  const files = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith(".md"));
  assert.ok(files.length >= 46, "existing skill documents must remain available");
  for (const file of files) {
    const raw = fs.readFileSync(path.join(root, file), "utf8");
    if (!/^id:/m.test(raw)) continue;
    const headings = [...raw.matchAll(/^## (.+)$/gm)].map(match => match[1].trim());
    assert.deepEqual(headings, ["개요·원리", "적응증·금기증", "시행", "결과", "합병증·사후 관리"], file);
    assert.match(raw, /^sources:/m, `${file}: reference metadata must remain available`);
  }
});

test("source metadata groups documents across legacy source folders", () => {
  const data = createSkillsManifest([
    record("c-line", { subcategoryOrder: 2, legacyCategoryIds: ["line"], skill: { subcategory: "혈관 접근" } }),
    record("venipuncture"),
  ]);
  assert.equal(data.categories.length, 1);
  assert.deepEqual(data.categories[0].legacyIds, ["line"]);
  assert.deepEqual(data.categories[0].groups.map(group => group.name), ["채혈", "혈관 접근"]);
  assert.deepEqual(data.items.map(item => item.id), ["venipuncture", "c-line"]);
});

test("category and subgroup order come from Markdown metadata", () => {
  const data = createSkillsManifest([
    record("cat-b", { categoryOrder: 2, skill: { categoryId: "b", categoryName: "B" } }),
    record("cat-a", { categoryOrder: 1, skill: { categoryId: "a", categoryName: "A" } }),
  ]);
  assert.deepEqual(data.categories.map(category => category.id), ["a", "b"]);
});

test("invalid IDs, conflicting category definitions and aliases fail explicitly", () => {
  assert.throws(() => createSkillsManifest([record("same"), record("same")]), /Duplicate/);
  assert.throws(() => createSkillsManifest([record("a"), record("b", { iconName: "Pill" })]), /Inconsistent/);
  assert.throws(() => createSkillsManifest([
    record("a", { legacyCategoryIds: ["b"] }),
    record("b", { skill: { categoryId: "b", categoryName: "B" } }),
  ]), /Ambiguous/);
});
