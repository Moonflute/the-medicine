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
export const skeletalTypeColors={bone:'#d4c6ab',cartilage:'#a6bbb3',ligament:'#bbb4cf',tooth:'#e5ddca','intervertebral-disc':'#a6bbb3','nucleus-pulposus':'#87aeb4',symphysis:'#a6bbb3',cavity:'#a6bbb3'};
