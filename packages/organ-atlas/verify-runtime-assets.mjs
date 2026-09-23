import {zNeuralRegions} from './src/z-neural-catalog.js';
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {sourceOnlyModels} from './source-only-models.mjs';import {muscleRegions} from './src/body-muscle-catalog.js';import {vesselRegions} from './src/body-vessel-catalog.js';import {nerveRegions} from './src/body-nerve-catalog.js';import {combinedRegions} from './src/body-combined-catalog.js';
const out=path.resolve('../../apps/medicine-web/public/organ-atlas/models/current');const runtime=new Set(['body-skeleton.glb.gz','body-skeleton-light.glb.gz',...[...muscleRegions,...vesselRegions,...nerveRegions,...combinedRegions,...zNeuralRegions].flatMap(r=>r.files||[r.file])]);
for(const file of runtime){assert.ok(fs.existsSync(path.join(out,file)),'Missing runtime model '+file);assert.ok(!sourceOnlyModels.includes(file),'Runtime references source-only model '+file);assert.equal(fs.statSync(path.join(out,file)).size,fs.statSync('static/models/current/'+file).size);}
for(const file of sourceOnlyModels){assert.ok(fs.existsSync('static/models/current/'+file),'Local source removed');assert.ok(!fs.existsSync(path.join(out,file)),'Source-only model published');}
console.log(runtime.size,'runtime body models retained;',sourceOnlyModels.length,'source-only models preserved locally and omitted from distribution');
