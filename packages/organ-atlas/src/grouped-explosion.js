import * as T from 'three';import{explosionAssembly}from'./explosion-assemblies.js';
// Maximum world-space displacement; assembly members keep their relative positions.
const MAX_EXPLOSION_DISTANCE=1.95;
export function prepareGroupedExplosion(root){
 if(root.userData.groupedExplosion)return root.userData.groupedExplosion;
 root.updateMatrixWorld(true);const groups=new Map();root.traverse(m=>{if(!m.isMesh||!m.userData.partId)return;const id=explosionAssembly(m.userData.organId,m.userData.partId,m.userData.detail);if(!groups.has(id))groups.set(id,{id,meshes:[],box:new T.Box3()});const group=groups.get(id);group.meshes.push(m);group.box.expandByObject(m);m.userData.explodeGroup=id;});
 // This long regional model has several nearly collinear assemblies. A size-aware
 // exploded tray prevents vessels, nerves and gland groups from landing on each other.
 const tray=new Map();if(root.userData.detail?.id==='thyroid-larynx'){
  const entries=[...groups.values()].sort((a,b)=>a.box.getCenter(new T.Vector3()).x-b.box.getCenter(new T.Vector3()).x),columns=4,rows=Math.ceil(entries.length/columns),widths=Array(columns).fill(0),heights=Array(rows).fill(0),gap=.28;
  entries.forEach((g,i)=>{const size=g.box.getSize(new T.Vector3());widths[i%columns]=Math.max(widths[i%columns],size.x);heights[Math.floor(i/columns)]=Math.max(heights[Math.floor(i/columns)],size.y)});
  const totalW=widths.reduce((a,b)=>a+b,0)+gap*(columns-1),totalH=heights.reduce((a,b)=>a+b,0)+gap*(rows-1),origin=new T.Box3().setFromObject(root).getCenter(new T.Vector3());
  entries.forEach((g,i)=>{const c=i%columns,r=Math.floor(i/columns),point=g.box.getCenter(new T.Vector3());tray.set(g.id,new T.Vector3(origin.x-totalW/2+widths.slice(0,c).reduce((a,b)=>a+b,0)+gap*c+widths[c]/2,origin.y+totalH/2-heights.slice(0,r).reduce((a,b)=>a+b,0)-gap*r-heights[r]/2,point.z).sub(point))});
 }
 const center=new T.Box3().setFromObject(root).getCenter(new T.Vector3());let index=0;const domains=new Map();for(const group of groups.values()){const bits=group.id.split(':');group.domain=['L','R'].includes(bits[1])?bits.slice(0,2).join(':'):bits[0];if(!domains.has(group.domain))domains.set(group.domain,{box:new T.Box3(),count:0});const domain=domains.get(group.domain);domain.box.union(group.box);domain.count++;}
 for(const group of groups.values()){const point=group.box.getCenter(new T.Vector3()),domain=domains.get(group.domain),anchor=domain.count>1?domain.box.getCenter(new T.Vector3()):center,direction=point.clone().sub(anchor);if(direction.length()<.03)direction.set(Math.cos(index*2.4),.35,Math.sin(index*2.4));index++;direction.normalize().multiplyScalar(groups.size>1?MAX_EXPLOSION_DISTANCE:0);if(tray.has(group.id))direction.copy(tray.get(group.id));
  for(const m of group.meshes){const inverse=m.parent.matrixWorld.clone().invert();m.userData.explodeOffset=point.clone().add(direction).applyMatrix4(inverse).sub(point.clone().applyMatrix4(inverse));}
 }
 const result=[...groups.values()].map(g=>({id:g.id,count:g.meshes.length}));root.userData.groupedExplosion=result;return result;
}

