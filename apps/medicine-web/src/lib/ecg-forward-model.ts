/**
 * Educational forward ECG, independent of ecg-model's synthetic rhythm strips.
 * A coarse 3-D graph integrates Mitchell–Schaeffer or ionic membrane dynamics
 * and reciprocal diffusive coupling. Extracellular potentials are recovered
 * from distributed edge-current dipoles in an infinite homogeneous conductor.
 * Geometry, tissue parameters and gain are illustrative, NOT patient calibrated.
 * References and limitations: source_notes/05 Physiology/Interactive/ecg-arrhythmia.md
 */
export type Vec3 = readonly [number, number, number];
export type Chamber = "RA" | "LA" | "RV" | "LV" | "node";
export type ConductionCondition = "normal" | "av-slow" | "rbb-block" | "lbb-block" | "rv-pacing" | "wpw" | "pvc" | "hyperkalemia" | "long-qt" | "short-qt" | "mobitz1" | "mobitz2" | "complete-av" | "af";
export type ElectrophysiologyInputs = { accessoryRegion?: "lv-lateral" | "lv-septal" | "rv-basal"; ectopicRegion?: MyocardialRegion; couplingMs?: number; potassium?: number; potassiumScale?: number; avCoupling?: number; branchCoupling?: number; hisRecovery?:number; atrialDrive?:number; atrialRecovery?:number };
export const MYOCARDIAL_REGIONS = ["lv-septal", "lv-apical", "lv-lateral", "lv-anterior", "lv-posterior", "lv-basal", "rv-anterior", "rv-apical", "rv-basal"] as const;
export type MyocardialRegion = typeof MYOCARDIAL_REGIONS[number];
export const MYOCARDIAL_LABELS: Record<MyocardialRegion,string> = {"lv-septal":"LV septal","lv-apical":"LV apical","lv-lateral":"LV lateral","lv-anterior":"LV anterior","lv-posterior":"LV posterior","lv-basal":"LV basal","rv-anterior":"RV anterior","rv-apical":"RV apical","rv-basal":"RV basal"};
export type IschemiaInputs = { regions: MyocardialRegion[]; mode: "acute" | "scar"; depth: number; severity: number };
export const DEFAULT_ISCHEMIA: IschemiaInputs = {regions:["lv-anterior"],mode:"acute",depth:100,severity:70};
/** Research extension seam, not an infarction preset. Values are normalized,
 * NOT mV, ionic concentrations, or a validated mapping from ischemic severity. */
export type RegionalTissue = { region: MyocardialRegion; from?: number; to?: number; restingPotential?: number; amplitude?: number; excitability?: number; recoveryScale?: number; couplingScale?: number };
export type ForwardInputs = { rate: number; condition: ConductionCondition; recovery: number; tissue?: RegionalTissue[]; ischemia?: IschemiaInputs; electrophysiology?: ElectrophysiologyInputs };
export type TissueCell = { position: Vec3; chamber: Chamber; tauIn: number; tauOut: number; tauClose: number; capacity: number; region?: string; transmural?: number; longitudinal?: number; column?: number; bridge?: boolean; restingPotential?: number; amplitude?: number; excitability?: number; injury?: number; scar?: boolean; tauOpen?: number; automaticity?: number; slowRecovery?: number; ionic?: boolean };
export type MeshResolution = { atrialLayers: number; ventricularLayers: number };
export const DEFAULT_MESH_RESOLUTION: MeshResolution = { atrialLayers: 33, ventricularLayers: 18 };
export type TissueEdge = { a: number; b: number; conductance: number; source: boolean; branch?: "RBB" | "LBB" | "AV" | "AP" };
export type HeartMesh = { cells: TissueCell[]; edges: TissueEdge[]; landmarks: { label: string; index: number }[]; sinus: number; pacing: number };
export type ForwardRecording = {
  inputs: ForwardInputs; mesh: HeartMesh; sampleMs: number; durationMs: number;
  samples: number; voltage: Float32Array; dipole: Float32Array;
  activationMs: Float32Array; recoveryMs: Float32Array;
  events?: { cell: number; time: number }[];
  stimuli?: { time: number; region: string; kind: "sinus" | "ectopic" | "induction" }[];
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
  { id: "wpw", label: "WPW · Pre-excitation", explanation: "Accessory pathway와 AV–His 경로가 함께 전도합니다. 먼저 흥분한 심근과 뒤따르는 Purkinje 활성의 합으로 파형이 생성됩니다." },
  { id: "pvc", label: "PVC · 조기 자극", explanation: "선택한 심실 부위에 한 번의 조기 자극을 줍니다. Capture·융합·전도 차단은 그 시점의 조직 불응기로 결정됩니다." },
  { id: "hyperkalemia", label: "Hyperkalemia", explanation: "Extracellular K⁺를 바꾸어 Ionic membrane model과 조직 전파를 다시 계산합니다." },
  { id: "long-qt", label: "QT prolongation", explanation: "Repolarizing K⁺ current를 줄여 Action potential과 전체 심실 회복의 변화를 계산합니다." },
  { id: "short-qt", label: "QT shortening", explanation: "Repolarizing K⁺ current를 늘려 Action potential과 전체 심실 회복의 변화를 계산합니다." },
  { id: "mobitz1", label: "Mobitz I · AV node", explanation: "AV nodal 회복을 느리게 하여 박동 사이의 회복 부족·전도 지연·비전도를 계산합니다." },
  { id: "mobitz2", label: "Infranodal block", explanation: "His의 Inward-current availability가 느리게 회복됩니다. 자극 간격과 회복 상태에 따라 전도·비전도가 계산되며, 특정 전도비를 지정하지 않습니다." },
  { id: "complete-av", label: "Complete AV block", explanation: "AV–His 연결을 차단하고 Junctional automaticity가 별도로 심실을 흥분시키게 합니다." },
  { id: "af", label: "AF · 다초점·재진입", explanation: "심방의 국소 자동능·짧은 불응기·불균일한 결합에서 경쟁하는 흥분을 계산합니다. AV node의 회복 상태가 심실 반응을 결정하는 실험용 AF 기전 모델입니다." },
];

export const isRhythmCondition = (condition: ConductionCondition) => ["pvc", "mobitz1", "mobitz2", "complete-av", "af"].includes(condition);
export const isIonicCondition = (condition: ConductionCondition) => ["hyperkalemia", "long-qt", "short-qt"].includes(condition);
export function referenceForwardInputs(inputs:ForwardInputs):ForwardInputs {
  return {...inputs,ischemia:undefined,...(isIonicCondition(inputs.condition)?{condition:"hyperkalemia" as const,electrophysiology:{potassium:5.4,potassiumScale:1}}:{})};
}

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
  const lesion=inputs.ischemia;
  const regions=Array.isArray(lesion?.regions)?MYOCARDIAL_REGIONS.filter(id=>lesion.regions.includes(id)):[];
  const ischemia=regions.length&&lesion?{regions,mode:lesion.mode==="scar"?"scar" as const:"acute" as const,depth:finite(lesion.depth,100,0,100),severity:finite(lesion.severity,70,0,100)}:undefined;
  const ep=inputs.electrophysiology;
  return {
    rate: clamp(Number.isFinite(inputs.rate) ? inputs.rate : 70, 50, 110),
    recovery: clamp(Number.isFinite(inputs.recovery) ? inputs.recovery : 100, 70, 135),
    condition: FORWARD_CONDITIONS.some(c => c.id === inputs.condition) ? inputs.condition : "normal",
    ...(tissue.length?{tissue}:{}),
    ...(ischemia?{ischemia}:{}),
    ...(ep?{electrophysiology:{accessoryRegion:["lv-lateral","lv-septal","rv-basal"].includes(ep.accessoryRegion??"")?ep.accessoryRegion:"lv-lateral",ectopicRegion:MYOCARDIAL_REGIONS.includes(ep.ectopicRegion as MyocardialRegion)?ep.ectopicRegion:"lv-septal",couplingMs:finite(ep.couplingMs,650,250,750),potassium:finite(ep.potassium,7,4,10),potassiumScale:finite(ep.potassiumScale,inputs.condition==="long-qt"?.45:inputs.condition==="short-qt"?2:1,.3,2.5),avCoupling:finite(ep.avCoupling,.52,.3,1.2),branchCoupling:finite(ep.branchCoupling,0,0,1),hisRecovery:finite(ep.hisRecovery,2000,200,3500),atrialDrive:finite(ep.atrialDrive,1,0,1.5),atrialRecovery:finite(ep.atrialRecovery,65,65,180)}}:{}),
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
    if(atrial&&inputs.condition==="af") {
      // Periodic atrial sheet with transverse coupling and a fixed heterogeneous
      // substrate. Reentrant wavefronts, not an RR sequence, drive the AV input.
      const columns:number[][]=[],length=48,width=12;
      for(let y=0;y<width;y++) {
        const column:number[]=[];
        for(let x=0;x<length;x++) {
          const angle=2*Math.PI*x/length,index=cells.length;
          const heterogeneity=(.8+.4*y/(width-1))*(1+.3*Math.sin(x*.7+y*.4));
          cells.push({position:[origin[0]+1.1*Math.cos(angle),origin[1]-.14*y,origin[2]+.7*Math.sin(angle)],chamber,region:id,column:y*3/(width-1),longitudinal:x/(length-1),capacity:area/10,tauIn:.3,tauOut:5,tauClose:(chamber==="RA"?27:22)*heterogeneity,tauOpen:inputs.electrophysiology?.atrialRecovery??65});
          // Small pulmonary-venous boundary foci add a steady inward membrane
          // conductance. Their recovery and electrotonic load determine firing;
          // there is no atrial event list or random/prescribed RR interval.
          if(chamber==="LA")for(const [row,position,drive] of [[1,4,.024],[4,16,.031],[7,28,.038],[10,40,.028]]) {
            if(Math.abs(y-row)<=1&&Math.abs(x-position)<=1)cells[index].automaticity=drive*(inputs.electrophysiology?.atrialDrive??1);
          }
          column.push(index);
          if(x)edges.push({a:column[x-1],b:index,conductance:(chamber==="RA"?.125:.16)*(.75+.5*y/(width-1))*(1+.15*Math.sin(x*.4))*cells[index].capacity,source:true});
          if(y)edges.push({a:columns[y-1][x],b:index,conductance:(x>15&&x<28&&y===6?0:.0005)*cells[index].capacity,source:true});
        }
        edges.push({a:column[0],b:column[length-1],conductance:(chamber==="RA"?.125:.16)*(.75+.5*y/(width-1))*cells[column[0]].capacity,source:true});
        columns.push(column);
      }
      patches.set(id,columns);return columns;
    }
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
        // The fast ionic upstroke needs a resolved propagation safety margin on
        // this coarse graph. Keep a separate, fixed ionic tissue conductivity;
        // its healthy reference uses exactly the same mesh and conductance.
        if(layer)tissueEdge(column[layer-1],(atrial?.018:id==="lv-septal"?.026:.016)*spacing**2*(!atrial&&isIonicCondition(inputs.condition)?2:1));
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
    const ionicVentricle=ventricular&&isIonicCondition(inputs.condition);
    // Ionic ventricular conduction cells use the same channel equations as
    // myocardium, with explicit cable/junction capacities. This avoids mixing an
    // unrelated recovery clock into K/QT experiments; it is not a validated
    // human Purkinje-cell parameterization.
    cells.push({ position, chamber:"node", tauIn:slow?1.2:ventricular?.3:.12, tauOut:slow?15:6, tauClose:ventricular?160*inputs.recovery/100:65, capacity:slow?1:capacity,region:"conduction",...(ionicVentricle?{ionic:true}:{}) });
    if(label) landmarks.push({label,index});
    return index;
  };
  const connect = (a:number,b:number,conductance:number,branch?:TissueEdge["branch"]) => edges.push({a,b,conductance,source:false,branch});
  const sinus = node([-2.1,9.25,1],"SA node");
  for (const [i,column] of ra.entries())if(inputs.condition!=="af"||i===0)connect(sinus,column[0],.12*cells[column[0]].capacity);
  // Atrial spread is reduced to distributed myocardial coupling. There is no
  // separately represented named interatrial tract, node chain, or drawn arch.
  for(let col=0;col<ra.length;col++) {
    if(inputs.condition==="af"&&col!==2&&col!==9)continue;
    const a=ra[col][Math.round((ra[col].length-1)*.2)],b=la[col][0];
    edges.push({a,b,conductance:(isIonicCondition(inputs.condition)?.4:inputs.condition==="af"?.008:.045)*cells[b].capacity,source:false});
  }
  let previous=ra[2][Math.round((ra[2].length-1)*.625)];
  const avFactor=inputs.condition==="av-slow"?(inputs.electrophysiology?.avCoupling??.52):1;
  for(let k=0;k<6;k++) {
    const next=node([.3+k*.07,6.1-k*.18,.3],k===3?"AV node":undefined,true);
    if(inputs.condition==="mobitz1") { cells[next].tauOpen=400; cells[next].tauClose=95; }
    if(inputs.condition==="af") { cells[next].capacity=.65;cells[next].excitability=1.4;cells[next].tauOpen=180; }
    if(isIonicCondition(inputs.condition)){cells[next].excitability=1.6;cells[next].capacity=2;cells[next].tauOpen=400;}
    if(inputs.condition==="af"&&k===0) {
      for(const [sheet,row,x] of [[ra,8,30],[ra,10,26],[la,2,31],[la,4,35]] as const)connect(sheet[row][x],next,.012,"AV");
    }
    // The ionic atrial upstroke is brief. Spread the atrionodal junction over
    // its tissue cross-section instead of loading one tiny control volume with
    // the entire AV node. Junction area and AV recovery belong to this fixed
    // ionic reference substrate, not to an individual lead or target waveform.
    if(isIonicCondition(inputs.condition)&&k===0)ra.forEach(column=>connect(column[Math.round((column.length-1)*.625)],next,.08*avFactor/ra.length,"AV"));
    else connect(previous,next,(isIonicCondition(inputs.condition)?.16:.032)*avFactor,"AV");
    previous=next;
  }
  const his=node([.65,4.8,.25],"His",false,2,true); connect(previous,his,inputs.condition==="complete-av"?0:isIonicCondition(inputs.condition)?.24:.08);
  if(inputs.condition==="mobitz2") cells[his].slowRecovery=inputs.electrophysiology?.hisRecovery??2000;
  if(inputs.condition==="complete-av") { cells[his].automaticity=.02;cells[his].tauOpen=1500; }
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
      const remaining=inputs.electrophysiology?.branchCoupling??0;
      connect(previous,next,blocked?(k===0?.085*remaining:.03+.055*remaining):isIonicCondition(inputs.condition)?.4:.085,k===0?branch:undefined);
      trunk.push(next);
      previous=next;
    });
    landmarks.push({label:chamber==="RV"?"RV Purkinje":"LV Purkinje",index:trunk[1]});
    for(const region of ventricular.filter(region=>region.chamber===chamber)) {
      const columns=patches.get(region.id)!;
      // Ionic myocardium changes the junction input resistance. Terminal area
      // and junction coupling must sustain a resolved upstroke at small dt.
      const terminal=node(region.origin,undefined,false,isIonicCondition(inputs.condition)?3:region.id==="lv-basal"?24:region.id==="rv-basal"?18:12,true);
      connect(trunk[region.level],terminal,isIonicCondition(inputs.condition)?.3:.2);
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
  if(inputs.condition==="wpw") {
    const region=inputs.electrophysiology?.accessoryRegion??"lv-lateral";
    const origin=(region.startsWith("rv")?ra:la)[2];
    const a=origin[Math.round((origin.length-1)*.7)], targets=patches.get(region)!;
    // An excitable atrioventricular cable; its propagation delay is integrated.
    let previous=a;
    for(let k=1;k<=4;k++) {
      const target=targets[4][0], fraction=k/5;
      const position=cells[a].position.map((x,d)=>x+(cells[target].position[d]-x)*fraction) as unknown as Vec3;
      const next=node(position,undefined,false,1,true);cells[next].region="accessory";
      connect(previous,next,.09,"AP");previous=next;
    }
    targets.forEach(column=>connect(previous,column[0],.11*cells[column[0]].capacity,"AP"));
  }
  // Embed the electrical tissue, not the enlarged SVG, in torso coordinates.
  // The former narrow, nearly central cluster and synchronous anterior/posterior
  // recruitment cancelled the V3 QRS. Separate wall locations and Purkinje levels
  // now produce a rotating distributed source rather than one scaled lead vector.
  // Dimensions/coupling remain educational parameters, not patient calibration.
  for(const cell of cells) cell.position=[HEART_CENTER[0]+(cell.position[0]-1)*1.4,cell.position[1],HEART_CENTER[2]+cell.position[2]*1.3];
  if(isIonicCondition(inputs.condition)) {
    const ko=inputs.condition==="hyperkalemia"?(inputs.electrophysiology?.potassium??7):5.4;
    for(const cell of cells)if(cell.chamber==="node"&&!cell.ionic)cell.restingPotential=(8314*310/96485*Math.log(ko/145)+88)/120;
  }
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
  // Lesions change the membrane/coupling equations, never a lead or ST sample.
  // Modified MS resting/reversal terms follow Alvarez (2012). Outward-current
  // and transmural sensitivity changes are a phenomenological extension in the
  // direction described by Shaw/Rudy (1997) and Okada (2020), NOT their ionic
  // equations or a mapping to K+, ATP or minutes. No target ECG enters the solver.
  const lesion=inputs.ischemia;
  if(lesion&&lesion.depth>0&&(lesion.severity>0||lesion.mode==="scar"))cells.forEach((cell,index)=>{
    if(cell.transmural===undefined||cell.bridge||!lesion.regions.includes(cell.region as MyocardialRegion))return;
    const depth=cell.transmural,limit=lesion.depth/100;
    if(lesion.mode==="scar") {
      if(depth>limit)return;
      cell.scar=true;cell.injury=1;cell.restingPotential=0;cell.excitability=0;conductivity[index]=0;
      return;
    }
    // A resolved border zone avoids a discontinuous jump at a partial-wall edge.
    const distance=(limit-depth)/.12;
    const border=limit===1?1:clamp(distance,0,1)**2*(3-2*clamp(distance,0,1));
    const stress=lesion.severity/100*border;
    if(stress===0)return;
    const sensitivity=.4+.6*depth;
    cell.injury=stress;cell.restingPotential=(cell.restingPotential??0)+.12*stress;
    cell.excitability=(cell.excitability??1)*(1-.65*stress*sensitivity);
    // Additional outward conductance represents an ATP-sensitive loss of the
    // plateau, not an imposed APD/voltage offset. Do not also shorten tauClose:
    // the inward/outward balance already shortens the computed action potential.
    cell.tauOut/=1+.6*stress*sensitivity;
    conductivity[index]*=1-.3*stress;
  });
  for(const edge of edges){const a=conductivity[edge.a],b=conductivity[edge.b];edge.conductance*=a+b>0?2*a*b/(a+b):0;}
  return {cells,edges,landmarks,sinus,pacing};
}

/** Snapshot integration is run in a Web Worker, never in a React render. */
export function simulateForwardEcg(rawInputs:ForwardInputs, progress?:(percent:number)=>void, resolution:MeshResolution=DEFAULT_MESH_RESOLUTION, numerical:{warmupCycles?:number;durationMs?:number;timeStepMs?:.1|.05|.025}={}):ForwardRecording {
  const inputs=normalizeForwardInputs(rawInputs),mesh=createHeartMesh(inputs,resolution),n=mesh.cells.length;
  const DT_MS=numerical.timeStepMs??(isIonicCondition(inputs.condition)?.05:.1);
  const period=60000/inputs.rate, warmup=Math.ceil((numerical.warmupCycles??2)*period/SAMPLE_MS)*SAMPLE_MS;
  const durationMs=numerical.durationMs??(isRhythmCondition(inputs.condition)?8000:2400),samples=durationMs/SAMPLE_MS+1;
  const voltage=new Float32Array(samples*n),dipole=new Float32Array(samples*3);
  const ionic=isIonicCondition(inputs.condition)?createIonicMembrane(n,inputs.condition==="hyperkalemia"?(inputs.electrophysiology?.potassium??7):5.4,DT_MS):undefined;
  // Fixed IKs gradients in space, shared by reference, K and QT experiments.
  // 1–1.5 apex/base and endo/epi scaling follows the modeling range in
  // Sung et al. 2021 (doi:10.3389/fphys.2021.740389), not a target T-wave fit.
  const human=ionic?createHumanVentricularMembrane(mesh.cells.map(c=>c.transmural===undefined?0:c.transmural<.2?0:c.transmural<.5?1:2),inputs.condition==="hyperkalemia"?(inputs.electrophysiology?.potassium??7):5.4,DT_MS,mesh.cells.map(c=>c.chamber==="LV"||c.chamber==="RV"?(1+.5*clamp((5.2-c.position[1])/5.5,0,1))*(1+.5*(c.transmural??0)):1)):undefined;
  const ionicKScale=inputs.electrophysiology?.potassiumScale??(inputs.condition==="long-qt"?.45:inputs.condition==="short-qt"?2:1);
  const vm=Float64Array.from(mesh.cells,c=>human&&(c.chamber==="LV"||c.chamber==="RV"||c.ionic)?human.initialVoltage:ionic&&c.chamber!=="node"?ionic.initialVoltage:c.restingPotential??0),gate=new Float64Array(n).fill(1),coupling=new Float64Array(n);
  const availability=new Float64Array(n).fill(1);
  const activationMs=new Float32Array(n).fill(-1),recoveryMs=new Float32Array(n).fill(-1);
  const events:NonNullable<ForwardRecording["events"]>=[], stimuli:NonNullable<ForwardRecording["stimuli"]>=[];
  const eventCells=new Set(mesh.landmarks.map(item=>item.index));
  for(const chamber of ["RA","LA","LV","RV"]) { const index=cellsIndex(mesh,chamber);if(index>=0)eventCells.add(index); }
  const totalSteps=Math.round((warmup+durationMs)/DT_MS),warmupSteps=Math.round(warmup/DT_MS);
  const sampleEvery=Math.round(SAMPLE_MS/DT_MS);
  const {cells,edges}=mesh;
  const tauIn=Float64Array.from(cells,c=>c.tauIn),tauOut=Float64Array.from(cells,c=>c.tauOut),tauClose=Float64Array.from(cells,c=>c.tauClose);
  const rest=Float64Array.from(cells,c=>c.restingPotential??0),amplitude=Float64Array.from(cells,c=>c.amplitude??1),excitability=Float64Array.from(cells,c=>c.excitability??1);
  const edgeA=Int32Array.from(edges,e=>e.a),edgeB=Int32Array.from(edges,e=>e.b),conductance=Float64Array.from(edges,e=>e.conductance);
  const stimulusTargets=inputs.condition==="rv-pacing"?cells.flatMap((cell,index)=>cell.region==="rv-apical"&&cell.transmural===0&&!cell.bridge&&!cell.scar?[index]:[]):[mesh.sinus];
  const ectopicTargets=cells.flatMap((cell,index)=>cell.region===(inputs.electrophysiology?.ectopicRegion??"lv-septal")&&cell.transmural===0&&!cell.bridge&&!cell.scar?[index]:[]);
  const ectopicTime=warmup+120+period+(inputs.electrophysiology?.couplingMs??650);
  let nextSinusStimulus=120,sinusPulseUntil=-Infinity;
  const afS1=cells.flatMap((cell,index)=>cell.chamber==="LA"&&cell.longitudinal===0?[index]:[]);
  const afS2=cells.flatMap((cell,index)=>cell.chamber==="LA"&&cell.longitudinal!>.18&&cell.longitudinal!<.4&&cell.column!<1.5?[index]:[]);
  const afRightS1=cells.flatMap((cell,index)=>cell.chamber==="RA"&&cell.longitudinal===0?[index]:[]);
  const afRightS2=cells.flatMap((cell,index)=>cell.chamber==="RA"&&cell.longitudinal!>.18&&cell.longitudinal!<.4&&cell.column!>1.5?[index]:[]);
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
    if(inputs.condition==="pvc"&&time>=nextSinusStimulus) { sinusPulseUntil=time+2;nextSinusStimulus=time+period; }
    const sinusPulse=inputs.condition==="pvc"?time<sinusPulseUntil:time>=120&&phase<2;
    if(sinusPulse&&inputs.condition!=="af") {
      for(const target of stimulusTargets) coupling[target]+=1.2*cells[target].capacity*(1-vm[target]);
      if(time>=warmup&&(inputs.condition==="pvc"?sinusPulseUntil-time>2-DT_MS:phase<DT_MS))stimuli.push({time:time-warmup,region:inputs.condition==="rv-pacing"?"rv-apical":"SA node",kind:"sinus"});
    }
    if(inputs.condition==="af") {
      const targets=time>=120&&time<122?afS1:time>=240&&time<242?afS2:time>=160&&time<162?afRightS1:time>=300&&time<302?afRightS2:[];
      for(const target of targets)coupling[target]+=1.2*cells[target].capacity*(1-vm[target]);
    }
    if(inputs.condition==="pvc"&&time>=ectopicTime&&time<ectopicTime+2) {
      for(const target of ectopicTargets)coupling[target]+=1.2*cells[target].capacity*(1-vm[target]);
      if(time<ectopicTime+DT_MS)stimuli.push({time:time-warmup,region:inputs.electrophysiology?.ectopicRegion??"lv-septal",kind:"ectopic"});
    }
    for(let i=0;i<n;i++) {
      const v=vm[i],h=gate[i];
      const u=(v-rest[i])/amplitude[i];
      // Alvarez et al. (2012), Eqs. 10-11: raising resting potential does
      // not translate the inward-current reversal potential. Keep (1 - Vm)
      // distinct from (Vm - Vrest), so injury changes the AP, not its offset.
      const automatic=cells[i].automaticity??0;
      const atrialCell=cells[i].chamber==="RA"||cells[i].chamber==="LA";
      // Continuous slow availability, not a timer that forcibly erases a beat.
      // Voltage-dependent inactivation and recovery also respond to concealed
      // subthreshold input at the His membrane.
      if(cells[i].slowRecovery) {
        const inf=u<.13?1:0,tau=u<.13?cells[i].slowRecovery!:30;
        availability[i]=inf+(availability[i]-inf)*Math.exp(-DT_MS/tau);
      }
      const available=h*availability[i];
      const diffusion=coupling[i]/cells[i].capacity+automatic*(1-v)*h;
      const dv=human&&!atrialCell&&(cells[i].chamber!=="node"||cells[i].ionic)?human.derivative(i,v,ionicKScale,diffusion):ionic&&atrialCell?ionic.derivative(i,v,true,1,1,diffusion):amplitude[i]*(excitability[i]*available*u*u*(1-v/amplitude[i])/tauIn[i]-u/tauOut[i])+diffusion;
      const next=v+DT_MS*dv;
      if(!Number.isFinite(next)||next < (ionic?-.25:-.02)||next>1.5) throw new Error(`Membrane integration became unstable: ${cells[i].region}, cell ${i}, t=${time.toFixed(1)}, Vm=${next.toFixed(4)}`);
      vm[i]=next;
      if(u<.5&&(next-rest[i])/amplitude[i]>=.5){
        // Retrograde capture resets the sinus clock; do not impose a compensatory
        // pause or continue an unrelated fixed pulse train through a captured SA.
        if(inputs.condition==="pvc"&&i===mesh.sinus)nextSinusStimulus=time+period;
      }
      gate[i]=h+DT_MS*(v/amplitude[i]<.13?(1-h)/(cells[i].tauOpen??120):-h/tauClose[i]);
      const relativeTime=time+DT_MS-warmup;
      if(relativeTime>=0&&u<.5&&(next-rest[i])/amplitude[i]>=.5&&eventCells.has(i))events.push({cell:i,time:relativeTime});
      if(relativeTime>=0 && relativeTime<Math.min(period+100,durationMs)) {
        const nextU=(next-rest[i])/amplitude[i];
        if(u<.5&&nextU>=.5&&activationMs[i]<0) activationMs[i]=relativeTime;
        if(u>=.5&&nextU<.5&&activationMs[i]>=0&&recoveryMs[i]<0&&(!ionic||relativeTime-activationMs[i]>40)) recoveryMs[i]=relativeTime;
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
  return {inputs,mesh,sampleMs:SAMPLE_MS,durationMs,samples,voltage,dipole,activationMs,recoveryMs,events,stimuli,activation:{
    atrialStart:atrial.length?Math.min(...atrial):null,
    ventricularStart:ventricular.length?Math.min(...ventricular):null,
    ventricularEnd:ventricular.length?Math.max(...ventricular):null,
    ventricularCoverage:ventricular.length/ventricularCount,
  }};
}

function cellsIndex(mesh:HeartMesh,chamber:string) { return mesh.cells.findIndex(cell=>cell.chamber===chamber&&(cell.transmural===0||cell.longitudinal===0)&&!cell.bridge); }

/** Observed myocardial upstrokes, not inferred from a His marker. A weak His
 * response can still recruit downstream tissue; PVC can precede His entirely.
 * This reader only groups stored crossings and never changes the simulation. */
export function ventricularActivationBursts(recording:ForwardRecording) {
  const {mesh,voltage,samples,sampleMs}=recording,n=mesh.cells.length;
  const ventricular=mesh.cells.flatMap((cell,i)=>(cell.chamber==="LV"||cell.chamber==="RV")&&!cell.bridge?[i]:[]);
  const bursts:{start:number;end:number;cells:number;firstRegion:string|undefined}[]=[];
  let seen=new Set<number>();
  for(let frame=1;frame<samples;frame++) for(const i of ventricular) {
    const cell=mesh.cells[i],threshold=(cell.restingPotential??0)+.5*(cell.amplitude??1);
    if(voltage[(frame-1)*n+i]>=threshold||voltage[frame*n+i]<threshold)continue;
    const time=frame*sampleMs,previous=bursts.at(-1);
    if(previous&&time-previous.end<=40) {
      previous.end=time;seen.add(i);previous.cells=seen.size;
    } else {
      seen=new Set([i]);bursts.push({start:time,end:time,cells:1,firstRegion:cell.region});
    }
  }
  return bursts;
}

/** Human ventricular TP06 equations, independently implemented from the
 * ten Tusscher/Panfilov 2006 publication and Physiome workspace 604 (de5a4e6).
 * Phenotype 0/1/2 = endo/M/epi; M-cell placement is an illustrative tissue
 * hypothesis, not a patient-specific anatomical map. His–Purkinje shares this
 * membrane as an explicit approximation; atria and SA/AV use other models.
 * All state is local to one simulation. No ECG target or electrode is an input.
 * Units: mV, ms, mM, pA/pF. Graph voltage = (mV + 85) / 120.
 */
export function createHumanVentricularMembrane(phenotypes:readonly number[],potassium:number,dt:number,ksScales?:readonly number[]) {
  const ko=clamp(potassium,4,10),rt=8314.472*310/96485.3415,F=96485.3415;
  const count=phenotypes.length,states=new Float64Array(count*18);
  // m,h,j,xr1,xr2,xs,d,f,f2,fCass,r,s,Cai,Cass,CaSR,Rprime,Nai,Ki
  const start=[.00172,.7444,.7045,.00621,.4712,.0095,.00003373,.7888,.9755,.9953,2.42e-8,.999998,.000126,.00036,3.64,.9073,8.604,136.89];
  for(let i=0;i<count;i++)states.set(start,i*18);
  const lo=-110,step=.1,size=1801,stride=32,table=new Float64Array(size*stride);
  const rectifier=new Float64Array(2601);
  for(let k=0;k<rectifier.length;k++) {
    const delta=-60+k*.1,a=.1/(1+Math.exp(.06*(delta-200)));
    const b=(3*Math.exp(.0002*(delta+100))+Math.exp(.1*(delta-10)))/(1+Math.exp(-.5*delta));
    rectifier[k]=a/(a+b);
  }
  const logistic=(x:number)=>1/(1+Math.exp(x));
  for(let k=0;k<size;k++) {
    const v=lo+k*step,o=k*stride;
    const gate=(g:number,inf:number,tau:number)=>{table[o+g*2]=inf;table[o+g*2+1]=Math.exp(-dt/tau);};
    gate(0,logistic((-56.86-v)/9.03)**2,logistic((-60-v)/5)*(.1*logistic((v+35)/5)+.1*logistic((v-50)/200)));
    const hi=logistic((v+71.55)/7.43)**2;
    const ah=v< -40?.057*Math.exp(-(v+80)/6.8):0;
    const bh=v< -40?2.7*Math.exp(.079*v)+310000*Math.exp(.3485*v):.77/(.13*(1+Math.exp(-(v+10.66)/11.1)));
    const aj=v< -40?(-25428*Math.exp(.2444*v)-.000006948*Math.exp(-.04391*v))*(v+37.78)/(1+Math.exp(.311*(v+79.23))):0;
    const bj=v< -40?.02424*Math.exp(-.01052*v)/(1+Math.exp(-.1378*(v+40.14))):.6*Math.exp(.057*v)/(1+Math.exp(-.1*(v+32)));
    gate(1,hi,1/(ah+bh));gate(2,hi,1/(aj+bj));
    gate(3,logistic((-26-v)/7),450*logistic((-45-v)/10)*6*logistic((v+30)/11.5));
    gate(4,logistic((v+88)/24),3*logistic((-60-v)/20)*1.12*logistic((v-60)/20));
    gate(5,logistic((-5-v)/14),1400/Math.sqrt(1+Math.exp((5-v)/6))*logistic((v-35)/15)+80);
    gate(6,logistic((-8-v)/7.5),(1.4*logistic((-35-v)/13)+.25)*1.4*logistic((v+5)/5)+logistic((50-v)/20));
    gate(7,logistic((v+20)/7),1102.5*Math.exp(-((v+27)**2)/225)+200*logistic((13-v)/10)+180*logistic((v+30)/10)+20);
    gate(8,.67*logistic((v+35)/7)+.33,562*Math.exp(-((v+27)**2)/240)+31*logistic((25-v)/10)+80*logistic((v+30)/10));
    gate(9,logistic((20-v)/6),9.5*Math.exp(-((v+40)**2)/1800)+.8);
    gate(10,logistic((v+20)/5),85*Math.exp(-((v+45)**2)/320)+5*logistic((v-20)/5)+3);
    gate(11,logistic((v+28)/5),1000*Math.exp(-((v+67)**2)/1000)+8);
    table[o+24]=Math.exp(.35*v/rt);table[o+25]=Math.exp(-.65*v/rt);
    table[o+26]=1/(1+.1245*Math.exp(-.1*v/rt)+.0353*Math.exp(-v/rt));
    table[o+27]=logistic((25-v)/5.98);
    const z=2*(v-15)/rt;
    const ghk=Math.abs(z)<1e-8?2*F:2*F*z/Math.expm1(z);
    table[o+28]=ghk*.25*Math.exp(z);table[o+29]=ghk*2;
  }
  const initialMv=-85.23+rt*Math.log(ko/5.4);
  // Equilibrate voltage-dependent gates at the selected K resting estimate.
  const initialOffset=Math.round((initialMv-lo)/step)*stride;
  for(let i=0;i<count;i++) {
    const s=i*18;for(let g=0;g<9;g++)states[s+g]=table[initialOffset+g*2];
    states[s+10]=table[initialOffset+18];states[s+11]=table[initialOffset+(phenotypes[i]===0?22:20)];
  }
  return {states,initialVoltage:(initialMv+85)/120,
    derivative(i:number,normalized:number,krScale=1,diffusion=0) {
      const v=normalized*120-85,s=i*18,p=clamp((v-lo)/step,0,size-1.000001),left=Math.floor(p),fraction=p-left,o=left*stride;
      const at=(j:number)=>table[o+j]+fraction*(table[o+stride+j]-table[o+j]);
      for(let g=0;g<9;g++){const inf=at(g*2);states[s+g]=inf+(states[s+g]-inf)*at(g*2+1);}
      for(let state=10;state<12;state++) {const g=state===10?9:phenotypes[i]===0?11:10,inf=at(g*2);states[s+state]=inf+(states[s+state]-inf)*at(g*2+1);}
      const cai=states[s+12],cass=states[s+13],casr=states[s+14],rp=states[s+15],nai=states[s+16],ki=states[s+17];
      const caGate=1/(1+(cass/.05)**2),fcInf=.6*caGate+.4;
      states[s+9]=fcInf+(states[s+9]-fcInf)*Math.exp(-dt/(80*caGate+2));
      const ek=rt*Math.log(ko/ki),ena=rt*Math.log(140/nai),eks=rt*Math.log((ko+.03*140)/(ki+.03*nai)),eca=.5*rt*Math.log(2/cai);
      const rectPosition=clamp((v-ek+60)*10,0,2599.999999),rectLeft=Math.floor(rectPosition),rectFraction=rectPosition-rectLeft;
      const gk1=5.405*Math.sqrt(ko/5.4)*(rectifier[rectLeft]+rectFraction*(rectifier[rectLeft+1]-rectifier[rectLeft]));
      const gkr=.153*Math.sqrt(ko/5.4)*states[s+3]*states[s+4]*krScale;
      const gks=(phenotypes[i]===1?.098:.392)*(ksScales?.[i]??1)*states[s+5]**2;
      const gto=(phenotypes[i]===0?.073:.294)*states[s+10]*states[s+11];
      const gna=14.838*states[s]**3*states[s+1]*states[s+2];
      const ina=gna*(v-ena),ibna=.00029*(v-ena),ik1=gk1*(v-ek),ikr=gkr*(v-ek),iks=gks*(v-eks),ito=gto*(v-ek);
      const ical=.0000398*states[s+6]*states[s+7]*states[s+8]*states[s+9]*(at(28)*cass-at(29));
      const ibca=.000592*(v-eca),ipca=.1238*cai/(cai+.0005),ipk=.0146*at(27)*(v-ek);
      const inak=2.724*ko/(ko+1)*nai/(nai+40)*at(26);
      const inaca=1000*(at(24)*nai**3*2-at(25)*140**3*cai*2.5)/((87.5**3+140**3)*3.38*(1+.1*at(25)));
      const kcasr=2.5-1.5/(1+(1.5/casr)**2),k1=.15/kcasr,k2=.045*kcasr;
      const open=k1*cass*cass*rp/(.06+k1*cass*cass);
      const irel=.102*open*(casr-cass),iup=.006375/(1+(.00025/cai)**2),ileak=.00036*(casr-cai),ixfer=.0038*(cass-cai);
      states[s+15]+=dt*(-k2*cass*rp+.005*(1-rp));
      states[s+12]+=dt*(1/(1+.2*.001/(cai+.001)**2))*(-(ibca+ipca-2*inaca)*.185/(2*.016404*F)+(ileak-iup)*.001094/.016404+ixfer);
      states[s+14]+=dt*(1/(1+10*.3/(casr+.3)**2))*(iup-irel-ileak);
      states[s+13]+=dt*(1/(1+.4*.00025/(cass+.00025)**2))*(-ical*.185/(2*.00005468*F)+irel*.001094/.00005468-ixfer*.016404/.00005468);
      states[s+16]-=dt*(ina+ibna+3*inak+3*inaca)*.185/(.016404*F);
      states[s+17]-=dt*(ik1+ito+ikr+iks+ipk-2*inak)*.185/(.016404*F);
      if(states[s+12]<=0||states[s+13]<=0||states[s+14]<=0||states[s+16]<=0||states[s+17]<=0)throw new Error("TP06 concentration integration failed");
      const current=ina+ibna+ik1+ikr+iks+ito+ical+ibca+ipca+ipk+inak+inaca;
      const z=(gna+.00029+gk1+gkr+gks+gto+.000592+.0146*at(27))*dt;
      const relaxation=z>1e-10?-Math.expm1(-z)/z:1;
      return (-current/120+diffusion)*relaxation;
    },
  };
}

/** Luo–Rudy phase I ionic equations (1991), independently transcribed from
 * doi:10.1161/01.RES.68.6.1501 / Physiome's corrected CellML equations.
 * This is a guinea-pig ventricular reference, NOT ToR–ORd or a calibrated human
 * drug model. The atrial short-AP adaptation and regional K conductance are
 * explicit educational extensions. All currents act on Vm before ECG recovery.
 * Units here: mV, ms, mM, microA/microF. Graph Vm=(mV+85)/120.
 */
export function createIonicMembrane(count:number,potassium:number,dt:number) {
  const ko=clamp(potassium,4,10), rt=8314*310/96485;
  const ena=rt*Math.log(140/18), ek1=rt*Math.log(ko/145), ek=rt*Math.log((ko+.01833*140)/(145+.01833*18));
  const states=new Float64Array(count*7), step=.1, lo=-110, size=1701, stride=16;
  const table=new Float64Array(size*stride), gk=.282*Math.sqrt(ko/5.4), gk1=.6047*Math.sqrt(ko/5.4);
  for(let k=0;k<size;k++) {
    const v=lo+k*step, offset=k*stride;
    const am=Math.abs(v+47.13)<1e-7?3.2:.32*(v+47.13)/(-Math.expm1(-.1*(v+47.13))),bm=.08*Math.exp(-v/11);
    const ah=v< -40?.135*Math.exp(-(v+80)/6.8):0;
    const bh=v< -40?3.56*Math.exp(.079*v)+310000*Math.exp(.35*v):1/(.13*(1+Math.exp(-(v+10.66)/11.1)));
    const aj=v< -40?(-127140*Math.exp(.2444*v)-.00003474*Math.exp(-.04391*v))*(v+37.78)/(1+Math.exp(.311*(v+79.23))):0;
    const bj=v< -40?.1212*Math.exp(-.01052*v)/(1+Math.exp(-.1378*(v+40.14))):.3*Math.exp(-.0000002535*v)/(1+Math.exp(-.1*(v+32)));
    const ad=.095*Math.exp(-.01*(v-5))/(1+Math.exp(-.072*(v-5))),bd=.07*Math.exp(-.017*(v+44))/(1+Math.exp(.05*(v+44)));
    const af=.012*Math.exp(-.008*(v+28))/(1+Math.exp(.15*(v+28))),bf=.0065*Math.exp(-.02*(v+30))/(1+Math.exp(-.2*(v+30)));
    const ax=.0005*Math.exp(.083*(v+50))/(1+Math.exp(.057*(v+50))),bx=.0013*Math.exp(-.06*(v+20))/(1+Math.exp(-.04*(v+20)));
    [am,bm,ah,bh,aj,bj,ad,bd,af,bf,ax,bx].forEach((value,j,all)=>{if(j%2===0){const sum=value+all[j+1];table[offset+j]=value/sum;table[offset+j+1]=Math.exp(-dt*sum);}});
    const xi=v<=-100?1:Math.abs(v+77)<1e-7?2.837*.04/Math.exp(.04*(v+35)):2.837*Math.expm1(.04*(v+77))/((v+77)*Math.exp(.04*(v+35)));
    const ak1=1.02/(1+Math.exp(.2385*(v-ek1-59.215)));
    const bk1=(.49124*Math.exp(.08032*(v-ek1+5.476))+Math.exp(.06175*(v-ek1-594.31)))/(1+Math.exp(-.5143*(v-ek1+4.753)));
    table[offset+12]=gk*xi*(v-ek);
    table[offset+13]=gk1*ak1/(ak1+bk1)*(v-ek1)+.0183/(1+Math.exp((7.488-v)/5.98))*(v-ek1)+.03921*(v+59.87);
    table[offset+14]=gk*xi;
    table[offset+15]=gk1*ak1/(ak1+bk1)+.0183/(1+Math.exp((7.488-v)/5.98))+.03921;
  }
  const initialVoltage=Math.max(-85,ek1+3);
  const initialIndex=Math.round((initialVoltage-lo)/step)*stride;
  for(let i=0;i<count;i++){for(let g=0;g<6;g++)states[i*7+g]=table[initialIndex+g*2];states[i*7+6]=.0001;}
  return {
    initialVoltage:(initialVoltage+85)/120, states,
    derivative(i:number,normalizedVoltage:number,atrial:boolean,kScale=1,calciumScale=1,diffusion=0) {
      const v=normalizedVoltage*120-85,p=clamp((v-lo)/step,0,size-1.000001),left=Math.floor(p),fraction=p-left,offset=left*stride,s=i*7;
      for(let g=0;g<6;g++) {
        const j=offset+g*2,inf=table[j]+fraction*(table[j+stride]-table[j]),decay=table[j+1]+fraction*(table[j+stride+1]-table[j+1]);
        states[s+g]=inf+(states[s+g]-inf)*decay;
      }
      const m=states[s],h=states[s+1],j=states[s+2],d=states[s+3],f=states[s+4],x=states[s+5],cai=states[s+6];
      const gna=23*m*m*m*h*j,gsi=(atrial?.06:.09)*calciumScale*d*f;
      const ina=gna*(v-ena);
      const isi=gsi*(v-(7.7-13.0287*Math.log(Math.max(1e-8,cai))));
      const ik=x*kScale*(atrial?1.7:1)*(table[offset+12]+fraction*(table[offset+stride+12]-table[offset+12]));
      const other=table[offset+13]+fraction*(table[offset+stride+13]-table[offset+13]);
      states[s+6]=Math.max(1e-8,cai+dt*(-.0001*isi+.07*(.0001-cai)));
      const conductance=gna+gsi+x*kScale*(atrial?1.7:1)*(table[offset+14]+fraction*(table[offset+stride+14]-table[offset+14]))+table[offset+15]+fraction*(table[offset+stride+15]-table[offset+15]);
      // Exact voltage relaxation for conductances frozen during this substep.
      // This avoids explicit-Euler INa overshoot; no ECG filtering is involved.
      const z=conductance*dt,relaxation=z>1e-10?-Math.expm1(-z)/z:1;
      return (-(ina+isi+ik+other)/120+diffusion)*relaxation;
    },
  };
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

export type ElectricFieldWeights = readonly [Float64Array, Float64Array, Float64Array];
/** E = -grad(phi), differentiated at the OBSERVATION point, not the source.
 * Uses exactly the source edges, gain and .25 distance floor of potentialWeights.
 * Inside that floor phi is linear in r, so its field is -p / .25^3.
 * This is the existing homogeneous-conductor approximation, not a bidomain field. */
export function electricFieldWeights(mesh: HeartMesh, point: Vec3): ElectricFieldWeights {
  const weights: ElectricFieldWeights = [new Float64Array(mesh.cells.length), new Float64Array(mesh.cells.length), new Float64Array(mesh.cells.length)];
  for (const edge of mesh.edges) if (edge.source) {
    const a = mesh.cells[edge.a].position, b = mesh.cells[edge.b].position;
    const r: Vec3 = [point[0] - (a[0] + b[0]) / 2, point[1] - (a[1] + b[1]) / 2, point[2] - (a[2] + b[2]) / 2];
    const displacement: Vec3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const distance = Math.hypot(...r), radius = Math.max(.25, distance);
    const radial = distance > .25 ? 3 * dot3(displacement, r) / radius ** 5 : 0;
    for (let d = 0; d < 3; d++) {
      const factor = SOURCE_GAIN * edge.conductance * (radial * r[d] - displacement[d] / radius ** 3);
      weights[d][edge.a] += factor; weights[d][edge.b] -= factor;
    }
  }
  return weights;
}

/** Linear interpolation of the recorded Vm preserves reversals through zero.
 * No temporal normalization, selected-lead dependence or modification of Vm. */
export function sampleElectricField(recording: ForwardRecording, weights: ElectricFieldWeights, timeMs: number): Vec3 {
  const position = Math.max(0, Math.min(recording.samples - 1, timeMs / recording.sampleMs));
  const first = Math.floor(position), last = Math.min(recording.samples - 1, first + 1), fraction = position - first;
  const n = recording.mesh.cells.length, result: [number, number, number] = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    const voltage = recording.voltage[first * n + i] * (1 - fraction) + recording.voltage[last * n + i] * fraction;
    for (let d = 0; d < 3; d++) result[d] += weights[d][i] * voltage;
  }
  return result;
}

/** Sum of the model's distributed source dipoles, NOT E at a spatial point.
 * Interpolate signed components so reversals pass through zero without rotation
 * artifacts. This only reads the solution; electrodes and display toggles do not
 * change the source vector or the distributed-source ECG calculation. */
export function sampleNetDipole(recording: ForwardRecording, timeMs: number): Vec3 {
  const position = Math.max(0, Math.min(recording.samples - 1, timeMs / recording.sampleMs));
  const first = Math.floor(position), last = Math.min(recording.samples - 1, first + 1), fraction = position - first;
  const component = (d: number) => recording.dipole[first * 3 + d] * (1 - fraction) + recording.dipole[last * 3 + d] * fraction;
  return [component(0), component(1), component(2)];
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
