"use client";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
const basePath=process.env.NEXT_PUBLIC_BASE_PATH??"";
export function HomeAnatomy(){
 const host=useRef<HTMLDivElement>(null),frame=useRef<HTMLIFrameElement>(null);const [mounted,setMounted]=useState(false);const router=useRouter();
 useEffect(()=>{const element=host.current;if(!element)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)setMounted(true);frame.current?.contentWindow?.postMessage({type:"atlas:visibility",visible:entry.isIntersecting},location.origin)},{threshold:.05});observer.observe(element);return()=>observer.disconnect()},[]);
 useEffect(()=>{const receive=(event:MessageEvent)=>{if(event.origin!==location.origin||event.source!==frame.current?.contentWindow)return;if(event.data?.type==="atlas:open")router.push("/atlas/?organ=heart");if(event.data?.type==="atlas:preview-ready"){const rect=host.current?.getBoundingClientRect();frame.current?.contentWindow?.postMessage({type:"atlas:visibility",visible:!!rect&&rect.bottom>0&&rect.top<innerHeight},location.origin)}};window.addEventListener("message",receive);return()=>window.removeEventListener("message",receive)},[router]);
 return <div ref={host} className="mx-auto h-[270px] w-full max-w-[420px] sm:h-[310px]" data-home-anatomy>{mounted?<iframe ref={frame} src={basePath+"/organ-atlas/preview.html"} title="회전 가능한 심장 미니어처 · 인체도감 열기" className="h-full w-full border-0"/>:<a href={basePath+"/atlas/"} className="flex h-full items-center justify-center text-sm text-teal-700">인체로 탐색하기 ↗</a>}</div>
}
