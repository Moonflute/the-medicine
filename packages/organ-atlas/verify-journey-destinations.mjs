import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {JourneyVolume} from './src/journey/volume.js';
import {journeyFrame} from './src/journey/context.js';
import {destinationSystems,journeyDestinations,filterDestinations,destinationPose,restoreJourneyPose} from './src/journey/destinations.js';

const root=new URL('./static/models/current/',import.meta.url);
const manifests=['upper','circulation'].map(key=>JSON.parse(fs.readFileSync(new URL(`journey-${key}.json`,root))));
const entries=journeyDestinations(manifests);
assert.equal(entries.length,100);
assert.equal(new Set(entries.map(p=>p.key+':'+p.id)).size,100,'IDs from different worlds must not collide');
for(const system of destinationSystems)assert(filterDestinations(entries,'',system.id).length>0);
for(const entry of entries){
 assert(filterDestinations(entries,entry.korean).some(p=>p.key===entry.key&&p.id===entry.id),'all Korean names are searchable');
 assert(filterDestinations(entries,entry.name.toUpperCase()).some(p=>p.key===entry.key&&p.id===entry.id),'all English names are searchable');
}
assert.equal(filterDestinations(entries,'소장').length,1);
assert.equal(filterDestinations(entries,'대장').length,4);
assert.equal(filterDestinations(entries,'atrium','heart').length,2);
assert.equal(filterDestinations(entries,'신장','artery').length,6);
assert.equal(filterDestinations(entries,'신장','vein').length,2);
assert.equal(filterDestinations(entries,'좌전하행')[0].id,46);
assert.equal(filterDestinations(entries,'아직 없는 부위').length,0);
let landings=0,shrunk=0;
for(const manifest of manifests){
 const field=new JourneyVolume(manifest,gunzipSync(fs.readFileSync(new URL(`journey-${manifest.key}-volume.bin.gz`,root)))),asset={manifest,field};
 for(const part of manifest.parts)for(const requested of [.0016,.0008,.0004]){
  const pose=destinationPose(asset,part.id,requested);
  assert(pose,`${part.name} has a safe landing`);
  assert.equal(field.region(pose.position),part.id,'the selected segment must be the actual destination');
  assert(field.clearance(pose.position)>=pose.radius-1e-9);
  assert(pose.radius<=requested);if(pose.radius<requested)shrunk++;
  assert(pose.direction.every(Number.isFinite)&&Math.hypot(...pose.direction)>0);
  const view={key:manifest.key,frame:journeyFrame(manifest),position:pose.position,yaw:1.37,pitch:-.42,radius:pose.radius,projection:'front'};
  assert.deepEqual(restoreJourneyPose(asset,view),view,'return restores position, look, scale and projection exactly');
  landings++;
 }
 assert.equal(destinationPose(asset,-1),null);
 const view={key:manifest.key,frame:journeyFrame(manifest),position:[100,100,100],yaw:0,pitch:0,radius:.0008};
 assert.equal(restoreJourneyPose(asset,view),null,'never restore a point outside the lumen');
 assert.equal(restoreJourneyPose(asset,{...view,position:manifest.parts[0].position,frame:'other-specimen'}),null,'never transfer a pose across anatomical frames');
 assert.equal(destinationPose({...asset,field:{region:()=>1,clearance:()=>0}},1),null,'a blocked destination is rejected before changing the camera');
}
console.log(JSON.stringify({destinations:entries.length,landings,shrunk,bilingualSearch:true,exactReturn:true,unsafeLandingsRejected:true}));
