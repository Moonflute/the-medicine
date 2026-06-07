import { notFound, redirect } from "next/navigation";
import { getChiefComplaintBySlug, getChiefComplaints } from "@/lib/webdb";

export function generateStaticParams() {
  return getChiefComplaints().map((note) => ({ slug: note.slug }));
}

export default async function ChiefComplaintDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getChiefComplaintBySlug(params.slug);

  if (!note) notFound();
  redirect(`/cc/category/${Buffer.from(note.category || "기타", "utf-8").toString("base64url")}/${note.slug}`);
}
