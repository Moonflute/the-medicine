import {MeshBVH,acceleratedRaycast} from 'three-mesh-bvh';

// These source surfaces are static; animation changes Object3D transforms only.
// Indirect indexing leaves the source triangle order and positions untouched.
export function accelerateSourceMesh(mesh){
 const geometry=mesh.geometry;
 if(!geometry.boundsTree){
  geometry.boundsTree=new MeshBVH(geometry,{indirect:true});
  const release=()=>{geometry.boundsTree=null;geometry.removeEventListener('dispose',release);};
  geometry.addEventListener('dispose',release);
 }
 mesh.raycast=acceleratedRaycast;
}

// Copies share immutable geometry and its tree, but Mesh.clone does not copy
// custom raycast functions. Reattach without rebuilding the spatial index.
export function attachSourceRaycast(mesh){if(mesh.geometry?.boundsTree)mesh.raycast=acceleratedRaycast;}
export async function accelerateSourceModel(root){
 const meshes=[];root.traverse(mesh=>{if(mesh.isMesh)meshes.push(mesh);});
 let yieldedAt=performance.now();
 for(const mesh of meshes){
  accelerateSourceMesh(mesh);
  if(performance.now()-yieldedAt>8){await new Promise(resolve=>setTimeout(resolve,0));yieldedAt=performance.now();}
 }
}
