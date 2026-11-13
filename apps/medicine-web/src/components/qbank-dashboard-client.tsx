"use client";

import { ChatQbankLobby } from "@/components/chat-qbank-lobby";
import { QbankStartBar } from "@/components/qbank-start-bar";
import { useSkinTheme } from "@/components/theme-provider";
import { SkinPanel } from "@/components/skin-panel";
import { SkinStatus } from "@/components/skin-status";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Bookmark, CircleAlert, RotateCcw } from "lucide-react";
import { PracticeBankPicker } from "@/components/practice-bank-picker";
import { EMPTY_PRACTICE_FILTERS, matchesPractice, practiceTopicKey, practiceTopicLabel, stringArray, toggleGroup, type PracticeFilters, type PracticeIndex } from "@/lib/practice-selection";
import { loadPracticeIndex } from "@/lib/practice-bank";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { loadQbankState, QBANK_CHANGE_EVENT, remapQbankQuestionIds } from "@/lib/qbank-store";
import { QBANK_DEFAULT_COUNT, readQbankQuestionCount } from "@/lib/qbank-question-count";
import { activeSessionFrom, activeSessionsFrom, clearLocalActiveQbankSession, loadLocalActiveQbankSessions, planActiveQbankSessionSync, remapLocalActiveQbankSession, saveLocalActiveQbankSession, type QbankActiveSession } from "@/lib/qbank-active-session";
import { loadCloudActiveQbankSessionState, removeCloudActiveQbankSession, saveCloudActiveQbankSession } from "@/lib/qbank-active-session-cloud";
import { OWNER_KEY } from "@/lib/learning-sync-outbox";
import type { QbankQuestionIndex, QbankSpecialtySummary } from "@/lib/types";

type RelatedTarget = { type: "disease" | "cc"; slug: string; label: string; scopeSlugs?: string[] };
type SpecialtyChoice = QbankSpecialtySummary;
type TheorySourceType = "disease" | "cc" | "drug" | "other";

function initialActiveSessions() {
  return loadLocalActiveQbankSessions().filter((session) => !session.mockExam?.finishedAt);
}

function compactSessionLabels(labels: string[]): string {
  const unique = [...new Set(labels)];
  return unique.length > 2 ? `${unique.slice(0, 2).join("·")} 외 ${unique.length - 2}개` : unique.join("·");
}

function activeSessionDescription(
  session: QbankActiveSession,
  questionsById: Map<string, QbankQuestionIndex>,
  practiceById: Map<string, PracticeIndex>,
  practiceTopicLabels: Map<string, string>,
): string {
  const context = session.context;
  const settings = context?.summary || context?.settings?.join(" · ");
  if (settings) {
    const readable = [...practiceTopicLabels.entries()].reduce((text, [key, label]) => text.replaceAll(key, label), settings);
    return context?.title && !["문제풀이 세션", "선택 범위 문제풀이", "실전문제 풀이"].includes(context.title)
      ? `${context.title} · ${readable}` : readable;
  }
  if (session.mockExam?.title) return session.mockExam.title;
  const groups = new Map<string, { count: number; specialties: string[] }>();
  for (const id of session.questionIds) {
    const practice = practiceById.get(id);
    const question = questionsById.get(id);
    const kind = practice || id.startsWith("QB-") ? "실전" : question?.questionBank === "theory" ? "이론" : "임상";
    const specialty = practice?.bookDepartment ?? question?.specialty?.replace(/^\d+\s*/, "");
    const group = groups.get(kind) ?? { count: 0, specialties: [] };
    group.count += 1;
    if (specialty) group.specialties.push(specialty);
    groups.set(kind, group);
  }
  const composition = [...groups].map(([kind, group]) => `${kind} ${group.count}문항${group.specialties.length ? ` (${compactSessionLabels(group.specialties)})` : ""}`).join(" · ");
  return context?.title && context.title !== "문제풀이 세션" ? `${context.title} · ${composition}` : composition || "선택 조건 정보 없음";
}

const THEORY_SOURCE_GROUPS: Array<{ type: TheorySourceType; title: string; description: string }> = [
  { type: "disease", title: "질병 이론", description: "질병 문서에서 만든 핵심 개념 문제" },
  { type: "cc", title: "CC 이론", description: "주호소·증상 접근 문제" },
  { type: "drug", title: "약물 이론", description: "약물 문서에서 만든 핵심 개념 문제" },
  { type: "other", title: "기타 이론", description: "분류되지 않은 이론 문제" },
];

const SPECIALTY_SELECTION_GROUPS = [
  { id: "internal", label: "내과", from: 1, to: 10 },
  { id: "surgical", label: "외산소", from: 11, to: 14 },
  { id: "minor", label: "마이너", from: 15, to: 22 },
] as const;

function specialtyNumber(name: string) {
  const number = Number(name.match(/^\s*(\d{1,2})\b/)?.[1]);
  return Number.isFinite(number) ? number : null;
}

function theorySourceType(question: QbankQuestionIndex): TheorySourceType {
  return question.targetType === "disease" || question.targetType === "cc" || question.targetType === "drug" ? question.targetType : "other";
}

function theorySelectionKey(question: Pick<QbankQuestionIndex, "targetType" | "specialtySlug">) {
  const sourceType = question.targetType === "disease" || question.targetType === "cc" || question.targetType === "drug" ? question.targetType : "other";
  return `${sourceType}:${question.specialtySlug}`;
}

function specialtyChoices(questions: QbankQuestionIndex[], questionBank: "theory" | "clinical", theorySource?: TheorySourceType): SpecialtyChoice[] {
  const grouped = new Map<string, SpecialtyChoice>();
  for (const question of questions) {
    if (question.questionBank !== questionBank) continue;
    if (questionBank === "theory" && theorySource && theorySourceType(question) !== theorySource) continue;
    const current = grouped.get(question.specialtySlug);
    const slug = questionBank === "theory" ? theorySelectionKey(question) : question.specialtySlug;
    grouped.set(question.specialtySlug, current ? { ...current, count: current.count + 1 } : { slug, name: question.specialty, count: 1 });
  }
  return [...grouped.values()].sort((left, right) => left.name.localeCompare(right.name, "ko"));
}

function QuestionBankPicker({ questionBank, title, items, selected, setSelected, appearance = "default", showHeading = true }: { questionBank: "theory" | "clinical"; title: string; items: SpecialtyChoice[]; selected: string[]; setSelected: (items: string[]) => void; appearance?: "default" | "chat"; showHeading?: boolean }) {
  const allSlugs = items.map((item) => item.slug);
  const all = allSlugs.length > 0 && allSlugs.every((slug) => selected.includes(slug));
  const selectionGroups = SPECIALTY_SELECTION_GROUPS.map((group) => ({
    ...group,
    items: items.filter((item) => {
      const number = specialtyNumber(item.name);
      return number !== null && number >= group.from && number <= group.to;
    }),
  })).filter((group) => group.items.length > 0);
  const toggleSelection = (slugs: string[]) => {
    if (!slugs.length) return;
    setSelected(toggleGroup(selected, slugs));
  };
  return <fieldset>
    <legend className={showHeading ? "text-base font-semibold text-slate-900" : "sr-only"}>{title}{showHeading ? <> <span className="text-sm font-normal text-slate-500">{items.reduce((sum, item) => sum + item.count, 0).toLocaleString()}문항</span></> : null}</legend>
    {items.length > 0 && <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
      {selectionGroups.map((group) => {
        const slugs = group.items.map((item) => item.slug);
        const active = slugs.every((slug) => selected.includes(slug));
        return <button key={group.id} type="button" onClick={() => toggleSelection(slugs)} className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${active ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800"}`}>{group.label}</button>;
      })}
      <button type="button" onClick={() => toggleSelection(allSlugs)} className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${all ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800"}`}>{all ? "전체 해제" : "전체 선택"}</button>
    </div>}
    {items.length === 0 ? <SkinStatus kind="questionsEmpty" fallback={`연결된 ${questionBank === "theory" ? "이론" : "임상"} 문제가 없습니다.`} className="mt-3 text-sm text-slate-500" /> : <div className={appearance === "chat" ? "chat-qbank-choice-list" : "mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4"}>{items.map((item) => {
      const checked = selected.includes(item.slug);
      return <label key={item.slug} className={appearance === "chat" ? "chat-qbank-choice" : `flex cursor-pointer items-start gap-1.5 rounded-lg border px-2.5 py-2 text-[13px] leading-5 sm:px-3 sm:text-sm ${checked ? "border-teal-400 bg-teal-50 text-teal-950" : "border-slate-200 bg-white text-slate-700"}`} data-checked={checked}>
        {appearance === "chat" ? <span className="skin-contact-avatar" aria-hidden="true" /> : null}
        <input type="checkbox" checked={checked} onChange={() => setSelected(checked ? selected.filter((value) => value !== item.slug) : [...selected, item.slug])} className="mt-0.5 h-4 w-4 shrink-0 accent-teal-600" /><span className="min-w-0">{item.name}</span> <span className="shrink-0 text-[11px] text-slate-500">({item.count})</span>
      </label>;
    })}</div>}
  </fieldset>;
}

export function QbankDashboardClient({ questions, relatedTarget }: { questions: QbankQuestionIndex[]; relatedTarget?: RelatedTarget }) {
  const { theme } = useSkinTheme();
  const chatLayout = theme === "chat" && !relatedTarget;
  const availableQuestions = useMemo(() => {
    if (!relatedTarget) return questions;
    const targetSlugs = new Set(relatedTarget.type === "disease" ? (relatedTarget.scopeSlugs ?? [relatedTarget.slug]) : [relatedTarget.slug]);
    return questions.filter((question) => (
      (question.targetType === relatedTarget.type && targetSlugs.has(question.targetSlug))
      || (relatedTarget.type === "disease" && question.relatedDiseaseSlugs?.some((slug) => targetSlugs.has(slug)))
      || (relatedTarget.type === "cc" && question.relatedCcSlugs?.includes(relatedTarget.slug))
    ));
  }, [questions, relatedTarget]);
  const theoryGroups = useMemo(() => THEORY_SOURCE_GROUPS.map((group) => ({ ...group, items: specialtyChoices(availableQuestions, "theory", group.type) })).filter((group) => group.items.length > 0), [availableQuestions]);
  const clinicalSpecialties = useMemo(() => specialtyChoices(availableQuestions, "clinical"), [availableQuestions]);
  const [tab, setTab] = useState<"theory" | "clinical" | "practice">("theory");
  const [chatPracticeFooter, setChatPracticeFooter] = useState<HTMLDivElement | null>(null);
  const [topControlsTarget, setTopControlsTarget] = useState<HTMLDivElement | null>(null);
  const chatPickerContent = useRef<HTMLDivElement>(null);
  const chooseBank = (next: "theory" | "clinical" | "practice") => {
    setTab(next);
    chatPickerContent.current?.scrollTo({ top: 0 });
  };
  const [practice, setPractice] = useState<PracticeIndex[]>([]);
  const [practiceMessage, setPracticeMessage] = useState("실전문제 접근 권한을 확인 중입니다.");
  const [practiceFilters, setPracticeFilters] = useState<PracticeFilters>(EMPTY_PRACTICE_FILTERS);
  const [loadedDraft, setLoadedDraft] = useState("");
  const draftKey = `medicine-qbank-picker-v2:${relatedTarget ? `${relatedTarget.type}:${relatedTarget.slug}` : "all"}`;
  const [selectedTheory, setSelectedTheory] = useState<string[]>([]);
  const [selectedClinical, setSelectedClinical] = useState<string[]>([]);
  const [count, setCount] = useState("10");
  const [showUnattemptedDialog, setShowUnattemptedDialog] = useState(false);
  const [unattemptedCount, setUnattemptedCount] = useState("10");
  const [stats, setStats] = useState({ attempted: 0, wrong: 0, bookmarks: 0 });
  const [activeSessions, setActiveSessions] = useState<QbankActiveSession[]>([]);
  const [activeSessionSyncRevision, setActiveSessionSyncRevision] = useState(0);
  const [activeSessionSyncError, setActiveSessionSyncError] = useState("");
  const [activeSessionSyncing, setActiveSessionSyncing] = useState(false);
  const [endingActiveSessionId, setEndingActiveSessionId] = useState("");
  const [activeSessionError, setActiveSessionError] = useState<{ sessionId: string; message: string } | null>(null);
  const questionsById = useMemo(() => new Map(questions.map((question) => [question.id, question])), [questions]);
  const practiceById = useMemo(() => new Map(practice.map((question) => [question.id, question])), [practice]);
  const practiceTopicLabels = useMemo(() => new Map<string, string>(practice.flatMap((question) => [
    [practiceTopicKey(question), practiceTopicLabel(question)] as [string, string],
    [question.specialtySlug, question.specialty.replace(/^\d+\s*/, "")] as [string, string],
  ])), [practice]);

  useEffect(() => {
    const refresh = () => {
      const state = loadQbankState();
      const progress = Object.values(state.progress);
      setStats({ attempted: progress.length, wrong: state.wrongIds.length, bookmarks: state.bookmarkIds.length });
    };
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);

  useEffect(() => {
    let active = true;
    const local = initialActiveSessions();
    queueMicrotask(() => { if (active) setActiveSessions(local); });
    const client = getSupabaseBrowserClient();
    if (!client) return () => { active = false; };
    let channel: ReturnType<typeof client.channel> | null = null;
    const restore = async () => {
      setActiveSessionSyncing(true);
      setActiveSessionSyncError("");
      const { data: auth, error: authError } = await client.auth.getUser();
      if (!active) return;
      if (authError) throw authError;
      if (!auth.user) return;
      const owner = window.localStorage.getItem(OWNER_KEY);
      if (owner && owner !== auth.user.id) {
        const accountSessions = await loadCloudActiveQbankSessionState(client, auth.user.id);
        if (!active) return;
        setActiveSessions(accountSessions.sessions.filter((session) => !session.mockExam?.finishedAt));
        setActiveSessionSyncError("이 기기의 다른 계정 기록은 제외했습니다. 현재 계정의 문제 세트만 표시합니다.");
        return;
      }
      if (!owner) window.localStorage.setItem(OWNER_KEY, auth.user.id);

      const cloud = await loadCloudActiveQbankSessionState(client, auth.user.id);
      if (!active) return;
      for (const sessionId of cloud.endedSessionIds) clearLocalActiveQbankSession(sessionId);
      const pending = planActiveQbankSessionSync(initialActiveSessions(), cloud.sessions, cloud.endedSessionIds);
      for (const session of cloud.sessions) if (!session.mockExam?.finishedAt) saveLocalActiveQbankSession(session);
      setActiveSessions(pending.sessions);
      const uploads = await Promise.allSettled(pending.toUpload.map((session) => saveCloudActiveQbankSession(client, auth.user.id, session)));
      for (const result of uploads) if (result.status === "rejected") console.warn("Q-bank active session upload failed.", result.reason);
      if (!active) return;
      const confirmed = pending.toUpload.length ? await loadCloudActiveQbankSessionState(client, auth.user.id) : cloud;
      if (!active) return;
      for (const sessionId of confirmed.endedSessionIds) clearLocalActiveQbankSession(sessionId);
      const reconciled = planActiveQbankSessionSync(initialActiveSessions(), confirmed.sessions, confirmed.endedSessionIds);
      for (const session of confirmed.sessions) if (!session.mockExam?.finishedAt) saveLocalActiveQbankSession(session);
      setActiveSessions(reconciled.sessions);
      if (reconciled.toUpload.length) {
        setActiveSessionSyncError("일부 문제 세트를 계정에 저장하지 못했습니다. 다시 시도해 주세요.");
      }
      channel = client.channel(`qbank-active-sessions:${auth.user.id}`)
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "qbank_active_sessions", filter: `user_id=eq.${auth.user.id}` }, (payload) => {
          const session = activeSessionFrom((payload.new as Record<string, unknown>).payload);
          if (session && !session.mockExam?.finishedAt) {
            saveLocalActiveQbankSession(session);
            setActiveSessions((items) => activeSessionsFrom([session, ...items]));
          }
        })
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "qbank_active_sessions", filter: `user_id=eq.${auth.user.id}` }, (payload) => {
          const row = payload.new as Record<string, unknown>;
          const sessionId = row.session_id;
          if (typeof sessionId === "string" && row.ended_at) {
            clearLocalActiveQbankSession(sessionId);
            setActiveSessions((items) => items.filter((session) => session.sessionId !== sessionId));
            return;
          }
          const session = activeSessionFrom(row.payload);
          if (session && !session.mockExam?.finishedAt) {
            saveLocalActiveQbankSession(session);
            setActiveSessions((items) => activeSessionsFrom([session, ...items]));
          }
        })
        .subscribe();
    };
    void restore().catch((error) => {
      console.warn("Q-bank active session lookup failed.", error);
      if (active) setActiveSessionSyncError("문제 세트 동기화에 실패했습니다. 네트워크를 확인하고 다시 시도해 주세요.");
    }).finally(() => { if (active) setActiveSessionSyncing(false); });
    const authListener = client.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT") window.setTimeout(() => { if (active) setActiveSessionSyncRevision((value) => value + 1); }, 0);
    });
    const refreshWhenVisible = () => { if (document.visibilityState === "visible") setActiveSessionSyncRevision((value) => value + 1); };
    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      active = false;
      authListener.data.subscription.unsubscribe();
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      if (channel) void client.removeChannel(channel);
    };
  }, [activeSessionSyncRevision]);

  const endActiveSession = async (activeSession: QbankActiveSession) => {
    if (endingActiveSessionId) return;
    setEndingActiveSessionId(activeSession.sessionId);
    setActiveSessionError(null);
    try {
      const client = getSupabaseBrowserClient();
      if (client) {
        const { data: auth } = await client.auth.getUser();
        if (auth.user) await removeCloudActiveQbankSession(client, auth.user.id, activeSession.sessionId, activeSession);
      }
      clearLocalActiveQbankSession(activeSession.sessionId);
      setActiveSessions((items) => items.filter((session) => session.sessionId !== activeSession.sessionId));
    } catch (error) {
      console.warn("Q-bank active session could not be ended.", error);
      setActiveSessionError({ sessionId: activeSession.sessionId, message: "저장된 풀이를 종료하지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요." });
    } finally {
      setEndingActiveSessionId("");
    }
  };

  useEffect(() => {
    let active = true;
    let revision = 0;
    const refresh = async () => {
      const request = ++revision;
      setPractice([]);
      setPracticeMessage("실전문제 접근 권한을 확인 중입니다.");
      try {
        const result = await loadPracticeIndex();
        if (active && request === revision) {
          const aliases = Object.fromEntries(result.questions.flatMap((question) => (question.sourceIds ?? []).map((sourceId) => [sourceId, question.id])));
          remapQbankQuestionIds(aliases);
          remapLocalActiveQbankSession(aliases);
          setActiveSessions((items) => activeSessionsFrom([...initialActiveSessions(), ...items]));
          setPractice(result.questions);
          setPracticeMessage(result.message);
        }
      } catch (error) { if (active && request === revision) setPracticeMessage(error instanceof Error ? error.message : "실전문제를 불러오지 못했습니다."); }
    };
    void refresh();
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const listener = getSupabaseBrowserClient()?.auth.onAuthStateChange(() => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => { if (active) void refresh(); }, 0);
    });
    return () => { active = false; clearTimeout(refreshTimer); listener?.data.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(draftKey) ?? "null");
      // Restore browser-only draft after hydration; server rendering cannot read sessionStorage.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedTheory(stringArray(saved?.theory));
      setSelectedClinical(stringArray(saved?.clinical));
      setPracticeFilters({ books: [], specialties: stringArray(saved?.practice?.specialties), years: stringArray(saved?.practice?.years), series: [], departments: stringArray(saved?.practice?.departments), order: saved?.practice?.order === "book" ? "book" : "random" });
      setTab(saved?.tab === "clinical" || saved?.tab === "practice" ? saved.tab : "theory");
      setCount(typeof saved?.count === "string" ? saved.count : "10");
    } catch { /* Storage is optional; in-memory selections remain available. */ }
    setLoadedDraft(draftKey);
  }, [draftKey]);
  useEffect(() => {
    if (loadedDraft !== draftKey) return;
    try { sessionStorage.setItem(draftKey, JSON.stringify({ tab, theory: selectedTheory, clinical: selectedClinical, practice: practiceFilters, count })); } catch { /* Storage unavailable. */ }
  }, [loadedDraft, draftKey, tab, selectedTheory, selectedClinical, practiceFilters, count]);
  const availablePractice = useMemo(() => practice.filter((q) => !relatedTarget || (relatedTarget.type === "disease" ? q.relatedDiseaseSlugs.some((slug) => (relatedTarget.scopeSlugs ?? [relatedTarget.slug]).includes(slug)) : q.relatedCcSlugs.includes(relatedTarget.slug))), [practice, relatedTarget]);
  const practiceCount = availablePractice.filter((q) => matchesPractice(q, practiceFilters)).length;
  const selectedTheoryCount = availableQuestions.filter((q) => q.questionBank === "theory" && selectedTheory.includes(theorySelectionKey(q))).length;
  const selectedClinicalCount = availableQuestions.filter((q) => q.questionBank === "clinical" && selectedClinical.includes(q.specialtySlug)).length;
  const includeTheory = true;
  const includeClinical = true;
  const includePractice = practiceFilters.order !== "book";
  const randomSources = [
    { label: "이론", count: includeTheory ? selectedTheoryCount : 0 },
    { label: "임상", count: includeClinical ? selectedClinicalCount : 0 },
    { label: "실전", count: includePractice ? practiceCount : 0 },
  ].filter(source => source.count > 0);
  const randomPool = randomSources.reduce((sum, source) => sum + source.count, 0);
  const requestedCount = readQbankQuestionCount(count);
  const drawCount = Math.min(requestedCount ?? 0, randomPool);
  const quickCount = requestedCount ?? QBANK_DEFAULT_COUNT;
  const unattemptedSize = readQbankQuestionCount(unattemptedCount);
  const sessionParams = new URLSearchParams({
    mode: relatedTarget ? "related" : "selection",
    theory: includeTheory ? selectedTheory.join(",") : "",
    clinical: includeClinical ? selectedClinical.join(",") : "",
    count: String(drawCount),
    practiceSeries: includePractice ? (practiceFilters.series ?? []).join(",") : "",
    practiceDepartments: includePractice ? (practiceFilters.departments ?? []).join(",") : "",
    practiceBooks: includePractice ? practiceFilters.books.join(",") : "",
    practiceSpecialties: includePractice ? practiceFilters.specialties.join(",") : "",
    practiceYears: includePractice ? practiceFilters.years.join(",") : "",
  });
  if (relatedTarget) {
    sessionParams.set("targetType", relatedTarget.type);
    sessionParams.set("target", relatedTarget.slug);
    sessionParams.set("targetLabel", relatedTarget.label);
    if (relatedTarget.type === "disease") sessionParams.set("targets", (relatedTarget.scopeSlugs ?? [relatedTarget.slug]).join(","));
  }
  const sessionHref = `/review/qbank/session?${sessionParams.toString()}`;
  const randomStartEnabled = drawCount > 0;
  const randomStartBar = tab !== "practice" ? <QbankStartBar
    label="랜덤풀이 시작"
    summary={`${randomSources.length === 1 ? randomSources[0].label : "선택"} ${randomPool.toLocaleString()}문항`}
    count={count}
    max={randomPool || undefined}
    onCountChange={setCount}
    error={requestedCount === undefined && randomPool > 0 ? "문항 수는 1 이상의 정수로 입력하세요." : undefined}
    actions={[{ label: randomStartEnabled ? `${drawCount}문항 랜덤 시작` : "랜덤 시작", topLabel: "시작", href: randomStartEnabled ? sessionHref : undefined }]}
    topControlsTarget={loadedDraft === draftKey ? topControlsTarget : null}
    appearance={chatLayout ? "chat" : "default"}
  /> : null;
  const selectionTabs = <div role="tablist" aria-label="문제 종류" className={`grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1${relatedTarget ? " mt-3" : ""}`}>
        {([['theory', '이론문제', selectedTheoryCount], ['clinical', '임상문제', selectedClinicalCount], ['practice', '실전문제', practiceCount]] as const).map(([key, label, selected]) => <button key={key} type="button" role="tab" id={`tab-${key}`} aria-selected={tab === key} aria-controls={`panel-${key}`} tabIndex={tab === key ? 0 : -1} onClick={() => chooseBank(key)} onKeyDown={(event) => {
          const tabs = ['theory', 'clinical', 'practice'] as const;
          const index = tabs.indexOf(key);
          const next = event.key === 'ArrowRight' ? tabs[(index + 1) % 3] : event.key === 'ArrowLeft' ? tabs[(index + 2) % 3] : event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[2] : null;
          if (next) { event.preventDefault(); chooseBank(next); document.getElementById(`tab-${next}`)?.focus(); }
        }} className={`rounded-md px-2 text-sm font-semibold ${chatLayout || relatedTarget ? "py-3" : "py-2"} ${tab === key ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600'}`}>{label} <span className="text-xs">{selected > 0 ? `(${selected})` : ''}</span></button>)}
      </div>;
  const bankHeading = (bank: typeof tab, title: string, total: number) => <header className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
    <h3 className="text-base font-semibold text-slate-900">{title} <span className="whitespace-nowrap text-sm font-normal text-slate-500">{total.toLocaleString()}문항</span></h3>
    <div ref={tab === bank ? setTopControlsTarget : undefined} className="ml-auto min-w-0 empty:hidden" />
  </header>;
  const selectionPanels = <><div role="tabpanel" id="panel-theory" aria-labelledby="tab-theory" hidden={tab !== "theory"} className="mt-6 space-y-6">
        {bankHeading("theory", "이론 문제", theoryGroups.reduce((sum, group) => sum + group.items.reduce((countSum, item) => countSum + item.count, 0), 0))}
        {theoryGroups.map((group) => <div key={group.type} className="border-t border-slate-200 pt-5"><QuestionBankPicker appearance={chatLayout ? "chat" : "default"} questionBank="theory" title={group.title} items={group.items} selected={selectedTheory} setSelected={setSelectedTheory} /></div>)}
      </div>
      <div role="tabpanel" id="panel-clinical" aria-labelledby="tab-clinical" hidden={tab !== "clinical"} className="mt-6">
        {bankHeading("clinical", "임상 문제", clinicalSpecialties.reduce((sum, item) => sum + item.count, 0))}
        <QuestionBankPicker appearance={chatLayout ? "chat" : "default"} questionBank="clinical" title="임상 문제" items={clinicalSpecialties} selected={selectedClinical} setSelected={setSelectedClinical} showHeading={false} />
      </div>
      <div role="tabpanel" id="panel-practice" aria-labelledby="tab-practice" hidden={tab !== "practice"} className="mt-6 space-y-3">
        {bankHeading("practice", "실전 문제", availablePractice.length)}
        <PracticeBankPicker appearance={chatLayout ? "chat" : "default"} footerTarget={chatLayout ? chatPracticeFooter : undefined} topControlsTarget={tab === "practice" && loadedDraft === draftKey ? topControlsTarget : null} questions={availablePractice} filters={practiceFilters} onChange={setPracticeFilters} message={practiceMessage} />
      </div></>;
  if (chatLayout) {
    return <ChatQbankLobby
      banks={[{ id: "theory", label: "이론", selected: selectedTheoryCount }, { id: "clinical", label: "임상", selected: selectedClinicalCount }, { id: "practice", label: "실전", selected: practiceCount }]}
      bank={tab} onChooseBank={chooseBank} stats={stats} total={questions.length + practice.length} quickCount={quickCount}
      endingSessionId={endingActiveSessionId} onEndSession={(id) => { const session = activeSessions.find((item) => item.sessionId === id); if (session) void endActiveSession(session); }}
      syncStatus={<>{activeSessionSyncError ? <SkinStatus kind="syncFailed" fallback={activeSessionSyncError} detail={activeSessionSyncError} onRetry={() => setActiveSessionSyncRevision((value) => value + 1)} className="chat-qbank-sync" /> : null}{activeSessionSyncing ? <SkinStatus kind="syncing" fallback="문제 세트 동기화 중…" inline className="chat-qbank-sync" /> : null}</>}
      conversations={activeSessions.map((session) => ({
        id: session.sessionId, title: activeSessionDescription(session, questionsById, practiceById, practiceTopicLabels),
        current: Math.min(session.currentIndex + 1, session.questionIds.length), total: session.questionIds.length, answers: session.answers.length,
        error: activeSessionError?.sessionId === session.sessionId ? <SkinStatus kind="saveError" fallback={activeSessionError.message} detail={activeSessionError.message} className="chat-qbank-sync" /> : undefined,
      }))}
    >
      <fieldset disabled={loadedDraft !== draftKey} className="chat-qbank-form">
        {selectionTabs}
        <div ref={chatPickerContent} className="chat-qbank-picker-content">{selectionPanels}</div>
        <div ref={setChatPracticeFooter} className="chat-qbank-practice-footer" hidden={tab !== "practice"} />
        {randomStartBar}
      </fieldset>
    </ChatQbankLobby>;
  }

  return <div className={`${theme === "pixel" ? "pixel-qbank-lobby " : ""}${relatedTarget ? "space-y-6" : "space-y-3"}`}>
    {!relatedTarget ? <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div className="flex min-w-0 flex-wrap items-baseline gap-x-4 gap-y-1">
        <h1 className="text-lg font-semibold text-slate-950">{theme === "notebook" ? "연습 노트" : theme === "pixel" ? "모험 준비" : "문제 풀기"}</h1>
        <dl aria-label="문제풀이 요약" className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1 text-xs sm:text-sm">
          <div className="flex items-baseline gap-1 whitespace-nowrap"><dt className="text-slate-500">전체 문제</dt><dd className="font-semibold tabular-nums">{(questions.length + practice.length).toLocaleString()}</dd></div>
          <div className="flex items-baseline gap-1 whitespace-nowrap"><dt className="text-slate-500">풀이 완료</dt><dd className="font-semibold tabular-nums">{stats.attempted.toLocaleString()}</dd></div>
          <div className="flex items-baseline gap-1 whitespace-nowrap text-rose-700"><dt>오답</dt><dd className="font-semibold tabular-nums">{stats.wrong.toLocaleString()}</dd></div>
        </dl>
      </div>
      <nav aria-label="문제 풀기 이동" className="flex flex-wrap items-center gap-2">
        <Link href="/review" className="secondary-action min-h-8 gap-1.5 px-2.5 py-1 text-xs"><ArrowLeft className="h-3.5 w-3.5" />REVIEW로 돌아가기</Link>
        <Link href="/review/qbank/stats" className="primary-action min-h-8 px-2.5 py-1 text-xs">학습 통계</Link>
      </nav>
    </header> : null}

    {!relatedTarget && (activeSessions.length > 0 || activeSessionSyncError) ? <SkinPanel className="space-y-1.5" label="진행 중인 문제 세트" title="진행 중인 문제 세트" ordinal={2}>
      {activeSessionSyncError ? <SkinStatus kind="syncFailed" fallback={activeSessionSyncError} detail={activeSessionSyncError} onRetry={() => setActiveSessionSyncRevision((value) => value + 1)} className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900" /> : null}
      {activeSessionSyncing ? <SkinStatus kind="syncing" fallback="문제 세트 동기화 중…" inline className="px-1 text-xs text-slate-500" /> : null}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-2">
        {activeSessions.map((activeSession, index) => {
          const topics = activeSession.context?.topics?.slice(0, 4).map((topic) => `${topic.title} ${topic.count}`).join(" · ");
          return <article key={activeSession.sessionId} className="flex min-w-0 items-center gap-2 rounded-lg border border-teal-200 bg-teal-50/60 px-2.5 py-1.5">
            <div className="min-w-0 flex-1 text-xs leading-4 text-teal-800">
              <p className="break-words"><strong className="mr-1.5 whitespace-nowrap font-semibold text-teal-950">세트 {index + 1}</strong>{activeSessionDescription(activeSession, questionsById, practiceById, practiceTopicLabels)}</p>
              <p className="mt-0.5 text-[11px] tabular-nums">{Math.min(activeSession.currentIndex + 1, activeSession.questionIds.length)} / {activeSession.questionIds.length}번 · 제출 {activeSession.answers.length}문항{activeSession.context?.kind === "related-theory" ? " · 관련 문제풀이" : ""}</p>
              {topics ? <p className="mt-0.5 break-words text-[11px]">{topics}</p> : null}
              {activeSessionError?.sessionId === activeSession.sessionId ? <SkinStatus kind="saveError" fallback={activeSessionError.message} detail={activeSessionError.message} className="mt-1 text-xs text-rose-700" /> : null}
            </div>
            <div className="flex shrink-0 gap-1">
              <Link href={`/review/qbank/session?session=${encodeURIComponent(activeSession.sessionId)}`} className="qbank-session-action qbank-session-action--resume" aria-label={`세트 ${index + 1} 재개`}>재개</Link>
              <button type="button" className="qbank-session-action qbank-session-action--end" aria-label={`세트 ${index + 1} 종료`} disabled={Boolean(endingActiveSessionId)} onClick={() => void endActiveSession(activeSession)}>{endingActiveSessionId === activeSession.sessionId ? "종료 중…" : "종료"}</button>
            </div>
          </article>;
        })}
      </div>
    </SkinPanel> : null}

    <SkinPanel className={relatedTarget ? "surface p-5 sm:p-6" : "surface p-3 sm:p-4"} title="문제 세트 구성" ordinal={3}>
      <fieldset disabled={loadedDraft !== draftKey}>
      {relatedTarget ? <h2 className="text-xl font-semibold text-slate-950">{relatedTarget.label} 관련 문제</h2> : null}
      {selectionTabs}
      {selectionPanels}
      {randomStartBar}

      </fieldset>
    </SkinPanel>

    {!relatedTarget ? <SkinPanel className="grid gap-2 sm:grid-cols-3" title="빠른 실행" ordinal={5}>
      <button type="button" onClick={() => setShowUnattemptedDialog(true)} className="list-tile flex items-center gap-2.5 px-3.5 py-3 text-left"><RotateCcw className="h-4 w-4 shrink-0 text-teal-700" /><h3 className="font-semibold">미풀이 문제</h3></button>
      <Link href={`/review/qbank/session?mode=wrong&count=${quickCount}`} className="list-tile flex items-center gap-2.5 px-3.5 py-3"><CircleAlert className="h-4 w-4 shrink-0 text-rose-700" /><h3 className="font-semibold">오답 다시 풀기</h3><span className="ml-auto text-xs tabular-nums text-slate-500">{stats.wrong}개</span></Link>
      <Link href={`/review/qbank/session?mode=bookmarks&count=${quickCount}`} className="list-tile flex items-center gap-2.5 px-3.5 py-3"><Bookmark className="h-4 w-4 shrink-0 text-amber-700" /><h3 className="font-semibold">북마크</h3><span className="ml-auto text-xs tabular-nums text-slate-500">{stats.bookmarks}개</span></Link>
    </SkinPanel> : null}

    {showUnattemptedDialog ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4" role="dialog" aria-modal="true" aria-labelledby="unattempted-dialog-title">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
        <h2 id="unattempted-dialog-title" className="text-lg font-semibold text-slate-950">미풀이 문제</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">풀지 않은 문제 중에서 무작위로 출제할 문항 수를 입력하세요.</p>
        <label className="mt-5 block text-sm font-medium text-slate-700">문항 수
          <input type="number" min="1" step="1" inputMode="numeric" autoFocus value={unattemptedCount} onChange={(event) => setUnattemptedCount(event.target.value)} aria-invalid={unattemptedSize === undefined} aria-describedby="qbank-unattempted-help" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5" />
        </label>
        <p id="qbank-unattempted-help" className="mt-2 text-xs text-slate-600">{unattemptedSize === undefined ? "문항 수는 1 이상의 정수로 입력하세요." : "남아 있는 미풀이 문항까지만 출제합니다."}</p>
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={() => setShowUnattemptedDialog(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">취소</button>
          {unattemptedSize === undefined ? <button type="button" disabled className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white opacity-40">시작하기</button> : <Link href={`/review/qbank/session?mode=unattempted&count=${unattemptedSize}`} onClick={() => setShowUnattemptedDialog(false)} className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">시작하기</Link>}
        </div>
      </div>
    </div> : null}
  </div>;
}
