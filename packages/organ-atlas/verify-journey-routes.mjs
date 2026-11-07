import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {AnatomicalRoutes} from './src/journey/route-guide.js';
import {JourneyVolume} from './src/journey/volume.js';
import {entranceHints,connectionHint} from './src/journey/wayfinding.js';

const root=new URL('./static/models/current/',import.meta.url);
const read=key=>JSON.parse(fs.readFileSync(new URL(`journey-${key}.json`,root)));
const upper=read('upper'),circulation=read('circulation');let connected=0,disconnected=0,openings=0;
for(const manifest of [upper,circulation]){
 const routes=new AnatomicalRoutes(manifest,{includeTransfers:false}),hints=entranceHints(manifest);
 const field=new JourneyVolume(manifest,gunzipSync(fs.readFileSync(new URL(`journey-${manifest.key}-volume.bin.gz`,root))));
 for(const from of manifest.parts)for(const to of manifest.parts){
  const path=routes.path(from.id,to.id);
  const sameSpace=manifest.key==='upper'||from.circuit===to.circuit;
  if(!sameSpace){assert.equal(path,null,'no shortcut through a septum or omitted capillary bed');disconnected++;continue;}
  assert(path,`${from.name} connects to ${to.name}`);assert.equal(path[0],from.id);assert.equal(path.at(-1),to.id);
  assert.equal(new Set(path).size,path.length,'no looping directions');
  for(let i=1;i<path.length;i++)assert(manifest.connections.some(([a,b])=>a===path[i-1]&&b===path[i]||b===path[i-1]&&a===path[i]));
  connected++;
 }
 for(const pair of manifest.connections)for(const [from,to]of [pair,[...pair].reverse()]){
  const hint=connectionHint(manifest,hints,from,to);assert(hint,`entrance for ${from} → ${to}`);
  assert.deepEqual(hint.regions,[from]);assert.equal(hint.to,to);
  assert([hint.point,hint.nearPoint].filter(Boolean).some(point=>field.clearance(point)>.0001),'guidance uses a real opening in the existing lumen');
  openings++;
 }
 assert.equal(connectionHint(manifest,hints,-1,1),null);
 assert.equal(routes.select(1,-1),false);assert.equal(routes.target,null);
}

const digestive=new AnatomicalRoutes(upper);
assert(digestive.select(1,4));assert.deepEqual(digestive.route,[1,2,3,4]);
assert(digestive.update(2));assert.equal(digestive.next,3);
assert(digestive.update(6));assert.deepEqual(digestive.route,[6,2,3,4],'a turn into the larynx replans via the actual pharyngeal connection');
assert.equal(digestive.update(0),false,'an unlabelled boundary must not invent a new path');
assert.equal(digestive.update(6),false,'stationary exploration does not recalculate');
assert(digestive.update(4));assert(digestive.arrived);assert.equal(digestive.next,null);
assert.equal(digestive.update(3),false,'arrival remains complete until a new destination is chosen');
digestive.clear();assert.equal(digestive.target,null);
const cardiac=new AnatomicalRoutes(circulation,{includeTransfers:false}),id=name=>circulation.parts.find(part=>part.name===name).id;
assert(cardiac.select(id('Superior vena cava'),id('Right pulmonary artery')));
assert.deepEqual(cardiac.route.map(part=>cardiac.parts.get(part).name),['Superior vena cava','Right atrium','Right ventricle','Pulmonary trunk','Right pulmonary artery']);
assert.equal(cardiac.direction,'혈류 방향');
assert(cardiac.select(id('Right ventricle'),id('Superior vena cava')));assert.equal(cardiac.direction,'혈류 반대 방향');
const target=cardiac.target;assert.equal(cardiac.select(id('Right ventricle'),id('Left ventricle')),false);assert.equal(cardiac.target,target,'unreachable selection preserves an existing guide');
assert(cardiac.select(id('Left atrium'),id('Anterior interventricular artery (LAD)')));assert.equal(cardiac.next,id('Left ventricle'));
const missing=new AnatomicalRoutes({parts:[{id:1},{id:2}],connections:[[1,2]],junctions:[]});assert.equal(missing.path(1,2),null,'unreviewed junctions cannot become a guide');
console.log(JSON.stringify({connectedPairs:connected,disconnectedPairs:disconnected,reviewedOpenings:openings,rerouting:true,bloodDirection:true,arrival:true,stationaryWorkSkipped:true}));
