import { MedCalcPageClient } from "@/components/medcalc-page-client";
import { ParentPageFab } from "@/components/parent-page-fab";

export default function MedCalcPage() {
  return (
    <>
      <MedCalcPageClient />
      <ParentPageFab href="/lab-img" />
    </>
  );
}