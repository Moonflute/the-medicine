import {localModelStorageAvailable,modelSavePlan,saveModels,storedModelBytes,clearStoredModels} from './local-model-store.js';
const size=bytes=>(bytes/1024/1024).toFixed(1)+' MB';
export function mountLocalModelControls(host,getView){
 const panel=document.createElement('section');panel.className='local-model-controls';
 panel.innerHTML='<strong>기기에 모델 저장</strong><p>현재 모델을 저장해 다음에 다시 사용합니다. 전신은 모든 계통을 저장합니다. 웹앱 전체 오프라인 실행은 지원하지 않습니다.</p><div><button type="button" data-local-save>현재 모델 저장</button><button type="button" data-local-cancel hidden>취소</button><button type="button" data-local-clear>저장 데이터 삭제</button></div><output aria-live="polite"></output><small>이 브라우저에만 저장됩니다. 브라우저의 사이트 데이터 삭제나 저장 공간 정리로 지워질 수 있습니다.</small>';
 host.append(panel);const save=panel.querySelector('[data-local-save]'),clear=panel.querySelector('[data-local-clear]'),cancel=panel.querySelector('[data-local-cancel]'),status=panel.querySelector('output');let controller;
 const refresh=async()=>{try{status.textContent='저장된 모델: '+size(await storedModelBytes());}catch{status.textContent='저장 공간에 접근할 수 없어요.';}};
 if(!localModelStorageAvailable()){save.disabled=true;clear.disabled=true;status.textContent='HTTPS 환경과 브라우저 저장소 지원이 필요합니다.';return;}
 refresh();
 save.onclick=async()=>{
  controller=new AbortController();save.disabled=clear.disabled=true;cancel.hidden=false;
  try{
   status.textContent='저장할 모델 확인 중…';const plan=await modelSavePlan(getView());
   const result=await saveModels(plan,{signal:controller.signal,onProgress:p=>{status.textContent=`${p.completed}/${p.total}개 · ${size(p.bytes)} / ${size(plan.bytes)}`;}});
   status.textContent=`저장 완료 · ${size(result.bytes)}. 다음 모델 로딩부터 사용합니다.`;
  }catch(error){status.textContent=error.name==='AbortError'?'저장을 취소했어요. 완료된 파일은 유지됩니다.':error.name==='QuotaExceededError'?'기기 저장 공간이 부족해요. 저장 데이터를 삭제한 뒤 다시 시도해 주세요.':error.message;}
  finally{controller=null;save.disabled=clear.disabled=false;cancel.hidden=true;}
 };
 cancel.onclick=()=>controller?.abort();
 clear.onclick=async()=>{save.disabled=clear.disabled=true;try{await clearStoredModels();await refresh();}catch{status.textContent='저장 데이터를 삭제하지 못했어요.';}finally{save.disabled=clear.disabled=false;}};
}
