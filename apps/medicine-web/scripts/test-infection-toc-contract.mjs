import assert from "node:assert/strict";
import test from "node:test";
import { INFECTION_CORE_TOC, validateInfectionToc } from "./infection-toc-contract.mjs";

test("the reviewed pathogen-centered TOC remains valid", () => {
  assert.deepEqual(validateInfectionToc(INFECTION_CORE_TOC), []);
});

test("source-backed clinical categories can be added without changing pathogen order", () => {
  const headings = [...INFECTION_CORE_TOC];
  headings.splice(headings.indexOf("지역사회 감염"), 0, "감염관리");
  assert.deepEqual(validateInfectionToc(headings, [["감염관리"]]), ["감염관리"]);
});

test("reordering or deleting reviewed core categories still fails", () => {
  const reordered = [...INFECTION_CORE_TOC];
  [reordered[1], reordered[2]] = [reordered[2], reordered[1]];
  assert.throws(() => validateInfectionToc(reordered), /pathogen-centered TOC order/);
  assert.throws(() => validateInfectionToc(INFECTION_CORE_TOC.filter(heading => heading !== "진균")), /pathogen-centered TOC order/);
});

test("added categories require a matching generated source classification", () => {
  assert.throws(() => validateInfectionToc([...INFECTION_CORE_TOC, "빈 분류"]), /has no source document: 빈 분류/);
});

test("duplicate and empty headings still fail", () => {
  assert.throws(() => validateInfectionToc([...INFECTION_CORE_TOC, "감염"]), /duplicate headings/);
  assert.throws(() => validateInfectionToc([...INFECTION_CORE_TOC, ""]), /nonempty strings/);
});
