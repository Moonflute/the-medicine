import assert from "node:assert/strict";
import test from "node:test";
import {
  buildRelatedTheoryTopicStats,
  filterRelatedTheoryQuestions,
  parseRelatedTheoryTopicKeys,
  relatedTheoryTopicKey,
  serializeRelatedTheoryTopicKeys,
} from "../src/lib/qbank-related-theory.ts";

const question = (id, overrides = {}) => ({
  id,
  specialty: "호흡기",
  specialtySlug: "02-respiratory",
  relatedDiseaseSlugs: [],
  relatedCcSlugs: [],
  relatedDrugSlugs: [],
  questionType: "recall",
  difficulty: "basic",
  translationStatus: "done",
  explanationStatus: "done",
  questionBank: "theory",
  targetType: "disease",
  targetSlug: "unrelated",
  ...overrides,
});

const index = [
  question("asthma-direct", { targetSlug: "asthma" }),
  question("asthma-child", { targetSlug: "exercise-induced-asthma" }),
  question("asthma-related", { targetType: "drug", targetSlug: "albuterol", relatedDiseaseSlugs: ["asthma"] }),
  question("dyspnea-direct", { targetType: "cc", targetSlug: "dyspnea" }),
  question("dyspnea-related", { targetSlug: "copd", relatedCcSlugs: ["dyspnea"] }),
  question("shared", { targetSlug: "asthma", relatedCcSlugs: ["dyspnea"] }),
  question("clinical-is-excluded", { questionBank: "clinical", targetSlug: "asthma", relatedCcSlugs: ["dyspnea"] }),
  question("stale-id-is-irrelevant", { relatedTheoryQuestionIds: ["asthma-direct"] }),
];

const topics = [
  { type: "disease", slug: "asthma", title: "천식", scopeSlugs: ["asthma", "exercise-induced-asthma"] },
  { type: "cc", slug: "dyspnea", title: "호흡곤란" },
  { type: "disease", slug: "missing-page", title: "문항 없는 주제" },
];

test("matches direct targets, descendant scope and related disease slugs", () => {
  assert.deepEqual(
    filterRelatedTheoryQuestions(index, [topics[0]]).map((item) => item.id),
    ["asthma-direct", "asthma-child", "asthma-related", "shared"],
  );
});

test("matches direct and related CC questions while excluding clinical questions", () => {
  assert.deepEqual(
    filterRelatedTheoryQuestions(index, [topics[1]]).map((item) => item.id),
    ["dyspnea-direct", "dyspnea-related", "shared"],
  );
});

test("reports zero-count topics and deduplicates the union in catalog order", () => {
  const result = buildRelatedTheoryTopicStats(index, topics);
  assert.deepEqual(result.topics.map(({ title, count }) => [title, count]), [
    ["천식", 4],
    ["호흡곤란", 3],
    ["문항 없는 주제", 0],
  ]);
  assert.deepEqual(result.questionIds, [
    "asthma-direct",
    "asthma-child",
    "asthma-related",
    "dyspnea-direct",
    "dyspnea-related",
    "shared",
  ]);
  assert.equal(new Set(result.questionIds).size, result.questionIds.length);
  assert.deepEqual(result.questions.map((item) => item.id), result.questionIds);
});

test("topic keys round-trip safely and discard malformed or duplicate values", () => {
  const encoded = serializeRelatedTheoryTopicKeys([
    { type: "disease", slug: "천식/운동 유발" },
    { type: "cc", slug: "dyspnea" },
    { type: "cc", slug: "dyspnea" },
  ]);
  assert.equal(encoded, "disease:%EC%B2%9C%EC%8B%9D%2F%EC%9A%B4%EB%8F%99%20%EC%9C%A0%EB%B0%9C,cc:dyspnea");
  assert.deepEqual(parseRelatedTheoryTopicKeys([encoded, "bad:key,disease:%E0%A4%A"]), [
    { type: "disease", slug: "천식/운동 유발" },
    { type: "cc", slug: "dyspnea" },
  ]);
  assert.equal(relatedTheoryTopicKey({ type: "disease", slug: "asthma" }), "disease:asthma");
});

test("legacy relatedTheoryQuestionIds never create a match on their own", () => {
  assert.deepEqual(filterRelatedTheoryQuestions(index, [{ type: "disease", slug: "missing-page", title: "없음" }]), []);
});
