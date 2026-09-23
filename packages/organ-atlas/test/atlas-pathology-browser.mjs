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
 await page.goto(base+'?organ=liver',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='liver',{timeout:30000});
 await page.click('[data-panel-tab="pathology"]');
 await page.selectOption('#pathology-picker','steatosis');
 await page.waitForFunction(()=>window.organAtlas?.exportView?.()?.scenarioStates?.liver?.id==='steatosis');
 assert.equal(await page.locator('#pathology-stages input').count(),4);
 assert.equal(await page.locator('#pathology-stages input[value="established"]').isChecked(),true);
 const established=await page.evaluate(()=>window.organAtlas.exportView());
 assert.equal(established.scenarioStates.liver.stageId,'established');
 assert.equal(established.scenarioStates.liver.intensity,.68);
 const camera=established.camera;

 await page.check('#pathology-stages input[value="advanced"]');
 await page.waitForFunction(()=>window.organAtlas.exportView().scenarioStates.liver.stageId==='advanced');
 const advanced=await page.evaluate(()=>window.organAtlas.exportView());
 assert.equal(advanced.scenarioStates.liver.intensity,1);
 assertCameraStable(advanced.camera,camera,'changing a pathology stage moved the camera');
 assert.match(await page.locator('.scenario-description').textContent(),/최대/);

 await page.check('#pathology-stages input[value="normal"]');
 await page.waitForFunction(()=>window.organAtlas.exportView().scenarioStates.liver.stageId==='normal');
 const normal=await page.evaluate(()=>window.organAtlas.exportView());
 assert.equal(normal.scenarioStates.liver.intensity,0);
 assertCameraStable(normal.camera,camera,'returning to the normal stage moved the camera');
 assert.match(await page.locator('.pathology-stage-caveat').textContent(),/임상|등급/);

 const materialErrors=errors.filter(error=>!error.includes('fonts.googleapis.com')&&error!=='Failed to load resource: net::ERR_NETWORK_ACCESS_DENIED');
 assert.equal(materialErrors.length,0,materialErrors.join('\n'));
 console.log(JSON.stringify({scenario:'steatosis',stages:4,cameraStable:true},null,2));
}finally{
 await browser.close();
}
