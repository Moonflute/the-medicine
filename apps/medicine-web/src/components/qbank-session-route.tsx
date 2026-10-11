"use client";
import { useSearchParams } from "next/navigation";
import { QbankSessionClient } from "./qbank-session-client";
import type { QbankSpecialtySummary } from "@/lib/types";

/** Different marked questions must mount distinct sessions even on the same route. */
export function QbankSessionRoute({ specialties }: { specialties: QbankSpecialtySummary[] }) {
  const params = useSearchParams();
  const key = params.get("mode") === "study-flow" ? "study-flow:" + (params.get("ids") ?? "") : "standard";
  return <QbankSessionClient key={key} specialties={specialties} />;
}
