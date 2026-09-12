import {Suspense} from "react";
import {AtlasWorkspace} from "@/components/atlas-workspace";
export const metadata={title:"3D Atlas · The Medicine"};
export default function AtlasPage(){return <Suspense fallback={<p role="status">인체도감 준비 중…</p>}><AtlasWorkspace/></Suspense>}
