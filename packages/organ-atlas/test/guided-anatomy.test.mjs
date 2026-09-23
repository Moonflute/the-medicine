import test from 'node:test';
import assert from 'node:assert/strict';
import {anatomicalRelations} from '../src/anatomy-relations.js';
import {
 createGuidedSession,guidedInspectionForChapter,guidedNavigation,
 guidedRouteById,guidedRouteCatalog,navigateGuidedSession
} from '../src/guided-anatomy.js';

test('catalog derives all guide chapters from the curated relations',()=>{
 const catalog=guidedRouteCatalog();
 assert.equal(catalog.length,13);
 assert.deepEqual(catalog.map(guide=>guide.id),anatomicalRelations.map(route=>route.id));
 for(const guide of catalog){
  assert.equal(guide.chapterCount,guide.chapters.length);
  assert.deepEqual(guide.chapters.map(chapter=>chapter.number),guide.chapters.map((_,index)=>index+1));
  assert.equal(new Set(guide.chapters.map(chapter=>chapter.id)).size,guide.chapters.length);
  assert.match(guide.source,/^https:\/\//);
 }
});

test('parallel branches remain siblings while retaining a stable teaching order',()=>{
 const guide=guidedRouteById('aortic-arch-branches');
 assert.equal(guide.sequenceSemantics,'parallel');
 assert.equal(guide.chapters[0].role,'branch-origin');
 assert.deepEqual(guide.chapters.slice(1).map(chapter=>chapter.role),['parallel-branch','parallel-branch','parallel-branch']);
 assert.deepEqual(new Set(guide.chapters.slice(1).map(chapter=>chapter.parentChapterId)),new Set([guide.chapters[0].id]));
});

test('runtime parts resolve patterned chapters without mutating the source route',()=>{
 const before=JSON.stringify(anatomicalRelations.find(route=>route.id==='left-urine-outflow'));
 const parts=[
  {id:'VH_M_renal_papilla_L_1'},{id:'VH_M_minor_calyx_L_1'},{id:'VH_M_major_calyx_L_1'},
  {id:'VH_M_renal_pelvis_L'},{id:'VH_M_ureter_L'},{id:'VH_M_ureteral_orifice_L'},
  {id:'VH_M_trigone_of_urinary_bladder'},{id:'VH_M_urinary_bladder_neck_smooth_muscle'},{id:'VH_M_prostatic_urethra'}
 ];
 const guide=guidedRouteById('left-urine-outflow',parts);
 assert.equal(guide.chapterCount,9);
 assert.deepEqual(guide.chapters[0].structureIds,['VH_M_renal_papilla_L_1']);
 assert.equal(JSON.stringify(anatomicalRelations.find(route=>route.id==='left-urine-outflow')),before);
});

test('next, previous and replay are bounded and preserve camera by default',()=>{
 const guide=guidedRouteById('right-heart-flow');
 let session=createGuidedSession(guide);
 let result=navigateGuidedSession(guide,session,'previous');
 assert.equal(result.session.chapterIndex,0);
 assert.deepEqual(result.camera,{behavior:'preserve',explicit:false});
 session=result.session;
 result=navigateGuidedSession(guide,session,'next');
 assert.equal(result.session.chapterIndex,1);
 assert.equal(result.chapter.id,'right-heart-flow:2');
 result=navigateGuidedSession(guide,result.session,{type:'go-to',index:999},{camera:'focus'});
 assert.equal(result.isLast,true);
 assert.deepEqual(result.camera,{behavior:'focus',explicit:true});
 result=navigateGuidedSession(guide,result.session,'replay');
 assert.equal(result.session.chapterIndex,0);
 assert.equal(result.session.replayCount,1);
 assert.equal(guidedNavigation(guide,result.session).isFirst,true);
});

test('chapter inspection is a camera-neutral relation payload',()=>{
 const guide=guidedRouteById('coronary-sinus-drainage');
 const chapter=guide.chapters[1];
 const inspection=guidedInspectionForChapter(guide,chapter);
 assert.equal(inspection.relationId,guide.id);
 assert.equal(inspection.relationStage,1);
 assert.deepEqual(inspection.relationStageParts,chapter.structureIds);
 assert.deepEqual(inspection.relatedParts,guide.partIds);
 assert.equal('camera' in inspection,false);
});
