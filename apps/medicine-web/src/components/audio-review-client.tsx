"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, ListMusic, Pause, Play, Plus, Search, Shuffle, SkipBack, SkipForward, SlidersHorizontal, Trash2, Volume2 } from "lucide-react";
import { makeAudioPlaylist, makeAudioSession, type AudioDocument, type AudioDomain } from "@/lib/audio-review";
import { useAudioReview } from "@/components/audio-review-provider";

const DOMAIN_LABELS: Record<AudioDomain, string> = { disease: "질환", cc: "CC", drug: "약물", lab: "Lab & Img", skill: "술기" };
const DOMAIN_ORDER: AudioDomain[] = ["disease", "cc", "drug", "lab", "skill"];
type OrderMode = "source" | "random" | "custom";
type ListenScope = "core" | "full";

function isCoreSection(domain: AudioDomain, title: string) {
  const normalized = title.toLowerCase();
  if (domain === "drug") return /적응|indicat|용법|용량|dose|투여|contra|금기|주의|adverse|이상|interaction|상호|monitor|요약|summary/.test(normalized);
  if (domain === "disease") return /개요|clinical|증상|검사|diagn|진단|치료|management|warning|응급|red flag/.test(normalized);
  if (domain === "cc") return /개념|concept|문진|history|진찰|exam|감별|differential|접근|plan|치료/.test(normalized);
  if (domain === "lab") return /개요|적응|indication|해석|interpret|정상|주의|clinical/.test(normalized);
  return /요약|summary|indication|준비|supply|step|절차|주의|complication/.test(normalized);
}

function shuffle<T>(items: T[]) {
  const output = [...items];
  for (let index = output.length - 1; index > 0; index -= 1) {
    const pick = Math.floor(Math.random() * (index + 1));
    [output[index], output[pick]] = [output[pick], output[index]];
  }
  return output;
}

export function AudioReviewClient({ catalog }: { catalog: AudioDocument[] }) {
  const { session, supported, play, pause, previousDocument, nextDocument, setRate, clear } = useAudioReview();
  const [domains, setDomains] = useState<AudioDomain[]>(["disease"]);
  const [categories, setCategories] = useState<string[]>([]);
  const [order, setOrder] = useState<OrderMode>("source");
  const [scope, setScope] = useState<ListenScope>("core");
  const [query, setQuery] = useState("");
  const [custom, setCustom] = useState<AudioDocument[]>([]);
  const [message, setMessage] = useState("");

  const availableCategories = useMemo(() => [...new Set(catalog.filter((item) => domains.includes(item.domain)).map((item) => item.category).filter(Boolean))], [catalog, domains]);
  const filtered = useMemo(() => catalog.filter((item) => {
    const inDomain = domains.includes(item.domain);
    const inCategory = categories.length === 0 || categories.includes(item.category);
    const matches = !query.trim() || `${item.title} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase());
    return inDomain && inCategory && matches;
  }), [catalog, categories, domains, query]);
  const selectedDocuments = useMemo(() => {
    if (order === "custom") return custom;
    const base = filtered.map((item) => ({ ...item, sections: scope === "full" ? item.sections : item.sections.filter((section) => isCoreSection(item.domain, section.title)) }));
    return order === "random" ? shuffle(base) : base;
  }, [custom, filtered, order, scope]);
  const categoryLabel = categories.length === 0 ? "전체 분류" : `${categories.length}개 분류`;
  const currentItem = session?.playlist[session.itemIndex];
  const currentSegment = currentItem?.segments[session?.segmentIndex ?? 0];

  function toggleDomain(domain: AudioDomain) {
    setDomains((current) => current.includes(domain) ? current.filter((item) => item !== domain) : [...current, domain]);
    setCategories([]);
  }
  function toggleCategory(category: string) {
    setCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
  }
  function addCustom(document: AudioDocument) {
    setCustom((current) => current.some((item) => item.id === document.id && item.domain === document.domain) ? current : [...current, { ...document, sections: scope === "full" ? document.sections : document.sections.filter((section) => isCoreSection(document.domain, section.title)) }]);
  }
  function moveCustom(index: number, change: -1 | 1) {
    setCustom((current) => {
      const target = index + change;
      if (target < 0 || target >= current.length) return current;
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }
  function start() {
    const playlist = makeAudioPlaylist(selectedDocuments);
    if (!playlist.length) {
      setMessage("청취할 문서를 하나 이상 선택하세요.");
      return;
    }
    setMessage(`${playlist.length}개 문서를 재생목록에 담았습니다.`);
    play(makeAudioSession(playlist, session?.rate ?? 1));
  }

  return (
    <div className="space-y-5">
      {!supported ? <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">이 브라우저는 음성 합성을 지원하지 않습니다. 최신 Chrome, Edge 또는 Safari에서 이용하세요.</div> : null}
      <section className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-slate-50 p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><Volume2 className="h-5 w-5" />Audio Review</div><h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">팟캐스트처럼 틀어놓고 듣습니다</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">외부 음성·요약 API 없이, 앱 문서를 규칙에 따라 청취용 순서로 읽습니다. 원문 정보는 바꾸지 않습니다.</p></div><div className="rounded-xl border border-teal-100 bg-white/80 px-4 py-3 text-xs text-slate-600">문서 사이에는 짧은 전환 안내가 들어가며, 끝나면 다음 문서로 자동 이동합니다.</div></div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2"><SlidersHorizontal className="h-5 w-5 text-teal-700" /><h2 className="text-lg font-bold text-slate-950">재생목록 설정</h2></div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div><h3 className="text-sm font-semibold text-slate-800">1. 범주</h3><div className="mt-2 flex flex-wrap gap-2">{DOMAIN_ORDER.map((domain) => <button key={domain} type="button" onClick={() => toggleDomain(domain)} className={`rounded-lg border px-3 py-2 text-sm font-medium ${domains.includes(domain) ? "border-teal-500 bg-teal-600 text-white" : "border-slate-200 bg-white text-slate-700"}`}>{DOMAIN_LABELS[domain]}</button>)}</div><div className="mt-3 flex flex-wrap gap-2">{availableCategories.map((category) => <button key={category} type="button" onClick={() => toggleCategory(category)} className={`rounded-full border px-3 py-1.5 text-xs ${categories.includes(category) ? "border-teal-400 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-600"}`}>{category}</button>)}</div><p className="mt-2 text-xs text-slate-500">{categoryLabel} · 분과를 복수 선택할 수 있습니다.</p></div>
          <div><h3 className="text-sm font-semibold text-slate-800">2. 순서와 범위</h3><div className="mt-2 grid grid-cols-3 gap-2">{([['source','목차순'],['random','무작위'],['custom','직접 지정']] as Array<[OrderMode,string]>).map(([value,label]) => <button key={value} type="button" onClick={() => setOrder(value)} className={`rounded-lg border px-3 py-2 text-sm ${order === value ? "border-teal-500 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-600"}`}>{value === 'random' ? <Shuffle className="mr-1 inline h-3.5 w-3.5" /> : null}{label}</button>)}</div><div className="mt-3 inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1"><button type="button" onClick={() => setScope("core")} className={`rounded-md px-3 py-2 text-xs font-medium ${scope === "core" ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}>핵심 청취</button><button type="button" onClick={() => setScope("full")} className={`rounded-md px-3 py-2 text-xs font-medium ${scope === "full" ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}>전체 낭독</button></div><p className="mt-2 text-xs leading-5 text-slate-500">핵심 청취는 약물의 적응증·용법·주의, 질환의 임상양상·검사·진단·치료처럼 기존 핵심 섹션만 골라 읽습니다.</p></div>
        </div>
        {order === "custom" ? <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 lg:grid-cols-2"><div><label className="relative block"><Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="문서 이름 검색" className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm" /></label><div className="mt-2 max-h-72 space-y-1 overflow-auto rounded-lg border border-slate-200 p-2">{filtered.slice(0, 100).map((item) => <div key={`${item.domain}-${item.id}`} className="flex items-center justify-between gap-2 rounded-md px-2 py-2 text-sm hover:bg-slate-50"><div className="min-w-0"><div className="truncate font-medium text-slate-800">{item.title}</div><div className="truncate text-xs text-slate-500">{DOMAIN_LABELS[item.domain]} · {item.category}</div></div><button type="button" onClick={() => addCustom(item)} className="inline-flex shrink-0 items-center gap-1 rounded-md border border-teal-200 px-2 py-1 text-xs font-medium text-teal-800"><Plus className="h-3.5 w-3.5" />추가</button></div>)}{filtered.length > 100 ? <p className="p-2 text-xs text-slate-500">검색 결과 중 처음 100개를 표시합니다.</p> : null}</div></div><div><div className="flex items-center justify-between"><h3 className="text-sm font-semibold">내 재생목록</h3><span className="text-xs text-slate-500">{custom.length}개</span></div><div className="mt-2 max-h-80 space-y-1 overflow-auto rounded-lg border border-slate-200 p-2">{custom.length ? custom.map((item,index) => <div key={`${item.domain}-${item.id}`} className="flex items-center gap-1 rounded-md bg-slate-50 px-2 py-2 text-sm"><span className="w-5 text-xs text-slate-400">{index + 1}</span><span className="min-w-0 flex-1 truncate">{item.title}</span><button type="button" onClick={() => moveCustom(index,-1)} className="p-1 text-slate-500" aria-label="위로"><ChevronUp className="h-4 w-4" /></button><button type="button" onClick={() => moveCustom(index,1)} className="p-1 text-slate-500" aria-label="아래로"><ChevronDown className="h-4 w-4" /></button><button type="button" onClick={() => setCustom((current) => current.filter((_, itemIndex) => itemIndex !== index))} className="p-1 text-slate-500" aria-label="삭제"><Trash2 className="h-4 w-4" /></button></div>) : <p className="p-4 text-center text-sm text-slate-500">왼쪽에서 원하는 문서를 순서대로 추가하세요.</p>}</div></div></div> : null}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5"><p className="text-sm text-slate-600"><strong className="text-slate-950">{order === "custom" ? custom.length : filtered.length}개</strong> 문서가 선택되었습니다.</p><button type="button" onClick={start} disabled={!supported || !domains.length} className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"><Play className="h-4 w-4" />재생목록 만들고 듣기</button></div>
      </section>

      {message ? <p role="status" className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900">{message}</p> : null}
      {session ? <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><ListMusic className="h-5 w-5" />현재 청취</div><h2 className="mt-2 text-xl font-bold text-slate-950">{currentItem?.title}</h2><p className="mt-1 text-sm text-slate-600">{currentSegment?.sectionTitle} · 문서 {session.itemIndex + 1} / {session.playlist.length}</p></div><button type="button" onClick={clear} className="secondary-action"><Trash2 className="h-4 w-4" />종료</button></div><div className="mt-5 flex flex-wrap items-center gap-2"><button type="button" onClick={previousDocument} className="secondary-action"><SkipBack className="h-4 w-4" />이전</button><button type="button" onClick={() => session.status === "playing" ? pause() : play()} className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white">{session.status === "playing" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}{session.status === "playing" ? "일시정지" : session.status === "ended" ? "처음부터 재생" : "이어듣기"}</button><button type="button" onClick={nextDocument} className="secondary-action">다음<SkipForward className="h-4 w-4" /></button><label className="ml-auto flex items-center gap-2 text-sm text-slate-600">속도<select value={session.rate} onChange={(event) => setRate(Number(event.target.value))} className="rounded-md border border-slate-200 bg-white px-2 py-2 text-sm">{[0.8,1,1.2,1.4,1.6,1.8,2].map((rate) => <option key={rate} value={rate}>{rate}×</option>)}</select></label></div><div className="mt-5 max-h-72 overflow-auto rounded-xl border border-slate-200"><div className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">현재 재생목록</div>{session.playlist.map((item,index) => <div key={`${item.domain}-${item.id}`} className={`flex items-center gap-3 px-4 py-3 text-sm ${index === session.itemIndex ? "bg-teal-50 text-teal-950" : "text-slate-600"}`}><span className="w-6 text-xs text-slate-400">{index + 1}</span><span className="min-w-0 flex-1 truncate font-medium">{item.title}</span><span className="text-xs text-slate-500">{DOMAIN_LABELS[item.domain]}</span></div>)}</div></section> : null}
    </div>
  );
}
