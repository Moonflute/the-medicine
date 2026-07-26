import { redirect } from "next/navigation";
import { getSpecialties } from "@/lib/webdb";

export default async function AntibioticsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const infection = getSpecialties().find((item) => item.name.replace(/^\d+\s*/, "").trim() === "\uac10\uc5fc");
  if (!infection) redirect("/drugs");

  const params = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (typeof value === "string") query.set(key, value);
  query.set("tab", "antibiotics");
  redirect(`/specialty/${infection.slug}/hub?${query.toString()}`);
}