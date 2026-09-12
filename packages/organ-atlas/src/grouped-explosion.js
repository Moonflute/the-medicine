import * as T from 'three';import{explosionAssembly}from'./explosion-assemblies.js';
export function prepareGroupedExplosion(root){
 if(root.userData.groupedExplosion)return root.userData.groupedExplosion;
 root.updateMatrixWorld(true);const groups=new Map();root.traverse(m=>{if(!m.isMesh||!m.userData.partId)return;const id=explosionAssembly(m.userData.organId,m.userData.partId);if(!groups.has(id))groups.set(id,{id,meshes:[],box:new T.Box3()});const group=groups.get(id);group.meshes.push(m);group.box.expandByObject(m);m.userData.explodeGroup=id;});
 const center=new T.Box3().setFromObject(root).getCenter(new T.Vector3());let index=0;const domains=new Map();for(const group of groups.values()){const bits=group.id.split(':');group.domain=['L','R'].includes(bits[1])?bits.slice(0,2).join(':'):bits[0];if(!domains.has(group.domain))domains.set(group.domain,{box:new T.Box3(),count:0});const domain=domains.get(group.domain);domain.box.union(group.box);domain.count++;}
 for(const group of groups.values()){const point=group.box.getCenter(new T.Vector3()),domain=domains.get(group.domain),anchor=domain.count>1?domain.box.getCenter(new T.Vector3()):center,direction=point.clone().sub(anchor);if(direction.length()<.03)direction.set(Math.cos(index*2.4),.35,Math.sin(index*2.4));index++;direction.normalize().multiplyScalar(groups.size>1?.65:0);
  for(const m of group.meshes){const inverse=m.parent.matrixWorld.clone().invert();m.userData.explodeOffset=point.clone().add(direction).applyMatrix4(inverse).sub(point.clone().applyMatrix4(inverse));}
 }
 const result=[...groups.values()].map(g=>({id:g.id,count:g.meshes.length}));root.userData.groupedExplosion=result;return result;
}
