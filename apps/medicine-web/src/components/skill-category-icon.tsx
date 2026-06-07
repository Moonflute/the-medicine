import {
  ActivitySquare,
  Bandage,
  ClipboardList,
  Droplet,
  GitCommit,
  HeartPulse,
  Pill,
  Stethoscope,
  TestTube,
} from "lucide-react";

const iconMap = {
  Droplet,
  TestTube,
  ActivitySquare,
  Stethoscope,
  HeartPulse,
  GitCommit,
  Pill,
  Bandage,
  ClipboardList,
} as const;

export function SkillCategoryIcon({ iconName, className }: { iconName: string; className?: string }) {
  const Icon = iconMap[iconName as keyof typeof iconMap] ?? Stethoscope;
  return <Icon className={className} />;
}
