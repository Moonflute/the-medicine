import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";
import ts from "typescript";

const compile = (name, deps = {}) => {
  const compiledModule = { exports: {} };
  const source = fs.readFileSync(new URL(`../src/lib/${name}`, import.meta.url), "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(output, { module: compiledModule, exports: compiledModule.exports, require: (id) => deps[id], URLSearchParams });
  return compiledModule.exports;
};

const grading = compile("qbank-grading.ts");
const mockExam = compile("mock-exam.ts", { "./qbank-grading": grading });
const activeSession = compile("qbank-active-session.ts", { "./qbank-grading": grading, "./mock-exam": mockExam });
const { qbankSessionContextFromParams } = compile("qbank-session-context.ts", { "./qbank-active-session": activeSession });
const specialties = [
  { name: "01 순환기", slug: "cardiology", count: 10 },
  { name: "02 호흡기", slug: "pulmonology", count: 10 },
];

test("related-theory context retains topic labels, counts and requested size", () => {
  const topics = [{ type: "disease", slug: "copd", title: "COPD", count: 12 }, { type: "cc", slug: "dyspnea", title: "호흡곤란", count: 4 }];
  const params = new URLSearchParams({ mode: "theory-linked", count: "10", sessionKind: "related-theory", sessionTitle: "관련 이론문제 풀이", sessionSummary: "COPD · 호흡곤란 · 10문항", topicMeta: JSON.stringify(topics) });
  const context = qbankSessionContextFromParams(params, specialties);
  assert.equal(context.kind, "related-theory");
  assert.equal(context.summary, "COPD · 호흡곤란 · 10문항");
  assert.equal(context.requestedCount, 10);
  assert.equal(JSON.stringify(context.topics), JSON.stringify(topics));
});

test("ordinary theory and clinical selections get a compact readable summary", () => {
  const params = new URLSearchParams({ mode: "selection", theory: "disease:cardiology,disease:pulmonology", clinical: "cardiology", count: "20" });
  const context = qbankSessionContextFromParams(params, specialties);
  assert.equal(context.title, "선택 범위 문제풀이");
  assert.match(context.summary, /이론 순환기 · 호흡기/);
  assert.match(context.summary, /임상 순환기/);
  assert.match(context.summary, /20문항/);
});

test("practice, wrong and bookmark sessions receive specific labels", () => {
  const practice = qbankSessionContextFromParams(new URLSearchParams({ mode: "practice-book", practiceOnly: "1", practiceYears: "2025", practiceDepartments: "내과", practiceUnattempted: "1", count: "50" }), specialties);
  assert.equal(practice.title, "실전문제 풀이");
  assert.equal(practice.order, "book");
  assert.equal(practice.unattempted, true);
  assert.match(practice.summary, /2025년/);
  assert.equal(qbankSessionContextFromParams(new URLSearchParams({ mode: "wrong", count: "20" }), specialties).title, "오답 다시 풀기");
  assert.equal(qbankSessionContextFromParams(new URLSearchParams({ mode: "bookmarks", count: "20" }), specialties).title, "북마크 문제 풀이");
});
