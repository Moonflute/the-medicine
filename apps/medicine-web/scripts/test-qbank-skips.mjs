import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

const compiledModule = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync(new URL('../src/lib/qbank-skips.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, { module: compiledModule, exports: compiledModule.exports });
const { readQbankSkipState, markQbankSkipped, resolveQbankSkipped, qbankPassIndex } = compiledModule.exports;
const ids = ['theory-a', 'clinical-b', 'practice-c', 'theory-d'];

test('the first pass follows the original set and stops after the final question', () => {
  let state = readQbankSkipState(null, ids);
  state = markQbankSkipped(state, ids[0]);
  assert.equal(qbankPassIndex(ids, 0, state), 1);
  assert.equal(qbankPassIndex(ids, 2, state), 3);
  state = markQbankSkipped(state, ids[3]);
  assert.equal(qbankPassIndex(ids, 3, state), -1);
  assert.equal(JSON.stringify(state.ids), JSON.stringify([ids[0], ids[3]]));
});

test('review visits only skipped questions, even across mixed banks, in original order', () => {
  const state = readQbankSkipState({ ids: [ids[3], ids[0]], reviewing: true }, ids);
  assert.equal(qbankPassIndex(ids, -1, state), 0);
  assert.equal(qbankPassIndex(ids, 0, state), 3);
  assert.equal(qbankPassIndex(ids, 3, state, -1), 0);
  assert.equal(qbankPassIndex(ids, 3, state), -1);
});

test('submitting one skipped answer removes only that question; repeat skips do not duplicate it', () => {
  let state = readQbankSkipState({ ids, reviewing: true }, ids);
  state = resolveQbankSkipped(state, ids[1]);
  state = markQbankSkipped(markQbankSkipped(state, ids[2]), ids[2]);
  assert.equal(state.ids.length, 3);
  assert.equal(qbankPassIndex(ids, 0, state), 2);
  for (const id of state.ids) state = resolveQbankSkipped(state, id);
  assert.equal(state.ids.length, 0);
  assert.equal(qbankPassIndex(ids, -1, state), -1);
});

test('a single repeatedly skipped question offers another pass rather than looping automatically', () => {
  const state = markQbankSkipped(readQbankSkipState({ reviewing: true }, ['one']), 'one');
  assert.equal(qbankPassIndex(['one'], 0, state), -1);
  assert.equal(qbankPassIndex(['one'], -1, state), 0);
  assert.equal(qbankPassIndex(['one'], 0, state, -1), -1);
});

test('malformed, duplicate and foreign IDs never enter a restored skip queue', () => {
  const state = readQbankSkipState({ ids: [null, 4, ids[0], ids[0], 'outside', ids[1]], reviewing: 'true', passComplete: 1 }, ids, [ids[1]]);
  assert.equal(JSON.stringify(state), JSON.stringify({ ids: [ids[0]], reviewing: false, passComplete: false }));
  assert.equal(readQbankSkipState({ ids: {} }, ids).ids.length, 0);
});
