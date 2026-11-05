// Region windows use the shared Z-Anatomy source frame in metres, not screen coordinates.
// Long vessels/nerves are clipped to the chosen window; these are browsing windows, not segmented anatomical boundaries.
export const bodySystems=[['all','전체'],['digestive','소화기'],['respiratory','호흡기'],['cardiovascular','심혈관'],['urinary','비뇨기'],['reproductive','남성 생식기'],['endocrine','내분비'],['lymphatic','림프·면역'],['skeleton','골격'],['muscles','근육'],['nervous','신경']];
export const bodyRegions=[['all','전체'],['head-neck','머리·목'],['thorax','흉부'],['abdomen','복부'],['pelvis','골반'],['upper-limbs','상지'],['lower-limbs','하지']];
export const regionWindows={'head-neck':[1.30,1.9],thorax:[1.03,1.37],abdomen:[.84,1.12],pelvis:[.67,.91],'upper-limbs':[.64,1.46],'lower-limbs':[0,.84]};
export function scopeLayers(mode,value,assets){
 const layers=mode==='region'&&value!=='all'?['skeleton','organs','muscles','arteries','veins','nerves','central-nerves']:value==='all'?['skeleton','organs']:value==='skeleton'||value==='muscles'?[value]:value==='nervous'?['nerves','central-nerves']:value==='cardiovascular'?['organs','arteries','veins']:['organs'];
 if(mode!=='region'||value==='all'||!assets)return layers;
 return layers.filter(layer=>{
  // Reuse exactly the browsing windows below. Skip only layers proven to have
  // no matching structures; spanning vessels and nerves remain intact.
  if(layer==='organs'&&!organRegions[value])return false;
  const bounds=assets.find(asset=>asset.layer===layer)?.bounds,range=regionWindows[value];
  if(!bounds||!range)return true;
  if(bounds[1][1]<range[0]||bounds[0][1]>range[1])return false;
  if(value==='upper-limbs'&&bounds[0][0]>=-.15&&bounds[1][0]<=.15)return false;
  return true;
 });
}
const organRegions={'head-neck':/^(Parotid|Submandibular|Sublingual|Thyroid|Tongue)|Trachea|Oesophagus/i,thorax:/atrium|ventricle|lobe of .*lung|Trachea|bronchus|Oesophagus|thymus/i,abdomen:/Oesophagus|Stomach|Duodenum|Jejunum|colon|appendix|Liver|Gallbladder|Pancreas|Bile duct|Kidney|Ureter|Suprarenal|Spleen/i,pelvis:/Sigmoid colon|Ureter|Urinary bladder|Testis|Epididymis|Ductus deferens|Seminal gland|Prostate/i};
export function matchesBodyScope(mesh,scope,frame){if(!scope||scope.value==='all')return true;const d=mesh.userData.detail||{};if(scope.mode==='system')return scope.value==='nervous'?d.system==='nerves':scope.value==='cardiovascular'?(d.system==='vessels'||d.system==='cardiovascular'):scope.value==='endocrine'?(d.system==='endocrine'||d.sourceMesh==='Pancreas'):d.system===scope.value;
 if(d.layer==='organs'&&(!organRegions[scope.value]||!organRegions[scope.value].test(d.sourceMesh)))return false;
 const range=regionWindows[scope.value];if(!range||!frame)return true;if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();const box=mesh.geometry.boundingBox,min=box.min.y/frame.displayScale+frame.displayCenter[1],max=box.max.y/frame.displayScale+frame.displayCenter[1];if(max<range[0]||min>range[1])return false;
 const x=(box.min.x+box.max.x)/2/frame.displayScale+frame.displayCenter[0];if(scope.value==='upper-limbs')return Math.abs(x)>.15;if(scope.value==='lower-limbs'||scope.value==='head-neck')return true;const limb=/humerus|radius|ulna\b|brachial|radial|ulnar|carpal|metacarpal|phalange|phalanx|digital|palmar|median nerve|musculocutaneous|brachii|carpi|digitorum|pollicis|deltoid/i.test(d.sourceMesh||'');return !limb&&Math.abs(x)<.145;
}
