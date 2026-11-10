// Original Medicine Quest pixel art. Rebuild editable cels, then export with LibreSprite.
// Native file format: https://github.com/aseprite/aseprite/blob/main/docs/ase-file-specs.md
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";
import { spawnSync } from "node:child_process";

const directory = path.dirname(fileURLToPath(import.meta.url));
const size = 32;
const palette = {
  outline: "#18283d", shadow: "#142237", skin: "#f6ce9d", shade: "#d39c7e",
  hair: "#41546a", white: "#fff7dc", coat: "#dce9d3", seam: "#98b7a8",
  mint: "#77d6a4", green: "#3d987c", dark: "#246658", gold: "#f4ce72",
};
function canvas() {
  const pixels = Buffer.alloc(size * size * 4);
  const dot = (x, y, color) => {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    const hex = palette[color] ?? color;
    const offset = (y * size + x) * 4;
    pixels[offset] = parseInt(hex.slice(1, 3), 16);
    pixels[offset + 1] = parseInt(hex.slice(3, 5), 16);
    pixels[offset + 2] = parseInt(hex.slice(5, 7), 16);
    pixels[offset + 3] = 255;
  };
  const rect = (x, y, w, h, color) => {
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) dot(x + i, y + j, color);
  };
  const line = (x1, y1, x2, y2, color, width = 1) => {
    const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1), 1);
    for (let i = 0; i <= steps; i++) rect(Math.round(x1 + (x2 - x1) * i / steps) - Math.floor(width / 2), Math.round(y1 + (y2 - y1) * i / steps) - Math.floor(width / 2), width, width, color);
  };
  const stamp = (rows, x, y, colors) => rows.forEach((row, j) => [...row].forEach((key, i) => { if (colors[key]) dot(x + i, y + j, colors[key]); }));
  const star = (x, y) => { line(x - 2, y, x + 2, y, "gold"); line(x, y - 2, x, y + 2, "gold"); dot(x, y, "white"); };
  return { pixels, dot, rect, line, stamp, star };
}

// Hips lead, head follows a frame later. Feet stay on the same floor throughout dance.
const beat = [
  { hip: -1, head: 0, down: 0 }, { hip: -2, head: -1, down: 1 },
  { hip: -1, head: -2, down: 2 }, { hip: 0, head: -1, down: 0 },
  { hip: 1, head: 0, down: 0 }, { hip: 2, head: 1, down: 1 },
  { hip: 1, head: 2, down: 2 }, { hip: 0, head: 1, down: 0 },
];
function medic(state, frame) {
  const c = canvas();
  const dance = state === "dance";
  const cheer = state === "cheer";
  const hit = state === "hit";
  const pose = dance ? beat[frame] : { hip: hit ? [0, -1, -2, 1, -1, 0, 0, 0][frame] : 0, head: 0, down: hit ? [0, 1, 2, 2, 1, 0, 0, 0][frame] : 0 };
  const lift = cheer ? [0, 1, 3, 2, 0, 1, 2, 0][frame] : 0;
  const hipX = 16 + pose.hip;
  const shoulderX = 16 + Math.round(pose.hip / 2);
  const neckY = 15 + pose.down - lift;
  c.rect(9, 30, 15, 1, "shadow");
  // Two articulated knees, with grounded boots instead of translating a rigid sprite.
  for (const side of [-1, 1]) {
    const footX = 16 + side * 5;
    const kneeX = hipX + side * 3;
    c.line(hipX + side * 2, 23 + pose.down - lift, kneeX, 26 - lift, "outline", 4);
    c.line(kneeX, 26 - lift, footX, 27 - lift, "outline", 4);
    c.line(hipX + side * 2, 23 + pose.down - lift, kneeX, 26 - lift, "green", 2);
    c.line(kneeX, 26 - lift, footX, 27 - lift, "green", 2);
    c.rect(footX - 2, 28 - lift, 5, 2, "outline");
    c.rect(footX - 1, 28 - lift, 3, 1, "seam");
  }
  // Bent elbows and hands resting on the waist; celebration raises both arms.
  for (const side of [-1, 1]) {
    const elbowX = shoulderX + side * (cheer ? 8 : 7);
    const elbowY = neckY + (cheer ? 1 : 5);
    const handX = cheer ? shoulderX + side * 9 : hipX + side * 4;
    const handY = cheer ? neckY - (frame === 0 ? 2 : 5) : neckY + 6;
    c.line(shoulderX + side * 3, neckY + 1, elbowX, elbowY, "outline", 4);
    c.line(elbowX, elbowY, handX, handY, "outline", 4);
    c.line(shoulderX + side * 3, neckY + 1, elbowX, elbowY, "coat", 2);
    c.line(elbowX, elbowY, handX, handY, "coat", 2);
    c.rect(handX - 1, handY - 1, 2, 2, "skin");
  }
  c.stamp([
    "...kkkk...", "..kwwwwk..", ".kwwmwwwk.", ".kwkmkwwk.",
    ".kwkmkwwk.", ".kwkmkwwk.", ".kwkmkwwk.", "kwwkmkwwwk", "kkkkkkkkkk",
  ], hipX - 5, neckY + 1, { k: "outline", w: "coat", m: "green" });
  c.rect(hipX + 2, neckY + 5, 2, 2, "white");
  c.dot(hipX + 2, neckY + 5, "mint");
  // Oversized head: cap, hair, ears, cheeks and deliberately lagging eyes.
  const hx = 9 + pose.head;
  const hy = 2 + pose.down - lift + (cheer ? 1 : 0);
  c.stamp([
    "....kkkkk.....", "..kkgggggkk...", ".kggmmmmmmmkk.", ".kgmmmmwmmmmk.",
    ".kmmmmwwwmmmk.", ".kmmmmmwmmmmk.", ".kkkkkkkkkkkk.", ".khhsssssshhk.",
    "kshsssssssshsk", "kssssssssssssk", ".kssssssssssk.", "..kssssssssk..", "...kkkkkkkk...",
  ], hx, hy, { k: "outline", g: "green", m: "mint", w: "white", h: "hair", s: "skin" });
  const eyesY = hy + 8;
  const hurt = hit && frame > 0 && frame < 5;
  for (const x of [hx + 4, hx + 9]) {
    if (hurt) { c.dot(x, eyesY, "outline"); c.dot(x + 1, eyesY + 1, "outline"); c.dot(x, eyesY + 2, "outline"); }
    else if (cheer) { c.line(x, eyesY + 1, x + 1, eyesY, "outline"); c.dot(x + 2, eyesY + 1, "outline"); }
    else { c.rect(x, eyesY, 2, 3, "outline"); c.dot(x, eyesY, "white"); }
  }
  c.dot(hx + 3, hy + 11, "shade"); c.dot(hx + 10, hy + 11, "shade");
  c.rect(hx + 6, hy + 11, 2, 1, cheer ? "outline" : "shade");
  if (cheer && frame > 0 && frame < 7) c.star(frame % 2 ? 4 : 27, 7 + frame % 3);
  if (hurt && frame < 4) { c.line(26, 4, 26, 6, "gold"); c.dot(26, 8, "gold"); }
  return c.pixels;
}

function slime(state, frame) {
  const c = canvas();
  const pose = beat[frame];
  const dance = state === "dance";
  const hit = state === "hit";
  const cheer = state === "cheer";
  const squash = dance ? [0, 1, 2, 0, 0, 1, 2, 0][frame] : hit ? [0, 3, 5, 4, 2, 1, 0, 0][frame] : 0;
  const lift = cheer ? [0, 1, 4, 2, 0, 2, 3, 0][frame] : 0;
  const lean = dance ? pose.hip : hit ? [0, 1, -2, 1, 0, 0, 0, 0][frame] : 0;
  const top = 12 + squash - lift;
  const bottom = 29 - lift;
  const height = bottom - top;
  c.rect(6, 30, 22, 1, "shadow");
  // Hand-defined silhouette widths; individual scanlines tilt, not the whole canvas.
  const widths = [5, 8, 10, 11, 12, 12, 13, 13, 14, 14, 14, 14, 14, 13, 12, 10, 7];
  for (let y = top; y <= bottom; y++) {
    const t = (y - top) / height;
    const width = widths[Math.round(t * 16)];
    const center = 16 + Math.round(lean * (1 - t));
    c.rect(center - width, y, width * 2 + 1, 1, "outline");
    if (y > top && y < bottom) c.rect(center - width + 1, y, width * 2 - 1, 1, t > .75 ? "green" : "mint");
  }
  c.line(10 + lean, top + 3, 14 + lean, top + 2, "white", 2);
  const eyesY = top + Math.round(height * .45);
  for (const x of [11 + lean, 21 + lean]) {
    if (hit && frame > 0 && frame < 6) { c.line(x - 1, eyesY - 1, x + 1, eyesY + 1, "outline"); c.line(x + 1, eyesY - 1, x - 1, eyesY + 1, "outline"); }
    else if (cheer) { c.line(x - 1, eyesY + 1, x, eyesY, "outline"); c.dot(x + 1, eyesY + 1, "outline"); }
    else { c.rect(x, eyesY, 2, 3, "outline"); c.dot(x, eyesY, "white"); }
  }
  c.line(15 + lean, eyesY + 4, 18 + lean, eyesY + 4, "dark");
  c.dot(14 + lean, eyesY + 3, "dark"); c.dot(19 + lean, eyesY + 3, "dark");
  if (cheer && frame > 0 && frame < 7) c.star(frame % 2 ? 5 : 26, 7 + frame % 2);
  return c.pixels;
}

const word = value => { const b = Buffer.alloc(2); b.writeUInt16LE(value); return b; };
const string = value => Buffer.concat([word(Buffer.byteLength(value)), Buffer.from(value)]);
function chunk(type, body) {
  const header = Buffer.alloc(6); header.writeUInt32LE(body.length + 6); header.writeUInt16LE(type, 4);
  return Buffer.concat([header, body]);
}
function aseprite(draw) {
  const tags = ["dance", "cheer", "hit"];
  const frames = tags.flatMap((state, row) => Array.from({ length: 8 }, (_, index) => {
    const chunks = [];
    if (row === 0 && index === 0) {
      const layer = Buffer.alloc(16); layer.writeUInt16LE(1); layer[12] = 255;
      chunks.push(chunk(0x2004, Buffer.concat([layer, string("Original pixel cels")])));
      const tagHeader = Buffer.alloc(10); tagHeader.writeUInt16LE(3);
      chunks.push(chunk(0x2018, Buffer.concat([tagHeader, ...tags.map((name, tag) => {
        const entry = Buffer.alloc(17); entry.writeUInt16LE(tag * 8); entry.writeUInt16LE(tag * 8 + 7, 2);
        entry[13] = 119; entry[14] = 214; entry[15] = 164;
        return Buffer.concat([entry, string(name)]);
      })])));
    }
    const cel = Buffer.alloc(20); cel[6] = 255; cel.writeUInt16LE(2, 7); cel.writeUInt16LE(size, 16); cel.writeUInt16LE(size, 18);
    chunks.push(chunk(0x2005, Buffer.concat([cel, deflateSync(draw(state, index))])));
    const header = Buffer.alloc(16); header.writeUInt32LE(16 + chunks.reduce((sum, b) => sum + b.length, 0));
    header.writeUInt16LE(0xf1fa, 4); header.writeUInt16LE(chunks.length, 6); header.writeUInt16LE(state === "dance" ? 120 : 90, 8);
    return Buffer.concat([header, ...chunks]);
  }));
  const header = Buffer.alloc(128); header.writeUInt32LE(128 + frames.reduce((sum, b) => sum + b.length, 0));
  header.writeUInt16LE(0xa5e0, 4); header.writeUInt16LE(frames.length, 6); header.writeUInt16LE(size, 8); header.writeUInt16LE(size, 10);
  header.writeUInt16LE(32, 12); header.writeUInt32LE(1, 14); header.writeUInt16LE(120, 18); header[34] = 1; header[35] = 1;
  return Buffer.concat([header, ...frames]);
}

const libreSprite = process.argv[2];
if (!libreSprite) throw new Error("Pass the LibreSprite executable path to regenerate cels and PNG sheets.");
const output = path.resolve(directory, "../../public/themes/pixel");
fs.mkdirSync(output, { recursive: true });
for (const [name, draw] of Object.entries({ medic, slime })) {
  const source = path.join(directory, `${name}.ase`);
  fs.writeFileSync(source, aseprite(draw));
  const result = spawnSync(libreSprite, ["--batch", source, "--sheet-type", "rows", "--sheet-width", "256", "--sheet-height", "96", "--sheet", path.join(output, `${name}.png`)], { encoding: "utf8", windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`LibreSprite export failed: ${name} (${result.status})\n${result.stderr}\n${result.stdout}`);
  console.log(`Exported ${name}: 24 original 32×32 cels, 256×96 PNG.`);
}
