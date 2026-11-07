import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshBVH} from 'three-mesh-bvh';
import {JourneyVolume} from './src/journey/volume.js';

const directory=new URL('./static/models/current/',import.meta.url),read=name=>fs.readFileSync(new URL(name,directory));
const manifest=JSON.parse(read('journey-circulation.json')),n=manifest.vertices,bytes=Uint8Array.from(gunzipSync(read('journey-circulation-surface.bin.gz')));
const positions=new Float32Array(bytes.buffer,0,n*3),colors=bytes.subarray(n*24,n*27),indices=new Uint32Array(bytes.slice(n*27).buffer);
const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));geometry.setIndex(new T.BufferAttribute(indices,1));
const tree=new MeshBVH(geometry,{indirect:true}),parent=Int32Array.from({length:n},(_,i)=>i);
const root=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};
for(let i=0;i<indices.length;i+=3){parent[root(indices[i+1])]=root(indices[i]);parent[root(indices[i+2])]=root(indices[i]);}
const palette=new Map();for(const part of manifest.parts){const key=part.color.toLowerCase();if(palette.has(key))assert.equal(palette.get(key),part.circuit);palette.set(key,part.circuit);}
const circuits=new Map(),sizes=new Map();
for(let i=0;i<n;i++){
 const key='#'+[...colors.subarray(i*3,i*3+3)].map(v=>v.toString(16).padStart(2,'0')).join(''),circuit=palette.get(key),component=root(i);
 assert(circuit,'surface color must belong to a reviewed anatomical part');
 if(circuits.has(component))assert.equal(circuits.get(component),circuit,'render smoothing must never join opposite blood spaces');
 circuits.set(component,circuit);sizes.set(component,(sizes.get(component)||0)+1);
}
const principal=[...sizes].filter(([,count])=>count>n*.05);assert.equal(principal.length,2);assert.equal(new Set(principal.map(([id])=>circuits.get(id))).size,2);

// Fixed rays through the reported striped wall, including the thin wall next
// to the right pulmonary artery. Compare with the unchanged original atrium.
const source=gunzipSync(read('z-whole-organs.glb.gz')),scene=(await new GLTFLoader().parseAsync(source.buffer.slice(source.byteOffset,source.byteOffset+source.length),'')).scene;
scene.updateMatrixWorld(true);const mesh=scene.getObjectByName(manifest.parts.find(p=>p.name==='Right atrium').sourceId),original=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld),sourceTree=new MeshBVH(original,{indirect:true});
const origin=new T.Vector3(-.0156,1.3152,.018),directions=[
 [.9755049685770814,.219970703125,-.0017164055816020149],
 [.13971209062942447,.8796694199637481,-.45460119149931694],
 [.07235353055274177,.8743296364391899,-.4799090053965099],
 [.16421636374928678,.9021098616812134,-.3990373207288558]
],errors=[];
for(const direction of directions){
 const ray=new T.Ray(origin,new T.Vector3(...direction).normalize()),reference=sourceTree.raycastFirst(ray,T.DoubleSide),actual=tree.raycastFirst(ray,T.DoubleSide);
 assert(reference&&actual);const error=(actual.distance-reference.distance)*1000;errors.push(error);
 assert(Math.abs(error)<manifest.spacing*4000,`source-backed wall exceeds the four-voxel reconstruction allowance: ${error} mm`);
}
const field=new JourneyVolume(manifest,gunzipSync(read('journey-circulation-volume.bin.gz'))),camera=new T.PerspectiveCamera(86,1000/800,.00006,1.4),caster=new T.Raycaster(),point=new T.Vector3();
camera.position.copy(origin);camera.lookAt(origin.clone().add(new T.Vector3(-.2,.85,-.4)));camera.updateMatrixWorld();
let thinWallRays=0;
for(let x=580;x<=710;x+=5)for(let y=300;y<=400;y+=5){
 caster.setFromCamera(new T.Vector2(x/1000*2-1,1-y/800*2),camera);
 for(let distance=.012;distance<.045;distance+=.0001){
  const id=field.region(caster.ray.at(distance,point).toArray());if(!id||id===1)continue;
  if(id===6){const hit=tree.raycastFirst(caster.ray,T.DoubleSide);assert(hit&&hit.distance<distance+.0001,'thin atrial wall must hide the pulmonary artery behind it');thinWallRays++;}
  break;
 }
}
assert(thinWallRays>50,'the regression must cover the thin-wall area, not just the open caval ostium');
geometry.dispose();original.dispose();scene.traverse(item=>{item.geometry?.dispose();if(Array.isArray(item.material))item.material.forEach(material=>material.dispose());else item.material?.dispose();});
console.log(JSON.stringify({separateRenderCircuits:2,atrialWallRegressionRays:directions.length,thinWallRays,sourceWallErrorMm:errors.map(v=>Math.round(v*1000)/1000),triangles:manifest.triangles}));
