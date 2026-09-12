import {sourceLaterality} from './laterality.js';
import {pathology} from './pathology.js';
import {getStructureIdentity} from './structure-identifiers.js';
// A mesh's display owner is not its only anatomical membership. Shared meshes
// keep all source memberships even when the body view removes duplicate draws.
export function compilePathologyStates(states,normalComparison=false){
 if(normalComparison)return [];
 return Object.entries(states).flatMap(([organId,state])=>{const scenario=pathology[organId]?.find(s=>s.id===state.id);return scenario?[{organId,state,scenario,target:new RegExp(scenario.target)}]:[];});
}
export function resolvePathologyTarget(partId,candidates){
 // Most recently changed active scenario wins on overlapping geometry.
 for(let i=candidates.length-1;i>=0;i--){const c=candidates[i];if(getStructureIdentity(c.organId,partId)&&c.target.test(partId)&&(!c.state.partId||c.state.partId===partId)&&(!c.state.side||sourceLaterality(partId)===c.state.side))return c;}
 return null;
}
