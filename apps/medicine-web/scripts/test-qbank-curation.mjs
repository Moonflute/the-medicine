import assert from 'node:assert/strict';
import test from 'node:test';
import { qbankSection, qbankExplanation, updatedQbankManifest } from './sync-generated-data.mjs';

const body = '# 문제\n\n## 문제\n질문\n\n## 해설\n근거\n\n## 오답 포인트\n- **B. 약물명:** 다른 기전이다.\n\n## 검수 근거\nhttps://example.org';
test('exact section boundaries, without including review references', () => {
  assert.equal(qbankSection(body, '해설'), '근거');
  assert.equal(qbankSection('## 해설 보충\nnot the explanation', '해설'), '');
  assert.equal(qbankSection(body.replaceAll('\n', '\r\n'), '문제'), '질문');
});
test('unreviewed wrong-option notes stay unpublished', () => {
  assert.equal(qbankExplanation(body, { explanation_status: 'machine-generated' }), '근거');
});
test('reviewed wrong-option notes use text instead of shuffled labels', () => {
  const text = qbankExplanation(body, { explanation_status: 'verified', wrong_notes_review_status: 'reviewed' });
  assert.equal(text, '근거\n\n오답 포인트\n- **약물명:** 다른 기전이다.');
  assert.ok(!text.includes('https://'));
});
test('unapproved explanations remain hidden', () => {
  assert.equal(qbankExplanation(body, { explanation_status: 'pending', wrong_notes_review_status: 'reviewed' }), '');
});
test('manually corrected clinical explanations are exported', () => {
  assert.equal(qbankExplanation(body, { explanation_status: 'manual-reviewed' }), '근거');
});
test('qbank-only count refresh preserves unrelated manifest domains', () => {
  const original={generatedAt:'full-sync',domains:{diseases:{count:12},qbank:{count:99,custom:'preserve'}}};
  const result=updatedQbankManifest(original,51,'qbank-sync');
  assert.equal(result.generatedAt,'full-sync');
  assert.deepEqual(result.domains.diseases,original.domains.diseases);
  assert.equal(result.domains.qbank.count,51);
  assert.equal(result.domains.qbank.generatedAt,'qbank-sync');
  assert.equal(result.domains.qbank.custom,'preserve');
  assert.equal(original.domains.qbank.count,99);
});
