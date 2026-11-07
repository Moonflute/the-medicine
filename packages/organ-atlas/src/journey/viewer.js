import * as T from 'three';
import {loadJourney} from './assets.js';
import {JourneyControls} from './controls.js';
import {JOURNEY_RADIUS,relativeSize,anatomicalHeading,JourneyPerspective} from './perspective.js';
import {JourneyWayfinding,entranceHints,visibleThroughLumen} from './wayfinding.js';
import {JourneyMiniMap} from './minimap.js';
import {JourneyBoundaryGuide} from './boundaries.js';
import {nearbyInterior,fittingRadius,journeyFrame} from './context.js';
import {journeyModes,journeyStartGroups,clinicalExamples,journeyKind} from './learning-data.js';
import {JourneyClinicalLayer} from './clinical-layer.js';
import {JourneyLearningPanel} from './learning-panel.js';
import {JourneyEnvironment} from './environment.js';
import './viewer.css';

// Loaded only on entry. The atlas keeps its camera/selection and pauses its GPU.
export async function openJourney({onClose=()=>{},initialMode='upper'}={}){
 const dialog=document.createElement('dialog');dialog.className='journey';dialog.setAttribute('aria-label','1인칭 내부 탐험');
 dialog.innerHTML=`<div class="journey-top"><button class="journey-back" aria-label="해부모형으로 돌아가기">← <span>해부모형</span></button><button class="journey-location" aria-label="현재 구조 설명과 병태" aria-expanded="false" aria-controls="journey-learning"><small>INTERNAL EXPLORER · 재구성 모델</small><strong aria-live="polite">준비 중</strong><span class="journey-info-mark" aria-hidden="true">ⓘ</span></button><select class="journey-mode" aria-label="탐험 영역">${journeyModes.map(m=>`<option value="${m.id}">${m.label}</option>`).join('')}</select></div>
 <div class="journey-stage"><div class="journey-message" role="status">내부 공간을 준비하고 있어요…</div><div class="journey-reticle" aria-hidden="true"></div><div class="journey-feedback" role="status"></div><div class="journey-map" hidden><div class="journey-map-modes" role="group" aria-label="위치도 방향"><button data-projection="side">옆</button><button data-projection="front">앞</button></div><canvas width="240" height="380" aria-label="현재 위치와 시선 방향"></canvas><span class="journey-map-caption">뒤 P · 앞 A</span></div>
 <div class="journey-touch"><div class="journey-stick" role="group" aria-label="전후·좌우 이동"><span></span><i>이동</i></div><div class="journey-height"><button data-lift="1" aria-label="화면 위로 이동">↑</button><button data-lift="-1" aria-label="화면 아래로 이동">↓</button></div></div></div>
 <div class="journey-bottom"><div class="journey-size" role="group" aria-label="탐험 크기"><span>크기</span><button data-size="1" aria-pressed="true">1×</button><button data-size="0.5" aria-pressed="false">½×</button><button data-size="0.25" aria-pressed="false">¼×</button></div><button class="journey-map-toggle" aria-pressed="false">위치</button><button class="journey-help-toggle" aria-expanded="false" aria-controls="journey-help">조작 · 안내</button></div>
 <section id="journey-help" class="journey-help" hidden><div><b>자유롭게 이동하기</b><button class="journey-help-close" aria-label="안내 닫기">×</button></div><p><kbd>W / S</kbd> 바라보는 쪽으로 전진·후진<br><kbd>A / D</kbd> 화면 왼쪽·오른쪽<br><kbd>Q / E</kbd> 화면 아래·위 · <kbd>Shift</kbd> 빠르게<br>화면 한 번 클릭 → 마우스 움직임으로 둘러보기<br>클릭을 누르고 있을 필요가 없어요 · Esc로 해제<br>방향키로도 시선을 돌릴 수 있어요</p><p>터치: 왼쪽 조이스틱으로 이동, 화면을 드래그해 둘러보세요. 오른쪽 ↑↓는 화면 기준 위아래 이동입니다.</p><p>크기가 작아지면 시야가 넓어지고 이동 속도가 줄어, 같은 공간이 상대적으로 넓게 느껴집니다. 시선 방향 표시는 인체 기준입니다.</p><label>시작 위치 <select class="journey-start" aria-label="탐험 시작 위치"></select></label><p class="journey-notice"></p><p>입에서 소화관 또는 기관·엽·분절기관지까지 이어서 이동할 수 있습니다. 좁은 가지에서는 크기를 줄여 보세요. 심장 · 동맥 · 정맥에서는 우심방→우심실→폐동맥, 폐정맥→좌심방→좌심실→전신 동맥을 따라 이동합니다. 좌우 심장의 시작점은 위 목록에서 선택할 수 있습니다. 폐·전신 모세혈관망은 생략되어 두 경로를 직접 연결하지 않습니다. 소화관과 혈관의 영역 선택은 화면 전환입니다. 돌아오면 이전 위치·시선·크기를 복원합니다.</p><div class="journey-sources"></div></section>`;
 const previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';document.body.append(dialog);dialog.showModal();
 const find=s=>dialog.querySelector(s),stage=find('.journey-stage'),message=find('.journey-message'),mode=find('.journey-mode'),start=find('.journey-start'),map=find('.journey-map'),help=find('.journey-help');
 const hintControl=document.createElement('label');hintControl.className='journey-hint-control';hintControl.innerHTML='입구 · 구조 이름 표시 <input type="checkbox" checked>';help.insertBefore(hintControl,find('.journey-notice'));
 let renderer,controls,asset,closed=false,loading=false,request=0,dirty=true,last=0,lastHud=0,lastRegion=0,lastFeedback='',feedbackUntil=0,observer,frameId=0,wayfinding,minimap,boundaryGuide,clinical,learning;
 const savedViews=new Map();
 const cleanups=[],listen=(target,event,fn)=>{target.addEventListener(event,fn);cleanups.push(()=>target.removeEventListener(event,fn));};
 const close=()=>{if(closed)return;closed=true;request++;cancelAnimationFrame(frameId);controls?.dispose();wayfinding?.dispose();minimap?.dispose();boundaryGuide?.dispose();clinical?.dispose();learning?.dispose();observer?.disconnect();asset?.dispose();renderer?.dispose();renderer?.forceContextLoss();cleanups.forEach(fn=>fn());dialog.close();dialog.remove();document.documentElement.style.overflow=previousOverflow;onClose();};
 find('.journey-back').onclick=close;listen(dialog,'cancel',e=>{e.preventDefault();if(controls?.consumeEscape()||document.pointerLockElement)return;if(learning&&!learning.hidden){toggleLearning(false);return;}if(!help.hidden){toggleHelp(false);return;}close();});listen(window,'pagehide',e=>{if(!e.persisted)close();});
 try{renderer=new T.WebGLRenderer({antialias:true,alpha:false});}catch(error){message.textContent='이 환경에서는 3D 탐험을 열 수 없어요. 해부모형으로 돌아가 주세요.';console.error(error);return;}
 const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('aria-label','1인칭 탐험. W A S D로 이동, Q E로 화면 아래·위 이동, 화면 한 번 클릭 후 마우스 움직임 또는 방향키로 시선 회전');stage.prepend(canvas);
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 const scene=new T.Scene();scene.background=new T.Color('#2e1e24');scene.fog=new T.FogExp2('#35232a',9);
 const camera=new T.PerspectiveCamera(76,1,.00012,1.4);scene.add(camera);scene.add(new T.AmbientLight('#f5e0d8',.35));
 const perspective=new JourneyPerspective(camera,{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches}),headingVector=new T.Vector3();
 const light=new T.PointLight('#fff4e8',1.8,.18,0);camera.add(light);light.position.set(0,0,0);
 const environment=new JourneyEnvironment(scene,light,{reducedMotion:perspective.reducedMotion});
 map.hidden=!matchMedia('(min-width: 800px) and (min-height: 500px)').matches;find('.journey-map-toggle').setAttribute('aria-pressed',String(!map.hidden));
 const mapZoom=document.createElement('button');mapZoom.dataset.mapZoom='';mapZoom.textContent='확대';mapZoom.setAttribute('aria-label','위치도에서 현재 영역 확대');mapZoom.setAttribute('aria-pressed','false');map.querySelector('.journey-map-modes').append(mapZoom);
 const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;dialog.style.setProperty('--journey-header-height',stage.offsetTop+'px');renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();dirty=true;};observer=new ResizeObserver(resize);observer.observe(stage);resize();
 const blockedMessage='이 방향으로는 지나갈 수 없어요 · 방향을 바꾸거나 크기를 줄여보세요.';
 const feedback=(text,duration=0)=>{if(text!==lastFeedback){lastFeedback=text;find('.journey-feedback').textContent=text;}feedbackUntil=duration?performance.now()+duration:0;};
 const toggleHelp=value=>{if(value&&learning&&!learning.hidden)toggleLearning(false);help.hidden=!value;find('.journey-help-toggle').setAttribute('aria-expanded',String(value));controls?.clear();if(value&&document.pointerLockElement===canvas)document.exitPointerLock();if(!value)canvas.focus({preventScroll:true});};
 const currentPart=()=>asset?.manifest.parts.find(p=>p.id===asset.field.region(camera.position.toArray()));
 const badge=document.createElement('button');badge.className='journey-clinical-badge';badge.hidden=true;stage.append(badge);
 const heading=document.createElement('span');heading.className='journey-heading';heading.setAttribute('aria-label','현재 시선의 해부학적 방향');heading.title='인체 기준 방향 · 이동 조작은 현재 화면 기준';stage.append(heading);
 const syncClinical=()=>{learning?.syncExample(clinical?.active);badge.hidden=!clinical?.active;badge.textContent=clinical?.active?clinicalExamples[clinical.active.id].english+' · 해제 ×':'';if(wayfinding){wayfinding.frame=null;wayfinding.update();}dirty=true;};
 const toggleLearning=value=>{if(!asset||loading)return;if(value){toggleHelp(false);learning.update(asset.manifest,currentPart(),clinical?.active);if(document.pointerLockElement===canvas)document.exitPointerLock();}learning.setOpen(value);find('.journey-location').setAttribute('aria-expanded',String(value));controls?.clear();if(!value)canvas.focus({preventScroll:true});};
 learning=new JourneyLearningPanel(dialog,{onToggle:toggleLearning,onExample:(example,amount)=>{
  if(!clinical||!controls)return;const result=clinical.apply(example,amount,currentPart(),controls.radius);syncClinical();if(!result.ok)feedback(result.message,4500);else feedback('');
 },onHighlight:id=>{if(wayfinding){wayfinding.enabled=true;hintControl.querySelector('input').checked=true;const visible=wayfinding.highlight(id);feedback(visible?'연결 위치를 표시했어요.':'연결부가 현재 시야 밖에 있어요. 직접 둘러보세요.',3500);}}});
 find('.journey-location').onclick=()=>toggleLearning(learning.hidden);badge.onclick=()=>{clinical?.reset();syncClinical();canvas.focus({preventScroll:true});};
 find('.journey-help-toggle').onclick=()=>toggleHelp(help.hidden);find('.journey-help-close').onclick=()=>toggleHelp(false);
 hintControl.querySelector('input').onchange=e=>{if(wayfinding){wayfinding.enabled=e.target.checked;wayfinding.update();}};
 find('.journey-map-toggle').onclick=e=>{map.hidden=!map.hidden;e.currentTarget.setAttribute('aria-pressed',String(!map.hidden));minimap?.draw();canvas.focus({preventScroll:true});};
 const syncSize=({immediate=false}={})=>{if(!controls)return;const scale=relativeSize(controls.radius);perspective.setRadius(controls.radius,{immediate});dialog.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.size)===scale)));dirty=true;};
 const setSize=scale=>{if(!controls||loading)return;const radius=JOURNEY_RADIUS*scale;if(controls.field.clearance(camera.position.toArray())<radius){feedback('이곳은 좁아서 크기를 늘릴 수 없어요. 넓은 곳으로 이동하세요.');return;}if(radius!==controls.radius){controls.radius=radius;syncSize();feedback(`몸 크기 ${scale===1?'1':scale===.5?'½':'¼'}× · 상대 공간 ${1/scale}×`,2500);}canvas.focus({preventScroll:true});};
 dialog.querySelectorAll('[data-size]').forEach(button=>button.onclick=()=>setSize(Number(button.dataset.size)));
 const updateLocation=()=>{if(!asset||!controls)return;camera.getWorldDirection(headingVector);const text='시선 · '+anatomicalHeading(headingVector);if(heading.textContent!==text)heading.textContent=text;const id=asset.field.region(camera.position.toArray()),part=asset.manifest.parts.find(p=>p.id===id);if(part&&id!==lastRegion){lastRegion=id;find('.journey-location strong').textContent=part.name;canvas.dataset.region=String(id);environment.setWidth(part.clearance);dirty=true;}canvas.dataset.position=camera.position.toArray().map(v=>v.toFixed(5)).join(',');};
 const place=id=>{const part=asset?.manifest.parts.find(p=>p.id===Number(id));if(!part||!controls)return;controls.clear();clinical?.reset();syncClinical();camera.position.fromArray(part.position);let direction;
  if(asset.manifest.key==='upper'){const forwardJunction=asset.manifest.junctions.find(j=>j.from===part.id),parentJunction=part.id>=15&&asset.manifest.junctions.find(j=>j.to===part.id),target=forwardJunction?.start||parentJunction?.start;direction=target?new T.Vector3(...target).sub(camera.position).toArray():part.id===1?[0,-.25,-1]:part.id===5?[.5,-1,-.2]:part.id===8?[.7,-.7,-.1]:part.id===9?[-.3,-1,-.1]:[0,-1,-.15];}
  else if(journeyKind(asset.manifest)==='circulation'){
   const outgoing=asset.manifest.flowConnections.find(([from])=>from===part.id),neighbor=outgoing?.[1]||asset.manifest.flowConnections.find(([,to])=>to===part.id)?.[0],junction=asset.manifest.junctions.find(j=>(j.from===part.id&&j.to===neighbor)||(j.to===part.id&&j.from===neighbor));
   const preferred=junction?(junction.from===part.id?junction.end:junction.start):asset.manifest.parts.find(p=>p.id===neighbor).position,visible=entranceHints(asset.manifest).filter(h=>h.regions.includes(part.id)).find(h=>visibleThroughLumen(asset.field,part.position,h.point));
   // At an explicit start, show a real visible entrance rather than aiming
   // through the curved chamber wall. Walking/annotation clicks never re-aim.
   const target=visibleThroughLumen(asset.field,part.position,preferred)?preferred:visible?.point||preferred;direction=new T.Vector3(...target).sub(camera.position).toArray();
  }
  else{const vein=journeyKind(asset.manifest)==='vein',junction=asset.manifest.junctions.find(j=>vein?j.to===part.id:j.from===part.id);
   const neighbor=asset.manifest.connections.find(([a,b])=>a===part.id||b===part.id),fallback=asset.manifest.parts.find(p=>p.id===(neighbor[0]===part.id?neighbor[1]:neighbor[0]));
   const target=junction?(vein?junction.start:junction.end):fallback.position;direction=new T.Vector3(...target).sub(camera.position).toArray();
   if(journeyKind(asset.manifest)==='airway'&&part.id===1){const fork=asset.manifest.junctions.filter(j=>j.from===1);const center=new T.Vector3();for(const j of fork)center.add(new T.Vector3(...j.start));direction=center.multiplyScalar(1/fork.length).sub(camera.position).toArray();}
  }
  // Only an explicit start-location change aims the camera. Center the two
  // entrances together so both fit a portrait viewport at the pharynx start.
  if(asset.manifest.key==='upper'&&part.id===2){const entrances=entranceHints(asset.manifest).filter(h=>['laryngeal-inlet','esophagus'].includes(h.id));if(entrances.length===2)direction=new T.Vector3(...entrances[0].point).add(new T.Vector3(...entrances[1].point)).multiplyScalar(.5).sub(camera.position).toArray();}
  if(part.lookDirection)direction=part.lookDirection;controls.aim(direction);const radius=fittingRadius(asset.field,part.position,controls.radius);if(radius)controls.radius=radius;syncSize();lastRegion=0;updateLocation();environment.setWidth(part.clearance,{immediate:true});minimap?.resetTrail();minimap?.draw();wayfinding?.update();boundaryGuide?.reset();dirty=true;feedback('');};
 async function changeWorld(key){
  const origin=asset&&controls?{position:camera.position.toArray(),yaw:controls.yaw,pitch:controls.pitch,radius:controls.radius,projection:minimap?.axis,frame:journeyFrame(asset.manifest)}:null;
  if(origin)savedViews.set(asset.manifest.key,origin);
  const token=++request;loading=true;mode.disabled=start.disabled=true;dialog.setAttribute('aria-busy','true');delete dialog.dataset.ready;controls?.clear();if(controls)controls.enabled=false;learning.setOpen(false);find('.journey-location').setAttribute('aria-expanded','false');
  message.hidden=false;message.textContent=asset?'현재 위치를 유지하며 다음 영역을 준비하고 있어요…':'내부 공간을 준비하고 있어요…';feedback('');
  try{
   const next=await loadJourney(key);if(closed||token!==request){next.dispose();return;}
   controls?.dispose();controls=null;wayfinding?.dispose();wayfinding=null;minimap?.dispose();minimap=null;boundaryGuide?.dispose();boundaryGuide=null;clinical?.dispose();clinical=null;badge.hidden=true;
   if(asset){scene.remove(asset.mesh);asset.dispose();}asset=next;scene.add(asset.mesh);lastRegion=0;dirty=true;
   clinical=new JourneyClinicalLayer(asset,scene,camera);
   controls=new JourneyControls(camera,canvas,{field:clinical.field,radius:['upper','airways'].includes(key)?.0016:.0008,onChange:()=>dirty=true,onLookModeChange:mode=>feedback(mode==='off'?'시선 조작 해제 · 화면 클릭으로 다시 시작':'마우스로 둘러보기 · Esc로 해제',2500),onExit:()=>{if(!learning.hidden)toggleLearning(false);else if(!help.hidden)toggleHelp(false);else close();}});
   scene.background.set(journeyKind(asset.manifest)==='vein'?'#1b2936':'#2e1e24');scene.fog.color.set(journeyKind(asset.manifest)==='vein'?'#243744':'#35232a');
   find('.journey-notice').textContent=asset.manifest.notice;start.replaceChildren(...journeyStartGroups(asset.manifest).map(({label,parts})=>{const group=document.createElement('optgroup');group.label=label;group.append(...parts.map(p=>new Option(p.name,p.id)));return group;}));
   const sources=find('.journey-sources');sources.replaceChildren();
   for(const [label,url]of [[journeyFrame(asset.manifest)==='hra-united-male-v1.10'?'HRA · CC BY 4.0':'Z-Anatomy · CC BY-SA 4.0',asset.manifest.source.url],...(asset.manifest.landmarkRegistration?[['BodyParts3D · DBCLS','https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html']]:[]),['해부학 참고',asset.manifest.references[0]]]){const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a);}
   const saved=savedViews.get(key),savedRadius=saved&&fittingRadius(asset.field,saved.position,saved.radius),near=key!=='circulation'&&!savedRadius&&origin&&origin.frame===journeyFrame(asset.manifest)?nearbyInterior(asset.field,origin.position,controls.radius):null;
   if(savedRadius||near){const pose=savedRadius?saved:origin;camera.position.fromArray(savedRadius?saved.position:near.position);controls.radius=savedRadius||controls.radius;controls.yaw=pose.yaw;controls.pitch=pose.pitch;controls.updateRotation();updateLocation();if(near)feedback('같은 인체 좌표의 가까운 '+(key==='upper'?'장관·기도':'혈관')+'으로 영역을 전환했어요.',3500);}
   else{place(journeyModes.find(m=>m.id===key).start);if(origin&&origin.frame!==journeyFrame(asset.manifest))feedback('다른 표본의 시작 위치에서 열었어요. 이전 영역의 시점은 보존됩니다.',3500);}
   start.value=String(asset.field.region(camera.position.toArray()));syncSize({immediate:true});
   minimap=new JourneyMiniMap(map,asset,camera,()=>canvas.focus({preventScroll:true}));if(saved?.projection){minimap.axis=saved.projection;minimap.draw();}wayfinding=new JourneyWayfinding(stage,{...asset,field:clinical.field},camera);wayfinding.enabled=hintControl.querySelector('input').checked;boundaryGuide=new JourneyBoundaryGuide(stage,asset,camera);
   environment.setWidth(currentPart()?.clearance||.02,{immediate:true});message.hidden=true;dialog.dataset.ready=key;canvas.focus({preventScroll:true});
  }catch(error){if(closed||token!==request)return;if(asset){mode.value=asset.manifest.key;dialog.dataset.ready=asset.manifest.key;}if(controls){controls.clear();controls.enabled=true;}message.replaceChildren(document.createTextNode('탐험 데이터를 불러오지 못했어요. '));const retry=document.createElement('button');retry.textContent='다시 시도';retry.onclick=()=>changeWorld(key);message.append(retry);if(asset){const dismiss=document.createElement('button');dismiss.textContent='계속 보기';dismiss.onclick=()=>{message.hidden=true;canvas.focus({preventScroll:true});};message.append(dismiss);}console.error(error);}
  finally{if(!closed&&token===request){loading=false;mode.disabled=start.disabled=false;dialog.removeAttribute('aria-busy');}}
 }
 mode.onchange=()=>{toggleHelp(false);changeWorld(mode.value);};start.onchange=()=>{place(start.value);toggleHelp(false);canvas.focus({preventScroll:true});};
 // Independent touch pointers allow looking and moving at the same time.
 const stick=find('.journey-stick'),knob=stick.querySelector('span');let stickId=null;
 const moveStick=e=>{if(e.pointerId!==stickId||!controls)return;const r=stick.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width*.32),y=(e.clientY-r.top-r.height/2)/(r.height*.32),length=Math.max(1,Math.hypot(x,y));controls.axes[0]=x/length;controls.axes[1]=y/length;knob.style.transform=`translate(${x/length*28}px,${y/length*28}px)`;};
 listen(stick,'pointerdown',e=>{if(stickId!==null)return;e.preventDefault();stickId=e.pointerId;stick.setPointerCapture(e.pointerId);moveStick(e);});listen(stick,'pointermove',moveStick);
 const resetStick=e=>{if(e&&stickId!==e.pointerId)return;stickId=null;knob.style.transform='';if(controls){controls.axes[0]=controls.axes[1]=0;}};for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(stick,event,resetStick);
 dialog.querySelectorAll('[data-lift]').forEach(button=>{listen(button,'pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);if(controls)controls.axes[2]=Number(button.dataset.lift);});for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(button,event,()=>{if(controls)controls.axes[2]=0;});});
 listen(dialog,'focusin',e=>{if(e.target!==canvas)controls?.clear();});listen(window,'blur',()=>resetStick());
 const frame=now=>{if(closed)return;frameId=requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000);last=now;if(document.hidden)return;if(perspective.update(dt)){dirty=true;wayfinding?.update();}if(environment.update(dt))dirty=true;if(!loading&&help.hidden&&learning.hidden&&controls){controls.step(dt);if(now-lastHud>100){updateLocation();minimap?.draw();wayfinding?.update();if(feedbackUntil&&now>feedbackUntil)feedback('');if(boundaryGuide?.update())feedback('');else if(controls.blocked)feedback(blockedMessage);else if(lastFeedback===blockedMessage)feedback('');lastHud=now;}}if(dirty){renderer.render(scene,camera);dirty=false;}};
 const visibility=()=>{controls?.clear();resetStick();last=performance.now();dirty=true;};listen(document,'visibilitychange',visibility);frameId=requestAnimationFrame(frame);
 mode.value=journeyModes.some(item=>item.id===initialMode)?initialMode:'upper';await changeWorld(mode.value);
}
