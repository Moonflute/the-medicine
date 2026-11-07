// Conservative distance to an oriented ellipsoid. This bound is never larger
// than the true outside distance, so a swept camera cannot tunnel into a lesion.
export function ellipsoidClearance(point,shape){
 const d=point.map((v,i)=>v-shape.center[i]);let q=0;
 for(let i=0;i<3;i++){const axis=shape.axes[i];const v=(d[0]*axis[0]+d[1]*axis[1]+d[2]*axis[2])/shape.radii[i];q+=v*v;}
 return (Math.sqrt(q)-1)*Math.min(...shape.radii)-.00008;
}
export class ClinicalField{
 constructor(base){this.base=base;this.step=base.step;this.shapes=[];}
 region(p){return this.base.region(p);}
 clearance(p){let d=this.base.clearance(p);for(const shape of this.shapes)d=Math.min(d,ellipsoidClearance(p,shape));return d;}
 gradient(p){
  if(!this.shapes.length)return this.base.gradient(p);
  let nearest=this.base.clearance(p),shape=null;for(const candidate of this.shapes){const distance=ellipsoidClearance(p,candidate);if(distance<nearest){nearest=distance;shape=candidate;}}
  if(!shape)return this.base.gradient(p);
  const delta=p.map((v,i)=>v-shape.center[i]),local=shape.axes.map(axis=>axis.reduce((s,v,i)=>s+v*delta[i],0)),length=Math.hypot(...local.map((v,i)=>v/shape.radii[i]));if(length<1e-12)return [0,0,0];
  return [0,1,2].map(k=>shape.axes.reduce((s,axis,i)=>s+axis[k]*local[i]/(shape.radii[i]**2),0)*Math.min(...shape.radii)/length);
 }
}
