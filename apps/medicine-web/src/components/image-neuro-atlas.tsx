"use client";

import type { KeyboardEvent } from "react";
import type { NeuroAtlasLayer } from "@/components/native-neuro-atlas";

export type ImageAtlasViewId = "whole-neuraxis" | "cerebrum-lateral" | "brain-midsagittal" | "cerebrum-inferior" | "brain-coronal" | "brain-axial" | "brainstem-external" | "spinal-cross-section";

type PilotProps = {
  viewId: ImageAtlasViewId;
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

const neuroAssetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const routeColor: Record<string, string> = { motor: "#0f8d83", sensory: "#366ff0", cranial: "#8b5cf6", reflex: "#d97706", autonomic: "#b45309" };

const maps: Record<ImageAtlasViewId, { asset: string; viewBox: string; regions: Region[]; route: string }> = {
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
  "cerebrum-lateral": {
    asset: "/neuro-atlas/illustrations/cerebrum-lateral.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "frontal-lobe", label: "Frontal lobe", d: "M159 506 C136 331 247 146 468 94 C557 75 649 74 696 94 L671 315 L589 421 L459 448 L388 520 L248 597 Z" },
      { id: "precentral-gyrus", label: "Precentral gyrus", d: "M627 92 C673 80 726 80 762 103 L737 367 L676 453 L644 424 L675 310 Z" },
      { id: "postcentral-gyrus", label: "Postcentral gyrus", d: "M764 103 C802 79 859 79 894 101 L892 365 L825 454 L778 414 L744 334 Z" },
      { id: "parietal-lobe", label: "Parietal lobe", d: "M892 101 C1095 92 1235 247 1252 438 L1179 577 L1054 511 L924 446 L886 364 Z" },
      { id: "temporal-lobe", label: "Temporal lobe", d: "M449 500 C593 462 780 444 943 460 L1079 572 L1030 672 C874 776 629 824 467 718 Z" },
      { id: "occipital-lobe", label: "Occipital lobe", d: "M1180 399 C1306 416 1328 554 1255 655 L1128 712 L1045 644 L1079 572 L1178 577 Z" },
      { id: "insula", label: "Insula", d: "M420 445 C479 395 573 390 650 432 L588 511 L482 584 L420 534 Z" },
      { id: "midbrain", label: "Midbrain", d: "M704 690 L796 690 L808 751 L689 751 Z" },
      { id: "pons", label: "Pons", d: "M700 744 C726 705 812 706 843 746 L835 808 C804 838 736 838 706 808 Z" },
      { id: "medulla", label: "Medulla", d: "M733 806 L809 806 L841 1005 L767 1009 Z" },
      { id: "cerebellum", label: "Cerebellum", d: "M805 683 C939 638 1130 700 1173 814 C1184 925 1057 987 867 951 L805 876 Z" },
    ], route: "M685 225 L698 460 L742 690 L772 1002",
  },
  "brain-coronal": {
    asset: "/neuro-atlas/illustrations/brain-coronal.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "frontal-lobe", label: "Cerebral cortex", d: "M150 481 C159 184 402 67 720 69 C1037 67 1284 184 1290 481 L1219 768 C1088 929 880 970 720 971 C560 970 352 929 221 768 Z" },
      { id: "corpus-callosum", label: "Corpus callosum", d: "M439 362 C523 302 881 302 1001 372 L974 414 C840 358 593 359 466 413 Z" },
      { id: "lateral-ventricle", label: "Lateral ventricles", d: "M546 395 C589 365 663 364 701 399 L693 482 L569 470 Z M739 399 C777 364 851 365 894 395 L871 470 L747 482 Z" },
      { id: "caudate", label: "Caudate nuclei", d: "M507 400 C557 388 588 446 573 568 L510 634 L462 579 L463 471 Z M933 400 C883 388 852 446 867 568 L930 634 L978 579 L977 471 Z" },
      { id: "internal-capsule", label: "Internal capsules", d: "M590 488 L630 451 L654 638 L616 712 L579 652 Z M850 488 L810 451 L786 638 L824 712 L861 652 Z" },
      { id: "putamen", label: "Putamina", d: "M414 471 C438 416 497 438 518 532 L494 670 L423 696 L378 589 Z M1026 471 C1002 416 943 438 922 532 L946 670 L1017 696 L1062 589 Z" },
      { id: "thalamus", label: "Thalami", d: "M610 506 C639 473 704 474 719 531 L707 668 L627 671 L590 604 Z M830 506 C801 473 736 474 721 531 L733 668 L813 671 L850 604 Z" },
      { id: "midbrain", label: "Midbrain", d: "M642 703 L799 703 L825 801 L615 801 Z" },
    ], route: "M624 629 L650 570 L702 535 M816 629 L790 570 L738 535",
  },
  "brain-axial": {
    asset: "/neuro-atlas/illustrations/brain-axial.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "frontal-lobe", label: "Cerebral cortex", d: "M339 300 C455 111 966 110 1100 300 L1150 637 C1075 883 894 1001 720 1009 C546 1001 365 883 290 637 Z" },
      { id: "lateral-ventricle", label: "Lateral ventricles", d: "M591 314 C630 286 672 290 698 338 L671 508 L598 502 L563 407 Z M849 314 C810 286 768 290 742 338 L769 508 L842 502 L877 407 Z" },
      { id: "caudate", label: "Caudate nuclei", d: "M602 338 L650 360 L659 472 L596 500 L561 407 Z M838 338 L790 360 L781 472 L844 500 L879 407 Z" },
      { id: "internal-capsule", label: "Internal capsules", d: "M540 408 L572 432 L563 586 L521 650 L497 571 Z M900 408 L868 432 L877 586 L919 650 L943 571 Z" },
      { id: "putamen", label: "Putamina", d: "M446 386 C493 342 538 375 547 487 L519 661 L440 640 L407 495 Z M994 386 C947 342 902 375 893 487 L921 661 L1000 640 L1033 495 Z" },
      { id: "thalamus", label: "Thalami", d: "M602 504 C632 467 692 472 708 528 L702 657 L629 685 L582 615 Z M838 504 C808 467 748 472 732 528 L738 657 L811 685 L858 615 Z" },
      { id: "optic-tract", label: "Optic tracts", kind: "line", d: "M610 696 C646 714 680 725 720 729 M830 696 C794 714 760 725 720 729" },
    ], route: "M512 590 L555 497 L621 455 L691 525 M928 590 L885 497 L819 455 L749 525",
  },
  "cerebrum-inferior": {
    asset: "/neuro-atlas/illustrations/cerebrum-inferior.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "frontal-lobe", label: "Frontal lobes", d: "M314 316 C343 93 553 54 720 63 C887 54 1097 93 1126 316 L1024 517 L830 419 L720 403 L610 419 L416 517 Z" },
      { id: "temporal-lobe", label: "Temporal lobes", d: "M301 326 C256 514 324 735 498 821 L633 693 L586 504 L416 517 Z M1139 326 C1184 514 1116 735 942 821 L807 693 L854 504 L1024 517 Z" },
      { id: "optic-nerve", label: "Optic nerves", kind: "line", d: "M664 275 L606 355 M776 275 L834 355" },
      { id: "optic-chiasm", label: "Optic chiasm", d: "M641 360 L696 333 L720 356 L744 333 L799 360 L771 393 L720 374 L669 393 Z" },
      { id: "optic-tract", label: "Optic tracts", kind: "line", d: "M671 390 L620 443 M769 390 L820 443" },
      { id: "midbrain", label: "Midbrain", d: "M650 409 C690 376 750 376 790 409 L790 468 L650 468 Z" },
      { id: "pons", label: "Pons", d: "M603 459 C650 399 790 399 837 459 L829 544 C786 585 654 585 611 544 Z" },
      { id: "medulla", label: "Medulla", d: "M655 539 L785 539 L807 975 L633 975 Z" },
      { id: "cerebellum", label: "Cerebellum", d: "M396 529 C498 436 636 503 654 650 L642 893 C496 955 311 846 288 670 Z M1044 529 C942 436 804 503 786 650 L798 893 C944 955 1129 846 1152 670 Z" },
      { id: "cranial-nerve-roots", label: "Cranial nerve roots", kind: "line", d: "M599 484 L556 454 M841 484 L884 454 M617 566 L568 548 M823 566 L872 548 M646 656 L591 641 M794 656 L849 641" },
    ], route: "M607 355 L720 370 L833 355 M720 393 L720 948",
  },
  "brainstem-external": {
    asset: "/neuro-atlas/illustrations/brainstem-external.png", viewBox: "0 0 1440 1080",
    regions: [
      { id: "midbrain", label: "Midbrain", d: "M561 127 C632 77 808 77 879 127 L844 278 L596 278 Z" },
      { id: "pons", label: "Pons", d: "M432 282 C515 202 925 202 1008 282 L982 509 C886 562 554 562 458 509 Z" },
      { id: "medulla", label: "Medulla", d: "M600 500 L840 500 L864 1001 L576 1001 Z" },
      { id: "cerebellum", label: "Cerebellum", d: "M266 306 C401 192 572 280 610 438 L586 705 C428 817 210 705 214 512 Z M1174 306 C1039 192 868 280 830 438 L854 705 C1012 817 1230 705 1226 512 Z" },
      { id: "cranial-nerve-roots", label: "Cranial nerve roots", kind: "line", d: "M507 260 L442 223 M933 260 L998 223 M486 391 L392 358 M954 391 L1048 358 M512 514 L430 501 M928 514 L1010 501 M570 611 L486 601 M870 611 L954 601 M581 730 L523 726 M859 730 L917 726" },
      { id: "vestibular-nucleus", label: "Vestibular nuclei", d: "M528 434 L570 410 L603 444 L573 485 Z M912 434 L870 410 L837 444 L867 485 Z" },
    ], route: "M720 158 L720 314 L720 489 L720 945",
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
  return <div className="relative h-full w-full select-none" role="img" aria-label={props.viewId + " interactive anatomy atlas"}>
    <img src={`${neuroAssetBasePath}${map.asset}`} alt="" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
    <svg viewBox={map.viewBox} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
      <g>{map.regions.map((region) => <OverlayRegion key={region.id} region={region} selectedId={props.selectedId} hoveredId={props.hoveredId} pathwayId={props.pathwayId} onSelect={props.onSelect} onHover={props.onHover} />)}</g>
      {color ? <path d={map.route} fill="none" stroke="#fff" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" opacity=".92" pointerEvents="none" /> : null}
      {color ? <path d={map.route} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" pointerEvents="none" /> : null}
    </svg>
  </div>;
}

export const imagePilotViewIds = new Set(Object.keys(maps));
