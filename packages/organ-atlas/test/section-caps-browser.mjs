import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {chromium} from 'playwright';

const base=process.env.ATLAS_URL||'http://127.0.0.1:4191/';
const systemChrome=process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser=await chromium.launch({headless:true,...(existsSync(systemChrome)?{executablePath:systemChrome}:{})});
const page=await browser.newPage({viewport:{width:1366,height:850},deviceScaleFactor:1});
const errors=[];
page.on('requestfailed',request=>errors.push(`${request.url()} · ${request.failure()?.errorText||'request failed'}`));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text())});
page.on('pageerror',error=>errors.push(error.message));

try{
 await page.goto(base+'?organ=liver',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='liver',{timeout:30000});
 assert.equal(await page.locator('#viewport canvas').evaluate(canvas=>canvas.getContext('webgl2')?.getContextAttributes()?.stencil),true,'section capping requires a stencil buffer');
 await page.click('#settings-toggle');
 await page.waitForSelector('#slice-toggle');
 await page.waitForTimeout(1200);
 const baselineDrawCalls=Number(await page.locator('#viewport').getAttribute('data-draw-calls'));
 const camera=await page.evaluate(()=>window.organAtlas.exportView().camera);
 await page.check('#slice-toggle');
 await page.waitForFunction(()=>Number(document.querySelector('#viewport')?.dataset.sectionCapVisible)>0,{timeout:30000});
 const capParts=((await page.locator('#viewport').getAttribute('data-section-cap-parts'))||'').split('|').filter(Boolean);
 assert.ok(capParts.includes('VH_M_liver_capsule'),'the known closed liver capsule was not the capped primary-organ surface');
 const directions=[];
 for(const plane of ['axial','coronal','sagittal']){
  await page.check(`input[name="slice-plane"][value="${plane}"]`);
  await page.waitForFunction(value=>window.organAtlas.exportView().inspection.slicePlane===value,plane);
  assert.ok(Number(await page.locator('#viewport').getAttribute('data-section-cap-visible'))>0,`${plane} section has no visible cap`);
  assert.deepEqual(await page.evaluate(()=>window.organAtlas.exportView().camera),camera,`${plane} section moved the camera`);
  directions.push(plane);
 }
 await page.check('#slice-reverse');
 await page.waitForFunction(()=>window.organAtlas.exportView().inspection.sliceReverse===true);
 assert.ok(Number(await page.locator('#viewport').getAttribute('data-section-cap-visible'))>0,'reverse section has no visible cap');
 assert.deepEqual(await page.evaluate(()=>window.organAtlas.exportView().camera),camera,'reverse section moved the camera');
 if(process.env.ATLAS_SCREENSHOT)await page.screenshot({path:process.env.ATLAS_SCREENSHOT,fullPage:true});
 await page.uncheck('#slice-toggle');
 await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.sectionCaps==='0'&&document.querySelector('#viewport')?.dataset.sectionCapVisible==='0');
 await page.waitForTimeout(100);const disabledRenderPasses=Number(await page.locator('#viewport').getAttribute('data-draw-calls'));
 assert.ok(disabledRenderPasses<=baselineDrawCalls,`disabling caps left extra draw calls (${disabledRenderPasses} > ${baselineDrawCalls})`);
 const materialErrors=errors.filter(error=>!error.includes('fonts.googleapis.com')&&error!=='Failed to load resource: net::ERR_NETWORK_ACCESS_DENIED');
 assert.equal(materialErrors.length,0,materialErrors.join('\n'));
 console.log(JSON.stringify({organ:'liver',capParts,directions,reverse:true,cameraStable:true,baselineDrawCalls,disabledRenderPasses},null,2));
}finally{
 await browser.close();
}
