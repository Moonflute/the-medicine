import fs from 'node:fs';import assert from 'node:assert/strict';
import {loadBodySystemDetail} from './src/body-system-detail.js';import {musculoskeletalIdentities} from './src/body-muscle-identities.js';
globalThis.window=globalThis;globalThis.document={baseURI:'http://atlas.local/'};globalThis.fetch=async url=>new Response(fs.readFileSync('static/'+String(url).replace(/^\.\//,'')));
await assert.rejects(loadBodySystemDetail({id:'missing-identity',file:'body-muscles-neck.glb.gz',count:47},{},''),/Unmapped source structure/);
await assert.rejects(loadBodySystemDetail({id:'wrong-count',file:'body-muscles-neck.glb.gz',count:46},musculoskeletalIdentities,''),/Incomplete body-system asset/);
await assert.rejects(loadBodySystemDetail({id:'duplicate',file:'body-skeleton.glb.gz',count:242},musculoskeletalIdentities,''),/Duplicate source structure/);
console.log('Missing identity, count mismatch and duplicate source assets are rejected instead of silently showing incomplete anatomy');
