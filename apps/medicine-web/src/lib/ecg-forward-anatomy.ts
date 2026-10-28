import type { ForwardRecording, HeartMesh, MyocardialRegion, Vec3 } from "./ecg-forward-model";
import type { MechanicalFrame } from "./ecg-forward-mechanics";

export type DiagramPoint = { x: number; y: number };
type Curve = readonly [DiagramPoint, DiagramPoint, DiagramPoint];
type Ribbon = { inner: Curve; outer: Curve; atrial?: boolean };
export type ConductionPath = { index: number; kind: "atrial" | "nodal" | "bundle" | "purkinje" | "terminal"; path: string; points: DiagramPoint[] };
const p = (x: number, y: number): DiagramPoint => ({ x, y });
const curve = (a: number[], b: number[], c: number[]): Curve => [p(a[0], a[1]), p(b[0], b[1]), p(c[0], c[1])];
const mix = (a: DiagramPoint, b: DiagramPoint, t: number) => p(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
const at = (c: Curve, t: number) => mix(mix(c[0], c[1], t), mix(c[1], c[2], t), t);
const xy = (point: DiagramPoint) => `${point.x.toFixed(2)} ${point.y.toFixed(2)}`;

// An unfolded educational cutaway, NOT the geometry used by the volume conductor.
// One epicardial silhouette surrounds four cavities and a continuous septum.
export const HEART_OUTLINE = "M199 86C177 85 158 103 150 129C141 155 145 184 151 209C139 234 139 262 147 289C161 339 190 380 232 416C271 451 309 466 340 488C351 496 363 495 375 485C417 453 449 407 467 355C485 306 480 261 460 222C458 205 451 191 442 180C459 162 454 133 439 116C422 97 396 92 368 96C344 93 325 102 313 113C293 116 278 114 257 101C237 88 216 83 199 86Z";
export const HEART_CHAMBERS = [
  { id: "RA", x: 221, y: 157, name: "Right atrium", cavity: "M199 110C180 110 168 129 170 152C171 174 181 190 198 197C219 205 250 205 273 196C274 172 267 143 250 128C234 114 216 109 199 110Z" },
  { id: "LA", x: 371, y: 156, name: "Left atrium", cavity: "M336 125C359 112 392 116 412 129C432 144 429 165 410 180C391 194 368 200 337 193L319 181C310 161 317 137 336 125Z" },
  { id: "RV", x: 227, y: 282, name: "Right ventricle", cavity: "M196 207C177 229 174 254 182 283C195 326 228 371 289 410C275 367 266 327 269 287L280 233C255 222 225 211 196 207Z" },
  { id: "LV", x: 369, y: 302, name: "Left ventricle", cavity: "M320 215C350 207 387 212 414 236C437 264 433 311 418 350C403 389 380 424 353 451C328 417 310 371 307 325C305 285 310 247 320 215Z" },
] as const;
export const AV_OPENINGS = ["M198 192L269 192L276 239L196 219Z", "M329 186L392 190L397 222L320 229Z"];

// Atria are laid out along their propagation direction; ventricles across wall depth.
const RIBBONS: Record<string, Ribbon> = {
  "ra-wall": { inner: curve([199, 111], [121, 176], [273, 198]), outer: curve([197, 86], [89, 205], [288, 216]), atrial: true },
  "la-wall": { inner: curve([336, 125], [463, 127], [337, 194]), outer: curve([330, 102], [513, 114], [332, 213]), atrial: true },
  "rv-basal": { inner: curve([195, 216], [175, 243], [180, 273]), outer: curve([158, 211], [139, 242], [145, 278]) },
  "rv-anterior": { inner: curve([180, 273], [192, 322], [230, 365]), outer: curve([145, 278], [160, 335], [212, 397]) },
  "rv-apical": { inner: curve([230, 365], [256, 393], [289, 410]), outer: curve([212, 397], [272, 453], [334, 477]) },
  "lv-septal": { inner: curve([320, 231], [283, 341], [353, 451]), outer: curve([285, 230], [250, 351], [332, 468]) },
  "lv-apical": { inner: curve([353, 451], [375, 428], [399, 389]), outer: curve([342, 492], [394, 473], [431, 411]) },
  "lv-lateral": { inner: curve([399, 389], [420, 347], [429, 301]), outer: curve([431, 411], [463, 365], [475, 307]) },
  "lv-anterior": { inner: curve([429, 301], [436, 271], [417, 241]), outer: curve([475, 307], [483, 271], [459, 226]) },
  "lv-posterior": { inner: curve([417, 241], [399, 219], [378, 216]), outer: curve([459, 226], [432, 191], [380, 200]) },
  "lv-basal": { inner: curve([378, 216], [346, 207], [320, 231]), outer: curve([380, 200], [339, 184], [291, 215]) },
};
function ribbonPoint(ribbon: Ribbon, along: number, depth: number) { return mix(at(ribbon.inner, along), at(ribbon.outer, along), depth); }

type Displacement = { region: string; dx: number; dy: number };
type DeformablePoint = DiagramPoint & { motion: Displacement[] };
const bounded = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (from: number, to: number, x: number) => { const t = bounded((x - from) / (to - from)); return t * t * (3 - 2 * t); };
const ventricularWalls = Object.entries(RIBBONS).filter(([, ribbon]) => !ribbon.atrial).map(([region, ribbon]) => ({
  region, samples: Array.from({ length: 13 }, (_, i) => ({ inner: at(ribbon.inner, i / 12), outer: at(ribbon.outer, i / 12) })),
}));

/** A continuous, local displacement field on the educational cutaway. The same
 * mapping deforms outline, cavities, myocardium, valves and conduction paths.
 * It is not a volume-conserving mechanics solver or a change to the ECG mesh. */
function deformablePoint({ x, y }: DiagramPoint): DeformablePoint {
  const motion: Displacement[] = [];
  const ventral = smooth(185, 235, y);
  const longitudinal = y < 210 ? smooth(95, 210, y) : bounded((490 - y) / 280);
  const walls = ventricularWalls.map(wall => {
    let weight = 0, inwardX = 0, inwardY = 0;
    for (const sample of wall.samples) {
      const middle = mix(sample.inner, sample.outer, .45);
      const distance = (x - middle.x) ** 2 + (y - middle.y) ** 2;
      const local = Math.exp(-distance / (2 * 52 ** 2));
      const { inner, outer } = sample, dx = outer.x - inner.x, dy = outer.y - inner.y, thickness = Math.hypot(dx, dy);
      const depth = bounded(((x - inner.x) * dx + (y - inner.y) * dy) / (thickness * thickness));
      weight += local;
      inwardX -= dx / thickness * (11 + 18 * (1 - depth)) * local;
      inwardY -= dy / thickness * (4 + 9 * (1 - depth)) * local;
    }
    // Endocardium moves further inward than epicardium: the cavity narrows while
    // the wall thickens. Long-axis shortening draws the AV plane toward the apex.
    // Blend all wall samples smoothly; nearest-sample switching would introduce
    // spatial discontinuities and could fold the wall during local contraction.
    return { region: wall.region, weight, dx: inwardX / Math.max(weight, 1e-12), dy: inwardY / Math.max(weight, 1e-12) };
  });
  const total = walls.reduce((sum, wall) => sum + wall.weight, 0);
  const envelope = smooth(80, 140, x) * (1 - smooth(485, 545, x)) * (1 - smooth(495, 530, y));
  for (const wall of walls) {
    const weight = wall.weight / Math.max(total, 1e-9) * envelope;
    motion.push({ region: wall.region, dx: wall.dx * ventral * weight, dy: (wall.dy * ventral + 27 * longitudinal) * weight });
  }
  for (const [region, cx, cy] of [["ra-wall", 221, 157], ["la-wall", 371, 156]] as const) {
    const radius = Math.hypot((x - cx) / 66, (y - cy) / 50);
    const locality = Math.exp(-4 * Math.max(0, radius - .8) ** 2) * smooth(60, 100, y) * (1 - smooth(185, 232, y));
    motion.push({ region, dx: -(x - cx) * .22 * locality, dy: -(y - cy) * .27 * locality });
  }
  return { x, y, motion };
}

type PathPlan = (string | DeformablePoint)[];
const pathPlans = new Map<string, PathPlan>();
function planPath(path: string): PathPlan {
  const cached = pathPlans.get(path); if (cached) return cached;
  const tokens = path.match(/-?\d*\.?\d+(?:e[-+]?\d+)?|[A-Za-z]/g) ?? [], plan: PathPlan = [];
  for (let i = 0; i < tokens.length;) {
    const token = tokens[i++];
    if (/^[A-Za-z]$/.test(token)) {
      if (!/^[MLCQZ]$/.test(token)) throw new Error(`Unsupported heart path command: ${token}`);
      plan.push(token);
    } else {
      const x = Number(token), y = Number(tokens[i++]);
      if (!Number.isFinite(x + y)) throw new Error("Invalid heart path coordinate");
      plan.push(deformablePoint({ x, y }));
    }
  }
  pathPlans.set(path, plan); return plan;
}

export type HeartDeformation = { point: (point: DiagramPoint) => DiagramPoint; path: (path: string) => string };
export function createHeartDeformation(frame: MechanicalFrame): HeartDeformation {
  if (!Object.values(frame).some(value => value > .00001)) return { point: point => point, path: path => path };
  const apply = (point: DeformablePoint) => {
    let { x, y } = point;
    for (const movement of point.motion) {
      const amount = frame[movement.region] ?? 0;
      x += movement.dx * amount; y += movement.dy * amount;
    }
    return { x, y };
  };
  return {
    point: point => apply(deformablePoint(point)),
    path: path => planPath(path).map(item => {
      if (typeof item === "string") return item;
      const point = apply(item); return `${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
    }).join(" "),
  };
}

/** Two fixed subregion-centroid probes per ribbon: four atrial and eighteen
 * ventricular. Split atria along propagation and ventricles across the columns
 * that are spread along each wall in createAnatomyLayout. Each point samples its
 * own 3-D field, rather than duplicating the former region-center arrow.
 * The cutaway is unfolded, so its anchors are anatomical locators, NOT torso
 * coordinates. Arrows use a common frontal projection of the 3-D field. */
export function createAnatomyFieldProbes(mesh: HeartMesh) {
  return Object.entries(RIBBONS).flatMap(([region, ribbon]) => {
    const cells = mesh.cells.filter(cell => cell.region === region && !cell.bridge && cell.chamber !== "node");
    const coordinate = (cell: (typeof cells)[number]) => ribbon.atrial ? cell.longitudinal ?? .5 : (cell.column ?? 4) / 8;
    return [0, 1].flatMap(half => {
      const local = cells.filter(cell => (coordinate(cell) < .5 ? 0 : 1) === half);
      if (!local.length) return [];
      const position = [0, 1, 2].map(d => local.reduce((sum, cell) => sum + cell.position[d], 0) / local.length) as unknown as Vec3;
      const center = local.reduce((sum, cell) => sum + coordinate(cell), 0) / local.length;
      const along = ribbon.atrial ? center : .12 + center * .76;
      return [{ id: `${region}-${half + 1}`, region, position, ...ribbonPoint(ribbon, along, .5) }];
    });
  });
}

// Shared, fixed display gain; never rescale each arrow/frame to its own maximum.
// Half the former display length; the field itself and net dipole are unchanged.
// The bounded length is for legibility, not an absolute V/m calibration.
export function projectAnatomyField(field: Vec3) {
  const magnitude = Math.hypot(...field), inPlane = Math.hypot(field[0], field[1]);
  const length = 16 * Math.tanh(Math.log1p(inPlane / 3) / 3);
  return { magnitude, inPlane, length, dx: inPlane > 1e-12 ? field[0] / inPlane : 0, dy: inPlane > 1e-12 ? -field[1] / inPlane : 0 };
}

// A fixed diagram anchor, not a moving material point or a field observation site.
export const NET_DIPOLE_ORIGIN: DiagramPoint = { x: 310, y: 280 };
export function projectAnatomyDipole(dipole: Vec3) {
  const magnitude = Math.hypot(...dipole), inPlane = Math.hypot(dipole[0], dipole[1]);
  // One linear gain across times/conditions; cap only to keep the arrow in view.
  // Never normalize by the current frame, lead, or recording's largest vector.
  const rawLength = inPlane * .75, length = Math.min(135, rawLength);
  return { ...NET_DIPOLE_ORIGIN, magnitude, inPlane, length, limited: rawLength > 135,
    dx: inPlane > 1e-12 ? dipole[0] / inPlane : 0, dy: inPlane > 1e-12 ? -dipole[1] / inPlane : 0 };
}

function ribbonBand(ribbon: Ribbon, start: number, end: number) {
  const points: DiagramPoint[] = [];
  for (let i = 0; i <= 12; i++) points.push(ribbon.atrial ? ribbonPoint(ribbon, start + (end - start) * i / 12, 0) : ribbonPoint(ribbon, i / 12, start));
  for (let i = 12; i >= 0; i--) points.push(ribbon.atrial ? ribbonPoint(ribbon, start + (end - start) * i / 12, 1) : ribbonPoint(ribbon, i / 12, end));
  return points.map((point, i) => `${i ? "L" : "M"}${xy(point)}`).join(" ") + "Z";
}

/** Selection outlines use the same regional ribbons as the tissue activation map. */
export function createAnatomyRegionMap(regions: readonly MyocardialRegion[]) {
  return regions.map((region,index)=>({region,number:index+1,path:ribbonBand(RIBBONS[region],0,1),center:ribbonPoint(RIBBONS[region],.5,.5)}));
}

/** Arc-length samples keep the moving front on the drawn route, including apical turns. */
function route(start: DiagramPoint, segments: [DiagramPoint, DiagramPoint, DiagramPoint][]) {
  let path = `M${xy(start)}`, previous = start;
  const samples = [start];
  for (const [c1, c2, end] of segments) {
    path += `C${xy(c1)} ${xy(c2)} ${xy(end)}`;
    for (let i = 1; i <= 24; i++) {
      const t = i / 24, a = mix(previous, c1, t), b = mix(c1, c2, t), c = mix(c2, end, t);
      samples.push(mix(mix(a, b, t), mix(b, c, t), t));
    }
    previous = end;
  }
  return { path, points: samples };
}

function cubicPrefix(a: DiagramPoint, c1: DiagramPoint, c2: DiagramPoint, b: DiagramPoint, t: number): [DiagramPoint, DiagramPoint, DiagramPoint] {
  const first = mix(a, c1, t), middle = mix(c1, c2, t), last = mix(c2, b, t);
  const second = mix(first, middle, t);
  return [first, second, mix(second, mix(middle, last, t), t)];
}

export function createAnatomyLayout(mesh: HeartMesh) {
  const points: DiagramPoint[] = mesh.cells.map(() => p(292, 220));
  const regionCells = new Map<string, number[]>();
  mesh.cells.forEach((cell, index) => {
    if (cell.chamber === "node" || !cell.region) return;
    const indices = regionCells.get(cell.region) ?? [];
    indices.push(index); regionCells.set(cell.region, indices);
  });
  const bands: { region: string; path: string; cells: number[] }[] = [];
  for (const [region, indices] of regionCells) {
    const ribbon = RIBBONS[region]; if (!ribbon) continue;
    const layers = ribbon.atrial ? 17 : 12;
    for (let layer = 0; layer < layers; layer++) {
      const cells = indices.filter(index => Math.round((ribbon.atrial ? mesh.cells[index].longitudinal! : mesh.cells[index].transmural!) * (layers - 1)) === layer);
      bands.push({ region, cells, path: ribbonBand(ribbon, layer / layers, (layer + 1) / layers) });
      cells.forEach(index => {
        const cell = mesh.cells[index], column = cell.column ?? 4;
        points[index] = ribbon.atrial
          ? ribbonPoint(ribbon, cell.longitudinal!, .3 + column / 3 * .4)
          : ribbonPoint(ribbon, .12 + column / 8 * .76, cell.transmural!);
      });
    }
  }
  const neighbors: number[][] = mesh.cells.map(() => []);
  mesh.edges.forEach(edge => { if (!edge.source) { neighbors[edge.a].push(edge.b); neighbors[edge.b].push(edge.a); } });
  const terminals = new Map<number, string>();
  mesh.cells.forEach((cell, index) => {
    if (cell.chamber !== "node") return;
    const tissue = neighbors[index].find(other => ["RV", "LV"].includes(mesh.cells[other].chamber));
    if (tissue !== undefined) {
      const region = mesh.cells[tissue].region!;
      points[index] = ribbonPoint(RIBBONS[region], .5, -.16); terminals.set(index, region);
    } else points[index] = p(269 + (6.1 - cell.position[1]) * 19, 184 + (6.1 - cell.position[1]) * 29);
  });
  const landmark = (name: string) => mesh.landmarks.find(item => item.label === name)!.index;
  points[landmark("SA node")] = p(177, 115);
  points[landmark("His")] = p(295, 230);
  const trunks = new Map<number, string>();
  for (const [branch, positions] of [
    ["RBB", [p(278, 261), p(273, 329), p(290, 408), p(184, 266)]],
    ["LBB", [p(313, 262), p(320, 337), p(353, 448), p(420, 261)]],
  ] as const) {
    let previous = landmark("His"), current = landmark(branch);
    for (let i = 0; i < positions.length; i++) {
      points[current] = positions[i]; trunks.set(current, `${branch}-${i}`);
      const next = neighbors[current].find(other => other !== previous && mesh.cells[other].chamber === "node" && !terminals.has(other));
      if (next === undefined) break;
      previous = current; current = next;
    }
  }
  const terminalRoutes: Record<string, [DiagramPoint, DiagramPoint][]> = {
    "lv-septal": [[p(305, 281), p(304, 307)]],
    "lv-apical": [[p(327, 386), p(346, 432)]],
    "lv-lateral": [[p(386, 425), p(407, 397)]],
    "lv-anterior": [[p(405, 415), p(443, 356)]],
    "lv-posterior": [[p(408, 414), p(442, 354)], [p(433, 266), p(417, 244)]],
    "lv-basal": [[p(411, 223), p(382, 211)]],
    "rv-apical": [[p(278, 363), p(284, 409)]],
    "rv-anterior": [[p(246, 384), p(216, 350)]],
    "rv-basal": [[p(179, 257), p(179, 249)]],
  };
  const paths: ConductionPath[] = [];
  mesh.edges.forEach((edge, index) => {
    if (edge.source) return;
    // Atrial coupling is an implicit tissue connection, not an illustrated tract.
    if (mesh.cells[edge.a].chamber === "RA" && mesh.cells[edge.b].chamber === "LA") return;
    const a = points[edge.a], b = points[edge.b];
    if (Math.hypot(a.x - b.x, a.y - b.y) < .5) return;
    let kind: ConductionPath["kind"] = "nodal";
    let segments: [DiagramPoint, DiagramPoint, DiagramPoint][] = [[mix(a, b, .35), mix(a, b, .7), b]];
    const terminal = terminals.has(edge.a) ? edge.a : terminals.has(edge.b) ? edge.b : undefined;
    if (terminal !== undefined && mesh.cells[edge.b].chamber !== "node") {
      kind = "terminal";
      const ribbon = RIBBONS[terminals.get(terminal)!];
      // Shared proximal direction, individually curved distal twigs; every twig
      // corresponds to a real Purkinje–myocardial coupling, not decorative wiring.
      const siblings = neighbors[terminal].filter(other => mesh.cells[other].chamber !== "node");
      const ordinal = siblings.indexOf(edge.b), group = Math.floor(ordinal / 3);
      const fork = ribbonPoint(ribbon, .2 + group * .3, -.12);
      segments = [[mix(a, fork, .7), mix(fork, b, .35), b]];
    } else if (terminal !== undefined) {
      kind = "purkinje";
      const controls = terminalRoutes[terminals.get(terminal)!];
      segments = controls.map(([c1, c2], i) => [c1, c2, i === controls.length - 1 ? b : p(430, 290)]);
      const region = terminals.get(terminal)!;
      if (["lv-lateral", "lv-anterior", "lv-posterior"].includes(region)) {
        // Several model edges share an anatomical proximal route before branching;
        // identical curves avoid a stack of nearly parallel wires in the cavity.
        const t = region === "lv-lateral" ? .58 : region === "lv-anterior" ? .94 : 1;
        const prefix = cubicPrefix(a, p(405, 416), p(452, 312), p(420, 261), t);
        const fork = prefix[2];
        segments = [prefix, [mix(fork, b, .3), mix(fork, b, .7), b]];
      } else if (region === "lv-apical") {
        segments = [[p(320, 387), p(353, 415), p(353, 448)], [p(365, 440), p(372, 434), b]];
      } else if (region === "rv-apical") {
        segments = [[p(273, 365), p(290, 384), p(290, 408)], [p(280, 405), p(268, 398), b]];
      }
    } else if (trunks.has(edge.b)) {
      kind = trunks.get(edge.b)!.endsWith("-3") ? "purkinje" : "bundle";
      if (trunks.get(edge.b) === "RBB-3") segments = [[p(231, 375), p(176, 314), b]];
      else if (trunks.get(edge.b) === "LBB-3") segments = [[p(405, 416), p(452, 312), b]];
      else segments = [[p(a.x, a.y + (b.y - a.y) * .45), p(b.x, b.y - (b.y - a.y) * .3), b]];
    } else if (edge.a === mesh.sinus) {
      kind = "atrial"; segments = [[p(182, 113), mix(a, b, .65), b]];
    } else if (mesh.cells[edge.a].chamber === "RA" && edge.branch === "AV") {
      kind = "atrial"; segments = [[p(228, 204), p(257, 205), b]];
    }
    paths.push({ index, kind, ...route(a, segments) });
  });
  return { points, bands, paths };
}

export type AnatomyCurrent = { key: string; region: string; kind: "conduction" | "myocardial"; x: number; y: number; dx: number; dy: number; magnitude: number };
/** Signed, time-interpolated currents from the SAME coupling as the solver.
 * One regional myocardial resultant and separated conduction arrows avoid a
 * forest of sub-pixel arrows. Directions are projected onto the unfolded diagram,
 * NOT vectors in the torso coordinate system or propagation velocities. */
export function anatomyCurrents(recording: ForwardRecording, layout: ReturnType<typeof createAnatomyLayout>, timeMs: number): AnatomyCurrent[] {
  const { mesh } = recording, n = mesh.cells.length;
  const position = Math.max(0, Math.min(recording.samples - 1, timeMs / recording.sampleMs));
  const first = Math.floor(position), last = Math.min(recording.samples - 1, first + 1), t = position - first;
  const voltage = (i: number) => recording.voltage[first * n + i] * (1 - t) + recording.voltage[last * n + i] * t;
  const current = (a: number, b: number, g: number) => g * (voltage(a) - voltage(b));
  const regions = new Map<string, { x: number; y: number; dx: number; dy: number; weight: number }>();
  for (const edge of mesh.edges) {
    const a = mesh.cells[edge.a], b = mesh.cells[edge.b];
    if (!edge.source || a.bridge || b.bridge || a.region !== b.region) continue;
    const start = layout.points[edge.a], end = layout.points[edge.b], dx = end.x - start.x, dy = end.y - start.y;
    const length = Math.hypot(dx, dy); if (length < .1) continue;
    const value = current(edge.a, edge.b, edge.conductance), weight = Math.abs(value);
    const region = a.region!, sum = regions.get(region) ?? { x: 0, y: 0, dx: 0, dy: 0, weight: 0 };
    sum.x += (start.x + end.x) / 2 * weight; sum.y += (start.y + end.y) / 2 * weight;
    sum.dx += dx / length * value; sum.dy += dy / length * value; sum.weight += weight;
    regions.set(region, sum);
  }
  const muscle: AnatomyCurrent[] = [...regions].flatMap(([region, sum]) => {
    const magnitude = Math.hypot(sum.dx, sum.dy);
    return magnitude > .002 && sum.weight > 0 ? [{ key: region, region, kind: "myocardial" as const, x: sum.x / sum.weight, y: sum.y / sum.weight, dx: sum.dx / magnitude, dy: sum.dy / magnitude, magnitude }] : [];
  });
  const nodes: AnatomyCurrent[] = layout.paths.flatMap(path => {
    if (path.kind === "terminal") return [];
    const edge = mesh.edges[path.index], value = current(edge.a, edge.b, edge.conductance);
    if (Math.abs(value) < .002) return [];
    const a = pointOnRoute(path.points, .35), b = pointOnRoute(path.points, .65), center = pointOnRoute(path.points, .5);
    const length = Math.hypot(b.x - a.x, b.y - a.y); if (length < 2) return [];
    const sign = Math.sign(value);
    return [{ key: `edge-${path.index}`, region: "전도계", kind: "conduction" as const, ...center, dx: (b.x - a.x) / length * sign, dy: (b.y - a.y) / length * sign, magnitude: Math.abs(value) }];
  }).sort((a, b) => b.magnitude - a.magnitude);
  const arrows = [...muscle]; let count = 0;
  for (const arrow of nodes) {
    if (count >= 5 || arrows.some(other => Math.hypot(arrow.x - other.x, arrow.y - other.y) < 25)) continue;
    arrows.push(arrow); count++;
  }
  return arrows;
}

export function pointOnRoute(points: DiagramPoint[], fraction: number) {
  const lengths = points.slice(1).map((point, i) => Math.hypot(point.x - points[i].x, point.y - points[i].y));
  let remaining = lengths.reduce((sum, value) => sum + value, 0) * Math.max(0, Math.min(1, fraction));
  for (let i = 0; i < lengths.length; i++) {
    if (remaining <= lengths[i]) return mix(points[i], points[i + 1], lengths[i] ? remaining / lengths[i] : 0);
    remaining -= lengths[i];
  }
  return points[points.length - 1];
}

export type ConductionEvent = { start: number; end: number; forward: boolean };
/** Use every recorded upstroke, not a first-beat looping decoration. A cut edge
 * never displays propagation, even when its ends activate by an alternate route. */
export function conductionEvents(recording: ForwardRecording, paths: ConductionPath[]) {
  const n = recording.mesh.cells.length, crossings = new Map<number, number[]>();
  for (const path of paths) {
    const edge = recording.mesh.edges[path.index];
    for (const index of [edge.a, edge.b]) {
      if (crossings.has(index)) continue;
      const times: number[] = [];
      for (let frame = 1; frame < recording.samples; frame++) {
        const before = recording.voltage[(frame - 1) * n + index], after = recording.voltage[frame * n + index];
        if (before < .5 && after >= .5) times.push((frame - 1 + (.5 - before) / (after - before)) * recording.sampleMs);
      }
      crossings.set(index, times);
    }
  }
  return new Map(paths.map(path => {
    const edge = recording.mesh.edges[path.index], events: ConductionEvent[] = [];
    if (edge.conductance > 0) {
      const targets = crossings.get(edge.b)!, used = new Set<number>();
      for (const start of crossings.get(edge.a)!) {
        const candidate = targets.map((end, i) => ({ end, i, distance: Math.abs(end - start) }))
          .filter(item => !used.has(item.i) && item.distance < 30000 / recording.inputs.rate)
          .sort((a, b) => a.distance - b.distance)[0];
        if (!candidate || candidate.distance < .01) continue;
        used.add(candidate.i);
        events.push({ start: Math.min(start, candidate.end), end: Math.max(start, candidate.end), forward: start < candidate.end });
      }
    }
    return [path.index, events];
  }));
}
