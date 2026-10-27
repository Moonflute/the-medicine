import type { ForwardRecording } from "./ecg-forward-model";

/** One-way, dimensionless excitation → shortening surrogate, NOT a calcium,
 * pressure/volume, finite-element or Land active-tension solver. Nothing here
 * changes the electrical mesh, recorded Vm, lead field or ECG. */
export type MechanicalRecording = { regions: string[]; values: Float32Array; sampleMs: number; samples: number };
export type MechanicalFrame = Readonly<Record<string, number>>;
const recordings = new WeakMap<ForwardRecording, MechanicalRecording>();

export function mechanicalRecording(recording: ForwardRecording): MechanicalRecording {
  const cached = recordings.get(recording); if (cached) return cached;
  const groups = new Map<string, { index: number; weight: number; viable: number }[]>();
  recording.mesh.cells.forEach((cell, index) => {
    if (!cell.region || cell.chamber === "node" || cell.bridge) return;
    const cells = groups.get(cell.region) ?? [];
    // Ischemic hypokinesia is an illustrative contractility loss, not a calibrated
    // clinical strain prediction. Scar contributes mass but no active shortening.
    cells.push({ index, weight: cell.capacity, viable: cell.scar ? 0 : 1 - .7 * (cell.injury ?? 0) });
    groups.set(cell.region, cells);
  });
  const regions = [...groups.keys()], values = new Float32Array(recording.samples * regions.length);
  const n = recording.mesh.cells.length, dt = recording.sampleMs;
  const period = Math.min(recording.samples - 1, Math.max(2, Math.round(60000 / recording.inputs.rate / dt)));
  // The electrical recording is already paced to steady state. Use its first
  // full beat as prehistory so rapid pacing does not reset tension at time zero.
  const at = (frame: number, cell: number) => recording.voltage[(frame < 0 ? (frame % period + period) % period : frame) * n + cell];
  regions.forEach((region, r) => {
    const cells = groups.get(region)!, mass = cells.reduce((sum, cell) => sum + cell.weight, 0);
    const atrial = region.endsWith("-wall"), delay = Math.round((atrial ? 18 : 26) / dt);
    const decay = Math.exp(-dt / (atrial ? 48 : 90));
    const follow = 1 - Math.exp(-dt / (atrial ? 32 : 52));
    let excitation = 0, shortening = 0;
    for (let frame = -2 * period; frame < recording.samples; frame++) {
      let rising = 0;
      for (const cell of cells) {
        // Only a genuine depolarizing upstroke recruits active shortening.
        // An elevated but constant resting Vm cannot cause a permanent squeeze.
        const now = at(frame - delay, cell.index), before = at(frame - delay - 1, cell.index);
        if (now > .2) rising += Math.max(0, now - Math.max(.2, before)) * cell.weight * cell.viable;
      }
      excitation = excitation * decay + rising / Math.max(mass, 1e-9);
      shortening += (excitation * 4.2 - shortening) * follow;
      if (frame >= 0) values[frame * regions.length + r] = 1 - Math.exp(-Math.max(0, shortening));
    }
  });
  const result = { regions, values, sampleMs: dt, samples: recording.samples };
  recordings.set(recording, result); return result;
}

/** Interpolation is independent of playback direction, frame rate and seeking. */
export function mechanicalFrame(recording: MechanicalRecording, timeMs: number): MechanicalFrame {
  const t = Math.max(0, Math.min(recording.samples - 1, timeMs / recording.sampleMs));
  const left = Math.floor(t), right = Math.min(recording.samples - 1, left + 1), fraction = t - left, n = recording.regions.length;
  return Object.fromEntries(recording.regions.map((region, i) => [region, recording.values[left * n + i] * (1 - fraction) + recording.values[right * n + i] * fraction]));
}

export function chamberShortening(frame: MechanicalFrame) {
  const mean = (prefix: string) => {
    const values = Object.entries(frame).filter(([region]) => region.startsWith(prefix)).map(([, value]) => value);
    return values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
  };
  return { RA: frame["ra-wall"] ?? 0, LA: frame["la-wall"] ?? 0, RV: mean("rv-"), LV: mean("lv-") };
}

/** Repeat complete pacing periods, not an arbitrary 2.4-s duration. At the end
 * of the recording, resume at the matching beat phase rather than snapping a
 * partially contracted heart back to time zero. Manual seeking is unaffected. */
export function wrapAtMatchingBeat(timeMs: number, durationMs: number, periodMs: number) {
  if (timeMs < durationMs) return Math.max(0, timeMs);
  const repeat = Math.floor(durationMs / periodMs) * periodMs || durationMs;
  return timeMs - (Math.floor((timeMs - durationMs) / repeat) + 1) * repeat;
}
