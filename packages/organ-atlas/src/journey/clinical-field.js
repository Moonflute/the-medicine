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
  const h=this.step*.4;return [0,1,2].map(i=>{const a=[...p],b=[...p];a[i]+=h;b[i]-=h;return (this.clearance(a)-this.clearance(b))/(2*h);});
 }
}
