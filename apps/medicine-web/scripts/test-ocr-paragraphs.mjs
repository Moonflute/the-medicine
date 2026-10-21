import test from 'node:test';
import assert from 'node:assert/strict';
import {reflowOcrText as reflow} from '../src/lib/ocr-paragraphs.ts';
test('reflows prose and split Korean endings',()=>{
 assert.equal(reflow('병원에\n왔다.'),'병원에 왔다.');
 assert.equal(reflow('의료\n인이 진\n단한\n다.'),'의료인이 진단한다.');
});
test('preserves paragraphs, bullets and result rows',()=>{
 const value='해설\n설명이다.\n\n• 첫 항목\n• 둘째 항목\nWBC 8,000/mm3\nHb 12 g/dL';
 assert.equal(reflow(value),value);
});
test('preserves numeric table rows',()=>{
 const value='Region BMD T-score\nL1 0.730 -2.8\nL2 0.801 -2.7';
 assert.equal(reflow(value),value);
});
test('joins narrative mentioning a lab without a result row',()=>{
 assert.equal(reflow('발열과\nCRP 상승이 있다.'),'발열과 CRP 상승이 있다.');
});

test("preserves all table rows and their boundaries without changing cell content", () => {
  const table = "| 항목 | 값 |\n| --- | --- |\n| Sodium | 130 |\n| Potassium | 4 |";
  const text = `검사 설명\n${table}\n표 다음 설명`;
  const result = reflow(text);
  assert.ok(result.includes(`\n${table}\n`));
  assert.equal(result.replace(/\s/g, ""), text.replace(/\s/g, ""));
});

test("preserves multiple tables, compact dividers and CRLF line endings", () => {
  const table = "| A | B |\n|:---|---:|\n| 273 | 130 |";
  const input = `${table}\n\n설명\n${table}`.replace(/\n/g, "\r\n");
  assert.equal(reflow(input).split(table).length - 1, 2);
});

test("ordinary OCR prose and non-table pipe fragments keep existing reflow behavior", () => {
  assert.equal(reflow("검사 설명이\n이어진다"), "검사 설명이 이어진다");
  assert.equal(reflow("알고리즘 | 일부 |\n이어서 설명"), "알고리즘 | 일부 | 이어서 설명");
});
