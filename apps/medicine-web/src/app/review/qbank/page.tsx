import { QbankPageLoader } from "@/components/qbank-page-loader";

export default function QbankPage() {
  return <div className="page-stack qbank-page">
    <QbankPageLoader mode="all" />
  </div>;
}
