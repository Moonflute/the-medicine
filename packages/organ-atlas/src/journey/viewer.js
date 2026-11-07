import * as T from 'three';
import {loadJourney} from './assets.js';
import {JourneyControls} from './controls.js';
import {JOURNEY_RADIUS,relativeSize,anatomicalHeading,JourneyPerspective} from './perspective.js';
import {JourneyWayfinding} from './wayfinding.js';
import {JourneyContextView} from './context-view.js';
import {JourneyBoundaryGuide} from './boundaries.js';
import {journeyFrame} from './context.js';
import {journeyModes,clinicalExamples} from './learning-data.js';
import {destinationPose,restoreJourneyPose} from './destinations.js';
import {JourneyDestinationPanel} from './destination-panel.js';
import {JourneyRouteGuide} from './route-guide.js';
import {CapillaryTransfers,transferPose} from './capillary-transfers.js';
import {regionTransitionPose} from './region-transitions.js';
import {JourneyClinicalLayer} from './clinical-layer.js';
import {JourneyLearningPanel} from './learning-panel.js';
import {JourneyEnvironment} from './environment.js';
import './viewer.css';

// Loaded only on entry. The atlas keeps its camera/selection and pauses its GPU.
export async function openJourney({onClose=()=>{},initialMode='upper'}={}){
 const dialog=document.createElement('dialog');dialog.className='journey';dialog.setAttribute('aria-label','1인칭 내부 탐험');
 dialog.innerHTML=`<div class="journey-top"><button class="journey-back" aria-label="해부모형으로 돌아가기">← <span>해부모형</span></button><button class="journey-location" aria-label="현재 구조 설명과 병태" aria-expanded="false" aria-controls="journey-learning"><small>INTERNAL EXPLORER · 재구성 모델</small><strong aria-live="polite">준비 중</strong><span class="journey-info-mark" aria-hidden="true">ⓘ</span></button><button class="journey-travel-toggle" aria-expanded="false" aria-controls="journey-destinations">부위 이동 <span aria-hidden="true">⌖</span></button></div>
 <div class="journey-stage"><div class="journey-message" role="status">내부 공간을 준비하고 있어요…</div><div class="journey-reticle" aria-hidden="true"></div><div class="journey-feedback" role="status"></div><div class="journey-map" hidden><div class="journey-map-modes" role="group" aria-label="위치도 방향"><button data-projection="side">옆</button><button data-projection="front">앞</button></div><canvas width="240" height="380" aria-label="현재 위치와 시선 방향"></canvas><span class="journey-map-caption">뒤 P · 앞 A</span></div>
 <div class="journey-touch"><div class="journey-stick" role="group" aria-label="전후·좌우 이동"><span></span><i>이동</i></div><div class="journey-height"><button data-lift="1" aria-label="화면 위로 이동">↑</button><button data-lift="-1" aria-label="화면 아래로 이동">↓</button></div></div></div>
 <div class="journey-bottom"><div class="journey-size" role="group" aria-label="탐험 크기"><span>크기</span><button data-size-step="1" aria-label="탐험 크기 줄이기">−</button><output class="journey-size-value" aria-live="polite">1×</output><button data-size-step="-1" aria-label="탐험 크기 늘리기">+</button></div><button class="journey-map-toggle" aria-pressed="false">위치</button><button class="journey-help-toggle" aria-expanded="false" aria-controls="journey-help">조작 · 안내</button></div>
 <section id="journey-help" class="journey-help" hidden><div><b>자유롭게 이동하기</b><button class="journey-help-close" aria-label="안내 닫기">×</button></div><p><kbd>W / S</kbd> 바라보는 쪽으로 전진·후진<br><kbd>A / D</kbd> 화면 왼쪽·오른쪽<br><kbd>Q / E</kbd> 화면 아래·위 · <kbd>Shift</kbd> 빠르게<br>화면 한 번 클릭 → 마우스 움직임으로 둘러보기<br>클릭을 누르고 있을 필요가 없어요 · Esc로 해제<br>방향키로도 시선을 돌릴 수 있어요</p><p>터치: 왼쪽 조이스틱으로 이동, 화면을 드래그해 둘러보세요. 오른쪽 ↑↓는 화면 기준 위아래 이동입니다.</p><p>크기가 작아지면 시야가 넓어지고 이동 속도가 줄어, 같은 공간이 상대적으로 넓게 느껴집니다. 시선 방향 표시는 인체 기준입니다.</p><p class="journey-notice"></p><p>입에서 소화관 또는 기관·엽·분절기관지까지 이어서 이동할 수 있습니다. 좁은 가지에서는 크기를 줄여 보세요. 심장 · 동맥 · 정맥에서는 우심방→우심실→폐동맥, 폐정맥→좌심방→좌심실→전신 동맥을 따라 이동합니다. 상단 부위 이동에서 장기·부위를 검색해 바로 이동할 수 있습니다. 경로 안내를 고르면 연결된 다음 입구를 순서대로 표시하며, 이동과 시선은 직접 조작합니다. 대응 혈관이 있는 폐·신장·골반·상지의 끝에서는 미세순환 생략을 선택해 반대편 혈관으로 전환합니다. 말초 분지와 모세혈관을 생략한 위치 이동이며 실제 직통 혈관은 아닙니다. 정맥 쪽에서는 역방향 탐험도 가능합니다. 소화관과 혈관 사이의 부위 이동은 위치 전환입니다. 부위 이동의 이전 위치를 누르면 이동 전 위치·시선·크기를 복원합니다.</p><div class="journey-sources"></div></section>`;
 const previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';document.body.append(dialog);dialog.showModal();
 const notifyHost=open=>{if(window.parent!==window)window.parent.postMessage({type:'atlas:journey',open},location.origin);};notifyHost(true);
 const find=s=>dialog.querySelector(s),stage=find('.journey-stage'),message=find('.journey-message'),travelToggle=find('.journey-travel-toggle'),map=find('.journey-map'),help=find('.journey-help');
 const hintControl=document.createElement('label');hintControl.className='journey-hint-control';hintControl.innerHTML='입구 · 구조 이름 표시 <input type="checkbox" checked>';help.insertBefore(hintControl,find('.journey-notice'));
 let renderer,controls,asset,closed=false,loading=false,transitioning=false,request=0,dirty=true,last=0,lastHud=0,lastRegion=0,lastFeedback='',feedbackUntil=0,observer,frameId=0,wayfinding,minimap,boundaryGuide,clinical,learning,destinations,routeGuide,transfers,previousView=null;
 const cleanups=[],listen=(target,event,fn)=>{target.addEventListener(event,fn);cleanups.push(()=>target.removeEventListener(event,fn));};
 const close=()=>{if(closed)return;closed=true;request++;cancelAnimationFrame(frameId);controls?.dispose();wayfinding?.dispose();minimap?.dispose();boundaryGuide?.dispose();clinical?.dispose();learning?.dispose();destinations?.dispose();routeGuide?.dispose();observer?.disconnect();asset?.dispose();renderer?.dispose();renderer?.forceContextLoss();cleanups.forEach(fn=>fn());dialog.close();dialog.remove();document.documentElement.style.overflow=previousOverflow;notifyHost(false);onClose();};
 find('.journey-back').onclick=close;listen(dialog,'cancel',e=>{e.preventDefault();if(controls?.consumeEscape()||document.pointerLockElement)return;if(destinations&&!destinations.hidden){toggleDestinations(false);return;}if(learning&&!learning.hidden){toggleLearning(false);return;}if(!help.hidden){toggleHelp(false);return;}close();});listen(window,'pagehide',e=>{if(!e.persisted)close();});
 try{renderer=new T.WebGLRenderer({antialias:true,alpha:false});}catch(error){message.textContent='이 환경에서는 3D 탐험을 열 수 없어요. 해부모형으로 돌아가 주세요.';console.error(error);return;}
 const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('aria-label','1인칭 탐험. W A S D로 이동, Q E로 화면 아래·위 이동, 화면 한 번 클릭 후 마우스 움직임 또는 방향키로 시선 회전');stage.prepend(canvas);
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 const scene=new T.Scene();scene.background=new T.Color('#2e1e24');scene.fog=new T.FogExp2('#35232a',9);
 const camera=new T.PerspectiveCamera(76,1,.00012,1.4);scene.add(camera);scene.add(new T.AmbientLight('#f4efed',.24));
 const perspective=new JourneyPerspective(camera,{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches}),headingVector=new T.Vector3();
 const light=new T.PointLight('#fff4e8',1.5,.18,0);camera.add(light);light.position.set(0,0,0);
 // A single shadow-free oblique fill reveals chamber wall relief without
 // additional meshes, textures, shadow maps or post-processing passes.
 const fill=new T.DirectionalLight('#f1f5ff',.48);camera.add(fill,fill.target);fill.position.set(-.8,.55,.6);fill.target.position.set(.2,-.1,-1);
 const environment=new JourneyEnvironment(scene,light,{reducedMotion:perspective.reducedMotion});
 map.hidden=!matchMedia('(min-width: 800px) and (min-height: 500px)').matches;find('.journey-map-toggle').setAttribute('aria-pressed',String(!map.hidden));
 const mapZoom=document.createElement('button');mapZoom.dataset.mapZoom='';mapZoom.textContent='확대';mapZoom.setAttribute('aria-label','위치도에서 현재 영역 확대');mapZoom.setAttribute('aria-pressed','false');map.querySelector('.journey-map-modes').append(mapZoom);
 const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;dialog.style.setProperty('--journey-header-height',find('.journey-top').offsetHeight+'px');dialog.style.setProperty('--journey-footer-height',find('.journey-bottom').offsetHeight+'px');renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();dirty=true;};observer=new ResizeObserver(resize);observer.observe(stage);observer.observe(find('.journey-top'));observer.observe(find('.journey-bottom'));resize();
 const blockedMessage='이 방향으로는 지나갈 수 없어요 · 방향을 바꾸거나 크기를 줄여보세요.';
 const feedback=(text,duration=0)=>{if(text!==lastFeedback){lastFeedback=text;find('.journey-feedback').textContent=text;}feedbackUntil=duration?performance.now()+duration:0;};
 const syncInput=()=>{if(controls)controls.enabled=!loading&&!transitioning&&help.hidden&&(!learning||learning.hidden)&&(!destinations||destinations.hidden);};
 const toggleHelp=value=>{if(value&&learning&&!learning.hidden)toggleLearning(false);if(value&&destinations&&!destinations.hidden)toggleDestinations(false);help.hidden=!value;find('.journey-help-toggle').setAttribute('aria-expanded',String(value));controls?.clear();syncInput();if(!value)canvas.focus({preventScroll:true});};
 const currentPart=()=>asset?.manifest.parts.find(p=>p.id===(asset.inspect?.(camera)||asset.field.region(camera.position.toArray())));
 const badge=document.createElement('button');badge.className='journey-clinical-badge';badge.hidden=true;stage.append(badge);
 const heading=document.createElement('span');heading.className='journey-heading';heading.setAttribute('aria-label','현재 시선의 해부학적 방향');heading.title='인체 기준 방향 · 이동 조작은 현재 화면 기준';stage.append(heading);
 const syncClinical=()=>{learning?.syncExample(clinical?.active);badge.hidden=!clinical?.active;badge.textContent=clinical?.active?clinicalExamples[clinical.active.id].english+' · 해제 ×':'';if(wayfinding){wayfinding.frame=null;wayfinding.update();}dirty=true;};
 const toggleLearning=value=>{if(!asset||loading||transitioning)return;if(value){toggleHelp(false);toggleDestinations(false);learning.update(asset.manifest,currentPart(),clinical?.active);}learning.setOpen(value);find('.journey-location').setAttribute('aria-expanded',String(value));controls?.clear();syncInput();if(!value)canvas.focus({preventScroll:true});};
 learning=new JourneyLearningPanel(dialog,{onToggle:toggleLearning,onExample:(example,amount)=>{
  if(!clinical||!controls)return;const result=clinical.apply(example,amount,currentPart(),controls.radius);syncClinical();if(!result.ok)feedback(result.message,4500);else feedback('');
 },onHighlight:id=>{if(wayfinding){wayfinding.enabled=true;hintControl.querySelector('input').checked=true;const state=wayfinding.highlight(id);feedback(state==='visible'?'연결 위치를 표시했어요.':state==='offscreen'?'화살표 방향으로 직접 둘러보세요.':state==='occluded'?'연결부가 벽 뒤에 가려져 있어요. 통로를 따라 이동해 보세요.':'이 위치에서는 연결 입구를 표시할 수 없어요.',3500);}}});
 find('.journey-location').onclick=()=>toggleLearning(learning.hidden);badge.onclick=()=>{clinical?.reset();syncClinical();canvas.focus({preventScroll:true});};
 find('.journey-help-toggle').onclick=()=>toggleHelp(help.hidden);find('.journey-help-close').onclick=()=>toggleHelp(false);
 hintControl.querySelector('input').onchange=e=>{if(wayfinding){wayfinding.enabled=e.target.checked;wayfinding.update();}};
 find('.journey-map-toggle').onclick=e=>{map.hidden=!map.hidden;e.currentTarget.setAttribute('aria-pressed',String(!map.hidden));minimap?.draw();canvas.focus({preventScroll:true});};
 const sizeSteps=[1,.5,.25,.125,.0625],sizeLabel=scale=>scale===1?'1×':scale===.5?'½×':scale===.25?'¼×':scale===.125?'⅛×':'1/16×';
 const syncSize=({immediate=false}={})=>{if(!controls)return;const scale=relativeSize(controls.radius);perspective.setRadius(controls.radius,{immediate});find('.journey-size-value').textContent=sizeLabel(scale);find('[data-size-step="1"]').disabled=scale<=sizeSteps.at(-1);find('[data-size-step="-1"]').disabled=scale>=1;dirty=true;};
 const setSize=scale=>{if(!controls||loading||transitioning)return;const radius=JOURNEY_RADIUS*scale;if(asset.manifest.kind==='brain'&&asset.field.mode==='surface'){const hit=asset.field.walkState||asset.field.project(camera.position.toArray());if(hit){const point=hit.point.clone().addScaledVector(hit.normal,radius*3.5);if(asset.field.clearance(point.toArray())>=radius){camera.position.copy(point);asset.field.place({position:point.toArray(),id:hit.id,surfaceContact:{point:hit.point.toArray(),normal:hit.normal.toArray()}});controls.radius=radius;syncSize();canvas.focus({preventScroll:true});return;}}}if(controls.field.clearance(camera.position.toArray())<radius){feedback('이곳은 좁아서 크기를 늘릴 수 없어요. 넓은 곳으로 이동하세요.');return;}if(radius!==controls.radius){controls.radius=radius;syncSize();feedback(`몸 크기 ${sizeLabel(scale)} · 상대 공간 ${1/scale}×`,2500);}canvas.focus({preventScroll:true});};
 dialog.querySelectorAll('[data-size-step]').forEach(button=>button.onclick=()=>{if(!controls)return;const index=sizeSteps.indexOf(relativeSize(controls.radius)),next=sizeSteps[index+Number(button.dataset.sizeStep)];if(next)setSize(next);});
 const updateLocation=()=>{if(!asset||!controls)return;camera.getWorldDirection(headingVector);const text='시선 · '+anatomicalHeading(headingVector);if(heading.textContent!==text)heading.textContent=text;const part=currentPart(),id=part?.id;if(part&&id!==lastRegion){lastRegion=id;find('.journey-location strong').textContent=part.name;find('.journey-location small').textContent=part.kind==='heart'?(part.circuit==='right'?'RIGHT':'LEFT')+' HEART · '+(part.name.endsWith('atrium')?'ATRIUM':'VENTRICLE'):asset.manifest.kind==='brain'?(asset.field.mode==='surface'?'CORTICAL SURFACE · 피질 걷기':'DISSECTION · 내부 해부'):'INTERNAL EXPLORER · 재구성 모델';canvas.dataset.region=String(id);environment.setWidth(asset.manifest.kind==='brain'?.06:part.clearance,{chamber:part.kind==='heart'});dirty=true;}routeGuide?.update(id);canvas.dataset.position=camera.position.toArray().map(v=>v.toFixed(5)).join(',');};
 const captureView=()=>asset&&controls?{key:asset.manifest.key,id:currentPart()?.id,name:currentPart()?.name||asset.manifest.key,position:camera.position.toArray(),yaw:controls.yaw,pitch:controls.pitch,radius:controls.radius,projection:minimap?.axis,frame:journeyFrame(asset.manifest),navigationFrame:controls.frame.toArray(),mode:asset.field.mode,side:asset.field.side,surfaceContact:asset.field.walkState?{point:asset.field.walkState.point.toArray(),normal:asset.field.walkState.normal.toArray()}:undefined}:null;
 const toggleDestinations=value=>{
  if(value&&(!asset||loading||transitioning))return;
  if(value){toggleHelp(false);toggleLearning(false);}
  controls?.clear();destinations.setOpen(value,asset?{key:asset.manifest.key,id:currentPart()?.id}:null,previousView,value?routeGuide?.routes.reachable(currentPart()?.id):undefined,value?new Set(routeGuide?.routes.tree(currentPart()?.id).keys()):undefined);
  travelToggle.setAttribute('aria-expanded',String(value));syncInput();
  if(!value)canvas.focus({preventScroll:true});
 };
 destinations=new JourneyDestinationPanel(dialog,{onToggle:toggleDestinations,onTravel:part=>changeWorld(part.key,{id:part.id}),onReturn:()=>{if(previousView)changeWorld(previousView.key,{view:previousView});},onGuide:part=>{
  if(loading||!asset||part.key!==asset.manifest.key)return;
  if(!routeGuide?.select(currentPart()?.id,part.id)){feedback('현재 위치에서 이어지는 탐험 통로가 없어요.',3500);return;}
  toggleDestinations(false);feedback('');
 }});
 travelToggle.onclick=()=>toggleDestinations(destinations.hidden);
 const brainModes=document.createElement('div');brainModes.className='journey-brain-modes';brainModes.hidden=true;brainModes.setAttribute('role','group');brainModes.setAttribute('aria-label','뇌 탐험 방식');
 for(const [mode,label]of [['surface','피질 걷기'],['interior','내부 해부']]){const button=document.createElement('button');button.dataset.brainMode=mode;button.textContent=label;button.onclick=()=>{if(!asset||asset.manifest.kind!=='brain'||loading||transitioning)return;const part=asset.manifest.parts.find(p=>p.layer===(mode==='surface'?0:1)&&p.hemisphere===asset.field.side&&p.navigable!==false);if(part)changeWorld('brain',{id:part.id});};brainModes.append(button);}find('.journey-bottom').insertBefore(brainModes,find('.journey-map-toggle'));
 const applyPose=(pose,{keepRoute=false}={})=>{
  controls.clear();if(!keepRoute)routeGuide?.clear();clinical.reset();syncClinical();camera.position.fromArray(pose.position);controls.radius=pose.radius;
  if(asset.manifest.kind==='brain'){asset.field.setMode(pose.mode||'surface',pose.side||'L');asset.field.place(pose);find('.journey-height').hidden=asset.field.mode==='surface';}
  controls.resetFrame(asset.field.upAt?.(pose.position)||[0,1,0],pose.navigationFrame);
  for(const b of brainModes.querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.brainMode===asset.field.mode));
  if(pose.direction)controls.aim(pose.direction);else{controls.yaw=pose.yaw;controls.pitch=pose.pitch;controls.updateRotation();}
  syncSize({immediate:true});lastRegion=0;updateLocation();
  const part=currentPart();environment.setWidth(asset.manifest.kind==='brain'?.06:part?.clearance||.02,{immediate:true,chamber:part?.kind==='heart'});
  if(minimap){if(pose.projection)minimap.axis=pose.projection;minimap.resetTrail();minimap.draw();}
  wayfinding?.update();boundaryGuide?.reset();dirty=true;
 };
 const transit=document.createElement('div');transit.className='journey-transit';transit.hidden=true;transit.setAttribute('role','status');stage.append(transit);
 async function crossCapillary(option){
  if(loading||transitioning||closed)return;
  const link=transfers?.available(currentPart()?.id,option.to,camera.position.toArray());if(!link)return;
  const origin=captureView(),pose=transferPose(asset,link,origin);if(!pose){feedback('현재 크기로는 연결 혈관에 안전하게 들어갈 수 없어요. 크기를 줄여 다시 선택하세요.',4500);return;}
  transitioning=true;controls.clear();syncInput();travelToggle.disabled=true;
  transit.textContent=link.territory+' · 미세순환 생략'+(link.forward?'':' · 역방향 탐험');transit.hidden=false;
  try{
   if(!perspective.reducedMotion)await new Promise(resolve=>setTimeout(resolve,180));if(closed)return;
   applyPose(pose,{keepRoute:true});previousView=origin;feedback('미세순환 생략 → '+pose.name,3000);
   if(!perspective.reducedMotion)await new Promise(resolve=>setTimeout(resolve,120));
  }finally{transitioning=false;if(!closed){transit.hidden=true;travelToggle.disabled=false;controls.clearInputs();syncInput();canvas.focus({preventScroll:true});}}
 }
 async function changeWorld(key,{id,view,shared}={}){
  if(loading||transitioning||closed)return;
  const origin=captureView(),targetId=id??journeyModes.find(m=>m.id===key)?.start;
  const resolvePose=next=>shared?regionTransitionPose(asset,next,shared,origin):view?restoreJourneyPose(next,view):destinationPose(next,targetId,origin?.radius??(key==='upper'?.0016:.0008));
  if(asset?.manifest.key===key){
   const pose=resolvePose(asset);if(!pose){feedback('이 위치로 이동할 수 없어요.',3500);return;}
   toggleDestinations(false);toggleHelp(false);toggleLearning(false);applyPose(pose);previousView=origin;
   message.hidden=true;feedback('이동 · '+currentPart().name,2500);return;
  }
  toggleDestinations(false);toggleHelp(false);toggleLearning(false);
  const token=++request;loading=true;travelToggle.disabled=true;dialog.setAttribute('aria-busy','true');delete dialog.dataset.ready;controls?.clear();syncInput();
  message.hidden=false;message.textContent=asset?'현재 위치를 유지하며 다음 영역을 준비하고 있어요…':'내부 공간을 준비하고 있어요…';feedback('');
  let pendingAsset;
  try{
   pendingAsset=await loadJourney(key);if(closed||token!==request){pendingAsset.dispose();return;}
   const pose=resolvePose(pendingAsset);if(!pose&&shared){pendingAsset.dispose();pendingAsset=null;message.hidden=true;feedback('현재 크기·위치로는 다음 혈관에 들어갈 수 없어요. 크기를 줄이거나 조금 안쪽에서 다시 선택하세요.',4500);return;}if(!pose)throw Error('No safe destination in this exploration region');
   // Do not discard the current world until both the new asset and landing
   // point are ready. A failed download leaves its position and input intact.
   controls?.dispose();controls=null;wayfinding?.dispose();wayfinding=null;minimap?.dispose();minimap=null;boundaryGuide?.dispose();boundaryGuide=null;clinical?.dispose();clinical=null;routeGuide?.dispose();routeGuide=null;badge.hidden=true;
   if(asset){scene.remove(asset.mesh);asset.dispose();}asset=pendingAsset;pendingAsset=null;scene.add(asset.mesh);lastRegion=0;dirty=true;
   const isBrain=asset.manifest.kind==='brain';brainModes.hidden=!isBrain;find('.journey-height').hidden=false;
   clinical=isBrain?{field:asset.field,active:null,reset(){},dispose(){}}:new JourneyClinicalLayer(asset,scene,camera);
   controls=new JourneyControls(camera,canvas,{field:clinical.field,radius:pose.radius,onChange:()=>dirty=true,onLookModeChange:mode=>feedback(mode==='off'?'시선 조작 해제 · 화면 클릭으로 다시 시작':'마우스로 둘러보기 · Esc로 해제',2500),onExit:()=>{if(!destinations.hidden)toggleDestinations(false);else if(!learning.hidden)toggleLearning(false);else if(!help.hidden)toggleHelp(false);else close();}});
   syncInput();scene.background.set(isBrain?'#34424a':'#2e1e24');scene.fog.color.set(isBrain?'#34424a':'#35232a');
   find('.journey-notice').textContent=asset.manifest.notice;
   const sources=find('.journey-sources');sources.replaceChildren();
   for(const [label,url]of [[(asset.manifest.source.name||'Z-Anatomy')+' · '+asset.manifest.license,asset.manifest.source.url],...(asset.manifest.landmarkRegistration?[['BodyParts3D · DBCLS','https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html']]:[]),['해부학 참고',asset.manifest.references[0]]]){const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a);}
   applyPose(pose);
   minimap=new JourneyContextView(map,asset,camera,()=>{dirty=true;});if(pose.projection){minimap.axis=pose.projection;minimap.draw();}
   transfers=new CapillaryTransfers(asset.manifest);
   wayfinding=new JourneyWayfinding(stage,{...asset,field:clinical.field},camera);wayfinding.enabled=hintControl.querySelector('input').checked;boundaryGuide=new JourneyBoundaryGuide(stage,asset,camera,{transfers,onTransfer:crossCapillary,onRegion:option=>changeWorld(option.key,{shared:option})});
   routeGuide=new JourneyRouteGuide(stage,asset.manifest,{onStep:(from,to,transfer)=>{wayfinding?.setRoute(from,to,transfer);boundaryGuide?.setPreferred(transfer?.to??null);},onStop:()=>canvas.focus({preventScroll:true})});
   if(origin)previousView=origin;message.hidden=true;dialog.dataset.ready=key;canvas.focus({preventScroll:true});if(origin)feedback((shared?.type==='capillary'?'미세순환 생략 → ':'이동 · ')+currentPart().name,2500);
  }catch(error){
   pendingAsset?.dispose();if(closed||token!==request)return;if(asset)dialog.dataset.ready=asset.manifest.key;
   message.replaceChildren(document.createTextNode('탐험 데이터를 불러오지 못했어요. '));
   const retry=document.createElement('button');retry.textContent='다시 시도';retry.onclick=()=>changeWorld(key,{id,view,shared});message.append(retry);
   if(asset){const dismiss=document.createElement('button');dismiss.textContent='계속 보기';dismiss.onclick=()=>{message.hidden=true;canvas.focus({preventScroll:true});};message.append(dismiss);}console.error(error);
  }finally{if(!closed&&token===request){loading=false;travelToggle.disabled=!asset;dialog.removeAttribute('aria-busy');controls?.clearInputs();syncInput();}}
 }
 // Independent touch pointers allow looking and moving at the same time.
 const stick=find('.journey-stick'),knob=stick.querySelector('span');let stickId=null;
 const moveStick=e=>{if(e.pointerId!==stickId||!controls)return;const r=stick.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width*.32),y=(e.clientY-r.top-r.height/2)/(r.height*.32),length=Math.max(1,Math.hypot(x,y));controls.axes[0]=x/length;controls.axes[1]=y/length;knob.style.transform=`translate(${x/length*28}px,${y/length*28}px)`;};
 listen(stick,'pointerdown',e=>{if(stickId!==null)return;e.preventDefault();stickId=e.pointerId;stick.setPointerCapture(e.pointerId);moveStick(e);});listen(stick,'pointermove',moveStick);
 const resetStick=e=>{if(e&&stickId!==e.pointerId)return;stickId=null;knob.style.transform='';if(controls){controls.axes[0]=controls.axes[1]=0;}};for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(stick,event,resetStick);
 dialog.querySelectorAll('[data-lift]').forEach(button=>{listen(button,'pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);if(controls)controls.axes[2]=Number(button.dataset.lift);});for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(button,event,()=>{if(controls)controls.axes[2]=0;});});
 listen(dialog,'focusin',e=>{if(e.target!==canvas)controls?.clear();});listen(window,'blur',()=>resetStick());
 const frame=now=>{
  if(closed)return;frameId=requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000);last=now;if(document.hidden)return;
  if(perspective.update(dt)){dirty=true;wayfinding?.update();}if(environment.update(dt))dirty=true;
  if(!loading&&!transitioning&&help.hidden&&learning.hidden&&destinations.hidden&&controls){
   controls.step(dt);
   if(now-lastHud>100){
    updateLocation();minimap?.draw();wayfinding?.update();if(feedbackUntil&&now>feedbackUntil)feedback('');
    const atBoundary=boundaryGuide?.update(lastFeedback===blockedMessage?'':lastFeedback);
    find('.journey-feedback').hidden=!!atBoundary;
    // Boundary guidance replaces generic collision feedback, not the result
    // of an explicit transfer/size action (e.g. a rejected narrow landing).
    if(controls.blocked&&!atBoundary&&!feedbackUntil)feedback(blockedMessage);
    else if(lastFeedback===blockedMessage)feedback('');
    lastHud=now;
   }
  }
  if(dirty){renderer.render(scene,camera);minimap?.render(renderer);dirty=false;}
 };
 const visibility=()=>{controls?.clear();resetStick();last=performance.now();dirty=true;};listen(document,'visibilitychange',visibility);frameId=requestAnimationFrame(frame);
 await changeWorld(journeyModes.some(item=>item.id===initialMode)?initialMode:'upper');
}
