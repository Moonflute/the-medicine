import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {JourneyVolume} from './src/journey/volume.js';
import {entranceHints,placeEntranceLabel,visibleThroughLumen} from './src/journey/wayfinding.js';

const directory=new URL('./static/models/current/',import.meta.url),read=key=>JSON.parse(fs.readFileSync(new URL('journey-'+key+'.json',directory)));
const m=read('circulation'),field=new JourneyVolume(m,Uint8Array.from(gunzipSync(fs.readFileSync(new URL('journey-circulation-volume.bin.gz',directory))))),hints=entranceHints(m);
for(const h of hints){
 if(h.surface){const source=m.landmarks.find(l=>l.sourceId===h.id);assert(source&&source.part&&source.representation==='source-coordinate-preserved');assert.deepEqual(h.point,source.position);assert.deepEqual(h.regions,[source.part]);continue;}
 assert(m.connections.some(([a,b])=>a===h.from&&b===h.to||a===h.to&&b===h.from),'annotations only describe an existing anatomical connection');
 const outgoing=m.flowConnections.some(([a,b])=>a===h.from&&b===h.to);
 assert.equal(h.detail,outgoing?'혈류 유출 →':'← 혈류 유입','pulmonary vessels must follow the actual blood direction too');
 assert(field.clearance(h.point)>.0001,'an opening marker stays inside the reconstructed lumen');
 assert(h.regions.includes(h.from),'the entrance belongs to the current structure');
}
for(const j of m.junctions.filter(j=>j.valve)){
 const both=hints.filter(h=>h.valve&&h.name===j.valve.name);assert.equal(both.length,2);
 for(const h of both){assert.deepEqual(h.point,j.valve.center,'keep the reviewed source valve coordinates');assert.equal(h.target,m.parts.find(p=>p.id===h.to).name,'name the chamber/vessel across this opening');}
}
const upper=read('upper'),upperHints=entranceHints(upper);
for(const j of upper.junctions.filter(j=>j.to<15))assert(upperHints.some(h=>h.from===j.to&&h.to===j.from),'digestive and central airway entrances support finding the return path');
// The view can face a visible opening from either side, but never through a wall.
const wall={step:.0006,clearance:([x])=>Math.abs(x)-.001};assert(!visibleThroughLumen(wall,[-.01,0,0],[.01,0,0]));assert(visibleThroughLumen(wall,[-.01,0,0],[-.01,.01,0]));
for(const [width,height]of [[1280,773],[390,705],[844,270]]){
 const occupied=[{left:width-144,top:16,right:width-16,bottom:Math.min(height-16,260)}];
 for(const [x,y]of [[width*.5,height*.5],[width*.52,height*.51],[width-20,20],[20,height-20]]){
  const r=placeEntranceLabel(x,y,Math.min(186,width*.46),62,width,height,occupied);if(!r)continue;
  assert(r.left>=8&&r.right<=width-8&&r.top>=8&&r.bottom<=height-8,'no clipped labels in desktop, portrait or landscape');
  for(const o of occupied)assert(r.right<=o.left||r.left>=o.right||r.bottom<=o.top||r.top>=o.bottom,'labels do not cover each other or the minimap');occupied.push(r);
 }
}
assert.equal(placeEntranceLabel(100,100,180,60,390,705,[{left:0,top:0,right:390,bottom:705}]),null,'hide a label when controls leave no room');
assert.equal(hints.filter(h=>h.surface).length,4,'four reused papillary source landmarks');
console.log(JSON.stringify({anatomicalConnections:hints.filter(h=>!h.surface).length/2,sourceLandmarks:4,valveDirections:8,returnEntrances:true,labelViewports:3,wallOcclusion:true}));
