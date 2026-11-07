// Additional regions reuse existing registered source surfaces. Separate grids
// avoid allocating one mostly empty, dense whole-body collision volume.
import {organJourneySources} from './journey-organ-sources.mjs';
const urinaryRef='https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works';
const csfRef='https://openstax.org/books/anatomy-and-physiology-2e/pages/13-3-circulation-and-the-central-nervous-system';
const hra={source:{name:'Human Reference Atlas · reference organs',url:'https://purl.humanatlas.io/ref-organ/united-male/v1.10'},license:'CC BY 4.0',coordinateFrame:'hra-united-male-v1.10'};
const base={...hra,spacing:.0004,distanceUnit:.00005,minRadius:.0002,maxClearance:.018,maxJunctionGap:.002,enforceSurfaceClearance:true,expectedComponents:1,sourceSeamRadius:.0008,junctionCoreRadius:.0012,junctionCoreFraction:.65};
export const extensionJourneySources={};
for(const side of ['Right','Left']){
 const suffix=side==='Right'?'R':'L',ko=side==='Right'?'우':'좌',key='renal-'+side.toLowerCase();
 const pelvis=structuredClone(organJourneySources.urinary.parts[side==='Right'?0:4]);
 const parts=[pelvis],connections=[],flowConnections=[];
 const membership=side==='Right'?{a:'abcde',b:'fghi'}:{a:'abcd',b:'ef',c:'ghi'};
 for(const [letter,children]of Object.entries(membership)){
  const sources=[`VH_M_major_calyx_${suffix}_${letter}`,...[...children].map(c=>`VH_M_minor_calyx_${suffix}_${c}`)];
  parts.push({name:`${side} calyces — source group ${letter.toUpperCase()}`,korean:ko+'측 신배군 · 원본 '+letter.toUpperCase(),sources,hollowShell:true,kind:'urinary',group:ko+'측 신배 · 신우',color:'#dfbc98',description:'같은 HRA 표본에서 연결된 대신배와 소신배를 함께 살펴봅니다. 원본의 열린 경계가 있는 소신배를 별도의 닫힌 관으로 잘못 재구성하지 않도록 실제 연결 묶음을 유지합니다.',reference:urinaryRef,endNotice:'신유두·집합관에서 신배로 들어오는 미세 통로는 이번 탐험에 포함하지 않습니다.'});connections.push([1,parts.length]);flowConnections.push([parts.length,1]);
 }
 extensionJourneySources[key]={...base,spacing:.0002,distanceUnit:.000025,minRadius:.0001,surfaceError:.000035,surfaceSigma:.3,surfaceSmoothLimit:.00004,boundaryRange:.006,file:'kidneys.glb.gz',kind:'urinary',title:ko+'측 신배 · 신우',parts,connections,flowConnections,forks:[[1,parts.slice(1).map((_,i)=>i+2)]],references:[urinaryRef],notice:'기존 HRA 남성 표본의 신배·신우와 상대 좌표를 유지합니다. A–C는 대신배와 그에 연결된 소신배의 원본 묶음입니다. 개별 소신배의 열린 경계를 임의로 막거나 분절 번호를 추정하지 않습니다. 신우에서 같은 표본의 요관·방광 탐험으로 이어집니다.'};
}
const bladder=structuredClone(organJourneySources.urinary.parts[2]);
extensionJourneySources['urinary-outlet']={...base,file:'urethra.glb.gz',title:'방광 · 남성 요도',kind:'urinary',maxJunctionGap:.006,
 parts:[{...bladder,sourceFile:'bladder.glb.gz',endNotice:'같은 방광에서 요관·신우 영역으로 이어갈 수 있습니다.'},
  {name:'Prostatic urethra',korean:'전립샘요도',source:'VH_M_prostatic_urethra',hollowShell:true,kind:'urinary',group:'남성 요도',color:'#d5a991',description:'방광목에서 이어져 전립샘을 지나는 같은 남성 표본의 요도 구간입니다. 전립샘관·사정관의 미세 개구와 괄약근 운동은 재현하지 않습니다.',reference:urinaryRef},
  {name:'Distal male urethra — source segment',korean:'남성 요도 원위부 · 원본 구간',source:'VH_M_other_urethra',hollowShell:true,kind:'urinary',group:'남성 요도',color:'#cfa18d',description:'원본이 하나로 묶은 전립샘 아래쪽 남성 요도입니다. 막부분·해면체부분의 경계를 새로 추정하여 나누지 않습니다.',reference:urinaryRef,endNotice:'원본 요도의 끝입니다. 외요도구의 세부 경계와 외부 피부는 재현하지 않습니다.'}],
 connections:[[1,2],[2,3]],flowConnections:[[1,2],[2,3]],references:[urinaryRef],sourceLandmarks:[],notice:'기존 HRA 남성 표본의 방광·요도입니다. 여성 요도 형태와는 구분합니다. 같은 방광 위치에서 요관·신우 영역으로 돌아갈 수 있습니다. 실제 괄약근·배뇨 운동과 미세 개구는 포함하지 않습니다.'};
const ventricle=(name,korean,sources)=>({name,korean,sources,sourceUnion:true,kind:'csf',group:'뇌실 · CSF 경로',color:'#94bcc9',description:'같은 HRA/Allen 뇌실 형상에서 재구성한 뇌척수액 공간입니다. 주변 뇌 실질을 통과하는 통로가 아닙니다.',reference:csfRef});
const lateral=['anterior_horn_of_lateral_ventricle','body_of_lateral_ventricle','atrium_of_lateral_ventricle','posterior_horn_of_lateral_ventricle','inferior_horn_of_lateral_ventricle'];
extensionJourneySources['brain-csf']={...base,source:{name:'HRA · Allen brain',url:hra.source.url},coordinateFrame:'hra-allen-brain-atlas-reflected',sourceReflectionX:true,file:'brain-light.glb.gz',title:'뇌실 · 뇌척수액 경로',boundaryRange:.006,kind:'csf',surfaceError:.000035,surfaceSigma:.3,surfaceSmoothLimit:.00004,spacing:.0002,distanceUnit:.000025,minRadius:.0001,maxClearance:.006,maxJunctionGap:.0012,sourceSeamRadius:.0006,junctionCoreRadius:.0006,
 parts:[ventricle('Left lateral ventricle','좌 가쪽뇌실',lateral.map(n=>'Allen_'+n+'_L')),ventricle('Right lateral ventricle','우 가쪽뇌실',lateral.map(n=>'Allen_'+n+'_R')),...[['third_ventricle','Third ventricle','셋째뇌실'],['cerebral_aqueduct','Cerebral aqueduct','중뇌수도관'],['fourth_ventricle','Fourth ventricle','넷째뇌실']].map(([id,name,ko])=>ventricle(name,ko,['Allen_'+id+'_L','Allen_'+id+'_R']))],
 connections:[[1,3],[2,3],[3,4],[4,5]],flowConnections:[[1,3],[2,3],[3,4],[4,5]],
 junctionWindows:{'1:3':{min:[-.001,.831,.011],max:[.004,.838,.018]},'2:3':{min:[-.007,.831,.011],max:[-.002,.838,.018]}},
 references:[csfRef],notice:'기존 뇌실 형상의 내부를 재구성했습니다. 뇌실사이구멍 주변의 원본 접점과 중뇌수도관을 통해 이동합니다. 제4뇌실 이후의 정중·가쪽구멍 및 거미막밑공간은 포함하지 않습니다. 흐름 표시는 방향 학습용이며 실제 CSF 유량·맥동을 계산하지 않습니다.'};
