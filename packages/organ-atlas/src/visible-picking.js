import {nearestVisibleHit} from './nearest-visible-hit.js';

// Hidden layer groups must be excluded before triangle intersection, not afterward.
export function visibleModelHits(ray,root){
 if(!root)return [];
 const meshes=[];root.traverseVisible(object=>{if(object.isMesh)meshes.push(object);});
 return ray.intersectObjects(meshes,false).filter(hit=>!(hit.object.material.clippingPlanes||[]).some(plane=>plane.distanceToPoint(hit.point)<0));
}
export function nearestModelHit(ray,root){
 if(!root)return undefined;
 const meshes=[];root.traverseVisible(object=>{if(object.isMesh)meshes.push(object);});
 return nearestVisibleHit(ray,meshes);
}
