import * as T from 'three';

// One reusable 48-point draw, no textures, shadow maps, simulation or per-frame
// geometry allocation. Paths are generated offline from the collision field.
export class JourneyFlow{
 constructor(asset,scene,camera,{reducedMotion=false}={}){
  this.asset=asset;this.camera=camera;this.enabled=!reducedMotion;this.reducedMotion=reducedMotion;this.phase=0;this.last=0;this.capacity=48;
  this.paths=(asset.manifest.flowPaths||[]).map(path=>{const lengths=[0];for(let i=1;i<path.points.length;i++)lengths.push(lengths.at(-1)+Math.hypot(...path.points[i].map((v,k)=>v-path.points[i-1][k])));return {...path,lengths,length:lengths.at(-1)};});
  const positions=new Float32Array(this.capacity*3),colors=new Float32Array(this.capacity*3);this.geometry=new T.BufferGeometry();this.geometry.setAttribute('position',new T.BufferAttribute(positions,3).setUsage(T.DynamicDrawUsage));this.geometry.setAttribute('color',new T.BufferAttribute(colors,3).setUsage(T.DynamicDrawUsage));this.geometry.setDrawRange(0,0);
  this.material=new T.PointsMaterial({size:.00035,vertexColors:true,transparent:true,opacity:.78,depthWrite:false,sizeAttenuation:true});this.material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nif(length(gl_PointCoord-vec2(0.5))>0.5)discard;');};this.mesh=new T.Points(this.geometry,this.material);this.mesh.frustumCulled=false;scene.add(this.mesh);
  this.color=new T.Color();this.point=[0,0,0];
 }
 update(now,field,active=true){
  const visible=this.enabled&&active&&this.paths.length>0;if(this.mesh.visible!==!!visible){this.mesh.visible=!!visible;if(!visible)return true;}
  if(!visible||now-this.last<50)return false;const dt=Math.min(.08,(now-this.last)/1000);this.last=now;if(!this.reducedMotion)this.phase+=dt*.004;
  const position=this.camera.position,region=this.asset.field.region(position.toArray()),near=this.paths.filter(p=>p.from===region||p.to===region),points=this.geometry.attributes.position.array,colors=this.geometry.attributes.color.array;let count=0;
  for(const path of near){
   const n=Math.min(12,Math.max(3,Math.ceil(path.length/.008))),part=this.asset.manifest.parts.find(p=>p.id===path.from),deoxygenated=part.circuit==='right'||part.circuit!=='left'&&part.kind==='vein';this.color.set(path.kind==='urinary'?'#ffdb85':path.kind==='csf'?'#caeff3':deoxygenated?'#add9ef':'#f1b19f');
   for(let i=0;i<n&&count<this.capacity;i++){
    const distance=(this.phase+i/n*path.length)%path.length;let j=1;while(j<path.lengths.length-1&&path.lengths[j]<distance)j++;
    const a=path.points[j-1],b=path.points[j],t=(distance-path.lengths[j-1])/Math.max(1e-10,path.lengths[j]-path.lengths[j-1]);for(let k=0;k<3;k++)this.point[k]=a[k]+(b[k]-a[k])*t;
    if(Math.hypot(this.point[0]-position.x,this.point[1]-position.y,this.point[2]-position.z)>.07||field.clearance(this.point)<.00008)continue;
    points.set(this.point,count*3);this.color.toArray(colors,count*3);count++;
   }
  }
  const changed=count>0||this.geometry.drawRange.count>0;this.geometry.setDrawRange(0,count);this.geometry.attributes.position.needsUpdate=true;this.geometry.attributes.color.needsUpdate=true;return changed;
 }
 dispose(){this.mesh.removeFromParent();this.geometry.dispose();this.material.dispose();}
}
