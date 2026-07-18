import { QbankSessionClient } from "@/components/qbank-session-client";
import { getQbankSpecialties } from "@/lib/webdb";

export default function QbankSessionPage() {
  return <QbankSessionClient specialties={getQbankSpecialties()} />;
}
