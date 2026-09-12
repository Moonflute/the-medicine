// Visibility for inspection takes precedence over pathological opacity, so a
// ghosted structure cannot become opaque and conceal the selected structure.
export function resolveOpacity({restOpacity=1,selected=false,ghost=false,pathologyOpacity=null}){
 if(ghost)return .16;
 const base=pathologyOpacity??restOpacity;
 return selected?1:base;
}
