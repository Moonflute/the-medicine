import {localModelStorageAvailable,modelSavePlan,allModelSavePlan,saveModels,storedModelBytes,clearStoredModels} from './local-model-store.js';
const size=bytes=>(bytes/1_000_000).toFixed(1)+' MB';
export function mountLocalModelControls(host,getView){
 const panel=document.createElement('section');panel.className='local-model-controls';
 panel.innerHTML='<strong>기기에 모델 저장</strong><p>현재 모델 또는 전체 3D 모델·복부 CT를 저장해 다음에 다시 사용합니다. 전신은 모든 계통을 저장합니다. 웹앱 전체 오프라인 실행은 지원하지 않습니다.</p><div><button type="button" data-local-save>현재 모델 저장</button><button type="button" data-local-save-all>전체 모델 저장</button><button type="button" data-local-cancel hidden>취소</button><button type="button" data-local-clear>저장 데이터 삭제</button></div><output aria-live="polite"></output><small>이 브라우저에만 저장됩니다. 브라우저의 사이트 데이터 삭제나 저장 공간 정리로 지워질 수 있습니다. 중단하면 이미 받은 파일은 유지됩니다.</small>';
 host.append(panel);const save=panel.querySelector('[data-local-save]'),saveAll=panel.querySelector('[data-local-save-all]'),clear=panel.querySelector('[data-local-clear]'),cancel=panel.querySelector('[data-local-cancel]'),status=panel.querySelector('output');let controller;
 saveAll.textContent+=' · '+size(allModelSavePlan().bytes);
 const refresh=async()=>{try{status.textContent='저장된 모델: '+size(await storedModelBytes());}catch{status.textContent='저장 공간에 접근할 수 없어요.';}};
 if(!localModelStorageAvailable()){save.disabled=saveAll.disabled=clear.disabled=true;status.textContent='HTTPS 환경과 브라우저 저장소 지원이 필요합니다.';return;}
 refresh();
 const run=async(planFactory,concurrency)=>{
  controller=new AbortController();save.disabled=saveAll.disabled=clear.disabled=true;cancel.hidden=false;
  try{
   status.textContent='저장할 모델 확인 중…';const plan=await planFactory();
   const result=await saveModels(plan,{signal:controller.signal,concurrency,onProgress:p=>{status.textContent=`${p.completed}/${p.total}개 · ${size(p.bytes)} / ${size(plan.bytes)}${p.cached?' · 기존 저장 '+p.cached+'개':''}`;}});
   status.textContent=`저장 완료 · ${size(result.bytes)}${result.cached?' · 기존 저장 '+result.cached+'개':''}. 다음 모델 로딩부터 사용합니다.`;
  }catch(error){status.textContent=error.name==='AbortError'?'저장을 취소했어요. 완료된 파일은 유지됩니다.':error.name==='QuotaExceededError'?'기기 저장 공간이 부족해요. 필요한 모델만 저장하거나 브라우저 저장 공간을 확인해 주세요.':error.message;}
  finally{controller=null;save.disabled=saveAll.disabled=clear.disabled=false;cancel.hidden=true;}
 };
 save.onclick=()=>run(()=>modelSavePlan(getView()),1);
 saveAll.onclick=()=>run(allModelSavePlan,3);
 cancel.onclick=()=>controller?.abort();
 clear.onclick=async()=>{save.disabled=saveAll.disabled=clear.disabled=true;try{await clearStoredModels();await refresh();}catch{status.textContent='저장 데이터를 삭제하지 못했어요.';}finally{save.disabled=saveAll.disabled=clear.disabled=false;}};
}
