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
