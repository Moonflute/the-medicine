import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readTheoryQuestions } from './audit-theory-options.mjs';

// Editing choices invalidates a previous review of choice-specific notes.
// Retain their text in source; only the reviewed main explanation is exported.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const theoryRoot = path.join(root, 'source_notes/99 Q-bank/Theory');
const diff = execFileSync('git', ['-c', 'core.quotepath=false', 'diff', 'HEAD', '--unified=0', '--', 'source_notes/99 Q-bank/Theory'], {
  cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'],
});
const changed = new Set();
let file = '';
for (const line of diff.split('\n')) {
  if (line.startsWith('+++ ')) {
    let value = line.slice(4).split('\t')[0];
    if (value.startsWith('"')) value = JSON.parse(value);
    file = value.replace(/^b\//, '');
  } else if (/^[+-][A-D]\.\s/.test(line)) changed.add(file);
}
const apply = process.argv.includes('--apply');
const retired = [];
for (const [index, question] of readTheoryQuestions().filter(item => !item.withheld).entries()) {
  if (!changed.has(question.file)) continue;
  const target = path.resolve(root, question.file);
  const relative = path.relative(theoryRoot, target);
  if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Target outside theory source');
  const text = fs.readFileSync(target, 'utf8');
  const notes = text.replaceAll('\r', '').split('## 오답 포인트\n')[1]?.split(/\n## /)[0]?.replace(/<!--[\s\S]*?-->/g, '').trim();
  if (!notes || !/^wrong_notes_review_status:\s*reviewed\s*$/m.test(text)) continue;
  if (apply) fs.writeFileSync(target, text.replace(/^wrong_notes_review_status:[^\r\n]*/m, 'wrong_notes_review_status: superseded'), 'utf8');
  retired.push({ n: index + 1, file: question.file });
}
console.log(JSON.stringify({ applied: apply, count: retired.length, retired }));
