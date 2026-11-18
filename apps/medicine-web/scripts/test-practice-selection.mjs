import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesPractice, toggleGroup, stringArray, comparePracticeOrder, mockExamFilters, practiceFiltersFromParams, practiceMockExams, practiceMockExamTitle, practiceTopicSections, isPracticeRevisionId, indexPracticeVersions, isListedQuestion, listedPracticeIds, practiceDeliveryIds, practiceVersionIds, visiblePracticeFilters, PRACTICE_REVISION_SERIES } from '../src/lib/practice-selection.ts';
import { gradeQuestion } from '../src/lib/qbank-grading.ts';

test('selecting or clearing one theory group preserves other groups', () => {
  assert.deepEqual(toggleGroup(['disease:cardio'], ['cc:cardio', 'cc:renal']), ['disease:cardio', 'cc:cardio', 'cc:renal']);
  assert.deepEqual(toggleGroup(['disease:cardio', 'cc:cardio', 'cc:renal'], ['cc:cardio', 'cc:renal']), ['disease:cardio']);
});
test('practice selection intersects dimensions; year is exam year, not edition', () => {
  const q = { bookId: 'book-a', specialtySlug: 'renal', examYear: 2020, editionYear: 2026 };
  assert.equal(matchesPractice(q, { books: [], specialties: [], years: [] }), false);
  assert.equal(matchesPractice(q, { books: ['book-a'], specialties: [], years: ['2020'] }), true);
  assert.equal(matchesPractice(q, { books: ['book-a'], specialties: [], years: ['2026'] }), false);
  assert.equal(matchesPractice(q, { books: ['book-a'], specialties: ['cardio'], years: [] }), false);
  assert.equal(matchesPractice({ ...q, examYear: null }, { books: ['book-a'], specialties: [], years: ['unknown'] }), true);
});
test('invalid stored selections cannot become active filters', () => {
  assert.deepEqual(stringArray({ books: 'all' }), []);
  assert.deepEqual(stringArray(['valid', null, 42]), ['valid']);
});

test('a public catalogue drops saved past-exam filters and hides their sessions and revisions', () => {
  const mock = { id: 'QB-MOCK-M01-IM-0001', bookSeries: '창작 모의고사', bookId: 'mock-mini-1', examYear: null };
  const past = { id: 'QB-PAST', bookSeries: '실전', bookId: 'past', examYear: 2025, revisionIds: ['QB-REV-202611-PAST'], sourceIds: ['QB-OLD'] };
  const draft = mockExamFilters(2025);
  assert.deepEqual(visiblePracticeFilters(draft, [mock]), { ...draft, examKey: undefined, years: [] });
  assert.equal(visiblePracticeFilters(draft, [past, mock]), draft);
  const publicRound = mockExamFilters(null, mock.bookId);
  assert.equal(visiblePracticeFilters(publicRound, [mock]), publicRound);
  assert.equal(practiceMockExamTitle(mock.bookId), '미니 모의고사 1회');
  assert.equal(practiceMockExamTitle('2025'), '2025년 모의고사');
  const savedIds = [mock.id, past.id, ...past.revisionIds, ...past.sourceIds, 'theory-1'];
  const guest = listedPracticeIds([mock]);
  assert.deepEqual(savedIds.filter(id => isListedQuestion(id, guest)), [mock.id, 'theory-1']);
  const approved = listedPracticeIds([mock, past]);
  assert.ok(savedIds.every(id => isListedQuestion(id, approved)));
});

 test('department-only, specialty-only and year-only selections work independently', () => {
  const q = { bookSeries: 'R', bookDepartment: 'IM', specialtySlug: 'renal', examYear: 2020 };
  const empty = { books: [], specialties: [], years: [] };
  assert.equal(matchesPractice(q, { ...empty, departments: ['IM'] }), true);
  assert.equal(matchesPractice(q, { ...empty, specialties: ['renal'] }), true);
  assert.equal(matchesPractice(q, { ...empty, years: ['2020'] }), true);
  assert.equal(matchesPractice(q, { ...empty, series: ['P'], years: ['2020'] }), false);
 });

test('a normal mock exam delivers the latest content once in its original slot and order', () => {
  const rows = ['IM', 'GS', 'OG', 'PE'].map((subject, index) => ({
    id: `QB-PF2026-V0${index < 2 ? 1 : 2}-${subject}-Y2025-0001`,
    bookId: index < 2 ? 'perfect2026-im-gs' : 'perfect2026-pe-og',
    bookSeries: '퍼펙트', examYear: 2025, bookDepartment: subject, specialtySlug: subject,
  }));
  const original = { ...rows[0], id: 'QB-PF2026-V01-IM-Y2025-0002', bookSeries: '실전' };
  const revised = { ...original, id: 'QB-REV-202611-PF2026-V01-IM-Y2025-0002', bookSeries: PRACTICE_REVISION_SERIES };
  const older = { ...revised, id: revised.id.replace('202611', '202610') };
  const unrelated = { ...revised, id: 'QB-REV-202611-absent' };
  rows.push({ ...rows[0], id: 'other-year', examYear: 2026 }, original, { ...rows[0], id: 'unresolved', examYear: null });
  const bank = indexPracticeVersions(rows, [revised, older, unrelated]);
  assert.deepEqual(practiceMockExams(bank).map(({label, count}) => [label, count]), [['2026년', 1], ['2025년', 5]]);
  const selected = bank.filter(q => matchesPractice(q, mockExamFilters(2025))).reverse().sort(comparePracticeOrder);
  assert.deepEqual(selected.map(q => q.bookDepartment), ['IM', 'IM', 'GS', 'OG', 'PE']);
  const delivery = practiceDeliveryIds(selected);
  assert.deepEqual(delivery, [rows[0].id, revised.id, rows[1].id, rows[2].id, rows[3].id]);
  assert.deepEqual(delivery.map(id => ({id})).reverse().sort(comparePracticeOrder).map(q => q.id), delivery);
  assert.deepEqual(practiceVersionIds(selected[1]), [original.id, older.id, revised.id]);
  assert.deepEqual(practiceDeliveryIds(selected, new Set([original.id, older.id])), [original.id, older.id]);
  assert.equal(original.revisionIds, undefined);
  const byDepartment = bank.filter(q => matchesPractice(q, { books: [], specialties: [], years: ['2025'], departments: ['IM'] }));
  assert.deepEqual(practiceDeliveryIds(byDepartment), [rows[0].id, revised.id]);
  const oldLink = bank.filter(q => matchesPractice(q, { books: [], specialties: [], years: [], series: [PRACTICE_REVISION_SERIES] }));
  assert.deepEqual(practiceDeliveryIds(oldLink), [revised.id]);
  assert.equal(matchesPractice(revised, { books: [], specialties: [], years: [], departments: ['IM'] }), false);
  assert.equal(isPracticeRevisionId(original.id), false);
  assert.equal(isPracticeRevisionId(revised.id), true);
});

test('RES 26 is a separate round without changing the common 2026 year filter', () => {
  const existing = { id: 'existing', examYear: 2026, bookId: 'older-practice', bookSeries: '실전' };
  const added = { ...existing, id: 'new', bookId: 'practice-res2608' };
  const bank = [existing, added];
  assert.deepEqual(practiceMockExams(bank), [
    { key: '2026-2', year: 2026, label: '2026-2', count: 1 },
    { key: '2026', year: 2026, label: '2026년', count: 1 },
  ]);
  const select = (filters) => bank.filter(question => matchesPractice(question, filters));
  assert.deepEqual(select(mockExamFilters(2026)), [existing]);
  assert.deepEqual(select(mockExamFilters(2026, '2026-2')), [added]);
  const legacy = { practiceOnly: '1', practiceYears: '2026', mode: 'practice-book' };
  assert.deepEqual(select(practiceFiltersFromParams(new URLSearchParams(legacy))), [existing]);
  assert.deepEqual(select(practiceFiltersFromParams(new URLSearchParams({ ...legacy, practiceExam: '' }))), bank);
  for (const mode of ['selection', 'practice-book']) {
    const params = new URLSearchParams({ ...legacy, mode, practiceExam: '2026-2' });
    assert.deepEqual(select(practiceFiltersFromParams(params)), [added]);
  }
  assert.deepEqual(select({ books: [], specialties: [], years: ['2026'], order: 'book' }), [existing]);
});
 test('book order keeps original subject order and numeric question order', () => {
  const ids = ['QB-RL2019-V01-GS-0001', 'QB-RL2019-V01-IM-0010', 'QB-RL2019-V01-IM-0002'];
  assert.deepEqual(ids.map(id => ({id})).sort(comparePracticeOrder).map(q => q.id), [ids[2], ids[1], ids[0]]);
 });

test('authored rounds follow the archive and reopen from either launch mode without an exam year', () => {
  const row = { id: 'past', bookId: 'past', bookSeries: '실전', examYear: 2025 };
  const authored = ['mock-mini-2', 'mock-full-1', 'mock-mini-1'].map(bookId =>
    ({ ...row, id: bookId, bookId, bookSeries: '창작 모의고사', examYear: null }));
  const unknown = { ...row, id: 'undated', examYear: null };
  const bank = [...authored, unknown, row];
  assert.deepEqual(practiceMockExams(bank).map(r => r.label), ['2025년', '모의고사 1회', '미니 모의고사 1회', '미니 모의고사 2회']);
  for (const mode of ['selection', 'practice-book']) {
    const restored = practiceFiltersFromParams(new URLSearchParams({ practiceOnly: '1', mode, practiceExam: 'mock-mini-1' }));
    assert.deepEqual(bank.filter(q => matchesPractice(q, restored)), [authored[2]]);
  }
  assert.deepEqual(bank.filter(q => matchesPractice(q, mockExamFilters(null, 'mock-full-1'))), [authored[1]]);
  assert.deepEqual(bank.filter(q => matchesPractice(q, { books: [], specialties: [], years: ['unknown'] })), [unknown]);
});

test('a revised answer is scored independently from the historical accepted choices', () => {
  const original = {
    id: 'QB-EXAMPLE-1', gradingMode: 'multiple-exact', answer: null, acceptedAnswers: ['B', 'D'],
    options: { A: 'first', B: 'historical 1', C: 'third', D: 'historical 2', E: 'fifth' },
  };
  const { acceptedAnswers, ...base } = original;
  const revision = { ...base, id: 'QB-REV-202611-EXAMPLE-1', gradingMode: 'single', answer: 'C', options: { ...original.options, C: 'revised' } };
  assert.equal(gradeQuestion(original, acceptedAnswers), true);
  assert.equal(gradeQuestion(original, 'C'), false);
  assert.equal(gradeQuestion(revision, acceptedAnswers), false);
  assert.equal(gradeQuestion(revision, 'C'), true);
  assert.deepEqual(acceptedAnswers.map(key => revision.options[key]), ['historical 1', 'historical 2']);
});

test('internal-medicine detail topics mirror only theory specialties 01 through 10', () => {
  const rows = [
    { bookDepartment: '내과', specialty: '09 혈액', specialtySlug: 'hematology' },
    { bookDepartment: '내과', specialty: '01 순환기', specialtySlug: 'cardiology' },
    { bookDepartment: '내과', specialty: '11 외과', specialtySlug: 'surgery' },
    { bookDepartment: '내과', specialty: '21 응급의학', specialtySlug: 'emergency' },
  ];
  assert.deepEqual(
    practiceTopicSections(rows, '내과').flatMap(section => section.topics).map(([key, label]) => [key, label]),
    [['내과:cardiology', '순환기'], ['내과:hematology', '혈액']],
  );
});
