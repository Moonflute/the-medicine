// Both exploration datasets use the same source coordinates. Moving between
// modes is an explicit viewpoint transfer, never a digestive–vascular lumen.
export function nearbyInterior(field,origin,radius,maxDistance=.18){
 let closest=null,best=maxDistance*maxDistance;const minimum=radius+.0005;
 field.forEachVoxel((x,y,z,id,value)=>{const clearance=value*field.unit;if(clearance<minimum)return;const p=[x,y,z].map((v,k)=>field.origin[k]+v*field.step),distance=p.reduce((sum,v,k)=>sum+(v-origin[k])**2,0);if(distance>=best)return;if(field.clearance(p)<minimum)return;closest={position:p,part:id,clearance};best=distance;});
 return closest;
}

export function fittingRadius(field,position,requested){
 const clearance=field.clearance(position);return [.0016,.0008,.0004].find(radius=>radius<=requested+1e-9&&radius<=clearance+1e-9)??null;
}
