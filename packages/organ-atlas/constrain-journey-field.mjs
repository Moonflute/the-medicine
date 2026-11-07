// Recheck an existing field after surface changes without revoxelising sources.
import fs from 'node:fs';
import {gunzipSync,gzipSync} from 'node:zlib';
import {JourneyVolume,packJourneyBricks} from './src/journey/volume.js';
import {constrainSurfaceClearance} from './journey-surface-clearance.mjs';
for(const key of process.argv.slice(2)){
 if(!/^(?:arm|leg)-(?:left|right)(?:-(?:artery|vein))?$|^(?:biliary|urinary)$/.test(key))throw Error('Expected new regional exploration key');
 const prefix='static/models/current/journey-'+key,m=JSON.parse(fs.readFileSync(prefix+'.json')),field=new JourneyVolume(m,gunzipSync(fs.readFileSync(prefix+'-volume.bin.gz')));m.surfaceClearance=constrainSurfaceClearance(field,gunzipSync(fs.readFileSync(prefix+'-surface.bin.gz')),m);fs.writeFileSync(prefix+'-volume.bin.gz',gzipSync(packJourneyBricks(field),{level:9}));fs.writeFileSync(prefix+'.json',JSON.stringify(m));console.log(key,m.surfaceClearance);
}
