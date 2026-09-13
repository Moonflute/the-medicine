import {referenceWithRevision,assetRevisionId} from './model-revision.js';
// Keep procedural teaching models distinct from source-derived anatomy for DB consumers.
export function detailExportMetadata(detail){
 if(!detail)return null;
 const references=(detail.assets||[]).map(referenceWithRevision);
 return {
  modelReferences:structuredClone(references),
  modelRevision:assetRevisionId(references,detail.kind+'-'+detail.id+'-v'+detail.revision),
  quality:detail.kind==='schematic'?'schematic':detail.renderingQuality||'original',
 };
}
