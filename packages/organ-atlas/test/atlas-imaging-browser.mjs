import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {chromium} from 'playwright';

const base=process.env.ATLAS_URL||'http://127.0.0.1:4191/';
const systemChrome=process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser=await chromium.launch({headless:true,...(existsSync(systemChrome)?{executablePath:systemChrome}:{})});
const page=await browser.newPage({viewport:{width:1366,height:850},deviceScaleFactor:1});
const requests=[];const errors=[];
page.on('request',request=>requests.push(request.url()));
page.on('requestfailed',request=>errors.push(`${request.url()} · ${request.failure()?.errorText||'request failed'}`));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text())});
page.on('pageerror',error=>errors.push(error.message));

try{
 await page.goto(base+'?organ=liver',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='liver'&&!document.querySelector('#fallback')?.hidden===false,{timeout:30000}).catch(()=>page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='liver',{timeout:30000}));
 assert.equal(requests.some(url=>url.includes('/imaging/spl-abdomen/')),false,'normal liver view eagerly requested imaging assets');

 await page.click('#settings-toggle');
 await page.selectOption('#detail-model','spl-abdomen-ct');
 await page.waitForFunction(()=>window.organAtlas?.exportView?.()?.detailModel?.id==='spl-abdomen-ct',{timeout:60000});
 const view=await page.evaluate(()=>window.organAtlas.exportView());
 assert.equal(view.detailModel.kind,'linked-imaging');
 assert.equal(view.imaging.plane,'axial');
 assert.equal(view.modelReferences.length,4);
 for(const file of ['spl-abdomen-manifest.json','I.nrrd','seg.nrrd','spl-abdomen-core.glb.gz'])assert.ok(requests.some(url=>url.endsWith('/'+file)),`missing lazy request for ${file}`);
 assert.equal(await page.locator('#settings-imaging').isVisible(),true);
 assert.equal(await page.locator('#explode-view').locator('..').isVisible(),false,'explode control must be absent in registered imaging mode');
 if(process.env.ATLAS_OVERVIEW_SCREENSHOT){await page.click('#settings-close');await page.waitForTimeout(350);await page.screenshot({path:process.env.ATLAS_OVERVIEW_SCREENSHOT,fullPage:true});await page.click('#settings-toggle');}

 const manifest=await page.evaluate(async()=>fetch('./imaging/spl-abdomen/spl-abdomen-manifest.json').then(response=>response.json()));
 assert.deepEqual(manifest.volume.ct.dimensions,[256,256,113]);
 assert.deepEqual(manifest.volume.ct.ijkToRas,manifest.volume.seg.ijkToRas);
 assert.ok(manifest.segmentation.unmappedLabelValues.includes(699));
 assert.equal(manifest.labelMap.some(label=>label.labelValue===699),false);

 const saveButton=page.locator('[data-local-save]');
 assert.equal(await saveButton.isDisabled(),false,'localhost should support per-device model storage');
 await saveButton.click();
 await page.waitForFunction(()=>document.querySelector('.local-model-controls output')?.textContent.includes('저장 완료'),{timeout:60000});
 assert.match(await page.locator('.local-model-controls output').textContent(),/1[23]\.[0-9] MB/,'linked imaging save plan did not include every asset');
 await page.click('[data-local-clear]');
 await page.waitForFunction(()=>document.querySelector('.local-model-controls output')?.textContent.includes('0.0 MB'));

 await page.waitForTimeout(1200);
 const cameraBefore=await page.evaluate(()=>window.organAtlas.exportView().camera);
 await page.check('input[name="imaging-plane"][value="coronal"]');
 await page.waitForFunction(()=>window.organAtlas.exportView().imaging.plane==='coronal');
 assert.deepEqual(await page.evaluate(()=>window.organAtlas.exportView().camera),cameraBefore,'changing image plane moved the camera');
 await page.locator('#imaging-slice').evaluate(element=>{element.value='90';element.dispatchEvent(new Event('input',{bubbles:true}))});
 await page.waitForFunction(()=>window.organAtlas.exportView().imaging.index===90);
 await page.uncheck('#imaging-overlay');
 assert.equal((await page.evaluate(()=>window.organAtlas.exportView())).imaging.overlay,false);

 await page.selectOption('#part-picker','spl-abdomen-label-3');
 await page.waitForFunction(()=>window.organAtlas.exportView().selectedPartId==='spl-abdomen-label-3');
 const selected=await page.evaluate(()=>window.organAtlas.exportView());
 assert.equal(selected.selectedDetailStructure.englishLabel,'Liver');
 assert.notEqual(selected.imaging.index,90,'selecting a segmented organ did not move the registered CT slice');
 assert.deepEqual(selected.camera,cameraBefore,'selecting a registered surface moved the camera');
 if(process.env.ATLAS_SCREENSHOT)await page.screenshot({path:process.env.ATLAS_SCREENSHOT,fullPage:true});

 await page.setViewportSize({width:390,height:844});
 await page.waitForTimeout(100);
 const overflow=await page.locator('#settings-sheet').evaluate(element=>element.scrollWidth-element.clientWidth);
 assert.ok(overflow<=1,`mobile settings overflow by ${overflow}px`);
 const materialErrors=errors.filter(error=>!error.includes('fonts.googleapis.com')&&error!=='Failed to load resource: net::ERR_NETWORK_ACCESS_DENIED');
 assert.equal(materialErrors.length,0,materialErrors.join('\n'));
 console.log(JSON.stringify({lazyRequests:requests.filter(url=>url.includes('/imaging/spl-abdomen/')).length,dimensions:manifest.volume.ct.dimensions,unknownLabel699:'transparent',cameraStable:true,mobileOverflow:overflow},null,2));
}finally{
 await browser.close();
}
