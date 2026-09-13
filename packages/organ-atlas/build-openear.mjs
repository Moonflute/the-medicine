import {openearOntology} from './src/openear-ontology-mappings.js';
import fs from 'node:fs';import {gzipSync} from 'node:zlib';import * as T from 'three';import {PLYLoader} from 'three/addons/loaders/PLYLoader.js';import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';import crypto from 'node:crypto';
globalThis.FileReader=class{readAsArrayBuffer(b){b.arrayBuffer().then(r=>{this.result=r;this.onloadend?.()})}};
const sourceDir=process.argv[2];if(!sourceDir)throw Error('Usage: node build-openear.mjs SOURCE_DIR [--candidate]');
const definitions=[
 ['01_Scala Tympani.ply','Scala_tympani','Scala tympani','#b9a5c4'],
 ['02_Scala Vestibuli.ply','Scala_vestibuli','Scala vestibuli and vestibular labyrinth','#8eb7ad'],
 ['03_Malleus.ply','Malleus','Malleus','#dfc698'],
 ['04_Incus.ply','Incus','Incus','#d6b784'],
 ['05_Stapes.ply','Stapes','Stapes','#c9ae80'],
 ['06_Facial Nerve.ply','Facial_nerve','Facial nerve (CN VII)','#d9bd72'],
 ['07_Chorda Tympani.ply','Chorda_tympani','Chorda tympani','#e5d39c'],
 ['08_Cochleovestibular Nerve.ply','Vestibulocochlear_nerve','Vestibulocochlear nerve (CN VIII)','#dac789'],
 ['09_Tympanic Membrane.ply','Tympanic_membrane','Tympanic membrane','#b6ccca'],
 ['10_External Auditory Canal.ply','External_acoustic_meatus','External acoustic meatus','#c8aaa0'],
 ['11_Sinus Dura.ply','Dural_venous_sinus','Dural venous sinus','#92a8be'],
 ['12_Carotis Interna.ply','Internal_carotid_artery','Internal carotid artery','#c9887e'],
];
const group=new T.Group(),identities={},audit=[];
for(const [file,id,label,color]of definitions){const bytes=fs.readFileSync(sourceDir+'/'+file);const geometry=new PLYLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));geometry.computeVertexNormals();const mesh=new T.Mesh(geometry,new T.MeshStandardMaterial({color,roughness:.85}));mesh.name='OpenEar_ZETA_'+id;group.add(mesh);identities['ears/'+mesh.name]={organId:'ears',partId:mesh.name,ontologyLabel:label,ontologyId:null,...openearOntology(id),source:'https://doi.org/10.5281/zenodo.1473724',sourceMesh:file,mappingEvidence:openearOntology(id).mappingEvidence||'source-segmentation',review:{status:'not-expert-reviewed',issues:['Specimen ZETA; not a general population or microscopic anatomy model.']}};audit.push({file,partId:mesh.name,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),vertices:geometry.attributes.position.count,triangles:geometry.index.count/3})}
// A single rigid transform for all structures; no manual assembly or rescaling of individual parts.
// RAS coordinates -> viewer left/superior/anterior axes. The source is an excised specimen.
group.quaternion.setFromRotationMatrix(new T.Matrix4().makeBasis(new T.Vector3(-1,0,0),new T.Vector3(0,0,1),new T.Vector3(0,1,0)));group.scale.setScalar(.001);group.updateMatrixWorld(true);
const output=Buffer.from(await new GLTFExporter().parseAsync(group,{binary:true}));const restored=(await new GLTFLoader().parseAsync(output.buffer.slice(output.byteOffset,output.byteOffset+output.byteLength),'')).scene;restored.updateMatrixWorld(true);
for(const mesh of group.children){const other=restored.getObjectByName(mesh.name),a=mesh.geometry.attributes.position.array,b=other?.geometry.attributes.position.array;if(!b||a.length!==b.length||a.some((v,i)=>v!==b[i]))throw Error('Source vertex mismatch '+mesh.name);const x=new T.Box3().setFromObject(mesh),y=new T.Box3().setFromObject(other);if(x.min.distanceTo(y.min)>1e-7||x.max.distanceTo(y.max)>1e-7)throw Error('Placement mismatch '+mesh.name)}
const gz=gzipSync(output,{level:9});const candidate=process.argv.includes('--candidate');fs.writeFileSync(candidate?'../../tmp/atlas-qa/openear-candidate.glb.gz':'static/models/current/ears.glb.gz',gz);
if(!candidate){fs.writeFileSync('src/openear-identities.js','export const openearIdentities='+JSON.stringify(identities,null,2)+';\n');fs.writeFileSync('openear-source-audit.json',JSON.stringify({source:'https://doi.org/10.5281/zenodo.1473724',specimen:'ZETA',license:'CC-BY-4.0',sourceVerticesAndPlacementPreserved:true,gzipBytes:gz.length,structures:audit},null,2))}console.log({structures:audit.length,triangles:audit.reduce((s,m)=>s+m.triangles,0),gzipBytes:gz.length});
