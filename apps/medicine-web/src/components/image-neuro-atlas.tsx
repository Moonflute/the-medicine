"use client";

import type { KeyboardEvent } from "react";
import type { NeuroAtlasLayer } from "@/components/native-neuro-atlas";
import { MidsagittalVectorAtlas } from "@/components/midsagittal-vector-atlas";

export type ImageAtlasViewId = "whole-neuraxis" | "cerebrum-lateral" | "cerebrum-medial" | "brain-midsagittal" | "cerebrum-inferior" | "brain-coronal" | "brain-axial" | "brainstem-external" | "brainstem-section" | "cerebellum" | "spinal-levels" | "spinal-cross-section" | "brachial-plexus" | "lumbosacral-plexus" | "sacral-plexus" | "upper-limb-nerves" | "lower-limb-nerves" | "dermatome-anterior" | "dermatome-posterior" | "nmj-muscle" | "myotome" | "midbrain-section" | "pons-section" | "medulla-section" | "cerebellum-section" | "spinal-cervical-section" | "spinal-thoracic-section" | "spinal-lumbar-section" | "spinal-sacral-section" | "skeletal-muscle";

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
  corticospinal: ["precentral-gyrus", "internal-capsule", "midbrain", "pons", "medulla", "lateral-corticospinal", "nerve-root", "peripheral-nerve", "skeletal-muscle"],
  dcml: ["peripheral-nerve", "nerve-root", "dorsal-column", "medulla", "thalamus", "postcentral-gyrus"],
  spinothalamic: ["peripheral-nerve", "nerve-root", "spinothalamic", "thalamus", "postcentral-gyrus"],
  corticobulbar: ["precentral-gyrus", "internal-capsule", "midbrain", "pons", "medulla", "cranial-nerve-roots"],
  "basal-ganglia-loop": ["frontal-lobe", "caudate", "putamen", "globus-pallidus", "thalamus", "precentral-gyrus"],
  spinocerebellar: ["peripheral-nerve", "nerve-root", "spinal-cord", "cerebellum"],
  "trigeminal-sensory": ["trigeminal-ganglion", "trigeminal-nucleus", "thalamus", "postcentral-gyrus"],
  visual: ["retina", "optic-nerve", "optic-chiasm", "optic-tract", "lateral-geniculate", "optic-radiation", "primary-visual-cortex"],
  "pupil-pathway": ["retina", "optic-nerve", "midbrain", "cranial-nerve-roots"],
  "ocular-motor": ["vestibular-nucleus", "pons", "midbrain", "cranial-nerve-roots"],
  "auditory-vestibular": ["cochlea", "vestibular-nucleus", "pons", "midbrain", "thalamus", "superior-temporal-gyrus", "cerebellum"],
  sympathetic: ["hypothalamus", "spinal-cord", "nerve-root", "peripheral-nerve"],
  parasympathetic: ["midbrain", "pons", "medulla", "spinal-cord", "peripheral-nerve"],
};

const neuroAssetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const routeColor: Record<string, string> = { motor: "#0f8d83", sensory: "#366ff0", cranial: "#8b5cf6", reflex: "#d97706", autonomic: "#b45309" };

const maps: Record<ImageAtlasViewId, { asset: string; viewBox: string; regions: Region[] }> = {
  "whole-neuraxis": {
    asset: "/neuro-atlas/illustrations/whole-neuraxis.png", viewBox: "0 0 1152 1408",
    regions: [
      { id: "cerebral-cortex", label: "Cerebral cortex", d: "M457 35 C491 12 665 12 700 42 L701 140 C676 195 488 198 454 142 Z" },
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
    ],
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
    ],
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
    ],
  },
  "cerebrum-medial": {
    asset: "/neuro-atlas/illustrations/cerebrum-medial.png", viewBox: "0 0 1448 1086",
    regions: [
      { id: "frontal-lobe", label: "Frontal lobe", d: "M124 446 C145 224 371 75 690 57 L785 238 L650 586 L299 729 L147 625 Z" },
      { id: "parietal-lobe", label: "Parietal lobe", d: "M679 57 C1001 35 1227 199 1317 432 L1247 643 L1032 624 L911 492 L824 253 Z" },
      { id: "occipital-lobe", label: "Occipital lobe", d: "M1127 312 C1276 332 1354 481 1306 637 L1180 716 L1051 654 L1067 506 Z" },
      { id: "temporal-lobe", label: "Temporal lobe", d: "M270 578 C403 538 595 568 685 671 L620 780 L377 773 L267 674 Z" },
      { id: "cingulate-gyrus", label: "Cingulate gyrus", d: "M341 321 C517 191 811 188 992 329 L944 406 C760 300 519 314 393 447 Z" },
      { id: "corpus-callosum", label: "Corpus callosum", d: "M403 356 C524 286 782 291 917 394 L892 456 C752 364 536 370 435 451 Z" },
      { id: "thalamus", label: "Thalamus", d: "M611 426 C674 381 777 402 810 469 L777 550 L644 540 L593 489 Z" },
      { id: "hypothalamus", label: "Hypothalamus", d: "M627 545 L709 537 L727 590 L671 620 L618 584 Z" },
      { id: "midbrain", label: "Midbrain", d: "M731 531 L812 534 L845 642 L743 634 Z" },
      { id: "pons", label: "Pons", d: "M680 632 C726 584 836 595 867 657 L846 778 C781 824 704 807 665 742 Z" },
      { id: "medulla", label: "Medulla", d: "M749 772 L830 759 L904 1043 L830 1044 Z" },
      { id: "cerebellum", label: "Cerebellum", d: "M874 529 C1069 482 1263 564 1280 719 C1291 898 1112 949 924 896 L838 761 Z" },
    ],
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
    ],
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
    ],
  },
  "brainstem-section": {
    asset: "/neuro-atlas/illustrations/brainstem-section.png", viewBox: "0 0 1086 1448",
    regions: [
      { id: "midbrain", label: "Midbrain section", d: "M253 61 C371 23 704 24 829 75 L856 271 C767 415 330 415 231 276 Z" },
      { id: "cerebellar-peduncles", label: "Cerebellar peduncles", d: "M332 206 C380 172 438 208 445 292 L391 367 L312 310 Z M754 206 C706 172 648 208 641 292 L695 367 L774 310 Z" },
      { id: "pons", label: "Pons section", d: "M221 446 C333 397 752 400 865 450 L876 730 C786 878 302 878 210 730 Z" },
      { id: "lateral-corticospinal", label: "Corticospinal regions", d: "M283 528 C357 478 438 483 453 568 L424 777 L307 777 Z M803 528 C729 478 648 483 633 568 L662 777 L779 777 Z" },
      { id: "medulla", label: "Medulla section", d: "M237 932 C356 884 732 884 850 932 L840 1294 C753 1392 333 1392 246 1294 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M294 962 C353 925 452 932 497 984 L484 1070 L327 1085 Z M792 962 C733 925 634 932 589 984 L602 1070 L759 1085 Z" },
      { id: "spinothalamic", label: "Anterolateral system", d: "M300 1195 L420 1171 L463 1281 L359 1337 Z M786 1195 L666 1171 L623 1281 L727 1337 Z" },
    ],
  },
  "cerebellum": {
    asset: "/neuro-atlas/illustrations/cerebellum.png", viewBox: "0 0 1448 1086",
    regions: [
      { id: "cerebellar-hemisphere", label: "Cerebellar hemispheres", d: "M139 443 C205 288 405 294 544 421 L608 600 L503 832 C292 878 126 764 141 558 Z M1309 443 C1243 288 1043 294 904 421 L840 600 L945 832 C1156 878 1322 764 1307 558 Z" },
      { id: "vermis", label: "Vermis", d: "M647 472 C689 430 759 430 801 472 L811 662 L763 736 L685 736 L637 662 Z" },
      { id: "cerebellar-cortex", label: "Cerebellar cortex", d: "M140 444 C245 348 424 333 559 460 L573 587 L496 772 C324 817 172 708 140 567 Z M1308 444 C1203 348 1024 333 889 460 L875 587 L952 772 C1124 817 1276 708 1308 567 Z" },
      { id: "cerebellar-white-matter", label: "Cerebellar white matter", d: "M276 481 C365 434 473 478 523 592 L453 700 L313 664 Z M1172 481 C1083 434 975 478 925 592 L995 700 L1135 664 Z" },
      { id: "superior-cerebellar-peduncle", label: "Superior cerebellar peduncles", d: "M487 284 L594 170 L636 232 L522 377 Z M961 284 L854 170 L812 232 L926 377 Z" },
      { id: "cerebellar-peduncles", label: "Middle and inferior cerebellar peduncles", d: "M420 441 L558 341 L630 381 L523 525 Z M1028 441 L890 341 L818 381 L925 525 Z M427 688 L608 614 L655 673 L514 768 Z M1021 688 L840 614 L793 673 L934 768 Z" },
      { id: "pons", label: "Pons", d: "M562 267 C625 229 823 229 886 267 L862 489 C806 530 642 530 586 489 Z" },
      { id: "medulla", label: "Medulla", d: "M658 680 L790 680 L801 1036 L647 1036 Z" },
    ],
  },
  "spinal-levels": {
    asset: "/neuro-atlas/illustrations/spinal-levels.png", viewBox: "0 0 1086 1448",
    regions: [
      { id: "cervical-cord", label: "Cervical cord", d: "M488 74 L594 74 L602 345 L479 345 Z" },
      { id: "thoracic-cord", label: "Thoracic cord", d: "M479 342 L602 342 L606 708 L475 708 Z" },
      { id: "lumbar-cord", label: "Lumbar enlargement", d: "M475 704 L606 704 L623 867 L465 867 Z" },
      { id: "sacral-cord", label: "Sacral cord / conus", d: "M465 860 L623 860 L592 1010 L500 1010 Z" },
      { id: "nerve-root", label: "Spinal roots and cauda equina", kind: "line", d: "M499 86 C421 144 402 238 437 310 M586 86 C665 144 684 238 649 310 M479 372 C383 455 380 666 442 751 M606 372 C703 455 706 666 644 751 M500 867 C405 996 392 1207 512 1361 M591 867 C682 996 695 1207 575 1361" },
    ],
  },
  "cerebellum-section": {
    asset: "/neuro-atlas/illustrations/cerebellum-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "cerebellum", label: "Cerebellum", d: "M95 360 C180 155 1060 155 1159 360 L1110 798 C950 972 304 972 144 798 Z" },
      { id: "cerebellar-cortex", label: "Cerebellar cortex", d: "M108 372 C211 194 1043 194 1146 372 L1087 540 C954 406 300 406 167 540 Z M159 714 C305 874 949 874 1095 714 L1120 808 C949 976 305 976 134 808 Z" },
      { id: "cerebellar-white-matter", label: "Arbor vitae", d: "M244 485 C392 392 862 392 1010 485 L940 748 C804 816 450 816 314 748 Z" },
      { id: "vermis", label: "Vermis", d: "M568 312 C608 273 646 273 686 312 L714 742 L627 852 L540 742 Z" },
      { id: "cerebellar-peduncles", label: "Cerebellar peduncles", d: "M256 770 L472 708 L537 804 L314 916 Z M998 770 L782 708 L717 804 L940 916 Z" },
    ],
  },
  "spinal-cervical-section": {
    asset: "/neuro-atlas/illustrations/spinal-cervical-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "spinal-cord", label: "Cervical spinal cord", d: "M196 278 C321 175 933 175 1058 278 L1086 803 C960 1020 294 1020 168 803 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M405 237 L622 214 L622 524 L470 585 L335 380 Z M849 237 L632 214 L632 524 L784 585 L919 380 Z" },
      { id: "lateral-corticospinal", label: "Lateral corticospinal tract", d: "M290 527 L471 574 L445 833 L274 852 Z M964 527 L783 574 L809 833 L980 852 Z" },
      { id: "spinothalamic", label: "Anterolateral system", d: "M305 850 L472 827 L533 968 L366 995 Z M949 850 L782 827 L721 968 L888 995 Z" },
      { id: "nerve-root", label: "Spinal roots", kind: "line", d: "M198 389 C112 390 80 478 16 531 M1056 389 C1142 390 1174 478 1238 531 M198 715 C112 714 80 801 16 854 M1056 715 C1142 714 1174 801 1238 854" },
    ],
  },
  "spinal-thoracic-section": {
    asset: "/neuro-atlas/illustrations/spinal-thoracic-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "spinal-cord", label: "Thoracic spinal cord", d: "M245 270 C369 179 885 179 1009 270 L1030 820 C901 974 353 974 224 820 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M442 240 L619 219 L620 520 L494 567 L360 378 Z M812 240 L635 219 L634 520 L760 567 L894 378 Z" },
      { id: "lateral-corticospinal", label: "Lateral corticospinal tract", d: "M327 505 L488 561 L459 802 L303 820 Z M927 505 L766 561 L795 802 L951 820 Z" },
      { id: "spinothalamic", label: "Anterolateral system", d: "M324 811 L476 796 L531 920 L373 935 Z M930 811 L778 796 L723 920 L881 935 Z" },
      { id: "nerve-root", label: "Spinal roots", kind: "line", d: "M244 394 C155 398 113 475 20 520 M1010 394 C1099 398 1141 475 1234 520 M244 715 C155 711 113 788 20 833 M1010 715 C1099 711 1141 788 1234 833" },
    ],
  },
  "spinal-lumbar-section": {
    asset: "/neuro-atlas/illustrations/spinal-lumbar-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "spinal-cord", label: "Lumbar spinal cord", d: "M209 261 C339 180 915 180 1045 261 L1060 816 C927 984 327 984 194 816 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M395 233 L619 214 L620 520 L457 580 L318 368 Z M859 233 L635 214 L634 520 L797 580 L936 368 Z" },
      { id: "lateral-corticospinal", label: "Lateral corticospinal tract", d: "M285 516 L462 579 L436 841 L266 858 Z M969 516 L792 579 L818 841 L988 858 Z" },
      { id: "spinothalamic", label: "Anterolateral system", d: "M290 841 L474 813 L539 950 L353 983 Z M964 841 L780 813 L715 950 L901 983 Z" },
      { id: "nerve-root", label: "Spinal roots", kind: "line", d: "M209 398 C116 403 83 475 21 529 M1045 398 C1138 403 1171 475 1233 529 M209 729 C116 724 83 796 21 850 M1045 729 C1138 724 1171 796 1233 850" },
    ],
  },
  "spinal-sacral-section": {
    asset: "/neuro-atlas/illustrations/spinal-sacral-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "spinal-cord", label: "Sacral spinal cord", d: "M285 305 C390 236 864 236 969 305 L979 800 C860 933 394 933 275 800 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M437 277 L619 254 L620 531 L488 587 L363 393 Z M817 277 L635 254 L634 531 L766 587 L891 393 Z" },
      { id: "lateral-corticospinal", label: "Lateral corticospinal tract", d: "M333 539 L483 588 L459 800 L320 810 Z M921 539 L771 588 L795 800 L934 810 Z" },
      { id: "spinothalamic", label: "Anterolateral system", d: "M333 794 L481 778 L527 890 L371 904 Z M921 794 L773 778 L727 890 L883 904 Z" },
      { id: "nerve-root", label: "Spinal roots", kind: "line", d: "M285 411 C198 416 147 487 71 523 M969 411 C1056 416 1107 487 1183 523 M285 697 C198 692 147 763 71 799 M969 697 C1056 692 1107 763 1183 799" },
    ],
  },
  "skeletal-muscle": {
    asset: "/neuro-atlas/illustrations/skeletal-muscle.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "skeletal-muscle", label: "Skeletal muscle", d: "M201 240 C352 192 533 207 688 299 L1127 480 L1146 851 L738 1052 L201 784 Z" },
      { id: "neuromuscular-junction", label: "Neuromuscular junction", d: "M757 422 C824 367 895 370 930 428 L942 543 C881 592 804 582 757 526 Z M683 570 C752 516 823 519 858 577 L870 692 C809 741 732 731 683 675 Z" },
      { id: "peripheral-nerve", label: "Motor axon", kind: "line", d: "M1218 11 C1185 210 1145 309 1012 393 C941 439 909 475 873 503 M1202 4 C1175 266 1106 373 838 594" },
    ],
  },
  "brachial-plexus": {
    asset: "/neuro-atlas/illustrations/brachial-plexus.png", viewBox: "0 0 1086 1448",
    regions: [
      { id: "brachial-plexus", label: "Brachial plexus", kind: "line", d: "M1038 95 C904 165 760 200 648 270 C570 326 469 380 349 493 C224 615 163 938 94 1251" },
      { id: "musculocutaneous-nerve", label: "Musculocutaneous nerve", kind: "line", d: "M652 241 C541 312 412 428 304 601 C221 737 185 1025 113 1279" },
      { id: "median-nerve", label: "Median nerve", kind: "line", d: "M665 276 C577 343 482 437 402 572 C347 788 324 1047 219 1354" },
      { id: "ulnar-nerve", label: "Ulnar nerve", kind: "line", d: "M692 318 C590 380 514 472 465 616 C434 836 424 1111 311 1378" },
      { id: "radial-nerve", label: "Radial nerve", kind: "line", d: "M753 184 C630 223 533 280 428 372 C281 518 162 685 157 1075" },
      { id: "nerve-root", label: "C5–T1 roots", kind: "line", d: "M1044 94 C960 110 866 163 749 184 M1042 148 C937 156 833 215 724 230 M1040 207 C933 213 830 258 695 270 M1039 270 C919 269 814 298 668 313 M1038 329 C904 323 803 341 644 359" },
    ],
  },
  "lumbosacral-plexus": {
    asset: "/neuro-atlas/illustrations/lumbosacral-plexus.png", viewBox: "0 0 1086 1448",
    regions: [
      { id: "lumbosacral-plexus", label: "Lumbosacral plexus", kind: "line", d: "M485 76 C396 203 342 315 337 456 C332 574 300 719 264 899 C244 1065 255 1224 201 1378 M579 270 C674 309 738 369 773 481 C798 631 813 800 858 964 C901 1125 884 1285 860 1382" },
      { id: "femoral-nerve", label: "Femoral nerve", kind: "line", d: "M579 296 C652 396 706 504 718 612 C724 781 738 1002 739 1332" },
      { id: "obturator-nerve", label: "Obturator nerve", kind: "line", d: "M554 300 C616 388 631 480 663 574 C689 636 738 676 786 704" },
      { id: "sciatic-nerve", label: "Sciatic nerve", kind: "line", d: "M555 344 C667 399 748 473 799 565 C844 729 871 889 866 1090" },
      { id: "tibial-nerve", label: "Tibial nerve", kind: "line", d: "M865 806 C830 946 827 1115 826 1340" },
      { id: "common-fibular-nerve", label: "Common fibular nerve", kind: "line", d: "M856 803 C914 902 936 1032 944 1322" },
      { id: "ilioinguinal-nerve", label: "Ilioinguinal nerve", kind: "line", d: "M478 83 C374 209 354 313 328 403 C286 464 240 507 196 549" },
    ],
  },
  "sacral-plexus": {
    asset: "/neuro-atlas/illustrations/sacral-plexus.png", viewBox: "0 0 1086 1448",
    regions: [
      { id: "sacral-plexus", label: "Sacral plexus", kind: "line", d: "M504 225 C420 314 388 437 423 548 C473 641 554 709 638 786 C696 886 742 1026 798 1218" },
      { id: "sciatic-nerve", label: "Sciatic nerve", kind: "line", d: "M545 452 C632 555 693 638 728 759 C761 883 793 1035 808 1245" },
      { id: "tibial-nerve", label: "Tibial nerve", kind: "line", d: "M808 855 C790 993 788 1156 803 1374" },
      { id: "common-fibular-nerve", label: "Common fibular nerve", kind: "line", d: "M806 851 C866 953 879 1114 891 1328" },
      { id: "pudendal-nerve", label: "Pudendal nerve", kind: "line", d: "M527 488 C497 556 478 626 486 705 C522 748 555 764 582 788" },
      { id: "nerve-root", label: "Sacral roots", kind: "line", d: "M500 225 C465 270 434 310 418 352 M532 255 C482 324 459 375 443 424 M564 291 C505 377 488 444 473 485" },
    ],
  },
  "upper-limb-nerves": {
    asset: "/neuro-atlas/illustrations/upper-limb-nerves.png", viewBox: "0 0 1024 1536",
    regions: [
      { id: "brachial-plexus", label: "Brachial plexus", kind: "line", d: "M793 106 C679 147 584 186 533 255" },
      { id: "musculocutaneous-nerve", label: "Musculocutaneous nerve", kind: "line", d: "M590 252 C548 374 504 510 471 650 C439 790 410 944 364 1069" },
      { id: "median-nerve", label: "Median nerve", kind: "line", d: "M618 224 C578 397 547 594 506 781 C476 947 446 1120 404 1398" },
      { id: "ulnar-nerve", label: "Ulnar nerve", kind: "line", d: "M653 225 C629 414 610 608 567 790 C548 973 535 1154 509 1403" },
      { id: "radial-nerve", label: "Radial nerve", kind: "line", d: "M572 245 C513 391 468 547 418 676 C376 787 314 926 257 1108" },
      { id: "peripheral-nerve", label: "Peripheral nerve branches", kind: "line", d: "M492 915 C426 1016 376 1124 335 1271 M502 934 C475 1090 451 1251 424 1403 M542 959 C540 1100 534 1261 520 1411" },
    ],
  },
  "lower-limb-nerves": {
    asset: "/neuro-atlas/illustrations/lower-limb-nerves.png", viewBox: "0 0 1024 1536",
    regions: [
      { id: "lumbosacral-plexus", label: "Lumbosacral plexus", kind: "line", d: "M426 151 C496 204 528 263 524 352 C508 419 490 455 479 499" },
      { id: "sciatic-nerve", label: "Sciatic nerve", kind: "line", d: "M474 274 C502 403 503 542 501 680 C502 768 499 870 496 977" },
      { id: "tibial-nerve", label: "Tibial nerve", kind: "line", d: "M496 688 C493 838 480 1037 470 1208 C470 1297 507 1360 655 1434" },
      { id: "common-fibular-nerve", label: "Common fibular nerve", kind: "line", d: "M501 687 C541 762 581 816 596 888 C608 1022 598 1158 618 1298" },
      { id: "femoral-nerve", label: "Femoral nerve", kind: "line", d: "M461 263 C425 338 402 423 387 520 C374 642 345 746 310 854" },
      { id: "obturator-nerve", label: "Obturator nerve", kind: "line", d: "M452 243 C435 332 423 402 412 480" },
      { id: "peripheral-nerve", label: "Peripheral nerve branches", kind: "line", d: "M505 880 C460 1024 439 1148 426 1294 M582 886 C550 1050 542 1165 542 1284 M610 1295 C659 1328 719 1387 813 1419" },
    ],
  },
  "dermatome-anterior": {
    asset: "/neuro-atlas/illustrations/dermatome-anterior.png", viewBox: "0 0 1024 1536",
    regions: [
      { id: "c5-dermatome", label: "C5 dermatome", d: "M346 304 C418 257 605 256 678 306 L723 392 L641 414 L514 386 L383 414 L301 392 Z" },
      { id: "c6-dermatome", label: "C6 dermatome", d: "M305 372 L384 414 L355 564 L278 649 L209 707 L171 696 L232 555 Z M719 372 L640 414 L669 564 L746 649 L815 707 L853 696 L792 555 Z" },
      { id: "c7-dermatome", label: "C7 dermatome", d: "M383 385 L515 408 L641 385 L662 541 L514 565 L362 541 Z" },
      { id: "c8-dermatome", label: "C8 dermatome", d: "M283 648 L352 564 L330 710 L261 805 L194 807 L167 744 Z M741 648 L672 564 L694 710 L763 805 L830 807 L857 744 Z" },
      { id: "t4-dermatome", label: "T4 dermatome", d: "M371 411 L653 411 L660 523 L365 523 Z" },
      { id: "t10-dermatome", label: "T10 dermatome", d: "M383 535 L641 535 L656 690 L368 690 Z" },
      { id: "l1-dermatome", label: "L1 dermatome", d: "M392 693 L632 693 L652 792 L590 838 L514 848 L433 838 L372 792 Z" },
      { id: "l4-dermatome", label: "L4 dermatome", d: "M397 950 L466 941 L471 1274 L437 1412 L396 1395 Z M627 950 L558 941 L553 1274 L587 1412 L628 1395 Z" },
    ],
  },
  "dermatome-posterior": {
    asset: "/neuro-atlas/illustrations/dermatome-posterior.png", viewBox: "0 0 1024 1536",
    regions: [
      { id: "c5-dermatome", label: "C5 dermatome", d: "M337 271 C411 224 607 224 687 271 L720 387 L643 417 L514 385 L381 417 L304 387 Z" },
      { id: "c6-dermatome", label: "C6 dermatome", d: "M302 385 L382 416 L341 597 L259 719 L175 779 L144 748 L241 571 Z M722 385 L642 416 L683 597 L765 719 L849 779 L880 748 L783 571 Z" },
      { id: "c7-dermatome", label: "C7 dermatome", d: "M377 407 L514 435 L647 407 L659 557 L514 585 L365 557 Z" },
      { id: "c8-dermatome", label: "C8 dermatome", d: "M258 719 L341 597 L326 755 L252 857 L178 858 L147 786 Z M766 719 L683 597 L698 755 L772 857 L846 858 L877 786 Z" },
      { id: "t4-dermatome", label: "T4 dermatome", d: "M372 430 L652 430 L662 558 L364 558 Z" },
      { id: "t10-dermatome", label: "T10 dermatome", d: "M386 573 L638 573 L652 702 L372 702 Z" },
      { id: "l1-dermatome", label: "L1 dermatome", d: "M383 701 L641 701 L663 816 L514 875 L361 816 Z" },
      { id: "l4-dermatome", label: "L4 dermatome", d: "M396 948 L467 939 L480 1255 L437 1410 L392 1392 Z M628 948 L557 939 L544 1255 L587 1410 L632 1392 Z" },
    ],
  },
  "myotome": {
    asset: "/neuro-atlas/illustrations/myotome.png", viewBox: "0 0 1024 1536",
    regions: [
      { id: "myotome-c5", label: "C5 myotome", d: "M270 292 C315 253 378 251 410 291 L393 365 L286 378 L254 336 Z M754 292 C709 253 646 251 614 291 L631 365 L738 378 L770 336 Z" },
      { id: "myotome-c6", label: "C6 myotome", d: "M261 462 L349 443 L329 608 L273 692 L229 664 Z M763 462 L675 443 L695 608 L751 692 L795 664 Z" },
      { id: "myotome-c7", label: "C7 myotome", d: "M245 615 L326 604 L303 759 L232 787 L205 728 Z M779 615 L698 604 L721 759 L792 787 L819 728 Z" },
      { id: "myotome-c8", label: "C8 myotome", d: "M208 720 L291 751 L280 843 L205 884 L166 829 Z M816 720 L733 751 L744 843 L819 884 L858 829 Z" },
      { id: "myotome-t1", label: "T1 myotome", d: "M172 826 L281 805 L281 893 L216 943 L152 897 Z M852 826 L743 805 L743 893 L808 943 L872 897 Z" },
      { id: "myotome-l2", label: "L2 myotome", d: "M397 694 C440 662 491 654 512 695 L500 800 L397 850 L358 784 Z M627 694 C584 662 533 654 512 695 L524 800 L627 850 L666 784 Z" },
      { id: "myotome-l3", label: "L3 myotome", d: "M364 815 L481 799 L472 1016 L389 1043 Z M660 815 L543 799 L552 1016 L635 1043 Z" },
      { id: "myotome-l4", label: "L4 myotome", d: "M386 1040 L470 1022 L458 1246 L388 1284 Z M638 1040 L554 1022 L566 1246 L636 1284 Z" },
      { id: "myotome-l5", label: "L5 myotome", d: "M385 1271 L460 1244 L452 1418 L383 1447 Z M639 1271 L564 1244 L572 1418 L641 1447 Z" },
      { id: "myotome-s1", label: "S1 myotome", d: "M379 1408 L452 1415 L432 1516 L331 1516 Z M645 1408 L572 1415 L592 1516 L693 1516 Z" },
    ],
  },
  "midbrain-section": {
    asset: "/neuro-atlas/illustrations/midbrain-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "midbrain", label: "Midbrain", d: "M60 337 C150 75 1104 75 1194 337 L1108 941 C1019 1135 235 1135 146 941 Z" },
      { id: "cerebral-aqueduct", label: "Cerebral aqueduct", d: "M620 360 C662 360 694 415 683 459 L641 520 C613 524 582 477 573 439 C572 402 592 370 620 360 Z" },
      { id: "midbrain-tegmentum", label: "Midbrain tegmentum", d: "M413 498 C469 438 580 446 611 540 L589 782 L438 717 L407 595 Z M841 498 C785 438 674 446 643 540 L665 782 L816 717 L847 595 Z" },
      { id: "cerebral-peduncle", label: "Cerebral peduncle", d: "M202 745 C303 649 433 677 593 822 L609 1041 C421 1110 261 1019 205 864 Z M1052 745 C951 649 821 677 661 822 L645 1041 C833 1110 993 1019 1049 864 Z" },
    ],
  },
  "pons-section": {
    asset: "/neuro-atlas/illustrations/pons-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "pons", label: "Pons", d: "M39 511 C91 255 1163 255 1215 511 L1135 1003 C1044 1136 210 1136 119 1003 Z" },
      { id: "fourth-ventricle", label: "Fourth ventricle", d: "M484 180 C550 154 704 154 770 180 L791 357 L700 449 L627 467 L554 449 L463 357 Z" },
      { id: "pontine-tegmentum", label: "Pontine tegmentum", d: "M250 194 C360 131 529 209 568 386 L534 552 L358 509 L263 404 Z M1004 194 C894 131 725 209 686 386 L720 552 L896 509 L991 404 Z" },
      { id: "cerebellar-peduncles", label: "Middle cerebellar peduncles", d: "M20 392 C135 344 206 380 249 504 L226 734 C113 767 43 695 22 578 Z M1234 392 C1119 344 1048 380 1005 504 L1028 734 C1141 767 1211 695 1232 578 Z" },
    ],
  },
  "medulla-section": {
    asset: "/neuro-atlas/illustrations/medulla-section.png", viewBox: "0 0 1254 1254",
    regions: [
      { id: "medulla", label: "Medulla oblongata", d: "M63 299 C175 100 1079 100 1191 299 L1138 939 C1023 1107 231 1107 116 939 Z" },
      { id: "fourth-ventricle", label: "Fourth ventricle", d: "M517 406 C567 367 687 367 737 406 L700 509 L627 554 L554 509 Z" },
      { id: "dorsal-column", label: "Dorsal columns", d: "M308 117 C440 76 550 118 610 199 L594 383 L351 382 L279 267 Z M946 117 C814 76 704 118 644 199 L660 383 L903 382 L975 267 Z" },
      { id: "inferior-olivary-nucleus", label: "Inferior olivary nucleus", d: "M120 532 C173 466 310 492 350 585 L345 781 C258 857 132 772 113 655 Z M1134 532 C1081 466 944 492 904 585 L909 781 C996 857 1122 772 1141 655 Z" },
      { id: "lateral-corticospinal", label: "Lateral corticospinal tract", d: "M149 774 L293 751 L447 901 L381 1000 L227 949 Z M1105 774 L961 751 L807 901 L873 1000 L1027 949 Z" },
      { id: "pyramid", label: "Medullary pyramid", d: "M302 799 C390 737 541 742 610 850 L606 1081 C474 1131 342 1074 273 963 Z M952 799 C864 737 713 742 644 850 L648 1081 C780 1131 912 1074 981 963 Z" },
    ],
  },
  "nmj-muscle": {
    asset: "/neuro-atlas/illustrations/nmj-muscle.png", viewBox: "0 0 1448 1086",
    regions: [
      { id: "peripheral-nerve", label: "Motor axon", kind: "line", d: "M0 43 C191 77 310 157 433 251 C507 307 560 337 612 344" },
      { id: "neuromuscular-junction", label: "Neuromuscular junction", d: "M318 249 C432 201 766 219 894 337 L878 518 L699 547 L489 527 L320 457 Z" },
      { id: "skeletal-muscle", label: "Skeletal muscle fibre", d: "M48 447 C279 407 1071 411 1416 448 L1425 1007 C1151 1080 298 1069 57 1009 Z" },
      { id: "motor-neuron", label: "Motor end plate", d: "M371 436 C445 399 806 401 874 446 L866 524 L722 544 L548 527 L384 505 Z" },
    ],
  },
};
// These paths use each project illustration's own viewBox; an absent entry intentionally
// renders no line instead of reusing an anatomically unrelated route from another view.
const pathwayRoutes: Partial<Record<ImageAtlasViewId, Partial<Record<string, string>>>> = {
  "midbrain-section": { corticospinal: "M628 915 L628 698 L628 513", corticobulbar: "M628 916 L628 604", "pupil-pathway": "M628 455 L628 364" },
  "pons-section": { corticospinal: "M628 1088 L628 660 L628 408", corticobulbar: "M628 1088 L628 640", "ocular-motor": "M628 350 L628 623" },
  "medulla-section": { corticospinal: "M628 1095 L628 910 L628 798", dcml: "M310 241 L477 382 L627 554", spinothalamic: "M213 887 L448 751 L628 554", parasympathetic: "M628 417 L628 630 L628 978" },
  "whole-neuraxis": {
    corticospinal: "M575 66 L576 219 L576 720 C640 815 749 984 821 1154",
    dcml: "M175 934 C252 695 311 464 365 349 C451 300 513 279 558 246 L575 164",
    spinothalamic: "M173 935 C239 702 300 470 366 352 C456 314 523 286 575 244 L575 117",
    corticobulbar: "M575 68 L576 125 L575 204 C646 224 734 247 817 272",
    spinocerebellar: "M370 1368 C354 1125 349 962 394 816 C466 765 515 740 557 722 L575 228 L538 174",
    sympathetic: "M575 113 L576 247 L575 721 C660 785 756 828 840 891",
    parasympathetic: "M575 110 L576 252 L575 720 C605 813 667 893 748 944",
  },
  "cerebrum-lateral": {
    corticospinal: "M692 152 L700 330 L728 599 L753 744 L788 1001",
    corticobulbar: "M692 152 L700 330 L728 599 L772 722",
    "basal-ganglia-loop": "M691 208 C601 300 560 405 649 486 C736 542 843 500 815 394 C785 301 740 235 691 208",
    spinocerebellar: "M744 1000 L779 814 C868 776 981 780 1083 841",
  },
  "brain-midsagittal": {
    corticospinal: "M493 148 C556 214 605 333 669 412 L730 533 L738 1035",
    corticobulbar: "M493 148 C556 214 605 333 669 412 L737 533",
    dcml: "M739 1036 L740 674 L724 544 L700 465 L591 391",
    spinothalamic: "M739 1036 L740 674 L724 544 L700 465 L612 349",
    visual: "M699 564 L650 556 L607 531 L545 430 L438 334",
    "pupil-pathway": "M699 564 L654 557 L708 535 L753 531",
    "ocular-motor": "M773 634 L748 576 L772 535",
    sympathetic: "M699 556 L721 637 L741 1032",
    parasympathetic: "M773 533 L751 633 L741 1032",
  },
  "cerebrum-medial": {
    corticospinal: "M487 180 C547 250 607 352 654 453 L759 575 L790 1018",
    corticobulbar: "M487 180 C547 250 607 352 654 453 L761 575",
    dcml: "M790 1017 L785 770 L771 624 L708 547 L671 469",
    spinothalamic: "M790 1017 L785 770 L771 624 L708 547 L606 438",
    visual: "M1270 520 L1088 530 L859 515 L742 512",
    sympathetic: "M675 568 L758 636 L789 1020",
    parasympathetic: "M772 540 L758 636 L789 1020",
  },
  "brain-coronal": {
    corticospinal: "M620 632 L648 574 L701 535 M820 632 L790 574 L738 535",
    corticobulbar: "M620 632 L648 574 L701 535",
    "basal-ganglia-loop": "M516 494 C579 418 651 444 702 534 C756 444 860 418 927 494",
  },
  "brain-axial": {
    "basal-ganglia-loop": "M509 573 L560 508 L630 456 L699 530 M931 573 L880 508 L810 456 L741 530",
    visual: "M520 591 L590 504 L686 529 M920 591 L850 504 L754 529",
  },
  "cerebrum-inferior": {
    visual: "M606 355 L720 369 L834 355 M720 392 L720 438",
    "pupil-pathway": "M606 355 L720 369 L789 433",
    "ocular-motor": "M720 438 L720 505 L720 648",
  },
  "brainstem-external": {
    corticobulbar: "M720 145 L720 310 L720 486",
    "trigeminal-sensory": "M393 359 L486 392 L570 451",
    "pupil-pathway": "M720 145 L720 278 L718 435",
    "ocular-motor": "M573 449 L720 411 L868 449",
    "auditory-vestibular": "M528 438 L720 414 L913 438",
    parasympathetic: "M720 145 L720 488 L720 900",
  },
  "brainstem-section": {
    corticospinal: "M543 168 L543 578 L543 1092",
    dcml: "M424 1024 L543 1090 L661 1024",
    spinothalamic: "M366 1255 L543 1184 L720 1255",
    "ocular-motor": "M543 168 L543 578 L543 1090",
  },
  "spinal-cross-section": {
    corticospinal: "M720 215 L720 395 L880 452 L1008 602 L1090 699",
    dcml: "M722 215 L722 470 L720 510",
    spinothalamic: "M350 622 L482 594 L720 510 L958 594 L1090 622",
    spinocerebellar: "M306 332 C418 343 475 391 534 460",
    sympathetic: "M720 510 L894 610 L1138 662",
    parasympathetic: "M720 510 L548 610 L304 662",
  },
  "spinal-levels": {
    corticospinal: "M544 84 L543 970 L543 1328",
    dcml: "M522 85 L522 970 L512 1328",
    spinothalamic: "M566 85 L566 970 L574 1328",
    spinocerebellar: "M543 86 L543 968 C470 1092 445 1204 510 1360",
    sympathetic: "M543 86 L543 760 L642 920",
    parasympathetic: "M543 86 L543 936 L474 1102",
  },
  "brachial-plexus": { corticospinal: "M1034 209 C899 257 748 288 648 344 C461 444 337 634 232 893 C175 1036 137 1204 103 1322" },
  "lumbosacral-plexus": { corticospinal: "M545 251 C661 305 751 417 805 571 C847 712 868 908 850 1223", sympathetic: "M485 77 C414 222 389 390 420 540" },
  "sacral-plexus": { corticospinal: "M509 226 C492 331 509 439 594 527 C681 644 738 799 791 1049 C809 1152 817 1266 815 1370", parasympathetic: "M505 225 C471 351 488 496 582 790" },
  "upper-limb-nerves": { corticospinal: "M780 124 C665 180 608 298 564 471 C516 659 480 859 427 1102 L400 1401" },
  "lower-limb-nerves": { corticospinal: "M467 238 C514 395 501 581 498 741 C490 929 478 1110 471 1285 C500 1355 585 1406 718 1431", spinothalamic: "M474 274 L502 678 L496 976 L470 1208", dcml: "M474 274 L502 678 L496 976 L470 1208" },
  "nmj-muscle": { corticospinal: "M0 50 C184 86 315 168 432 257 C519 323 579 355 646 389 L675 482", corticobulbar: "M0 50 C184 86 315 168 432 257 C519 323 579 355 646 389 L675 482" },
};

export function imageAtlasViewForStructure(structureId: string, preferredViewId?: string) {
  if (preferredViewId && maps[preferredViewId as ImageAtlasViewId]?.regions.some((region) => region.id === structureId)) return preferredViewId;
  return (Object.keys(maps) as ImageAtlasViewId[]).find((viewId) => maps[viewId].regions.some((region) => region.id === structureId));
}

export function imageAtlasViewForPathway(pathwayId: string, preferredViewId?: string) {
  if (preferredViewId && pathwayRoutes[preferredViewId as ImageAtlasViewId]?.[pathwayId]) return preferredViewId;
  return (Object.keys(pathwayRoutes) as ImageAtlasViewId[]).find((viewId) => Boolean(pathwayRoutes[viewId]?.[pathwayId]));
}


function OverlayRegion({ region, selectedId, hoveredId, pathwayId, onSelect, onHover }: { region: Region; selectedId?: string; hoveredId?: string; pathwayId?: string; onSelect: (id: string) => void; onHover: (id?: string) => void }) {
  const active = region.id === selectedId || region.id === hoveredId || Boolean(pathwayId && pathwayStructures[pathwayId]?.includes(region.id));
  const common = { tabIndex: 0, role: "button" as const, "aria-label": region.label, "data-structure-id": region.id, onMouseEnter: () => onHover(region.id), onMouseLeave: () => onHover(), onFocus: () => onHover(region.id), onBlur: () => onHover(), onClick: () => onSelect(region.id), onKeyDown: (event: KeyboardEvent<SVGPathElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(region.id); } } };
  if (region.kind === "line") return <path {...common} d={region.d} fill="none" stroke={active ? "#08776e" : "transparent"} strokeWidth={active ? 18 : 28} strokeLinecap="round" strokeLinejoin="round" opacity={active ? .82 : 1} className="cursor-pointer outline-none motion-reduce:transition-none" />;
  return <path {...common} d={region.d} fill={active ? "#16a394" : "transparent"} fillOpacity={active ? .34 : 0} stroke={active ? "#08776e" : "transparent"} strokeWidth={active ? 5 : 16} strokeLinejoin="round" className="cursor-pointer outline-none motion-reduce:transition-none" />;
}

export function ImageNeuroAtlas(props: PilotProps) {
  if (props.viewId === "brain-midsagittal") return <MidsagittalVectorAtlas {...props} />;
  const map = maps[props.viewId];
  const route = props.pathwayId ? pathwayRoutes[props.viewId]?.[props.pathwayId] : undefined;
  const color = route && props.layer !== "anatomy" ? routeColor[props.layer] ?? "#0f8d83" : undefined;
  return <div className="relative h-full w-full select-none" role="img" aria-label={props.viewId + " 상호작용 해부 지도"}>
    {/* Exact coordinate-matched base illustration; a wrapper would break the SVG overlay alignment. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
<img src={`${neuroAssetBasePath}${map.asset}`} alt="" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
    <svg viewBox={map.viewBox} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
      <g>{map.regions.map((region) => <OverlayRegion key={region.id} region={region} selectedId={props.selectedId} hoveredId={props.hoveredId} pathwayId={props.pathwayId} onSelect={props.onSelect} onHover={props.onHover} />)}</g>
      {color ? <path d={route} fill="none" stroke="#fff" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" opacity=".92" pointerEvents="none" /> : null}
      {color ? <path d={route} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" pointerEvents="none" /> : null}
    </svg>
  </div>;
}

export const imageAtlasViewIds = new Set(Object.keys(maps));
