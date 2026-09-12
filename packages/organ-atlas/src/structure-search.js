import {getStructureIdentity} from './structure-identifiers.js';
const normalize=value=>String(value??'').normalize('NFKC').toLowerCase().replace(/[_:\-]+/g,' ').replace(/\s+/g,' ').trim();
export function indexStructure(part){const identity=getStructureIdentity(part.organId,part.id);return {...part,searchText:normalize([part.label,part.id,identity?.ontologyId,identity?.ontologyLabel].join(' '))};}
export function matchesStructure(part,query){const terms=normalize(query).split(' ').filter(Boolean);return terms.every(term=>part.searchText.includes(term));}
