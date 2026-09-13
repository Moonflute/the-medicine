import * as T from 'three';
// Idealized cutaway, not a segmentation of the source specimen. Boundaries represent
// the anatomical outside-to-inside order, not measured layer thicknesses.
export const adrenalLayers=[
 {id:'adrenal-capsule',label:'Fibrous capsule of adrenal gland',outer:1,inner:.965,color:'#ded2b5',assembly:'capsule'},
 {id:'zona-glomerulosa',label:'Zona glomerulosa',outer:.965,inner:.84,color:'#c9b784',assembly:'cortex'},
 {id:'zona-fasciculata',label:'Zona fasciculata',outer:.84,inner:.57,color:'#e3c996',assembly:'cortex'},
 {id:'zona-reticularis',label:'Zona reticularis',outer:.57,inner:.45,color:'#be927d',assembly:'cortex'},
 {id:'adrenal-medulla',label:'Adrenal medulla',outer:.45,inner:0,color:'#b77e89',assembly:'medulla'},
];
export function cutawayLayer(outer,inner,{rx=1.28,ry=.76,rz=.62,curve=.12}={}){
 const positions=[],indices=[],segments=64,rings=14;
 function surface(scale,reverse){const offset=positions.length/3;for(let j=0;j<=rings;j++){const phi=j/rings*Math.PI/2;for(let i=0;i<=segments;i++){const theta=i/segments*Math.PI*2,x=Math.cos(theta),y=Math.sin(theta);positions.push(scale*rx*Math.sin(phi)*x,scale*ry*Math.sin(phi)*y*(1-curve*x),-scale*rz*Math.cos(phi))}}for(let j=0;j<rings;j++)for(let i=0;i<segments;i++){const a=offset+j*(segments+1)+i,b=a+segments+1;const face=j===0?[b,b+1,a+1]:[a,b,a+1,b,b+1,a+1];if(reverse)for(let k=0;k<face.length;k+=3)indices.push(face[k+2],face[k+1],face[k]);else indices.push(...face)}}
 surface(outer,true);if(inner>0)surface(inner,false);
 // Solid annular cut surface, with separate vertices for a crisp cut edge.
 const offset=positions.length/3;for(let i=0;i<=segments;i++){const t=i/segments*Math.PI*2,x=Math.cos(t),y=Math.sin(t)*(1-curve*x);positions.push(outer*rx*x,outer*ry*y,0,inner*rx*x,inner*ry*y,0)}for(let i=0;i<segments;i++){const a=offset+i*2;indices.push(a,a+2,a+1);if(inner>0)indices.push(a+1,a+2,a+3)}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}
export function addAdrenalLayers(add){for(const layer of adrenalLayers){const mesh=add(layer.id,layer.label,cutawayLayer(layer.outer,layer.inner),layer.color);mesh.userData.detail.englishLabel=layer.label;mesh.userData.detail.anatomicalLevel=layer.assembly;mesh.userData.detail.layerBoundary={outer:layer.outer,inner:layer.inner,measured:false};}}
