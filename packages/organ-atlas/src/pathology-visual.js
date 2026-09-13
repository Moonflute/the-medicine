// Lightweight explanatory sections, separate from the anatomical source meshes.
const supported={dilated:['Left ventricle','심실강 확장 · 수축 감소','https://www.nhlbi.nih.gov/health/cardiomyopathy/types'],pneumonia:['Alveoli','폐포 내 액체 축적','https://www.nhlbi.nih.gov/health/pneumonia'],hydronephrosis:['Renal pelvis & calyces','신우·신배 확장','https://medlineplus.gov/ency/article/000506.htm']};
function section(id,t){
 if(id==='dilated')return `<ellipse cx="60" cy="67" rx="40" ry="49" fill="#cf9189"/><ellipse class="physiology-pulse" style="--contraction:${1-(.12-.085*t)}" cx="60" cy="67" rx="${22+12*t}" ry="${33+10*t}" fill="#a94f65"/><path d="M49 20V8M69 20V8" stroke="#80aaa7" stroke-width="10"/>`;
 if(id==='pneumonia')return [[38,49],[80,49],[59,88]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="23" fill="#edf5f6" stroke="#c98f87" stroke-width="5"/><path d="M${x-20} ${y+12-25*t} Q${x} ${y+6-25*t} ${x+20} ${y+12-25*t} A22 22 0 0 1 ${x-20} ${y+12-25*t}" fill="#d6b776" opacity="${t*.9}"/>`).join('');
 return `<path d="M68 17C21 2 10 56 21 94C35 132 80 121 87 96C93 76 64 76 71 58C97 38 91 22 68 17Z" fill="#c78d84"/><path d="M49 39L66 60L43 70M66 60L47 98M66 60L80 76L84 119" fill="none" stroke="#f4dba7" stroke-width="${6+13*t}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
export function renderPathologyVisual(host,{id,intensity=.65,normal=false,playing=false,speed=1,onLocate}){
 host.replaceChildren();const config=supported[id];host.hidden=!config;if(!config)return;
 host.className='pathology-visual';host.dataset.scenario=id;host.dataset.playing=String(playing);host.style.setProperty('--cycle',(1.2/speed)+'s');
 const title=document.createElement('strong');title.textContent=config[0];host.append(title);
 const t=normal?0:Math.max(0,Math.min(1,intensity));const pair=document.createElement('div');pair.className='pathology-comparison';
 for(const [label,value]of [['정상',0],[normal?'정상 비교':'병태',t]]){const card=document.createElement('div');card.innerHTML=`<svg viewBox="0 0 120 140" role="img" aria-label="${config[0]} ${label} 개념 단면"><ellipse cx="60" cy="127" rx="48" ry="8" fill="#dfe7eb"/>${section(id,value)}</svg>`;const caption=document.createElement('span');caption.textContent=label;card.append(caption);pair.append(card)}host.append(pair);
 const description=document.createElement('p');description.textContent=config[1];host.append(description);
 const locate=document.createElement('button');locate.textContent='모델에서 병변 위치 보기';locate.onclick=onLocate;host.append(locate);
 const note=document.createElement('small');note.textContent='기전 설명용 단면 · 크기와 변화량은 임상 측정값이 아닙니다.';host.append(note);
 const source=document.createElement('a');source.href=config[2];source.target='_blank';source.rel='noopener noreferrer';source.textContent='의학적 근거 ↗';host.append(source);
}
