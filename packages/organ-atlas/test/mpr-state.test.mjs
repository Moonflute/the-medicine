import assert from 'node:assert/strict';
import test from 'node:test';
import {centerCrosshair,clampCrosshair,createCtWindowPresets,crosshairPixel,drawCrosshair,indexForPlane,planeIndices,rasFromIJK,setPlaneIndex} from '../src/imaging/mpr-state.js';

test('keeps one clamped IJK crosshair synchronized across all orthogonal planes',()=>{
 const dimensions=[256,256,113],center=centerCrosshair(dimensions);
 assert.deepEqual(center,[128,128,56]);
 const moved=setPlaneIndex(center,'coronal',244,dimensions);
 assert.deepEqual(moved,[128,244,56]);
 assert.deepEqual(planeIndices(moved),{axial:56,coronal:244,sagittal:128});
 assert.equal(indexForPlane(moved,'axial'),56);
 assert.deepEqual(clampCrosshair([-3,900,112.6],dimensions),[0,255,112]);
 assert.deepEqual(crosshairPixel(moved,'sagittal'),{x:244,y:56});
});

test('converts the synchronized cursor to RAS coordinates',()=>{
 const matrix=[-1,0,0,120,0,1,0,-120,0,0,-1.5,84,0,0,0,1];
 assert.deepEqual(rasFromIJK([20,30,40],matrix),[100,-90,24]);
});

test('defines source, soft-tissue, lung, and bone windows in stored-value coordinates',()=>{
 const presets=createCtWindowPresets({sourceLevel:666,sourceWidth:1310,storedValueOffset:1024});
 assert.deepEqual(presets.map(({id,level,width})=>({id,level,width})),[
  {id:'source',level:666,width:1310},
  {id:'soft-tissue',level:1064,width:400},
  {id:'lung',level:424,width:1500},
  {id:'bone',level:1224,width:1000},
 ]);
});

test('draws a low-cost crosshair without replacing its center pixel',()=>{
 const rgba=new Uint8ClampedArray(9*9*4);rgba.fill(100);
 drawCrosshair(rgba,9,9,{x:4,y:4,color:[200,0,0],opacity:1});
 const pixel=(x,y)=>[...rgba.slice((x+y*9)*4,(x+y*9+1)*4)];
 assert.deepEqual(pixel(0,4),[200,0,0,255]);
 assert.deepEqual(pixel(4,0),[200,0,0,255]);
 assert.deepEqual(pixel(4,4),[100,100,100,100]);
});
