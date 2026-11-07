import {MeshoptSimplifier} from 'meshoptimizer';

export async function compactJourneySurface(raw,report){
 await MeshoptSimplifier.ready;
 const n=report.vertices,buffer=Uint8Array.from(raw),positions=new Float32Array(buffer.buffer,0,n*3),normals=new Float32Array(buffer.buffer,n*12,n*3),colors=buffer.subarray(n*24,n*27),indices=new Uint32Array(buffer.slice(n*27).buffer),locks=new Uint8Array(n);
 let reduced,error,attempt=0,valid=false;
 for(;attempt<6;attempt++){
  [reduced,error]=MeshoptSimplifier.simplifyWithAttributes(indices,positions,3,normals,3,[0,0,0],locks,Math.floor(indices.length*.24/3)*3,report.surfaceError??.00012,['ErrorAbsolute','LockBorder']);
  const duplicates=new Map(),cancelled=new Set();
  for(let i=0;i<reduced.length;i+=3){const tri=[reduced[i],reduced[i+1],reduced[i+2]],key=[...tri].sort((a,b)=>a-b).join(',');if(duplicates.has(key)){cancelled.add(i);cancelled.add(duplicates.get(key));}else duplicates.set(key,i);}
  if(cancelled.size)reduced=Uint32Array.from([...reduced].filter((_,i)=>!cancelled.has(i-i%3)));
  const edges=new Map();for(let i=0;i<reduced.length;i+=3)for(const [a,b]of [[reduced[i],reduced[i+1]],[reduced[i+1],reduced[i+2]],[reduced[i+2],reduced[i]]]){const key=a<b?a+','+b:b+','+a;edges.set(key,(edges.get(key)||0)+1);}
  let fragile=new Set();for(const [key,count]of edges)if(count!==2)for(const i of key.split(',').map(Number))fragile.add(i);
  if(!fragile.size){valid=true;break;}
  // Retain only the source one-rings around a pinched edge. This protects thin
  // anatomical walls without falling back to the whole high-resolution mesh.
  for(let ring=0;ring<2;ring++){const expanded=new Set(fragile);for(let i=0;i<indices.length;i+=3)if(fragile.has(indices[i])||fragile.has(indices[i+1])||fragile.has(indices[i+2])){expanded.add(indices[i]);expanded.add(indices[i+1]);expanded.add(indices[i+2]);}fragile=expanded;}
  for(const i of fragile)locks[i]=1;
 }
 if(!valid){reduced=indices;error=0;}
 const [remap,count]=MeshoptSimplifier.compactMesh(reduced),p=new Float32Array(count*3),normal=new Float32Array(count*3),color=new Uint8Array(count*3);
 for(let i=0;i<n;i++){const j=remap[i];if(j===0xffffffff||j===undefined)continue;p.set(positions.subarray(i*3,i*3+3),j*3);normal.set(normals.subarray(i*3,i*3+3),j*3);color.set(colors.subarray(i*3,i*3+3),j*3);}
 const result=Buffer.concat([Buffer.from(p.buffer),Buffer.from(normal.buffer),Buffer.from(color.buffer),Buffer.from(reduced.buffer)]);
 report.sourceTriangles=report.sourceTriangles||report.triangles;report.triangles=reduced.length/3;report.vertices=count;report.surfaceBytes=result.length;report.simplificationErrorMetres=error;report.protectedSurfaceVertices=locks.reduce((s,v)=>s+v,0);report.simplificationPasses=attempt+1;
 return result;
}
