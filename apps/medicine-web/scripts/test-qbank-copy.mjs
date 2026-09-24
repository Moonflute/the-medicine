import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

function compile(name, deps = {}) {
  const module = { exports: {} };
  const source = fs.readFileSync(new URL(`../src/lib/${name}`, import.meta.url), 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(output, { module, exports: module.exports, require: (id) => deps[id] });
  return module.exports;
}

const grading = compile('qbank-grading.ts');
const options = compile('qbank-option-order.ts');
const ocr = compile('ocr-paragraphs.ts');
const { qbankQuestionCopyText, qbankExplanationCopyText, qbankCombinedCopyText } = compile('qbank-copy.ts', {
  './qbank-grading': grading,
  './qbank-option-order': options,
  './ocr-paragraphs': ocr,
});

const question = {
  id: 'test', sourceSplit: 'train', questionBank: 'theory',
  question: '가장 적절한 치료는?', options: { A: '첫 번째', B: '두 번째', C: '세 번째' },
  answer: 'A', explanation: '첫 번째가 정답인 이유입니다.',
};

test('normal question copy follows shuffled on-screen option labels', () => {
  assert.equal(qbankQuestionCopyText(question, ['C', 'A', 'B']), '가장 적절한 치료는?\nA. 세 번째\nB. 첫 번째\nC. 두 번째');
  assert.equal(qbankExplanationCopyText(question, ['C', 'A', 'B']), '정답: B\n\n첫 번째가 정답인 이유입니다.');
  assert.equal(qbankCombinedCopyText(question, ['C', 'A', 'B']), '가장 적절한 치료는?\nA. 세 번째\nB. 첫 번째\nC. 두 번째\n\n정답: B\n\n첫 번째가 정답인 이유입니다.');
});

test('mock exam copy keeps source option labels', () => {
  assert.equal(qbankQuestionCopyText(question, ['C', 'A', 'B'], 'source'), '가장 적절한 치료는?\nC. 세 번째\nA. 첫 번째\nB. 두 번째');
  assert.equal(qbankExplanationCopyText(question, ['C', 'A', 'B'], 'source'), '정답: A\n\n첫 번째가 정답인 이유입니다.');
});

test('scan copy uses the same reflowed text as the page', () => {
  const scan = { ...question, sourceSplit: 'private-scan', question: '환자는\n기침을 호소한다.', explanation: '폐렴을\n고려한다.' };
  assert.equal(qbankQuestionCopyText(scan, ['A']), `${ocr.reflowOcrText(scan.question)}\nA. 첫 번째`);
  assert.equal(qbankExplanationCopyText(scan, ['A']), `정답: A\n\n${ocr.reflowOcrText(scan.explanation)}`);
});

test('ungraded and missing-explanation items remain meaningful', () => {
  const ungraded = { ...question, answer: null, ungradedReason: '정답 자료 없음', explanation: '' };
  assert.equal(qbankExplanationCopyText(ungraded, ['A']), '정답 자료 없음\n\n검증된 해설은 아직 준비되지 않았습니다.');
});
