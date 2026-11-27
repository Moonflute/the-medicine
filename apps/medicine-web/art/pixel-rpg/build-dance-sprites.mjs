// Pack generated eight-cel dances with the unchanged v2 attack/hit cels.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const directory = path.dirname(fileURLToPath(import.meta.url));
const frameSize = 128;
for (const name of ["mushroom", "ghost", "golem", "skeleton", "bat", "goblin"]) {
  const source = path.join(directory, "v3", `${name}.png`);
  const metadata = await sharp(source).metadata();
  if (metadata.width !== metadata.height || !metadata.hasAlpha) throw new Error(`Expected a transparent square 4×4 dance sheet: ${name}`);
  const dance = await sharp(source).resize(512, 512, { kernel: "nearest" }).png().toBuffer();
  const combat = path.resolve(directory, "../../public/themes/pixel", `${name}-v2.webp`);
  const cels = [];
  for (let index = 0; index < 16; index++) {
    let cel = await sharp(dance).extract({ left: (index % 4) * frameSize, top: Math.floor(index / 4) * frameSize, width: frameSize, height: frameSize }).toBuffer();
    if (name !== "bat" && name !== "ghost") {
      // Register the generated feet to one baseline without rescaling or redrawing any pixels.
      const pixels = await sharp(cel).ensureAlpha().raw().toBuffer();
      let bottom = -1;
      for (let y = 0; y < frameSize; y++) for (let x = 0; x < frameSize; x++) {
        if (pixels[(y * frameSize + x) * 4 + 3] > 200) bottom = y;
      }
      if (bottom < 0) throw new Error(`Empty dance cel: ${name} ${index}`);
      const offset = 116 - bottom;
      if (Math.abs(offset) > 8) throw new Error(`Unexpected ground alignment: ${name} ${index}`);
      if (offset) cel = await sharp(cel).extract({ left: 0, top: Math.max(0, -offset), width: frameSize, height: frameSize - Math.abs(offset) }).extend({ top: Math.max(0, offset), bottom: Math.max(0, -offset), left: 0, right: 0, background: "#00000000" }).toBuffer();
    }
    cels.push({
      input: cel,
      left: (index % 8) * frameSize,
      top: Math.floor(index / 8) * frameSize,
    });
  }
  for (let row = 0; row < 2; row++) {
    cels.push({
      input: await sharp(combat).extract({ left: 0, top: (row + 1) * frameSize, width: frameSize * 4, height: frameSize }).png().toBuffer(),
      left: 0,
      top: (row + 2) * frameSize,
    });
  }
  const target = path.resolve(directory, "../../public/themes/pixel", `${name}-v3.webp`);
  await sharp({ create: { width: frameSize * 8, height: frameSize * 4, channels: 4, background: "#00000000" } }).composite(cels).webp({ lossless: true, effort: 6 }).toFile(target);
  console.log(`${name}: 8 calm + 8 stern + 4 attack + 4 hit cels; ${fs.statSync(target).size} bytes`);
}
