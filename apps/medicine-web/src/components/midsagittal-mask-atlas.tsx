"use client";

import type { KeyboardEvent } from "react";
import type { NeuroAtlasLayer } from "@/components/native-neuro-atlas";

type Props = {
  layer: NeuroAtlasLayer;
  pathwayId?: string;
  selectedId?: string;
  hoveredId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
};

type Mask = { id: string; label: string; d: string };

// Hand-traced against the locked 1440 × 1080 project illustration.
// The same paths are used for visible highlight and pointer hit-testing.
const masks: Mask[] = [
  { id: "frontal-lobe", label: "Frontal lobe", d: "M653 69 C587 72 509 78 440 102 C344 134 263 184 211 251 C166 310 145 378 150 449 C154 515 178 564 228 602 C278 642 340 662 411 662 C492 663 562 638 613 589 C662 542 685 478 704 407 C724 329 720 241 700 170 C690 134 675 99 653 69 Z" },
  { id: "parietal-lobe", label: "Parietal lobe", d: "M653 69 C731 50 824 61 911 90 C1008 122 1095 184 1155 263 C1200 323 1232 392 1240 457 C1245 500 1238 537 1224 568 C1160 545 1101 511 1047 465 C983 410 912 375 832 355 C781 342 743 336 704 339 C724 266 720 188 700 170 C690 134 675 99 653 69 Z" },
  { id: "occipital-lobe", label: "Occipital lobe", d: "M1224 568 C1210 626 1175 675 1120 711 C1064 748 998 764 932 748 C904 741 879 730 855 714 C889 660 900 608 889 556 C880 505 856 427 832 355 C912 375 983 410 1047 465 C1101 511 1160 545 1224 568 Z" },
  { id: "temporal-lobe", label: "Temporal lobe", d: "M228 602 C276 663 344 698 425 712 C511 726 590 715 651 683 C705 655 742 626 785 618 C824 625 852 663 855 714 C808 764 727 795 638 794 C548 793 466 766 401 726 C337 687 279 644 228 602 Z" },
  { id: "cingulate-gyrus", label: "Cingulate gyrus", d: "M317 436 C350 321 456 244 579 222 C704 199 832 229 931 315 L902 352 C812 285 704 262 599 282 C494 302 408 360 374 457 Z" },
  { id: "corpus-callosum", label: "Corpus callosum", d: "M401 457 C426 374 515 331 618 326 C728 321 833 361 887 429 C903 450 905 478 890 500 C840 452 759 424 662 423 C565 421 489 447 447 505 C422 494 406 478 401 457 Z" },
  { id: "thalamus", label: "Thalamus", d: "M609 456 C652 423 731 425 779 458 C815 482 821 528 792 560 C755 599 679 605 630 571 C596 546 585 486 609 456 Z" },
  { id: "hypothalamus", label: "Hypothalamus", d: "M654 568 C687 588 742 587 778 559 L794 610 L751 648 L687 640 L649 606 Z" },
  { id: "optic-chiasm", label: "Optic chiasm", d: "M644 628 L689 609 L721 632 L756 609 L787 631 L746 661 L720 649 L677 664 Z" },
  { id: "midbrain", label: "Midbrain", d: "M733 572 C771 553 815 573 833 611 L831 665 L773 687 L729 649 Z" },
  { id: "pons", label: "Pons", d: "M706 662 C741 622 824 623 864 661 C879 700 868 744 833 769 C786 792 732 778 707 744 C695 714 695 685 706 662 Z" },
  { id: "medulla", label: "Medulla", d: "M758 763 C788 779 817 779 841 758 L870 995 L800 1016 L764 992 Z" },
  { id: "cerebellum", label: "Cerebellum", d: "M854 560 C931 511 1039 524 1114 582 C1184 637 1203 741 1156 817 C1110 891 1009 924 918 894 C851 872 819 817 825 746 C829 680 860 627 854 560 Z" },
];

const pathwayIds: Record<string, string[]> = {
  corticospinal: ["frontal-lobe", "midbrain", "pons", "medulla"],
  corticobulbar: ["frontal-lobe", "midbrain", "pons", "medulla"],
  dcml: ["thalamus", "medulla"],
  spinothalamic: ["thalamus", "midbrain", "pons", "medulla"],
  visual: ["thalamus", "optic-chiasm"],
  "pupil-pathway": ["optic-chiasm", "midbrain"],
  sympathetic: ["hypothalamus", "midbrain", "pons", "medulla"],
  parasympathetic: ["midbrain", "pons", "medulla"],
};

function MaskRegion({ mask, active, onSelect, onHover }: { mask: Mask; active: boolean; onSelect: (id: string) => void; onHover: (id?: string) => void }) {
  const common = { tabIndex: 0, role: "button" as const, "aria-label": mask.label, "data-structure-id": mask.id, onMouseEnter: () => onHover(mask.id), onMouseLeave: () => onHover(), onFocus: () => onHover(mask.id), onBlur: () => onHover(), onClick: () => onSelect(mask.id), onKeyDown: (event: KeyboardEvent<SVGPathElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(mask.id); } } };
  return <path {...common} d={mask.d} fill={active ? "#0d9488" : "transparent"} fillOpacity={active ? .28 : 0} stroke={active ? "#08776e" : "transparent"} strokeWidth={active ? 3.5 : 16} strokeLinejoin="round" className="cursor-pointer outline-none" />;
}

export function MidsagittalMaskAtlas({ pathwayId, selectedId, hoveredId, onSelect, onHover }: Props) {
  const active = pathwayId ? pathwayIds[pathwayId] ?? [] : [];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return <div className="relative h-full w-full select-none" role="img" aria-label="Cerebrum midsagittal interactive atlas">
    {/* The approved high-detail illustration remains the visible anatomy. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={basePath + "/neuro-atlas/illustrations/brain-midsagittal.png"} alt="" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
    <svg viewBox="0 0 1440 1080" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">{masks.map((mask) => <MaskRegion key={mask.id} mask={mask} active={mask.id === selectedId || mask.id === hoveredId || active.includes(mask.id)} onSelect={onSelect} onHover={onHover}/>)}</svg>
  </div>;
}
