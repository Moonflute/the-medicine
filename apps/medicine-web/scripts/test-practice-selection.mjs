import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesPractice, toggleGroup, stringArray } from '../src/lib/practice-selection.ts';

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
