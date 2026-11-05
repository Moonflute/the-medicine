import * as T from 'three';
import {fetchModelResponse,fetchModelManifest} from '../local-model-store.js';
import {JourneyVolume} from './volume.js';
async function unpack(url){const response=await fetchModelResponse(url);if(!response.ok)throw Error('탐험 데이터를 불러오지 못했어요.');if(response.headers.get('X-Atlas-Decoded-Gzip')==='1'||response.headers.get('Content-Encoding')?.toLowerCase().includes('gzip'))return new Uint8Array(await response.arrayBuffer());if('DecompressionStream'in globalThis)return new Uint8Array(await new Response(response.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());const {gunzipSync}=await import('three/addons/libs/fflate.module.js');return gunzipSync(new Uint8Array(await response.arrayBuffer()));}
export async function loadJourney(key){
 if(!['upper','vessels'].includes(key))throw Error('Unknown exploration region');
 const response=await fetchModelManifest('./models/current/journey-'+key+'.json');if(!response.ok)throw Error('탐험 목록을 불러오지 못했어요.');const manifest=await response.json();
 const [surface,volume]=await Promise.all([unpack(manifest.surface),unpack(manifest.volume)]),n=manifest.vertices;
 if(surface.byteLength!==n*27+manifest.triangles*12)throw Error('Invalid exploration surface');
 const field=new JourneyVolume(manifest,volume);
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(surface.buffer,surface.byteOffset,n*3),3));geometry.setAttribute('normal',new T.BufferAttribute(new Float32Array(surface.buffer,surface.byteOffset+n*12,n*3),3));
 // Vertex colors are converted from display sRGB before lighting.
 const colors=new Float32Array(n*3),color=new T.Color();for(let i=0;i<n;i++){color.setRGB(surface[n*24+i*3]/255,surface[n*24+i*3+1]/255,surface[n*24+i*3+2]/255,T.SRGBColorSpace);color.toArray(colors,i*3);}geometry.setAttribute('color',new T.BufferAttribute(colors,3));
 const indices=surface.slice(n*27);geometry.setIndex(new T.BufferAttribute(new Uint32Array(indices.buffer),1));geometry.computeBoundingSphere();
 const material=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:.86,metalness:0});
 const mesh=new T.Mesh(geometry,material);mesh.updateMatrixWorld(true);
 return {manifest,mesh,field,dispose(){geometry.dispose();material.dispose();}};
}
