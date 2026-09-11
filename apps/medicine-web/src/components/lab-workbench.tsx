"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { DiseaseNote, DomainNote } from "@/lib/webdb";
import { RichTextLines } from "./rich-text-lines";
import { NUMERIC_PANELS, QUALITATIVE, AUTOIMMUNE_QUALITATIVE, VITAL_SIGNS, buildFindings, numberAt, resolveDiseases, SOURCE_LINKS, type NumericField, type Finding } from "@/lib/lab-engine";
import { ALL_LAB_FIELDS, EMPTY_LAB_DRAFT, LAB_DRAFT_KEY, restoreLabDraft, labValueStatus, formatRange, fieldNote, FIELD_GUIDANCE, invalidRange, type LabDraft } from "@/lib/lab-workbench-model";
import { labDocumentMeta } from "@/lib/lab-document-kind";

type DiseaseLink = Pick<DiseaseNote, "title" | "slug" | "aliases">;
const STATUS = { empty:"—", invalid:"확인", unknown:"기준 없음", low:"L ↓", high:"H ↑", normal:"범위 내" };
const PANELS: {title:string;description:string;fields:NumericField[]}[] = [...NUMERIC_PANELS, {title:"활력징후", description:"동일 시점의 활력징후", fields:VITAL_SIGNS.flatMap(item=>item.fields)}];
const QUAL_PANELS = ["요 dipstick", "자가항체"];
const control = "h-8 rounded border border-slate-300 bg-white px-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600";
const textButton = "rounded border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50 disabled:opacity-40";

function NoteBody({note}: {note:DomainNote}) {
  return <div className="space-y-3">
    <RichTextLines lines={note.summary} className="space-y-1 text-xs leading-5 text-slate-600" bulletStyle="plain" />
    {note.sections.map((section,index)=><details key={index} open={index===0 || /해석|임상적 의미|주의점/.test(section.title)} className="border-t border-slate-200 pt-2">
      <summary className="cursor-pointer text-xs font-semibold text-slate-800">{section.title}</summary>
      <div className="mt-2 overflow-x-auto"><RichTextLines lines={section.content} className="space-y-1.5 text-xs leading-5 text-slate-700" bulletStyle="plain" /></div>
    </details>)}
    <Link href={"/lab-img/"+note.slug} className="inline-block text-xs text-sky-800 underline">검사 문서 전체 보기</Link>
  </div>;
}

function Findings({items,diseases,hasValues}: {items:Finding[]; diseases:DiseaseLink[]; hasValues:boolean}) {
  return <div className="space-y-3">
    <p className="text-xs leading-5 text-slate-500">모든 검사군의 입력값을 함께 분석합니다. 감별 후보이며 확정·배제 결과가 아닙니다.</p>
    {!items.length && <p className="border-y border-slate-200 py-5 text-xs leading-5 text-slate-600">{hasValues ? "현재 입력에서 등록된 조합 패턴이 검출되지 않았습니다. 정상이나 질환 배제를 의미하지 않습니다." : "수치를 입력하면 조합 패턴과 추가 확인 항목이 표시됩니다."}</p>}
    {items.map((finding,index)=><article key={index} className={"border-l-2 py-1 pl-3 "+(finding.level==="urgent"?"border-red-600":finding.level==="attention"?"border-amber-500":"border-slate-300")}>
      <h3 className="text-xs font-semibold text-slate-900">{finding.level==="urgent" && <span className="mr-1.5 text-red-700">우선 확인</span>}{finding.title}</h3>
      <p className="mt-1 text-xs leading-5 text-slate-700">{finding.summary}</p>
      <p className="mt-1.5 text-xs leading-5"><b className="font-semibold">추가 확인</b> · {finding.next}</p>
      <div className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1 text-xs"><span className="text-slate-500">감별</span>{finding.diseases.map(term=>{
        const link=resolveDiseases(diseases,[term])[0];
        return link?<Link key={term} href={"/disease/"+link.slug} className="text-sky-800 underline decoration-sky-200">{term}</Link>:<span key={term}>{term}</span>;
      })}</div>
    </article>)}
    <details className="border-t border-slate-200 pt-2"><summary className="cursor-pointer text-xs text-slate-500">해석 근거</summary><ul className="mt-2 space-y-2">{SOURCE_LINKS.map(([label,url])=><li key={url}><a href={url} target="_blank" rel="noreferrer" className="text-xs text-sky-800 underline">{label}</a></li>)}</ul></details>
  </div>;
}

export function LabWorkbench({notes,diseases}: {notes:DomainNote[];diseases:DiseaseLink[]}) {
  const [draft,setDraft]=useState<LabDraft>(EMPTY_LAB_DRAFT);
  const [ready,setReady]=useState(false);
  const [storageError,setStorageError]=useState(false);
  const [query,setQuery]=useState("");
  const [filter,setFilter]=useState<"all"|"entered"|"abnormal">("all");
  const [mode,setMode]=useState<"results"|"documents"|"imaging">("results");
  const [pane,setPane]=useState<"theory"|"analysis">("theory");
  const [documentId,setDocumentId]=useState(notes[0]?.slug ?? "");
  const [docCategory,setDocCategory]=useState("");
  const [resetConfirm,setResetConfirm]=useState(false);

  /* eslint-disable react-hooks/set-state-in-effect -- Hydrate and report failures from browser-only session storage. */
  useEffect(()=>{
    // Restore the tab-local draft after hydration, before allowing edits or saving.
    try { setDraft(restoreLabDraft(window.sessionStorage.getItem(LAB_DRAFT_KEY))); } catch { setStorageError(true); }
    setReady(true);
  },[]);
  useEffect(()=>{
    if(!ready) return;
    try { window.sessionStorage.setItem(LAB_DRAFT_KEY,JSON.stringify(draft)); setStorageError(false); } catch { setStorageError(true); }
  },[draft,ready]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const setValue=(id:string,value:string)=>setDraft(old=>({...old,values:{...old.values,[id]:value}}));
  const selectField=(id:string)=>{setDraft(old=>({...old,selected:id}));setPane("theory");};
  const selectPanel=(title:string)=>{
    const fields=PANELS.find(p=>p.title===title)?.fields.filter(f=>!f.sex||f.sex===draft.sex);
    setQuery("");setFilter("all");
    setDraft(old=>({...old,panel:title,selected:fields?.[0]?.id ?? (title==="요 dipstick"?QUALITATIVE[0].id:AUTOIMMUNE_QUALITATIVE[0].id)}));
  };
  const usableFields=ALL_LAB_FIELDS.filter(f=>!f.sex||f.sex===draft.sex);
  const currentPanel=PANELS.find(p=>p.title===draft.panel) ?? PANELS[0];
  const selectedField=ALL_LAB_FIELDS.find(f=>f.id===draft.selected);
  const selectedQual=[...QUALITATIVE,...AUTOIMMUNE_QUALITATIVE].find(f=>f.id===draft.selected);
  const selectedNote=fieldNote(draft.selected,notes);
  const isQual=QUAL_PANELS.includes(draft.panel);
  const numericFields=(query || filter!=="all" ? usableFields : currentPanel.fields.filter(f=>!f.sex||f.sex===draft.sex)).filter(f=>{
    const raw=draft.values[f.id];const status=labValueStatus(f,raw,draft.ranges[f.id]);
    return (!query||[f.label,f.id,fieldNote(f.id,notes)?.title].some(text=>text?.toLowerCase().includes(query.toLowerCase()))) && (filter==="all" || (filter==="entered"?!!raw?.trim():status==="low"||status==="high"));
  });
  const qualFields=(draft.panel==="요 dipstick"?QUALITATIVE:AUTOIMMUNE_QUALITATIVE).filter(f=>!query||f.label.toLowerCase().includes(query.toLowerCase()));
  const findings=useMemo(()=>{
    const values={...draft.values};
    for(const field of ALL_LAB_FIELDS) {
      if((field.sex && field.sex!==draft.sex)||numberAt(values,field.id)===undefined||Number(values[field.id])<0) delete values[field.id];
    }
    return buildFindings(values);
  },[draft.values,draft.sex]);
  const entered=usableFields.filter(f=>numberAt(draft.values,f.id)!==undefined).length;
  const abnormal=usableFields.filter(f=>["high","low"].includes(labValueStatus(f,draft.values[f.id],draft.ranges[f.id]))).length;
  const urgent=findings.filter(f=>f.level==="urgent");
  const docNotes=notes.filter(n=>labDocumentMeta(n).kind!=="tool" && (mode!=="imaging"||labDocumentMeta(n).kind==="imaging"));
  const categories=[...new Set(docNotes.map(n=>n.category))];
  const filteredDocs=docNotes.filter(n=>(!docCategory||n.category===docCategory)&&(!query||[n.title,...n.aliases].some(t=>t.toLowerCase().includes(query.toLowerCase()))));
  const document=filteredDocs.find(n=>n.slug===documentId)??filteredDocs[0];

  return <div className="lab-workbench overflow-hidden rounded-md border border-slate-300 bg-white text-slate-800">
    <header className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-300 bg-slate-100 px-3 py-2">
      <h1 className="text-sm font-semibold">Lab &amp; Imaging</h1>
      <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
        <span role="status">{storageError?"임시 저장 실패 · 현재 입력은 유지됩니다":ready?"이 탭에 임시 저장":"불러오는 중"}</span>
        <Link href="/lab-img/numeric-input" className="hover:underline">슬라이더 입력</Link>
        <a href="https://chronic-disease-dun.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">MedCalc ↗</a>
      </div>
    </header>
    <div className="flex items-center gap-1 border-b border-slate-300 px-2 pt-1" role="tablist" aria-label="검사 화면">
      {([["results","검사 결과"],["documents","검사 이론"],["imaging","영상 · 기능"]] as const).map(([id,label])=><button key={id} role="tab" aria-selected={mode===id} onClick={()=>{setMode(id);setQuery("");setDocCategory("");}} className={"border-b-2 px-3 py-2 text-xs "+(mode===id?"border-sky-700 font-semibold text-sky-900":"border-transparent text-slate-500 hover:text-slate-900")}>{label}</button>)}
    </div>
    {mode==="results"?<fieldset disabled={!ready}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 px-3 py-2 text-xs">
        <label className="flex items-center gap-2">성인 기준<select aria-label="참고범위 성별" value={draft.sex} onChange={e=>setDraft(old=>({...old,sex:e.target.value as LabDraft["sex"],selected:["hemoglobin","rbc","hct"].some(id=>old.selected===id||old.selected===`${id}Male`)?`${old.selected.replace(/Male$/, "")}${e.target.value==="male"?"Male":""}`:old.selected}))} className={control}><option value="female">여성</option><option value="male">남성</option></select></label>
        <label className="flex items-center gap-2">채혈 시각<input type="datetime-local" value={draft.collectedAt} onChange={e=>setDraft(old=>({...old,collectedAt:e.target.value}))} className={control+" max-w-48"} /></label>
        <span className="tabular-nums text-slate-600">입력 {entered} · <span className={abnormal?"text-red-700":""}>H/L {abnormal}</span></span>
        <button onClick={()=>setResetConfirm(true)} type="button" className={textButton+" ml-auto"}>입력 초기화</button>
      </div>
      {resetConfirm&&<div className="flex flex-wrap items-center gap-3 border-b border-amber-200 bg-amber-50 px-3 py-2 text-xs" role="alert"><span>모든 검사군의 입력값과 메모를 지울까요?</span><button className={textButton} onClick={()=>{setDraft(old=>({...EMPTY_LAB_DRAFT,sex:old.sex,ranges:old.ranges}));setResetConfirm(false);}}>초기화</button><button className={textButton} onClick={()=>setResetConfirm(false)}>취소</button></div>}
      {urgent.length>0&&<button type="button" onClick={()=>setPane("analysis")} className="block w-full border-b border-red-200 bg-red-50 px-3 py-2 text-left text-xs text-red-800">우선 확인 {urgent.length} · {urgent.map(f=>f.title).join(" / ")} →</button>}
      <div className="lab-grid">
        <nav className="lab-panels border-b border-slate-200 bg-slate-50 lg:border-b-0 lg:border-r" aria-label="검사군">
          <label className="block p-2 lg:hidden"><span className="sr-only">검사군 선택</span><select aria-label="검사군 선택" className={control+" w-full"} value={draft.panel} onChange={e=>selectPanel(e.target.value)}>{[...PANELS.map(p=>p.title),...QUAL_PANELS].map(title=><option key={title}>{title}</option>)}</select></label>
          <div className="hidden py-1 lg:block">{[...PANELS.map(p=>p.title),...QUAL_PANELS].map(title=>{
            const fields=PANELS.find(p=>p.title===title)?.fields??(title==="요 dipstick"?QUALITATIVE:AUTOIMMUNE_QUALITATIVE);
            const count=fields.filter(f=>draft.values[f.id]?.trim()).length;
            return <button type="button" key={title} aria-pressed={draft.panel===title} onClick={()=>selectPanel(title)} className={"flex w-full items-center gap-1 border-l-2 px-2.5 py-2 text-left text-xs leading-4 "+(draft.panel===title?"border-sky-700 bg-sky-50 font-semibold text-sky-950":"border-transparent text-slate-600 hover:bg-slate-100")}><span>{title}</span>{count>0&&<span className="ml-auto text-[10px] tabular-nums text-sky-700">{count}</span>}</button>;
          })}</div>
        </nav>
        <section className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 px-3 py-2">
            <input aria-label="검사항목 검색" placeholder="항목 검색" value={query} onChange={e=>setQuery(e.target.value)} className={control+" w-36"} />
            {!isQual&&<select aria-label="검사결과 필터" value={filter} onChange={e=>setFilter(e.target.value as typeof filter)} className={control}><option value="all">전체 항목</option><option value="entered">입력한 항목</option><option value="abnormal">H/L 항목</option></select>}
            <span className="ml-auto text-[11px] text-slate-500">{query||filter!=="all"?"전체 검사군":draft.panel}</span>
          </div>
          <div className="lab-results-scroll overflow-auto">
            <table className="w-full border-collapse text-xs" aria-label="검사 결과표">
              <thead className="sticky top-0 z-10 bg-slate-100 text-slate-600"><tr>{["검사항목","결과","판정","단위","참고범위"].map(label=><th key={label} scope="col" className="whitespace-nowrap border-b border-slate-300 px-2 py-2 text-left font-medium">{label}</th>)}</tr></thead>
              <tbody>{!isQual?numericFields.map(field=>{
                const status=labValueStatus(field,draft.values[field.id],draft.ranges[field.id]);
                return <tr key={field.id} className={"border-b border-slate-100 "+(draft.selected===field.id?"bg-sky-50":"even:bg-slate-50/60 hover:bg-slate-50")}>
                  <th scope="row" className="px-2 py-1 text-left font-medium"><button type="button" aria-pressed={draft.selected===field.id} onClick={()=>selectField(field.id)} className="text-left text-sky-900 hover:underline">{field.label}</button></th>
                  <td className="px-2 py-1"><input type="text" inputMode="decimal" autoComplete="off" aria-label={field.label+" 결과"} aria-invalid={status==="invalid"} placeholder="—" value={draft.values[field.id]??""} onFocus={()=>setDraft(old=>({...old,selected:field.id}))} onChange={e=>setValue(field.id,e.target.value)} className={control+" w-20 text-right tabular-nums "+(status==="high"?"!text-red-700":status==="low"?"!text-blue-700":"")} /></td>
                  <td className={"whitespace-nowrap px-2 py-1 text-[11px] "+(status==="high"||status==="invalid"?"font-semibold text-red-700":status==="low"?"font-semibold text-blue-700":"text-slate-500")}>{STATUS[status]}</td>
                  <td className="whitespace-nowrap px-2 py-1 text-[11px] text-slate-500">{field.unit||"—"}</td>
                  <td className="whitespace-nowrap px-2 py-1 tabular-nums"><button type="button" onClick={()=>selectField(field.id)} title="항목 설명에서 참고범위 수정" className="text-slate-600 hover:underline">{formatRange(field,draft.ranges[field.id])}{draft.ranges[field.id]&&<span className="ml-1 text-sky-700">*</span>}</button></td>
                </tr>;
              }):qualFields.map(field=><tr key={field.id} className={"border-b border-slate-100 "+(draft.selected===field.id?"bg-sky-50":"even:bg-slate-50/60")}>
                <th className="px-2 py-1 text-left font-medium"><button onClick={()=>selectField(field.id)} className="text-left text-sky-900">{field.label}</button></th>
                <td className="px-2 py-1"><select aria-label={field.label+" 결과"} onFocus={()=>setDraft(old=>({...old,selected:field.id}))} value={draft.values[field.id]??""} onChange={e=>setValue(field.id,e.target.value)} className={control}><option value="">미입력</option><option value="negative">음성</option><option value="trace">{draft.panel==="자가항체"?"불확정":"Trace"}</option><option value="positive">양성</option></select></td>
                <td className="px-2 text-[11px]">{draft.values[field.id]==="positive"?"양성":draft.values[field.id]==="trace"?"확인":"—"}</td><td className="px-2 text-slate-400">—</td><td className="px-2 text-slate-500">검사실 판정</td>
              </tr>)}</tbody>
            </table>
            {(!isQual&&!numericFields.length || isQual&&!qualFields.length)&&<p className="p-5 text-xs text-slate-500">조건에 맞는 항목이 없습니다.</p>}
          </div>
          <div className="border-t border-slate-200 px-3 py-2 text-[11px] leading-5 text-slate-500">성인 학습용 참고값 · 단위와 검사실 범위 우선 · * 직접 지정</div>
          <details className="border-t border-slate-200 px-3 py-2"><summary className="cursor-pointer text-xs text-slate-600">채혈 조건 · 증상 메모</summary><textarea aria-label="채혈 조건과 증상 메모" placeholder="공복 여부, 증상, 약물, 임신, 이전 수치 등" value={draft.context} onChange={e=>setDraft(old=>({...old,context:e.target.value}))} className="mt-2 min-h-16 w-full rounded border border-slate-300 p-2 text-xs" /><p className="text-[11px] text-slate-500">메모는 자동 해석 조건에 반영되지 않습니다.</p></details>
        </section>
        <aside className="min-w-0 border-t border-slate-300 lg:border-l lg:border-t-0" aria-label="검사 설명과 종합 해석">
          <div className="flex border-b border-slate-200 px-2" role="tablist" aria-label="해석 보기">{([["theory","항목 설명"],["analysis","종합 해석"]] as const).map(([id,label])=><button role="tab" aria-selected={pane===id} key={id} onClick={()=>setPane(id)} className={"border-b-2 px-3 py-2.5 text-xs "+(pane===id?"border-sky-700 font-semibold text-sky-900":"border-transparent text-slate-500")}>{label}{id==="analysis"&&findings.length>0?" · "+findings.length:""}</button>)}</div>
          <div className="lab-explanation-scroll overflow-auto p-3">{pane==="analysis"?<Findings items={findings} diseases={diseases} hasValues={Object.values(draft.values).some(Boolean)} />:<>
            <h2 className="text-sm font-semibold">{selectedField?.label??selectedQual?.label??"항목 선택"}</h2>
            {selectedField&&<div className="mt-2">
              <p className="text-xs text-slate-600">{formatRange(selectedField,draft.ranges[selectedField.id])} {selectedField.unit} <span className="text-[11px] text-slate-400">{draft.ranges[selectedField.id]?"검사실 지정":"성인 참고"}</span></p>
              {selectedField.note&&<p className="mt-2 text-xs leading-5 text-slate-600">{selectedField.note}</p>}
              <details className="mt-3 border-y border-slate-200 py-2"><summary className="cursor-pointer text-xs text-slate-600">참고범위 설정</summary>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">결과지와 같은 단위로 입력하세요. H/L 표시만 바뀌며 감별 기준은 별도로 적용됩니다.</p>
                <div className="mt-2 flex gap-2">{(["low","high"] as const).map(bound=><label key={bound} className="text-[11px] text-slate-500">{bound==="low"?"하한":"상한"}<input aria-label={bound==="low"?"검사실 하한":"검사실 상한"} inputMode="decimal" value={draft.ranges[selectedField.id]?.[bound]??String(selectedField[bound]??"")} onChange={e=>setDraft(old=>({...old,ranges:{...old.ranges,[selectedField.id]:{...(old.ranges[selectedField.id] ?? {low:String(selectedField.low??""),high:String(selectedField.high??"")}),[bound]:e.target.value}}}))} className={control+" mt-1 block w-24"} /></label>)}</div>
                {invalidRange(draft.ranges[selectedField.id])&&<p role="alert" className="mt-1 text-xs text-red-700">숫자와 하한 ≤ 상한을 확인하세요.</p>}
                <button type="button" onClick={()=>setDraft(old=>{const ranges={...old.ranges};delete ranges[selectedField.id];return {...old,ranges};})} className="mt-2 text-[11px] text-slate-500 underline">기본 참고범위로</button>
              </details>
            </div>}
            {FIELD_GUIDANCE[draft.selected]&&<p className="my-3 text-xs leading-5 text-slate-700">{FIELD_GUIDANCE[draft.selected]}</p>}
            <div className="mt-3">{selectedNote?<NoteBody key={selectedNote.slug} note={selectedNote} />:!FIELD_GUIDANCE[draft.selected]&&<p className="text-xs leading-5 text-slate-500">{selectedField?.note??"검사실 판정과 검체·임상 조건을 함께 확인하세요."} 전용 검사 문서는 아직 연결되지 않았습니다.</p>}</div>
          </>}</div>
        </aside>
      </div>
    </fieldset>:<div className="grid min-h-96 lg:grid-cols-[240px_minmax(0,1fr)]">
      <section className="border-b border-slate-200 bg-slate-50 p-3 lg:border-b-0 lg:border-r">
        <input aria-label="검사 문서 검색" placeholder="검사명 검색" value={query} onChange={e=>setQuery(e.target.value)} className={control+" w-full"} />
        <select aria-label="검사 문서 종류" value={docCategory} onChange={e=>setDocCategory(e.target.value)} className={control+" mt-2 w-full"}><option value="">전체 종류</option>{categories.map(category=><option key={category}>{category}</option>)}</select>
        <div className="mt-2 max-h-60 overflow-auto lg:max-h-[65vh]">{filteredDocs.map(note=><button type="button" key={note.slug} onClick={()=>setDocumentId(note.slug)} aria-pressed={document?.slug===note.slug} className={"block w-full border-b border-slate-200 px-2 py-2 text-left text-xs "+(document?.slug===note.slug?"bg-sky-50 font-semibold text-sky-900":"hover:bg-white")}>{note.title}</button>)}</div>
      </section>
      <section className="max-h-[75vh] min-w-0 overflow-auto p-4">{document?<><h2 className="mb-3 text-sm font-semibold">{document.title}</h2><NoteBody key={document.slug} note={document} />{document.title==="심전도"&&<Link href={"/lab-img/"+document.slug} className="mt-3 inline-block text-xs text-sky-800 underline">심전도 워크벤치 열기</Link>}</>:<p className="text-xs text-slate-500">검색 결과가 없습니다.</p>}</section>
    </div>}
  </div>;
}
