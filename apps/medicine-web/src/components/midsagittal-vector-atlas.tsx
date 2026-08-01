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

type Region = { id: string; label: string; d: string; fill: string };

// These paths are the single source of truth for both the visible anatomy
// and the interactive layer. Do not replace them with an independently drawn overlay.
const regions: Region[] = [
  { id: "frontal-lobe", label: "Frontal lobe", fill: "url(#cortex-front)", d: "M154 526 C132 411 169 292 255 208 C336 128 445 82 565 72 C619 67 676 72 724 87 C703 152 692 232 699 312 C656 347 612 390 588 446 C544 535 463 587 364 603 C273 618 197 587 154 526 Z" },
  { id: "parietal-lobe", label: "Parietal lobe", fill: "url(#cortex-parietal)", d: "M724 87 C819 59 933 77 1020 125 C1121 181 1199 283 1233 394 C1248 444 1246 493 1232 534 C1169 511 1107 472 1051 417 C986 354 906 322 820 320 C774 318 735 315 699 312 C692 232 703 152 724 87 Z" },
  { id: "occipital-lobe", label: "Occipital lobe", fill: "url(#cortex-occipital)", d: "M1232 534 C1214 628 1150 701 1057 735 C1002 755 939 763 885 748 C916 688 928 624 911 561 C897 504 858 448 820 320 C906 322 986 354 1051 417 C1107 472 1169 511 1232 534 Z" },
  { id: "temporal-lobe", label: "Temporal lobe", fill: "url(#cortex-temporal)", d: "M154 526 C197 587 273 618 364 603 C463 587 544 535 588 446 C633 501 668 555 716 589 C771 628 836 651 885 748 C829 792 731 812 636 804 C536 796 445 768 379 719 C309 666 249 605 154 526 Z" },
  { id: "cingulate-gyrus", label: "Cingulate gyrus", fill: "url(#cingulate)", d: "M320 434 C350 312 463 234 591 218 C713 202 836 233 930 318 L894 361 C815 296 713 273 609 288 C501 303 411 361 383 454 Z" },
  { id: "corpus-callosum", label: "Corpus callosum", fill: "url(#callosum)", d: "M401 456 C432 363 531 320 637 320 C754 319 852 364 899 435 C906 468 899 499 878 523 C841 462 759 425 661 425 C563 424 486 452 447 509 C421 497 404 479 401 456 Z" },
  { id: "thalamus", label: "Thalamus", fill: "url(#thalamus)", d: "M615 467 C663 429 747 430 791 470 C817 496 816 538 790 568 C748 606 670 608 624 570 C594 544 591 494 615 467 Z" },
  { id: "hypothalamus", label: "Hypothalamus", fill: "url(#hypothalamus)", d: "M663 572 C700 592 748 592 781 568 L793 614 L748 650 L684 639 L649 605 Z" },
  { id: "optic-chiasm", label: "Optic chiasm", fill: "url(#optic)", d: "M651 633 L692 613 L724 634 L758 612 L786 632 L744 660 L720 649 L678 663 Z" },
  { id: "midbrain", label: "Midbrain", fill: "url(#brainstem)", d: "M736 584 C775 560 820 578 838 614 L835 674 L774 691 L730 652 Z" },
  { id: "pons", label: "Pons", fill: "url(#pons)", d: "M710 664 C745 624 831 624 869 666 C881 709 868 752 833 778 C786 799 734 785 707 748 C695 717 696 686 710 664 Z" },
  { id: "medulla", label: "Medulla", fill: "url(#medulla)", d: "M754 769 C786 782 821 782 843 760 L869 995 L799 1016 L762 993 Z" },
  { id: "cerebellum", label: "Cerebellum", fill: "url(#cerebellum)", d: "M855 572 C938 513 1056 522 1132 586 C1208 649 1220 765 1154 842 C1095 912 982 936 892 892 C841 847 817 780 833 710 C845 657 864 620 855 572 Z" },
];

const activePathway: Record<string, string[]> = {
  corticospinal: ["frontal-lobe", "midbrain", "pons", "medulla"],
  dcml: ["thalamus", "medulla"],
  spinothalamic: ["thalamus", "midbrain", "pons", "medulla"],
  corticobulbar: ["frontal-lobe", "midbrain", "pons", "medulla"],
  visual: ["thalamus", "optic-chiasm"],
  "pupil-pathway": ["optic-chiasm", "midbrain"],
  sympathetic: ["hypothalamus", "midbrain", "pons", "medulla"],
  parasympathetic: ["midbrain", "pons", "medulla"],
};

const sulci = [
  "M250 252 C302 229 354 228 402 247 M213 311 C268 288 324 293 369 321 M185 375 C244 352 299 362 342 397 M183 452 C231 437 275 446 314 475",
  "M440 145 C421 192 426 235 453 271 M521 112 C495 160 500 204 529 245 M604 101 C581 146 587 189 616 224 M781 116 C760 164 770 207 807 243",
  "M870 112 C843 161 854 207 891 245 M958 147 C923 194 930 239 973 278 M1040 202 C1000 250 1011 298 1052 337 M1114 282 C1071 324 1082 373 1127 411",
  "M1004 533 C1075 554 1124 592 1149 644 M966 580 C1042 605 1092 650 1108 706 M925 633 C993 663 1030 713 1038 765",
  "M287 603 C350 634 419 649 483 645 M384 693 C454 719 518 731 575 727",
];

function InteractiveRegion({ region, active, onSelect, onHover }: { region: Region; active: boolean; onSelect: (id: string) => void; onHover: (id?: string) => void }) {
  const common = { tabIndex: 0, role: "button" as const, "aria-label": region.label, "data-structure-id": region.id, onMouseEnter: () => onHover(region.id), onMouseLeave: () => onHover(), onFocus: () => onHover(region.id), onBlur: () => onHover(), onClick: () => onSelect(region.id), onKeyDown: (event: KeyboardEvent<SVGPathElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(region.id); } } };
  return <path {...common} d={region.d} fill={active ? "#14b8a6" : "transparent"} fillOpacity={active ? .36 : 0} stroke={active ? "#08776e" : "transparent"} strokeWidth={active ? 4.5 : 18} strokeLinejoin="round" className="cursor-pointer outline-none" />;
}

export function MidsagittalVectorAtlas({ pathwayId, selectedId, hoveredId, onSelect, onHover }: Props) {
  const pathwayIds = pathwayId ? activePathway[pathwayId] ?? [] : [];
  return <div className="relative h-full w-full select-none" role="img" aria-label="Cerebrum midsagittal interactive atlas">
    <svg viewBox="0 0 1440 1080" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cortex-front" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7ddd4"/><stop offset="1" stopColor="#eab7a7"/></linearGradient>
        <linearGradient id="cortex-parietal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f4d8d1"/><stop offset="1" stopColor="#e7aca0"/></linearGradient>
        <linearGradient id="cortex-occipital" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eed0c9"/><stop offset="1" stopColor="#dc9b91"/></linearGradient>
        <linearGradient id="cortex-temporal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5d7c6"/><stop offset="1" stopColor="#e6b196"/></linearGradient>
        <linearGradient id="cingulate" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ccddd1"/><stop offset="1" stopColor="#9cbfaf"/></linearGradient>
        <linearGradient id="callosum" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff6dc"/><stop offset="1" stopColor="#e7d2a1"/></linearGradient>
        <radialGradient id="thalamus"><stop stopColor="#d8c8df"/><stop offset="1" stopColor="#a98caf"/></radialGradient>
        <linearGradient id="hypothalamus" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5d695"/><stop offset="1" stopColor="#d4a95f"/></linearGradient>
        <linearGradient id="optic" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fcf4d5"/><stop offset="1" stopColor="#dec57a"/></linearGradient>
        <linearGradient id="brainstem" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f2d9a2"/><stop offset="1" stopColor="#c79155"/></linearGradient>
        <linearGradient id="pons" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#efd19a"/><stop offset="1" stopColor="#c99355"/></linearGradient>
        <linearGradient id="medulla" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f0d6a7"/><stop offset="1" stopColor="#bd8653"/></linearGradient>
        <radialGradient id="cerebellum"><stop stopColor="#ead9ef"/><stop offset="1" stopColor="#b9a0c3"/></radialGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#d9e8ee" strokeWidth="1"/></pattern>
      </defs>
      <rect width="1440" height="1080" fill="#fffefd"/><rect x="32" y="28" width="1376" height="1010" fill="url(#grid)" stroke="#d7e7ed" strokeWidth="2"/>
      <g stroke="#553f3a" strokeWidth="3" strokeLinejoin="round">
        {regions.filter((region) => ["frontal-lobe", "parietal-lobe", "occipital-lobe", "temporal-lobe"].includes(region.id)).map((region) => <path key={region.id} d={region.d} fill={region.fill}/>) }
        <path d="M356 542 C414 514 497 516 588 446 C633 501 668 555 716 589 C771 628 836 651 885 748 C829 792 731 812 636 804 C536 796 445 768 379 719 C340 684 324 625 356 542 Z" fill="#e9c9b5"/>
        {regions.filter((region) => !["frontal-lobe", "parietal-lobe", "occipital-lobe", "temporal-lobe"].includes(region.id)).map((region) => <path key={region.id} d={region.d} fill={region.fill}/>) }
      </g>
      <g fill="none" stroke="#715956" strokeWidth="2.25" strokeLinecap="round" opacity=".78">{sulci.map((d, index) => <path key={index} d={d}/>)}</g>
      <g fill="none" stroke="#806881" strokeWidth="2" opacity=".75">
        <path d="M887 628 C935 594 1003 594 1062 628 M872 670 C937 636 1034 638 1101 682 M857 718 C927 679 1058 690 1128 739 M858 769 C928 732 1048 750 1120 793 M878 815 C940 788 1032 803 1094 838"/>
        <path d="M929 577 C906 649 906 760 941 866 M981 559 C962 655 962 781 989 888 M1032 570 C1017 670 1023 777 1041 881 M1080 603 C1063 687 1073 764 1092 842"/>
      </g>
      <g>{regions.map((region) => <InteractiveRegion key={region.id} region={region} active={region.id === selectedId || region.id === hoveredId || pathwayIds.includes(region.id)} onSelect={onSelect} onHover={onHover}/>)}</g>
    </svg>
  </div>;
}
