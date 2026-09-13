import * as T from 'three';
import {explosionAssembly} from './explosion-assemblies.js';

const MAX_EXPLOSION_DISTANCE = 1.95;
export function prepareGroupedExplosion(root,appliedAmount=0) {
 if (root.userData.groupedExplosion) return root.userData.groupedExplosion;
 root.updateMatrixWorld(true);
 const groups = new Map(), bounds = new T.Box3();
 root.traverse(mesh => {
  if (!mesh.isMesh || !mesh.userData.partId) return;
  const id = explosionAssembly(mesh.userData.organId, mesh.userData.partId, mesh.userData.detail);
  if (!groups.has(id)) groups.set(id, {id, meshes: [], box: new T.Box3()});
  const group = groups.get(id);
  group.meshes.push(mesh);
  const restBounds=new T.Box3().setFromObject(mesh);
  if(mesh.userData.explodeOffset&&appliedAmount){
   const origin=new T.Vector3().applyMatrix4(mesh.parent.matrixWorld);
   const displacement=mesh.userData.explodeOffset.clone().multiplyScalar(appliedAmount).applyMatrix4(mesh.parent.matrixWorld).sub(origin);
   restBounds.translate(displacement.negate());
  }
  group.box.union(restBounds);
  if (!mesh.userData.contextStructure) bounds.union(restBounds);
  mesh.userData.explodeGroup = id;
 });
 if (bounds.isEmpty()) for (const group of groups.values()) bounds.union(group.box);
 const center = bounds.getCenter(new T.Vector3());
 for (const group of groups.values()) {
  const point = group.box.getCenter(new T.Vector3());
  const direction = point.clone().sub(center);
  // A centered assembly stays at the center; never invent a sideways direction.
  if (groups.size > 1 && direction.lengthSq() > 1e-12) direction.normalize().multiplyScalar(MAX_EXPLOSION_DISTANCE);
  else direction.set(0, 0, 0);
  for (const mesh of group.meshes) {
   // Convert translation only: nested source rotations/scales must not rotate the part.
   const inverse = mesh.parent.matrixWorld.clone().invert();
   mesh.userData.explodeOffset = point.clone().add(direction).applyMatrix4(inverse).sub(point.clone().applyMatrix4(inverse));
  }
 }
 const result = [...groups.values()].map(group => ({id: group.id, count: group.meshes.length}));
 root.userData.groupedExplosion = result;
 return result;
}
