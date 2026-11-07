import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

export const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const imageDirectories = ['images/physiology', 'images/imaging'];
export const optimizedRelativePath = relative => `optimized-images/${relative.replace(/\.png$/, '.webp')}`;

export async function sourceImages() {
  const images = [];
  for (const directory of imageDirectories) {
    for (const entry of await fs.readdir(path.join(appRoot,'public',directory),{withFileTypes:true})) {
      if (entry.isFile() && entry.name.endsWith('.png')) images.push(`${directory}/${entry.name}`);
    }
  }
  return images.sort();
}

export async function verifyLosslessImage(original, optimized, name) {
  const a = await sharp(original).metadata();
  const b = await sharp(optimized).metadata();
  if (a.depth !== 'uchar' || a.pages > 1 || a.width !== b.width || a.height !== b.height || (a.orientation ?? 1) !== (b.orientation ?? 1)) {
    throw new Error(`Image dimensions, bit depth or orientation cannot be preserved: ${name}`);
  }
  const pixels = async bytes => {
    const rgba = await sharp(bytes).toColourspace('srgb').ensureAlpha().raw().toBuffer();
    // WebP may discard invisible RGB values under fully transparent pixels.
    for(let i=0;i<rgba.length;i+=4) if(rgba[i+3]===0) rgba.fill(0,i,i+3);
    return rgba;
  };
  const [left,right] = await Promise.all([pixels(original),pixels(optimized)]);
  if (!left.equals(right)) throw new Error(`Lossless image pixel comparison failed: ${name}`);
}

export async function buildOptimizedImages() {
  const images = await sourceImages();
  const cache = path.join(appRoot,'.next/cache/optimized-images');
  await fs.mkdir(cache,{recursive:true});
  let inputBytes=0,outputBytes=0,cached=0,cursor=0;
  const worker = async () => {
    while(cursor<images.length) {
      const relative=images[cursor++];
      const original=await fs.readFile(path.join(appRoot,'public',relative));
      const key=createHash('sha256').update('lossless-v1:'+sharp.versions.sharp+':'+sharp.versions.vips).update(original).digest('hex');
      const cachePath=path.join(cache,`${key}.webp`);
      let optimized;
      try { optimized=await fs.readFile(cachePath); cached++; } catch(error) { if(error.code!=='ENOENT')throw error; }
      if(!optimized) {
        optimized=await sharp(original).keepMetadata().webp({lossless:true,effort:3}).toBuffer();
        await verifyLosslessImage(original,optimized,relative);
        await fs.writeFile(cachePath,optimized);
      }
      const destination=path.join(appRoot,'public',optimizedRelativePath(relative));
      await fs.mkdir(path.dirname(destination),{recursive:true});
      await fs.writeFile(destination,optimized);
      inputBytes+=original.length;outputBytes+=optimized.length;
    }
  };
  await Promise.all([worker(),worker()]);
  console.log(`Lossless images: ${images.length} files, ${inputBytes} -> ${outputBytes} bytes (${cached} cached). Originals retained.`);
  return {images:images.length,inputBytes,outputBytes,cached};
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) await buildOptimizedImages();
