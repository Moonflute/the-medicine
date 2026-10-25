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
export const MYOCARDIAL_REGIONS = ["lv-septal", "lv-apical", "lv-lateral", "lv-anterior", "lv-posterior", "lv-basal", "rv-anterior", "rv-apical", "rv-basal"] as const;
export type MyocardialRegion = typeof MYOCARDIAL_REGIONS[number];
/** Research extension seam, not an infarction preset. Values are normalized,
 * NOT mV, ionic concentrations, or a validated mapping from ischemic severity. */
export type RegionalTissue = { region: MyocardialRegion; from?: number; to?: number; restingPotential?: number; amplitude?: number; excitability?: number; recoveryScale?: number; couplingScale?: number };
export type ForwardInputs = { rate: number; condition: ConductionCondition; recovery: number; tissue?: RegionalTissue[] };
export type TissueCell = { position: Vec3; chamber: Chamber; tauIn: number; tauOut: number; tauClose: number; capacity: number; region?: string; transmural?: number; longitudinal?: number; column?: number; bridge?: boolean; restingPotential?: number; amplitude?: number; excitability?: number };
export type MeshResolution = { atrialLayers: number; ventricularLayers: number };
export const DEFAULT_MESH_RESOLUTION: MeshResolution = { atrialLayers: 33, ventricularLayers: 18 };
export type TissueEdge = { a: number; b: number; conductance: number; source: boolean; branch?: "RBB" | "LBB" | "AV" };
export type HeartMesh = { cells: TissueCell[]; edges: TissueEdge[]; landmarks: { label: string; index: number }[]; sinus: number; pacing: number };
export type ForwardRecording = {
  inputs: ForwardInputs; mesh: HeartMesh; sampleMs: number; durationMs: number;
  samples: number; voltage: Float32Array; dipole: Float32Array;
  activationMs: Float32Array; recoveryMs: Float32Array;
  activation: { atrialStart: number | null; ventricularStart: number | null; ventricularEnd: number | null; ventricularCoverage: number };
};
export type Electrode = { longitude: number; latitude: number };
export type LimbElectrodeId = "RA" | "LA" | "LL";
export type ElectrodeId = LimbElectrodeId | "V1" | "V2" | "V3" | "V4" | "V5" | "V6";
export type ElectrodeMap = Record<ElectrodeId, Electrode>;
export type LeadPlacement = { positive: Electrode; negative: Electrode; reference: "bipolar" | "wilson" | "augmented-ra" | "augmented-la" | "augmented-ll"; limbs?: Record<LimbElectrodeId, Electrode> };
export const STANDARD_LEADS = ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"] as const;
export type StandardLead = typeof STANDARD_LEADS[number];
export type ForwardTrace = { values: Float32Array; positive: Float32Array; reference: Float32Array; approximate: Float32Array; peak: number };
export const DEFAULT_FORWARD_INPUTS: ForwardInputs = { rate: 70, condition: "normal", recovery: 100 };
export const DEFAULT_PLACEMENT: LeadPlacement = {
  positive: { longitude: 48, latitude: -42 }, negative: { longitude: -64, latitude: 37 }, reference: "bipolar",
};
export const HEART_CENTER: Vec3 = [2.5, 4, 1.2];
export const TORSO_RADII: Vec3 = [16, 26, 10];
export const LIMB_ELECTRODES: Record<"RA" | "LA" | "LL", Electrode> = {
  RA: { longitude: -64, latitude: 37 }, LA: { longitude: 64, latitude: 37 }, LL: { longitude: 48, latitude: -42 },
};
export const ELECTRODE_IDS: ElectrodeId[] = ["RA", "LA", "LL", "V1", "V2", "V3", "V4", "V5", "V6"];
export const DEFAULT_ELECTRODES: ElectrodeMap = {
  ...LIMB_ELECTRODES,
  V1:{longitude:-9,latitude:16}, V2:{longitude:9,latitude:16}, V3:{longitude:23,latitude:10},
  V4:{longitude:28,latitude:7}, V5:{longitude:48,latitude:7}, V6:{longitude:75,latitude:7},
};
export const FORWARD_CONDITIONS: { id: ConductionCondition; label: string; explanation: string }[] = [
  { id: "normal", label: "기준 전도", explanation: "SA 자극이 Atria → AV 연결부 → His–Purkinje → Ventricles로 퍼집니다. 각 구역의 활성 시각은 계산 결과입니다." },
  { id: "av-slow", label: "AV 전도 저하", explanation: "AV 연결부의 결합도를 낮춥니다. 심실 활성 지연·실패 여부는 조직 계산으로 결정되며, 임상적 AV block 등급을 재현한 프리셋은 아닙니다." },
  { id: "rbb-block", label: "RBB 연결 차단", explanation: "His–RBB 연결을 끄고 해당 branch의 Distal 결합도도 낮춥니다. 남은 심근 경로를 통한 RV의 지연 활성과 후반 전위차를 비교합니다. 진단용 RBBB 모델은 아닙니다." },
  { id: "lbb-block", label: "LBB 연결 차단", explanation: "His–LBB 연결을 끄고 해당 branch의 Distal 결합도도 낮춥니다. LV의 활성 분산과 넓어진 Lateral lead 파형을 비교합니다. 진단용 LBBB 모델은 아닙니다." },
  { id: "rv-pacing", label: "RV 자극", explanation: "SA 대신 RV의 작은 구역에 자극 전류를 줍니다. 달라진 시작점에서 실제로 전파를 계산하며, pacing spike나 기기 회로는 포함하지 않습니다." },
];

const DT_MS = .1;
const SAMPLE_MS = 2;
// A single fixed scale for every electrode and scenario; never normalize each lead.
export const FORWARD_SOURCE_GAIN = 1200;
const SOURCE_GAIN = FORWARD_SOURCE_GAIN;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
export const dot3 = (a: Vec3, b: Vec3) => a[0]*b[0]+a[1]*b[1]+a[2]*b[2];

export function normalizeForwardInputs(inputs: ForwardInputs): ForwardInputs {
  const finite=(value:number|undefined,fallback:number,min:number,max:number)=>clamp(Number.isFinite(value)?value!:fallback,min,max);
  const tissue=Array.isArray(inputs.tissue)?inputs.tissue.filter(item=>item&&MYOCARDIAL_REGIONS.includes(item.region)).slice(0,18).map(item=>({
    region:item.region,from:finite(item.from,0,0,1),to:finite(item.to,1,0,1),
    restingPotential:finite(item.restingPotential,0,0,.15),amplitude:finite(item.amplitude,1,.5,1.2),
    excitability:finite(item.excitability,1,.2,1.5),recoveryScale:finite(item.recoveryScale,1,.6,1.4),couplingScale:finite(item.couplingScale,1,.2,1.5),
  })).filter(item=>item.to>=item.from):[];
  return {
    rate: clamp(Number.isFinite(inputs.rate) ? inputs.rate : 70, 50, 110),
    recovery: clamp(Number.isFinite(inputs.recovery) ? inputs.recovery : 100, 70, 135),
    condition: FORWARD_CONDITIONS.some(c => c.id === inputs.condition) ? inputs.condition : "normal",
    ...(tissue.length?{tissue}:{}),
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

/** Torso coordinates are separate from the enlarged anatomical cutaway. */
export function projectScenePosition(point:Vec3,yaw:number) {
  const angle=yaw*Math.PI/180,c=Math.cos(angle),s=Math.sin(angle);
  return {x:310+14*(point[0]*c+point[2]*s),y:300-8.8*point[1],z:-point[0]*s+point[2]*c,front:-point[0]*s/TORSO_RADII[0]**2+point[2]*c/TORSO_RADII[2]**2>=-1e-10};
}

export function pickSceneSurface(x:number,y:number,yaw:number):Electrode|null {
  const screenX=(x-310)/14,worldY=(300-y)/8.8,angle=yaw*Math.PI/180;
  const c=Math.cos(angle),s=Math.sin(angle),[rx,ry,rz]=TORSO_RADII;
  const a=s*s/(rx*rx)+c*c/(rz*rz),b=2*screenX*c*s*(1/(rz*rz)-1/(rx*rx));
  const q=screenX*screenX*(c*c/(rx*rx)+s*s/(rz*rz))+worldY*worldY/(ry*ry)-1;
  const discriminant=b*b-4*a*q;if(discriminant<-1e-10)return null;
  const depth=(-b+Math.sqrt(Math.max(0,discriminant)))/(2*a);
  return electrodeFromPosition([c*screenX-s*depth,worldY,s*screenX+c*depth]);
}

/** Coarse 3-D myocardial patches. Each ventricular patch has endocardial
 * Purkinje junctions, a refinable transmural grid and lateral tissue connections.
 * Patch area scales BOTH capacitance and coupling, preserving propagation speed
 * while representing atrial/ventricular mass. No ECG waveform is prescribed. */
export function createHeartMesh(rawInputs: ForwardInputs = DEFAULT_FORWARD_INPUTS, resolution: MeshResolution = DEFAULT_MESH_RESOLUTION): HeartMesh {
  const inputs = normalizeForwardInputs(rawInputs);
  const cells: TissueCell[] = [], edges: TissueEdge[] = [], landmarks: HeartMesh["landmarks"] = [];
  const unit = (v: Vec3): Vec3 => { const length=Math.hypot(...v); return v.map(x=>x/length) as unknown as Vec3; };
  const cross = (a: Vec3,b: Vec3): Vec3 => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const patches = new Map<string,number[][]>();
  const patch = (id:string,chamber:Chamber,origin:Vec3,direction:Vec3,depth:number,area:number,apd:number,atrial=false) => {
    const requested=atrial?resolution.atrialLayers:resolution.ventricularLayers;
    const layers=Math.round(clamp(Number.isFinite(requested)?requested:atrial?33:18,atrial?17:12,atrial?65:36)),side=atrial?2:3,normal=unit(direction),spacing=(layers-1)/(atrial?8:5);
    const tangent=unit(cross(normal,Math.abs(normal[2])<.85?[0,0,1]:[0,1,0])),other=cross(normal,tangent);
    const columns:number[][]=[];
    for(let row=0;row<side;row++) for(let col=0;col<side;col++) {
      const column:number[]=[];
      for(let layer=0;layer<layers;layer++) {
        const fraction=layer/(layers-1);
        // Finite myocardial bundles taper at their boundaries. A constant-area
        // rectangular slab produces an unrealistically flat depolarization pulse.
        const section=.16+.84*Math.sin(Math.PI*fraction)**2;
        const u=(col-(side-1)/2)*.28*Math.sqrt(section),v=(row-(side-1)/2)*.28*Math.sqrt(section);
        const position=origin.map((p,d)=>p+normal[d]*depth*fraction+tangent[d]*u+other[d]*v) as unknown as Vec3;
        const index=cells.length;
        // Regional transmural APD gradients let recovery have a different
        // spatial direction from activation, rather than copying QRS polarity.
        const transmuralGradient=id==="lv-posterior"?42:46;
        const tauClose=atrial?70:(apd-transmuralGradient*fraction+row*2+col)*inputs.recovery/100;
        cells.push({position,chamber,tauIn:.3,tauOut:atrial?6:9,tauClose,capacity:area*section/spacing,region:id,column:row*side+col,transmural:atrial?undefined:fraction,longitudinal:atrial?fraction:undefined});
        column.push(index);
        const tissueEdge=(a:number,g:number)=>edges.push({a,b:index,conductance:g*2*cells[a].capacity*cells[index].capacity/(cells[a].capacity+cells[index].capacity),source:true});
        if(layer)tissueEdge(column[layer-1],(atrial?.018:id==="lv-septal"?.026:.016)*spacing**2);
        if(col)tissueEdge(columns[columns.length-1][layer],.012);
        if(row)tissueEdge(columns[columns.length-side][layer],.012);
      }
      columns.push(column);
    }
    patches.set(id,columns); return columns;
  };
  const ra=patch("ra-wall","RA",[-2.0,9.0,.9],[.45,-1,-.05],2.4,.48,70,true);
  const la=patch("la-wall","LA",[.8,8.6,-.5],[.8,-.65,-.65],2.4,.38,70,true);
  const ventricular = [
    {id:"lv-septal",chamber:"LV",origin:[.65,3.55,.1],normal:[-.65,-.05,.8],depth:.85,area:.72,apd:150,level:0},
    {id:"lv-apical",chamber:"LV",origin:[1.55,.9,-.15],normal:[.55,-.8,.05],depth:1.35,area:1.25,apd:142,level:1},
    {id:"lv-lateral",chamber:"LV",origin:[2.05,2.7,-.15],normal:[.9,-.4,-.15],depth:1.3,area:1.8,apd:151,level:2},
    {id:"lv-anterior",chamber:"LV",origin:[1.45,3.15,.6],normal:[.5,-.5,.8],depth:1,area:1.15,apd:145,level:1},
    {id:"lv-posterior",chamber:"LV",origin:[1.75,2.7,-.7],normal:[.5,-.5,-.85],depth:1.15,area:1.1,apd:158,level:3},
    {id:"lv-basal",chamber:"LV",origin:[1.7,4.2,-.2],normal:[-.2,.9,-.35],depth:1,area:.7,apd:160,level:3},
    {id:"rv-anterior",chamber:"RV",origin:[-.25,3.1,.75],normal:[-.6,-.3,.75],depth:.65,area:.5,apd:142,level:2},
    {id:"rv-apical",chamber:"RV",origin:[-.5,1.3,.8],normal:[-.6,-.7,.3],depth:.65,area:.4,apd:136,level:1},
    {id:"rv-basal",chamber:"RV",origin:[-.7,4.1,.8],normal:[-.7,.55,.4],depth:.6,area:.25,apd:151,level:3},
  ] as const;
  for(const region of ventricular) patch(region.id,region.chamber,region.origin,region.normal,region.depth,region.area,region.apd);
  const node = (position: Vec3, label?: string, slow=false, capacity=2, ventricular=false) => {
    const index=cells.length;
    cells.push({ position, chamber:"node", tauIn:slow?1.2:ventricular?.3:.12, tauOut:slow?15:6, tauClose:ventricular?160*inputs.recovery/100:65, capacity:slow?1:capacity,region:"conduction" });
    if(label) landmarks.push({label,index});
    return index;
  };
  const connect = (a:number,b:number,conductance:number,branch?:TissueEdge["branch"]) => edges.push({a,b,conductance,source:false,branch});
  const sinus = node([-2.1,9.25,1],"SA node");
  for (const column of ra) connect(sinus,column[0],.12*cells[column[0]].capacity);
  // Atrial spread is reduced to distributed myocardial coupling. There is no
  // separately represented named interatrial tract, node chain, or drawn arch.
  for(let col=0;col<ra.length;col++) {
    const a=ra[col][Math.round((ra[col].length-1)*.2)],b=la[col][0];
    edges.push({a,b,conductance:.045*cells[b].capacity,source:false});
  }
  let previous=ra[2][Math.round((ra[2].length-1)*.625)];
  const avFactor=inputs.condition==="av-slow"?.52:1;
  for(let k=0;k<6;k++) {
    const next=node([.3+k*.07,6.1-k*.18,.3],k===3?"AV node":undefined,true);
    connect(previous,next,.032*avFactor,"AV");previous=next;
  }
  const his=node([.65,4.8,.25],"His",false,2,true); connect(previous,his,.08);
  for(const chamber of ["RV","LV"] as const) {
    const branch=chamber==="RV"?"RBB":"LBB";
    const blocked=inputs.condition===(branch==="RBB"?"rbb-block":"lbb-block");
    const points:Vec3[]=chamber==="RV" ? [[.1,4.2,.7],[-.2,3.2,1],[-.4,1.5,1],[-.7,4,.7]] : [[1.1,4.1,-.2],[1.6,2.3,-.2],[1.8,1,-.3],[1.5,4.1,-.5]];
    const trunk:number[]=[];
    previous=his;
    points.forEach((point,k)=>{
      const next=node(point,k===0?branch:undefined,false,2,true);
      // Illustrative distributed branch impairment, not an isolated proximal cut:
      // retain slower reciprocal distal conduction instead of synchronously
      // re-exciting the whole affected ventricle through one retrograde terminal.
      connect(previous,next,k===0&&blocked?0:blocked?.03:.085,k===0?branch:undefined);
      trunk.push(next);
      previous=next;
    });
    landmarks.push({label:chamber==="RV"?"RV Purkinje":"LV Purkinje",index:trunk[1]});
    for(const region of ventricular.filter(region=>region.chamber===chamber)) {
      const columns=patches.get(region.id)!;
      const terminal=node(region.origin,undefined,false,region.id==="lv-basal"?24:region.id==="rv-basal"?18:12,true);
      connect(trunk[region.level],terminal,.2);
      // Small spatial variation in terminal coupling avoids identical upstrokes
      // in all nine bundles. No lead-specific timing or output filtering.
      // Junction area must not shrink when the first myocardial control volume
      // becomes thinner. Otherwise refinement accidentally prevents retrograde capture.
      columns.forEach((column,i)=>connect(terminal,column[0],.065*(column.length-1)/5*(.85+.3*(i%3)/2)*cells[column[0]].capacity));
    }
  }
  // Reciprocal septal myocardial path permits delayed activation during BBB or pacing.
  const septal=patches.get("lv-septal")!,rv=patches.get("rv-anterior")!;
  for(let i=0;i<septal.length;i++) edges.push({a:septal[i][septal[i].length-1],b:rv[i][0],conductance:.008,source:true});
  // Continuous, low-mass myocardial cables between adjacent regional patches.
  // Without these the disconnected walls could only be recruited by retrograde
  // Purkinje conduction: a long silent gap followed by a narrow second QRS.
  // Intermediate cells carry current and have their own Vm/recovery; this is not
  // a time shift, a long nonlocal dipole, or a prescribed widening of the trace.
  const neighbors = [
    ["lv-septal","lv-apical"], ["lv-apical","lv-anterior"],
    ["lv-apical","lv-lateral"], ["lv-lateral","lv-posterior"],
    ["lv-posterior","lv-basal"], ["rv-anterior","rv-apical"],
    ["rv-apical","rv-basal"],
  ];
  for(const [from,to] of neighbors) {
    const first=patches.get(from)!,last=patches.get(to)!;
    for(const column of [0,4,8]) {
      const a=first[column][0],b=last[column][0];
      let previous=a;
      for(let k=1;k<=6;k++) {
        const index=cells.length,fraction=k/7;
        const position=cells[a].position.map((value,d)=>value+(cells[b].position[d]-value)*fraction) as unknown as Vec3;
        cells.push({...cells[a],position,capacity:.03,tauClose:(cells[a].tauClose+cells[b].tauClose)/2,region:to,transmural:0,bridge:true});
        edges.push({a:previous,b:index,conductance:.003,source:true});previous=index;
      }
      edges.push({a:previous,b,conductance:.003,source:true});
    }
  }
  const pacing=patches.get("rv-apical")![4][0];
  // Embed the electrical tissue, not the enlarged SVG, in torso coordinates.
  // The former narrow, nearly central cluster and synchronous anterior/posterior
  // recruitment cancelled the V3 QRS. Separate wall locations and Purkinje levels
  // now produce a rotating distributed source rather than one scaled lead vector.
  // Dimensions/coupling remain educational parameters, not patient calibration.
  for(const cell of cells) cell.position=[HEART_CENTER[0]+(cell.position[0]-1)*1.4,cell.position[1],HEART_CENTER[2]+cell.position[2]*1.3];
  // Regional material changes act BEFORE integration. Source recovery uses the
  // actual membrane potential, preserving resting gradients and DC information.
  // Never add an ST offset to a lead or independently normalize its baseline.
  const conductivity=new Float64Array(cells.length).fill(1);
  cells.forEach((cell,index)=>{
    if(cell.transmural===undefined||cell.bridge)return;
    const material=inputs.tissue?.findLast(item=>item.region===cell.region&&cell.transmural!>=item.from!&&cell.transmural!<=item.to!);
    if(!material)return;
    cell.restingPotential=material.restingPotential;cell.amplitude=material.amplitude;cell.excitability=material.excitability;
    cell.tauClose*=material.recoveryScale!;conductivity[index]=material.couplingScale!;
  });
  for(const edge of edges)edge.conductance*=2*conductivity[edge.a]*conductivity[edge.b]/(conductivity[edge.a]+conductivity[edge.b]);
  return {cells,edges,landmarks,sinus,pacing};
}

/** Snapshot integration is run in a Web Worker, never in a React render. */
export function simulateForwardEcg(rawInputs:ForwardInputs, progress?:(percent:number)=>void, resolution:MeshResolution=DEFAULT_MESH_RESOLUTION):ForwardRecording {
  const inputs=normalizeForwardInputs(rawInputs),mesh=createHeartMesh(inputs,resolution),n=mesh.cells.length;
  const period=60000/inputs.rate, warmup=Math.ceil(2*period/SAMPLE_MS)*SAMPLE_MS;
  const durationMs=2400,samples=durationMs/SAMPLE_MS+1;
  const voltage=new Float32Array(samples*n),dipole=new Float32Array(samples*3);
  const vm=Float64Array.from(mesh.cells,c=>c.restingPotential??0),gate=new Float64Array(n).fill(1),coupling=new Float64Array(n);
  const activationMs=new Float32Array(n).fill(-1),recoveryMs=new Float32Array(n).fill(-1);
  const totalSteps=Math.round((warmup+durationMs)/DT_MS),warmupSteps=Math.round(warmup/DT_MS);
  const sampleEvery=Math.round(SAMPLE_MS/DT_MS);
  const {cells,edges}=mesh;
  const tauIn=Float64Array.from(cells,c=>c.tauIn),tauOut=Float64Array.from(cells,c=>c.tauOut),tauClose=Float64Array.from(cells,c=>c.tauClose);
  const rest=Float64Array.from(cells,c=>c.restingPotential??0),amplitude=Float64Array.from(cells,c=>c.amplitude??1),excitability=Float64Array.from(cells,c=>c.excitability??1);
  const edgeA=Int32Array.from(edges,e=>e.a),edgeB=Int32Array.from(edges,e=>e.b),conductance=Float64Array.from(edges,e=>e.conductance);
  const stimulusTargets=inputs.condition==="rv-pacing"?cells.flatMap((cell,index)=>cell.region==="rv-apical"&&cell.transmural===0&&!cell.bridge?[index]:[]):[mesh.sinus];
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
    // A brief stimulus conductance drives Vm toward 1. Its driving force falls
    // during depolarization, including when a pacing pulse meets refractory tissue.
    if(time>=120&&phase<2) for(const target of stimulusTargets) coupling[target]+=1.2*cells[target].capacity*(1-vm[target]);
    for(let i=0;i<n;i++) {
      const v=vm[i],h=gate[i];
      const u=(v-rest[i])/amplitude[i];
      const dv=amplitude[i]*(excitability[i]*h*u*u*(1-u)/tauIn[i]-u/tauOut[i])+coupling[i]/cells[i].capacity;
      const next=v+DT_MS*dv;
      if(!Number.isFinite(next)||next < -.02||next>1.5) throw new Error(`Membrane integration became unstable: ${cells[i].region}, cell ${i}, t=${time.toFixed(1)}, Vm=${next.toFixed(4)}`);
      vm[i]=next;
      gate[i]=h+DT_MS*(u<.13?(1-h)/120:-h/tauClose[i]);
      const relativeTime=time+DT_MS-warmup;
      if(relativeTime>=0 && relativeTime<Math.min(period+100,durationMs)) {
        const nextU=(next-rest[i])/amplitude[i];
        if(u<.5&&nextU>=.5&&activationMs[i]<0) activationMs[i]=relativeTime;
        if(u>=.5&&nextU<.5&&activationMs[i]>=0&&recoveryMs[i]<0) recoveryMs[i]=relativeTime;
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
  const limbs=placement.limbs??LIMB_ELECTRODES;
  if(placement.reference==="wilson") return Object.values(limbs).map(electrodePosition);
  if(placement.reference.startsWith("augmented-")) {
    const excluded=placement.reference.slice(10).toUpperCase();
    return Object.entries(limbs).filter(([name])=>name!==excluded).map(([,value])=>electrodePosition(value));
  }
  return [electrodePosition(placement.negative)];
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

export function leadPreset(id:string,electrodes:ElectrodeMap=DEFAULT_ELECTRODES):LeadPlacement {
  const limbs={RA:electrodes.RA,LA:electrodes.LA,LL:electrodes.LL},negative=limbs.RA;
  if(id==="I") return {positive:limbs.LA,negative,reference:"bipolar",limbs};
  if(id==="III") return {positive:limbs.LL,negative:limbs.LA,reference:"bipolar",limbs};
  if(id==="aVR") return {positive:limbs.RA,negative:limbs.LA,reference:"augmented-ra",limbs};
  if(id==="aVL") return {positive:limbs.LA,negative,reference:"augmented-la",limbs};
  if(id==="aVF") return {positive:limbs.LL,negative,reference:"augmented-ll",limbs};
  if(/^V[1-6]$/.test(id)) return {positive:electrodes[id as ElectrodeId],negative,reference:"wilson",limbs};
  return {positive:limbs.LL,negative,reference:"bipolar",limbs};
}

const electrodePotentialCache=new WeakMap<ForwardRecording,Map<ElectrodeId,{key:string;values:Float32Array}>>();
export function measureStandardTraces(recording:ForwardRecording,electrodes:ElectrodeMap=DEFAULT_ELECTRODES):Record<StandardLead,ForwardTrace> {
  let cache=electrodePotentialCache.get(recording);if(!cache){cache=new Map();electrodePotentialCache.set(recording,cache);}
  const potentials={} as Record<ElectrodeId,Float32Array>,n=recording.mesh.cells.length;
  for(const name of ELECTRODE_IDS) {
    const e=electrodes[name],key=`${e.longitude}:${e.latitude}`,saved=cache.get(name);
    if(saved?.key===key){potentials[name]=saved.values;continue;}
    const weights=potentialWeights(recording.mesh,electrodePosition(e)),values=new Float32Array(recording.samples);
    for(let frame=0;frame<recording.samples;frame++){let value=0;for(let i=0;i<n;i++)value+=recording.voltage[frame*n+i]*weights[i];values[frame]=value;}
    cache.set(name,{key,values});potentials[name]=values;
  }
  return Object.fromEntries(STANDARD_LEADS.map(lead=>{
    const positiveId:ElectrodeId=lead.startsWith("V")?lead as ElectrodeId:lead==="I"||lead==="aVL"?"LA":lead==="aVR"?"RA":"LL";
    const refs:ElectrodeId[]=lead==="I"||lead==="II"?["RA"]:lead==="III"?["LA"]:lead==="aVR"?["LA","LL"]:lead==="aVL"?["RA","LL"]:lead==="aVF"?["RA","LA"]:["RA","LA","LL"];
    const positive=potentials[positiveId],reference=new Float32Array(recording.samples),values=new Float32Array(recording.samples),approximate=new Float32Array(recording.samples),field=leadFieldAtCenter(leadPreset(lead,electrodes));
    let peak=0;
    for(let frame=0;frame<recording.samples;frame++) {
      let r=0;for(const ref of refs)r+=potentials[ref][frame]/refs.length;
      reference[frame]=r;values[frame]=positive[frame]-r;peak=Math.max(peak,Math.abs(values[frame]));
      approximate[frame]=recording.dipole[frame*3]*field[0]+recording.dipole[frame*3+1]*field[1]+recording.dipole[frame*3+2]*field[2];
    }
    return [lead,{positive,reference,values,approximate,peak}];
  })) as Record<StandardLead,ForwardTrace>;
}
