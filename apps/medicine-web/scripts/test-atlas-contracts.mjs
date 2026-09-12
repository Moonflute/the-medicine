import assert from 'node:assert/strict';
import fs from 'node:fs';
import {organs} from '../../../packages/organ-atlas/src/data.js';
import {organIcons} from '../../../packages/organ-atlas/src/organ-icons.js';
import {modelSources} from '../../../packages/organ-atlas/src/model-sources.js';
import {lightModels} from '../../../packages/organ-atlas/src/light-model-manifest.js';
import {pathology} from '../../../packages/organ-atlas/src/pathology.js';
import {diseaseMappings} from '../../../packages/organ-atlas/src/disease-mappings.js';
const root=new URL('../../../packages/organ-atlas/static/',import.meta.url);
const diseases=JSON.parse(fs.readFileSync(new URL('../../../_webapp/data/diseases.json',import.meta.url),'utf8'));
for(const organ of organs){assert(organIcons[organ.id],organ.id+' icon');for(const asset of [modelSources[organ.id],lightModels[organ.id]].filter(Boolean)){assert(asset.url.startsWith('./models/'));assert(asset.url.endsWith('.glb.gz'));assert(fs.statSync(new URL(asset.url,root)).size>0,asset.url);}}
for(const m of diseaseMappings){assert(diseases.some(d=>d.id===m.diseaseId&&d.slug===m.diseaseSlug));assert(pathology[m.organId].some(s=>s.id===m.scenarioId));}
assert.equal(organs.length,29);assert.equal(diseaseMappings.length,10);
console.log('Atlas contracts passed: 29 organs, icons and both quality assets; 10 exact disease/scenario links.');

assert(fs.statSync(new URL('models/current/heart-preview.glb.gz',root)).size < 800000, 'Home preview transfer budget');
