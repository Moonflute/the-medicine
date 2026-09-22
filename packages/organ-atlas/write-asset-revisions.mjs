import fs from 'node:fs';
import {createHash} from 'node:crypto';
export function writeAssetRevisions(){
 const revisions={};
 const add=(url,key)=>{const bytes=fs.readFileSync(url);revisions[key]={sha256:createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length};};
 const models=new URL('./static/models/current/',import.meta.url);
 for(const name of fs.readdirSync(models).filter(name=>name.endsWith('.glb.gz')).sort())add(new URL(name,models),'./models/current/'+name);
 const imaging=new URL('./static/imaging/',import.meta.url);
 if(fs.existsSync(imaging)){
  const visit=(directory,prefix)=>{for(const entry of fs.readdirSync(directory,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){const url=new URL(entry.name+(entry.isDirectory()?'/':''),directory),key=prefix+entry.name;if(entry.isDirectory())visit(url,key+'/');else if(/\.(?:nrrd|json)$/.test(entry.name)||entry.name.endsWith('.glb.gz'))add(url,'./imaging/'+key);}};
  visit(imaging,'');
 }
 fs.writeFileSync(new URL('./src/asset-revisions.js',import.meta.url),'// Generated from actual compressed assets by Vite configuration.\nexport const assetRevisions='+JSON.stringify(revisions,null,2)+';\n');
}
