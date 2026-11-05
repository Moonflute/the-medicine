// The navigation field and visible surface are built from the same source mask.
export class JourneyVolume{
 constructor(manifest,bytes){
  this.origin=manifest.origin;this.step=manifest.spacing;this.dimensions=manifest.dimensions;this.unit=manifest.distanceUnit;const [nx,ny,nz]=this.dimensions,n=nx*ny*nz;if(bytes.length!==n*2)throw Error('Invalid navigation field');
  // Empty body space is >95% of these grids. Keep only occupied 8³ bricks in RAM;
  // source gzip remains compact on disk and the dense decode is then released.
  this.brickDimensions=this.dimensions.map(v=>Math.ceil(v/8));const [bx,by,bz]=this.brickDimensions;this.brickIndex=new Int32Array(bx*by*bz).fill(-1);this.bricks=[];
  for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){const i=x+nx*(y+ny*z);if(!bytes[i]&&!bytes[n+i])continue;const b=(x>>3)+bx*((y>>3)+by*(z>>3));let id=this.brickIndex[b];if(id<0){id=this.bricks.length;this.brickIndex[b]=id;this.bricks.push(new Uint8Array(1024));}const local=(x&7)+8*((y&7)+8*(z&7));this.bricks[id][local]=bytes[i];this.bricks[id][local+512]=bytes[n+i];}
  this.memoryBytes=this.brickIndex.byteLength+this.bricks.length*1024;
 }
 offset(x,y,z){const [nx,ny,nz]=this.dimensions;return x<0||y<0||z<0||x>=nx||y>=ny||z>=nz?-1:x+nx*(y+ny*z);}
 value(x,y,z,label=false){if(this.offset(x,y,z)<0)return 0;const [bx,by]=this.brickDimensions,id=this.brickIndex[(x>>3)+bx*((y>>3)+by*(z>>3))];return id<0?0:this.bricks[id][(x&7)+8*((y&7)+8*(z&7))+(label?512:0)];}
 forEachVoxel(fn){const [bx,by]=this.brickDimensions;for(let b=0;b<this.brickIndex.length;b++){const id=this.brickIndex[b];if(id<0)continue;const x0=(b%bx)*8,y0=(Math.floor(b/bx)%by)*8,z0=Math.floor(b/(bx*by))*8,brick=this.bricks[id];for(let z=0;z<8;z++)for(let y=0;y<8;y++)for(let x=0;x<8;x++){const at=x+8*(y+8*z);if(brick[at+512])fn(x0+x,y0+y,z0+z,brick[at+512],brick[at]);}}}
 clearance(point){const q=point.map((v,i)=>(v-this.origin[i])/this.step),base=q.map(Math.floor),t=q.map((v,i)=>v-base[i]);let value=0;for(let z=0;z<2;z++)for(let y=0;y<2;y++)for(let x=0;x<2;x++)value+=this.value(base[0]+x,base[1]+y,base[2]+z)*(x?t[0]:1-t[0])*(y?t[1]:1-t[1])*(z?t[2]:1-t[2]);return value*this.unit;}
 region(point){const q=point.map((v,i)=>Math.round((v-this.origin[i])/this.step));return this.value(...q,true);}
 gradient(point){const s=this.step;return [0,1,2].map(axis=>{const a=[...point],b=[...point];a[axis]+=s;b[axis]-=s;return (this.clearance(a)-this.clearance(b))/(2*s)});}
}

// A swept sphere with bounded steps, tangent sliding, and no penetration recovery
// teleport. A blocked move leaves the last valid position intact.
export function moveInLumen(field,position,delta,radius){
 const length=Math.hypot(...delta);if(!length)return {position:[...position],blocked:false};
 const step=Math.min(radius*.4,field.step*.4),count=Math.min(256,Math.ceil(length/step)),factor=Math.min(1,count*step/length)/count,d=delta.map(v=>v*factor);let p=[...position],blocked=false;
 if(field.clearance(p)<radius)return {position:p,blocked:true};
 for(let i=0;i<count;i++){
  const next=p.map((v,k)=>v+d[k]);if(field.clearance(next)>=radius){p=next;continue;}
  blocked=true;const normal=field.gradient(next),n=Math.hypot(...normal);if(n>1e-8){const dot=d.reduce((v,x,k)=>v+x*normal[k]/n,0),slide=d.map((v,k)=>v-Math.min(0,dot)*normal[k]/n),candidate=p.map((v,k)=>v+slide[k]);if(field.clearance(candidate)>=radius){p=candidate;continue;}}
  for(const axis of [0,1,2]){const candidate=[...p];candidate[axis]+=d[axis];if(field.clearance(candidate)>=radius)p=candidate;}
 }
 return {position:p,blocked};
}
