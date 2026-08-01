"use client";

import type { KeyboardEvent } from "react";
import type { NeuroAtlasLayer } from "@/components/native-neuro-atlas";

type PilotProps = {
  viewId: "whole-neuraxis" | "brain-midsagittal" | "spinal-cross-section";
  layer: NeuroAtlasLayer;
  pathwayId?: string;
  selectedId?: string;
  hoveredId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
};

type Region = { id: string; label: string; d: string; kind?: "line" | "area" };

const pathwayStructures: Record<string, string[]> = {
  corticospinal: ["frontal-lobe", "midbrain", "pons", "medulla", "spinal-cord", "peripheral-nerve", "skeletal-muscle"],
  dcml: ["peripheral-nerve", "nerve-root", "dorsal-column", "medulla", "thalamus", "postcentral-gyrus"],
  spinothalamic: ["peripheral-nerve", "nerve-root", "spinothalamic", "thalamus", "postcentral-gyrus"],
};

const routeColor: Record<string, string> = { motor: "#0f8d83", sensory: "#366ff0", cranial: "#8b5cf6", reflex: "#d97706", autonomic: "#b45309" };

const maps: Record<PilotProps["viewId"], { asset: string; viewBox: string; regions: Region[]; route: string }> = {
  "whole-neuraxis": {
    asset: "/neuro-atlas/illustrations/whole-neuraxis.png", viewBox: "0 0 1152 1408",
    regions: [
      { id: "frontal-lobe", label: "Cerebrum", d: "M457 35 C491 12 665 12 700 42 L701 140 C676 195 488 198 454 142 Z" },
      { id: "cerebellum", label: "Cerebellum", d: "M465 118 C490 99 663 99 689 122 L678 193 C631 225 514 225 472 192 Z" },
      { id: "midbrain", label: "Midbrain", d: "M548 107 L608 107 L616 161 L539 161 Z" },
      { id: "pons", label: "Pons", d: "M532 159 C549 140 609 140 626 162 L619 200 C597 216 554 216 536 200 Z" },
      { id: "medulla", label: "Medulla", d: "M548 199 L607 199 L605 252 L550 252 Z" },
      { id: "spinal-cord", label: "Spinal cord", d: "M553 237 L603 237 L605 924 L550 924 Z" },
      { id: "brachial-plexus", label: "Brachial plexus", kind: "line", d: "M550 255 C489 278 412 293 337 339 M600 255 C663 278 740 293 815 339" },
      { id: "lumbosacral-plexus", label: "Lumbosacral plexus", kind: "line", d: "M551 721 C494 733 440 762 393 815 M602 721 C657 733 712 762 759 815" },
      { id: "peripheral-nerve", label: "Peripheral nerves", kind: "line", d: "M342 339 C254 460 216 691 173 935 M811 339 C900 460 937 691 979 935 M393 814 C327 964 352 1156 370 1371 M759 814 C826 964 800 1156 782 1371" },
      { id: "neuromuscular-junction", label: "Neuromuscular junction", d: "M798 1070 C812 1060 831 1060 843 1076 L836 1095 C821 1102 806 1094 798 1070 Z" },
      { id: "skeletal-muscle", label: "Skeletal muscle", d: "M784 1097 C846 1067 976 1070 1042 1138 L1016 1307 L808 1307 Z" },
    ],
    route: "M573 63 L575 198 L576 535 L576 736 C690 795 731 1035 820 1158",
  },
  "brain-midsagittal": {
    asset: "/neuro-atlas/illustrations/brain-midsagittal.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "frontal-lobe", label: "Frontal lobe", d: "M163 448 C166 235 377 63 652 68 L720 205 L598 522 L250 596 Z" },
      { id: "parietal-lobe", label: "Parietal lobe", d: "M650 65 C931 35 1187 206 1281 425 L1021 531 L781 356 Z" },
      { id: "temporal-lobe", label: "Temporal lobe", d: "M165 448 L251 596 L592 518 L756 636 L646 754 L386 732 L245 609 Z" },
      { id: "occipital-lobe", label: "Occipital lobe", d: "M1280 425 C1354 530 1265 681 1112 687 L984 553 L1020 531 Z" },
      { id: "cingulate-gyrus", label: "Cingulate gyrus", d: "M326 340 C491 197 773 202 953 348 L914 401 C738 297 486 309 367 445 Z" },
      { id: "corpus-callosum", label: "Corpus callosum", d: "M399 356 C512 267 762 269 910 380 L889 434 C744 342 531 349 426 430 Z" },
      { id: "thalamus", label: "Thalamus", d: "M660 392 C717 349 806 385 808 462 C783 526 694 536 647 487 C636 454 637 420 660 392 Z" },
      { id: "hypothalamus", label: "Hypothalamus", d: "M668 487 L746 485 L764 538 L708 568 L655 535 Z" },
      { id: "optic-chiasm", label: "Optic chiasm", d: "M620 549 L681 522 L718 550 L779 522 L799 552 L729 589 L700 575 L650 590 Z" },
      { id: "midbrain", label: "Midbrain", d: "M711 523 L785 523 L805 587 L687 587 Z" },
      { id: "pons", label: "Pons", d: "M622 584 C660 532 795 532 832 587 L824 676 C767 714 684 714 630 676 Z" },
      { id: "medulla", label: "Medulla", d: "M675 674 L784 674 L808 1038 L724 1041 Z" },
      { id: "cerebellum", label: "Cerebellum", d: "M824 528 C1005 450 1209 553 1219 705 C1218 863 1047 900 871 831 L801 700 Z" },
    ],
    route: "M490 147 C561 211 606 333 667 411 L725 529 L737 1040",
  },
  "spinal-cross-section": {
    asset: "/neuro-atlas/illustrations/spinal-cross-section.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "spinal-cord", label: "Spinal cord", d: "M299 269 C377 166 1061 166 1142 269 L1136 730 C1070 858 373 858 303 730 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M517 195 C575 167 686 166 722 222 L721 472 L642 479 L546 410 Z M723 222 C759 166 869 167 927 195 L899 410 L800 479 L722 472 Z" },
      { id: "lateral-corticospinal", label: "Lateral corticospinal tracts", d: "M348 380 C425 316 505 358 520 450 L450 570 L352 536 Z M1092 380 C1015 316 935 358 920 450 L990 570 L1088 536 Z" },
      { id: "spinothalamic", label: "Anterolateral system", d: "M342 530 L450 570 L482 746 L366 716 Z M1098 530 L990 570 L958 746 L1074 716 Z" },
      { id: "central-canal", label: "Central canal", d: "M706 510 C713 500 728 500 735 510 C740 520 733 530 721 530 C710 530 701 520 706 510 Z" },
      { id: "dorsal-horn", label: "Dorsal horns", d: "M505 303 C570 341 622 402 636 505 L556 552 L480 450 Z M935 303 C870 341 818 402 804 505 L884 552 L960 450 Z" },
      { id: "ventral-horn", label: "Ventral horns", d: "M473 538 L628 513 L679 591 L639 726 L518 713 L442 626 Z M967 538 L812 513 L761 591 L801 726 L922 713 L998 626 Z" },
      { id: "nerve-root", label: "Spinal nerve roots", kind: "line", d: "M306 333 C185 287 106 254 60 250 M306 663 C183 698 110 732 60 744 M1134 333 C1255 287 1334 254 1380 250 M1134 663 C1257 698 1330 732 1380 744" },
    ],
    route: "M720 214 L720 392 L880 450 L1008 600 L1090 700",
  },
};

function OverlayRegion({ region, selectedId, hoveredId, pathwayId, onSelect, onHover }: { region: Region; selectedId?: string; hoveredId?: string; pathwayId?: string; onSelect: (id: string) => void; onHover: (id?: string) => void }) {
  const active = region.id === selectedId || region.id === hoveredId || Boolean(pathwayId && pathwayStructures[pathwayId]?.includes(region.id));
  const common = { tabIndex: 0, role: "button" as const, "aria-label": region.label, "data-structure-id": region.id, onMouseEnter: () => onHover(region.id), onMouseLeave: () => onHover(), onFocus: () => onHover(region.id), onBlur: () => onHover(), onClick: () => onSelect(region.id), onKeyDown: (event: KeyboardEvent<SVGPathElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(region.id); } } };
  if (region.kind === "line") return <path {...common} d={region.d} fill="none" stroke={active ? "#08776e" : "transparent"} strokeWidth={active ? 18 : 28} strokeLinecap="round" strokeLinejoin="round" opacity={active ? .82 : 1} className="cursor-pointer outline-none" />;
  return <path {...common} d={region.d} fill={active ? "#16a394" : "transparent"} fillOpacity={active ? .34 : 0} stroke={active ? "#08776e" : "transparent"} strokeWidth={active ? 5 : 16} strokeLinejoin="round" className="cursor-pointer outline-none" />;
}

export function ImageNeuroAtlas(props: PilotProps) {
  const map = maps[props.viewId];
  const color = props.layer === "anatomy" ? undefined : routeColor[props.layer] ?? "#0f8d83";
  return <svg viewBox={map.viewBox} className="block h-full w-full select-none" role="img" aria-label={props.viewId + " interactive anatomy atlas"}>
    <image href={map.asset} x="0" y="0" width={props.viewId === "whole-neuraxis" ? 1152 : 1440} height={props.viewId === "whole-neuraxis" ? 1408 : 1080} preserveAspectRatio="xMidYMid meet" />
    <g>{map.regions.map((region) => <OverlayRegion key={region.id} region={region} selectedId={props.selectedId} hoveredId={props.hoveredId} pathwayId={props.pathwayId} onSelect={props.onSelect} onHover={props.onHover} />)}</g>
    {color ? <path d={map.route} fill="none" stroke="#fff" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" opacity=".92" pointerEvents="none" /> : null}
    {color ? <path d={map.route} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" pointerEvents="none" /> : null}
  </svg>;
}

export const imagePilotViewIds = new Set(Object.keys(maps));
