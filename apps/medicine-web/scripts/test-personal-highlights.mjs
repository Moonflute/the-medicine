import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import * as anchors from "../src/lib/highlight-anchor.ts";
import { makeAnchor, locateAnchor, normalizeText, subtractInterval, mergeHighlights } from "../src/lib/highlight-anchor.ts";

const compiled = { exports: {} };
const source = ts.transpileModule(fs.readFileSync(new URL("../src/lib/highlight-dom.ts", import.meta.url), "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
vm.runInNewContext(source, { exports: compiled.exports, module: compiled, require: () => anchors });
const { makeDOMAnchor, resolveHighlight } = compiled.exports;
const block = (text, tagName = "P", key = "") => ({ text, element: { tagName }, key, starts: [], ends: [] });

test("identical headings are distinguished from a breadcrumb even after a paragraph is added", () => {
  const blocks = [block("정맥채혈", "SPAN"), block("정맥채혈", "H1")];
  const anchor = makeDOMAnchor(blocks, blocks[1], 0, 4);
  assert.equal(resolveHighlight(blocks, anchor).block, blocks[1]);
  const changed = [block("추가 문단"), ...blocks];
  assert.equal(resolveHighlight(changed, anchor).block, blocks[1]);
});
test("repeated identical paragraphs use offsets only while the whole document is unchanged", () => {
  const blocks = [block("정상"), block("정상")];
  const anchor = makeDOMAnchor(blocks, blocks[1], 0, 2);
  assert.equal(resolveHighlight(blocks, anchor).block, blocks[1]);
  assert.equal(resolveHighlight([block("추가 문단"), ...blocks], anchor), null);
});
test("question and option scope prevents moving a quote to a different option", () => {
  const blocks = [block("혈압 저하", "SPAN", "option:A"), block("혈압 저하", "SPAN", "option:B")];
  const anchor = makeDOMAnchor(blocks, blocks[1], 0, 5);
  assert.equal(resolveHighlight([...blocks].reverse(), anchor).block.key, "option:B");
  assert.equal(resolveHighlight([blocks[0]], anchor), null);
});

test("whitespace normalizes across rendered inline content", () => {
  assert.equal(normalizeText("  혈압\n  저하\t후 "), "혈압 저하 후");
});
test("a quote survives insertion and edits outside the selected text", () => {
  const text = "혈압 저하는 신장 관류 감소를 유발한다.";
  const start = text.indexOf("신장 관류");
  const anchor = makeAnchor(text, start, start + 5);
  const changed = "추가 문단. 혈압 감소는 신장 관류 감소를 유발한다.";
  assert.deepEqual(locateAnchor(changed, anchor), { start: changed.indexOf("신장 관류"), end: changed.indexOf("신장 관류") + 5 });
});
test("surrounding context resolves repeated phrases", () => {
  const original = "전부하 감소 → 혈압 저하. 후부하 증가 → 혈압 저하.";
  const start = original.lastIndexOf("혈압 저하");
  const anchor = makeAnchor(original, start, start + 5);
  const changed = "새 설명. " + original;
  assert.equal(locateAnchor(changed, anchor)?.start, changed.lastIndexOf("혈압 저하"));
});
test("ambiguous or removed quotes remain detached rather than moving to unrelated text", () => {
  assert.equal(locateAnchor("정상 정상", makeAnchor("정상", 0, 2)), null);
  assert.equal(locateAnchor("새로운 설명", makeAnchor("혈압 저하", 0, 5)), null);
});
test("erasing a selected middle section keeps both outer pieces", () => {
  assert.deepEqual(subtractInterval(0, 12, [{ start: 4, end: 8 }]), [{ start: 0, end: 4 }, { start: 8, end: 12 }]);
  assert.deepEqual(subtractInterval(0, 12, [{ start: -3, end: 6 }, { start: 5, end: 20 }]), []);
});
test("offline additions merge and deletions cannot be resurrected in either arrival order", () => {
  const row = { id: "a", user_id: "owner", document_key: "page:cc/test", color: "yellow", anchor: makeAnchor("문서", 0, 2), deleted: false };
  const tombstone = { ...row, deleted: true };
  const second = { ...row, id: "b" };
  assert.equal(mergeHighlights([row], [tombstone], [row])[0].deleted, true);
  assert.equal(mergeHighlights([tombstone], [row])[0].deleted, true);
  assert.equal(mergeHighlights([row], [second]).length, 2);
});
