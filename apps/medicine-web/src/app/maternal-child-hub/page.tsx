import { MaternalChildHub } from "@/components/maternal-child-hub";
import { getDiseaseLookup, getMaternalChildHubData } from "@/lib/webdb";

export default function MaternalChildHubPage() {
  return <MaternalChildHub diseases={getDiseaseLookup()} hub={getMaternalChildHubData()} />;
}
