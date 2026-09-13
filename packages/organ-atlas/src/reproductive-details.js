import * as T from 'three';import{ConvexGeometry}from 'three/addons/geometries/ConvexGeometry.js';import{mergeGeometries}from 'three/addons/utils/BufferGeometryUtils.js';import{cutawayLayer}from './endocrine-details.js';
// Schematic teaching cutaway: three representative lobules and four efferent
// ductules, not the counts or dimensions of a specimen. +Y superior, -Z posterior.
export function addTestisDetail(add){
 const v=p=>new T.Vector3(...p),paths={};
 function part(id,label,geometry,color,opacity=1){const m=add(id,label,geometry,color,opacity);m.userData.detail.englishLabel=label;return m}
 function tubeGeometry(points,r=.025,segments){return new T.TubeGeometry(new T.CatmullRomCurve3(points.map(v)),segments||Math.max(16,points.length*5),r,7,false)}
 function tubes(id,label,lines,r,color,opacity=1){const geometries=lines.map(p=>tubeGeometry(p,r));const g=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());return part(id,label,g,color,opacity)}
 const capsule=part('tunica-albuginea','Tunica albuginea',cutawayLayer(1,.955,{rx:.78,ry:1.15,rz:.55,curve:0}),'#dfd2b7',.32);capsule.userData.detail.section='anterior half removed';
 const median=part('mediastinum-testis','Mediastinum testis',new T.SphereGeometry(1,20,14),'#ceb79b',.22);median.position.set(.34,.10,-.43);median.scale.set(.14,.72,.08);
 const rete=[];for(const x of [.28,.36,.44])rete.push([[x,-.55,-.43],[x,0,-.43],[x,.72,-.43]]);for(const y of [-.55,-.3,0,.3,.72])rete.push([[.28,y,-.43],[.44,y,-.43]]);tubes('rete-testis','Rete testis',rete,.017,'#b39b7b');
 for(let i=0;i<3;i++){
  const cy=(1-i)*.50;const points=[[-.62,cy-.21,0],[-.62,cy+.21,0],[.25,cy-.20,0],[.25,cy+.20,0],[-.58,cy-.2,-.3],[-.58,cy+.2,-.3],[.4,cy-.06,-.48],[.4,cy+.06,-.48]];
  const lobule=part('lobule-'+i,'Testicular lobule (representative '+(i+1)+')',new ConvexGeometry(points.map(v)),['#d6aaa0','#d2a399','#cf9b93'][i],.12);lobule.userData.detail.representative=true;
  const start=[.10,cy-.045,-.30],end=[.10,cy+.045,-.30],coil=[start];for(let j=0;j<=100;j++){const t=j/100*Math.PI*6;coil.push([-.44+.50*j/100+.035*Math.sin(2*t),cy+.125*Math.cos(t),-.12+.065*Math.sin(t)])}coil.push(end);paths['seminiferous-'+i]=coil;
  const mesh=tubes('seminiferous-'+i,'Seminiferous tubule (representative '+(i+1)+')',[coil],.023,'#c38b81');mesh.userData.detail.representative=true;
  const straight=[[start,[.19,cy-.045,-.38],[.28,cy-.045,-.43]],[end,[.19,cy+.045,-.38],[.28,cy+.045,-.43]]];paths['straight-'+i]=straight;tubes('straight-'+i,'Straight tubules (tubuli recti)',straight,.019,'#c4ad83');
 }
 const septa=[];for(const y of [-.25,.25])septa.push(new ConvexGeometry([[-.56,y-.012,0],[-.56,y+.012,0],[.33,y-.012,0],[.33,y+.012,0],[.40,y-.012,-.47],[.40,y+.012,-.47]].map(v)));const septaGeometry=mergeGeometries(septa);septa.forEach(g=>g.dispose());part('septula-testis','Septula testis (representative partitions)',septaGeometry,'#dfccb0',.35);
 const headStart=[.42,1.06,-.36],headEnd=[.76,.78,-.42],bodyEnd=[.60,-.85,-.37],tailEnd=[.62,-1.0,-.47];
 const head=[headStart,[.64,1.03,-.36],headEnd],body=[headEnd,[.81,.2,-.48],[.75,-.40,-.46],bodyEnd],tail=[bodyEnd,[.42,-1.10,-.3],tailEnd],deferens=[tailEnd,[.99,-.74,-.58],[1.08,.75,-.62],[1.02,1.38,-.50]];
 tubes('epididymis-head','Head of epididymis',[head],.15,'#c5aa7f',.32);tubes('epididymis-body','Body of epididymis',[body],.10,'#c5aa7f',.32);tubes('epididymis-tail','Tail of epididymis',[tail],.12,'#c5aa7f',.32);
 const efferent=[];for(let i=0;i<4;i++){const from=[.28+i*.053,.72,-.43];efferent.push([from,[.26+i*.09,.88,-.35],headStart])}paths.efferent=efferent;tubes('efferent-ductules','Efferent ductules (representative)',efferent,.017,'#bda37b');
 // One continuous duct through the three epididymal regions. Coiling is deliberately abbreviated.
 const route=new T.CatmullRomCurve3([...head,...body.slice(1),...tail.slice(1)].map(v)),frames=route.computeFrenetFrames(600,false),duct=[];for(let i=0;i<=600;i++){const u=i/600,p=route.getPointAt(u),t=u*Math.PI*70,envelope=Math.sin(Math.PI*u);p.addScaledVector(frames.normals[i],Math.cos(t)*.045*envelope).addScaledVector(frames.binormals[i],Math.sin(t)*.045*envelope);duct.push(p.toArray())}duct[0]=headStart;duct[duct.length-1]=tailEnd;paths.epididymalDuct=duct;paths.deferens=deferens;
 part('epididymal-duct','Duct of epididymis (abbreviated coils)',tubeGeometry(duct,.013,600),'#a68a62');tubes('ductus-deferens','Ductus deferens',[deferens],.055,'#baa184');
 return {paths,sequence:[{label:'Seminiferous tubules',parts:['seminiferous-0','seminiferous-1','seminiferous-2']},{label:'Straight seminiferous tubules',parts:['straight-0','straight-1','straight-2']},{label:'Rete testis',parts:['rete-testis']},{label:'Efferent ductules',parts:['efferent-ductules']},{label:'Duct of epididymis',parts:['epididymal-duct']},{label:'Ductus deferens',parts:['ductus-deferens']}],notice:'백막·고환소엽·정세관·직세관·고환그물·수출소관·부고환 머리/몸통/꼬리·정관의 연결을 설명하는 모식 단면입니다. 소엽 3개와 수출소관 4개는 대표 예시이며 실제 수·직경·관의 길이를 재현하지 않습니다. 혈관·신경·세포층과 고환집막은 미포함입니다.'};
}

