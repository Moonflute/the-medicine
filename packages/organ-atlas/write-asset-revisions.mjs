import fs from 'node:fs';
import {createHash} from 'node:crypto';
export function writeAssetRevisions(){
 const directory=new URL('./static/models/current/',import.meta.url),revisions={};
 for(const name of fs.readdirSync(directory).filter(name=>name.endsWith('.glb.gz')).sort()){
  const bytes=fs.readFileSync(new URL(name,directory));
  revisions['./models/current/'+name]={sha256:createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length};
 }
 fs.writeFileSync(new URL('./src/asset-revisions.js',import.meta.url),'// Generated from actual compressed assets by Vite configuration.\nexport const assetRevisions='+JSON.stringify(revisions,null,2)+';\n');
}
