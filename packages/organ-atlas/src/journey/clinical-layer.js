import * as T from 'three';
import {ClinicalField} from './clinical-field.js';
import {aqueductSleeve} from './stenosis.js';
import {visibleThroughLumen} from './wayfinding.js';

// Small educational examples on the existing wall. No source vertices move.
// Solid examples share exactly the same ellipsoids with collision detection.
export class JourneyClinicalLayer{
 constructor(asset,scene,camera){
  this.asset=asset;this.camera=camera;this.field=new ClinicalField(asset.field);this.root=new T.Group();scene.add(this.root);
  this.geometry=new T.SphereGeometry(1,24,16);this.materials=[];this.active=null;
  this.uniforms={journeyLesionCenter:{value:new T.Vector3()},journeyLesionRadius:{value:0},journeyLesionAmount:{value:0}};
  const uniforms=this.uniforms;
  asset.mesh.material.onBeforeCompile=shader=>{
   Object.assign(shader.uniforms,uniforms);
   shader.vertexShader='varying vec3 journeyWallPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\njourneyWallPosition=(modelMatrix*vec4(position,1.0)).xyz;');
   shader.fragmentShader='varying vec3 journeyWallPosition;\nuniform vec3 journeyLesionCenter;\nuniform float journeyLesionRadius;\nuniform float journeyLesionAmount;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    if(journeyLesionRadius>0.0){
     float d=length(journeyWallPosition-journeyLesionCenter)/journeyLesionRadius;
     float edge=1.0-smoothstep(0.72,1.0,d);
     float rim=smoothstep(0.38,0.57,d)*(1.0-smoothstep(0.66,0.86,d));
     vec3 wound=mix(vec3(0.29,0.047,0.043),vec3(0.72,0.51,0.27),rim);
     diffuseColor.rgb=mix(diffuseColor.rgb,wound,edge*journeyLesionAmount);
    }`);
  };
  asset.mesh.material.customProgramCacheKey=()=> 'journey-local-ulcer-v1';
 }
 anchor(part,radius){
  const camera=this.camera,forward=new T.Vector3(),right=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion),up=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);
  camera.getWorldDirection(forward);const ray=new T.Raycaster();ray.near=radius*2;ray.far=Math.min(.09,Math.max(.018,part.clearance*3.5));
  this.asset.mesh.updateMatrixWorld(true);
  for(const [x,y]of [[-.45,-.08],[.45,-.08],[0,-.42],[0,.42],[-.25,0],[.25,0],[0,0]]){
   const direction=forward.clone().addScaledVector(right,x).addScaledVector(up,y).normalize();ray.set(camera.position,direction);
   const hit=ray.intersectObject(this.asset.mesh,false)[0];if(!hit||hit.distance<radius*3)continue;
   const normal=hit.face.normal.clone().transformDirection(this.asset.mesh.matrixWorld);if(normal.dot(direction)>0)normal.negate();
   const sample=hit.point.clone().addScaledVector(normal,this.field.step*2).toArray();if(this.asset.field.region(sample)!==part.id)continue;
   const yAxis=new T.Vector3(0,1,0).addScaledVector(normal,-normal.y);if(yAxis.lengthSq()<.05)yAxis.copy(right).addScaledVector(normal,-right.dot(normal));yAxis.normalize();
   const xAxis=new T.Vector3().crossVectors(yAxis,normal).normalize();
   return {point:hit.point,axes:[xAxis,yAxis,normal],room:Math.min(part.clearance,hit.distance*.4)};
  }
  return null;
 }
 lumenAnchor(part,radius){
  const candidates=[];for(const path of this.asset.manifest.flowPaths||[])for(let i=1;i<path.points.length;i++){const a=path.points[i-1],b=path.points[i],direction=b.map((v,k)=>v-a[k]),count=Math.min(96,Math.max(1,Math.ceil(Math.hypot(...direction)/.0006)));for(let j=0;j<count;j++){const point=a.map((v,k)=>v+direction[k]*j/count);if(this.asset.field.region(point)===part.id)candidates.push({point,direction});}}
  candidates.push({point:part.position,direction:part.lookDirection||[0,1,0]});const eye=this.camera.position,forward=new T.Vector3();this.camera.getWorldDirection(forward);
  return candidates.filter(c=>this.asset.field.clearance(c.point)>.0002&&eye.distanceTo(new T.Vector3(...c.point))>Math.max(radius*5,.003)&&visibleThroughLumen(this.asset.field,eye.toArray(),c.point)).map(c=>({...c,distance:eye.distanceTo(new T.Vector3(...c.point)),front:new T.Vector3(...c.point).sub(eye).normalize().dot(forward)})).sort((a,b)=>(b.front>.2?1:0)-(a.front>.2?1:0)||a.distance-b.distance)[0]||null;
 }
 apply(example,amount,part,cameraRadius){
  if(!example){this.reset();return {ok:true};}
  if(example.placement==='lumen')return this.applyLumen(example,amount,part,cameraRadius);
  const anchor=this.active?.id===example.id&&this.active.part===part.id?this.active.anchor:this.anchor(part,cameraRadius);
  if(!anchor)return {ok:false,message:'이 구간의 벽을 조금 더 가까이 바라본 뒤 다시 선택해 주세요.'};
  const r=Math.min(.012,Math.max(.0011,anchor.room*.5))*(.5+.5*amount),shapes=[];
  const add=(offset,radii,color)=>{
   const center=anchor.point.clone();offset.forEach((v,i)=>center.addScaledVector(anchor.axes[i],v));
   shapes.push({center:center.toArray(),radii,axes:anchor.axes.map(a=>a.toArray()),color});
  };
  if(example.id==='plaque')add([0,0,r*.08],[r*1.25,r*1.65,r*.68],'#d9b56e');
  if(example.id==='thrombus'){
   add([0,0,r*.3],[r*.8,r*1.6,r*.85],'#8e4049');add([r*.3,-r*.65,r*.5],[r*.62,r*.8,r*.7],'#a75355');
  }
  if(example.id==='polyp'){
   add([0,0,r*.42],[r*.25,r*.25,r*.65],'#c67870');add([0,0,r*1.05],[r*.75,r*.72,r*.75],'#d69080');
  }
  if(example.id==='mucus'){
   add([0,0,r*.23],[r*1.1,r*1.3,r*.65],'#d2c590');add([r*.45,r*.7,r*.4],[r*.65,r*.75,r*.7],'#bcae75');
  }
  const previous=this.field.shapes,oldSurfaces=this.field.surfaces;this.field.shapes=shapes;this.field.surfaces=[];
  if(this.field.clearance(this.camera.position.toArray())<cameraRadius+.0002){this.field.shapes=previous;this.field.surfaces=oldSurfaces;return {ok:false,message:'현재 위치와 겹쳐서 적용하지 않았어요. 조금 뒤로 이동한 뒤 다시 시도해 주세요.'};}
  this.clearMeshes();oldSurfaces.forEach(s=>s.geometry.dispose());this.uniforms.journeyLesionRadius.value=0;
  for(const shape of shapes){
   const material=new T.MeshStandardMaterial({color:shape.color,roughness:.78,metalness:0});this.materials.push(material);
   const mesh=new T.Mesh(this.geometry,material);mesh.position.fromArray(shape.center);mesh.scale.fromArray(shape.radii);mesh.quaternion.setFromRotationMatrix(new T.Matrix4().makeBasis(...anchor.axes));this.root.add(mesh);
  }
  if(example.id==='ulcer'){
   this.uniforms.journeyLesionCenter.value.copy(anchor.point);this.uniforms.journeyLesionRadius.value=r*1.8;this.uniforms.journeyLesionAmount.value=.85;
  }
  this.field.revision++;this.active={id:example.id,part:part.id,amount,anchor,name:part.name};return {ok:true};
 }
 applyLumen(example,amount,part,cameraRadius){
  const anchor=this.active?.id===example.id&&this.active.part===part.id?this.active.anchor:this.lumenAnchor(part,cameraRadius);
  if(!anchor)return {ok:false,message:'병변을 관찰할 공간이 부족해요. 조금 이동하거나 크기를 줄여주세요.'};
  const shapes=[],surfaces=[];let surface;
  if(example.id==='aqueduct'){surface=aqueductSleeve(this.asset.field,anchor.point,anchor.direction,amount);if(!surface)return {ok:false,message:'이 위치에서는 원본 벽을 따라 협착을 배치할 수 없어요.'};surfaces.push(surface);}
  else{const r=this.asset.field.clearance(anchor.point)*(.3+.52*amount);shapes.push({center:[...anchor.point],radii:[r,r*.9,r*.95],axes:[[1,0,0],[0,1,0],[0,0,1]],color:example.id==='stone'?'#c9b49c':'#a58a39'});}
  const previousShapes=this.field.shapes,previousSurfaces=this.field.surfaces;this.field.shapes=shapes;this.field.surfaces=surfaces;
  if(this.field.clearance(this.camera.position.toArray())<cameraRadius+.0001){this.field.shapes=previousShapes;this.field.surfaces=previousSurfaces;surface?.geometry.dispose();return {ok:false,message:'현재 위치와 겹쳐 적용하지 않았어요. 조금 뒤로 이동해주세요.'};}
  this.clearMeshes();previousSurfaces.forEach(s=>s.geometry.dispose());this.uniforms.journeyLesionRadius.value=0;
  for(const s of shapes){const material=new T.MeshStandardMaterial({color:s.color,roughness:1});this.materials.push(material);const mesh=new T.Mesh(this.geometry,material);mesh.position.fromArray(s.center);mesh.scale.fromArray(s.radii);this.root.add(mesh);}
  if(surface){const material=new T.MeshStandardMaterial({color:'#a88e9e',side:T.DoubleSide,roughness:.85});this.materials.push(material);this.root.add(new T.Mesh(surface.geometry,material));}
  this.field.revision++;this.active={id:example.id,part:part.id,amount,anchor,name:part.name,position:[...anchor.point]};return {ok:true};
 }
 clearMeshes(){this.root.clear();this.materials.forEach(m=>m.dispose());this.materials=[];}
 reset(){this.clearMeshes();this.field.shapes=[];this.field.surfaces.forEach(s=>s.geometry.dispose());this.field.surfaces=[];this.field.revision++;this.uniforms.journeyLesionRadius.value=0;this.active=null;}
 dispose(){this.reset();this.geometry.dispose();this.root.removeFromParent();}
}
