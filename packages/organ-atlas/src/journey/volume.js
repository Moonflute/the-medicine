// The navigation field and visible surface are built from the same source mask.
export class JourneyVolume{
 constructor(manifest,bytes){
  this.origin=manifest.origin;this.step=manifest.spacing;this.dimensions=manifest.dimensions;this.unit=manifest.distanceUnit;const [nx,ny,nz]=this.dimensions,n=nx*ny*nz;
  // Empty body space is >95% of these grids. Keep only occupied 8³ bricks in RAM;
  // source gzip remains compact on disk and the dense decode is then released.
  this.brickDimensions=this.dimensions.map(v=>Math.ceil(v/8));const [bx,by,bz]=this.brickDimensions;this.brickIndex=new Int32Array(bx*by*bz).fill(-1);this.bricks=[];
  if(manifest.volumeFormat==='bricks-v1'){
   if(bytes.byteLength<4)throw Error('Invalid sparse navigation field');const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),count=view.getUint32(0,true),offset=4+count*4;
   if(count>this.brickIndex.length||bytes.byteLength!==offset+count*1024)throw Error('Invalid sparse navigation size');
   for(let i=0;i<count;i++){const key=view.getUint32(4+i*4,true);if(key>=this.brickIndex.length||this.brickIndex[key]!==-1)throw Error('Invalid navigation brick');this.brickIndex[key]=i;this.bricks.push(bytes.subarray(offset+i*1024,offset+(i+1)*1024));}
   this.memoryBytes=this.brickIndex.byteLength+bytes.byteLength;return;
  }
  if(manifest.volumeFormat&&manifest.volumeFormat!=='dense-v1')throw Error('Unknown navigation format');
  if(bytes.length!==n*2)throw Error('Invalid navigation field');
  for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){const i=x+nx*(y+ny*z);if(!bytes[i]&&!bytes[n+i])continue;const b=(x>>3)+bx*((y>>3)+by*(z>>3));let id=this.brickIndex[b];if(id<0){id=this.bricks.length;this.brickIndex[b]=id;this.bricks.push(new Uint8Array(1024));}const local=(x&7)+8*((y&7)+8*(z&7));this.bricks[id][local]=bytes[i];this.bricks[id][local+512]=bytes[n+i];}
  this.memoryBytes=this.brickIndex.byteLength+this.bricks.length*1024;
 }
 offset(x,y,z){const [nx,ny,nz]=this.dimensions;return x<0||y<0||z<0||x>=nx||y>=ny||z>=nz?-1:x+nx*(y+ny*z);}
 value(x,y,z,label=false){if(this.offset(x,y,z)<0)return 0;const [bx,by]=this.brickDimensions,id=this.brickIndex[(x>>3)+bx*((y>>3)+by*(z>>3))];return id<0?0:this.bricks[id][(x&7)+8*((y&7)+8*(z&7))+(label?512:0)];}
 forEachVoxel(fn){const [bx,by]=this.brickDimensions;for(let b=0;b<this.brickIndex.length;b++){const id=this.brickIndex[b];if(id<0)continue;const x0=(b%bx)*8,y0=(Math.floor(b/bx)%by)*8,z0=Math.floor(b/(bx*by))*8,brick=this.bricks[id];for(let z=0;z<8;z++)for(let y=0;y<8;y++)for(let x=0;x<8;x++){const at=x+8*(y+8*z);if(brick[at+512])fn(x0+x,y0+y,z0+z,brick[at+512],brick[at]);}}}
 clearance(point){
  // This is the movement hot path. Interpolate in place without allocating
  // coordinate/base/weight arrays for every swept collision sample.
  const qx=(point[0]-this.origin[0])/this.step,qy=(point[1]-this.origin[1])/this.step,qz=(point[2]-this.origin[2])/this.step,bx=Math.floor(qx),by=Math.floor(qy),bz=Math.floor(qz),tx=qx-bx,ty=qy-by,tz=qz-bz;
  let value=0;for(let z=0;z<2;z++)for(let y=0;y<2;y++)for(let x=0;x<2;x++)value+=this.value(bx+x,by+y,bz+z)*(x?tx:1-tx)*(y?ty:1-ty)*(z?tz:1-tz);return value*this.unit;
 }
 region(point){const q=point.map((v,i)=>Math.round((v-this.origin[i])/this.step));return this.value(...q,true);}
 gradient(point){
  // Differentiate the SAME trilinear field used by clearance. A whole-voxel
  // finite difference can point across a neighbouring facet and make a valid
  // tangential move penetrate this facet, repeatedly trapping the camera.
  const q=point.map((v,i)=>(v-this.origin[i])/this.step),base=q.map(Math.floor),t=q.map((v,i)=>v-base[i]),g=[0,0,0];
  for(let z=0;z<2;z++)for(let y=0;y<2;y++)for(let x=0;x<2;x++){
   const value=this.value(base[0]+x,base[1]+y,base[2]+z)*this.unit/this.step,wx=x?t[0]:1-t[0],wy=y?t[1]:1-t[1],wz=z?t[2]:1-t[2];
   g[0]+=value*(x?1:-1)*wy*wz;g[1]+=value*wx*(y?1:-1)*wz;g[2]+=value*wx*wy*(z?1:-1);
  }return g;
 }
}

// Offline packing and test roundtrips share the runtime brick layout. Browsers
// decode only occupied blocks, without allocating a dense full-body voxel grid.
export function packJourneyBricks(field){
 const count=field.bricks.length,offset=4+count*4,bytes=new Uint8Array(offset+count*1024),view=new DataView(bytes.buffer);view.setUint32(0,count,true);
 for(let key=0;key<field.brickIndex.length;key++){const i=field.brickIndex[key];if(i<0)continue;view.setUint32(4+i*4,key,true);bytes.set(field.bricks[i],offset+i*1024);}return bytes;
}

// Small swept steps, followed by contact-plane sliding. Corrections go into
// free space, never by shrinking the camera, changing the anatomy or jumping
// across a wall. Contact is distinct from being unable to make progress.
export function moveInLumen(field,position,delta,radius){
 const length=Math.hypot(...delta);if(!length)return {position:[...position],blocked:false,contacted:false};
 const step=Math.min(radius*.4,field.step*.4),count=Math.min(256,Math.ceil(length/step)),factor=Math.min(1,count*step/length)/count,d=delta.map(v=>v*factor),travel=Math.hypot(...d),skin=Math.min(radius*.04,field.step*.04,travel*.1);let p=[...position],contacted=false;
 if(field.clearance(p)<radius)return {position:p,blocked:true,contacted:true};
 const sample=[0,0,0],safe=(from,to)=>{
  const dx=to[0]-from[0],dy=to[1]-from[1],dz=to[2]-from[2],samples=Math.max(1,Math.ceil(Math.hypot(dx,dy,dz)/(step*.5)));
  for(let i=1;i<=samples;i++){sample[0]=from[0]+dx*i/samples;sample[1]=from[1]+dy*i/samples;sample[2]=from[2]+dz*i/samples;if(field.clearance(sample)<radius)return false;}
  return true;
 };
 const clip=(from,to)=>{
  let lo=0,hi=1;
  for(let i=0;i<7;i++){const t=(lo+hi)*.5,q=from.map((v,k)=>v+(to[k]-v)*t);if(safe(from,q))lo=t;else hi=t;}
  return lo;
 };
 for(let i=0;i<count;i++){
  const next=p.map((v,k)=>v+d[k]);if(safe(p,next)){p=next;continue;}
  contacted=true;
  const fraction=clip(p,next);p=p.map((v,k)=>v+d[k]*fraction);
  const remaining=d.map(v=>v*(1-fraction)),budget=travel*(1-fraction),normal=field.gradient(p),n2=normal.reduce((s,v)=>s+v*v,0);if(n2<1e-12||budget<1e-10)continue;
  const inward=Math.min(0,remaining.reduce((s,v,k)=>s+v*normal[k],0)/n2),slide=remaining.map((v,k)=>v-inward*normal[k]);if(Math.hypot(...slide)<budget*.04)continue;
  let candidate=p.map((v,k)=>v+slide[k]);const contacts=[normal];
  // A tangent to a curved/quantised wall can still end just inside its next
  // facet. A tiny bounded inward correction lets it slide around that facet.
  for(let attempt=0;attempt<4;attempt++){
   const clearance=field.clearance(candidate);if(clearance>=radius&&safe(p,candidate))break;
   const gradient=field.gradient(candidate),norm2=gradient.reduce((s,v)=>s+v*v,0);if(norm2<1e-12)break;
   contacts.push(gradient);
   const correction=Math.min(Math.max(0,radius+skin-clearance)/Math.sqrt(norm2),budget*.35);
   if(correction<1e-12)break;candidate=candidate.map((v,k)=>v+gradient[k]/Math.sqrt(norm2)*correction);
   const offset=candidate.map((v,k)=>v-p[k]),distance=Math.hypot(...offset);if(distance>budget)candidate=p.map((v,k)=>v+offset[k]*budget/distance);
  }
  const advance=point=>point.reduce((s,v,k)=>s+(v-p[k])*remaining[k],0);
  const t=safe(p,candidate)?1:clip(p,candidate);let best=p.map((v,k)=>v+(candidate[k]-v)*t),bestProgress=advance(best);
  // At a tight bend two walls can meet. Repeatedly pushing away from just
  // one wall loses the free direction along their crease. Try that shared
  // tangent only when the ordinary curved-wall correction could not finish.
  if(t<.95&&contacts.length>1)for(const other of contacts.slice(1)){
   const crease=[normal[1]*other[2]-normal[2]*other[1],normal[2]*other[0]-normal[0]*other[2],normal[0]*other[1]-normal[1]*other[0]],length2=crease.reduce((s,v)=>s+v*v,0);
   if(length2<1e-8*n2*other.reduce((s,v)=>s+v*v,0))continue;
   const along=remaining.reduce((s,v,k)=>s+v*crease[k],0)/length2,point=p.map((v,k)=>v+crease[k]*along),fraction=safe(p,point)?1:clip(p,point),clipped=p.map((v,k)=>v+(point[k]-v)*fraction),progress=advance(clipped);
   if(progress>bestProgress){best=clipped;bestProgress=progress;}
  }
  // At a voxel crease, an exactly tangent sweep can hit the next facet at
  // distance zero. Reserve a small amount of the SAME movement budget for
  // clearance into this lumen, then sweep the complete candidate as usual.
  // Only stalled contacts pay this cost; no shrinking or wall crossing.
  if(bestProgress<budget*budget*.12){
   const normalLength=Math.sqrt(n2);
   for(const fraction of [.08,.18,.3]){
    const inset=Math.min(budget*fraction,field.step*.1),offset=slide.map((v,k)=>v+normal[k]/normalLength*inset),length=Math.hypot(...offset),scale=Math.min(1,budget/length);
    const point=p.map((v,k)=>v+offset[k]*scale),fractionSafe=safe(p,point)?1:clip(p,point),clipped=p.map((v,k)=>v+(point[k]-v)*fractionSafe),progress=advance(clipped);
    if(progress>bestProgress){best=clipped;bestProgress=progress;}
    if(bestProgress>=budget*budget*.4)break;
   }
  }
  if(bestProgress>budget*budget*.002)p=best;
 }
 const progress=p.reduce((s,v,k)=>s+(v-position[k])*delta[k]/length,0);
 return {position:p,contacted,blocked:contacted&&progress<travel*count*.12};
}
