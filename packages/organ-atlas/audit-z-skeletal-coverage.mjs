import fs from 'node:fs';import assert from 'node:assert/strict';
const records=JSON.parse(fs.readFileSync('../../tmp/atlas-qa/z-system-evaluated/audit.json')).records;
const skeleton=new Map(records.filter(r=>r.systems.includes('skeleton')).map(r=>[r.name,r]));
const ordinals=['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth'];
const spine=['Atlas (C1)','Axis (C2)',...Array.from({length:5},(_,i)=>'Vertebra C'+(i+3)),...Array.from({length:12},(_,i)=>'Vertebra T'+(i+1)),...Array.from({length:5},(_,i)=>'Vertebra L'+(i+1))];
const expected=[...spine,'Sacrum','Coccyx'];
for(const side of ['l','r']){
 expected.push(...ordinals.map(n=>n+' rib.'+side));
 expected.push(...['Clavicle','Scapula','Humerus','Radius','Ulna','Hip bone','Femur','Patella','Tibia','Fibula','Talus','Calcaneus','Navicular bone','Cuboid bone','Medial cuneiform bone','Intermediate cuneiform bone','Lateral cuneiform bone','Scaphoid bone','Lunate bone','Triquetrum bone','Pisiform bone','Trapezium bone','Trapezoid bone','Capitate bone','Hamate bone'].map(n=>n+'.'+side));
 for(const limb of ['hand','foot']){
  expected.push(...ordinals.slice(0,5).map(n=>n+(limb==='hand'?' metacarpal bone.':' metatarsal bone.')+side));
  for(const segment of ['Proximal','Middle','Distal'])for(const number of ordinals.slice(segment==='Middle'?1:0,5))expected.push(`${segment} phalanx of ${number.toLowerCase()} finger of ${limb}.${side}`);
 }
}
const missing=expected.filter(n=>!skeleton.has(n));
const order=spine.slice(0,-1).map((name,i)=>{const next=spine[i+1],z=r=>(r.bounds[0][2]+r.bounds[1][2])/2;return {superior:name,inferior:next,consistent:skeleton.has(name)&&skeleton.has(next)&&z(skeleton.get(name))>z(skeleton.get(next))};});
const report={scope:'Major axial/appendicular names and superior-inferior vertebral bounds centers only. Not all 206 bones, not facet alignment, joint congruence or surface accuracy certification.',expected:expected.length,missing,vertebralOrder:order,references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column','https://openstax.org/books/anatomy-and-physiology/pages/8-4-bones-of-the-lower-limb']};
fs.writeFileSync('../../tmp/atlas-qa/z-skeletal-coverage-screen.json',JSON.stringify(report,null,2));
assert.deepEqual(missing,[]);assert.ok(order.every(r=>r.consistent));
console.log(JSON.stringify({majorNamedStructures:expected.length,missing,vertebralOrderChecks:order.length,status:'coverage and gross order only'}));
