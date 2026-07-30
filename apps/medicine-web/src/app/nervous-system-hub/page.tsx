import { NervousSystemHub } from "@/components/nervous-system-hub";
import { getNervousSystemAtlas } from "@/lib/webdb";

export default function NervousSystemHubPage() {
  return <NervousSystemHub atlas={getNervousSystemAtlas()} />;
}