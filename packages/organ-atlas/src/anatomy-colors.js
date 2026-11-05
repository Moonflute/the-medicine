import {organPalette,tissuePalette,vesselColor,normalizeStructureName} from './anatomy-palette.js';

// Resolve the represented tissue before applying an organ's default color.
// In particular, a named duct is not necessarily part of the biliary system.
export function anatomicalColor(id,name,base){
 const n=normalizeStructureName(name),vessel=vesselColor(n);if(vessel)return vessel;
 if(/nerve/.test(n))return tissuePalette.nerve;
 if(/ligament|tendon|fascia|aponeurosis|retinaculum|raphe|membrane|conus elasticus/.test(n))return tissuePalette.connective;
 if(/cartilage|meniscus/.test(n)||id==='larynx'&&/epiglottis/.test(n))return tissuePalette.cartilage;
 if(/teeth|tooth/.test(n))return tissuePalette.tooth;
 if(/\bbone\b|ossicle|malleus|incus|stapes/.test(n))return tissuePalette.bone;
 if(/muscle|musculus/.test(n))return tissuePalette.muscle;
 if(/gallbladder|bile duct|hepatic duct|cystic duct/.test(n))return tissuePalette.bile;
 // The kidney source also contains the collecting system and ureters. Resolve
 // those tissues by name so overlapping sources retain the same colors when joined.
 if(/renal pelvis|calyx|calyces/.test(n))return tissuePalette.duct;
 if(/ureter/.test(n))return organPalette.ureters;
 if(/urethra/.test(n))return organPalette.urethra;
 if(/urinary bladder/.test(n))return organPalette.bladder;
 if(id==='spinal-cord'&&/vertebra/.test(n))return tissuePalette.bone;
 const color=organPalette[id]||base||tissuePalette.mucosa;
 if(id==='skeleton'&&/disk|disc/.test(n))return tissuePalette.cartilage;
 if(id==='nose'&&/fj255[4-8]/.test(n))return tissuePalette.cartilage;
 if(id==='thyroid'&&/parathyroid/.test(n))return tissuePalette.fat;
 if(id==='testes'&&/epididymis/.test(n))return '#bea479';
 if(/ductus deferens|deferent duct/.test(n))return tissuePalette.duct;
 if(id==='larynx'||id==='pharynx')return tissuePalette.muscle;
 if(id==='mouth'){
  if(/hard palate/.test(n))return tissuePalette.bone;
  if(/gland/.test(n))return '#d2af83';
  if(/tongue|papillae/.test(n))return '#b75d58';
 }
 if(id==='lungs'&&/trachea|bronchus|bronchi|carina/.test(n))return tissuePalette.cartilage;
 if(id==='heart'&&/valve|leaflet/.test(n))return tissuePalette.valve;
 if(id==='heart'&&/chordae/.test(n))return tissuePalette.tendon;
 if(id==='brain'&&/cerebell|pons|medulla/.test(n))return '#c8ad72';
 if(id==='kidneys'&&/renal pyramid|renal papilla/.test(n))return '#bd7062';
 if(id==='ears'){
  // Inner-ear compartments represent fluid spaces, not exposed nerve tissue.
  if(/scala|vestibul|semicircular/.test(n))return tissuePalette.fluid;
  if(/acoustic meatus/.test(n))return tissuePalette.mucosa;
 }
 if(id==='eyes'){
  if(/sclera|conjunctiva/.test(n))return tissuePalette.tooth;
  if(/iris/.test(n))return '#617f83';
  if(/pupil/.test(n))return '#252b2c';
  if(/retina/.test(n))return '#ca8467';
  if(/choroid/.test(n))return '#704b40';
  if(/ciliary/.test(n))return '#9b6351';
  if(/lens|cornea|humor/.test(n))return tissuePalette.fluid;
  if(/optic disc|fovea|macula/.test(n))return '#d5b167';
 }
 return color;
}
