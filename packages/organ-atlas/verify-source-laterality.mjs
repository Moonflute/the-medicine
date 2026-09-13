import fs from 'node:fs';
import assert from 'node:assert/strict';
import {sourceLaterality} from './src/laterality.js';
const manifest=JSON.parse(fs.readFileSync('../../tmp/atlas-qa/z-system-evaluated/runtime-manifest.json'));
let left=0,right=0,unassigned=0;
const reviewedUnsuffixed={
 'Intra-articular ligament of head of rib':'L','Iliocostalis colli muscle':'L','Left testicular artery':'L',
 'Descending branch of lateral circumflex femoral artery':'R','Cochlear nerve':'R',
 'Common plantar digital branches of medial plantar nerve':'R'};
for(const [id,identity]of Object.entries(manifest.identities)){
 const suffix=reviewedUnsuffixed[identity.sourceMesh]??/\.([lr])$/.exec(identity.sourceMesh)?.[1]?.toUpperCase()??null;
 const side=sourceLaterality('detail:whole-source:'+id,identity);
 assert.equal(side,suffix,identity.sourceMesh);
 assert.ok(!/^(Left Left|Right Right) /.test(identity.englishLabel));
 if(side==='L')left++;else if(side==='R')right++;else unassigned++;
}
assert.equal(sourceLaterality('fake_left',{identityNamespace:'Z-Anatomy object name',laterality:null}),null);
assert.equal(sourceLaterality('fake_right',{identityNamespace:'Z-Anatomy object name',laterality:'L'}),'L');
assert.equal(sourceLaterality('ZA_Femur_l'),'L');
assert.equal(sourceLaterality('VH_M_renal_pyramid_a'),'R');
assert.equal(sourceLaterality('VH_M_left_renal_artery'),null);
assert.equal(sourceLaterality('unknown'),null);
console.log(JSON.stringify({left,right,unassigned,legacyChecks:'passed'}));
