// Keep the source untouched for shared anatomical views; trim only its standalone copy.
const distantVessels=/^VH_M_(?:descending_aorta_[ab]|inferior_vena_cava_[ab]|brachiocephalic_artery_[ab]|left_common_carotid_artery_[ab]|left_subclavian_artery_[ab]|brachiocephalic_vein_[LR])$/;
export function trimStandaloneHeart(root){
 const removed=[];root.traverse(mesh=>{if(mesh.isMesh&&distantVessels.test(mesh.name))removed.push(mesh);});
 for(const mesh of removed){mesh.removeFromParent();mesh.material.dispose();}
 return removed.map(mesh=>mesh.name);
}
