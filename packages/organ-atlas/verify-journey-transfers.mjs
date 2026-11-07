import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {CapillaryTransfers,transferPose} from './src/journey/capillary-transfers.js';
import {AnatomicalRoutes} from './src/journey/route-guide.js';
import {JourneyVolume,moveInLumen} from './src/journey/volume.js';

const root=new URL('./static/models/current/',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('journey-circulation.json',root)));
const field=new JourneyVolume(manifest,gunzipSync(fs.readFileSync(new URL('journey-circulation-volume.bin.gz',root))));
const transfers=new CapillaryTransfers(manifest),routes=new AnatomicalRoutes(manifest);let landings=0,rejectedSizes=0;
assert.equal(transfers.links.length,14);assert.equal(new CapillaryTransfers({...manifest,key:'upper'}).links.length,0);
for(const link of transfers.links){
 const a=manifest.parts.find(p=>p.id===link.from),v=manifest.parts.find(p=>p.id===link.to);
 assert.equal(a.kind,'artery');assert.equal(v.kind,'vein');
 assert.equal(a.name.toLowerCase().includes('right'),v.name.toLowerCase().includes('right'),'same side');
 assert(!manifest.connections.some(([x,y])=>x===a.id&&y===v.id||y===a.id&&x===v.id),'transfer never becomes a physical lumen');
 for(const option of [transfers.get(link.from,link.to),transfers.get(link.to,link.from)]){
  const boundary=transfers.boundary(option.from);
  assert(transfers.available(option.from,option.to,boundary.position));
  assert.equal(transfers.available(option.from,option.to,[0,0,0]),null,'must reach the local terminal before transfer');
  for(const radius of [.0016,.0008,.0004]){
   const view={key:manifest.key,position:[...boundary.position],radius,yaw:1.37,pitch:-.68,projection:'side'},before=structuredClone(view);
   const pose=transferPose({manifest,field},option,view);
   assert.deepEqual(view,before,'resolving a transfer never mutates the departure view');
   if(!pose){assert(radius>.0004,'every regional transfer remains accessible at the smallest chosen size');rejectedSizes++;continue;}
   assert.equal(field.region(pose.position),option.to);assert(field.clearance(pose.position)+1e-9>=pose.radius+.00015);
   assert.equal(pose.radius,radius,'never silently shrink to fit');
   assert.equal(pose.yaw,view.yaw);assert.equal(pose.pitch,view.pitch);assert.equal(pose.projection,view.projection);assert.equal(pose.direction,undefined,'do not invoke automatic aiming');
   const distance=radius*2,move=moveInLumen(field,pose.position,pose.inwardDirection.map(v=>v*distance),radius);
   assert(move.position.reduce((sum,v,i)=>sum+(v-pose.position[i])*pose.inwardDirection[i],0)>=distance*.75,'arrival permits actual inward movement');
   assert(field.clearance(move.position)>=radius);landings++;
  }
 }
}
assert(landings>70&&rejectedSizes>0,'exercise both ordinary landings and explicit size rejection');
const option=transfers.get(transfers.links[0].from,transfers.links[0].to),view={key:manifest.key,radius:.0008,yaw:.3,pitch:1.5};
assert.equal(transferPose({manifest,field:{region:()=>option.to,clearance:()=>0}},option,view),null,'blocked landing preserves the current scene');
for(const invalid of [{...view,key:'upper'},{...view,radius:0},{...view,yaw:NaN}])assert.equal(transferPose({manifest,field},option,invalid),null);
// Portal-dependent organs have no matching portal veins in this asset; do not
// fake a direct mesenteric/splenic/gastric-to-caval connection.
for(const id of [25,26,33,34,35])assert.equal(transfers.options(id).length,0);
const toLeft=routes.path(2,4),toRight=routes.path(4,1);
assert(toLeft.includes(5)&&toLeft.includes(3));assert(!toRight.includes(3),'left heart return goes via a systemic bed, not backward through lung veins');
for(const route of [toLeft,toRight]){
 assert.equal(new Set(route).size,route.length);
 const cross=[];
 for(let i=1;i<route.length;i++){
  const transfer=transfers.get(route[i-1],route[i]);
  if(transfer){assert(transfer.forward,'guided crossing follows physiological flow');cross.push(transfer);}
  else assert(manifest.flowConnections.some(([a,b])=>a===route[i-1]&&b===route[i]));
 }
 assert.equal(cross.length,1);
}
assert.equal(routes.reachable(1).size,64);
assert(routes.select(6,4));assert.equal(routes.transfer.to,8);assert(routes.update(8));assert.equal(routes.next,3,'guide resumes in recipient vessel');
console.log(JSON.stringify({regionalTransfers:transfers.links.length,bidirectionalSafeLandings:landings,rejectedSizes,sizeAndGazePreserved:true,usableArrival:true,capillariesSkipped:true,portalShortcuts:false,guidedPhysiologicalCrossings:true}));
