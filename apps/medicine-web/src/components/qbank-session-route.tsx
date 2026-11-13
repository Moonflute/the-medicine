"use client";
import { useSearchParams } from "next/navigation";
import { QbankSessionClient } from "./qbank-session-client";
import type { QbankSpecialtySummary } from "@/lib/types";

/** A different question set leaves the previous player even on the same route. */
export function QbankSessionRoute({ specialties }: { specialties: QbankSpecialtySummary[] }) {
  const params = useSearchParams();
  const selection = new URLSearchParams(params);
  // The player writes its own storage ID to the current URL after mounting.
  selection.delete("session");
  selection.delete("resume");
  selection.sort();
  return <QbankSessionClient key={selection.toString()} specialties={specialties} />;
}
