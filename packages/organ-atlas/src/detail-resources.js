// Detail models own their resources; repository models can share buffers and
// must instead be released by ModelRepository.releaseInactive.
export function disposeDetailModel(root){
 if(!root?.userData.detail)return;
 const geometries=new Set(),materials=new Set();
 root.traverse(m=>{if(m.geometry)geometries.add(m.geometry);for(const material of Array.isArray(m.material)?m.material:[m.material])if(material)materials.add(material)});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
}
