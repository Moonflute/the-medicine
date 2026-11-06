import * as T from 'three';
import {loadJourney} from './assets.js';
import {JourneyControls} from './controls.js';
import {JourneyWayfinding,entranceHints} from './wayfinding.js';
import {JourneyMiniMap} from './minimap.js';
import {JourneyBoundaryGuide} from './boundaries.js';
import {nearbyInterior,fittingRadius} from './context.js';
import {journeyModes,journeyStartGroups,clinicalExamples} from './learning-data.js';
import {JourneyClinicalLayer} from './clinical-layer.js';
import {JourneyLearningPanel} from './learning-panel.js';
import './viewer.css';

// Loaded only on entry. The atlas keeps its camera/selection and pauses its GPU.
export async function openJourney({onClose=()=>{}}={}){
 const dialog=document.createElement('dialog');dialog.className='journey';dialog.setAttribute('aria-label','1인칭 내부 탐험');
 dialog.innerHTML=`<div class="journey-top"><button class="journey-back" aria-label="해부모형으로 돌아가기">← <span>해부모형</span></button><button class="journey-location" aria-label="현재 구조 설명과 병태" aria-expanded="false" aria-controls="journey-learning"><small>INTERNAL EXPLORER · 재구성 모델</small><strong aria-live="polite">준비 중</strong><span class="journey-info-mark" aria-hidden="true">ⓘ</span></button><select class="journey-mode" aria-label="탐험 영역">${journeyModes.map(m=>`<option value="${m.id}">${m.label}</option>`).join('')}</select></div>
 <div class="journey-stage"><div class="journey-message" role="status">내부 공간을 준비하고 있어요…</div><div class="journey-reticle" aria-hidden="true"></div><div class="journey-feedback" role="status"></div><div class="journey-map" hidden><div class="journey-map-modes" role="group" aria-label="위치도 방향"><button data-projection="side">옆</button><button data-projection="front">앞</button></div><canvas width="240" height="380" aria-label="현재 위치와 시선 방향"></canvas><span class="journey-map-caption">뒤 P · 앞 A</span></div>
 <div class="journey-touch"><div class="journey-stick" role="group" aria-label="전후·좌우 이동"><span></span><i>이동</i></div><div class="journey-height"><button data-lift="1" aria-label="위로 이동">↑</button><button data-lift="-1" aria-label="아래로 이동">↓</button></div></div></div>
 <div class="journey-bottom"><div class="journey-size" role="group" aria-label="탐험 크기"><span>크기</span><button data-size="1" aria-pressed="true">1×</button><button data-size="0.5" aria-pressed="false">½×</button><button data-size="0.25" aria-pressed="false">¼×</button></div><button class="journey-map-toggle" aria-pressed="false">위치</button><button class="journey-help-toggle" aria-expanded="false" aria-controls="journey-help">조작 · 안내</button></div>
 <section id="journey-help" class="journey-help" hidden><div><b>자유롭게 이동하기</b><button class="journey-help-close" aria-label="안내 닫기">×</button></div><p><kbd>W A S D</kbd> 전후·좌우 이동<br><kbd>Q / E</kbd> 아래·위 이동 · <kbd>Shift</kbd> 빠르게<br>화면 드래그 / 방향키로 둘러보기<br>더블클릭하면 마우스로 시선 고정 · Esc로 해제</p><p>터치: 왼쪽 조이스틱으로 이동, 화면을 드래그해 둘러보세요. 오른쪽 ↑↓로 높이를 바꿉니다.</p><label>시작 위치 <select class="journey-start" aria-label="탐험 시작 위치"></select></label><p class="journey-notice"></p><p>처음 혈관으로 바꾸면 같은 인체 좌표의 가까운 내부 위치로 전환합니다. 다시 돌아오면 이전 시점을 복원합니다. 소화관과 혈관 사이에 실제 통로를 만든 것은 아닙니다. 제공 범위의 끝에서는 더 진행할 수 없습니다.</p><div class="journey-sources"></div></section>`;
 const previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';document.body.append(dialog);dialog.showModal();
 const find=s=>dialog.querySelector(s),stage=find('.journey-stage'),message=find('.journey-message'),mode=find('.journey-mode'),start=find('.journey-start'),map=find('.journey-map'),help=find('.journey-help');
 const hintControl=document.createElement('label');hintControl.className='journey-hint-control';hintControl.innerHTML='입구 · 구조 이름 표시 <input type="checkbox" checked>';help.insertBefore(hintControl,find('.journey-notice'));
 let renderer,controls,asset,closed=false,request=0,dirty=true,last=0,lastHud=0,lastRegion=0,lastFeedback='',feedbackUntil=0,observer,frameId=0,wayfinding,minimap,boundaryGuide,clinical,learning;
 const savedViews=new Map();
 const cleanups=[],listen=(target,event,fn)=>{target.addEventListener(event,fn);cleanups.push(()=>target.removeEventListener(event,fn));};
 const close=()=>{if(closed)return;closed=true;request++;cancelAnimationFrame(frameId);controls?.dispose();wayfinding?.dispose();minimap?.dispose();boundaryGuide?.dispose();clinical?.dispose();learning?.dispose();observer?.disconnect();asset?.dispose();renderer?.dispose();renderer?.forceContextLoss();cleanups.forEach(fn=>fn());dialog.close();dialog.remove();document.documentElement.style.overflow=previousOverflow;onClose();};
 find('.journey-back').onclick=close;listen(dialog,'cancel',e=>{e.preventDefault();if(document.pointerLockElement)return;if(learning&&!learning.hidden){toggleLearning(false);return;}if(!help.hidden){toggleHelp(false);return;}close();});listen(window,'pagehide',e=>{if(!e.persisted)close();});
 try{renderer=new T.WebGLRenderer({antialias:true,alpha:false});}catch(error){message.textContent='이 환경에서는 3D 탐험을 열 수 없어요. 해부모형으로 돌아가 주세요.';console.error(error);return;}
 const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('aria-label','1인칭 탐험. W A S D로 이동, Q E로 상하 이동, 드래그 또는 방향키로 시선 회전');stage.prepend(canvas);
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 const scene=new T.Scene();scene.background=new T.Color('#2e1e24');scene.fog=new T.FogExp2('#35232a',9);
 const camera=new T.PerspectiveCamera(76,1,.00012,1.4);scene.add(camera);scene.add(new T.AmbientLight('#f5e0d8',.35));
 const light=new T.PointLight('#fff4e8',1.8,.18,0);camera.add(light);light.position.set(0,0,0);
 const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;dialog.style.setProperty('--journey-header-height',stage.offsetTop+'px');renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();dirty=true;};observer=new ResizeObserver(resize);observer.observe(stage);resize();
 const feedback=(text,duration=0)=>{if(text!==lastFeedback){lastFeedback=text;find('.journey-feedback').textContent=text;}feedbackUntil=duration?performance.now()+duration:0;};
 const toggleHelp=value=>{if(value&&learning&&!learning.hidden)toggleLearning(false);help.hidden=!value;find('.journey-help-toggle').setAttribute('aria-expanded',String(value));controls?.clear();if(value&&document.pointerLockElement===canvas)document.exitPointerLock();if(!value)canvas.focus({preventScroll:true});};
 const currentPart=()=>asset?.manifest.parts.find(p=>p.id===asset.field.region(camera.position.toArray()));
 const badge=document.createElement('button');badge.className='journey-clinical-badge';badge.hidden=true;stage.append(badge);
 const syncClinical=()=>{learning?.syncExample(clinical?.active);badge.hidden=!clinical?.active;badge.textContent=clinical?.active?clinicalExamples[clinical.active.id].english+' · 해제 ×':'';if(wayfinding){wayfinding.frame=null;wayfinding.update();}dirty=true;};
 const toggleLearning=value=>{if(!asset)return;if(value){toggleHelp(false);learning.update(asset.manifest,currentPart(),clinical?.active);if(document.pointerLockElement===canvas)document.exitPointerLock();}learning.setOpen(value);find('.journey-location').setAttribute('aria-expanded',String(value));controls?.clear();if(!value)canvas.focus({preventScroll:true});};
 learning=new JourneyLearningPanel(dialog,{onToggle:toggleLearning,onExample:(example,amount)=>{
  if(!clinical||!controls)return;const result=clinical.apply(example,amount,currentPart(),controls.radius);syncClinical();if(!result.ok)feedback(result.message,4500);else feedback('');
 },onHighlight:id=>{if(wayfinding){wayfinding.enabled=true;hintControl.querySelector('input').checked=true;const visible=wayfinding.highlight(id);feedback(visible?'연결 위치를 표시했어요.':'연결부가 현재 시야 밖에 있어요. 직접 둘러보세요.',3500);}}});
 find('.journey-location').onclick=()=>toggleLearning(learning.hidden);badge.onclick=()=>{clinical?.reset();syncClinical();canvas.focus({preventScroll:true});};
 find('.journey-help-toggle').onclick=()=>toggleHelp(help.hidden);find('.journey-help-close').onclick=()=>toggleHelp(false);
 hintControl.querySelector('input').onchange=e=>{if(wayfinding){wayfinding.enabled=e.target.checked;wayfinding.update();}};
 find('.journey-map-toggle').onclick=e=>{map.hidden=!map.hidden;e.currentTarget.setAttribute('aria-pressed',String(!map.hidden));minimap?.draw();canvas.focus({preventScroll:true});};
 const setSize=scale=>{if(!controls)return;const radius=.0016*scale;if(controls.field.clearance(camera.position.toArray())<radius){feedback('이곳은 좁아서 크기를 늘릴 수 없어요. 넓은 곳으로 이동하세요.');return;}controls.radius=radius;dialog.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.size)===scale)));feedback('');canvas.focus({preventScroll:true});};
 dialog.querySelectorAll('[data-size]').forEach(button=>button.onclick=()=>setSize(Number(button.dataset.size)));
 const updateLocation=()=>{if(!asset||!controls)return;const id=asset.field.region(camera.position.toArray()),part=asset.manifest.parts.find(p=>p.id===id);if(part&&id!==lastRegion){lastRegion=id;find('.journey-location strong').textContent=part.name;canvas.dataset.region=String(id);const width=Math.max(.003,part.clearance);scene.fog.density=T.MathUtils.clamp(.28/width,8,55);light.distance=T.MathUtils.clamp(width*7,.025,.18);dirty=true;}canvas.dataset.position=camera.position.toArray().map(v=>v.toFixed(5)).join(',');};
 const place=id=>{const part=asset?.manifest.parts.find(p=>p.id===Number(id));if(!part||!controls)return;controls.clear();clinical?.reset();syncClinical();camera.position.fromArray(part.position);let direction;
  if(asset.manifest.key==='upper'){const forwardJunction=asset.manifest.junctions.find(j=>j.from===part.id);direction=forwardJunction?new T.Vector3(...forwardJunction.start).sub(camera.position).toArray():part.id===1?[0,-.25,-1]:part.id===5?[.5,-1,-.2]:part.id===8?[.7,-.7,-.1]:part.id===9?[-.3,-1,-.1]:[0,-1,-.15];}
  else{const neighbors=asset.manifest.connections.filter(([a,b])=>a===part.id||b===part.id).map(([a,b])=>asset.manifest.parts[(a===part.id?b:a)-1]);direction=new T.Vector3(...neighbors[0].position).sub(camera.position).toArray();}
  // Only an explicit start-location change aims the camera. Center the two
  // entrances together so both fit a portrait viewport at the pharynx start.
  if(asset.manifest.key==='upper'&&part.id===2){const entrances=entranceHints(asset.manifest).filter(h=>['laryngeal-inlet','esophagus'].includes(h.id));if(entrances.length===2)direction=new T.Vector3(...entrances[0].point).add(new T.Vector3(...entrances[1].point)).multiplyScalar(.5).sub(camera.position).toArray();}
  if(part.lookDirection)direction=part.lookDirection;controls.aim(direction);const radius=fittingRadius(asset.field,part.position,controls.radius);if(radius)controls.radius=radius;dialog.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.size)===controls.radius/.0016)));lastRegion=0;updateLocation();minimap?.draw();wayfinding?.update();boundaryGuide?.reset();dirty=true;feedback('');};
 async function changeWorld(key){
  const origin=asset&&controls?{position:camera.position.toArray(),yaw:controls.yaw,pitch:controls.pitch,radius:controls.radius,projection:minimap?.axis}:null;
  if(origin)savedViews.set(asset.manifest.key,origin);
  const token=++request;delete dialog.dataset.ready;controls?.dispose();controls=null;wayfinding?.dispose();wayfinding=null;minimap?.dispose();minimap=null;boundaryGuide?.dispose();boundaryGuide=null;clinical?.dispose();clinical=null;badge.hidden=true;learning.setOpen(false);find('.journey-location').setAttribute('aria-expanded','false');
  if(asset){scene.remove(asset.mesh);asset.dispose();asset=null;}
  lastRegion=0;find('.journey-location strong').textContent='준비 중';message.hidden=false;message.textContent='내부 공간을 준비하고 있어요…';start.replaceChildren();feedback('');dirty=true;
  try{
   const next=await loadJourney(key);if(closed||token!==request){next.dispose();return;}asset=next;scene.add(asset.mesh);
   clinical=new JourneyClinicalLayer(asset,scene,camera);
   controls=new JourneyControls(camera,canvas,{field:clinical.field,radius:key==='upper'?.0016:.0008,onChange:()=>dirty=true,onExit:()=>{if(!learning.hidden)toggleLearning(false);else if(!help.hidden)toggleHelp(false);else close();}});
   scene.background.set(key==='veins'?'#1b2936':'#2e1e24');scene.fog.color.set(key==='veins'?'#243744':'#35232a');
   find('.journey-notice').textContent=asset.manifest.notice;start.replaceChildren(...journeyStartGroups(asset.manifest).map(({label,parts})=>{const group=document.createElement('optgroup');group.label=label;group.append(...parts.map(p=>new Option(p.name,p.id)));return group;}));
   const sources=find('.journey-sources');sources.replaceChildren();
   for(const [label,url]of [['Z-Anatomy · CC BY-SA 4.0','https://github.com/Z-Anatomy/Models-of-human-anatomy'],...(asset.manifest.landmarkRegistration?[['BodyParts3D · DBCLS','https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html']]:[]),['OpenStax · 해부학 참고',asset.manifest.references[0]]]){const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a);}
   const saved=savedViews.get(key),savedRadius=saved&&fittingRadius(asset.field,saved.position,saved.radius),near=!savedRadius&&origin?nearbyInterior(asset.field,origin.position,controls.radius):null;
   if(savedRadius||near){const pose=savedRadius?saved:origin;camera.position.fromArray(savedRadius?saved.position:near.position);controls.radius=savedRadius||controls.radius;controls.yaw=pose.yaw;controls.pitch=pose.pitch;controls.updateRotation();updateLocation();if(near)feedback('같은 인체 좌표의 가까운 '+(key==='upper'?'장관·기도':'혈관')+'으로 영역을 전환했어요.',3500);}
   else place(journeyModes.find(m=>m.id===key).start);
   start.value=String(asset.field.region(camera.position.toArray()));dialog.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.size)===controls.radius/.0016)));
   minimap=new JourneyMiniMap(map,asset,camera,()=>canvas.focus({preventScroll:true}));if(saved?.projection){minimap.axis=saved.projection;minimap.draw();}wayfinding=new JourneyWayfinding(stage,{...asset,field:clinical.field},camera);wayfinding.enabled=hintControl.querySelector('input').checked;boundaryGuide=new JourneyBoundaryGuide(stage,asset,camera);
   message.hidden=true;dialog.dataset.ready=key;canvas.focus({preventScroll:true});
  }catch(error){if(closed||token!==request)return;message.replaceChildren(document.createTextNode('탐험 데이터를 불러오지 못했어요. '));const retry=document.createElement('button');retry.textContent='다시 시도';retry.onclick=()=>changeWorld(key);message.append(retry);console.error(error);}
 }
 mode.onchange=()=>{toggleHelp(false);changeWorld(mode.value);};start.onchange=()=>{place(start.value);toggleHelp(false);canvas.focus({preventScroll:true});};
 // Independent touch pointers allow looking and moving at the same time.
 const stick=find('.journey-stick'),knob=stick.querySelector('span');let stickId=null;
 const moveStick=e=>{if(e.pointerId!==stickId||!controls)return;const r=stick.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width*.32),y=(e.clientY-r.top-r.height/2)/(r.height*.32),length=Math.max(1,Math.hypot(x,y));controls.axes[0]=x/length;controls.axes[1]=y/length;knob.style.transform=`translate(${x/length*28}px,${y/length*28}px)`;};
 listen(stick,'pointerdown',e=>{if(stickId!==null)return;e.preventDefault();stickId=e.pointerId;stick.setPointerCapture(e.pointerId);moveStick(e);});listen(stick,'pointermove',moveStick);
 const resetStick=e=>{if(e&&stickId!==e.pointerId)return;stickId=null;knob.style.transform='';if(controls){controls.axes[0]=controls.axes[1]=0;}};for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(stick,event,resetStick);
 dialog.querySelectorAll('[data-lift]').forEach(button=>{listen(button,'pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);if(controls)controls.axes[2]=Number(button.dataset.lift);});for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(button,event,()=>{if(controls)controls.axes[2]=0;});});
 listen(dialog,'focusin',e=>{if(e.target!==canvas)controls?.clear();});listen(window,'blur',()=>resetStick());
 const frame=now=>{if(closed)return;frameId=requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000);last=now;if(document.hidden)return;if(help.hidden&&learning.hidden&&controls){controls.step(dt);if(now-lastHud>100){updateLocation();minimap?.draw();wayfinding?.update();if(feedbackUntil&&now>feedbackUntil)feedback('');if(boundaryGuide?.update())feedback('');else if(controls.blocked)feedback('벽이나 병변에 닿았어요 · 방향을 바꾸거나 크기를 줄여보세요.');else if(lastFeedback.startsWith('벽'))feedback('');lastHud=now;}}if(dirty){renderer.render(scene,camera);dirty=false;}};
 const visibility=()=>{controls?.clear();resetStick();last=performance.now();dirty=true;};listen(document,'visibilitychange',visibility);frameId=requestAnimationFrame(frame);
 await changeWorld('upper');
}
