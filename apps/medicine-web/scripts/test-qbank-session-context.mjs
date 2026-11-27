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
const activeSession = compile("qbank-active-session.ts", { "./qbank-grading": grading, "./mock-exam": mockExam, "./qbank-round-timer": compile("qbank-round-timer.ts"), "./qbank-elapsed-time": compile("qbank-elapsed-time.ts"), "./qbank-skips": compile("qbank-skips.ts") });
const practiceSelection = compile("practice-selection.ts");
const { questionBookmarkRows, questionBookmarkIdFromParams } = compile("qbank-bookmarks.ts", { "./practice-selection": practiceSelection });
const progressFilters = compile("qbank-progress-filter.ts", { "./practice-selection": practiceSelection, "./qbank-progress": compile("qbank-progress.ts") });
const { qbankSessionContextFromParams } = compile("qbank-session-context.ts", { "./qbank-active-session": activeSession, "./practice-selection": practiceSelection, "./qbank-progress-filter": progressFilters });
const specialties = [
  { name: "01 순환기", slug: "cardiology", count: 10 },
  { name: "02 호흡기", slug: "pulmonology", count: 10 },
];

test("a signed-out learner can load a mock round and read its explanation", async () => {
  const mock = { id: "QB-MOCK-M01-IM-0001", bookId: "mock-mini-1", bookSeries: "창작 모의고사" };
  const client = {
    auth: { getSession: async () => ({ data: { session: null } }) },
    async rpc(name, args) {
      if (name === "private_qbank_index") return { data: [mock] };
      assert.equal(name, "private_qbank_questions");
      assert.deepEqual(Array.from(args.requested_ids), [mock.id]);
      return { data: [{ id: mock.id, explanation: "해설" }] };
    },
    from: () => assert.fail("Guests use only the public reads"),
  };
  const bank = compile("practice-bank.ts", {
    "@/lib/supabase/client": { getSupabaseBrowserClient: () => client },
    "@/lib/practice-selection": compile("practice-selection.ts"),
  });
  const { questions } = await bank.loadPracticeIndex();
  assert.equal(questions[0].id, mock.id);
  const delivered = await bank.loadPracticeQuestions([mock.id, "QB-REV-202611-PAST"]);
  assert.equal(delivered.length, 1);
  assert.equal(delivered[0].explanation, "해설");
});

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

test("skill and lab topic metadata survives URL parsing and session restoration", () => {
  const topics = [
    { type: "skill", slug: "c-line", title: "중심정맥관", count: 2 },
    { type: "lab", slug: "abga", title: "동맥혈가스분석", count: 1 },
  ];
  const params = new URLSearchParams({ mode: "theory-linked", count: "3", topicMeta: JSON.stringify([...topics, { type: "unknown", slug: "wrong", title: "invalid", count: 99 }]) });
  const context = qbankSessionContextFromParams(params, specialties);
  assert.equal(JSON.stringify(context.topics), JSON.stringify(topics));
  const restored = activeSession.activeSessionFrom({ sessionId: "test", updatedAt: new Date(0).toISOString(), questionIds: [], answers: [], selected: null, submitted: false, context });
  assert.equal(JSON.stringify(restored.context.topics), JSON.stringify(topics));
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

test("bookmark rows open the saved version, group source aliases, and leave unavailable questions removable", () => {
  const original = "QB-R-2026-IM-0001";
  const revision = "QB-REV-202611-R-2026-IM-0001";
  const alias = "QB-OLDER-2026-IM-0001";
  const missing = "QB-HIDDEN-2026-IM-0002";
  const practice = [{ id: original, bookDepartment: "내과", examYear: 2026, revisionIds: [revision], sourceIds: [alias] }];
  const rows = questionBookmarkRows([alias, revision, "theory-one", missing, "theory-one"], new Map([["theory-one", "문제 첫 줄"]]), practice);
  assert.deepEqual(Array.from(rows, row => row.id), [original, "theory-one", missing]);
  assert.equal(rows[0].title, "2026년 · 내과 · 1번");
  assert.deepEqual(Array.from(rows[0].bookmarkIds), [original, revision, alias]);
  assert.equal(questionBookmarkIdFromParams(new URL(rows[0].href, "https://example.test").searchParams), revision);
  assert.equal(questionBookmarkIdFromParams(new URL(questionBookmarkRows([alias], undefined, practice)[0].href, "https://example.test").searchParams), original);
  assert.equal(rows[1].title, "문제 첫 줄");
  assert.equal(rows[2].href, undefined);
  assert.deepEqual(Array.from(rows[2].bookmarkIds), [missing]);
  assert.equal(questionBookmarkIdFromParams(new URLSearchParams("mode=bookmarks&count=10")), undefined);
  assert.equal(questionBookmarkIdFromParams(new URLSearchParams("mode=bookmarks&id=bad%2Fid")), "");
});

test("a shuffled mock round keeps the 2026-2 label in its saved context", () => {
  const params = new URLSearchParams({ mode: "selection", practiceOnly: "1", practiceYears: "2026", practiceExam: "2026-2", exam: "1", count: "50" });
  const context = qbankSessionContextFromParams(params, specialties);
  assert.equal(context.title, "2026-2 모의고사");
  assert.equal(context.summary, "실전 2026-2 · 50문항");
  assert.equal(context.order, "random");
});

test("wrong-only selection retains scope and filter labels when resumed", () => {
  for (const scope of [{ theory: "disease:cardiology" }, { clinical: "pulmonology" }, { practiceOnly: "1", practiceYears: "2026", practiceDepartments: "내과" }]) {
    const context = qbankSessionContextFromParams(new URLSearchParams({ mode: "selection", progress: "wrong", count: "5", ...scope }), specialties);
    assert.equal(context.kind, "selection");
    assert.equal(context.wrongOnly, true);
    assert.equal(context.unattempted, undefined);
    assert.match(context.summary, /오답만 · 5문항/);
    const restored = activeSession.activeSessionFrom({ sessionId: "wrong-set", updatedAt: new Date(0).toISOString(), questionIds: ["q1"], answers: [], context });
    assert.equal(restored.context.wrongOnly, true);
    assert.equal(restored.context.summary, context.summary);
  }
});

test("progress filters support legacy URLs and never combine unattempted with wrong", () => {
  assert.equal(progressFilters.qbankProgressFilterFromParams(new URLSearchParams()), "all");
  assert.equal(progressFilters.qbankProgressFilterFromParams(new URLSearchParams("practiceUnattempted=1")), "unattempted");
  assert.equal(progressFilters.qbankProgressFilterFromParams(new URLSearchParams("progress=wrong&practiceUnattempted=1")), "wrong");
  assert.equal(progressFilters.readQbankProgressFilter("invalid"), "all");
});

const attempt = (id, correct, time) => ({ questionId: id, attempts: 1, correctAttempts: Number(correct), lastCorrect: correct, lastAttemptedAt: time });
test("wrong-only contains only unresolved questions; current-round resets affect only unattempted", () => {
  const old = "2026-11-01T00:00:00Z", recent = "2026-11-21T00:00:00Z";
  const state = { wrongIds: ["theory-wrong", "clinical-fixed", "manual"], progress: {
    "theory-wrong": attempt("theory-wrong", false, old),
    "clinical-fixed": attempt("clinical-fixed", true, recent),
  } };
  const ids = ["theory-wrong", "clinical-fixed", "manual", "never"];
  const selected = (filter, resetAt = null) => ids.filter(id => progressFilters.createQbankProgressMatcher(state, filter, resetAt)([id]));
  assert.deepEqual(selected("wrong"), ["theory-wrong", "manual"]);
  assert.deepEqual(selected("wrong", "2026-11-10T00:00:00Z"), ["theory-wrong", "manual"]);
  assert.deepEqual(selected("unattempted"), ["manual", "never"]);
  assert.deepEqual(selected("unattempted", "2026-11-10T00:00:00Z"), ["theory-wrong", "manual", "never"]);
  assert.deepEqual(selected("all"), ids);
});

test("practice aliases and revisions share their latest answer for wrong filtering", () => {
  const question = { id: "QB-R-2024-IM-0001", revisionIds: ["QB-REV-202611-R-2024-IM-0001"], sourceIds: ["QB-P-2024-IM-0001"] };
  const ids = progressFilters.qbankQuestionProgressIds(question);
  const state = { wrongIds: [question.sourceIds[0]], progress: {
    [question.sourceIds[0]]: attempt(question.sourceIds[0], false, "2026-11-01T00:00:00Z"),
    [question.revisionIds[0]]: attempt(question.revisionIds[0], true, "2026-11-02T00:00:00Z"),
  } };
  assert.equal(progressFilters.createQbankProgressMatcher(state, "wrong", null)(ids), false);
  state.progress[question.id] = attempt(question.id, false, "2026-11-03T00:00:00Z");
  assert.equal(progressFilters.createQbankProgressMatcher(state, "wrong", null)(ids), true);
  assert.equal(progressFilters.createQbankProgressMatcher(state, "wrong", null)(["QB-R-2024-GS-0001"]), false);
  assert.equal(progressFilters.createQbankProgressMatcher(state, "unattempted", null)(ids), false);
});

test("session loading intersects wrong status with theory, clinical, subject and round selections, but not saved sets", async () => {
  const publicQuestions = [
    { id: "theory-wrong", questionBank: "theory", targetType: "disease", specialtySlug: "cardiology" },
    { id: "theory-fixed", questionBank: "theory", targetType: "disease", specialtySlug: "cardiology" },
    { id: "clinical-wrong", questionBank: "clinical", specialtySlug: "pulmonology" },
    { id: "clinical-outside", questionBank: "clinical", specialtySlug: "cardiology" },
  ];
  const privateQuestions = [
    { id: "QB-R-2026-IM-0001", examYear: 2026, bookDepartment: "내과" },
    { id: "QB-R-2026-GS-0001", examYear: 2026, bookDepartment: "외과" },
    { id: "QB-R-2025-IM-0001", examYear: 2025, bookDepartment: "내과" },
  ].map(q => ({ ...q, bookId: "practice-r", bookSeries: "R", relatedDiseaseSlugs: [], relatedCcSlugs: [] }));
  const all = [...publicQuestions, ...privateQuestions];
  const state = { wrongIds: all.map(q => q.id), progress: { "theory-fixed": attempt("theory-fixed", true, "2026-11-21T00:00:00Z") } };
  const source = fs.readFileSync(new URL("../src/components/qbank-session-client.tsx", import.meta.url), "utf8");
  const parsed = ts.createSourceFile("session.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const loader = parsed.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === "loadQuestions");
  assert.ok(loader, "Exercise the production session loader, not a copy of its filtering");
  const context = {
    ...practiceSelection, ...progressFilters, ...compile("qbank-theory-selection.ts"),
    process: { env: {} },
    loadQbankState: () => state, loadQbankProgressViewResetAt: () => null,
    fetchJson: async url => url.endsWith("/index.json") ? publicQuestions : publicQuestions.filter(q => url.endsWith(`/${q.specialtySlug}.json`)),
    loadPracticeIndex: async () => ({ questions: privateQuestions }),
    loadPracticeQuestions: async ids => privateQuestions.filter(q => ids.includes(q.id)),
  };
  vm.runInNewContext(ts.transpileModule(loader.getText(parsed), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText, context);
  const filters = { books: [], specialties: [], years: ["2026"], departments: ["내과"] };
  const selected = await context.loadQuestions(specialties, "selection", "all", "", undefined, "disease:cardiology", "pulmonology", "", "", "", filters, "wrong");
  assert.deepEqual(Array.from(selected, q => q.id), ["theory-wrong", "clinical-wrong", "QB-R-2026-IM-0001"]);
  const round = await context.loadQuestions(specialties, "practice-book", "all", "", undefined, "", "", "", "", "", { ...filters, departments: [], examKey: "2026" }, "wrong");
  assert.deepEqual(Array.from(round, q => q.id), ["QB-R-2026-IM-0001", "QB-R-2026-GS-0001"]);
  for (const q of selected) state.progress[q.id] = attempt(q.id, true, "2026-11-22T00:00:00Z");
  const empty = await context.loadQuestions(specialties, "selection", "all", "", undefined, "disease:cardiology", "pulmonology", "", "", "", filters, "wrong");
  assert.equal(empty.length, 0);
  const resumed = await context.loadQuestions(specialties, "all", "all", "", new Set(selected.map(q => q.id)));
  assert.deepEqual(Array.from(resumed, q => q.id), Array.from(selected, q => q.id));
});
