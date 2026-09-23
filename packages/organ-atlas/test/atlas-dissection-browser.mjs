import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {chromium} from 'playwright';

const base=process.env.ATLAS_URL||'http://127.0.0.1:4191/';
const systemChrome=process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser=await chromium.launch({headless:true,...(existsSync(systemChrome)?{executablePath:systemChrome}:{})});
const page=await browser.newPage({viewport:{width:1366,height:850},deviceScaleFactor:1});
const errors=[];
const assertCameraStable=(actual,expected,message)=>{
 for(const key of ['position','target'])for(let index=0;index<3;index++)assert.ok(Math.abs(actual[key][index]-expected[key][index])<1e-9,message);
};
page.on('requestfailed',request=>errors.push(`${request.url()} · ${request.failure()?.errorText||'request failed'}`));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text())});
page.on('pageerror',error=>errors.push(error.message));

try{
 await page.goto(base+'?organ=heart',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='heart',{timeout:30000});
 await page.waitForTimeout(1200);
 const fullVisible=Number(await page.locator('#viewport').getAttribute('data-visible-parts'));
 const camera=await page.evaluate(()=>window.organAtlas.exportView().camera);
 const partIds=await page.locator('#part-picker option').evaluateAll(options=>options.map(option=>option.value).filter(Boolean).slice(0,2));
 assert.equal(partIds.length,2,'heart model needs at least two selectable structures');

 await page.click('#settings-toggle');
 await page.check('#multi-select-toggle');
 await page.click('#settings-close');
 await page.selectOption('#part-picker',partIds[0]);
 await page.waitForFunction(()=>window.organAtlas.exportView().selectedPartIds.length===1);
 await page.selectOption('#part-picker',partIds[1]);
 await page.waitForFunction(()=>window.organAtlas.exportView().selectedPartIds.length===2);
 const selected=await page.evaluate(()=>window.organAtlas.exportView());
 assert.deepEqual(selected.selectedPartIds,partIds);
 assertCameraStable(selected.camera,camera,'multi-select moved the camera');
 assert.equal(await page.locator('#selected-english').textContent(),'2 structures selected');

 await page.click('#settings-toggle');
 await page.click('#selection-context');
 await page.waitForFunction(total=>Number(document.querySelector('#viewport')?.dataset.visibleParts)===total,fullVisible);
 const beforeVisible=Number(await page.locator('#viewport').getAttribute('data-visible-parts'));
 await page.click('#selection-fade');
 await page.waitForFunction(()=>window.organAtlas.exportView().inspection.fadedParts.length===2);
 const faded=await page.evaluate(()=>window.organAtlas.exportView());
 assert.deepEqual(faded.inspection.fadedParts,partIds);
 assert.equal(faded.selectedPartIds.length,0);
 assert.equal(Number(await page.locator('#viewport').getAttribute('data-visible-parts')),beforeVisible,'fade removed geometry instead of desaturating it');
 assertCameraStable(faded.camera,camera,'fade moved the camera');

 await page.click('#selection-undo');
 await page.waitForFunction(()=>window.organAtlas.exportView().selectedPartIds.length===2);
 assert.deepEqual((await page.evaluate(()=>window.organAtlas.exportView())).inspection.fadedParts,[]);
 await page.click('#selection-hide');
 await page.waitForFunction(()=>window.organAtlas.exportView().inspection.hiddenParts.length===2);
 assert.ok(Number(await page.locator('#viewport').getAttribute('data-visible-parts'))<beforeVisible,'hide did not remove selected geometry');
 await page.click('#selection-undo');
 await page.waitForFunction(()=>window.organAtlas.exportView().selectedPartIds.length===2);
 await page.click('#selection-redo');
 await page.waitForFunction(()=>window.organAtlas.exportView().inspection.hiddenParts.length===2);
 await page.click('#selection-clear');
 await page.waitForFunction(()=>{const q=window.organAtlas.exportView().inspection;return !q.hiddenParts.length&&!q.fadedParts.length});
 assertCameraStable((await page.evaluate(()=>window.organAtlas.exportView())).camera,camera,'dissection history moved the camera');

 const materialErrors=errors.filter(error=>!error.includes('fonts.googleapis.com')&&error!=='Failed to load resource: net::ERR_NETWORK_ACCESS_DENIED');
 assert.equal(materialErrors.length,0,materialErrors.join('\n'));
 console.log(JSON.stringify({selected:2,fadeOpaque:true,hideUndoRedo:true,cameraStable:true},null,2));
}finally{
 await browser.close();
}
