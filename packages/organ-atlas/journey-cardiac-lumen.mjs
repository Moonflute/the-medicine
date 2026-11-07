import * as T from 'three';
// An interval is blood space only when a ray leaves myocardium and then enters
// it again. Two independent axes must agree. Tissue wins every disagreement.
export function sampleCardiacBloodSpace(mesh,{origin,dimensions,step,labels,obstacles}){
 const {geometry:g,bvh,id}=mesh,box=g.boundingBox,[nx,ny]=dimensions;
 const lo=box.min.toArray().map((v,i)=>Math.max(0,Math.floor((v-origin[i])/step))),hi=box.max.toArray().map((v,i)=>Math.min(dimensions[i]-1,Math.ceil((v-origin[i])/step))),dims=hi.map((v,i)=>v-lo[i]+1),n=dims.reduce((a,b)=>a*b,1),votes=new Uint8Array(n),tissue=new Uint8Array(n),ray=new T.Ray();
 const index=q=>(q[0]-lo[0])+dims[0]*((q[1]-lo[1])+dims[1]*(q[2]-lo[2]));let rays=0,odd=0;
 for(let axis=0;axis<3;axis++){const u=(axis+1)%3,v=(axis+2)%3;ray.direction.set(0,0,0).setComponent(axis,1);
  for(let a=lo[u];a<=hi[u];a++)for(let b=lo[v];b<=hi[v];b++){
   const q=[0,0,0];q[u]=a;q[v]=b;ray.origin.fromArray(q.map((x,i)=>origin[i]+x*step));ray.origin.setComponent(axis,box.min.getComponent(axis)-.005);const hits=[];
   for(const hit of bvh.raycast(ray,T.DoubleSide).sort((a,b)=>a.distance-b.distance))if(!hits.length||Math.abs(hit.distance-hits.at(-1).distance)>1e-7)hits.push(hit);rays++;if(hits.length%2)odd++;
   for(let j=0;j<hits.length-1;j++){
    const first=hits[j],second=hits[j+1],out=first.face.normal.getComponent(axis)>1e-6,into=second.face.normal.getComponent(axis)<-1e-6,blood=out&&into,wall=!out&&!into;if(!blood&&!wall)continue;
    const from=Math.max(lo[axis],Math.ceil((first.point.getComponent(axis)-origin[axis])/step)),to=Math.min(hi[axis],Math.floor((second.point.getComponent(axis)-origin[axis])/step));
    for(let k=from;k<=to;k++){q[axis]=k;(blood?votes:tissue)[index(q)]|=1<<axis;}
   }
  }
 }
 let bloodVoxels=0,tissueVoxels=0;for(let z=lo[2];z<=hi[2];z++)for(let y=lo[1];y<=hi[1];y++)for(let x=lo[0];x<=hi[0];x++){const i=index([x,y,z]),at=x+nx*(y+ny*z),wall=tissue[i]&&(tissue[i]&(tissue[i]-1));if(wall){obstacles[at]=250;tissueVoxels++;}else if(votes[i]&&(votes[i]&(votes[i]-1))){labels[at]=id;bloodVoxels++;}}
 return {id,rays,odd,bloodVoxels,tissueVoxels,method:'oriented-wall-crossings; agreement-of-two-axes; myocardium-excluded'};
}
