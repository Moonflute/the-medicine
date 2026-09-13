import {createBodyLayerAssembly} from './body-layer-assembly.js';
import {fetchModelManifest} from './local-model-store.js';
export async function loadWholeBodyDetail(){
 const response=await fetchModelManifest('./models/current/z-whole-manifest.json');
 if(!response.ok)throw Error('Whole-body manifest request failed');
 const manifest=await response.json(),assembly=createBodyLayerAssembly(manifest);
 try{await assembly.setVisible('skeleton',true);return assembly.root;}
 catch(error){assembly.dispose();throw error;}
}
