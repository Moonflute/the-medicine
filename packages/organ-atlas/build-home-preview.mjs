import fs from 'node:fs/promises';
import {gzipSync,gunzipSync} from 'node:zlib';
import {NodeIO} from '@gltf-transform/core';
import {EXTMeshoptCompression} from '@gltf-transform/extensions';
import {prune,simplifyPrimitive} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier} from 'meshoptimizer';
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions([EXTMeshoptCompression]).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const doc=await io.readBinary(gunzipSync(await fs.readFile('static/models/current/heart-light.glb.gz')));
for(const node of doc.getRoot().listNodes())if(/inferior_vena_cava|abdominal|descending_aorta|iliac|renal|celiac|mesenteric/.test(node.getName()))node.setMesh(null);
await doc.transform(prune());let before=0,after=0;
for(const mesh of doc.getRoot().listMeshes())for(const p of mesh.listPrimitives()){const n=p.getIndices()?.getCount()||p.getAttribute('POSITION').getCount();before+=n/3;if(n>3000)simplifyPrimitive(p,{simplifier:MeshoptSimplifier,ratio:.3,error:.003,lockBorder:true});after+=(p.getIndices()?.getCount()||p.getAttribute('POSITION').getCount())/3;}
doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({method:EXTMeshoptCompression.EncoderMethod.QUANTIZE});
const bytes=await io.writeBinary(doc),gzip=gzipSync(bytes,{level:9});await fs.writeFile('static/models/current/heart-preview.glb.gz',gzip);
const report={beforeTriangles:before,afterTriangles:after,gzipBytes:gzip.length,scope:'Home thumbnail only. Full atlas anatomy assets unchanged.'};await fs.writeFile('home-preview-optimization.json',JSON.stringify(report,null,2));console.log(report);
