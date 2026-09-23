import {anatomicalRelations,relationById} from './anatomy-relations.js';

// A guide is a learning-oriented view of an anatomical relation.  It never
// changes the source relation, and navigation does not imply that sibling
// branches are connected in series.
const kindLabels={flow:'Flow',branch:'Branches',drainage:'Drainage',continuity:'Continuity'};
const cameraBehaviors=new Set(['preserve','focus']);

function sourceRoute(id,parts){
 if(Array.isArray(parts))return relationById(id,parts);
 const route=anatomicalRelations.find(item=>item.id===id);
 return route?{...route,kindLabel:kindLabels[route.kind],partIds:[...new Set(route.stages.flatMap(item=>item.ids))]}:null;
}

function chapterRole(route,index){
 if(!Number.isInteger(route.parallelFrom))return 'step';
 if(index===route.parallelFrom)return 'branch-origin';
 if(index>route.parallelFrom)return 'parallel-branch';
 return 'step';
}

export function guidedRouteById(id,parts){
 const route=sourceRoute(id,parts);
 if(!route)return null;
 const chapters=route.stages.map((item,index)=>({
  id:`${route.id}:${index+1}`,
  index,
  number:index+1,
  total:route.stages.length,
  title:item.label,
  structureIds:[...item.ids],
  pattern:item.pattern||'',
  role:chapterRole(route,index),
  parentChapterId:Number.isInteger(route.parallelFrom)&&index>route.parallelFrom?`${route.id}:${route.parallelFrom+1}`:null
 }));
 return {
  id:route.id,
  title:route.title,
  kind:route.kind,
  kindLabel:route.kindLabel||kindLabels[route.kind]||route.kind,
  note:route.note,
  source:route.source,
  sequenceSemantics:Number.isInteger(route.parallelFrom)?'parallel':'linear',
  parallelFrom:Number.isInteger(route.parallelFrom)?route.parallelFrom:null,
  chapterCount:chapters.length,
  chapters,
  partIds:[...new Set(chapters.flatMap(chapter=>chapter.structureIds))]
 };
}

export function guidedRouteCatalog(parts){
 return anatomicalRelations.map(route=>guidedRouteById(route.id,parts)).filter(Boolean);
}

export function createGuidedSession(guide,{chapterIndex=0}={}){
 if(!guide?.chapters?.length)throw new TypeError('A guide with at least one chapter is required.');
 const index=Math.min(guide.chapters.length-1,Math.max(0,Math.trunc(Number(chapterIndex)||0)));
 return {routeId:guide.id,chapterIndex:index,replayCount:0,revision:0,complete:index===guide.chapters.length-1};
}

export function guidedNavigation(guide,session){
 const index=Math.min(guide.chapters.length-1,Math.max(0,session.chapterIndex));
 return {
  chapter:guide.chapters[index],
  index,
  isFirst:index===0,
  isLast:index===guide.chapters.length-1,
  canPrevious:index>0,
  canNext:index<guide.chapters.length-1
 };
}

// The returned camera directive is deliberately "preserve" unless a caller
// explicitly requests focus for this one transition.  A UI can therefore call
// scene.inspect() without an accidental camera reframe.
export function navigateGuidedSession(guide,session,action,{camera='preserve'}={}){
 if(session?.routeId!==guide?.id)throw new TypeError('The session and guide route must match.');
 const type=typeof action==='string'?action:action?.type;
 const current=guidedNavigation(guide,session).index;
 let index=current,replayCount=session.replayCount||0;
 if(type==='next')index=Math.min(guide.chapters.length-1,current+1);
 else if(type==='previous')index=Math.max(0,current-1);
 else if(type==='replay'){index=0;replayCount++;}
 else if(type==='go-to')index=Math.min(guide.chapters.length-1,Math.max(0,Math.trunc(Number(action?.index)||0)));
 else throw new TypeError(`Unknown guided navigation action: ${String(type)}`);
 const next={routeId:guide.id,chapterIndex:index,replayCount,revision:(session.revision||0)+1,complete:index===guide.chapters.length-1};
 const navigation=guidedNavigation(guide,next);
 return {session:next,...navigation,camera:{behavior:cameraBehaviors.has(camera)?camera:'preserve',explicit:camera==='focus'}};
}

export function guidedInspectionForChapter(guide,chapter,{mode='context'}={}){
 if(!guide||!chapter||chapter.id!==`${guide.id}:${chapter.index+1}`)throw new TypeError('The chapter must belong to the guide.');
 return {
  part:chapter.structureIds[0]||'',organ:'',route:'',side:'',mode,slice:false,
  relatedParts:[...guide.partIds],relationStageParts:[...chapter.structureIds],
  relationId:guide.id,relationStage:chapter.index
 };
}

export const guidedCameraBehaviors=Object.freeze([...cameraBehaviors]);
