import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [sourcePath, entityId] = process.argv.slice(2);
if (!sourcePath || !entityId) {
  throw new Error("Usage: node import-microbiology-visual.mjs <source-image> <entity-id>");
}

const appRoot = path.resolve(import.meta.dirname, "..");
const outputDir = path.join(appRoot, "public", "images", "microbiology");
const outputPath = path.join(outputDir, `${entityId}.webp`);
fs.mkdirSync(outputDir, { recursive: true });

await sharp(sourcePath)
  .resize(640, 640, { fit: "cover", kernel: sharp.kernel.lanczos3 })
  .webp({ quality: 82, smartSubsample: true })
  .toFile(outputPath);

const metadata = await sharp(outputPath).metadata();
const bytes = fs.statSync(outputPath).size;
console.log(JSON.stringify({ entityId, outputPath, width: metadata.width, height: metadata.height, bytes }));
