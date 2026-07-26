import { notFound, redirect } from "next/navigation";
import { getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return getSpecialties().filter((item) => item.name.replace(/^\d+\s*/, "").trim() === "\uac10\uc5fc").map((item) => ({ slug: item.slug }));
}

export default async function InfectionTreatmentPathwaysPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const specialty = getSpecialties().find((item) => item.slug === slug);
  if (!specialty || specialty.name.replace(/^\d+\s*/, "").trim() !== "\uac10\uc5fc") notFound();

  redirect(`/specialty/${slug}/hub?tab=pathways`);
}