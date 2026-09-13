import {assetRevisions} from './asset-revisions.js';
export function referenceWithRevision(reference){
 const revision=assetRevisions[reference.renderingAsset];
 return {...reference,...(revision?{assetSha256:revision.sha256,assetBytes:revision.bytes}:{})};
}
export function assetRevisionId(references,fallback){
 const hashes=references.map(r=>r.assetSha256);
 return hashes.length&&hashes.every(Boolean)?fallback+':'+hashes.join('+'):fallback;
}
