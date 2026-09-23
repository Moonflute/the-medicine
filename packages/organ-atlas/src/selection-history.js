export const DEFAULT_SELECTION_HISTORY_LIMIT=30;

const FIELDS=['selectedParts','hiddenParts','fadedParts'];

function stableUnique(values){
 const seen=new Set();
 const result=[];
 for(const value of Array.isArray(values)?values:[]){
  if(value===null||value===undefined)continue;
  const id=String(value).trim();
  if(!id||seen.has(id))continue;
  seen.add(id);
  result.push(id);
 }
 return Object.freeze(result);
}

/** Create a detached, immutable dissection selection snapshot. */
export function normalizeSelectionState(state={}){
 const source=state&&typeof state==='object'?state:{};
 return Object.freeze({
  selectedParts:stableUnique(source.selectedParts),
  hiddenParts:stableUnique(source.hiddenParts),
  fadedParts:stableUnique(source.fadedParts),
 });
}

export function selectionStatesEqual(left,right){
 const a=normalizeSelectionState(left),b=normalizeSelectionState(right);
 return FIELDS.every(field=>a[field].length===b[field].length&&a[field].every((id,index)=>id===b[field][index]));
}

function resolveLimit(options){
 const requested=typeof options==='number'?options:options?.limit;
 if(!Number.isFinite(requested))return DEFAULT_SELECTION_HISTORY_LIMIT;
 return Math.max(1,Math.floor(requested));
}

export class SelectionHistory{
 constructor(initialState={},options={}){
  this.limit=resolveLimit(options);
  this.reset(initialState);
 }

 current(){
  return this.entries[this.cursor];
 }

 push(state){
  const next=normalizeSelectionState(state);
  if(selectionStatesEqual(this.current(),next))return this.current();

  this.entries.splice(this.cursor+1);
  this.entries.push(next);
  if(this.entries.length>this.limit){
   this.entries.splice(0,this.entries.length-this.limit);
  }
  this.cursor=this.entries.length-1;
  return this.current();
 }

 canUndo(){
  return this.cursor>0;
 }

 canRedo(){
  return this.cursor<this.entries.length-1;
 }

 undo(){
  if(this.canUndo())this.cursor-=1;
  return this.current();
 }

 redo(){
  if(this.canRedo())this.cursor+=1;
  return this.current();
 }

 reset(state={}){
  this.entries=[normalizeSelectionState(state)];
  this.cursor=0;
  return this.current();
 }

 get length(){
  return this.entries.length;
 }
}

export function createSelectionHistory(initialState={},options={}){
 return new SelectionHistory(initialState,options);
}
