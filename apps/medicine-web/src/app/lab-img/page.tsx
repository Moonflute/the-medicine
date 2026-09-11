import { LabWorkbench } from "@/components/lab-workbench";
import { getAllDiseases, getLabImgNotes } from "@/lib/webdb";

export default function LabImgPage() {
  return <LabWorkbench notes={getLabImgNotes()} diseases={getAllDiseases().map(({title,slug,aliases})=>({title,slug,aliases}))} />;
}
