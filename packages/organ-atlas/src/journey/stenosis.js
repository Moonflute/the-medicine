import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';

// Local, educational narrowing at an existing aqueduct path. Its outer edge
// follows sampled source walls; this does not claim hydrocephalus/dilation.
export function aqueductSleeve(field,center,direction,amount){
 const z=new T.Vector3(...direction).normalize(),x=new T.Vector3(0,1,0);if(Math.abs(z.dot(x))>.85)x.set(1,0,0);x.cross(z).normalize();const y=new T.Vector3().crossVectors(z,x).normalize(),origin=new T.Vector3(...center),clearance=field.clearance(center),half=Math.min(.0028,clearance*2),sides=24,rows=9;
 if(clearance<.00018)return null;
 const positions=[],indices=[],inner=[],outer=[];const point=new T.Vector3(),radial=new T.Vector3();
 for(let j=0;j<rows;j++){
  const at=(j/(rows-1)*2-1)*half,p=origin.clone().addScaledVector(z,at),inside=[],outside=[];
  if(field.clearance(p.toArray())<.00012)return null;
  for(let i=0;i<sides;i++){
   const angle=i/sides*Math.PI*2;radial.copy(x).multiplyScalar(Math.cos(angle)).addScaledVector(y,Math.sin(angle));
   let lo=0,hi=.008;for(let q=0;q<16;q++){const mid=(lo+hi)/2;point.copy(p).addScaledVector(radial,mid);if(field.clearance(point.toArray())>.000035)lo=mid;else hi=mid;}
   // End rings meet the source wall; the centre narrows continuously.
   const radius=lo*(1-(.22+.48*amount)*Math.sin(Math.PI*j/(rows-1))**2);inside.push(radius);outside.push(lo+field.step);
   for(const r of [radius,lo+field.step]){point.copy(p).addScaledVector(radial,r);positions.push(...point.toArray());}
  }inner.push(inside);outer.push(outside);
 }
 const ix=(j,i,wall)=>((j*sides+(i+sides)%sides)*2+wall);
 for(let j=0;j<rows-1;j++)for(let i=0;i<sides;i++)for(let w=0;w<2;w++){const a=ix(j,i,w),b=ix(j,i+1,w),c=ix(j+1,i,w),d=ix(j+1,i+1,w);indices.push(a,c,b,b,c,d);}
 for(const j of [0,rows-1])for(let i=0;i<sides;i++){const a=ix(j,i,0),b=ix(j,i+1,0),c=ix(j,i,1),d=ix(j,i+1,1);indices.push(a,b,c,b,d,c);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();geometry.computeBoundingBox();const tree=new MeshBVH(geometry,{indirect:true}),local=new T.Vector3(),target={};
 const shape={geometry,tree,center:[...center],distance(p){local.fromArray(p).sub(origin);const along=local.dot(z),rho=Math.hypot(local.dot(x),local.dot(y));if(Math.abs(along)>half+.008)return Math.abs(along)-half;const hit=tree.closestPointToPoint(new T.Vector3(...p),target);let inside=false;if(Math.abs(along)<half){const q=(along/half+1)/2*(rows-1),j=Math.min(rows-2,Math.floor(q)),t=q-j,a=(Math.atan2(local.dot(y),local.dot(x))+Math.PI*2)%(Math.PI*2)/(Math.PI*2)*sides,i=Math.floor(a),u=a-i,lerp=table=>(table[j][i]*(1-u)+table[j][(i+1)%sides]*u)*(1-t)+(table[j+1][i]*(1-u)+table[j+1][(i+1)%sides]*u)*t;inside=rho>=lerp(inner)&&rho<=lerp(outer);}return (inside?-hit.distance:hit.distance)-.00004;}};
 return shape;
}
