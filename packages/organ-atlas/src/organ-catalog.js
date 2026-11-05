import {organs} from './data.js';
import {contextGroupFor} from './context-groups.js';

// Navigation is independent of source IDs used by meshes, disease links and saved views.
const urinaryMembers=contextGroupFor('kidneys').members;
export const isUrinaryOrgan=id=>urinaryMembers.includes(id);
const entries=new Map(organs.map(organ=>[organ.id,{
 ...organ,members:[organ.id],links:organ.links.map(link=>[...link,organ.id]),
}]));
const urinary={
 ...entries.get('kidneys'),name:'비뇨기계',english:'Urinary System',system:'비뇨기계',
 description:'신장·요관·방광·요도를 함께 살펴보며 소변의 생성·이동·저장·배출 경로를 탐색합니다.',
 position:'후복막의 신장에서 골반의 방광과 요도로 연결',members:urinaryMembers,
 links:urinaryMembers.flatMap(id=>entries.get(id).links),
};
export const catalogEntryFor=id=>isUrinaryOrgan(id)?urinary:entries.get(id);
export const organGroups=[
 ['심폐·혈관',['heart','lungs','pharynx','larynx','vasculature']],
 ['위장관',['mouth','esophagus','stomach','small-intestine','colon']],
 ['간담췌',['liver','gallbladder','pancreas']],
 ['내분비·대사',['thyroid','adrenals']],
 ['비뇨기계',['kidneys']],
 ['신경·감각',['brain','spinal-cord','eyes','nose','ears']],
 ['생식기',['testes','prostate','uterus','ovaries','fallopian-tubes']],
 ['림프·면역',['spleen','lymph-node']],
 ['근골격·피부',['skeleton','knees','pelvis','skin']],
];
export const organCatalog=organGroups.flatMap(([,ids])=>ids.map(catalogEntryFor));
export function matchesCatalogEntry(entry,query){
 const text=[entry.name,entry.english,...entry.members.flatMap(id=>{
  const organ=entries.get(id);return [organ.name,organ.english];
 })].join(' ').toLowerCase();
 return text.includes(query.trim().toLowerCase());
}
