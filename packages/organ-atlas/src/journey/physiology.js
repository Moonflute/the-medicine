import * as T from 'three';

// Educational timing only. Pressure, ejection fraction and patient heart rate
// are not inferred from a static source surface.
export function cardiacPhase(seconds){const t=(seconds% .8)/.8;return t<.5?{id:'filling',label:'심실 충만',av:true,sl:false}:t<.625?{id:'atrial',label:'심방 수축',av:true,sl:false}:t<.6875?{id:'contraction',label:'등용적 수축',av:false,sl:false}:t<.9375?{id:'ejection',label:'심실 박출',av:false,sl:true}:{id:'relaxation',label:'등용적 이완',av:false,sl:false};}
export function flowActivity(manifest,path,seconds){
 if(path.kind==='airway'){const phase=seconds%5;return {speed:phase<2?1:-.67,label:phase<2?'흡기':'호기'};}
 if(path.kind==='urinary')return {speed:.25+1.75*Math.max(0,Math.sin(seconds*Math.PI*2/4))**6,label:'소변 이동 파동'};
 if(manifest.kind==='circulation'){
  const valve=manifest.junctions.find(j=>j.valve&&(j.from===path.from&&j.to===path.to||j.from===path.to&&j.to===path.from))?.valve;
  if(valve){const phase=cardiacPhase(seconds),av=/Tricuspid|Mitral/.test(valve.name);return {speed:(av?phase.av:phase.sl)?1.5:0,label:phase.label};}
 }
 return {speed:1,label:''};
}
export class JourneyPhysiology{
 constructor(asset,scene){this.asset=asset;this.enabled=false;this.seconds=0;this.last=0;this.phase=null;this.root=new T.Group();this.root.visible=false;scene.add(this.root);this.rings=[];
  for(const j of asset.manifest.junctions.filter(j=>j.valve)){
   const g=new T.TorusGeometry(j.valve.radius,.00022,4,36),material=new T.MeshBasicMaterial({color:'#9caaac'}),mesh=new T.Mesh(g,material);mesh.position.fromArray(j.valve.center);const axis=new T.Vector3(...j.end).sub(new T.Vector3(...j.start)).normalize();mesh.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),axis);this.root.add(mesh);this.rings.push({mesh,av:/Tricuspid|Mitral/.test(j.valve.name)});
  }
 }
 update(now,active){const visible=this.enabled&&active;let changed=this.root.visible!==visible;this.root.visible=visible;if(!visible){this.last=now;return changed;}const dt=this.last?Math.min(.08,(now-this.last)/1000):0;this.last=now;this.seconds+=dt;const phase=cardiacPhase(this.seconds);if(this.phase!==phase.id){this.phase=phase.id;for(const r of this.rings){const open=r.av?phase.av:phase.sl;r.mesh.material.color.set(open?'#a9e1c6':'#b5916b');r.mesh.scale.setScalar(open?1:.94);}changed=true;}return changed;}
 label(part){if(!this.enabled)return '';if(part?.kind==='heart')return cardiacPhase(this.seconds).label+' · 주기 표식';if(part?.system==='respiratory')return (this.seconds%5<2?'흡기':'호기')+' · 흐름 예시';if(part?.kind==='urinary')return '소변 이동 파동 · 학습용';return '';}
 dispose(){for(const r of this.rings){r.mesh.geometry.dispose();r.mesh.material.dispose();}this.root.removeFromParent();}
}
