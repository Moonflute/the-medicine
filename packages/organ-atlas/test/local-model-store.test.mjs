import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {assetRevisions} from '../src/asset-revisions.js';
import {sourceOnlyModels} from '../source-only-models.mjs';

globalThis.document={baseURI:'https://atlas.test/organ-atlas/index.html'};
globalThis.location=new URL(document.baseURI);
globalThis.isSecureContext=true;
const {allModelSavePlan,modelSavePlan,saveModels,storedModelBytes}=await import('../src/local-model-store.js');

function memoryCaches(){
 const stores=new Map();
 return {
  open:async name=>{
   if(!stores.has(name))stores.set(name,new Map());
   const entries=stores.get(name);
   return {
    match:async key=>entries.get(String(key))?.clone(),
    put:async(key,response)=>{entries.set(String(key),response.clone());},
    keys:async()=>[...entries.keys()].map(url=>new Request(url)),
    delete:async request=>entries.delete(request.url)
   };
  },
  delete:async name=>stores.delete(name)
 };
}

test('complete plan covers shipped anatomy, full-body manifest, and linked CT without source-only files',()=>{
 const plan=allModelSavePlan();
 assert.equal(plan.urls.length,Object.keys(assetRevisions).length);
 assert.equal(new Set(plan.urls).size,plan.urls.length);
 assert.equal(plan.bytes,Object.values(assetRevisions).reduce((sum,item)=>sum+item.bytes,0));
 assert.ok(plan.urls.includes('./models/current/heart-light.glb.gz'));
 assert.ok(plan.urls.includes('./models/current/heart.glb.gz'));
 assert.ok(plan.urls.includes('./models/current/z-whole-manifest.json'));
 assert.ok(plan.urls.includes('./imaging/spl-abdomen/I.nrrd'));
 for(const filename of sourceOnlyModels)assert.ok(!plan.urls.includes('./models/current/'+filename),filename);
});

test('current-model plan stays limited to its selected rendering asset',async()=>{
 const url='./models/current/heart-light.glb.gz';
 assert.deepEqual(await modelSavePlan({modelReferences:[{renderingAsset:url},{renderingAsset:url}]}),{urls:[url],bytes:assetRevisions[url].bytes});
});

test('parallel save verifies actual files and retry reuses Cache Storage',async()=>{
 globalThis.caches=memoryCaches();
 const urls=['./models/current/adrenals-light.glb.gz','./models/current/heart-preview.glb.gz'];
 const plan={urls,bytes:urls.reduce((sum,url)=>sum+assetRevisions[url].bytes,0)};
 const originalFetch=globalThis.fetch;
 let requests=0;
 globalThis.fetch=async url=>{
  requests++;
  const name=new URL(url,document.baseURI).pathname.split('/').at(-1);
  return new Response(await readFile(new URL('../static/models/current/'+name,import.meta.url)),{status:200});
 };
 try{
  const first=await saveModels(plan,{concurrency:3});
  assert.equal(first.completed,2);
  assert.equal(first.downloadedBytes,plan.bytes);
  assert.equal(requests,2);
  assert.equal(await storedModelBytes(),plan.bytes);
  const repeat=await saveModels(plan,{concurrency:3});
  assert.equal(repeat.cached,2);
  assert.equal(repeat.downloadedBytes,0);
  assert.equal(requests,2);
 }finally{globalThis.fetch=originalFetch;delete globalThis.caches;}
});
