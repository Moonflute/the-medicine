import { MaternalChildHub } from "@/components/maternal-child-hub";
import { getAllDiseases, getMaternalChildHubData } from "@/lib/webdb";

export default function MaternalChildHubPage() {
  return <MaternalChildHub diseases={getAllDiseases()} hub={getMaternalChildHubData()} />;
}
