import assert from 'node:assert/strict';
import test from 'node:test';
import { auditTheoryQuestion } from './audit-theory-options.mjs';

const item = options => ({ question: 'Which value?', answer: 'A', options, reference: '' });
test('numeric values retain decimals, signs and units', () => {
  assert.ok(!auditTheoryQuestion(item({ A: '1.8', B: '18', C: '-1.8', D: '1.8 mg' })).flags.includes('duplicate-options'));
});
test('equivalent whitespace and terminal punctuation do not hide duplicates', () => {
  assert.ok(auditTheoryQuestion(item({ A: 'one value', B: 'one value.', C: 'other', D: 'last' })).flags.includes('duplicate-options'));
});
test('missing choices are structural errors', () => {
  assert.ok(auditTheoryQuestion(item({ A: 'one', B: 'two', C: 'three' })).flags.includes('malformed'));
});
