// Editable, native 32px cels matching Medicine Quest's original sprite pipeline.
// Run only this file to rebuild the new enemies; medic/slime originals stay untouched.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { canvas, beat, slime, aseprite } from "./build-sprites.mjs";

const directory = path.dirname(fileURLToPath(import.meta.url));
const ink = "#18283d";
const cream = "#fff7dc";
export const enemyNames = ["mushroom", "ghost", "golem", "skeleton", "bat", "goblin", "slime-moods"];
export const enemyTags = ["calm", "alert", "danger"].flatMap(mood => ["dance", "cheer", "hit"].map(state => `${mood}-${state}`));

function pose(state, frame) {
  if (state === "dance") return { x: beat[frame].hip, head: beat[frame].head, y: Math.min(beat[frame].down, 1), lift: 0, arm: [0, 1, 2, 1, 0, -1, -2, -1][frame] };
  if (state === "cheer") return { x: [0, -1, -2, -2, -1, 0, 1, 0][frame], head: [0, -1, -2, -1, 0, 1, 0, 0][frame], y: [1, 1, 0, 0, 1, 0, 0, 0][frame], lift: [0, 1, 3, 2, 0, 1, 0, 0][frame], arm: [0, -2, -4, -3, -1, 1, 0, 0][frame] };
  return { x: [0, 1, -1, 2, 1, 0, 0, 0][frame], head: [0, 1, -1, 2, 0, -1, 0, 0][frame], y: [0, 1, 2, 2, 1, 0, 1, 1][frame], lift: 0, arm: [0, 1, 2, -1, 1, 0, 0, 0][frame] };
}

function polygon(c, points, fill, border = ink) {
  const minY = Math.min(...points.map(p => p[1]));
  const maxY = Math.max(...points.map(p => p[1]));
  for (let y = minY; y <= maxY; y++) {
    const hits = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length];
      if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) hits.push(a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]));
    }
    hits.sort((a, b) => a - b);
    for (let i = 0; i + 1 < hits.length; i += 2) c.rect(Math.ceil(hits[i]), y, Math.floor(hits[i + 1]) - Math.ceil(hits[i]) + 1, 1, fill);
  }
  for (let i = 0; i < points.length; i++) c.line(...points[i], ...points[(i + 1) % points.length], border);
}

function face(c, x, y, gap, state, frame, mood, eye = ink) {
  const hurt = state === "hit" && frame > 0;
  const blink = state === "dance" && frame === 6;
  for (const side of [0, 1]) {
    const ex = x + gap * side;
    if (hurt) { c.line(ex - 1, y, ex + 1, y + 2, eye); c.line(ex + 1, y, ex - 1, y + 2, eye); }
    else c.rect(ex, y + (blink ? 1 : 0), 2, blink ? 1 : 3, eye);
    if (!hurt && mood !== "calm") {
      const bx = ex + (side ? 1 : 0);
      c.line(bx + (side ? 1 : -1), y - (mood === "danger" ? 3 : 2), bx + (side ? -1 : 1), y - 1, ink);
    }
  }
  c.rect(x + Math.round(gap / 2), y + 4, 2, 1, ink);
  if (!hurt && mood === "danger") { c.dot(x - 2, y + 3, "#b87570"); c.dot(x + gap + 3, y + 3, "#b87570"); }
}

function shadow(c, left = 8, width = 16) { c.rect(left, 30, width, 1, "shadow"); }

function mushroom(state, frame, mood) {
  const c = canvas(), p = pose(state, frame);
  shadow(c);
  const bx = 16 + p.x, by = 19 + p.y - p.lift;
  c.rect(11, 28 - p.lift, 4, 2, ink); c.rect(18, 28 - p.lift, 4, 2, ink);
  c.rect(12, 28 - p.lift, 2, 1, "#ad8055"); c.rect(19, 28 - p.lift, 2, 1, "#ad8055");
  c.stamp(["..kkkkkk..", ".kwwwwwwk.", "kwwwwwwwwk", "kwwwwwwwwk", "kwwwwwwwwk", ".kwwwwwwk.", "..kkkkkk.."], bx - 5, by + 2, { k: ink, w: cream });
  const hx = 16 + p.head, hy = 5 + p.y - p.lift;
  polygon(c, [[hx - 3, hy], [hx + 3, hy], [hx + 7, hy + 3], [hx + 11, hy + 9], [hx + 12, hy + 13], [hx + 8, hy + 16], [hx, hy + 15], [hx - 9, hy + 14], [hx - 12, hy + 11], [hx - 9, hy + 5]], "#d78670");
  c.line(hx - 10, hy + 12, hx + 9, hy + 14, "#a66753", 2);
  c.stamp([".ww.", "wwww", "wwww", ".ww."], hx - 7, hy + 5, { w: cream });
  c.rect(hx + 1, hy + 2, 4, 3, cream); c.rect(hx + 6, hy + 9, 4, 3, cream);
  face(c, bx - 3, by + 3, 5, state, frame, mood);
  return c.pixels;
}

function ghost(state, frame, mood) {
  const c = canvas(), p = pose(state, frame);
  shadow(c, 11, 11);
  const x = 16 + p.head, y = 4 + [0, 0, 1, 2, 2, 1, 0, -1][frame] - p.lift;
  polygon(c, [[x - 3, y], [x + 3, y], [x + 7, y + 3], [x + 9, y + 8], [x + 9, y + 13], [x + 12, y + 15 + p.arm], [x + 10, y + 17], [x + 8, y + 16], [x + 8, y + 21], [x + 5, y + 23], [x + 3, y + 20], [x, y + 24], [x - 3, y + 21], [x - 6, y + 23], [x - 9, y + 20], [x - 9, y + 16], [x - 12, y + 17 + p.arm], [x - 12, y + 14], [x - 9, y + 12], [x - 8, y + 6]], "#b8deea");
  c.line(x - 6, y + 5, x - 2, y + 2, cream, 2);
  c.rect(x + 6, y + 17, 2, 3, "#83b7ce");
  face(c, x - 4, y + 10, 7, state, frame, mood);
  return c.pixels;
}

function golem(state, frame, mood) {
  const c = canvas(), p = pose(state, frame);
  shadow(c, 6, 21);
  const x = 16 + p.x, y = 16 + p.y - p.lift;
  for (const side of [-1, 1]) {
    c.line(x + side * 3, y + 8, 16 + side * 5, 28 - p.lift, ink, 5);
    c.rect(14 + side * 5, 27 - p.lift, 5, 3, ink);
    c.rect(15 + side * 5, 27 - p.lift, 3, 2, "#929f9c");
    const ay = y + 4 + p.arm * side;
    c.rect(x + side * 10 - 3, ay, 6, 7, ink);
    c.rect(x + side * 10 - 2, ay + 1, 4, 4, "#9ba6a0");
    c.rect(x + side * 8 - 2, y, 5, 3, "#83a76b");
  }
  c.stamp([".kkkkkkkkkk.", "kggggggggggk", "kggggggmgggk", "kgggggmmgggk", "kggggggggggk", ".kkkkkkkkkk."], x - 6, y + 1, { k: ink, g: "#aab3aa", m: "#83a76b" });
  const hx = 9 + p.head, hy = 3 + p.y - p.lift;
  c.stamp(["..kkkkkkkkkk..", ".kggggggggggk.", "kmmggggggggggk", "kmggggggggmggk", "kggggggggmmmgk", "kgggggggggmmgk", "kggggggggggggk", "kggggggggggggk", "kggggggggggggk", "kggggggggggggk", ".kggggggggggk.", "..kkkkkkkkkk.."], hx, hy, { k: ink, g: "#aab3aa", m: "#83a76b" });
  face(c, hx + 3, hy + 6, 6, state, frame, mood);
  return c.pixels;
}

function skeleton(state, frame, mood) {
  const c = canvas(), p = pose(state, frame);
  shadow(c, 8, 17);
  const x = 16 + p.x, y = 17 + p.y - p.lift;
  for (const side of [-1, 1]) {
    c.line(x + side * 2, y + 6, 16 + side * 4, 28 - p.lift, ink, 3);
    c.line(x + side * 2, y + 6, 16 + side * 4, 28 - p.lift, cream);
    c.rect(14 + side * 4, 29 - p.lift, 5, 1, ink);
    c.rect(15 + side * 4, 28 - p.lift, 3, 1, cream);
    c.line(x + side * 3, y, x + side * 7, y + 4 + p.arm * side, ink, 3);
    c.line(x + side * 3, y, x + side * 7, y + 4 + p.arm * side, cream);
  }
  c.rect(x - 4, y, 8, 7, ink); c.line(x, y, x, y + 7, cream, 2);
  for (const dy of [1, 4, 7]) c.rect(x - 3, y + dy, 6, 1, cream);
  // Helmet and skull sway separately from the hips.
  const hx = 16 + p.head, hy = 3 + p.y - p.lift;
  c.stamp([".kkkkkkkkkk.", "kwwwwwwwwwwk", "kwwwwwwwwwwk", "kwwwwwwwwwwk", "kwwwwwwwwwwk", ".kwwwwwwwwk.", "..kwkwkwkw..", "...kkkkkk..."], hx - 6, hy + 7, { k: ink, w: cream });
  face(c, hx - 4, hy + 9, 6, state, frame, mood);
  polygon(c, [[hx - 7, hy + 7], [hx - 6, hy + 4], [hx - 2, hy], [hx + 2, hy], [hx + 6, hy + 4], [hx + 7, hy + 7], [hx + 8, hy + 8], [hx - 8, hy + 8]], "#8ea3b5");
  c.line(hx - 1, hy + 1, hx - 3, hy + 5, "#d1e0e3", 2);
  const swordY = y + 3 + p.arm;
  c.line(x - 7, swordY, x - (state === "cheer" ? 13 : 11), swordY - 6, ink, 3);
  c.line(x - 7, swordY, x - (state === "cheer" ? 13 : 11), swordY - 6, "#d1e0e3");
  c.line(x - 9, swordY + 1, x - 5, swordY - 1, "#b39265");
  polygon(c, [[x + 7, y + 1], [x + 11, y + 2], [x + 12, y + 6], [x + 9, y + 9], [x + 6, y + 7], [x + 5, y + 3]], "#7b8b9c");
  c.rect(x + 8, y + 4, 2, 2, "#d1e0e3");
  return c.pixels;
}

function bat(state, frame, mood) {
  const c = canvas(), p = pose(state, frame);
  shadow(c, 12, 9);
  const x = 16 + Math.round(p.head / 2), y = 12 + p.y - p.lift;
  const flap = [0, -2, -4, -1, 2, 4, 3, 1][frame];
  for (const side of [-1, 1]) {
    const wing = (dx, dy) => [x + side * dx, y + dy];
    polygon(c, [wing(3, 2), wing(8, -2 + flap), wing(11, -1 + flap), wing(14, 5 + flap), wing(10, 4 + flap), wing(8, 7 + Math.round(flap / 2)), wing(5, 6), wing(3, 8)], "#977da3");
    c.line(...wing(7, 0 + flap), ...wing(5, 6), "#705d86");
  }
  c.stamp(["k.k.....k.k", "kmk.....kmk", ".kmkkkkkmk.", ".kmmmmmmmk.", "kmmmmmmmmmk", "kmmmmmmmmmk", "kmmmmmmmmmk", ".kmmmmmmmk.", "..kmmmmmk..", "...kmmmk...", "....kkk...."], x - 5, y - 5, { k: ink, m: "#796184" });
  face(c, x - 3, y, 5, state, frame, mood, cream);
  return c.pixels;
}

function goblin(state, frame, mood) {
  const c = canvas(), p = pose(state, frame);
  shadow(c, 8, 18);
  const x = 16 + p.x, y = 18 + p.y - p.lift;
  for (const side of [-1, 1]) {
    c.line(x + side * 2, y + 6, 16 + side * 4, 28 - p.lift, ink, 4);
    c.line(x + side * 2, y + 6, 16 + side * 4, 28 - p.lift, "#a6c879", 2);
    c.rect(14 + side * 4, 28 - p.lift, 5, 2, ink); c.rect(15 + side * 4, 28 - p.lift, 3, 1, "#a6c879");
    c.line(x + side * 4, y + 1, x + side * 7, y + 4 + p.arm * side, ink, 4);
    c.line(x + side * 4, y + 1, x + side * 7, y + 4 + p.arm * side, "#a6c879", 2);
  }
  c.stamp([".kkkkkkkk.", "kbggggggbk", "kbggggggbk", "kbggggggbk", "kbbbbbbbbk", "kbbbkbbbbk", ".kkk.kkkk."], x - 5, y, { k: ink, b: "#9b7753", g: "#a6c879" });
  const hx = 16 + p.head, hy = 4 + p.y - p.lift;
  polygon(c, [[hx - 5, hy], [hx + 4, hy], [hx + 7, hy + 4], [hx + 12, hy + 3], [hx + 9, hy + 8], [hx + 7, hy + 9], [hx + 6, hy + 13], [hx + 2, hy + 15], [hx - 5, hy + 13], [hx - 7, hy + 9], [hx - 11, hy + 7], [hx - 13, hy + 3], [hx - 7, hy + 4]], "#a6c879");
  c.rect(hx - 4, hy + 1, 4, 1, cream);
  face(c, hx - 4, hy + 7, 6, state, frame, mood);
  const cy = y + 3 + p.arm;
  c.line(x - 7, cy + 2, x - 11, cy - 4, ink, 4);
  c.line(x - 7, cy + 2, x - 11, cy - 4, "#a77e4e", 2);
  return c.pixels;
}

function slimeMoods(state, frame, mood) {
  const c = canvas();
  c.pixels.set(slime(state, frame));
  // Reuse every original pixel. Brows follow the exact existing head deformation.
  if (mood !== "calm" && state === "dance") {
    const lean = beat[frame].hip;
    const top = 12 + [0, 1, 2, 0, 0, 1, 2, 0][frame];
    const eyesY = top + Math.round((29 - top) * .45);
    for (const side of [0, 1]) {
      const x = (side ? 22 : 11) + lean;
      c.line(x + (side ? 1 : -1), eyesY - (mood === "danger" ? 3 : 2), x + (side ? -1 : 1), eyesY - 1, ink);
    }
    if (mood === "danger") { c.dot(8 + lean, eyesY + 3, "#b87570"); c.dot(25 + lean, eyesY + 3, "#b87570"); }
  }
  return c.pixels;
}

export function enemyFrame(name, tag, frame) {
  const [mood, state] = tag.split("-");
  const draw = { mushroom, ghost, golem, skeleton, bat, goblin, "slime-moods": slimeMoods }[name];
  if (!draw || !enemyTags.includes(tag) || frame < 0 || frame > 7) throw new Error(`Invalid enemy cel: ${name}/${tag}/${frame}`);
  return draw(state, frame, mood);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const output = path.resolve(directory, "../../public/themes/pixel");
  for (const name of enemyNames) {
    const draw = (tag, frame) => enemyFrame(name, tag, frame);
    fs.writeFileSync(path.join(directory, `${name}.ase`), aseprite(draw, enemyTags));
    const cels = enemyTags.flatMap((tag, row) => Array.from({ length: 8 }, (_, frame) => ({
      input: draw(tag, frame), raw: { width: 32, height: 32, channels: 4 }, left: frame * 32, top: row * 32,
    })));
    await sharp({ create: { width: 256, height: 288, channels: 4, background: "#00000000" } }).composite(cels).png().toFile(path.join(output, `${name}.png`));
    console.log(`Exported ${name}: 72 editable cels; calm/alert/danger × dance/attack/hit.`);
  }
}
