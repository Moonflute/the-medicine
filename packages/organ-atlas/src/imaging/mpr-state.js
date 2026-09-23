export const MPR_PLANE_AXES=Object.freeze({
 axial:Object.freeze({fixed:2,horizontal:0,vertical:1}),
 coronal:Object.freeze({fixed:1,horizontal:0,vertical:2}),
 sagittal:Object.freeze({fixed:0,horizontal:1,vertical:2}),
});

const finite=(value,fallback=0)=>Number.isFinite(Number(value))?Number(value):fallback;
const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));

export function clampCrosshair(ijk,dimensions){
 if(!Array.isArray(dimensions)||dimensions.length!==3||dimensions.some(value=>!Number.isInteger(value)||value<1))throw Error('MPR dimensions must contain three positive integers.');
 return [0,1,2].map(axis=>clamp(Math.round(finite(ijk?.[axis],(dimensions[axis]-1)/2)),0,dimensions[axis]-1));
}

export function centerCrosshair(dimensions){
 return clampCrosshair(dimensions.map(value=>(value-1)/2),dimensions);
}

export function indexForPlane(ijk,plane){
 const axes=MPR_PLANE_AXES[plane];if(!axes)throw Error('Unsupported MPR plane: '+plane);
 return Math.round(finite(ijk?.[axes.fixed]));
}

export function setPlaneIndex(ijk,plane,index,dimensions){
 const axes=MPR_PLANE_AXES[plane];if(!axes)throw Error('Unsupported MPR plane: '+plane);
 const next=clampCrosshair(ijk,dimensions);next[axes.fixed]=clamp(Math.round(finite(index)),0,dimensions[axes.fixed]-1);return next;
}

export function crosshairPixel(ijk,plane){
 const axes=MPR_PLANE_AXES[plane];if(!axes)throw Error('Unsupported MPR plane: '+plane);
 return {x:Math.round(finite(ijk?.[axes.horizontal])),y:Math.round(finite(ijk?.[axes.vertical]))};
}

export function planeIndices(ijk){
 return {axial:indexForPlane(ijk,'axial'),coronal:indexForPlane(ijk,'coronal'),sagittal:indexForPlane(ijk,'sagittal')};
}

export function rasFromIJK(ijk,matrix){
 if(!Array.isArray(matrix)||matrix.length!==16)throw Error('ijkToRas must be a 4x4 matrix.');
 const [i,j,k]=ijk.map(value=>finite(value));
 return [
  matrix[0]*i+matrix[1]*j+matrix[2]*k+matrix[3],
  matrix[4]*i+matrix[5]*j+matrix[6]*k+matrix[7],
  matrix[8]*i+matrix[9]*j+matrix[10]*k+matrix[11],
 ];
}

// The SPL NRRD stores CT values with the conventional +1024 offset. Presets
// stay in source-value coordinates so the original Int16 volume is untouched.
export function createCtWindowPresets({sourceLevel,sourceWidth,storedValueOffset=1024}={}){
 const offset=finite(storedValueOffset,1024);
 return Object.freeze([
  Object.freeze({id:'source',label:'Atlas',level:finite(sourceLevel,666),width:Math.max(1,finite(sourceWidth,1310)),basis:'source'}),
  Object.freeze({id:'soft-tissue',label:'Soft tissue',level:offset+40,width:400,basis:'HU + source offset'}),
  Object.freeze({id:'lung',label:'Lung',level:offset-600,width:1500,basis:'HU + source offset'}),
  Object.freeze({id:'bone',label:'Bone',level:offset+200,width:1000,basis:'HU + source offset'}),
 ]);
}

export function drawCrosshair(rgba,width,height,{x,y,color=[67,184,164],opacity=.8}={}){
 if(!(rgba instanceof Uint8ClampedArray)||rgba.length!==width*height*4)return rgba;
 const px=clamp(Math.round(finite(x)),0,width-1),py=clamp(Math.round(finite(y)),0,height-1),alpha=clamp(finite(opacity,.8),0,1);
 const paint=(cx,cy)=>{const offset=(cx+cy*width)*4;for(let channel=0;channel<3;channel++)rgba[offset+channel]=Math.round(rgba[offset+channel]*(1-alpha)+color[channel]*alpha);rgba[offset+3]=255;};
 for(let cx=0;cx<width;cx++)if(Math.abs(cx-px)>2)paint(cx,py);
 for(let cy=0;cy<height;cy++)if(Math.abs(cy-py)>2)paint(px,cy);
 return rgba;
}
