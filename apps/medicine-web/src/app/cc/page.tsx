import { ChiefComplaintCard } from "@/components/chief-complaint-card";
import { getChiefComplaints } from "@/lib/webdb";

export default function ChiefComplaintPage() {
  const notes = getChiefComplaints();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Chief Complaint</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">CC</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
          질환 중심이 아니라 증상 중심으로 접근하는 흐름을 여기서 붙일 수 있습니다.
        </p>
      </header>
      <div className="grid gap-6">
        {notes.map((note) => (
          <ChiefComplaintCard key={note.slug} note={note} href={`/cc/${note.slug}`} />
        ))}
      </div>
    </div>
  );
}
