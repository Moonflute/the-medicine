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
