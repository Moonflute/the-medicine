import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const loaded = new Map();
function load(name) {
  const filename = fileURLToPath(new URL("../src/lib/" + name + ".ts", import.meta.url));
  if (loaded.has(filename)) return loaded.get(filename);
  const compiled = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInThisContext("(function (exports, require, module) {" + output + "\n})", { filename })(compiled.exports, load, compiled);
  loaded.set(filename, compiled.exports);
  return compiled.exports;
}

const { prepareReviewCardCatalog, recommendReviewCardTopics, searchReviewCardDocuments, searchReviewCardSpecialties } = load("review-card-recommendations");
const { readReviewCardRelations } = load("review-card-relations");
const { draftMatchesReviewCard } = load("review-cards");
const cardio = { id: "cardiology", label: "순환기" };
const rhythm = { href: "/disease/rhythm", title: "심방 조동-세동 (Atrial Flutter-Fibrillation)" };
const ecg = { href: "/lab-img/ecg", title: "심전도" };
const catalog = prepareReviewCardCatalog({
  specialties: [cardio, { id: "pulmonology", label: "호흡기" }],
  documents: [
    { ...rhythm, aliases: ["심방세동", "AF", "atrial fibrillation"], specialties: [cardio.id],
      context: "심전도에서 뚜렷한 P파가 없고 불규칙한 R-R 간격이 지속된다." },
    { ...ecg, aliases: ["EKG"], specialties: [cardio.id], context: "심박수 축 유도와 간격 순서로 확인한다." },
    ...Array.from({ length: 32 }, (_, index) => ({
      href: "/disease/fixture-" + index, title: "별도 문서 " + index, context: "증상 원인 치료 확인",
    })),
  ],
});

test("related topics combine clues from both sides without a document title in the note", () => {
  const result = recommendReviewCardTopics(catalog, "R-R 간격이 불규칙하다", "뚜렷한 P 파가 보이지 않는다");
  assert.deepEqual(result.documents[0], rhythm);
  assert.deepEqual(result.specialties[0], cardio);
  assert.deepEqual(recommendReviewCardTopics(catalog, "진단 검사 치료 원인", ""), { documents: [], specialties: [] });
  assert.deepEqual(recommendReviewCardTopics(catalog, "staff meeting", "").documents, []);
});

test("Korean spacing, English aliases and manual search identify the same document", () => {
  assert.deepEqual(recommendReviewCardTopics(catalog, "심방 세동의 특징", "").documents[0], rhythm);
  assert.deepEqual(recommendReviewCardTopics(catalog, "", "Atrial fibrillation").documents[0], rhythm);
  assert.deepEqual(searchReviewCardDocuments(catalog, "AF")[0], rhythm);
  assert.deepEqual(searchReviewCardSpecialties(catalog, "순환"), [cardio]);
});

test("relation-only changes participate in conflict detection and links are validated", () => {
  const base = { id: "card", front: "앞면", back: "뒷면" };
  const relations = { specialties: [cardio], documents: [rhythm] };
  assert.equal(draftMatchesReviewCard(base, { ...base, relations }), false);
  assert.equal(draftMatchesReviewCard({ ...base, relations }, { ...base, relations }), true);
  assert.equal(draftMatchesReviewCard(base, { ...base, relations: { specialties: [], documents: [] } }), true);
  assert.deepEqual(readReviewCardRelations({
    specialties: [cardio, cardio],
    documents: [rhythm, rhythm, { href: "https://example.com", title: "External" }, { href: "/review/qbank", title: "QBank" }],
  }), relations);
});
