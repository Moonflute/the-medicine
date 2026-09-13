import fs from 'node:fs';
import {reviewedPairs} from './z-source-name-review.mjs';
const directory='../../tmp/atlas-qa/';
const manifest=JSON.parse(fs.readFileSync(directory+'z-system-evaluated/runtime-manifest.json'));
const inventory=JSON.parse(fs.readFileSync(directory+'z-anatomy-object-inventory.json'));
const names=new Set(Object.values(manifest.identities).map(r=>r.sourceMesh));
const sourceNames=new Set(inventory.objects.map(r=>r.name));
const rows=[];
for(const identity of Object.values(manifest.identities)){
 const side=/\.([lr])$/.exec(identity.sourceMesh)?.[1];if(!side)continue;
 const base=identity.sourceMesh.slice(0,-2),counterpart=base+'.'+(side==='l'?'r':'l');
 if(names.has(counterpart))continue;
 const reviewedPair=reviewedPairs.find(pair=>pair.includes(identity.sourceMesh));
 rows.push({sourceMesh:identity.sourceMesh,layer:identity.layer,expectedName:counterpart,
  reviewedCounterpart:reviewedPair?.find(name=>name!==identity.sourceMesh)??null,
  counterpartInOriginalInventory:sourceNames.has(counterpart),unsuffixedCandidate:sourceNames.has(base)?base:null,
  reviewStatus:reviewedPair?'source pair resolved; detailed anatomy review remains':'unresolved; naming mismatch is not proof of missing anatomy'});
}
fs.writeFileSync(directory+'z-pair-coverage-review.json',JSON.stringify(rows,null,2));
console.log(JSON.stringify({unmatchedNames:rows.length,sourceCounterpartsNotExported:rows.filter(r=>r.counterpartInOriginalInventory).map(r=>r.expectedName)}));
