import { QbankDashboardClient } from "@/components/qbank-dashboard-client";
import { getQbankIndex } from "@/lib/webdb";

export default function QbankPage() {
  return <div className="page-stack qbank-page">
    <QbankDashboardClient questions={getQbankIndex()} />
  </div>;
}
