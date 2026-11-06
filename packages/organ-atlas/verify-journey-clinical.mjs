import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {JourneyVolume,moveInLumen} from './src/journey/volume.js';
import {JourneyClinicalLayer} from './src/journey/clinical-layer.js';
import {clinicalExamples,structureLesson,connectedStructures,examplesFor,journeyModes,journeyStartGroups} from './src/journey/learning-data.js';

let lessons=0,placements=0;
for(const mode of journeyModes){
 const stem=new URL('./static/models/current/journey-'+mode.id,import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL(stem.href+'.json'))),raw=Uint8Array.from(gunzipSync(fs.readFileSync(new URL(stem.href+'-surface.bin.gz')))),n=manifest.vertices;
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(raw.buffer,0,n*3),3));geometry.setIndex(new T.BufferAttribute(new Uint32Array(raw.slice(n*27).buffer),1));geometry.computeBoundingSphere();
 const mesh=new T.Mesh(geometry,new T.MeshStandardMaterial({side:T.DoubleSide})),field=new JourneyVolume(manifest,Uint8Array.from(gunzipSync(fs.readFileSync(new URL(stem.href+'-volume.bin.gz'))))),asset={manifest,mesh,field},camera=new T.PerspectiveCamera(),scene=new T.Scene();scene.add(mesh);
 const layer=new JourneyClinicalLayer(asset,scene,camera);
 assert.deepEqual(journeyStartGroups(manifest).flatMap(g=>g.parts.map(p=>p.id)).sort((a,b)=>a-b),manifest.parts.map(p=>p.id),'grouped starts cover every source part exactly once');
 for(const part of manifest.parts){
  const lesson=structureLesson(manifest,part);assert(lesson.description&&lesson.query&&lesson.reference.startsWith('https://'));assert(connectedStructures(manifest,part.id).every(next=>manifest.parts.some(p=>p.id===next.id)));lessons++;
 }
 const cases=mode.id==='upper'?[[4,'ulcer'],[11,'polyp'],[8,'mucus']]:mode.id==='vessels'?[[9,'plaque'],[15,'plaque']]:[[2,'thrombus'],[6,'thrombus']];
 for(const [id,name]of cases){
  const part=manifest.parts.find(p=>p.id===id),example=clinicalExamples[name];assert(examplesFor(manifest,part).includes(example));camera.position.fromArray(part.position);let result;
  for(const direction of [[0,-1,0],[0,0,1],[1,0,0],[0,1,0],[0,0,-1],[-1,0,0]]){
   camera.lookAt(camera.position.clone().add(new T.Vector3(...direction)));camera.updateMatrixWorld();const pose=[...camera.position.toArray(),...camera.quaternion.toArray()];
   result=layer.apply(example,.65,part,.0004);assert.deepEqual([...camera.position.toArray(),...camera.quaternion.toArray()],pose,'selection must preserve camera');if(result.ok)break;
  }
  assert(result.ok,mode.id+' '+name+' can be placed on a visible source wall');
  if(example.solid){
   const shape=layer.field.shapes[0],center=new T.Vector3(...shape.center);assert(layer.field.clearance(shape.center)<0,'solid lesion occupies collision space');
   const move=moveInLumen(layer.field,camera.position.toArray(),center.sub(camera.position).multiplyScalar(3).toArray(),.0004);assert(layer.field.clearance(move.position)>=.0004-1e-9,'swept movement cannot enter lesion');
   const saved=[...camera.position.toArray(),...camera.quaternion.toArray()],old=layer.field.shapes;camera.position.fromArray(shape.center);
   assert(!layer.apply(example,1,part,.0004).ok,'growing lesion cannot enclose the camera');assert.equal(layer.field.shapes,old,'rejected change preserves previous collision');camera.position.fromArray(saved);
  }else assert.equal(layer.field.shapes.length,0,'surface-only ulcer must not claim a solid obstacle');
  layer.reset();assert.equal(layer.field.clearance(part.position),field.clearance(part.position),'normal view restores clearance');assert.equal(layer.uniforms.journeyLesionRadius.value,0);placements++;
 }
 layer.dispose();geometry.dispose();mesh.material.dispose();
}
console.log(JSON.stringify({lessons,clinicalPlacements:placements,cameraPreserved:true,solidCollision:true,normalRestored:true}));
