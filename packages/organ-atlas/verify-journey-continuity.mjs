import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {journeyModes} from './src/journey/learning-data.js';
import {JourneyVolume} from './src/journey/volume.js';
import {JourneyNetwork} from './src/journey/network.js';
import {regionTransitions,regionTransitionPose} from './src/journey/region-transitions.js';
import {JourneyRegionStreamer,continuationEntrances,approachingEntrance} from './src/journey/region-streamer.js';
const dir=new URL('./static/models/current/',import.meta.url),read=name=>fs.readFileSync(new URL(name,dir)),manifests=journeyModes.map(m=>JSON.parse(read('journey-'+m.id+'.json'))),network=new JourneyNetwork(manifests),direct=new JourneyNetwork(manifests,{includeTransfers:false}),assets=new Map();
function load(key){if(!assets.has(key)){const manifest=network.manifests.get(key);assets.set(key,{manifest,field:new JourneyVolume(manifest,gunzipSync(read(manifest.volume.split('/').at(-1))))});}return assets.get(key);}
const leg=network.path('circulation',1,'leg-right-artery',2);assert(leg&&leg.some(p=>p.via?.type==='region')&&leg.some(p=>p.via?.type==='capillary'),'atrial route survives the omitted lung bed and regional streaming');
assert.equal(direct.path('circulation',1,'leg-right-artery',2),null,'do not invent a septal shortcut');
assert(direct.path('renal-right',2,'urinary-outlet',3),'calyces through the same pelvis/bladder to urethra');
assert.equal(network.path('circulation',4,'urinary',1),null,'different specimens must never become one physical route');
assert.equal(network.path('brain',1,'brain-csf',1),null,'cortical tissue is not an entrance to CSF');
assert(direct.path('brain-csf',1,'brain-csf',5),'lateral to fourth ventricle route');
let portals=0,flowSamples=0,flowPaths=0;const weak=[];
for(const m of manifests.filter(m=>m.volume)){
 const current=load(m.key);
 for(const part of m.parts)for(const option of regionTransitions(m,part.id).filter(o=>o.type!=='capillary'&&network.manifests.has(o.key))){
  const next=load(option.key),entrances=continuationEntrances(m,next.manifest,option);let valid=false;
  for(const entrance of entrances){
   const step=Math.max(current.field.step,next.field.step);
   for(let z=-8;z<=8&&!valid;z++)for(let y=-8;y<=8&&!valid;y++)for(let x=-8;x<=8&&!valid;x++){
    const position=entrance.point.map((v,i)=>v+[x,y,z][i]*step),direction=entrance.inside.map((v,i)=>v-position[i]),view={key:m.key,position,radius:.0001,yaw:.47,pitch:-.31,navigationFrame:[0,0,0,1]};
    if(current.field.region(position)!==part.id||current.field.clearance(position)<view.radius||!approachingEntrance(entrance,position,direction,view.radius))continue;
    const pose=regionTransitionPose(current,next,option,view);if(!pose)continue;
    assert.deepEqual(pose.position,position);assert.equal(pose.yaw,view.yaw);assert.equal(pose.pitch,view.pitch);assert.equal(pose.radius,view.radius);assert.deepEqual(pose.navigationFrame,view.navigationFrame);
    assert.equal(approachingEntrance(entrance,position,direction.map(v=>-v),view.radius),false,'looking/moving away must not auto-switch');valid=true;
   }
  }
  if(!valid)weak.push(m.key+' → '+option.key+' · '+part.name);else portals++;
 }
 for(const path of m.flowPaths||[]){
  assert(m.flowConnections.some(([a,b])=>a===path.from&&b===path.to),'flow direction must have an explicit reviewed source');flowPaths++;
  for(let i=1;i<path.points.length;i++){
   const a=path.points[i-1],b=path.points[i],n=Math.max(1,Math.ceil(Math.hypot(...a.map((v,k)=>v-b[k]))/(current.field.step*.4)));
   for(let j=0;j<=n;j++){const p=a.map((v,k)=>v+(b[k]-v)*j/n);assert(current.field.clearance(p)>=.000079,'particle path cannot cross tissue');flowSamples++;}
  }
 }
}
assert.deepEqual(weak,[],'every automatic region edge needs a real shared-position entrance');
assert(flowPaths>20,'reviewed flow cues must actually ship');
// Cancelled or superseded prefetches must dispose; the consumed neighbour is
// owned by the viewer and must not be disposed with the cache.
const requests=new Map(),disposed=[];const streamer=new JourneyRegionStreamer(key=>new Promise(resolve=>requests.set(key,resolve)));
streamer.prefetch('old');streamer.prefetch('new');requests.get('old')({manifest:{key:'old'},dispose:()=>disposed.push('old')});await Promise.resolve();assert.deepEqual(disposed,['old']);
const next={manifest:{key:'new'},dispose:()=>disposed.push('new')};requests.get('new')(next);await Promise.resolve();assert.equal(streamer.take('new'),next);streamer.dispose();assert.deepEqual(disposed,['old']);
console.log(JSON.stringify({networkNodes:network.nodes.size,sharedPositionPortals:portals,flowPaths,wallCheckedFlowSamples:flowSamples,prefetchOwnership:true}));
