import {sourceLaterality} from './laterality.js';
// Presentation assemblies, not additional segmentation of the source meshes.
// Lung lobe relationships: https://openstax.org/books/anatomy-and-physiology-2e/pages/22-2-the-lungs
export function explosionAssembly(organ,id,detail){
 if(detail?.assembly)return (['pharynx','thyroid'].includes(detail.sourceRegion)?detail.sourceRegion:'larynx')+':'+detail.assembly;
 if(organ==='ears')return 'ears:'+(/External/.test(id)?'external':/Tympanic_membrane|Malleus|Incus|Stapes/.test(id)?'middle':/Scala|Vestibulocochlear/.test(id)?'inner':/nerve|Chorda/.test(id)?'facial-nerve':'vascular');if(organ==='nose')return 'nose:'+(/FJ3269|FJ3273/.test(id)?'left-palate':/FJ3375|FJ3379/.test(id)?'right-palate':/FJ3199/.test(id)?'ethmoid':/FJ2557|FJ3395/.test(id)?'septum':/FJ3378|FJ3369|FJ2558|FJ2554/.test(id)?'right':'left');
 const side=sourceLaterality(id)||'central',prefix=organ+':'+side+':';
 if(id.startsWith('detail:')){const [,kind,part]=id.split(':');if(kind==='testis-ducts'){if(/^(lobule|seminiferous|straight)-/.test(part))return 'testes:lobule:'+part.split('-').at(-1);return 'testes:'+(/tunica/.test(part)?'capsule':/epididymis|epididymal|efferent|deferens/.test(part)?'epididymal-ductal':'mediastinal');}if(kind==='adrenal-zones')return 'adrenals:'+(/capsule/.test(part)?'capsule':/medulla/.test(part)?'medulla':'cortex');if(kind==='chordae')return organ+':apparatus:'+part.split('-')[0];if(kind==='nephron')return organ+':nephron:'+(/capsule|glomerulus|afferent|efferent/.test(part)?'corpuscle':part==='collecting'?'collecting':'tubule');if(kind==='conduction')return organ+':conduction:'+(/^(ra|la|sa|atrial-spread)$/.test(part)?'atria':'ventricles');return organ+':detail:'+kind;}
 if(organ==='thyroid')return /nerve/i.test(id)?prefix+'recurrent-nerve':/artery|vein/i.test(id)?prefix+'vasculature':/parathyroid/i.test(id)?prefix+'parathyroid':/Isthmus/.test(id)?'thyroid:central:isthmus':prefix+'thyroid-lobe';
 if(organ==='adrenals')return prefix+(/artery|vein/i.test(id)?'vasculature':'gland');
 if(organ==='testes')return /epididymis/i.test(id)?prefix+'epididymis':prefix+'testis';
 if(organ==='gallbladder')return /gallbladder|cystic_duct/.test(id)?'gallbladder:sac-cystic':'gallbladder:hepatic-common';
 if(organ==='larynx')return /epiglott/.test(id)?'larynx:epiglottis':/thyroid_cartilage|cricothyroid/.test(id)?'larynx:thyroid':/cricoid_cartilage/.test(id)?'larynx:cricoid':'larynx:arytenoid-muscular';
 if(organ==='pharynx')return /constrictor/.test(id)?'pharynx:constrictors':/raphe/.test(id)?'pharynx:raphe':'pharynx:longitudinal';
 if(organ==='lungs'){
  const s=/left|_L$/.test(id)?'L':/right|_R$/.test(id)?'R':null;
  if(s){if(/basal|inferior_lobar|lower_lobar|hilum_lower|_(left|right)_superior_(bronchus|bronchopulmonary_segment)$/.test(id))return 'lungs:'+s+':lower';
   if(s==='R'&&/middle_lobar|hilum_middle|right_(lateral|medial)_(bronchus|bronchopulmonary_segment)$/.test(id))return 'lungs:R:middle';
   if(/lingul|superior_lobar|hilum_upper|_(apical|anterior|posterior)_(bronchus|bronchopulmonary_segment)$/.test(id))return 'lungs:'+s+':upper';}
  return 'lungs:central:airway';
 }
 if(organ==='heart'){
  if(/left_cardiac_atrium|oblique_vein_of_left_atrium/.test(id))return 'heart:left-atrium';
  if(/right_cardiac_atrium/.test(id))return 'heart:right-atrium';
  if(/ventricle|septum|papillary|mitral|tricuspid|coronary|cardiac_vein|marginal|anterior_descending|posterior_descending|diagonal/.test(id))return 'heart:ventricular-apparatus';
  return 'heart:great-vessels';
 }
 if(organ==='kidneys'){if(/pyramid|papilla/.test(id))return prefix+'medulla';if(/capsule|cortex|column/.test(id))return prefix+'outer-tissue';return prefix+'hilar-collecting';}
 if(organ==='eyes'){if(/extraocular|ophthalmic|opthalmic|ciliary_artery/.test(id))return prefix+'orbital';if(/cornea|corneo|conjunctiva|lens|ciliary|iris|pupil|aqueous|schlemm|trabecular/.test(id))return prefix+'anterior';return prefix+'posterior';}
 if(organ==='liver'){if(/^VH_M_left_.*segment$|quadrate_lobe/.test(id))return 'liver:left-tissue';if(/^VH_M_right_.*segment$/.test(id))return 'liver:right-tissue';if(/caudate_lobe/.test(id))return 'liver:caudate';return 'liver:support-hilar';}
 if(organ==='pancreas')return /head|neck|uncinate|ventral|bile|ampulla/.test(id)?'pancreas:head-unit':'pancreas:body-tail-unit';
 if(organ==='knees'){if(/patella_[LR]$|patellar_ligament|rectus_femoris|quadriceps/.test(id))return prefix+'extensor';if(/tibia_[LR]$|fibula_[LR]$/.test(id))return prefix+'lower-bones';if(/femur|condyle|intercondylar/.test(id))return prefix+'femoral';return prefix+'joint';}
 if(organ==='mouth'){if(/gland/.test(id))return prefix+'salivary';if(/tongue|papillae/.test(id))return 'mouth:tongue';if(/lower_jaw|lower_lip|mouth_floor/.test(id))return 'mouth:lower';return 'mouth:upper';}
 // Conservative fallback: keep unclassified structures together instead of
 // scattering arbitrary source partitions or inventing anatomical boundaries.
 return prefix+'assembly';
}






