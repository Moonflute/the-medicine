import {assetRevisions} from './asset-revisions.js';
const CACHE='medicine-atlas-models-v1';
const absolute=path=>new URL(path,document.baseURI).href;
export const localModelStorageAvailable=()=>!!globalThis.isSecureContext&&'caches' in globalThis;
function revision(url){const target=absolute(url);return Object.entries(assetRevisions).find(([path])=>absolute(path)===target)?.[1];}
function key(url){const target=new URL(absolute(url)),rev=revision(url);if(rev)target.searchParams.set('atlas-sha256',rev.sha256);return target.href;}
export async function fetchModelResponse(url){
 if(localModelStorageAvailable())try{const cached=await(await caches.open(CACHE)).match(key(url));if(cached)return cached;}catch{/* Normal network loading remains available if storage is denied. */}
 return fetch(url);
}
export async function fetchModelManifest(url){
 try{const response=await fetch(url);if(response.ok)return response;}catch{/* Use explicitly saved manifest when disconnected. */}
 if(localModelStorageAvailable()){const cached=await(await caches.open(CACHE)).match(key(url));if(cached)return cached;}
 throw Error('모델 목록을 불러오지 못했어요.');
}
export async function modelSavePlan(view){
 if(!view)throw Error('모델을 먼저 불러오세요.');
 let urls=view.modelReferences.map(r=>r.renderingAsset);
 if(view.detailModel?.id==='whole-source-body'){
  const manifestUrl='./models/current/z-whole-manifest.json',manifest=await(await fetchModelManifest(manifestUrl)).json();
  urls=[...manifest.assets.map(a=>'./models/current/'+a.file),manifestUrl];
 }
 urls=[...new Set(urls)];
 if(!urls.length)throw Error('현재 보기는 별도로 저장할 모델 파일이 없습니다.');
 for(const url of urls){if(new URL(absolute(url)).origin!==location.origin||(!revision(url)&&url!=='./models/current/z-whole-manifest.json'))throw Error('저장할 수 없는 모델 주소입니다.');}
 return {urls,bytes:urls.reduce((sum,url)=>sum+(revision(url)?.bytes||0),0)};
}
export async function saveModels(plan,{signal,onProgress=()=>{}}={}){
 if(!localModelStorageAvailable())throw Error('이 브라우저에서는 기기 저장을 사용할 수 없어요.');
 const cache=await caches.open(CACHE);let completed=0,bytes=0;
 onProgress({completed,total:plan.urls.length,bytes});
 for(const url of plan.urls){
  signal?.throwIfAborted();const cacheKey=key(url),rev=revision(url);
  if(!await cache.match(cacheKey)){
   const response=await fetch(url,{signal});if(!response.ok)throw Error('모델 다운로드 실패: '+response.status);
   const transportDecoded=response.headers.get('Content-Encoding')?.toLowerCase().includes('gzip');
   const data=await response.arrayBuffer();signal?.throwIfAborted();
   // Browsers transparently decode an HTTP Content-Encoding response. In that
   // case the gzip CRC has already validated the payload, while our revision
   // hash still describes the compressed file served by GitHub Pages.
   if(rev&&!transportDecoded){const digest=[...new Uint8Array(await crypto.subtle.digest('SHA-256',data))].map(v=>v.toString(16).padStart(2,'0')).join('');if(digest!==rev.sha256)throw Error('모델 검증에 실패했어요. 다시 시도해 주세요.');}
   const headers=new Headers(response.headers);headers.delete('Content-Encoding');headers.delete('Content-Length');
   if(transportDecoded)headers.set('X-Atlas-Decoded-Gzip','1');
   await cache.put(cacheKey,new Response(data,{status:200,headers}));
   for(const request of await cache.keys()){const old=new URL(request.url);old.searchParams.delete('atlas-sha256');if(old.href===absolute(url)&&request.url!==cacheKey)await cache.delete(request);}
  }
  bytes+=rev?.bytes||0;onProgress({completed:++completed,total:plan.urls.length,bytes});
 }
 return {completed,bytes};
}
export async function storedModelBytes(){if(!localModelStorageAvailable())return 0;const cache=await caches.open(CACHE);let total=0;for(const request of await cache.keys()){const url=new URL(request.url),sha=url.searchParams.get('atlas-sha256');url.searchParams.delete('atlas-sha256');const rev=revision(url.href);if(rev?.sha256===sha)total+=rev.bytes;}return total;}
export async function clearStoredModels(){if(localModelStorageAvailable())await caches.delete(CACHE);}
