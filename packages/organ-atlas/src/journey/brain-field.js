import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {moveInLumen} from './volume.js';

// Surface walking follows source pial geometry. Cutaway navigation moves in
// exposed inspection space, with the remaining tissue surfaces kept solid.
export class BrainField{
 constructor(manifest,geometry,meshes){
  this.manifest=manifest;this.geometry=geometry;this.meshes=meshes;this.step=.0006;this.mode='surface';this.side='L';this.unit=1;
  this.bounds=new T.Box3(new T.Vector3(...manifest.bounds.min),new T.Vector3(...manifest.bounds.max)).expandByScalar(.035);
  this.parts=new Map(manifest.parts.map(p=>[p.id,p]));this.regions=geometry.attributes.region;this.index=geometry.index;this.position=geometry.attributes.position;
  this.layers=meshes.map(mesh=>({mesh,bvh:new MeshBVH(mesh.geometry,{indirect:true}),center:mesh.geometry.boundingBox.getCenter(new T.Vector3())}));
  this.ray=new T.Ray();this.point=new T.Vector3();this.target={};this.a=new T.Vector3();this.b=new T.Vector3();this.c=new T.Vector3();this.closestResult={};this.lastId=1;
 }
 setMode(mode,side=this.side){if(mode!==this.mode||side!==this.side)this.walkState=null;this.mode=mode;this.side=side;for(const {mesh}of this.layers)mesh.visible=mode==='surface'||mesh.userData.layer==='deep'||mesh.userData.layer!==side;}
 place(pose){this.walkState=pose.surfaceContact?{eye:new T.Vector3(...pose.position),point:new T.Vector3(...pose.surfaceContact.point),normal:new T.Vector3(...pose.surfaceContact.normal),id:pose.id}:null;}
 owner(hit,layer){const index=layer.mesh.geometry.index;return this.regions.getX(index.getX(hit.faceIndex*3));}
 normal(hit,layer){const index=layer.mesh.geometry.index;this.a.fromBufferAttribute(this.position,index.getX(hit.faceIndex*3));this.b.fromBufferAttribute(this.position,index.getX(hit.faceIndex*3+1));this.c.fromBufferAttribute(this.position,index.getX(hit.faceIndex*3+2));return this.b.sub(this.a).cross(this.c.sub(this.a)).normalize().clone();}
 project(position,side=this.side){
  const layer=this.layers.find(l=>l.mesh.userData.layer===side),direction=new T.Vector3(...position).sub(layer.center);if(direction.lengthSq()<1e-10)return null;direction.normalize();
  this.ray.origin.copy(layer.center).addScaledVector(direction,.3);this.ray.direction.copy(direction).negate();
  const hit=layer.bvh.raycastFirst(this.ray,T.DoubleSide);if(!hit)return null;
  const normal=this.normal(hit,layer);if(normal.dot(direction)<0)normal.negate();
  // Softly favour radial up on steep sulcal banks; source contact remains exact.
  normal.lerp(direction,.42).normalize();return {point:hit.point.clone(),normal,id:this.owner(hit,layer)};
 }
 projectNear(position,current){
  const layer=this.layers.find(l=>l.mesh.userData.layer===this.side),target=new T.Vector3(...position);
  // Follow the local bank rather than projecting from the hemisphere centre.
  // A radial projection skips concave sulci and can jump onto an opposite bank.
  this.ray.origin.copy(target).addScaledVector(current.normal,.003);this.ray.direction.copy(current.normal).negate();
  const hits=layer.bvh.raycast(this.ray,T.DoubleSide).filter(h=>h.distance<.006&&h.point.distanceTo(current.point)<.0022).sort((a,b)=>a.point.distanceToSquared(target)-b.point.distanceToSquared(target));
  for(const hit of hits){const normal=this.normal(hit,layer);if(normal.dot(current.normal)<.1)continue;return {point:hit.point.clone(),normal,id:this.owner(hit,layer)};}
  return null;
 }
 closest(point){
  this.point.fromArray(point);let best=Infinity,result=null;
  for(const layer of this.layers){if(!layer.mesh.visible)continue;const hit=layer.bvh.closestPointToPoint(this.point,this.target,0,best);if(!hit||hit.distance>=best)continue;best=hit.distance;const normal=this.normal(hit,layer),signed=this.point.clone().sub(hit.point).dot(normal)>=-1e-8?best:-best;result={distance:signed,point:hit.point.clone(),normal,id:this.owner(hit,layer)};}
  return result;
 }
 clearance(point){const hit=this.closest(point);const edge=Math.min(...point.flatMap((v,i)=>[v-this.bounds.min.getComponent(i),this.bounds.max.getComponent(i)-v]));return Math.max(0,Math.min(edge,hit?.distance??0));}
 gradient(point){const h=.00015;return [0,1,2].map(i=>{const a=[...point],b=[...point];a[i]+=h;b[i]-=h;return (this.clearance(a)-this.clearance(b))/(h*2);});}
 region(point){return this.mode==='surface'?(this.walkState?.id||this.project(point)?.id||this.lastId):(this.closest(point)?.id||this.lastId);}
 inspect(camera){
  if(this.mode==='surface')return this.region(camera.position.toArray());
  camera.getWorldDirection(this.ray.direction);this.ray.origin.copy(camera.position);let distance=Infinity,id;
  for(const layer of this.layers){if(!layer.mesh.visible)continue;const hit=layer.bvh.raycastFirst(this.ray,T.DoubleSide);if(hit&&hit.distance<distance){distance=hit.distance;id=this.owner(hit,layer);}}
  this.lastId=id||this.region(camera.position.toArray());return this.lastId;
 }
 upAt(position){return this.mode==='surface'?(this.walkState?.normal||this.project(position)?.normal)?.toArray():[0,1,0];}
 move(position,delta,radius){
  if(this.mode!=='surface')return moveInLumen(this,position,delta,radius);
  let p=new T.Vector3(...position);const length=Math.hypot(...delta),count=Math.max(1,Math.ceil(length/.00065)),motion=new T.Vector3(...delta).divideScalar(count);let blocked=false;
  for(let i=0;i<count;i++){
   const current=this.walkState?.eye.distanceToSquared(p)<1e-12?this.walkState:this.project(p.toArray());if(!current){blocked=true;break;}
   const tangent=motion.clone().addScaledVector(current.normal,-motion.dot(current.normal));if(tangent.lengthSq()<1e-14)continue;
   const target=current.point.clone().add(tangent),next=this.projectNear(target.toArray(),current);
   // Do not jump a missing patch, across a fissure, or across the other hemisphere.
   if(!next||next.point.distanceTo(current.point)>Math.max(.002,tangent.length()*4)){blocked=true;break;}
   const normal=current.normal.clone().lerp(next.normal,.2).normalize(),eye=next.point.clone().addScaledVector(normal,radius*3.5);
   if(this.clearance(eye.toArray())<radius||eye.distanceTo(p)>.0025){blocked=true;break;}p.copy(eye);this.lastId=next.id;this.walkState={eye:eye.clone(),point:next.point,normal,id:next.id};
  }
  return {position:p.toArray(),blocked,contacted:blocked};
 }
 destination(id,radius=.0008){
  const part=this.parts.get(Number(id));if(!part)return null;const mode=part.layer?'interior':'surface';this.setMode(mode,part.hemisphere);
  if(part.starts)return part.starts.find(p=>p.radius<=radius&&this.clearance(p.position)>=p.radius)||null;
  if(!part.layer){
   // Search actual vertices of this patch, not its solid-volume centroid.
   let best=null,bestScore=-Infinity;const center=new T.Vector3(...part.center),layer=this.layers.find(l=>l.mesh.userData.layer===part.hemisphere);
   for(let i=part.vertexStart;i<part.vertexStart+part.vertexCount;i+=Math.max(1,Math.floor(part.vertexCount/160))){
    const p=new T.Vector3().fromBufferAttribute(this.position,i),hit=this.project(p.toArray());if(!hit||hit.id!==part.id||hit.point.distanceTo(p)>.001)continue;
    const eye=hit.point.clone().addScaledVector(hit.normal,radius*3.5);if(this.clearance(eye.toArray())<radius)continue;
    const score=p.y-layer.center.y-p.distanceTo(center)*.2;if(score>bestScore){bestScore=score;best={hit,eye};}
   }
   if(!best)return null;let forward=new T.Vector3(0,0,-1).addScaledVector(best.hit.normal,best.hit.normal.z).normalize();if(forward.lengthSq()<.1)forward.set(1,0,0);forward.addScaledVector(best.hit.normal,-.24).normalize();
   return {key:'brain',id:part.id,name:part.name,position:best.eye.toArray(),direction:forward.toArray(),radius,mode,side:part.hemisphere,surfaceContact:{point:best.hit.point.toArray(),normal:best.hit.normal.toArray()}};
  }
  const center=new T.Vector3(...part.center),side=part.hemisphere==='L'?1:-1;
  for(const distance of [.035,.05,.022,.012])for(const direction of [[side,0,0],[side,.5,.5],[side,.5,-.5],[side,-.3,.5],[0,1,0],[0,0,1]]){
   const eye=center.clone().addScaledVector(new T.Vector3(...direction).normalize(),distance);if(this.clearance(eye.toArray())<radius+.0003)continue;
   this.ray.origin.copy(eye);this.ray.direction.copy(center).sub(eye).normalize();const deep=this.layers.find(l=>l.mesh.userData.layer==='deep'),hit=deep.bvh.raycastFirst(this.ray,T.DoubleSide);
   if(!hit||this.owner(hit,deep)!==part.id)continue;
   return {key:'brain',id:part.id,name:part.name,position:eye.toArray(),direction:center.sub(eye).normalize().toArray(),radius,mode,side:part.hemisphere};
  }
  // Thin or curved deep nuclei need a visible surface target, not their solid
  // bounding-box centre. Search original vertices without moving other tissue.
  const deep=this.layers.find(l=>l.mesh.userData.layer==='deep'),normals=this.geometry.attributes.normal;
  if(normals)for(let i=part.vertexStart;i<part.vertexStart+part.vertexCount;i+=Math.max(1,Math.floor(part.vertexCount/120))){
   const target=new T.Vector3().fromBufferAttribute(this.position,i),normal=new T.Vector3().fromBufferAttribute(normals,i).normalize();
   for(const distance of [.006,.012,.025,.003]){const eye=target.clone().addScaledVector(normal,distance);if(this.clearance(eye.toArray())<radius+.0002)continue;
    this.ray.origin.copy(eye);this.ray.direction.copy(target).sub(eye).normalize();const hit=deep.bvh.raycastFirst(this.ray,T.DoubleSide);if(!hit||this.owner(hit,deep)!==part.id)continue;
    return {key:'brain',id:part.id,name:part.name,position:eye.toArray(),direction:this.ray.direction.toArray(),radius,mode,side:part.hemisphere};
   }
  }
  return null;
 }
 dispose(){this.layers=[];}
}

export function createBrainAsset(manifest,geometry){
 const regions=new Uint8Array(manifest.vertices);for(const p of manifest.parts)regions.fill(p.id,p.vertexStart,p.vertexStart+p.vertexCount);geometry.setAttribute('region',new T.BufferAttribute(regions,1));
 const root=new T.Group(),material=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:.86}),meshes=[];
 for(const layer of ['L','R','deep']){
  const selected=manifest.parts.filter(p=>layer==='deep'?p.layer===1:p.layer===0&&p.hemisphere===layer),indices=Uint32Array.from(selected.flatMap(p=>Array.from(geometry.index.array.subarray(p.indexStart,p.indexStart+p.indexCount))));
  const g=new T.BufferGeometry();for(const [name,attribute]of Object.entries(geometry.attributes))g.setAttribute(name,attribute);g.setIndex(new T.BufferAttribute(indices,1));g.computeBoundingBox();
  // computeBoundingBox sees shared vertices; use only this layer's source bounds.
  g.boundingBox.makeEmpty();for(const p of selected)g.boundingBox.union(new T.Box3(new T.Vector3(...p.bounds.min),new T.Vector3(...p.bounds.max)));
  const mesh=new T.Mesh(g,material);mesh.userData.layer=layer;meshes.push(mesh);root.add(mesh);
 }
 const field=new BrainField(manifest,geometry,meshes);field.setMode('surface');
 return {manifest,mesh:root,field,geometry,inspect:camera=>field.inspect(camera),dispose(){field.dispose();meshes.forEach(m=>m.geometry.dispose());geometry.dispose();material.dispose();}};
}
