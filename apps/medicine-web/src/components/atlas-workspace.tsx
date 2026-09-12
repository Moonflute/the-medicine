"use client";
import {useEffect,useRef} from "react";
import Link from "next/link";
import {useRouter,useSearchParams} from "next/navigation";
import mappings from "@/generated/atlas-links.json";
const basePath=process.env.NEXT_PUBLIC_BASE_PATH??"";
const organIds=new Set(["brain","lungs","heart","liver","kidneys","pancreas","spleen","small-intestine","colon","bladder","ureters","prostate","spinal-cord","eyes","thymus","skin","uterus","ovaries","fallopian-tubes","placenta","lymph-node","knees","pelvis","urethra","vasculature","stomach","esophagus","mouth","tonsils"]);
export function AtlasWorkspace(){
 const query=useSearchParams(),router=useRouter(),frame=useRef<HTMLIFrameElement>(null);
 const organ=organIds.has(query.get("organ")??"")?query.get("organ")!:"heart";
 const mapping=mappings.find(m=>m.diseaseSlug===query.get("disease")&&m.organId===organ);
 const params=new URLSearchParams({organ});if(mapping)params.set("scenario",mapping.scenarioId);
 useEffect(()=>{const receive=(event:MessageEvent)=>{if(event.origin!==location.origin||event.source!==frame.current?.contentWindow)return;if(event.data?.type!=="atlas:navigate")return;const detail=event.data.detail;if(typeof detail?.diseaseSlug==="string"&&/^[a-zA-Z0-9_-]+$/.test(detail.diseaseSlug)){router.push("/disease/"+detail.diseaseSlug+"/");return}if(typeof detail?.label==="string")router.push("/search/?q="+encodeURIComponent(detail.label))};window.addEventListener("message",receive);return()=>window.removeEventListener("message",receive)},[router]);
 return <section className="atlas-workspace"><div className="atlas-host-toolbar"><Link href="/">← 검색으로</Link><span>3D Atlas</span>{mapping?<Link href={"/disease/"+mapping.diseaseSlug+"/"} title={mapping.title}>질환 문서로 ↗</Link>:<span/>}</div><iframe ref={frame} key={params.toString()} src={basePath+"/organ-atlas/index.html?"+params.toString()} title="인터랙티브 3D 인체도감" className="atlas-viewer"/><noscript>3D 탐색에는 JavaScript가 필요합니다.</noscript></section>
}
