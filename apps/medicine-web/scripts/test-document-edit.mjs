import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PILOT_PATHS, splitSource, replaceBlocks, isPilotPath, assertEditor, EDITOR_USER_ID } from '../src/lib/document-edit-core.ts';

for (const sourcePath of PILOT_PATHS) {
  test(`no-op and isolated edit preserve original bytes: ${sourcePath}`, () => {
    const source = fs.readFileSync(path.resolve('../..', sourcePath), 'utf8');
    const document = splitSource(source);
    assert.equal(document.prefix + document.blocks.map(b => b.raw).join(''), source);
    assert.equal(replaceBlocks(source, []), source);
    const index = document.blocks.findIndex(b => b.editable);
    assert.ok(index >= 0);
    assert.equal(replaceBlocks(source, [{ index, markdown: document.blocks[index].raw }]), source);
    const expected = document.prefix + document.blocks.map((b, i) => i === index ? b.raw.replace(/\S/, 'X') : b.raw).join('');
    assert.equal(replaceBlocks(source, [{ index, markdown: document.blocks[index].raw.replace(/\S/, 'X') }]), expected);
  });
}
test('BOM, CRLF, frontmatter, wiki links, fenced blocks and no final newline survive', () => {
  const source = '\uFEFF---\r\na: [1, 2]\r\n---\r\n# title\r\n\r\n[[target|alias]]\r\n\r\n```md\r\n\r\nsecret\r\n```\r\n\r\nplain';
  assert.equal(replaceBlocks(source, []), source);
  const doc = splitSource(source);
  assert.equal(doc.blocks.filter(b => b.editable).length, 1);
  assert.throws(() => replaceBlocks(source, [{ index: 0, markdown: 'changed' }]));
  assert.throws(() => splitSource('---\ninvalid'));
});
test('only exact pilot paths and verified Google owner are allowed', () => {
  assert.equal(isPilotPath('../.github/workflows/deploy.yml'), false);
  assert.equal(isPilotPath(PILOT_PATHS[0] + '/../../secret'), false);
  assert.throws(() => assertEditor(null));
  assert.throws(() => assertEditor({ id: 'other', app_metadata: { providers: ['google'] } }));
  assert.throws(() => assertEditor({ id: EDITOR_USER_ID, app_metadata: { providers: ['email'] } }));
  assert.doesNotThrow(() => assertEditor({ id: EDITOR_USER_ID, app_metadata: { providers: ['google'] } }));
});
test('invalid edits fail closed', () => {
  const source = 'plain\n';
  for (const markdown of ['# heading', '[[new]]', '<script>bad</script>', '', '---\nmetadata']) assert.throws(() => replaceBlocks(source, [{ index: 0, markdown }]));
  assert.throws(() => replaceBlocks(source, [{ index: 0, markdown: 'a' }, { index: 0, markdown: 'b' }]));
});
