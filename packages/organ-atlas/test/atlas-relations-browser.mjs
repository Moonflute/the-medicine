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
 await page.goto(base+'?organ=vasculature',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>document.querySelector('#viewport')?.dataset.model==='vasculature',{timeout:30000});
 assert.equal(await page.locator('#part-picker option[value="VH_M_aortic_arch"]').count(),1,'aortic arch option is missing');
 await page.selectOption('#part-picker','VH_M_aortic_arch');
 await page.waitForFunction(()=>window.organAtlas?.exportView?.()?.selectedPartId==='VH_M_aortic_arch',{timeout:10000});
 await page.getByRole('button',{name:'Aortic arch branches'}).click();
 await page.waitForSelector('.relation-brancher');
 const camera=await page.evaluate(()=>window.organAtlas.exportView().camera);
 assert.equal(await page.locator('.relation-stepper').count(),0,'parallel branches must not use sequential arrows');
 assert.equal(await page.locator('.relation-origin').count(),1,'parallel branches need one common origin');
 assert.equal(await page.locator('.relation-branches button').count(),3,'aortic arch needs three sibling branch choices');
 assert.equal(await page.locator('.relation-origin strong').textContent(),'Aortic arch');
 assert.deepEqual(await page.locator('.relation-branches strong').allTextContents(),[
  'Brachiocephalic trunk',
  'Left common carotid artery',
  'Left subclavian artery'
 ]);
 await page.locator('.relation-branches button').nth(1).click();
 const selected=await page.evaluate(()=>window.organAtlas.exportView());
 assert.equal(selected.inspection.relationStage,2);
 assert.deepEqual(selected.camera,camera,'choosing a sibling branch moved the camera');
 const materialErrors=errors.filter(error=>!error.includes('fonts.googleapis.com')&&error!=='Failed to load resource: net::ERR_NETWORK_ACCESS_DENIED');
 assert.equal(materialErrors.length,0,materialErrors.join('\n'));
 console.log(JSON.stringify({route:'aortic-arch-branches',presentation:'parallel',branches:3,cameraStable:true},null,2));
}finally{
 await browser.close();
}
