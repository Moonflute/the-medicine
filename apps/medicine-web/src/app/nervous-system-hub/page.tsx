import { NervousSystemHub } from "@/components/nervous-system-hub";
import { getAllDiseases, getDrugs, getNervousSystemAtlas } from "@/lib/webdb";

export default function NervousSystemHubPage() {
  const diseaseHrefs = Object.fromEntries(getAllDiseases().map((disease) => [disease.title, `/disease/${disease.slug}`]));
  const drugHrefs = Object.fromEntries(getDrugs().map((drug) => [drug.title, `/drugs/${drug.slug}`]));
  return <NervousSystemHub atlas={getNervousSystemAtlas()} diseaseHrefs={diseaseHrefs} drugHrefs={drugHrefs} />;
}