import type { DomainNote, DomainToc } from "@/lib/webdb";
export type DrugLeafGroup={title:string;notes:DomainNote[]};
export type DrugMiddleGroup={title:string;notes:DomainNote[];detailGroups:DrugLeafGroup[]};
export type DrugTopGroup={title:string;slug:string;notes:DomainNote[];middleGroups:DrugMiddleGroup[]};
const DEFAULT_GROUP="General";
function toBase64Url(v:string){return Buffer.from(v,"utf-8").toString("base64url");}
function normalizeLabel(v?:string|null){return v?.trim()||DEFAULT_GROUP;}
function sortLabels(a:string,b:string){return a.localeCompare(b,"ko");}
function tocOrder(toc:DomainToc|undefined,level:number){const m=new Map<string,number>();toc?.items.forEach((x,i)=>{const k=x.path.slice(0,level+1).join("\u0000");if(k&&!m.has(k))m.set(k,i);});return m;}
function ordered(a:string,b:string,m:Map<string,number>,fa:string,fb:string){const x=m.get(a),y=m.get(b);if(x!==undefined&&y!==undefined)return x-y;if(x!==undefined)return-1;if(y!==undefined)return 1;return sortLabels(fa,fb);}
function rank(n:DomainNote){if(n.drugMeta?.clinicalCore)return 0;if(n.drugMeta?.priority==="tier_1")return 1;if(n.drugMeta?.priority==="tier_2")return 2;if(n.drugMeta?.priority==="general")return 3;return 4;}
function sortNotes(ns:DomainNote[]){return ns.slice().sort((a,b)=>rank(a)-rank(b)||sortLabels(a.title,b.title));}
function groupBy<T>(xs:T[],key:(x:T)=>string){const m=new Map<string,T[]>();for(const x of xs){const k=key(x);const b=m.get(k)||[];b.push(x);m.set(k,b);}return m;}
function top(n:DomainNote){return normalizeLabel(n.drugMeta?.topClass||n.folder);}
function middle(n:DomainNote,fallback:string){return normalizeLabel(n.drugMeta?.middleClass||n.drugMeta?.detailClass||fallback);}
export function buildDrugGroups(notes:DomainNote[],toc?:DomainToc):DrugTopGroup[]{const a=tocOrder(toc,0),b=tocOrder(toc,1),c=tocOrder(toc,2);return [...groupBy(notes,top).entries()].sort(([x],[y])=>ordered(x,y,a,x,y)).map(([title,items])=>{const mids=[...groupBy(items,n=>middle(n,title)).entries()].sort(([x],[y])=>ordered(title+"\u0000"+x,title+"\u0000"+y,b,x,y)).map(([mt,mi])=>{const direct:DomainNote[]=[],details=new Map<string,DomainNote[]>();for(const n of mi){const d=n.drugMeta?.detailClass?.trim();if(!d||d===mt){direct.push(n);continue;}const q=details.get(d)||[];q.push(n);details.set(d,q);}return{title:mt,notes:sortNotes(direct),detailGroups:[...details.entries()].sort(([x],[y])=>ordered(title+"\u0000"+mt+"\u0000"+x,title+"\u0000"+mt+"\u0000"+y,c,x,y)).map(([dt,dn])=>({title:dt,notes:sortNotes(dn)}))};});return{title,slug:toBase64Url(title),notes:sortNotes(items),middleGroups:mids};});}
