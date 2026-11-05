import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const theoryRoot = path.join(workspaceRoot, 'source_notes/99 Q-bank/Theory');

function section(text, heading) {
  return text.split(`## ${heading}\n`)[1]?.split(/\n## /)[0]?.trim() ?? '';
}

export function readTheoryQuestions() {
  return fs.readdirSync(theoryRoot, { recursive: true })
    .filter(file => file.endsWith('.md'))
    .sort()
    .flatMap(file => {
      const text = fs.readFileSync(path.join(theoryRoot, file), 'utf8').replaceAll('\r', '');
      if (!/^type:\s*qbank\s*$/m.test(text)) return [];
      const scalar = key => text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.replace(/^['"]|['"]$/g, '').trim() ?? '';
      return [{
        id: scalar('id'), file: path.posix.join('source_notes/99 Q-bank/Theory', file.replaceAll('\\', '/')),
        specialty: scalar('specialty'), targetType: scalar('target_type'),
        withheld: scalar('publication_status') === 'withheld', answer: scalar('answer'),
        question: section(text, '문제'),
        options: Object.fromEntries([...section(text, '선택지').matchAll(/^([A-D])\.\s+(.+)$/gm)].map(match => [match[1], match[2].trim()])),
        explanation: section(text, '해설'),
        reference: section(text, '출처'),
      }];
    });
}

export function auditTheoryQuestion(item) {
  const correct = item.options[item.answer] ?? '';
  const wrong = Object.entries(item.options).filter(([key]) => key !== item.answer).map(([, text]) => text);
  const avgWrongLength = wrong.reduce((sum, text) => sum + text.length, 0) / Math.max(1, wrong.length);
  const flags = [];
  if (Object.keys(item.options).join('') !== 'ABCD' || !correct || !item.question) flags.push('malformed');
  // Preserve decimals, signs and units: 1.8 and 18 are different answers.
  const normalizedOptions = Object.values(item.options).map(text => text.normalize('NFKC').toLowerCase().replace(/\s+/g, '').replace(/[.!?。]$/u, ''));
  if (new Set(normalizedOptions).size < 4) flags.push('duplicate-options');
  if (correct.length >= 20 && correct.length > avgWrongLength * 1.7) flags.push('long-answer');
  if (wrong.some(text => text.length > 30 && text.length > correct.length * 2.5)) flags.push('long-distractor');
  if (wrong.some(text => /항상|반드시|무조건|전혀|모든 환자|관계없|필요 없다|시행하지 않/.test(text))) flags.push('absolute-distractor');
  const name = item.reference.match(/^- 내부 학습 노트:\s*(.+)$/m)?.[1]?.split(' (')[0]?.replace(/\(.*?\)/g, '').trim();
  if (name?.length >= 3 && item.question.includes(name) && correct.includes(name) && !wrong.some(text => text.includes(name))) flags.push('possible-name-cue');
  return { flags, answerLengthRatio: Number((correct.length / Math.max(1, avgWrongLength)).toFixed(2)) };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const all = readTheoryQuestions();
  const active = all.filter(item => !item.withheld);
  const rows = active.map(item => ({ ...item, ...auditTheoryQuestion(item) }));
  const byFlag = {};
  for (const row of rows) for (const flag of row.flags) byFlag[flag] = (byFlag[flag] ?? 0) + 1;
  console.log(JSON.stringify(process.argv.includes('--all') ? rows : {
    total: all.length, active: active.length, withheld: all.length - active.length,
    flagged: rows.filter(row => row.flags.length).length, byFlag,
  }, null, 2));
}
