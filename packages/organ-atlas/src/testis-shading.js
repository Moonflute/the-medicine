import {toCreasedNormals} from 'three/addons/utils/BufferGeometryUtils.js';
// Render-only normal smoothing within each source mesh; no cross-organ welding.
// The 60-degree crease retains sharp transitions. Positions remain unchanged.
export function smoothTestisSurface(root){
 let meshes=0;root.traverse(m=>{if(!m.isMesh)return;const old=m.geometry;m.geometry=toCreasedNormals(old.clone(),Math.PI/3);old.dispose();meshes++;});return {meshes,positionsChanged:false,creaseDegrees:60};
}
