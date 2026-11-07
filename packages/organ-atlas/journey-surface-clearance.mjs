import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';
// Final mesh simplification is bounded but nearby independent vessel surfaces
// can reduce room further. Cap occupied samples to the ACTUAL shipped surface.
export function constrainSurfaceClearance(field,bytes,manifest){
 const n=manifest.vertices,raw=Uint8Array.from(bytes),g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(new Float32Array(raw.buffer,0,n*3),3));g.setIndex(new T.BufferAttribute(new Uint32Array(raw.slice(n*27).buffer),1));const bvh=new MeshBVH(g,{indirect:true}),p=new T.Vector3(),target={},[bx,by]=field.brickDimensions;let adjusted=0,largestReduction=0;
 field.forEachVoxel((x,y,z,id,value)=>{if(!value)return;p.set(field.origin[0]+x*field.step,field.origin[1]+y*field.step,field.origin[2]+z*field.step);const hit=bvh.closestPointToPoint(p,target,0,value*field.unit+.00003);if(!hit)return;const limit=Math.max(0,Math.floor((hit.distance-.00003)/field.unit+1e-7));if(limit>=value)return;const brick=field.bricks[field.brickIndex[(x>>3)+bx*((y>>3)+by*(z>>3))]],offset=(x&7)+8*((y&7)+8*(z&7));brick[offset]=limit;adjusted++;largestReduction=Math.max(largestReduction,(value-limit)*field.unit);});g.dispose();return {adjustedSamples:adjusted,largestReductionMetres:largestReduction,method:'final-surface-distance-cap',reserveMetres:.00003};
}
