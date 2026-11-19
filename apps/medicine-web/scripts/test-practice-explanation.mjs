import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

function compile(name, dependencies = {}) {
  const mod = { exports: {} };
  const source = fs.readFileSync(new URL(`../src/lib/${name}.ts`, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(compiled, { module: mod, exports: mod.exports, require: name => dependencies[name] });
  return mod.exports;
}
const grading = compile('qbank-grading');
const { practiceExplanationText } = compile('practice-explanation', { './qbank-grading': grading });
const { reflowOcrText } = compile('ocr-paragraphs');
const base = { questionBank: 'practice', options: { A: '검사 하나', B: '검사 둘', C: '검사 셋', D: '검사 넷', E: '검사 다섯' }, answer: 'C' };
const format = (explanation, fields = {}) => practiceExplanationText({ ...base, explanation, ...fields });

test('numeric, letter and bold colon commentary uses the exact stored option', () => {
  const source = '1: 첫 번째 설명\n- **2:** 두 번째 설명\nC: 세 번째 설명\nD/E: 공통 설명';
  const result = format(source);
  assert.equal(result, '**A. 검사 하나**\n\n첫 번째 설명\n**B. 검사 둘**\n\n두 번째 설명\n**C. 검사 셋**\n\n세 번째 설명\n**D. 검사 넷**\n**E. 검사 다섯**\n\n공통 설명');
  for (const body of ['첫 번째 설명', '두 번째 설명', '세 번째 설명', '공통 설명']) assert.ok(result.includes(body));
});

test('circled numbers require an option-commentary section and grouped notes keep one explanation', () => {
  const result = format('정답 및 해설 ③ 정답 이유\n오답피하기\n①, ⑤ 공통 이유\n② 다른 이유\n［ 심화해설 ］\n① 치료 단계');
  assert.match(result, /정답 및 해설\n\n\*\*C\. 검사 셋\*\*\n\n정답 이유/);
  assert.match(result, /\*\*A\. 검사 하나\*\*\n\*\*E\. 검사 다섯\*\*\n\n공통 이유/);
  assert.equal((result.match(/공통 이유/g) ?? []).length, 1);
  assert.ok(result.endsWith('① 치료 단계'));
});

test('diagnostic criteria, treatment steps, figure panels, organisms and ratios are not option labels', () => {
  const source = '치료\n① 첫 단계\n② 둘째 단계\n1) 수술\n2. 추적\nA. 횡단면\nB. 종단면\nC. difficile\n3:1 비율\n1.3 cm 크기';
  assert.equal(format(source), source);
  assert.equal(format('오답 해설\n① 다른 설명\n1) 근거 첫째\n2) 근거 둘째').includes('**B. 검사 둘**'), false);
});

test('mismatched answers, missing options and duplicate references are left untouched', () => {
  for (const source of ['정답 및 해설 ① 다른 정답 번호', '오답해설\n③ 정답에 붙은 오답 번호', 'F: 없는 보기', '6: 없는 보기', 'A/A: 중복 번호', 'E: 빈 보기']) {
    assert.equal(format(source, { options: { ...base.options, E: '' } }), source);
  }
  assert.equal(format('정답 및 해설 ① 확인 불가', { answer: null }), '정답 및 해설 ① 확인 불가');
});

test('a correct-answer explanation does not relabel a subsequent numbered algorithm', () => {
  const result = format('정답 및 해설 ③ 정답 근거\n① 첫 평가\n② 둘째 평가\n③ 셋째 평가');
  assert.equal((result.match(/\*\*C\./g) ?? []).length, 1);
  assert.ok(result.endsWith('① 첫 평가\n② 둘째 평가\n③ 셋째 평가'));
  assert.equal(format(result), result);
});

test('tables, code, other-bank explanations and a separate example are preserved', () => {
  const source = '| 번호 | 내용 |\n|---|---|\n| 1: | 설명 |\n```\nA: text\n```';
  assert.equal(format(source), source);
  assert.equal(format('1: 내용', { questionBank: 'clinical' }), '1: 내용');
  assert.equal(format('1: 내용', { questionBank: 'theory' }), '1: 내용');
  const example = '오답해설\n① 기존 보기 해설\n다음 처치는? 2016 기출\n① 다른 문제의 보기';
  assert.ok(format(example).endsWith('① 다른 문제의 보기'));
});

test('reformatting is idempotent and OCR reflow keeps each added heading on its own line', () => {
  const source = '오답해설\n① 설명 첫째\n② 설명 둘째';
  const once = format(source);
  assert.equal(format(once), once);
  assert.match(reflowOcrText(once), /\*\*A\. 검사 하나\*\*\n\n설명 첫째\n\*\*B\. 검사 둘\*\*\n\n설명 둘째/);
});

test('year rounds, authored mocks and revisions use the same presentation without modifying payloads', () => {
  for (const id of ['QB-PF2026-V01-IM-Y2026-0001', 'QB-MOCK-F01-GS-0031', 'QB-REV-202611-PF2026-V01-GS-BANK-0005']) {
    const question = { ...base, id, explanation: '2: 설명' };
    const before = JSON.stringify(question);
    assert.equal(practiceExplanationText(question), '**B. 검사 둘**\n\n설명');
    assert.equal(JSON.stringify(question), before);
  }
});

test('a separate image scenario keeps its own labels even after nested answer headings', () => {
  const extra = '[추가: 다른 영상 상황의 원문 해설]\n아래 번호는 별도 원문 보기의 번호입니다.\n정답 및 해설 ① 다른 영상의 정답\n오답피하기 ② 다른 영상의 오답\n③ 다른 영상의 보기\nA: 별도 보기 설명';
  const result = format('정답 및 해설 ③ 본문항 설명\n\n' + extra);
  assert.ok(result.endsWith(extra));
  assert.equal((result.match(/\*\*[A-E]\./g) ?? []).length, 1);
  assert.equal(format(result), result);
});

test('an embedded past-exam example cannot borrow the current question options', () => {
  const extra = '다음 처치는? 2020 기출변형\n① 별도 보기 하나 ② 별도 보기 둘\n③ 별도 보기 셋\n정답 및 해설 ① 예제의 정답 이유\n오답피하기\n② 예제의 오답 이유\n3: 예제의 설명';
  const result = format('오답피하기\n① 본문항 오답 설명\n' + extra);
  assert.ok(result.endsWith(extra));
  assert.equal((result.match(/\*\*[A-E]\./g) ?? []).length, 1);
});

test('explicit example scope ends at a main explanation, not at its own option commentary', () => {
  const extra = '[추가 예제: 본문항과 다른 보기 번호]\n① 별도 보기\n정답 및 해설 ① 예제 해설\n오답피하기\n② 예제 오답';
  for (const boundary of ['[본문항 해설 보충]', '[해설 2]']) {
    const result = format(extra + '\n' + boundary + '\n보기별 해설\n① 본문항 보기 설명');
    assert.ok(result.startsWith(extra));
    assert.ok(result.endsWith('**A. 검사 하나**\n\n본문항 보기 설명'));
    assert.equal(format(result), result);
  }
});

test('reviewed source headings keep the first wrong option and grouped commentary together', () => {
  const result = format('정답 및 해설\n세 번째 검사가 필요한 이유입니다.\n\n오답피하기\n① ② 두 검사가 불필요한 이유입니다.\n④ 다른 검사가 불필요한 이유입니다.');
  assert.match(result, /오답피하기\n\*\*A\. 검사 하나\*\*\n\*\*B\. 검사 둘\*\*\n\n두 검사가 불필요한 이유입니다\./);
  assert.ok(result.endsWith('**D. 검사 넷**\n\n다른 검사가 불필요한 이유입니다.'));
});
