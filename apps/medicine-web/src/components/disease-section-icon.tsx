import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardCheck,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  Microscope,
  Pill,
  ScanSearch,
  ShieldAlert,
  Stethoscope,
  Syringe,
  TriangleAlert,
} from "lucide-react";

const sectionIconRules: Array<{ keywords: string[]; icon: LucideIcon }> = [
  { keywords: ["overview", "summary", "definition"], icon: BookOpen },
  { keywords: ["etiology", "cause", "pathophysiology"], icon: HeartPulse },
  { keywords: ["symptom", "presentation", "history", "clinical"], icon: Stethoscope },
  { keywords: ["evaluation", "workup", "lab", "image", "exam", "test"], icon: Microscope },
  { keywords: ["diagnosis", "criteria", "assessment"], icon: ClipboardCheck },
  { keywords: ["differential"], icon: ScanSearch },
  { keywords: ["treatment", "management", "plan", "therapy"], icon: Pill },
  { keywords: ["procedure", "intervention"], icon: Syringe },
  { keywords: ["complication", "risk", "red flag", "warning", "emergency"], icon: TriangleAlert },
  { keywords: ["follow-up", "follow up", "monitoring"], icon: ClipboardList },
  { keywords: ["pathology"], icon: FlaskConical },
  { keywords: ["prevention", "prophylaxis"], icon: ShieldAlert },
];

export function DiseaseSectionIcon({ title, className }: { title: string; className?: string }) {
  const normalized = title.toLowerCase();
  const Icon =
    sectionIconRules.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())))?.icon ??
    FileText;

  return <Icon className={className} />;
}

