// Lumen labels are discrete; illumination should not jump at their borders.
export class JourneyEnvironment{
 constructor(scene,light,{reducedMotion=false}={}){this.scene=scene;this.light=light;this.reducedMotion=reducedMotion;this.fog=scene.fog.density;this.distance=light.distance;}
 setWidth(clearance,{immediate=false}={}){const width=Math.max(.003,clearance);this.fog=Math.min(55,Math.max(8,.28/width));this.distance=Math.min(.18,Math.max(.025,width*7));if(immediate||this.reducedMotion){this.scene.fog.density=this.fog;this.light.distance=this.distance;}}
 update(dt){const fog=this.scene.fog.density,distance=this.light.distance;if(fog===this.fog&&distance===this.distance)return false;const mix=1-Math.exp(-Math.max(0,dt)/.18);this.scene.fog.density=Math.abs(fog-this.fog)<.01?this.fog:fog+(this.fog-fog)*mix;this.light.distance=Math.abs(distance-this.distance)<.00003?this.distance:distance+(this.distance-distance)*mix;return true;}
}
