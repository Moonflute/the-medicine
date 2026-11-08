import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {JourneyVolume,moveInLumen} from './src/journey/volume.js';
import {JourneyClinicalLayer} from './src/journey/clinical-layer.js';
import {JourneyAnatomyFocus,JourneyNativeDetails} from './src/journey/anatomy.js';
import {clinicalExamples,examplesFor,journeyModes} from './src/journey/learning-data.js';
import {JourneyNetwork} from './src/journey/network.js';
import {studyTours,relatedRegions} from './src/journey/study-tours.js';
import {cardiacPhase,flowActivity} from './src/journey/physiology.js';
import {createBrainAsset} from './src/journey/brain-field.js';
import {destinationPose} from './src/journey/destinations.js';
const dir=new URL('./static/models/current/',import.meta.url),read=f=>fs.readFileSync(new URL(f,dir));
const manifests=journeyModes.map(m=>JSON.parse(read('journey-'+m.id+'.json')));
function load(key){const manifest=manifests.find(m=>m.key===key),raw=Uint8Array.from(gunzipSync(read('journey-'+key+'-surface.bin.gz'))),n=manifest.vertices,geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(raw.buffer,0,n*3),3));geometry.setIndex(new T.BufferAttribute(new Uint32Array(raw.slice(n*27).buffer),1));geometry.computeVertexNormals();if(key==='brain')return createBrainAsset(manifest,geometry);const field=new JourneyVolume(manifest,gunzipSync(read('journey-'+key+'-volume.bin.gz'))),mesh=new T.Mesh(geometry,new T.MeshStandardMaterial({side:T.DoubleSide}));return {manifest,field,mesh,dispose(){geometry.dispose();mesh.material.dispose();}};}
const network=new JourneyNetwork(manifests,{includeTransfers:false});assert(network.path('biliary',1,'duodenum',2));assert.equal(network.path('upper',5,'duodenum',2),null,'different specimens never become a physical tunnel');assert.equal(network.path('brain',53,'brain-csf',1),null,'brain tissue remains solid');
assert(relatedRegions(manifests.find(m=>m.key==='upper'),{id:5})[0].label.includes('표본 전환'));
const tours=studyTours(manifests);assert.equal(tours.length,3);assert(tours.every(t=>t.steps.length>=3));
let samples=0;for(let seconds=0;seconds<1.6;seconds+=.001){const p=cardiacPhase(seconds);assert(!(p.av&&p.sl),'AV and semilunar phases cannot both open');samples++;}
assert(flowActivity({}, {kind:'airway'},1).speed>0);assert(flowActivity({}, {kind:'airway'},3).speed<0);
const cardiac=load('circulation'),scene=new T.Scene(),camera=new T.PerspectiveCamera();scene.add(cardiac.mesh);camera.position.fromArray(cardiac.manifest.parts[0].position);camera.updateMatrixWorld();
const before=camera.position.toArray(),focus=new JourneyAnatomyFocus(cardiac);for(const f of cardiac.manifest.surfaceFeatures.features){assert.equal(focus.select(f.sourceId).id,f.id);assert(f.vertices>0);}assert.deepEqual(camera.position.toArray(),before);assert.equal(cardiac.mesh.material.transparent,false);
const details=new JourneyNativeDetails(cardiac,scene,{load:async url=>gunzipSync(read(url.split('/').at(-1)))});assert((await details.setEnabled(true,before,.0001)).ok);assert.equal(details.records.length,6);const positions=details.mesh.geometry.attributes.position,point=new T.Vector3().fromBufferAttribute(positions,0).toArray();assert(details.field.clearance(point)<0,'original leaflet is collidable');assert(!(await details.setEnabled(true,point,.0001)).ok,'enabling may not enclose the camera');await details.setEnabled(false);assert.equal(details.field.clearance(before),cardiac.field.clearance(before));details.dispose();cardiac.dispose();
let placements=0;
for(const [key,name,example]of [['urinary','Right ureter','stone'],['biliary','Common bile duct','gallstone'],['brain-csf','Cerebral aqueduct','aqueduct']]){
 const asset=load(key),part=asset.manifest.parts.find(p=>p.name===name),world=new T.Scene(),eye=new T.PerspectiveCamera(),layer=new JourneyClinicalLayer(asset,world,eye);world.add(asset.mesh);assert(examplesFor(asset.manifest,part).includes(clinicalExamples[example]));
 const candidates=[part.position,...asset.manifest.flowPaths.flatMap(p=>p.points).filter(p=>asset.field.region(p)===part.id&&asset.field.clearance(p)>.00015)];let result;
 for(const position of candidates){eye.position.fromArray(position);eye.lookAt(new T.Vector3(...part.position).add(new T.Vector3(.001,0,0)));eye.updateMatrixWorld();const pose=[...eye.position.toArray(),...eye.quaternion.toArray()];result=layer.apply(clinicalExamples[example],.65,part,.0001);assert.deepEqual([...eye.position.toArray(),...eye.quaternion.toArray()],pose);if(result.ok)break;}
 assert(result?.ok,key+' example must be placeable at a reviewed interior start');const active=layer.active,solid=layer.field.shapes[0],surface=layer.field.surfaces[0];
 if(solid){assert(layer.field.clearance(solid.center)<0);const delta=solid.center.map((v,i)=>(v-eye.position.getComponent(i))*2),move=moveInLumen(layer.field,eye.position.toArray(),delta,.0001);assert(layer.field.clearance(move.position)>=.0001-1e-9);}
 if(surface){assert(layer.field.clearance(active.position)<asset.field.clearance(active.position),'stenosis reduces the actual navigable aqueduct');const p=surface.geometry.attributes.position;for(let i=0;i<p.count;i+=7){const point=new T.Vector3().fromBufferAttribute(p,i).toArray();assert(surface.distance(point)<=.00005,'visible sleeve and collision agree');}}
 layer.reset();assert.equal(layer.field.clearance(part.position),asset.field.clearance(part.position));assert.equal(layer.field.surfaces.length,0);layer.dispose();asset.dispose();placements++;
}
const brain=load('brain'),pose=destinationPose(brain,53,.0004);brain.field.setMode(pose.mode,pose.side);assert(brain.field.setExposure(true,pose.position,pose.radius));assert(brain.mesh.children.filter(m=>m.visible).every(m=>m.userData.layer==='deep'));assert(brain.field.clearance(pose.position)>=pose.radius);assert(brain.field.setExposure(false,pose.position,pose.radius));brain.dispose();
console.log(JSON.stringify({sameSpecimenDuodenalConnection:true,observationTours:tours.length,cardiacPhaseSamples:samples,nativeLeaflets:6,solidClinicalExamples:placements,cameraPreserved:true,brainExposure:true}));
