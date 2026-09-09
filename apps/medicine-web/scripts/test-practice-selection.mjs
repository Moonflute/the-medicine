import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesPractice, toggleGroup, stringArray, comparePracticeOrder, mockExamFilters, practiceMockExams } from '../src/lib/practice-selection.ts';

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

 test('department-only, specialty-only and year-only selections work independently', () => {
  const q = { bookSeries: 'R', bookDepartment: 'IM', specialtySlug: 'renal', examYear: 2020 };
  const empty = { books: [], specialties: [], years: [] };
  assert.equal(matchesPractice(q, { ...empty, departments: ['IM'] }), true);
  assert.equal(matchesPractice(q, { ...empty, specialties: ['renal'] }), true);
  assert.equal(matchesPractice(q, { ...empty, years: ['2020'] }), true);
  assert.equal(matchesPractice(q, { ...empty, series: ['P'], years: ['2020'] }), false);
 });

test('one mock exam combines all four subjects across volumes and excludes other series and years', () => {
  const rows = ['IM', 'GS', 'OG', 'PE'].map((subject, index) => ({
    id: `QB-PF2026-V0${index < 2 ? 1 : 2}-${subject}-Y2025-0001`,
    bookId: index < 2 ? 'perfect2026-im-gs' : 'perfect2026-pe-og',
    bookSeries: '퍼펙트', examYear: 2025, bookDepartment: subject, specialtySlug: subject,
  }));
  rows.push({ ...rows[0], id: 'other-year', examYear: 2026 }, { ...rows[0], id: 'other-series', bookSeries: '리얼' }, { ...rows[0], id: 'unresolved', examYear: null });
  assert.deepEqual(practiceMockExams(rows).map(({label, count}) => [label, count]), [['P 2026', 1], ['P 2025', 4], ['R 2025', 1]]);
  const selected = rows.filter(q => matchesPractice(q, mockExamFilters('퍼펙트', 2025))).reverse().sort(comparePracticeOrder);
  assert.deepEqual(selected.map(q => q.bookDepartment), ['IM', 'GS', 'OG', 'PE']);
});
 test('book order keeps original subject order and numeric question order', () => {
  const ids = ['QB-RL2019-V01-GS-0001', 'QB-RL2019-V01-IM-0010', 'QB-RL2019-V01-IM-0002'];
  assert.deepEqual(ids.map(id => ({id})).sort(comparePracticeOrder).map(q => q.id), [ids[2], ids[1], ids[0]]);
 });
