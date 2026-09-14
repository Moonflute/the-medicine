// Emphasis keeps surrounding surfaces solid; fading is handled by color.
// Native/pathological transparency still applies outside an active selection.
export function resolveOpacity({restOpacity=1,selected=false,ghost=false,pathologyOpacity=null}){
 if(ghost||selected)return 1;
 return pathologyOpacity??restOpacity;
}