"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  AUDIO_REVIEW_CHANGE_EVENT,
  loadAudioReviewSession,
  saveAudioReviewSession,
  speechUnits,
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
  if (!playlist.length) return { ...session, status: "ended" as const, itemIndex: 0, segmentIndex: 0, unitIndex: 0 };
  const itemIndex = Math.max(0, Math.min(session.itemIndex, playlist.length - 1));
  const segments = playlist[itemIndex].segments;
  const segmentIndex = Math.max(0, Math.min(session.segmentIndex, segments.length - 1));
  const units = speechUnits(segments[segmentIndex]?.text ?? "");
  const unitIndex = Math.max(0, Math.min(session.unitIndex ?? 0, units.length - 1));
  return { ...session, itemIndex, segmentIndex, unitIndex };
}

function forward(session: AudioReviewSession) {
  const current = normalizePosition(session);
  const item = current.playlist[current.itemIndex];
  if (current.segmentIndex + 1 < item.segments.length) return { ...current, segmentIndex: current.segmentIndex + 1, unitIndex: 0 };
  if (current.itemIndex + 1 < current.playlist.length) return { ...current, itemIndex: current.itemIndex + 1, segmentIndex: 0, unitIndex: 0 };
  return { ...current, status: "ended" as const, unitIndex: 0 };
}

function backward(session: AudioReviewSession) {
  const current = normalizePosition(session);
  if (current.segmentIndex > 0) {
    const segmentIndex = current.segmentIndex - 1;
    const units = speechUnits(current.playlist[current.itemIndex].segments[segmentIndex].text);
    return { ...current, segmentIndex, unitIndex: Math.max(0, units.length - 1) };
  }
  if (current.itemIndex > 0) {
    const itemIndex = current.itemIndex - 1;
    const segmentIndex = current.playlist[itemIndex].segments.length - 1;
    const units = speechUnits(current.playlist[itemIndex].segments[segmentIndex].text);
    return { ...current, itemIndex, segmentIndex, unitIndex: Math.max(0, units.length - 1) };
  }
  return current;
}

function advanceUnit(session: AudioReviewSession) {
  const current = normalizePosition(session);
  const segment = current.playlist[current.itemIndex].segments[current.segmentIndex];
  const units = speechUnits(segment.text);
  if (current.unitIndex + 1 < units.length) return { next: { ...current, unitIndex: current.unitIndex + 1 }, delay: 80 };
  return { next: forward(current), delay: segment.pauseMs };
}

export function AudioReviewProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AudioReviewSession | null>(null);
  const sessionRef = useRef<AudioReviewSession | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speakAtRef = useRef<(target: AudioReviewSession) => void>(() => undefined);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
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

  const preferredVoice = useCallback((lang: "ko-KR" | "en-US") => {
    const voices = voicesRef.current;
    const lower = lang.toLowerCase();
    const language = lower.slice(0, 2);
    return voices.find((voice) => voice.lang.toLowerCase() === lower)
      ?? voices.find((voice) => voice.lang.toLowerCase().startsWith(`${language}-`))
      ?? voices.find((voice) => voice.lang.toLowerCase().startsWith(language));
  }, []);

  const speakAt = useCallback((target: AudioReviewSession) => {
    if (!supported || target.status !== "playing") return;
    const normalized = normalizePosition(target);
    const segment = normalized.playlist[normalized.itemIndex]?.segments[normalized.segmentIndex];
    const unit = segment ? speechUnits(segment.text)[normalized.unitIndex] : undefined;
    if (!segment || !unit) {
      persist({ ...normalized, status: "ended" });
      return;
    }
    cancel();
    const utterance = new SpeechSynthesisUtterance(unit.text);
    utterance.lang = unit.lang;
    utterance.voice = preferredVoice(unit.lang) ?? null;
    utterance.rate = normalized.rate;
    utterance.onend = () => {
      if (utteranceRef.current !== utterance || sessionRef.current?.status !== "playing") return;
      const advanced = advanceUnit(sessionRef.current);
      const stored = persist(advanced.next);
      if (stored?.status === "playing") window.setTimeout(() => speakAtRef.current(stored), advanced.delay);
    };
    utterance.onerror = (event) => {
      if (event.error === "canceled" || event.error === "interrupted") return;
      const current = sessionRef.current;
      if (!current || current.status !== "playing") return;
      const advanced = advanceUnit(current);
      const stored = persist(advanced.next);
      if (stored?.status === "playing") window.setTimeout(() => speakAtRef.current(stored), advanced.delay);
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [cancel, persist, preferredVoice, supported]);

  useEffect(() => { speakAtRef.current = speakAt; }, [speakAt]);

  const play = useCallback((replacement?: AudioReviewSession) => {
    if (!supported) return;
    const base = replacement ?? sessionRef.current;
    if (!base) return;
    const restart = base.status === "ended" ? { ...base, itemIndex: 0, segmentIndex: 0, unitIndex: 0 } : base;
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
    const stored = persist({ ...current, itemIndex: targetIndex, segmentIndex: 0, unitIndex: 0, status: "playing" });
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
    if (!supported) return;
    const updateVoices = () => { voicesRef.current = window.speechSynthesis.getVoices(); };
    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
  }, [supported]);

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