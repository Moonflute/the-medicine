import * as T from 'three';
// Conservative screen-space broad phase. Bounds crossing a camera clip plane
// remain global candidates, avoiding false negatives from perspective projection.
export function projectedPickingIndex(meshes,camera,cells=16){
 const bins=Array.from({length:cells*cells},()=>[]),global=[];
 const point=new T.Vector3(),box=new T.Box3();
 const cell=value=>Math.max(0,Math.min(cells-1,Math.floor((value+1)*.5*cells)));
 for(const mesh of meshes){
  if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();
  box.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity,uncertain=false;
  for(let i=0;i<8;i++){
   point.set(i&1?box.max.x:box.min.x,i&2?box.max.y:box.min.y,i&4?box.max.z:box.min.z).project(camera);
   if(!Number.isFinite(point.x+point.y+point.z)||point.z<=-1||point.z>=1)uncertain=true;
   minX=Math.min(minX,point.x);maxX=Math.max(maxX,point.x);minY=Math.min(minY,point.y);maxY=Math.max(maxY,point.y);
  }
  if(uncertain){global.push(mesh);continue;}
  if(maxX<-1||minX>1||maxY<-1||minY>1)continue;
  for(let y=cell(minY);y<=cell(maxY);y++)for(let x=cell(minX);x<=cell(maxX);x++)bins[y*cells+x].push(mesh);
 }
 return (x,y)=>global.concat(bins[cell(y)*cells+cell(x)]);
}
