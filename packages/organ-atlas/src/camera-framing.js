// Fit a bounding sphere against both dimensions of the perspective frustum.
export function focusDistance(radius,verticalFovDegrees,aspect,padding=1.2){
 const vertical=verticalFovDegrees*Math.PI/360;
 const horizontal=Math.atan(Math.tan(vertical)*Math.max(.01,aspect));
 return Math.max(.4,radius/Math.sin(Math.min(vertical,horizontal))*padding);
}
