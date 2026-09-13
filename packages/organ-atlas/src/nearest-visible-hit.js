import {Box3,Vector3} from 'three';

// World AABBs provide conservative lower bounds; exact mesh raycasts still
// decide visibility and clipping. Stop only beyond the nearest accepted hit.
export function nearestVisibleHit(raycaster,meshes){
 const point=new Vector3(),box=new Box3(),candidates=[];
 for(const mesh of meshes){
  const geometry=mesh.geometry;if(!geometry.boundingBox)geometry.computeBoundingBox();
  box.copy(geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
  const inside=box.containsPoint(raycaster.ray.origin);
  if(!inside&&!raycaster.ray.intersectBox(box,point))continue;
  candidates.push({mesh,distance:inside?0:point.distanceTo(raycaster.ray.origin)});
 }
 candidates.sort((a,b)=>a.distance-b.distance);
 let nearest;
 for(const {mesh,distance} of candidates){
  if(nearest&&distance>nearest.distance+1e-8)break;
  const hit=raycaster.intersectObject(mesh,false).find(h=>!(h.object.material.clippingPlanes||[]).some(p=>p.distanceToPoint(h.point)<0));
  if(hit&&(!nearest||hit.distance<nearest.distance))nearest=hit;
 }
 return nearest;
}
