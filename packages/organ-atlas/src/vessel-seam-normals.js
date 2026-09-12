import * as T from 'three';
// Render-only shading correction for the audited aortic source subdivisions.
// Never move vertices, merge meshes, rename IDs, or smooth unrelated tissues.
const family=/^VH_M_(?:aortic_arch|ascending_aorta|(?:brachiocephalic_artery|left_common_carotid_artery|left_subclavian_artery|descending_aorta)_[ab])$/;
export function smoothVesselSeamNormals(root){
 root.updateMatrixWorld(true);const shared=new Map();
 root.traverse(mesh=>{if(!mesh.isMesh||!family.test(mesh.name)||!mesh.geometry.attributes.normal)return;
  // Own the normal buffer so cached source geometry cannot be mutated elsewhere.
  mesh.geometry=mesh.geometry.clone();const p=mesh.geometry.attributes.position,n=mesh.geometry.attributes.normal;
  const matrix=new T.Matrix3().getNormalMatrix(mesh.matrixWorld),inverse=matrix.clone().invert();
  for(let i=0;i<p.count;i++){const key=new T.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld).toArray().map(v=>Math.round(v/1e-7)).join(',');if(!shared.has(key))shared.set(key,[]);shared.get(key).push({mesh,index:i,normal:new T.Vector3().fromBufferAttribute(n,i).applyNormalMatrix(matrix),inverse});}
 });
 let vertices=0,seams=0;
 for(const entries of shared.values()){
  if(new Set(entries.map(e=>e.mesh)).size<2)continue;
  // Preserve sharp or opposite-facing surfaces; these are not smooth seams.
  if(entries.some(a=>entries.some(b=>a.normal.dot(b.normal)<Math.SQRT1_2)))continue;
  const normal=entries.reduce((sum,e)=>sum.add(e.normal),new T.Vector3()).normalize();
  for(const e of entries){const local=normal.clone().applyMatrix3(e.inverse).normalize(),attribute=e.mesh.geometry.attributes.normal;attribute.setXYZ(e.index,local.x,local.y,local.z);attribute.needsUpdate=true;vertices++;}seams++;
 }
 return {sharedPositions:seams,normalVertices:vertices};
}
