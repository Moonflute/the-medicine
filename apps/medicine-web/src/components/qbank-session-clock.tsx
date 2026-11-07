"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { formatQbankClock, isRoundTimeUp, remainingRoundSeconds, type QbankRunningRoundClock } from "@/lib/qbank-round-timer";

export function QbankSessionClock({ roundClock, startedAt, finishedAt, isRunning, onExpire }: {
  roundClock?: QbankRunningRoundClock;
  startedAt?: string;
  finishedAt?: string;
  isRunning?: (clock: QbankRunningRoundClock) => boolean;
  onExpire?: () => void;
}) {
  const [now, setNow] = useState(Date.now);
  const shouldTick = useEffectEvent((clock: QbankRunningRoundClock) => !isRunning || isRunning(clock));
  const expire = useEffectEvent(() => onExpire?.());
  const deadlineAt = roundClock?.deadlineAt;

  useEffect(() => {
    if (finishedAt) return;
    let timer: number;
    function tick() {
      window.clearTimeout(timer);
      if (roundClock && !shouldTick(roundClock)) return;
      const time = Date.now();
      setNow(time);
      if (isRoundTimeUp(deadlineAt, time)) expire();
      else timer = window.setTimeout(tick, deadlineAt === undefined ? 1000 : Math.min(1000, deadlineAt - time));
    }
    timer = window.setTimeout(tick, 0);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [deadlineAt, finishedAt, roundClock]);

  const countdown = deadlineAt !== undefined && !finishedAt;
  const elapsed = ((finishedAt ? Date.parse(finishedAt) : now) - (startedAt ? Date.parse(startedAt) : now)) / 1000;
  const seconds = countdown ? remainingRoundSeconds(deadlineAt, now) : Math.max(0, Math.floor(elapsed));
  return <span role="timer" aria-label={countdown ? "남은 시간" : "경과 시간"} className="tabular-nums">{formatQbankClock(seconds)}</span>;
}
