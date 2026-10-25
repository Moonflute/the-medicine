import type { Chamber, ForwardRecording, HeartMesh, TissueEdge, Vec3 } from "./ecg-forward-model";

export type HeartPart = "RA" | "LA" | "RV" | "LV" | "SA node" | "Bachmann" | "AV node" | "His" | "RBB" | "LBB" | "RV Purkinje" | "LV Purkinje";
export const HEART_PARTS: { id: HeartPart; name: string; description: string }[] = [
  { id: "RA", name: "Right atrium", description: "SA node에서 시작한 흥분이 퍼지는 구역입니다. Atrial myocardium을 지나 AV node로 전달됩니다." },
  { id: "LA", name: "Left atrium", description: "RA에서 Bachmann’s bundle에 해당하는 Interatrial 연결을 통해 흥분을 전달받습니다. 실제로는 뒤쪽에 위치하며, 이 절개도에서는 내부를 볼 수 있도록 펼쳤습니다." },
  { id: "RV", name: "Right ventricle", description: "RBB–Purkinje 연결과 주변 Myocardium에서 흥분을 전달받습니다. RBB 차단 시 남은 심근 연결을 통한 전파를 볼 수 있습니다." },
  { id: "LV", name: "Left ventricle", description: "LBB–Purkinje 연결에서 흥분을 전달받습니다. 두꺼운 벽은 구조를 구분하기 위한 도해이며 실제 환자의 벽 두께를 뜻하지 않습니다." },
  { id: "SA node", name: "Sinoatrial node", description: "SVC가 RA로 들어오는 부위의 상외측 벽에 위치합니다. 이 모델에서는 설정한 빈도의 외부 자극을 주며 자동능의 이온 통로까지 재현하지 않습니다." },
  { id: "Bachmann", name: "Bachmann’s bundle", description: "RA와 LA의 앞쪽 지붕을 따라 이어지는 주요 Interatrial 전도 경로입니다. 두 방의 혈액이 통하는 관이 아닙니다. 모델의 네 Interatrial 연결 구역을 이 위치에 펼쳐 표시하며, 실제의 다른 Interatrial 경로까지 모두 재현하지는 않습니다." },
  { id: "AV node", name: "Atrioventricular node", description: "RA 하부의 Septal 영역, Tricuspid valve 가까이에 위치합니다. Atrial 흥분을 지연시켜 His bundle로 전달하며, AV 전도 저하 조건에서는 해당 연결의 결합도를 낮춥니다." },
  { id: "His", name: "His bundle", description: "AV node에서 이어져 Fibrous skeleton을 통과하고 Interventricular septum 상부에서 RBB와 LBB로 나뉘는 공통 전도 경로입니다." },
  { id: "RBB", name: "Right bundle branch", description: "Septum의 오른쪽을 따라 RV 쪽으로 이어지는 모델 경로입니다. 차단된 연결은 붉은 점선과 ×로 표시됩니다." },
  { id: "LBB", name: "Left bundle branch", description: "Septum의 왼쪽을 따라 LV 쪽으로 이어지는 모델 경로입니다. 세부 Fascicle은 이 축약 모델에서 분리하지 않았습니다." },
  { id: "RV Purkinje", name: "RV Purkinje network", description: "RV의 여러 Myocardial 구역으로 이어지는 말단 연결입니다. 실제 Purkinje network 전체를 재구성한 것은 아닙니다." },
  { id: "LV Purkinje", name: "LV Purkinje network", description: "LV의 여러 Myocardial 구역으로 이어지는 말단 연결입니다. 연결에서 주변 심근으로 퍼지는 전류를 확인할 수 있습니다." },
];

export const heartPoint = (p: Vec3) => ({ x: 286 + (p[0] - 1) * 32, y: 226 - (p[1] - 4) * 30 });
export const recordingFrame = (recording: ForwardRecording, timeMs: number) => Math.max(0, Math.min(recording.samples - 1, Math.round(timeMs / recording.sampleMs)));

/** The signed reciprocal coupling used by the integrator: positive means a → b.
 * These are normalized intracellular coupling currents, not blood flow,
 * extracellular torso streamlines, or the propagation velocity of a wavefront. */
export function edgeCurrent(recording: ForwardRecording, edge: TissueEdge, frame: number) {
  const offset = Math.max(0, Math.min(recording.samples - 1, frame)) * recording.mesh.cells.length;
  return edge.conductance * (recording.voltage[offset + edge.a] - recording.voltage[offset + edge.b]);
}

/** Cache the projection, not the time-dependent current. Overlapping depth edges
 * share a group; the strongest actual edge in each group is drawn, never a made-up path. */
export function displayGeometry(mesh: HeartMesh) {
  const columns = new Map<string, { x: number; y: number; chamber: Chamber; cells: number[] }>();
  mesh.cells.forEach((cell, index) => {
    if (cell.chamber === "node") return;
    const p = heartPoint(cell.position), key = `${cell.chamber}:${p.x.toFixed(2)}:${p.y.toFixed(2)}`;
    const column = columns.get(key) ?? { ...p, chamber: cell.chamber, cells: [] };
    column.cells.push(index); columns.set(key, column);
  });
  const groups = new Map<string, number[]>();
  mesh.edges.forEach((edge, index) => {
    const a = heartPoint(mesh.cells[edge.a].position), b = heartPoint(mesh.cells[edge.b].position);
    if (Math.hypot(b.x - a.x, b.y - a.y) < 2) return; // Depth-only current has no visible in-plane direction.
    const ends = [`${a.x.toFixed(1)},${a.y.toFixed(1)}`, `${b.x.toFixed(1)},${b.y.toFixed(1)}`].sort();
    const key = `${edge.source ? "muscle" : "conduction"}:${ends.join("/")}`;
    const group = groups.get(key) ?? []; group.push(index); groups.set(key, group);
  });
  return { columns: [...columns.values()], groups: [...groups.values()] };
}

export function visibleCurrents(recording: ForwardRecording, groups: number[][], frame: number) {
  const occupied = new Set<string>();
  return groups.map(group => {
    let index = group[0], value = edgeCurrent(recording, recording.mesh.edges[index], frame);
    for (const candidate of group.slice(1)) {
      const current = edgeCurrent(recording, recording.mesh.edges[candidate], frame);
      if (Math.abs(current) > Math.abs(value)) { index = candidate; value = current; }
    }
    return { index, value, edge: recording.mesh.edges[index] };
  }).filter(item => Math.abs(item.value) >= .0015)
    .sort((a, b) => Number(a.edge.source) - Number(b.edge.source) || Math.abs(b.value) - Math.abs(a.value))
    .filter(item => {
      const a = heartPoint(recording.mesh.cells[item.edge.a].position), b = heartPoint(recording.mesh.cells[item.edge.b].position);
      const spacing=item.edge.source?48:28;
      const tile = `${item.edge.source?"muscle":"path"}:${Math.floor((a.x + b.x) / spacing)}:${Math.floor((a.y + b.y) / spacing)}`;
      if (occupied.has(tile)) return false;
      occupied.add(tile); return true;
    })
    .slice(0, 40);
}

export function partCellIndices(mesh: HeartMesh, part: HeartPart) {
  if (part === "Bachmann") return mesh.cells.flatMap((cell, index) => cell.chamber === "node" && cell.position[1] > 7 && index !== mesh.sinus ? [index] : []);
  const landmark = mesh.landmarks.find(item => item.label === part);
  return landmark ? [landmark.index] : mesh.cells.flatMap((cell, index) => cell.chamber === part ? [index] : []);
}


export function partSnapshot(recording: ForwardRecording, part: HeartPart, frame: number) {
  const indices = partCellIndices(recording.mesh, part), offset = frame * recording.mesh.cells.length;
  let peak = 0, active = 0, onset = Infinity;
  for (const index of indices) {
    const value = recording.voltage[offset + index]; peak = Math.max(peak, value);
    if (value > .5) active++;
    const first = recording.activationMs[index]; if (first >= 0) onset = Math.min(onset, first);
  }
  return { peak, active, total: indices.length, onset: Number.isFinite(onset) ? onset : null };
}
