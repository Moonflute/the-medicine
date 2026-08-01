import { NervousSystemHub } from "@/components/nervous-system-hub";
import { getAllDiseases, getNervousSystemAtlas } from "@/lib/webdb";

export default function NervousSystemHubPage() {
  const diseaseHrefs = Object.fromEntries(getAllDiseases().map((disease) => [disease.title, `/disease/${disease.slug}`]));
  return <NervousSystemHub atlas={getNervousSystemAtlas()} diseaseHrefs={diseaseHrefs} />;
}