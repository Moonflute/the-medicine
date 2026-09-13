import fs from 'node:fs';import assert from 'node:assert/strict';
import {structureIdentityText} from './src/structure-identity-text.js';
const manifest=JSON.parse(fs.readFileSync('static/models/current/z-whole-manifest.json'));
const unresolved=Object.entries(manifest.identities).filter(([,d])=>d.identityStatus==='unresolved-source-name');
assert.equal(unresolved.length,3);
assert.deepEqual(unresolved.map(([,d])=>d.sourceMesh).sort(),['????????','?x.l','?x.r'].sort());
for(const [id,d]of unresolved){
 assert.ok(id.startsWith('ZA_'));assert.match(d.sourceSha256,/^[a-f0-9]{64}$/);
 assert.equal(d.ontologyId,null);assert.match(d.englishLabel,/identity unresolved/);
 assert.ok(!d.englishLabel.includes('?'));
 assert.match(structureIdentityText(id,null,{...d,kind:'source-surface'}),/정확한 해부학적 명칭을 확인하지 못했습니다/);
 assert.equal(d.reviewIssue,'unresolved-source-name');
}
console.log('Three unresolved source names retain IDs/hashes/null ontology and explicit UI uncertainty');
