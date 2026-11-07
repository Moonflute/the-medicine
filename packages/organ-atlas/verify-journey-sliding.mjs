import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {JourneyVolume,moveInLumen} from './src/journey/volume.js';

const directory=new URL('./static/models/current/',import.meta.url),m=JSON.parse(fs.readFileSync(new URL('journey-circulation.json',directory))),field=new JourneyVolume(m,Uint8Array.from(gunzipSync(fs.readFileSync(new URL('journey-circulation-volume.bin.gz',directory)))));
// Actual thoracic-aortic wall positions where a shallow push used to make
// 0–2.2% progress (including completely stuck cases). Keep the input fixed.
const cases=[
 [[.02099999999999999,1.3258974722946397,-.047005055410720156],[.0006775980467313139,.00010275077939703774,-.00014248917291924125]],
 [[.02099999999999999,1.3258974722946397,-.047005055410720156],[-.000656509315096117,-.00019670372338320864,-.00014248917291924125]],
 [[.02572278540055176,1.310825738199816,-.042522785400551766],[-.000012480890740357478,-.0006916414552468587,-.00010712760965472427]],
 [[.015153943036090824,1.3318513143453634,-.046194742618545614],[.000022418990886561413,-.0006898458632557598,-.00011666222094810251]],
 [[.018599999999999967,1.289064480535069,-.039671038929861825],[.000683651126693561,-.0000667387080508162,-.00013478531751764537]]
];
let minimumProgress=1;
for(const [p,delta]of cases){
 const result=moveInLumen(field,p,delta,.0008),progress=result.position.reduce((s,v,i)=>s+(v-p[i])*delta[i],0)/delta.reduce((s,v)=>s+v*v,0);
 assert(progress>.55,'a shallow contact must glide instead of sticking');assert.equal(result.blocked,false,'successful sliding must not display a blocked warning');assert(field.clearance(result.position)>=.0008);minimumProgress=Math.min(minimumProgress,progress);
}
let p=[...cases[2][0]];for(let i=0;i<20;i++){p=moveInLumen(field,p,cases[2][1],.0008).position;assert(field.clearance(p)>=.0008);}
assert(cases[2][0][1]-p[1]>.009,'holding forward continues along the actual sloping aortic wall');

// An actual aortic orifice facet previously allowed only 1.25% of a shallow
// forward move. A small clearance reserve must glide without crossing it.
const valvePosition=[.02535073047306803,1.3078699400246143,.030999166395581635],valveDelta=[.0001303938424120837,.0007903500058978528,.00023652550399116967];
const valveMove=moveInLumen(field,valvePosition,valveDelta,.0016),valveProgress=valveMove.position.reduce((s,v,k)=>s+(v-valvePosition[k])*valveDelta[k],0)/valveDelta.reduce((s,v)=>s+v*v,0);
assert(valveProgress>.8&&!valveMove.blocked,'a shallow valve contact keeps useful forward movement');
assert(field.clearance(valveMove.position)>=.0016);
assert(Math.hypot(...valveMove.position.map((v,i)=>v-valvePosition[i]))<=Math.hypot(...valveDelta)+1e-9,'clearance correction shares the movement budget');

// Gradient consistency at interior interpolation points, away from voxel seams.
for(const [point]of cases){const p=point.map((v,i)=>field.origin[i]+(Math.floor((v-field.origin[i])/field.step)+.37)*field.step),analytic=field.gradient(p),h=1e-8;for(let axis=0;axis<3;axis++){const a=[...p],b=[...p];a[axis]+=h;b[axis]-=h;assert(Math.abs(analytic[axis]-(field.clearance(a)-field.clearance(b))/(2*h))<1e-6);}}

// No X/Y/Z-specific fallback: oblique walls work at arbitrary orientations.
for(const vector of [[1,2,3],[-3,1,2],[2,-3,1]]){
 const length=Math.hypot(...vector),normal=vector.map(v=>v/length),tangent=[-normal[1],normal[0],0],tLength=Math.hypot(...tangent),radius=.0008;
 const f={step:.0006,clearance:p=>.006+p.reduce((s,v,i)=>s+v*normal[i],0),gradient:()=>normal},start=normal.map(v=>v*(radius-.006+1e-7)),delta=tangent.map((v,i)=>(v/tLength-normal[i]*.3)*.0007);let p=start;
 for(let i=0;i<40;i++){const result=moveInLumen(f,p,delta,radius);assert(!result.blocked);assert(f.clearance(result.position)>=radius);p=result.position;}
 const distance=p.reduce((s,v,i)=>s+(v-start[i])*tangent[i]/tLength,0);assert(distance>.026,'slope keeps nearly all tangent travel');
}
// A thin separating wall remains solid, even with a huge requested movement.
const wall={step:.0006,clearance:([x])=>Math.abs(x)-.0001,gradient:([x])=>[Math.sign(x),0,0]},radius=.0008;
const stop=moveInLumen(wall,[-.003,0,0],[1,0,0],radius);assert(stop.blocked);assert(stop.position[0]<=-.0009&&wall.clearance(stop.position)>=radius);
const slide=moveInLumen(wall,[-.000901,0,0],[.001,.012,0],radius);assert(!slide.blocked&&slide.position[1]>.011&&slide.position[0]<=-.0009);
assert.deepEqual(moveInLumen(wall,[0,0,0],[.1,0,0],radius).position,[0,0,0],'an invalid start must never teleport to another lumen');
// Two wall contacts at narrow branch roots must keep the shared free direction.
// The previous single-plane correction completely stopped at 120/150 degrees.
for(const degrees of [60,90,120,150]){
 const angle=degrees*Math.PI/180,n=[Math.cos(angle),Math.sin(angle),0],f={step:.0006,clearance:([x,y])=>Math.min(x,n[0]*x+n[1]*y),gradient:([x,y])=>x<n[0]*x+n[1]*y?[1,0,0]:n};
 let point=[radius+1e-10,radius*(1-n[0])/n[1]+1e-9,0];const start=[...point];
 for(const sign of [1,-1])for(let i=0;i<20;i++){const result=moveInLumen(f,point,[-.0006,-.0006,.0004*sign],radius);assert(!result.blocked,'keep moving along the crease');assert(f.clearance(result.position)>=radius);assert(Math.abs(result.position[2]-point[2]-.0004*sign)<1e-8);point=result.position;}
 assert(Math.abs(point[2]-start[2])<1e-8,'a corner permits immediate backtracking');
}
console.log(JSON.stringify({realWallRegressions:cases.length,minForwardProgress:minimumProgress,valveForwardProgress:valveProgress,continuousWallTravelMetres:cases[2][0][1]-p[1],obliqueWalls:3,twoWallCorners:4,thinWallPreserved:true,contactIsNotBlocked:true}));
