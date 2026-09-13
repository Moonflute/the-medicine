// Fit a bounding sphere against both dimensions of the perspective frustum.
export function focusDistance(radius,verticalFovDegrees,aspect,padding=1.2){
 const vertical=verticalFovDegrees*Math.PI/360;
 const horizontal=Math.atan(Math.tan(vertical)*Math.max(.01,aspect));
 return Math.max(.4,radius/Math.sin(Math.min(vertical,horizontal))*padding);
}

// Fit actual assembly-box corners instead of a single large enclosing sphere.
// Points use a camera basis: x right, y up, z toward the viewer from the target.
export function fitPointsDistance(points,verticalFovDegrees,aspect,padding=1.25){
 const tanV=Math.tan(verticalFovDegrees*Math.PI/360),tanH=tanV*Math.max(.01,aspect);
 return Math.max(.4,...points.map(([x,y,z])=>z+Math.max(Math.abs(x)*padding/tanH,Math.abs(y)*padding/tanV)));
}
