import {createBodyLayerAssembly} from './body-layer-assembly.js';
import {fetchModelManifest} from './local-model-store.js';
export async function loadWholeBodyDetail({scope}={}){
 const response=await fetchModelManifest('./models/current/z-whole-manifest.json');
 if(!response.ok)throw Error('Whole-body manifest request failed');
 const manifest=await response.json(),assembly=createBodyLayerAssembly(manifest);
 try{for(const layer of scope?assembly.scopeLayers(scope.mode,scope.value):['skeleton'])await assembly.setVisible(layer,true);return assembly.root;}
 catch(error){assembly.dispose();throw error;}
}
