import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import {NodeIO} from '@gltf-transform/core';
import {EXTMeshoptCompression} from '@gltf-transform/extensions';
import {MeshoptDecoder} from 'meshoptimizer';
import {anatomicalRelations} from './src/anatomy-relations.js';

const assets=['heart','kidneys','ureters','vasculature','bladder','urethra'];
await MeshoptDecoder.ready;
const io=new NodeIO().registerExtensions([EXTMeshoptCompression]).registerDependencies({'meshopt.decoder':MeshoptDecoder});
const inventories=new Map();

async function inventory(name,suffix=''){
 const bytes=gunzipSync(await readFile(new URL(`./static/models/current/${name}${suffix}.glb.gz`,import.meta.url)));
 const document=await io.readBinary(new Uint8Array(bytes));
 return new Set(document.getRoot().listNodes().map(node=>node.getName()).filter(Boolean));
}

for(const asset of assets){
 const full=await inventory(asset);
 inventories.set(asset,full);
 if(asset==='urethra')continue;
 const light=await inventory(asset,'-light');
 assert.deepEqual([...light].sort(),[...full].sort(),`${asset}: full/light node names differ`);
}

const allParts=new Set([...inventories.values()].flatMap(parts=>[...parts]));
const routeIds=anatomicalRelations.map(route=>route.id);
assert.equal(new Set(routeIds).size,routeIds.length,'Relation route IDs must be unique');

for(const route of anatomicalRelations){
 assert.ok(route.stages.length>=2,`${route.id}: route needs at least two stages`);
 assert.ok(route.source.startsWith('https://'),`${route.id}: authoritative source URL is required`);
 if(route.parallelFrom!==undefined){
  assert.ok(Number.isInteger(route.parallelFrom),`${route.id}: parallelFrom must be a stage index`);
  assert.ok(route.parallelFrom>=0&&route.parallelFrom<route.stages.length-1,`${route.id}: parallelFrom must identify a parent before at least one branch`);
  assert.equal(route.kind,'branch',`${route.id}: only branch relationships may use parallelFrom`);
 }
 for(const item of route.stages){
  for(const partId of item.ids)assert.ok(allParts.has(partId),`${route.id}: missing mesh ${partId}`);
  if(item.pattern)assert.ok([...allParts].some(partId=>new RegExp(item.pattern).test(partId)),`${route.id}: pattern has no mesh match`);
 }
}

const serialized=JSON.stringify(anatomicalRelations);
assert.ok(!serialized.includes('VH_M_superior_mesenteric_vein'),'Known mislabeled superior mesenteric vein must stay quarantined');
assert.ok(!serialized.includes('VH_M_left_marginal_branch'),'Left marginal branch must not bypass the missing circumflex artery');
const renalStage=anatomicalRelations.find(route=>route.id==='abdominal-aorta-branches').stages.find(item=>item.label==='Renal arteries');
assert.deepEqual(new Set(renalStage.ids),new Set(['VH_M_left_renal_artery','VH_M_right_renal_artery']),'Renal arteries must remain a pair while source laterality is under review');

console.log(`Anatomical relation audit passed: ${anatomicalRelations.length} routes, ${allParts.size} source nodes.`);
