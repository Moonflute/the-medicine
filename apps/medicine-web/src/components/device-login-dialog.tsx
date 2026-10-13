"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { KeyRound, LogIn, RefreshCw, X } from "lucide-react";
import { issueDeviceLoginCode, revokeDeviceLoginCode, signInWithDeviceCode, type DeviceLoginCode } from "@/lib/device-login";

type Props = { mode: "sign-in" | "issue"; onClose: () => void; onGoogleSignIn: () => Promise<void> };

export function DeviceLoginDialog({ mode, onClose, onGoogleSignIn }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const inputId = useId();
  const descriptionId = useId();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [remember, setRemember] = useState(false);
  const [issued, setIssued] = useState<DeviceLoginCode | null>(null);
  const [deadline, setDeadline] = useState(0);
  const [now, setNow] = useState(0);
  const remaining = Math.max(0, Math.ceil((deadline - now) / 1000));

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, []);

  useEffect(() => {
    if (!issued) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [issued]);

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    setError("");
    try { await action(); }
    catch (value) { setError(value instanceof Error ? value.message : "잠시 후 다시 시도해 주세요."); }
    finally { setBusy(false); }
  };

  const generate = () => run(async () => {
    setIssued(null);
    const code = await issueDeviceLoginCode();
    const timestamp = Date.now();
    setNow(timestamp);
    setDeadline(timestamp + code.expiresIn * 1000);
    setIssued(code);
  });

  if (typeof document === "undefined") return null;

  return createPortal(<dialog ref={dialog} aria-labelledby={titleId} aria-describedby={descriptionId}
    onCancel={(event) => { event.preventDefault(); if (!busy) onClose(); }}
    onClick={(event) => {
      if (busy || event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    }}
    className="m-auto max-h-[calc(100dvh_-_2rem)] w-[calc(100vw_-_2rem)] max-w-sm overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-xl backdrop:bg-slate-950/40">
    <div className="flex items-center justify-between gap-3">
      <h2 id={titleId} className="text-base font-semibold">{mode === "issue" ? "다른 기기 로그인" : "로그인"}</h2>
      <button type="button" onClick={onClose} disabled={busy} aria-label="닫기" className="secondary-action p-1.5 disabled:opacity-50"><X className="h-4 w-4" /></button>
    </div>
    {mode === "issue" ? <>
      <p id={descriptionId} className="mt-3 text-sm leading-relaxed text-slate-600">PC에서 로그인 창을 열고 아래 번호를 입력하세요. 같은 계정의 학습 기록이 연결됩니다.</p>
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-5 text-center">
        {issued ? <>
          <p className={`font-mono text-3xl font-semibold tracking-widest ${remaining ? "text-teal-700" : "text-slate-400"}`} aria-label={`인증번호 ${issued.code}`}>{issued.code.slice(0, 4)} {issued.code.slice(4)}</p>
          <p className="mt-2 text-xs text-slate-500" role="status">{remaining ? `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")} 뒤 만료 · 1회 사용` : "번호가 만료되었습니다."}</p>
        </> : <p className="text-sm text-slate-500">번호를 생성하면 3분 동안 사용할 수 있습니다.</p>}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" disabled={busy} onClick={() => void generate()} className="secondary-action text-sm disabled:opacity-50">{issued ? <RefreshCw className="h-4 w-4" /> : <KeyRound className="h-4 w-4" />}{busy ? "처리 중…" : issued ? "새 번호 발급" : "번호 생성"}</button>
        <button type="button" disabled={busy || !issued || !remaining} onClick={() => void run(async () => { await revokeDeviceLoginCode(issued!.id); setIssued(null); })} className="secondary-action text-sm disabled:opacity-40">번호 취소</button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">새로 발급하면 이전 번호는 무효화됩니다. 이 번호를 아는 사람은 계정에 로그인할 수 있으니 다른 사람에게 알려주지 마세요.</p>
    </> : <>
      <p id={descriptionId} className="mt-3 text-sm leading-relaxed text-slate-600">Google로 로그인하거나 로그인된 폰에서 생성한 번호를 입력하세요.</p>
      <button type="button" disabled={busy} onClick={() => void run(onGoogleSignIn)} className="secondary-action mt-4 w-full text-sm disabled:opacity-50"><LogIn className="h-4 w-4" />Google로 로그인</button>
      <div className="my-4 flex items-center gap-3 text-xs text-slate-400"><span className="h-px flex-1 bg-slate-200" />번호로 로그인<span className="h-px flex-1 bg-slate-200" /></div>
      <form onSubmit={(event) => { event.preventDefault(); if (!busy && input.length === 8) void run(() => signInWithDeviceCode(input, remember)); }}>
        <label htmlFor={inputId} className="text-xs font-medium text-slate-600">폰에서 만든 8자리 번호</label>
        <input id={inputId} type="text" inputMode="numeric" autoComplete="one-time-code" autoFocus maxLength={12} value={input} disabled={busy} onChange={(event) => setInput(event.target.value.replace(/\D/g, "").slice(0, 8))} placeholder="00000000" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-center font-mono text-xl tracking-widest outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 disabled:opacity-50" />
        <label className="mt-3 flex items-center gap-2 text-xs text-slate-600"><input type="checkbox" checked={remember} disabled={busy} onChange={(event) => setRemember(event.target.checked)} className="accent-teal-700" />이 기기에 로그인 유지</label>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-500">끄면 현재 탭에서만 로그인합니다. 공용 PC에서는 사용 후 로그아웃하세요.</p>
        <button type="submit" disabled={busy || input.length !== 8} className="secondary-action mt-4 w-full text-sm font-medium text-teal-700 disabled:opacity-40"><KeyRound className="h-4 w-4" />{busy ? "로그인 중…" : "번호로 로그인"}</button>
      </form>
    </>}
    {error ? <p role="alert" className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs leading-relaxed text-red-700">{error}</p> : null}
  </dialog>, document.body);
}
