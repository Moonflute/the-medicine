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
  { keywords: ["개요", "정의", "overview", "summary"], icon: BookOpen },
  { keywords: ["역학", "etiology", "원인", "pathophysiology", "병태"], icon: HeartPulse },
  { keywords: ["증상", "양상", "presentation", "history", "clinical"], icon: Stethoscope },
  { keywords: ["검사", "evaluation", "workup", "lab", "영상"], icon: Microscope },
  { keywords: ["진단", "criteria", "assessment"], icon: ClipboardCheck },
  { keywords: ["감별", "differential"], icon: ScanSearch },
  { keywords: ["치료", "management", "plan", "therapy"], icon: Pill },
  { keywords: ["처치", "procedure", "술기", "intervention"], icon: Syringe },
  { keywords: ["합병증", "complication", "위험", "red flag", "경고"], icon: TriangleAlert },
  { keywords: ["예후", "follow-up", "추적"], icon: ClipboardList },
  { keywords: ["병리", "pathology"], icon: FlaskConical },
  { keywords: ["예방", "prevention"], icon: ShieldAlert },
];

export function DiseaseSectionIcon({ title, className }: { title: string; className?: string }) {
  const normalized = title.toLowerCase();
  const Icon =
    sectionIconRules.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())))?.icon ??
    FileText;

  return <Icon className={className} />;
}
