import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PILOT_PATHS, splitSource, replaceBlocks, isEditablePath, assertEditor, EDITOR_USER_ID } from '../src/lib/document-edit-core.ts';

test('all editable document trees preserve their complete source', () => {
  let count = 0;
  for (const dir of ['01 Chief Complaint', '02 Diseases', '04 Pharmacology', '06 Lab & Img', '07 Skills', '99 Q-bank']) {
    const folder = path.resolve('../..', 'source_notes', dir);
    for (const relative of fs.readdirSync(folder, { recursive: true })) {
      if (!relative.endsWith('.md')) continue;
      const full = path.join(folder, relative);
      const sourcePath = path.relative(path.resolve('../..'), full).replaceAll('\\', '/');
      assert.ok(isEditablePath(sourcePath), sourcePath);
      const source = fs.readFileSync(full, 'utf8');
      assert.equal(replaceBlocks(source, [], sourcePath), source);
      if (source.trim()) assert.equal(replaceBlocks(source, [{index: -1, markdown: source}], sourcePath), source);
      count++;
    }
  }
  assert.ok(count > 5000);
  console.log(`Verified ${count} Markdown documents across editable trees`);
});

test('raw body edits preserve metadata and reject traversal', () => {
  for (const p of ['source_notes/07 Skills/../x.md', 'source_notes/02 Diseases/%2e%2e/x.md', 'source_notes/04 Pharmacology//x.md', 'source_notes/01 Chief Complaint/x.md?ref=x']) assert.equal(isEditablePath(p), false);
  const source = '---\na: 1\n---\n# Title\n\n[[target]]\n';
  const edited = source.replace('[[target]]', '[[other|label]]');
  assert.equal(replaceBlocks(source, [{index:-1,markdown:edited}]), edited);
  assert.throws(() => replaceBlocks(source, [{index:-1,markdown:source.replace('a: 1','a: 2')}]));
  assert.throws(() => replaceBlocks(source, [{index:-1,markdown:''}]));
});

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
  assert.equal(isEditablePath('../.github/workflows/deploy.yml'), false);
  assert.equal(isEditablePath(PILOT_PATHS[0] + '/../../secret'), false);
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
