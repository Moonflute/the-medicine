import { redirect } from "next/navigation";
import { getSpecialties } from "@/lib/webdb";

export default function AntibioticsPage() {
  const infection = getSpecialties().find((item) => item.name.replace(/^\d+\s*/, "").trim() === "\uac10\uc5fc");
  if (!infection) redirect("/drugs");

  redirect(`/specialty/${infection.slug}/hub?tab=antibiotics`);
}