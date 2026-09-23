import * as T from 'three';

// A section cap is a homogeneous cut surface, not an inferred internal anatomy.
// Stencil capping only works predictably for closed, consistently oriented
// triangle surfaces. Anything else is deliberately left to normal clipping.
const topologyCache=new WeakMap();
const MAX_CAP_MESHES=16,MAX_CAP_TRIANGLES=150000,MAX_TOPOLOGY_AUDITS=32,MAX_TOPOLOGY_TRIANGLES=300000;

function geometryToken(geometry){
 const position=geometry?.getAttribute?.('position'),index=geometry?.getIndex?.();
 return `${position?.version??0}:${position?.count??0}:${index?.version??0}:${index?.count??0}:${geometry?.drawRange?.start??0}:${geometry?.drawRange?.count??Infinity}`;
}

function positionKey(attribute,index,tolerance){
 return `${Math.round(attribute.getX(index)/tolerance)},${Math.round(attribute.getY(index)/tolerance)},${Math.round(attribute.getZ(index)/tolerance)}`;
}

export function auditWatertightGeometry(geometry){
 const token=geometryToken(geometry),cached=topologyCache.get(geometry);if(cached?.token===token)return cached.result;
 const position=geometry?.getAttribute?.('position');
 const index=geometry?.getIndex?.();
 const elementCount=index?.count??position?.count??0;
 const result={watertight:false,reason:'missing-triangles',triangles:0,edges:0};
 const remember=value=>(topologyCache.set(geometry,{token,result:value}),value);
 if(!position||elementCount<3||elementCount%3!==0)return remember(result);
 const drawStart=geometry.drawRange?.start??0,drawCount=geometry.drawRange?.count??Infinity;
 if(drawStart!==0||(Number.isFinite(drawCount)&&drawCount<elementCount)){
  return remember({...result,reason:'partial-draw-range'});
 }
 geometry.computeBoundingBox();
 const diagonal=geometry.boundingBox?.getSize(new T.Vector3()).length()||1;
 const tolerance=Math.max(diagonal*1e-7,1e-9),vertices=new Map(),canonical=new Int32Array(position.count);let nextVertex=0;
 for(let i=0;i<position.count;i++){
  if(!Number.isFinite(position.getX(i))||!Number.isFinite(position.getY(i))||!Number.isFinite(position.getZ(i)))return remember({...result,reason:'non-finite-position'});
  const key=positionKey(position,i,tolerance);let id=vertices.get(key);
  if(id===undefined){id=nextVertex++;vertices.set(key,id);}canonical[i]=id;
 }
 const triangleCount=elementCount/3,faceParent=Int32Array.from({length:triangleCount},(_,i)=>i),findFace=i=>{let root=i;while(faceParent[root]!==root)root=faceParent[root];while(faceParent[i]!==i){const next=faceParent[i];faceParent[i]=root;i=next;}return root;},joinFaces=(a,b)=>{a=findFace(a);b=findFace(b);if(a!==b)faceParent[b]=a;};
 const edges=new Map(),at=i=>canonical[index?index.getX(i):i];let signedVolume6=0;
 for(let i=0;i<elementCount;i+=3){
  const triangle=i/3,a=at(i),b=at(i+1),c=at(i+2);
  if(a===undefined||b===undefined||c===undefined)return remember({...result,reason:'invalid-index',triangles:triangleCount,edges:edges.size});
  if(a===b||b===c||c===a)return remember({...result,reason:'degenerate-triangle',triangles:triangleCount,edges:edges.size});
  const ia=index?index.getX(i):i,ib=index?index.getX(i+1):i+1,ic=index?index.getX(i+2):i+2;
  const ax=position.getX(ia),ay=position.getY(ia),az=position.getZ(ia),bx=position.getX(ib),by=position.getY(ib),bz=position.getZ(ib),cx=position.getX(ic),cy=position.getY(ic),cz=position.getZ(ic);
  signedVolume6+=ax*(by*cz-bz*cy)+ay*(bz*cx-bx*cz)+az*(bx*cy-by*cx);
  for(const [from,to]of [[a,b],[b,c],[c,a]]){
   const lo=Math.min(from,to),hi=Math.max(from,to),key=`${lo}:${hi}`,direction=from===lo?1:-1,edge=edges.get(key)||{count:0,balance:0,triangle};
   if(edge.count)joinFaces(triangle,edge.triangle);edge.count++;edge.balance+=direction;edges.set(key,edge);
  }
 }
 for(const edge of edges.values())if(edge.count!==2||edge.balance!==0)return remember({...result,reason:edge.count===2?'inconsistent-winding':'open-or-nonmanifold',triangles:triangleCount,edges:edges.size});
 const faceComponents=new Set();for(let i=0;i<triangleCount;i++)faceComponents.add(findFace(i));
 if(faceComponents.size!==1)return remember({...result,reason:'multiple-surface-components',triangles:triangleCount,edges:edges.size});
 if(!Number.isFinite(signedVolume6)||Math.abs(signedVolume6)<=Math.max(diagonal**3*1e-9,1e-15))return remember({...result,reason:'zero-volume-surface',triangles:triangleCount,edges:edges.size});
 return remember({watertight:true,reason:'closed-oriented-surface',triangles:triangleCount,edges:edges.size});
}

function stencilMaterial(side,plane,operation){
 return new T.MeshBasicMaterial({
  colorWrite:false,depthWrite:false,depthTest:false,side,transparent:true,opacity:0,
  clippingPlanes:[plane],stencilWrite:true,stencilFunc:T.AlwaysStencilFunc,
  stencilFail:operation,stencilZFail:operation,stencilZPass:operation
 });
}

function visibleThrough(object,root){
 for(let current=object;current;current=current.parent){if(!current.visible)return false;if(current===root)return true;}
 return false;
}

function supportedSource(mesh){
 return mesh.isMesh&&!mesh.isSkinnedMesh&&!mesh.isInstancedMesh&&!Array.isArray(mesh.material)&&mesh.material?.color&&mesh.geometry?.getAttribute?.('position')&&!mesh.geometry.morphAttributes?.position?.length;
}

function planeCandidate(source,plane){
 source.geometry.computeBoundingSphere();const sphere=source.geometry.boundingSphere;if(!sphere)return null;
 const center=sphere.center.clone().applyMatrix4(source.matrixWorld),radius=sphere.radius*source.matrixWorld.getMaxScaleOnAxis();
 return Math.abs(plane.distanceToPoint(center))<=radius?{source,radius}:null;
}

export class SectionCapManager{
 constructor(scene){
  this.scene=scene;this.root=new T.Group();this.root.name='anatomical-section-caps';this.root.renderOrder=10000;this.root.visible=false;scene.add(this.root);
  this.planeGeometry=new T.PlaneGeometry(1,1);this.plane=new T.Plane(new T.Vector3(0,0,-1),0);this.sourcePlane=null;this.records=new Map();this.model=null;this.visibleCount=0;this.partIds=[];this.stats={active:0,eligible:0,fallback:0,limited:0,triangles:0};
 }
 createRecord(source,order){
  const backMaterial=stencilMaterial(T.BackSide,this.plane,T.IncrementWrapStencilOp),frontMaterial=stencilMaterial(T.FrontSide,this.plane,T.DecrementWrapStencilOp);
  const capMaterial=new T.MeshBasicMaterial({transparent:true,depthWrite:true,depthTest:true,side:T.DoubleSide,stencilWrite:true,stencilRef:0,stencilFunc:T.NotEqualStencilFunc,stencilFail:T.ReplaceStencilOp,stencilZFail:T.ReplaceStencilOp,stencilZPass:T.ReplaceStencilOp,toneMapped:true});
  const back=new T.Mesh(source.geometry,backMaterial),front=new T.Mesh(source.geometry,frontMaterial),cap=new T.Mesh(this.planeGeometry,capMaterial),base=10000+order*3;
  for(const [object,renderOrder]of [[back,base],[front,base+1],[cap,base+2]]){object.frustumCulled=false;object.renderOrder=renderOrder;object.userData.sectionCap=true;this.root.add(object);}
  back.name=`section-stencil-back:${source.name||source.uuid}`;front.name=`section-stencil-front:${source.name||source.uuid}`;cap.name=`section-cap:${source.name||source.uuid}`;cap.raycast=()=>{};back.raycast=()=>{};front.raycast=()=>{};cap.onAfterRender=renderer=>renderer.clearStencil();
  back.matrixAutoUpdate=false;front.matrixAutoUpdate=false;
  cap.userData={sectionCap:true,sourcePartId:source.userData.partId||'',representation:'homogeneous-section-cap',anatomicalDetail:false};
  return {source,geometryToken:geometryToken(source.geometry),back,front,cap,backMaterial,frontMaterial,capMaterial};
 }
 set({model,enabled,plane}){
  if(!enabled||!model||!plane){this.clear();return this.stats;}
  this.model=model;this.sourcePlane=plane;this.plane.copy(plane);this.root.visible=true;const nearby=[],candidates=[],nextSources=new Set();let fallback=0,limited=0,triangles=0,audits=0,auditedTriangles=0;
  model.traverse(source=>{
   if(!supportedSource(source)||!source.userData.partId||!visibleThrough(source,model)||!source.material.clippingPlanes?.includes(plane))return;
   const candidate=planeCandidate(source,plane);if(candidate)nearby.push(candidate);
  });
  nearby.sort((a,b)=>Number(!!b.source.userData.inspectionSelected)-Number(!!a.source.userData.inspectionSelected)||b.radius-a.radius);
  for(const {source}of nearby){
   const elements=source.geometry.getIndex()?.count??source.geometry.getAttribute('position')?.count??0,estimatedTriangles=elements/3;
   if(audits>=MAX_TOPOLOGY_AUDITS||estimatedTriangles>MAX_TOPOLOGY_TRIANGLES||auditedTriangles+estimatedTriangles>MAX_TOPOLOGY_TRIANGLES){fallback++;limited++;continue;}audits++;auditedTriangles+=estimatedTriangles;const audit=auditWatertightGeometry(source.geometry);
   if(!audit.watertight){fallback++;continue;}
   if(candidates.length>=MAX_CAP_MESHES||triangles+audit.triangles>MAX_CAP_TRIANGLES){fallback++;limited++;continue;}
   candidates.push(source);nextSources.add(source);triangles+=audit.triangles;
  }
  for(const [source,record]of this.records)if(!nextSources.has(source)){this.destroyRecord(record);this.records.delete(source);}
  candidates.forEach((source,index)=>{let record=this.records.get(source);if(record&&record.geometryToken!==geometryToken(source.geometry)){this.destroyRecord(record);this.records.delete(source);record=null;}if(!record){record=this.createRecord(source,index);this.records.set(source,record);}const base=10000+index*3;record.back.renderOrder=base;record.front.renderOrder=base+1;record.cap.renderOrder=base+2;});
  this.partIds=candidates.map(source=>source.userData.partId);this.stats={active:this.records.size,eligible:candidates.length,fallback,limited,triangles};this.update();return this.stats;
 }
 update(){
  if(!this.root.visible||!this.model)return;
  const unitZ=new T.Vector3(0,0,1),center=new T.Vector3();this.visibleCount=0;
  for(const record of this.records.values()){
   const {source,back,front,cap,backMaterial,frontMaterial,capMaterial}=record,material=source.material;
   const actuallyVisible=visibleThrough(source,this.model)&&material.visible!==false&&material.opacity>0;
   source.geometry.computeBoundingSphere();const sphere=source.geometry.boundingSphere;
   let intersects=actuallyVisible&&!!sphere;
   let radius=0;if(intersects){center.copy(sphere.center).applyMatrix4(source.matrixWorld);radius=sphere.radius*source.matrixWorld.getMaxScaleOnAxis();intersects=Math.abs(this.plane.distanceToPoint(center))<=radius;}
   back.visible=front.visible=cap.visible=intersects;if(!intersects)continue;this.visibleCount++;
   back.matrix.copy(source.matrixWorld);front.matrix.copy(source.matrixWorld);back.matrixWorldNeedsUpdate=true;front.matrixWorldNeedsUpdate=true;
   const clipping=material.clippingPlanes||[this.sourcePlane];backMaterial.clippingPlanes=clipping;frontMaterial.clippingPlanes=clipping;capMaterial.clippingPlanes=clipping.filter(item=>item!==this.sourcePlane);
   this.plane.projectPoint(center,center);cap.position.copy(center);cap.quaternion.setFromUnitVectors(unitZ,this.plane.normal);cap.scale.setScalar(Math.max(radius*2.05,.001));cap.updateMatrix();
   const tissueColor=source.userData.baseColor||material.color;capMaterial.color.copy(tissueColor).multiplyScalar(.78);capMaterial.opacity=Math.min(1,Math.max(0,material.opacity));capMaterial.depthWrite=capMaterial.opacity>=.98;
  }
 }
 destroyRecord(record){
  for(const object of [record.back,record.front,record.cap])this.root.remove(object);
  record.backMaterial.dispose();record.frontMaterial.dispose();record.capMaterial.dispose();
 }
 clear(){
  for(const record of this.records.values())this.destroyRecord(record);this.records.clear();this.root.visible=false;this.model=null;this.sourcePlane=null;this.visibleCount=0;this.partIds=[];this.stats={active:0,eligible:0,fallback:0,limited:0,triangles:0};
 }
 dispose(){this.clear();this.scene.remove(this.root);this.planeGeometry.dispose();}
}
