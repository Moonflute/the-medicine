import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesPractice, toggleGroup, stringArray, comparePracticeOrder } from '../src/lib/practice-selection.ts';

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
 test('book order keeps original subject order and numeric question order', () => {
  const ids = ['QB-RL2019-V01-GS-0001', 'QB-RL2019-V01-IM-0010', 'QB-RL2019-V01-IM-0002'];
  assert.deepEqual(ids.map(id => ({id})).sort(comparePracticeOrder).map(q => q.id), [ids[2], ids[1], ids[0]]);
 });
