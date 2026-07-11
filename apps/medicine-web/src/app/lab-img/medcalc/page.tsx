"use client";

import { useEffect } from "react";

const MEDCALC_URL = "https://chronic-disease-dun.vercel.app/";

export default function MedCalcPage() {
  useEffect(() => {
    window.location.replace(MEDCALC_URL);
  }, []);

  return (
    <main className="page-stack">
      <header className="page-header">
        <div className="eyebrow">MedCalc</div>
        <h1 className="page-title">Opening external calculator</h1>
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          MedCalc is maintained at the external calculator site. If the redirect does not start automatically, use the link below.
        </p>
        <a
          href={MEDCALC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit rounded-lg bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          Open MedCalc
        </a>
      </header>
    </main>
  );
}