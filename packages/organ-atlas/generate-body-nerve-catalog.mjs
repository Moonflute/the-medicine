import fs from 'node:fs';import assert from 'node:assert/strict';
const report=JSON.parse(fs.readFileSync('body-nerves-regions.json'));const retained=new Set(report.regions.flatMap(r=>r.sourceIds));const identities={};for(const system of ['skeleton','nerves'])for(const r of JSON.parse(fs.readFileSync('body-'+system+'-audit.json')).records){if(system==='nerves'&&!retained.has(r.fj))continue;assert.ok(!identities[r.partId]);identities[r.partId]={englishLabel:r.name,ontologyId:r.fma.replace('FMA','FMA:'),sourceMesh:r.fj,system,representation:/central canal/i.test(r.name)?'cavity-surface':'tissue-surface'};}
const phrenicNotes={
FJ4156:'횡격신경의 심막 가지 원본 표면입니다. 이 보기에는 완전한 오른쪽 횡격신경 줄기가 없습니다.',
FJ4157:'왼쪽 횡격신경 줄기 원본의 한 구간입니다. 동일 명칭의 FJ4279와 원본 범위가 다르며, 완전한 경수 기시·분지 구현을 의미하지 않습니다.',
FJ4226:'횡격신경의 심막 가지 원본 표면입니다. 이 보기의 횡격신경 표면들은 완전한 양측 신경계를 구성하지 않습니다.',
FJ4279:'원본은 왼쪽 횡격신경 줄기로 명명했지만 FJ4157보다 아래쪽에 놓인 별도 표면입니다. 세부 구간 명칭과 연결 관계는 검수 중입니다.',
FJ4291:'횡격복부 가지 원본 표면입니다. 이 보기에는 해당 가지로 이어지는 완전한 오른쪽 횡격신경 줄기가 없습니다.'
};
for(const identity of Object.values(identities)){const note=phrenicNotes[identity.sourceMesh];if(note){identity.representationNote=note;identity.reviewStatus='incomplete-source-coverage';}}
const labels={'cranial-left':'왼쪽 뇌신경·골격','cranial-right':'오른쪽 뇌신경·골격','cranial-midline':'정중부 신경·골격','spinal-cord':'척수·중심관·골격','cervical-upper-left':'경부·왼쪽 상지·횡격신경·골격'};
fs.writeFileSync('src/body-nerve-catalog.js','// Generated from audited retained nerve partitions.\nexport const nerveRegions='+JSON.stringify(report.regions.map(r=>({id:'neural-'+r.region,label:labels[r.region],file:r.file,count:r.meshes})),null,2)+';\n');fs.writeFileSync('src/body-nerve-identities.js','export const neuralIdentities='+JSON.stringify(identities,null,2)+';\n');
