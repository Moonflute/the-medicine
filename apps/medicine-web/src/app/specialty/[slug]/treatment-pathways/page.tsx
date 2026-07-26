import { notFound, redirect } from "next/navigation";
import { getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return getSpecialties().filter((item) => item.name.replace(/^\d+\s*/, "").trim() === "\uac10\uc5fc").map((item) => ({ slug: item.slug }));
}

export default async function InfectionTreatmentPathwaysPage(props: { params: Promise<{ slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { slug } = await props.params;
  const specialty = getSpecialties().find((item) => item.slug === slug);
  if (!specialty || specialty.name.replace(/^\d+\s*/, "").trim() !== "\uac10\uc5fc") notFound();

  const params = await props.searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (typeof value === "string") query.set(key, value);
  query.set("tab", "pathways");
  redirect(`/specialty/${slug}/hub?${query.toString()}`);
}