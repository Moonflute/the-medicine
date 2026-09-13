import {muscleRegions} from './body-muscle-catalog.js';
import {vesselRegions} from './body-vessel-catalog.js';
import {nerveRegions} from './body-nerve-catalog.js';
export const combinedRegions=['upper-limb-left','upper-limb-right','lower-limb-left','lower-limb-right'].map(region=>{
 const selected=[muscleRegions.find(r=>r.id==='musculoskeletal-'+region),...vesselRegions.filter(r=>r.id.startsWith('vascular-'+region+'-'))];
 if(region==='upper-limb-left')selected.push(nerveRegions.find(r=>r.id==='neural-cervical-upper-left'));
 if(selected.some(r=>!r))throw Error('Missing source partition for '+region);
 return {id:'combined-'+region,label:(region.endsWith('left')?'왼쪽 ':'오른쪽 ')+(region.startsWith('upper')?'상지':'하지')+' 계통 함께',files:selected.map(r=>r.file),count:selected.reduce((n,r)=>n+r.count,0),hasNerves:region==='upper-limb-left'};
});
