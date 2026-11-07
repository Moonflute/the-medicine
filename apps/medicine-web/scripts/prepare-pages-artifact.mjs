import fs from 'node:fs/promises';
import path from 'node:path';
import {appRoot,sourceImages,optimizedRelativePath} from './build-optimized-images.mjs';

// Only generated export copies are omitted; source PNGs and review hashes stay intact.
const out=path.join(appRoot,'out');
if((await fs.lstat(out)).isSymbolicLink() || await fs.realpath(out)!==out) throw new Error('Export directory must be local to this app.');
let omittedBytes=0;
for(const relative of await sourceImages()) {
  const replacement=path.join(out,optimizedRelativePath(relative));
  const original=path.join(out,relative);
  await fs.access(replacement);
  try {
    const info=await fs.lstat(original);
    if(!info.isFile() || !path.relative(out,original).startsWith('images'+path.sep)) throw new Error('Invalid generated image path.');
    await fs.unlink(original);
    omittedBytes+=info.size;
  } catch(error) {if(error.code!=='ENOENT')throw error;}
}

const totals=new Map();
let totalBytes=0,files=0;
async function scan(directory) {
  for(const entry of await fs.readdir(directory,{withFileTypes:true})) {
    const file=path.join(directory,entry.name);
    if(entry.isSymbolicLink())throw new Error(`Pages cannot publish symlinks: ${file}`);
    if(entry.isDirectory()){await scan(file);continue;}
    const size=(await fs.stat(file)).size;
    const group=path.relative(out,file).split(path.sep)[0];
    totals.set(group,(totals.get(group)??0)+size);totalBytes+=size;files++;
  }
}
await scan(out);
const rows=[...totals].sort((a,b)=>b[1]-a[1]).slice(0,12);
console.log(JSON.stringify({exportBytes:totalBytes,files,omittedOriginalImageCopies:omittedBytes,largestDirectories:rows},null,2));
if(process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY,
  `## Pages artifact\n\n${files.toLocaleString()} files · ${(totalBytes/1e6).toFixed(1)} MB (uncompressed)\n\n| Directory | MB |\n|---|---:|\n${rows.map(([name,size])=>`| ${name} | ${(size/1e6).toFixed(1)} |`).join('\n')}\n`);
if(totalBytes>1_000_000_000) throw new Error('Published site exceeds the 1 GB Pages limit; reduce the export before uploading.');
