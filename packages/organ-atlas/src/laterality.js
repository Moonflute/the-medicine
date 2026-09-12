// Laterality follows source naming, never camera coordinates. Relative branches can
// contain both words; ambiguous names and known source conflicts remain unassigned.
export function sourceLaterality(id){
 // united-male v1.10: these ten nodes have anatomical_structure_of
 // #VHMRightKidney and parent VH_M_renal_pyramid_R. Original IDs stay intact.
 if(/^VH_M_renal_pyramid_[a-j]$/.test(id))return 'R';
 if(/^VH_M_(left|right)_renal_artery$/.test(id))return null;
 if(/vas_deferens_[LR]$|thymus_lobe_[LR]$/.test(id))return null;
 // HRA kidney subdivisions retain a source side before their letter index.
 // Restrict this to documented families; a generic internal L/R token can
 // describe a connection or a relative branch instead of the whole structure.
 const suffix=id.match(/_([LR])$/)?.[1] || id.match(/^VH_M_(?:renal_papilla|renal_pyramid|major_calyx|minor_calyx)_([LR])_[a-z]$/)?.[1] || id.match(/^VH_M_pulmonary_vein_([LR])_(?:inf|sup)$/)?.[1];
 const left=/(^|_)left(_|$)/i.test(id),right=/(^|_)right(_|$)/i.test(id);
 if(left&&right)return null;
 const word=left?'L':right?'R':null;
 if(suffix&&word&&suffix!==word)return null;
 return suffix||word;
}
