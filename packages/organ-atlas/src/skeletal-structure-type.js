import {tissuePalette} from './anatomy-palette.js';
// Describes the represented structure, not a histological diagnosis.
// Scoped to the reviewed Z-Anatomy skeletal collection; do not use on other layers.
export function skeletalStructureType(name){
 if(/^Sinus of (frontal|sphenoid) bone$/.test(name))return 'cavity';
 if(/^Nucleus pulposus /.test(name))return 'nucleus-pulposus';
 if(/^Intervertebral disc /.test(name))return 'intervertebral-disc';
 if(name==='Sacrococcygeal symphysis')return 'symphysis';
 if(/ligament/i.test(name))return 'ligament';
 if(/cartilage/i.test(name))return 'cartilage';
 if(/^(Upper|Lower) .*(incisor|canine|premolar|molar tooth)\.[lr]$/.test(name))return 'tooth';
 return 'bone';
}
export const skeletalTypeColors={bone:tissuePalette.bone,cartilage:tissuePalette.cartilage,ligament:tissuePalette.connective,tooth:tissuePalette.tooth,'intervertebral-disc':tissuePalette.cartilage,'nucleus-pulposus':'#82acbc',symphysis:tissuePalette.cartilage,cavity:tissuePalette.fluid};
