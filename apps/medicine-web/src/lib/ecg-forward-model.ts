/**
 * Educational forward ECG, independent of ecg-model's synthetic rhythm strips.
 * A coarse 3-D excitable graph integrates Mitchell–Schaeffer membrane dynamics
 * and reciprocal diffusive coupling. Extracellular potentials are recovered
 * from distributed edge-current dipoles in an infinite homogeneous conductor.
 * Geometry, tissue parameters and gain are illustrative, NOT patient calibrated.
 * References and limitations: source_notes/05 Physiology/Interactive/ecg-arrhythmia.md
 */
export type Vec3 = readonly [number, number, number];
export type Chamber = "RA" | "LA" | "RV" | "LV" | "node";
export type ConductionCondition = "normal" | "av-slow" | "rbb-block" | "lbb-block" | "rv-pacing";
export type ForwardInputs = { rate: number; condition: ConductionCondition; recovery: number };
export type TissueCell = { position: Vec3; chamber: Chamber; tauIn: number; tauOut: number; tauClose: number; capacity: number };
export type TissueEdge = { a: number; b: number; conductance: number; source: boolean; branch?: "RBB" | "LBB" | "AV" };
export type HeartMesh = { cells: TissueCell[]; edges: TissueEdge[]; landmarks: { label: string; index: number }[]; sinus: number; pacing: number };
export type ForwardRecording = {
  inputs: ForwardInputs; mesh: HeartMesh; sampleMs: number; durationMs: number;
  samples: number; voltage: Float32Array; dipole: Float32Array;
  activationMs: Float32Array; recoveryMs: Float32Array;
  activation: { atrialStart: number | null; ventricularStart: number | null; ventricularEnd: number | null; ventricularCoverage: number };
};
export type Electrode = { longitude: number; latitude: number };
export type LeadPlacement = { positive: Electrode; negative: Electrode; reference: "bipolar" | "wilson" };
export type ForwardTrace = { values: Float32Array; positive: Float32Array; reference: Float32Array; approximate: Float32Array; peak: number };
export const DEFAULT_FORWARD_INPUTS: ForwardInputs = { rate: 70, condition: "normal", recovery: 100 };
export const DEFAULT_PLACEMENT: LeadPlacement = {
  positive: { longitude: 48, latitude: -42 }, negative: { longitude: -64, latitude: 37 }, reference: "bipolar",
};
export const HEART_CENTER: Vec3 = [1, 4, 0];
export const TORSO_RADII: Vec3 = [16, 26, 10];
export const LIMB_ELECTRODES: Record<"RA" | "LA" | "LL", Electrode> = {
  RA: { longitude: -64, latitude: 37 }, LA: { longitude: 64, latitude: 37 }, LL: { longitude: 48, latitude: -42 },
};
export const FORWARD_CONDITIONS: { id: ConductionCondition; label: string; explanation: string }[] = [
  { id: "normal", label: "기준 전도", explanation: "SA 자극이 Atria → AV 연결부 → His–Purkinje → Ventricles로 퍼집니다. 각 구역의 활성 시각은 계산 결과입니다." },
  { id: "av-slow", label: "AV 전도 저하", explanation: "AV 연결부의 결합도를 낮춥니다. 심실 활성 지연·실패 여부는 조직 계산으로 결정되며, 임상적 AV block 등급을 재현한 프리셋은 아닙니다." },
  { id: "rbb-block", label: "RBB 연결 차단", explanation: "His에서 RBB로 가는 연결을 끕니다. RV는 남아 있는 심근 연결을 통해 늦게 활성될 수 있습니다. 전형적인 RBBB morphology를 보장하지 않습니다." },
  { id: "lbb-block", label: "LBB 연결 차단", explanation: "His에서 LBB로 가는 연결을 끕니다. LV의 활성 순서와 전위차가 어떻게 달라지는지 비교합니다. 진단용 LBBB 모델은 아닙니다." },
  { id: "rv-pacing", label: "RV 자극", explanation: "SA 대신 RV의 작은 구역에 자극 전류를 줍니다. 달라진 시작점에서 실제로 전파를 계산하며, pacing spike나 기기 회로는 포함하지 않습니다." },
];

const SPACING = .7;
const DT_MS = .1;
const SAMPLE_MS = 2;
// A single fixed scale for every electrode and scenario; never normalize each lead.
const SOURCE_GAIN = 300;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const distance2 = (a: Vec3, b: Vec3) => (a[0]-b[0])**2+(a[1]-b[1])**2+(a[2]-b[2])**2;
export const dot3 = (a: Vec3, b: Vec3) => a[0]*b[0]+a[1]*b[1]+a[2]*b[2];

export function normalizeForwardInputs(inputs: ForwardInputs): ForwardInputs {
  return {
    rate: clamp(Number.isFinite(inputs.rate) ? inputs.rate : 70, 50, 110),
    recovery: clamp(Number.isFinite(inputs.recovery) ? inputs.recovery : 100, 70, 135),
    condition: FORWARD_CONDITIONS.some(c => c.id === inputs.condition) ? inputs.condition : "normal",
  };
}

export function electrodePosition(electrode: Electrode): Vec3 {
  const longitude = electrode.longitude * Math.PI / 180;
  const latitude = clamp(electrode.latitude, -80, 80) * Math.PI / 180;
  return [16*Math.cos(latitude)*Math.sin(longitude), 26*Math.sin(latitude), 10*Math.cos(latitude)*Math.cos(longitude)];
}

export function electrodeFromPosition(position: Vec3): Electrode {
  return { longitude: Math.atan2(position[0]/16, position[2]/10)*180/Math.PI, latitude: Math.asin(clamp(position[1]/26,-1,1))*180/Math.PI };
}

/** Regular voxel adjacency, with no myocardial shortcut across the AV plane. */
export function createHeartMesh(rawInputs: ForwardInputs = DEFAULT_FORWARD_INPUTS): HeartMesh {
  const inputs = normalizeForwardInputs(rawInputs);
  const cells: TissueCell[] = [], edges: TissueEdge[] = [], landmarks: HeartMesh["landmarks"] = [];
  const voxels = new Map<string, number>();
  const shapes: { chamber: Chamber; center: Vec3; radii: Vec3; inner: number }[] = [
    { chamber: "LV", center: [1.5,-1.3,-.2], radii: [2.4,3.8,2.2], inner: .48 },
    { chamber: "RV", center: [-1.6,-.7,.8], radii: [2.1,3.1,1.8], inner: .55 },
    { chamber: "RA", center: [-2.1,3.6,.5], radii: [1.8,1.9,1.5], inner: .4 },
    { chamber: "LA", center: [1.5,3.7,-.7], radii: [1.9,1.7,1.5], inner: .4 },
  ];
  for (let iz=-4; iz<=4; iz++) for (let iy=-8; iy<=8; iy++) for (let ix=-6; ix<=6; ix++) {
    const local: Vec3 = [ix*SPACING,iy*SPACING,iz*SPACING];
    const shape = shapes.find(s => {
      const r2 = local.reduce((sum,v,k) => sum+((v-s.center[k])/s.radii[k])**2,0);
      return r2 <= 1 && r2 >= s.inner**2;
    });
    if (!shape) continue;
    const atrial = shape.chamber === "RA" || shape.chamber === "LA";
    // Heterogeneous recovery is part of the membrane equation, not a T-wave template.
    const relativeRadius = Math.sqrt(local.reduce((sum,v,k) => sum+((v-shape.center[k])/shape.radii[k])**2,0));
    const tauClose = atrial ? 72 : (132 - 38*relativeRadius + 2*local[1]) * inputs.recovery / 100;
    voxels.set(`${ix},${iy},${iz}`, cells.length);
    cells.push({ position: [local[0]+1,local[1]+4,local[2]], chamber: shape.chamber, tauIn: .3, tauOut: 6, tauClose, capacity: 1 });
  }
  for (const [key,a] of voxels) {
    const xyz = key.split(",").map(Number);
    for (let axis=0;axis<3;axis++) {
      const neighbour = xyz.slice(); neighbour[axis]++;
      const b=voxels.get(neighbour.join(","));
      if (b === undefined) continue;
      const aAtrial = cells[a].chamber === "RA" || cells[a].chamber === "LA";
      const bAtrial = cells[b].chamber === "RA" || cells[b].chamber === "LA";
      if (aAtrial !== bAtrial) continue;
      // Mild longitudinal anisotropy; illustrative, not a measured fibre field.
      edges.push({ a,b,conductance: axis===1 ? .045 : .03, source:true });
    }
  }
  const closest = (point: Vec3, chamber: Chamber, count=1) => cells
    .map((cell,index) => ({ cell,index }))
    .filter(({cell}) => cell.chamber===chamber)
    .sort((a,b) => distance2(a.cell.position,point)-distance2(b.cell.position,point))
    .slice(0,count).map(({index})=>index);
  const node = (position: Vec3, label?: string, slow=false) => {
    const index=cells.length;
    cells.push({ position, chamber:"node", tauIn:slow?1.2:.15, tauOut:slow?15:6, tauClose:100, capacity:1 });
    if(label) landmarks.push({label,index});
    return index;
  };
  const connect = (a:number,b:number,conductance:number,branch?:TissueEdge["branch"]) => edges.push({a,b,conductance,source:false,branch});
  const sinus = node([-1.7,9.2,1.1],"SA node");
  for (const target of closest(cells[sinus].position,"RA",3)) connect(sinus,target,.12);
  // Interatrial bridge (Bachmann-bundle analogue).
  const atrialRight=closest([-1,8,0],"RA")[0], atrialLeft=closest([1,8,-.5],"LA")[0];
  let previous=atrialRight;
  for(let k=1;k<=4;k++) {
    const start=cells[atrialRight].position,end=cells[atrialLeft].position;
    const next=node(start.map((v,d)=>v+(end[d]-v)*k/5) as unknown as Vec3);
    connect(previous,next,.1);previous=next;
  }
  connect(previous,atrialLeft,.1);
  previous=closest([.2,6,.4],"RA")[0];
  const avFactor=inputs.condition==="av-slow"?.52:1;
  for(let k=0;k<5;k++) {
    const next=node([.3+k*.07,6.1-k*.22,.3],k===2?"AV node":undefined,true);
    connect(previous,next,.032*avFactor,"AV");previous=next;
  }
  const his=node([.65,4.8,.25],"His"); connect(previous,his,.035);
  for(const chamber of ["RV","LV"] as const) {
    const branch=chamber==="RV"?"RBB":"LBB";
    const blocked=inputs.condition===(branch==="RBB"?"rbb-block":"lbb-block");
    const points:Vec3[]=chamber==="RV" ? [[.15,4.2,.8],[-.3,2.6,1.2],[-.1,1.3,1.1]] : [[1.3,4,-.4],[1.8,2,-.6],[2.4,.1,-.2]];
    previous=his;
    points.forEach((point,k)=>{
      const next=node(point,k===0?branch:undefined);
      connect(previous,next,k===0&&blocked?0:k===0?.1:.25,k===0?branch:undefined);
      previous=next;
      if(k>0) for(const target of closest(point,chamber,4)) connect(next,target,.1);
    });
    landmarks.push({label:chamber==="RV"?"RV Purkinje":"LV Purkinje",index:previous});
  }
  const pacing=closest([-.1,1.3,1.1],"RV")[0];
  return {cells,edges,landmarks,sinus,pacing};
}

/** Snapshot integration is run in a Web Worker, never in a React render. */
export function simulateForwardEcg(rawInputs:ForwardInputs, progress?:(percent:number)=>void):ForwardRecording {
  const inputs=normalizeForwardInputs(rawInputs),mesh=createHeartMesh(inputs),n=mesh.cells.length;
  const period=60000/inputs.rate, warmup=Math.ceil(2*period/SAMPLE_MS)*SAMPLE_MS;
  const durationMs=2400,samples=durationMs/SAMPLE_MS+1;
  const voltage=new Float32Array(samples*n),dipole=new Float32Array(samples*3);
  const vm=new Float64Array(n),gate=new Float64Array(n).fill(1),coupling=new Float64Array(n);
  const activationMs=new Float32Array(n).fill(-1),recoveryMs=new Float32Array(n).fill(-1);
  const totalSteps=Math.round((warmup+durationMs)/DT_MS),warmupSteps=Math.round(warmup/DT_MS);
  const sampleEvery=Math.round(SAMPLE_MS/DT_MS);
  const {cells,edges}=mesh;
  const tauIn=Float64Array.from(cells,c=>c.tauIn),tauOut=Float64Array.from(cells,c=>c.tauOut),tauClose=Float64Array.from(cells,c=>c.tauClose);
  const edgeA=Int32Array.from(edges,e=>e.a),edgeB=Int32Array.from(edges,e=>e.b),conductance=Float64Array.from(edges,e=>e.conductance);
  const sourceWeights=[new Float64Array(n),new Float64Array(n),new Float64Array(n)];
  for(const edge of edges) if(edge.source) for(let d=0;d<3;d++) {
    const factor=SOURCE_GAIN*edge.conductance*(cells[edge.b].position[d]-cells[edge.a].position[d]);
    sourceWeights[d][edge.a]+=factor; sourceWeights[d][edge.b]-=factor;
  }
  for(let step=0;step<=totalSteps;step++) {
    const time=step*DT_MS;
    if(step>=warmupSteps&&(step-warmupSteps)%sampleEvery===0) {
      const frame=(step-warmupSteps)/sampleEvery;
      for(let i=0;i<n;i++) {
        voltage[frame*n+i]=vm[i];
        for(let d=0;d<3;d++) dipole[frame*3+d]+=vm[i]*sourceWeights[d][i];
      }
    }
    if(step===totalSteps) break;
    coupling.fill(0);
    for(let j=0;j<edges.length;j++) {
      const a=edgeA[j],b=edgeB[j],current=conductance[j]*(vm[b]-vm[a]);
      coupling[a]+=current; coupling[b]-=current;
    }
    const phase=(time-120+period)%period;
    if(time>=120&&phase<2) coupling[inputs.condition==="rv-pacing"?mesh.pacing:mesh.sinus]+=.6;
    for(let i=0;i<n;i++) {
      const v=vm[i],h=gate[i];
      const dv=h*v*v*(1-v)/tauIn[i]-v/tauOut[i]+coupling[i]/cells[i].capacity;
      const next=v+DT_MS*dv;
      if(!Number.isFinite(next)||next < -.02||next>1.2) throw new Error("Membrane integration became unstable");
      vm[i]=next;
      gate[i]=h+DT_MS*(v<.13?(1-h)/120:-h/tauClose[i]);
      const relativeTime=time+DT_MS-warmup;
      if(relativeTime>=0 && relativeTime<Math.min(period+100,durationMs)) {
        if(v<.5&&next>=.5&&activationMs[i]<0) activationMs[i]=relativeTime;
        if(v>=.5&&next<.5&&activationMs[i]>=0&&recoveryMs[i]<0) recoveryMs[i]=relativeTime;
      }
    }
    if(progress&&step%4000===0) progress(Math.round(step/totalSteps*100));
  }
  const atrial:number[]=[],ventricular:number[]=[];
  let ventricularCount=0;
  cells.forEach((cell,i)=>{
    if(cell.chamber==="LV"||cell.chamber==="RV") {ventricularCount++;if(activationMs[i]>=0)ventricular.push(activationMs[i]);}
    else if(cell.chamber!=="node"&&activationMs[i]>=0) atrial.push(activationMs[i]);
  });
  return {inputs,mesh,sampleMs:SAMPLE_MS,durationMs,samples,voltage,dipole,activationMs,recoveryMs,activation:{
    atrialStart:atrial.length?Math.min(...atrial):null,
    ventricularStart:ventricular.length?Math.min(...ventricular):null,
    ventricularEnd:ventricular.length?Math.max(...ventricular):null,
    ventricularCoverage:ventricular.length/ventricularCount,
  }};
}

/** Electric field kernel, r / |r|^3. Electrodes live on the torso, outside heart. */
export function fieldAt(source:Vec3,electrode:Vec3):Vec3 {
  const r:Vec3=[electrode[0]-source[0],electrode[1]-source[1],electrode[2]-source[2]];
  const denominator=Math.max(.25,Math.hypot(...r))**3;
  return [r[0]/denominator,r[1]/denominator,r[2]/denominator];
}

export function potentialWeights(mesh:HeartMesh,electrode:Vec3):Float64Array {
  const weights=new Float64Array(mesh.cells.length);
  for(const edge of mesh.edges) if(edge.source) {
    const a=mesh.cells[edge.a].position,b=mesh.cells[edge.b].position;
    const midpoint:Vec3=[(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2];
    const displacement:Vec3=[b[0]-a[0],b[1]-a[1],b[2]-a[2]];
    const factor=SOURCE_GAIN*edge.conductance*dot3(displacement,fieldAt(midpoint,electrode));
    weights[edge.a]+=factor; weights[edge.b]-=factor;
  }
  return weights;
}

export function referencePositions(placement:LeadPlacement):Vec3[] {
  return placement.reference==="wilson"?Object.values(LIMB_ELECTRODES).map(electrodePosition):[electrodePosition(placement.negative)];
}

export function leadFieldAtCenter(placement:LeadPlacement):Vec3 {
  const positive=fieldAt(HEART_CENTER,electrodePosition(placement.positive)),refs=referencePositions(placement);
  return positive.map((value,d)=>value-refs.reduce((sum,p)=>sum+fieldAt(HEART_CENTER,p)[d],0)/refs.length) as unknown as Vec3;
}

export function measureForwardTrace(recording:ForwardRecording,placement:LeadPlacement):ForwardTrace {
  const positiveWeights=potentialWeights(recording.mesh,electrodePosition(placement.positive));
  const references=referencePositions(placement),referenceWeights=new Float64Array(positiveWeights.length);
  for(const position of references) {
    const weights=potentialWeights(recording.mesh,position);
    for(let i=0;i<weights.length;i++) referenceWeights[i]+=weights[i]/references.length;
  }
  const values=new Float32Array(recording.samples),positive=new Float32Array(recording.samples),reference=new Float32Array(recording.samples),approximate=new Float32Array(recording.samples);
  const n=recording.mesh.cells.length,leadField=leadFieldAtCenter(placement);
  let peak=0;
  for(let frame=0;frame<recording.samples;frame++) {
    let p=0,r=0;
    for(let i=0;i<n;i++) {const v=recording.voltage[frame*n+i];p+=v*positiveWeights[i];r+=v*referenceWeights[i];}
    positive[frame]=p;reference[frame]=r;values[frame]=p-r;
    approximate[frame]=dot3([recording.dipole[frame*3],recording.dipole[frame*3+1],recording.dipole[frame*3+2]],leadField);
    peak=Math.max(peak,Math.abs(p-r));
  }
  return {values,positive,reference,approximate,peak};
}

export function leadPreset(id:string):LeadPlacement {
  if(id==="I") return {positive:LIMB_ELECTRODES.LA,negative:LIMB_ELECTRODES.RA,reference:"bipolar"};
  if(id==="III") return {positive:LIMB_ELECTRODES.LL,negative:LIMB_ELECTRODES.LA,reference:"bipolar"};
  const chest:Record<string,Electrode>={V1:{longitude:-9,latitude:16},V2:{longitude:9,latitude:16},V3:{longitude:18,latitude:12},V4:{longitude:28,latitude:7},V5:{longitude:48,latitude:7},V6:{longitude:75,latitude:7}};
  if(chest[id]) return {positive:chest[id],negative:LIMB_ELECTRODES.RA,reference:"wilson"};
  return {positive:LIMB_ELECTRODES.LL,negative:LIMB_ELECTRODES.RA,reference:"bipolar"};
}
