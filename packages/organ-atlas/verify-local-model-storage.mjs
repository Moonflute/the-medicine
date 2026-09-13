import {chromium} from 'playwright';import path from 'node:path';import assert from 'node:assert/strict';
const browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),headless:true});
try{
 const page=await browser.newPage({viewport:{width:1200,height:850}});let blocked=false,modelRequests=0;const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://atlas.local/**',route=>{const u=new URL(route.request().url()).pathname;if(u.endsWith('.glb.gz')){modelRequests++;if(blocked)return route.abort();}return route.fulfill({path:path.resolve('../../apps/medicine-web/public/organ-atlas','.'+(u==='/'?'/index.html':u))});});
 await page.goto('https://atlas.local/?organ=heart');await page.waitForFunction(()=>window.organAtlas?.exportView()?.organId==='heart'||document.querySelector('#viewport')?.dataset.model==='heart');
 await page.locator('#settings-toggle').click();await page.locator('[data-local-save]').click();await page.locator('.local-model-controls output').filter({hasText:'저장 완료'}).waitFor({timeout:60000});
 const keys=await page.evaluate(async()=>(await(await caches.open('medicine-atlas-models-v1')).keys()).map(r=>r.url));assert.ok(keys.length>0);assert.ok(keys.every(k=>k.includes('atlas-sha256=')));
 const before=modelRequests;await page.locator('[data-local-save]').click();await page.locator('.local-model-controls output').filter({hasText:'저장 완료'}).waitFor();assert.equal(modelRequests,before);
 blocked=true;await page.reload();await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='heart');assert.equal(modelRequests,before);
 await page.locator('#settings-toggle').click();await page.locator('[data-local-clear]').click();await page.locator('.local-model-controls output').filter({hasText:'0.0 MB'}).waitFor();assert.equal(await page.evaluate(async()=>await caches.has('medicine-atlas-models-v1')?(await(await caches.open('medicine-atlas-models-v1')).keys()).length:0),0);
 blocked=false;await page.goto('https://atlas.local/?organ=skeleton');await page.locator('#viewport[data-model="skeleton"]').waitFor();await page.locator('#settings-toggle').click();await page.locator('#detail-model').selectOption('whole-source-body');await page.waitForFunction(()=>window.organAtlas.exportView()?.detailModel?.id==='whole-source-body');
 await page.locator('[data-local-save]').click();await page.locator('.local-model-controls output').filter({hasText:'저장 완료'}).waitFor({timeout:120000});
 const wholeKeys=await page.evaluate(async()=>(await(await caches.open('medicine-atlas-models-v1')).keys()).map(r=>r.url));assert.equal(wholeKeys.filter(u=>u.includes('z-whole')).length,7);
 const wholeBefore=modelRequests;blocked=true;
 for(const [layer,count] of [['muscles',1010],['arteries',1410],['veins',1622],['nerves',1875],['central-nerves',2123]]){await page.locator('[data-system-layer="'+layer+'"]').check();await page.waitForFunction(n=>document.querySelectorAll('#part-picker option').length===n+1,count,{timeout:60000});}
 assert.equal(modelRequests,wholeBefore);console.log('All six whole-body systems saved; five unloaded layers loaded from cache with model network blocked');
 assert.deepEqual(errors,[]);console.log('Real HTTPS UI: save, SHA versioned cache, duplicate save without requests, reload with model network blocked, scoped delete passed');
}finally{await browser.close();}
