// Package the approved generated art; source PNGs stay unchanged.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const directory = path.dirname(fileURLToPath(import.meta.url));
for (const name of ["mushroom", "ghost", "golem", "skeleton", "bat", "goblin"]) {
  const source = path.join(directory, "v2", `${name}.png`);
  const target = path.resolve(directory, "../../public/themes/pixel", `${name}-v2.webp`);
  const meta = await sharp(source).metadata();
  if (meta.width !== meta.height || !meta.hasAlpha) throw new Error(`Expected a transparent square 4×4 sheet: ${name}`);
  await sharp(source).resize(512, 512, { kernel: "nearest" }).webp({ lossless: true, effort: 6 }).toFile(target);
  console.log(`${name}: 16 cels, 128px each; ${fs.statSync(target).size} bytes`);
}
