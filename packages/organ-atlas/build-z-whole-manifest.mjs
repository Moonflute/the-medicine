import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {NodeIO} from '@gltf-transform/core';
import {reviewedSourceSide,reviewedPairs} from './z-source-name-review.mjs';
import {skeletalStructureType} from './src/skeletal-structure-type.js';

// Research manifest: no copying to public assets until coverage/provenance review.
const directory=path.resolve('../../tmp/atlas-qa/z-system-evaluated');
const audit=JSON.parse(fs.readFileSync(path.join(directory,'audit.json')));
const includeCentral=process.argv.includes('--central');
if(includeCentral){
 const central=JSON.parse(fs.readFileSync(path.join(directory,'../z-central-evaluated/audit.json')));
 assert.equal(central.failures.length,0);
 const names=new Set(audit.records.map(r=>r.name));
 for(const record of central.records){assert.ok(!names.has(record.name),'Duplicate central source '+record.name);names.add(record.name);audit.records.push({...record,systems:['central-nerves']});}
}
const provenance=JSON.parse(fs.readFileSync(path.join(directory,'../z-anatomy-object-inventory.json')));
assert.equal(audit.failures.length,0);
const records=new Map(audit.records.map(r=>['ZA_'+r.file.replace('.bin',''),r]));
const byName=new Map(audit.records.map(r=>[r.name,r]));
for(const pair of reviewedPairs)for(const [i,name]of pair.entries()){
 const r=byName.get(name);assert.ok(r,'Missing reviewed pair '+name);
 // Vessel roots can cross midline; side test is a whole-bound midpoint screen,
 // not a claim that every vertex must be on one side or that the course is correct.
 const x=(r.bounds[0][0]+r.bounds[1][0])/2;
 assert.ok(i===0?x>0:x<0,'Reviewed source side changed '+name);
}
const identities={},assets=[],seen=new Set(),io=new NodeIO();
let skeletalBounds;
for(const layer of ['skeleton','muscles','arteries','veins','nerves',...(includeCentral?['central-nerves']:[])]){
 const file=`z-whole-${layer}-optimized.glb.gz`;
 const input=layer==='central-nerves'?path.join(directory,'../z-central-evaluated/z-whole-nerves-optimized.glb.gz'):path.join(directory,file);
 const bytes=fs.readFileSync(input);
 if(layer==='central-nerves')fs.writeFileSync(path.join(directory,file),bytes);
 const document=await io.readBinary(gunzipSync(bytes));
 const nodes=document.getRoot().listNodes().filter(n=>n.getMesh());
 const bounds=[[Infinity,Infinity,Infinity],[-Infinity,-Infinity,-Infinity]];
 for(const node of nodes){
  const id=node.getName(),record=records.get(id);assert.ok(record,`Unknown ${id}`);assert.ok(!seen.has(id));seen.add(id);
  assert.equal(record.systems.includes('muscles')?'muscles':record.systems[0],layer);
  assert.equal(node.getExtras().sourceHash,record.sha256);
  const reviewed=reviewedSourceSide(record.name),side=reviewed?.toLowerCase()??/\.([lr])$/.exec(record.name)?.[1];
  // Names describe source objects. A missing suffix does not imply midline.
  const sourceName=record.name.trim(),englishLabel=(side?`${side==='l'?'Left':'Right'} `:'')+sourceName.replace(/\.[lr]$/,'').replace(/^(Left|Right) /,'').replace(/of first finger of foot$/,'of hallux').replace(/of (second|third|fourth|fifth) finger of foot$/,'of $1 toe');
  const cavity=layer==='skeleton'&&['Sinus of frontal bone','Sinus of sphenoid bone'].includes(sourceName);
  const centralCavity=layer==='central-nerves'&&['Fourth ventricle','Third ventricle',"Central canal'",'Lateral ventricle.r','Lateral ventricle.l'].includes(sourceName);
  const sciaticDivision=/^(Sciatic nerve|Tibial nerve|Common fibular nerve)\.[lr]$/.test(sourceName);
  const hepaticCavalBoundary=['Hepatic veins','Inferior vena cava (thoracic part)','Inferior vena cava (abdominal part)'].includes(sourceName);
  const cavalLabel={'Inferior vena cava (thoracic part)':'Inferior vena cava — upper source segment','Inferior vena cava (abdominal part)':'Inferior vena cava — lower source segment'}[sourceName];
  const unresolvedLabel={'?x.r':'Right arterial structure — identity unresolved','?x.l':'Left arterial structure — identity unresolved','????????':'Venous structure — identity unresolved'}[sourceName];
  identities[id]={englishLabel:unresolvedLabel??cavalLabel??(cavity?({'Sinus of frontal bone':'Frontal sinus','Sinus of sphenoid bone':'Sphenoidal sinus'})[sourceName]:englishLabel),sourceMesh:record.name,sourceSha256:record.sha256,
   system:layer==='central-nerves'?'nerves':layer==='arteries'||layer==='veins'?'vessels':layer,layer,
   ...(layer==='skeleton'?{structureType:skeletalStructureType(sourceName)}:{}),
   ...(unresolvedLabel?{identityStatus:'unresolved-source-name',reviewIssue:'unresolved-source-name',representationNote:'원본의 구조 이름이 불명확하여 정확한 해부학적 명칭을 확인하지 못했습니다. 동맥·정맥 분류는 원본 계통 목록에 근거하며, 특정 혈관이나 질환의 연결 대상으로 확정하면 안 됩니다. 위치·형상과 원본 ID는 보존되어 있습니다.'}:{}),
   ...(sciaticDivision?{representationNote:'좌골신경은 경골신경과 총비골신경으로 나뉩니다. 이 원본은 분지 부근의 공통 표면 일부를 경골신경에 포함하므로, 표면 분할 경계를 실제 분지 경계로 해석하지 마세요.',reviewIssue:'sciatic-division-source-boundary',reviewReferences:['https://www.ncbi.nlm.nih.gov/books/NBK482431/']}:{}),
   ...(hepaticCavalBoundary?{representationNote:'간정맥은 하대정맥으로 유입됩니다. 원본의 thoracic part 구간이 횡격막 아래까지 연장되어 있어, 표시 이름은 상부·하부 원본 구간으로 구분했습니다. 이는 모델의 분할 구간이며 실제 흉부·복부 해부학 경계를 뜻하지 않습니다. 간정맥의 전체 간내 분지와 정확한 합류구는 이 표면만으로 검증되지 않았습니다.',reviewIssue:'hepatic-caval-source-boundary',reviewReferences:['https://www.ncbi.nlm.nih.gov/books/NBK482353/']}:{}),
   ...(cavity?{representationNote:'뼈 조직이 아니라 부비동의 공기 공간을 나타내는 표면입니다. 점막 두께나 배출구의 정확한 형태를 표현한 모델은 아닙니다.',reviewReferences:['https://training.seer.cancer.gov/anatomy/respiratory/passages/nose.html']}:{}),
   laterality:side?.toUpperCase()??null,ontologyId:null,identityNamespace:'Z-Anatomy object name',
   representation:centralCavity||cavity?'cavity-surface':'source-surface',reviewStatus:'pending-anatomical-review',
   // Exact word excludes Tensor fasciae latae, which is a muscle. Tendons,
   // aponeuroses and retinacula remain visible; they need separate review.
   displayCategory:layer==='muscles'&&/\bfascia\b/i.test(sourceName)?'fascia':'primary',
   classificationBasis:'source-name; anatomy review pending',lateralityBasis:reviewed?'reviewed source pair and evaluated position':'source suffix'};
  const matrix=node.getWorldMatrix(),position=node.getMesh().listPrimitives()[0].getAttribute('POSITION').getArray();
  for(let i=0;i<position.length;i+=3){
   for(let axis=0;axis<3;axis++){
    const value=matrix[axis]*position[i]+matrix[axis+4]*position[i+1]+matrix[axis+8]*position[i+2]+matrix[axis+12];
    bounds[0][axis]=Math.min(bounds[0][axis],value);bounds[1][axis]=Math.max(bounds[1][axis],value);
   }
  }
 }
 if(layer==='skeleton')skeletalBounds=bounds;
 assets.push({layer,file,count:nodes.length,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),bounds});
}
assert.equal(seen.size,records.size);
// All lazy-loaded layers use the skeletal frame, never their own bounding box.
const center=skeletalBounds[0].map((v,i)=>(v+skeletalBounds[1][i])/2);
const scale=2.7/Math.max(...skeletalBounds[0].map((v,i)=>skeletalBounds[1][i]-v));
const manifest={status:'research; anatomy and per-structure provenance review pending',
 source:{url:'https://github.com/Z-Anatomy/Models-of-human-anatomy',version:`archive-sha256:${provenance.archiveSha256}`},
 displayFrame:{center,scale},assets,identities};
fs.writeFileSync(path.join(directory,'runtime-manifest.json'),JSON.stringify(manifest,null,2));
console.log(JSON.stringify({structures:seen.size,assets:assets.map(({layer,count,bytes})=>({layer,count,bytes})),displayFrame:manifest.displayFrame}));
