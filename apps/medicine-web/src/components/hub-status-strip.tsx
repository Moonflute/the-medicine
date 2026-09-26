type HubStatusStripProps = {
  reviewedAt: string;
  items: Array<{ label: string; value: number | string }>;
  tone?: "slate" | "rose" | "teal";
};

const tones = {
  slate: "border-slate-200 bg-slate-50 text-slate-700",
  rose: "border-rose-200 bg-rose-50 text-rose-900",
  teal: "border-teal-200 bg-teal-50 text-teal-900",
};

export function HubStatusStrip({ reviewedAt, items, tone = "slate" }: HubStatusStripProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border px-4 py-3 text-xs ${tones[tone]}`}>
      <span><b>내용 검토일</b> {reviewedAt}</span>
      {items.map((item) => <span key={item.label}><b>{item.label}</b> {item.value}</span>)}
    </div>
  );
}
