import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { MarkdownManager } from '@tiptap/markdown';
import StarterKit from '@tiptap/starter-kit';
import { TableKit } from '@tiptap/extension-table';
import { TaskList, TaskItem } from '@tiptap/extension-list';
import { PILOT_PATHS, splitSource } from '../src/lib/document-edit-core.ts';
const manager = new MarkdownManager({ extensions: [StarterKit.configure({ heading: false, codeBlock: false, horizontalRule: false }), TableKit, TaskList, TaskItem] });
for (const file of PILOT_PATHS) test(`editable Markdown survives Tiptap round trip: ${file}`, () => {
  const source = fs.readFileSync(path.resolve('../..', file), 'utf8');
  for (const block of splitSource(source, file).blocks.filter(b => b.editable)) {
    const parsed = manager.parse(block.raw);
    assert.deepEqual(manager.parse(manager.serialize(parsed)), parsed, block.raw);
  }
});
test('table, nested list, checklist and inline formatting round trip', () => {
  for (const md of ['| Name | Value |\n| --- | --- |\n| A | **B** |', '- A\n  - B', '- [ ] A\n- [x] B', '**bold** and *italic* and `code`']) {
    const parsed = manager.parse(md);
    assert.deepEqual(manager.parse(manager.serialize(parsed)), parsed);
  }
});
