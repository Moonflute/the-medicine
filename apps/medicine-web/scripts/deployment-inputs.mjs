import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

export function withoutReleaseVersion(value) {
  const result = structuredClone(value);
  delete result.version;
  if (result.packages?.['']) delete result.packages[''].version;
  return result;
}

export function dependencyCacheKey(lock) {
  return createHash('sha256').update(JSON.stringify(withoutReleaseVersion(lock))).digest('hex');
}

export function needsPhysiologyVerification(files, versionOnlyFiles = new Set()) {
  // Fail closed: only a narrowly scoped Atlas-only change can skip this suite.
  return files.length === 0 || files.some(file => !versionOnlyFiles.has(file) && !(
    file.startsWith('packages/organ-atlas/') ||
    file.startsWith('apps/medicine-web/src/app/atlas/') ||
    file.startsWith('apps/medicine-web/public/organ-atlas/') ||
    /^apps\/medicine-web\/scripts\/(?:build-organ-atlas|test-atlas-[^/]+|serve-atlas-export)\.mjs$/.test(file)
  ));
}

function main() {
  const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const root = path.resolve(app, '../..');
  const lock = JSON.parse(fs.readFileSync(path.join(app,'package-lock.json'),'utf8'));
  let physiology = true;
  if (process.env.GITHUB_EVENT_NAME === 'push' && process.env.GITHUB_EVENT_PATH) {
    const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH,'utf8'));
    const before = event.before;
    if (/^[a-f0-9]{40}$/.test(before ?? '') && !/^0+$/.test(before)) {
      try {
        const git = args => execFileSync('git', args, {cwd:root, encoding:'utf8',stdio:['ignore','pipe','pipe']});
        const files = git(['diff','--name-only','-z',before,'HEAD']).split('\0').filter(Boolean);
        const versionOnlyFiles = new Set();
        for (const file of files.filter(file => /^apps\/medicine-web\/package(?:-lock)?\.json$/.test(file))) {
          const previous = JSON.parse(git(['show',`${before}:${file}`]));
          const current = JSON.parse(fs.readFileSync(path.join(root,file),'utf8'));
          if (JSON.stringify(withoutReleaseVersion(previous)) === JSON.stringify(withoutReleaseVersion(current))) versionOnlyFiles.add(file);
        }
        physiology = needsPhysiologyVerification(files,versionOnlyFiles);
      } catch {
        console.log('Previous revision unavailable; running the complete physiology suite.');
      }
    }
  }
  const output = `dependency-key=${dependencyCacheKey(lock)}\nphysiology=${physiology}\n`;
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT,output);
  console.log(output.trim());
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
