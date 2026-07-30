"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  AUDIO_REVIEW_CHANGE_EVENT,
  loadAudioReviewSession,
  saveAudioReviewSession,
  type AudioReviewSession,
} from "@/lib/audio-review";

type AudioReviewControls = {
  session: AudioReviewSession | null;
  supported: boolean;
  play: (session?: AudioReviewSession) => void;
  pause: () => void;
  previous: () => void;
  next: () => void;
  previousDocument: () => void;
  nextDocument: () => void;
  setRate: (rate: number) => void;
  clear: () => void;
};

const AudioReviewContext = createContext<AudioReviewControls | null>(null);

function normalizePosition(session: AudioReviewSession) {
  const playlist = session.playlist;
  if (!playlist.length) return { ...session, status: "ended" as const, itemIndex: 0, segmentIndex: 0 };
  const itemIndex = Math.max(0, Math.min(session.itemIndex, playlist.length - 1));
  const segmentIndex = Math.max(0, Math.min(session.segmentIndex, playlist[itemIndex].segments.length - 1));
  return { ...session, itemIndex, segmentIndex };
}

function forward(session: AudioReviewSession) {
  const current = normalizePosition(session);
  const item = current.playlist[current.itemIndex];
  if (current.segmentIndex + 1 < item.segments.length) return { ...current, segmentIndex: current.segmentIndex + 1 };
  if (current.itemIndex + 1 < current.playlist.length) return { ...current, itemIndex: current.itemIndex + 1, segmentIndex: 0 };
  return { ...current, status: "ended" as const };
}

function backward(session: AudioReviewSession) {
  const current = normalizePosition(session);
  if (current.segmentIndex > 0) return { ...current, segmentIndex: current.segmentIndex - 1 };
  if (current.itemIndex > 0) {
    const itemIndex = current.itemIndex - 1;
    return { ...current, itemIndex, segmentIndex: current.playlist[itemIndex].segments.length - 1 };
  }
  return current;
}

export function AudioReviewProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AudioReviewSession | null>(null);
  const sessionRef = useRef<AudioReviewSession | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speakAtRef = useRef<(target: AudioReviewSession) => void>(() => undefined);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const persist = useCallback((next: AudioReviewSession | null) => {
    const timestamped = next ? { ...next, updatedAt: new Date().toISOString() } : null;
    sessionRef.current = timestamped;
    setSession(timestamped);
    saveAudioReviewSession(timestamped);
    return timestamped;
  }, []);

  const cancel = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    utteranceRef.current = null;
  }, []);

  const speakAt = useCallback((target: AudioReviewSession) => {
    if (!supported || target.status !== "playing") return;
    const normalized = normalizePosition(target);
    const item = normalized.playlist[normalized.itemIndex];
    const segment = item?.segments[normalized.segmentIndex];
    if (!segment) {
      persist({ ...normalized, status: "ended" });
      return;
    }
    cancel();
    const utterance = new SpeechSynthesisUtterance(segment.text);
    utterance.lang = "ko-KR";
    utterance.rate = normalized.rate;
    utterance.onend = () => {
      if (utteranceRef.current !== utterance || sessionRef.current?.status !== "playing") return;
      const next = forward(sessionRef.current);
      const stored = persist(next);
      if (stored?.status === "playing") window.setTimeout(() => speakAtRef.current(stored), 120);
    };
    utterance.onerror = (event) => {
      if (event.error === "canceled" || event.error === "interrupted") return;
      const current = sessionRef.current;
      if (!current || current.status !== "playing") return;
      const next = forward(current);
      const stored = persist(next);
      if (stored?.status === "playing") window.setTimeout(() => speakAtRef.current(stored), 120);
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [cancel, persist, supported]);

  useEffect(() => { speakAtRef.current = speakAt; }, [speakAt]);

  const play = useCallback((replacement?: AudioReviewSession) => {
    if (!supported) return;
    const base = replacement ?? sessionRef.current;
    if (!base) return;
    const restart = base.status === "ended" ? { ...base, itemIndex: 0, segmentIndex: 0 } : base;
    const next = normalizePosition({ ...restart, status: "playing" });
    const stored = persist(next);
    if (stored) speakAt(stored);
  }, [persist, speakAt, supported]);

  const pause = useCallback(() => {
    const current = sessionRef.current;
    if (!current) return;
    if (supported) window.speechSynthesis.pause();
    persist({ ...current, status: "paused" });
  }, [persist, supported]);

  const move = useCallback((direction: "next" | "previous") => {
    const current = sessionRef.current;
    if (!current) return;
    cancel();
    const target = direction === "next" ? forward(current) : backward(current);
    const stored = persist({ ...target, status: target.status === "ended" ? "paused" : "playing" });
    if (stored) speakAt(stored);
  }, [cancel, persist, speakAt]);

const moveDocument = useCallback((direction: "next" | "previous") => {
    const current = sessionRef.current;
    if (!current) return;
    const targetIndex = direction === "next" ? current.itemIndex + 1 : current.itemIndex - 1;
    if (targetIndex < 0 || targetIndex >= current.playlist.length) return;
    cancel();
    const stored = persist({ ...current, itemIndex: targetIndex, segmentIndex: 0, status: "playing" });
    if (stored) speakAt(stored);
  }, [cancel, persist, speakAt]);
  const setRate = useCallback((rate: number) => {
    const current = sessionRef.current;
    if (!current) return;
    const wasPlaying = current.status === "playing";
    cancel();
    const stored = persist({ ...current, rate, status: wasPlaying ? "playing" : "paused" });
    if (wasPlaying && stored) speakAt(stored);
  }, [cancel, persist, speakAt]);

  useEffect(() => {
    const loaded = loadAudioReviewSession();
    sessionRef.current = loaded;
    const initialTimer = window.setTimeout(() => setSession(loaded), 0);
    const sync = (event: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : undefined;
      const next = detail?.session as AudioReviewSession | null | undefined;
      if (next === undefined) return;
      sessionRef.current = next;
      setSession(next);
    };
    window.addEventListener(AUDIO_REVIEW_CHANGE_EVENT, sync);
    return () => {
      cancel();
      window.clearTimeout(initialTimer);
      window.removeEventListener(AUDIO_REVIEW_CHANGE_EVENT, sync);
    };
  }, [cancel]);

  return <AudioReviewContext.Provider value={{ session, supported, play, pause, previous: () => move("previous"), next: () => move("next"), previousDocument: () => moveDocument("previous"), nextDocument: () => moveDocument("next"), setRate, clear: () => { cancel(); persist(null); } }}>{children}</AudioReviewContext.Provider>;
}

export function useAudioReview() {
  const context = useContext(AudioReviewContext);
  if (!context) throw new Error("useAudioReview must be used within AudioReviewProvider");
  return context;
}
