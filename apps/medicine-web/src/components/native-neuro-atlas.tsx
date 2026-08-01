"use client";

import { useId, type ReactNode } from "react";

export type NeuroAtlasLayer = "anatomy" | "motor" | "sensory" | "cranial" | "reflex" | "dermatome" | "myotome" | "peripheral" | "autonomic";

type Props = {
  viewId: string;
  layer: NeuroAtlasLayer;
  pathwayId?: string;
  selectedId?: string;
  hoveredId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
};

const PATHWAY_STRUCTURE_IDS: Record<string, readonly string[]> = {
  corticospinal: ["precentral-gyrus", "internal-capsule", "midbrain", "pons", "medulla", "lateral-corticospinal", "nerve-root", "peripheral-nerve", "skeletal-muscle"],
  corticobulbar: ["precentral-gyrus", "internal-capsule", "midbrain", "pons", "medulla", "cranial-nerve-roots"],
  dcml: ["peripheral-nerve", "nerve-root", "dorsal-column", "medulla", "thalamus", "postcentral-gyrus"],
  spinothalamic: ["peripheral-nerve", "nerve-root", "spinothalamic", "thalamus", "postcentral-gyrus"],
  spinocerebellar: ["peripheral-nerve", "nerve-root", "spinal-cord", "cerebellum"],
  "basal-ganglia-loop": ["frontal-lobe", "caudate", "putamen", "thalamus"],
  "trigeminal-sensory": ["trigeminal-ganglion", "trigeminal-nucleus", "thalamus", "postcentral-gyrus"],
  visual: ["optic-nerve", "optic-chiasm", "optic-tract", "thalamus", "occipital-lobe"],
  "pupil-pathway": ["optic-nerve", "optic-chiasm", "midbrain", "cranial-nerve-roots"],
  "ocular-motor": ["vestibular-nucleus", "pons", "midbrain", "cranial-nerve-roots"],
  "auditory-vestibular": ["vestibular-nucleus", "pons", "midbrain", "temporal-lobe"],
  sympathetic: ["hypothalamus", "spinal-cord", "nerve-root", "peripheral-nerve"],
  parasympathetic: ["midbrain", "pons", "medulla", "cranial-nerve-roots", "peripheral-nerve"],
};

const PALETTE = {
  canvas: "#fbfdff",
  cortex: "#dce9f5",
  cortexAlt: "#c9dcef",
  whiteMatter: "#f7fbff",
  deepNuclei: "#b8d8cb",
  brainstem: "#e4d9bd",
  cerebellum: "#d7c7e9",
  spinalGray: "#e6bb9a",
  spinalWhite: "#e8f0f7",
  nerve: "#94b7c9",
  muscle: "#e9c5c5",
  outline: "#516b83",
  selected: "#0f8d83",
  selectedFill: "#67c8bd",
  motor: "#0f8d83",
  sensory: "#366ff0",
  cranial: "#8b5cf6",
  reflex: "#d97706",
  autonomic: "#b45309",
};

function InteractivePath({ id, label, d, fill, selectedId, hoveredId, pathwayId, onSelect, onHover, stroke = PALETTE.outline, strokeWidth = 2.5 }: {
  id: string;
  label: string;
  d: string;
  fill: string;
  selectedId?: string;
  hoveredId?: string;
  pathwayId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
  stroke?: string;
  strokeWidth?: number;
}) {
  const pathwayStructureIds = pathwayId && !pathwayId.startsWith("reflex:") ? PATHWAY_STRUCTURE_IDS[pathwayId] ?? [] : [];
  const active = selectedId === id || hoveredId === id || pathwayStructureIds.includes(id);
  return <path
    d={d}
    tabIndex={0}
    role="button"
    aria-label={label}
    data-structure-id={id}
    fill={active ? PALETTE.selectedFill : fill}
    fillOpacity={active ? 0.88 : 1}
    stroke={active ? PALETTE.selected : stroke}
    strokeWidth={active ? strokeWidth + 2 : strokeWidth}
    strokeLinejoin="round"
    className="cursor-pointer outline-none transition-[fill,stroke] duration-150 motion-reduce:transition-none"
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover()}
    onFocus={() => onHover(id)}
    onBlur={() => onHover()}
    onClick={() => onSelect(id)}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect(id);
      }
    }}
  />;
}

function SvgShell({ children, label }: { children: ReactNode; label: string }) {
  const patternId = useId().replace(/:/g, "");
  return <svg viewBox="0 0 1000 700" className="block h-full w-full select-none" role="img" aria-label={label}>
    <defs>
      <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" fill="none" stroke="#eaf1f7" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="1000" height="700" fill={PALETTE.canvas} />
    <rect width="1000" height="700" fill={`url(#${patternId})`} />
    {children}
  </svg>;
}

function Overlay({ layer, pathwayId, d }: { layer: NeuroAtlasLayer; pathwayId?: string; d: string }) {
  const color = layer === "motor" ? PALETTE.motor
    : layer === "sensory" ? PALETTE.sensory
      : layer === "cranial" ? PALETTE.cranial
        : layer === "reflex" ? PALETTE.reflex
          : layer === "autonomic" ? PALETTE.autonomic
            : PALETTE.motor;
  if (layer === "anatomy" && !pathwayId) return null;
  return <g pointerEvents="none">
    <path d={d} fill="none" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" opacity="0.88" />
    <path d={d} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={pathwayId ? undefined : "14 8"} />
  </g>;
}

function WholeNeuraxis(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const common = { selectedId, hoveredId, pathwayId, onSelect, onHover };
  return <SvgShell label="Whole neuraxis interactive anatomy map">
    <path d="M488 58 C437 72 420 113 429 154 C436 189 458 211 475 226 L470 282 L432 309 L376 371 L333 487 L362 640 L422 665 L487 602 L507 438 L529 602 L578 665 L639 640 L667 487 L625 371 L570 309 L531 282 L526 226 C543 211 565 189 572 154 C581 113 564 72 512 58 Z" fill="#eff5fa" stroke={PALETTE.outline} strokeWidth="2.5" />
    <InteractivePath id="cerebellum" label="Cerebellum" d="M513 132 C548 123 573 144 572 174 C571 199 552 215 529 214 L512 190 Z" fill={PALETTE.cerebellum} {...common} />
    <InteractivePath id="frontal-lobe" label="Cerebrum" d="M432 117 C433 76 461 48 500 48 C542 48 568 79 568 118 C568 159 541 189 500 195 C459 189 432 160 432 117 Z" fill={PALETTE.cortex} {...common} />
    <InteractivePath id="midbrain" label="Midbrain" d="M485 187 L515 187 L521 224 L479 224 Z" fill={PALETTE.brainstem} {...common} />
    <InteractivePath id="pons" label="Pons" d="M474 224 C476 211 524 211 526 224 L525 248 C513 258 487 258 475 248 Z" fill={PALETTE.brainstem} {...common} />
    <InteractivePath id="medulla" label="Medulla" d="M483 248 L517 248 L516 280 L484 280 Z" fill={PALETTE.brainstem} {...common} />
    <InteractivePath id="spinal-cord" label="Spinal cord" d="M486 278 L514 278 L519 474 L481 474 Z" fill="#cbd8e5" {...common} />
    <InteractivePath id="brachial-plexus" label="Brachial plexus" d="M485 316 C454 325 425 347 395 380 L375 430 L392 438 L420 397 L486 352 Z M515 316 C546 325 575 347 605 380 L625 430 L608 438 L580 397 L514 352 Z" fill="none" stroke={PALETTE.nerve} strokeWidth={7} {...common} />
    <InteractivePath id="peripheral-nerve" label="Peripheral nerves" d="M392 438 L369 536 M608 438 L631 536 M484 470 L406 604 M516 470 L594 604" fill="none" stroke={PALETTE.nerve} strokeWidth={6} {...common} />
    <InteractivePath id="neuromuscular-junction" label="Neuromuscular junction" d="M367 535 C349 548 348 564 358 578" fill="none" stroke="#8ca5b7" strokeWidth={10} {...common} />
    <InteractivePath id="skeletal-muscle" label="Skeletal muscle" d="M340 569 C354 550 384 556 399 579 C391 607 361 619 340 603 Z" fill={PALETTE.muscle} {...common} />
    <Overlay layer={layer} pathwayId={pathwayId} d="M500 93 L500 164 L500 320 L500 472 L404 603" />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS → PNS → NMJ → Muscle</text>
  </SvgShell>;
}

function Midsagittal(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const common = { selectedId, hoveredId, pathwayId, onSelect, onHover };
  return <SvgShell label="Cerebrum midsagittal interactive anatomy map">
    <InteractivePath id="medial-frontal-cortex" label="Medial frontal cortex" d="M166 291 C178 168 279 89 423 87 C517 86 594 126 644 195 L604 312 L472 350 L309 362 L195 335 Z" fill={PALETTE.cortex} {...common} />
    <InteractivePath id="paracentral-lobule" label="Paracentral lobule" d="M474 92 C527 95 575 120 608 158 L570 216 L489 207 Z" fill={PALETTE.cortexAlt} {...common} />
    <InteractivePath id="cingulate-gyrus" label="Cingulate gyrus" d="M282 240 C336 170 450 151 552 191 L573 236 C477 206 365 225 310 289 Z" fill="#c4dfd7" {...common} />
    <InteractivePath id="corpus-callosum" label="Corpus callosum" d="M288 294 C348 237 467 228 557 272 L553 311 C466 274 365 284 312 337 Z" fill={PALETTE.whiteMatter} {...common} />
    <InteractivePath id="thalamus" label="Thalamus" d="M448 302 C486 282 529 299 539 336 C530 372 482 387 450 361 C439 343 438 321 448 302 Z" fill={PALETTE.deepNuclei} {...common} />
    <InteractivePath id="hypothalamus" label="Hypothalamus" d="M479 365 L522 359 L530 393 L503 415 L472 395 Z" fill="#e8cc9c" {...common} />
    <InteractivePath id="optic-chiasm" label="Optic chiasm" d="M467 402 L492 389 L510 402 L534 390 L544 405 L512 423 L501 419 L480 424 Z" fill="#f1b8b8" {...common} />
    <InteractivePath id="midbrain" label="Midbrain" d="M482 417 L522 417 L539 462 L465 462 Z" fill={PALETTE.brainstem} {...common} />
    <InteractivePath id="pons" label="Pons" d="M449 463 C468 433 538 433 553 463 L556 509 L445 509 Z" fill={PALETTE.brainstem} {...common} />
    <InteractivePath id="medulla" label="Medulla" d="M466 509 L534 509 L525 610 L476 610 Z" fill={PALETTE.brainstem} {...common} />
    <InteractivePath id="cerebellum" label="Cerebellum" d="M584 370 C684 345 756 413 751 505 C745 578 670 623 584 589 C551 548 552 419 584 370 Z" fill={PALETTE.cerebellum} {...common} />
    <InteractivePath id="primary-visual-cortex" label="Primary visual cortex" d="M635 205 C683 231 715 276 726 320 L656 324 L611 271 Z" fill="#d8c6ec" {...common} />
    <path d="M195 336 C276 398 373 419 465 394" fill="none" stroke={PALETTE.outline} strokeWidth="2" opacity="0.45" />
    <Overlay layer={layer} pathwayId={pathwayId} d="M388 140 C415 214 424 301 463 395 L493 440 L501 610" />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebrum › Midsagittal view</text>
  </SvgShell>;
}

function SpinalCrossSection(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const common = { selectedId, hoveredId, pathwayId, onSelect, onHover };
  return <SvgShell label="Spinal cord cross-sectional interactive anatomy map">
    <InteractivePath id="spinal-cord" label="Spinal cord" d="M210 108 C364 35 636 35 790 108 C855 185 850 512 789 587 C635 665 365 665 211 587 C150 512 145 185 210 108 Z" fill={PALETTE.spinalWhite} {...common} />
    <InteractivePath id="dorsal-column" label="Dorsal columns" d="M374 105 C430 80 470 79 500 105 C530 79 570 80 626 105 L600 267 L400 267 Z" fill="#c9dff1" {...common} />
    <InteractivePath id="lateral-corticospinal" label="Lateral corticospinal tract" d="M255 258 C312 214 367 235 395 289 L378 442 C322 466 274 430 248 381 Z M745 258 C688 214 633 235 605 289 L622 442 C678 466 726 430 752 381 Z" fill="#bce1d6" {...common} />
    <InteractivePath id="spinothalamic" label="Anterolateral system" d="M266 448 C315 469 350 483 386 505 L352 567 C302 553 264 527 241 490 Z M734 448 C685 469 650 483 614 505 L648 567 C698 553 736 527 759 490 Z" fill="#d5d8fb" {...common} />
    <InteractivePath id="central-canal" label="Central canal" d="M486 350 C492 341 508 341 514 350 C520 360 510 371 500 371 C490 371 480 360 486 350 Z" fill="#ffffff" {...common} />
    <InteractivePath id="dorsal-horn" label="Dorsal horn" d="M421 266 C452 281 472 310 475 354 L432 398 L371 359 L376 291 Z M579 266 C548 281 528 310 525 354 L568 398 L629 359 L624 291 Z" fill={PALETTE.spinalGray} {...common} />
    <InteractivePath id="ventral-horn" label="Ventral horn" d="M370 399 L452 388 L480 425 L450 514 L373 502 L335 453 Z M630 399 L548 388 L520 425 L550 514 L627 502 L665 453 Z" fill={PALETTE.spinalGray} {...common} />
    <InteractivePath id="nerve-root" label="Spinal nerve roots" d="M210 248 C154 222 121 206 84 180 M210 451 C148 480 112 504 80 535 M790 248 C846 222 879 206 916 180 M790 451 C852 480 888 504 920 535" fill="none" stroke={PALETTE.nerve} strokeWidth={10} {...common} />
    <Overlay layer={layer} pathwayId={pathwayId} d={layer === "sensory" ? "M118 180 L270 270 L372 316 L500 350" : "M500 120 L500 240 L620 332 L625 440 L728 520"} />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Spinal cord › Cross-sectional view</text>
    <text x="500" y="678" textAnchor="middle" fill="#6a7f92" fontSize="15">dorsal</text>
  </SvgShell>;
}


function CerebrumLateral(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const c = { selectedId, hoveredId, pathwayId, onSelect, onHover };
  return <SvgShell label="Cerebrum lateral interactive anatomy map">
    <InteractivePath id="frontal-lobe" label="Frontal lobe" d="M150 260 C167 138 294 87 415 121 L442 286 L334 382 L181 351 Z" fill={PALETTE.cortex} {...c} />
    <InteractivePath id="parietal-lobe" label="Parietal lobe" d="M415 121 C549 107 689 189 743 303 L566 365 L440 286 Z" fill={PALETTE.cortexAlt} {...c} />
    <InteractivePath id="temporal-lobe" label="Temporal lobe" d="M183 351 L334 382 L566 365 L611 462 C503 530 304 516 203 433 Z" fill="#d4e6f5" {...c} />
    <InteractivePath id="occipital-lobe" label="Occipital lobe" d="M743 303 C792 347 797 430 719 472 L611 462 L566 365 Z" fill="#cad7ed" {...c} />
    <InteractivePath id="precentral-gyrus" label="Precentral gyrus" d="M398 150 L432 145 L452 356 L416 367 Z" fill="#b4ded2" {...c} />
    <InteractivePath id="postcentral-gyrus" label="Postcentral gyrus" d="M453 145 L487 145 L505 355 L470 361 Z" fill="#c5d8fb" {...c} />
    <InteractivePath id="insula" label="Insular cortex" d="M388 364 C432 336 493 335 533 365 L513 403 L408 404 Z" fill={PALETTE.deepNuclei} {...c} />
    <InteractivePath id="brainstem" label="Brainstem" d="M547 430 L607 423 L631 559 L557 559 Z" fill={PALETTE.brainstem} {...c} />
    <InteractivePath id="cerebellum" label="Cerebellum" d="M635 397 C745 371 827 453 789 557 C736 615 650 591 618 531 Z" fill={PALETTE.cerebellum} {...c} />
    <path d="M295 152 C310 206 308 294 287 342 M580 147 C604 203 605 282 585 335 M244 440 C344 461 473 472 575 437" fill="none" stroke={PALETTE.outline} strokeWidth="2" opacity=".48" />
    <Overlay layer={layer} pathwayId={pathwayId} d="M425 174 L435 354 L501 377 L589 482 L595 554" />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebrum › Lateral view</text>
  </SvgShell>;
}


function CerebrumCoronal(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
  return <SvgShell label="Cerebrum coronal interactive anatomy map">
    <InteractivePath id="cerebral-cortex" label="Cerebral cortex" d="M166 455 C122 240 243 103 500 91 C757 103 878 240 834 455 C799 584 671 635 500 629 C329 635 201 584 166 455 Z" fill={PALETTE.cortex} {...c} />
    <InteractivePath id="corpus-callosum" label="Corpus callosum" d="M271 256 C333 175 667 175 729 256 L688 298 C626 253 374 253 312 298 Z" fill={PALETTE.whiteMatter} {...c} />
    <InteractivePath id="lateral-ventricle" label="Lateral ventricles" d="M307 316 C351 276 426 286 467 333 L432 372 L340 365 Z M693 316 C649 276 574 286 533 333 L568 372 L660 365 Z" fill="#ffffff" {...c} />
    <InteractivePath id="caudate-nucleus" label="Caudate nucleus" d="M309 379 C347 344 402 359 424 400 L402 464 L333 454 Z M691 379 C653 344 598 359 576 400 L598 464 L667 454 Z" fill={PALETTE.deepNuclei} {...c} />
    <InteractivePath id="internal-capsule" label="Internal capsule" d="M436 369 L476 381 L459 509 L417 503 Z M564 369 L524 381 L541 509 L583 503 Z" fill="#f9f5dd" {...c} />
    <InteractivePath id="putamen" label="Putamen" d="M251 422 C298 368 377 414 392 475 L361 540 L273 519 Z M749 422 C702 368 623 414 608 475 L639 540 L727 519 Z" fill="#b6d7c9" {...c} />
    <InteractivePath id="globus-pallidus" label="Globus pallidus" d="M374 436 L412 439 L410 508 L375 506 Z M626 436 L588 439 L590 508 L625 506 Z" fill="#e7cd9a" {...c} />
    <InteractivePath id="thalamus" label="Thalamus" d="M437 429 C465 393 535 393 563 429 L553 506 L500 541 L447 506 Z" fill={PALETTE.deepNuclei} {...c} />
    <Overlay layer={layer} pathwayId={pathwayId} d="M465 199 L458 474 L500 540 L542 474 L535 199" />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebrum › Coronal section</text>
  </SvgShell>;
}
function CerebrumAxial(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
  return <SvgShell label="Cerebrum axial interactive anatomy map">
    <InteractivePath id="cerebral-cortex" label="Cerebral cortex" d="M131 351 C146 170 318 102 500 103 C682 102 854 170 869 351 C854 530 682 598 500 599 C318 598 146 530 131 351 Z" fill={PALETTE.cortex} {...c} />
    <InteractivePath id="insula" label="Insular cortex" d="M258 313 C303 262 368 269 404 318 L385 409 L300 421 Z M742 313 C697 262 632 269 596 318 L615 409 L700 421 Z" fill="#c4dfd7" {...c} />
    <InteractivePath id="caudate-nucleus" label="Caudate nucleus" d="M364 270 C400 230 451 253 466 299 L445 350 L373 337 Z M636 270 C600 230 549 253 534 299 L555 350 L627 337 Z" fill={PALETTE.deepNuclei} {...c} />
    <InteractivePath id="internal-capsule" label="Internal capsule" d="M448 335 L482 344 L457 468 L423 460 Z M552 335 L518 344 L543 468 L577 460 Z" fill="#f9f5dd" {...c} />
    <InteractivePath id="putamen" label="Putamen" d="M272 386 C313 333 385 359 409 420 L382 493 L291 473 Z M728 386 C687 333 615 359 591 420 L618 493 L709 473 Z" fill="#b6d7c9" {...c} />
    <InteractivePath id="thalamus" label="Thalamus" d="M454 366 C481 343 519 343 546 366 L552 440 L500 472 L448 440 Z" fill={PALETTE.deepNuclei} {...c} />
    <InteractivePath id="lateral-ventricle" label="Lateral ventricles" d="M410 311 L449 300 L458 330 L426 350 Z M590 311 L551 300 L542 330 L574 350 Z" fill="#ffffff" {...c} />
    <Overlay layer={layer} pathwayId={pathwayId} d="M450 152 L453 355 L500 472 L547 355 L550 152" />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebrum › Axial section</text>
  </SvgShell>;
}


function BrainstemExternal(props: Omit<Props, "viewId">) {
 const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props; const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
 return <SvgShell label="Brainstem external interactive anatomy map">
   <InteractivePath id="midbrain" label="Midbrain" d="M412 121 C453 87 547 87 588 121 L565 244 L435 244 Z" fill={PALETTE.brainstem} {...c}/>
   <InteractivePath id="cerebral-peduncle" label="Cerebral peduncles" d="M432 175 L475 155 L493 258 L443 274 Z M568 175 L525 155 L507 258 L557 274 Z" fill="#d4c697" {...c}/>
   <InteractivePath id="pons" label="Pons" d="M349 259 C407 211 593 211 651 259 L628 413 C550 454 450 454 372 413 Z" fill={PALETTE.brainstem} {...c}/>
   <InteractivePath id="medulla" label="Medulla" d="M415 413 L585 413 L565 622 L435 622 Z" fill={PALETTE.brainstem} {...c}/>
   <InteractivePath id="cranial-nerve-roots" label="Cranial nerve roots" d="M375 275 L278 246 M368 329 L252 333 M377 382 L268 424 M625 275 L722 246 M632 329 L748 333 M623 382 L732 424" fill="none" stroke={PALETTE.cranial} strokeWidth={8} {...c}/>
   <InteractivePath id="cerebellar-peduncles" label="Cerebellar peduncles" d="M377 292 C321 268 288 278 246 333 M623 292 C679 268 712 278 754 333" fill="none" stroke={PALETTE.cerebellum} strokeWidth={18} {...c}/>
   <Overlay layer={layer} pathwayId={pathwayId} d="M500 116 L500 610"/>
   <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Brainstem › External view</text>
 </SvgShell>;
}
function CerebellumView(props: Omit<Props, "viewId">) {
 const { layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props; const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
 return <SvgShell label="Cerebellum interactive anatomy map">
   <InteractivePath id="cerebellar-hemisphere" label="Cerebellar hemispheres" d="M169 333 C191 169 364 106 500 232 C636 106 809 169 831 333 C846 512 680 605 500 553 C320 605 154 512 169 333 Z" fill={PALETTE.cerebellum} {...c}/>
   <InteractivePath id="vermis" label="Vermis" d="M459 215 C487 190 513 190 541 215 L563 526 C525 546 475 546 437 526 Z" fill="#c3abd7" {...c}/>
   <InteractivePath id="anterior-lobe" label="Anterior lobe" d="M200 319 C282 205 401 207 459 267 L438 355 C361 311 282 327 215 396 Z M800 319 C718 205 599 207 541 267 L562 355 C639 311 718 327 785 396 Z" fill="#e4d7f0" {...c}/>
   <InteractivePath id="posterior-lobe" label="Posterior lobe" d="M208 405 C294 330 388 364 443 400 L435 522 C320 551 225 498 208 405 Z M792 405 C706 330 612 364 557 400 L565 522 C680 551 775 498 792 405 Z" fill="#d1bee5" {...c}/>
   <InteractivePath id="flocculonodular-lobe" label="Flocculonodular lobe" d="M427 498 C470 471 530 471 573 498 L559 543 C524 563 476 563 441 543 Z" fill="#f0dfb0" {...c}/>
   <InteractivePath id="superior-cerebellar-peduncle" label="Superior cerebellar peduncle" d="M439 244 L477 232 L495 157 L505 157 L523 232 L561 244" fill="none" stroke="#9d87b7" strokeWidth={15} {...c}/>
   <Overlay layer={layer} pathwayId={pathwayId} d="M500 151 L500 540"/>
   <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebellum</text>
 </SvgShell>;
}


function CerebrumInferior(props: Omit<Props, "viewId">) {
 const { layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props; const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
 return <SvgShell label="Cerebrum inferior interactive anatomy map">
   <InteractivePath id="frontal-lobe" label="Orbital frontal surface" d="M173 238 C265 130 406 125 500 209 L500 430 C367 461 245 416 173 332 Z" fill={PALETTE.cortex} {...c}/>
   <InteractivePath id="temporal-lobe" label="Temporal lobe" d="M500 209 C594 125 735 130 827 238 L827 332 C755 416 633 461 500 430 Z" fill="#d4e6f5" {...c}/>
   <InteractivePath id="olfactory-bulb" label="Olfactory bulb" d="M340 225 C355 198 381 198 398 222 L385 270 L352 270 Z M602 225 C619 198 645 198 660 225 L648 270 L615 270 Z" fill="#efd39e" {...c}/>
   <InteractivePath id="optic-chiasm" label="Optic chiasm" d="M449 337 L481 306 L500 331 L519 306 L551 337 L518 360 L500 346 L482 360 Z" fill="#efb9bd" {...c}/>
   <InteractivePath id="midbrain" label="Midbrain" d="M471 368 L529 368 L546 430 L454 430 Z" fill={PALETTE.brainstem} {...c}/>
   <InteractivePath id="pons" label="Pons" d="M435 430 C461 401 539 401 565 430 L560 473 L440 473 Z" fill={PALETTE.brainstem} {...c}/>
   <InteractivePath id="medulla" label="Medulla" d="M469 473 L531 473 L523 566 L477 566 Z" fill={PALETTE.brainstem} {...c}/>
   <InteractivePath id="cerebellum" label="Cerebellum" d="M270 441 C350 383 436 432 454 502 L500 603 L546 502 C564 432 650 383 730 441 C736 569 639 622 500 617 C361 622 264 569 270 441 Z" fill={PALETTE.cerebellum} {...c}/>
   <Overlay layer={layer} pathwayId={pathwayId} d="M368 244 L500 331 L500 566"/>
   <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebrum › Inferior view</text>
 </SvgShell>;
}


function SpinalLevels(props: Omit<Props, "viewId">) {
 const {layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props;const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
 const levels: Array<[string,string,number,number,string]>=[['cervical-cord','Cervical',130,140,'#c6e4ef'],['thoracic-cord','Thoracic',285,210,'#d5e5f5'],['lumbar-cord','Lumbar',492,160,'#d3e9db'],['sacral-cord','Sacral',652,72,'#f0dbbd']] as const;
 return <SvgShell label="Spinal cord levels interactive anatomy map"><InteractivePath id="spinal-cord" label="Spinal cord" d="M428 95 L572 95 L585 635 L415 635 Z" fill={PALETTE.spinalWhite} {...c}/>{levels.map(([id,label,y,h,fill])=><InteractivePath key={id} id={id} label={label+" spinal cord"} d={"M434 "+y+" H566 V"+(y+h)+" H434 Z"} fill={fill} {...c}/>)}<InteractivePath id="dorsal-root" label="Dorsal roots" d="M434 220 L277 164 M434 302 L259 284 M434 424 L263 472 M566 220 L723 164 M566 302 L741 284 M566 424 L737 472" fill="none" stroke={PALETTE.sensory} strokeWidth={9} {...c}/><InteractivePath id="ventral-root" label="Ventral roots" d="M434 242 L277 220 M434 324 L259 327 M434 446 L263 505 M566 242 L723 220 M566 324 L741 327 M566 446 L737 505" fill="none" stroke={PALETTE.motor} strokeWidth={9} {...c}/><Overlay layer={layer} pathwayId={pathwayId} d="M500 112 L500 618"/><text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Spinal cord › Segmental levels</text></SvgShell>;
}
function PlexusMap({ viewId, ...props }: Props) {
 const {layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props;const c={selectedId,hoveredId,pathwayId,onSelect,onHover};const upper=viewId==='brachial-plexus';const sacral=viewId==='sacral-plexus';
 const roots: Array<[string,number]>=upper?[['C5',145],['C6',215],['C7',285],['C8',355],['T1',425]]:[['L1',145],['L2',205],['L3',265],['L4',325],['L5',385],['S1',445],['S2',505],['S3',565]];const trunkX=upper?420:410; const nerves: Array<[string,string,number]>=upper?[['musculocutaneous-nerve','Musculocutaneous',130],['median-nerve','Median',255],['ulnar-nerve','Ulnar',380],['radial-nerve','Radial',505]]:[['femoral-nerve','Femoral',180],['obturator-nerve','Obturator',300],['sciatic-nerve','Sciatic',420],['tibial-nerve','Tibial',530],['common-fibular-nerve','Common fibular',610]];
 return <SvgShell label={upper?"Brachial plexus interactive anatomy map":sacral?"Sacral plexus interactive anatomy map":"Lumbosacral plexus interactive anatomy map"}><text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">{upper?"PNS › Plexus › Brachial plexus":sacral?"PNS › Plexus › Sacral plexus":"PNS › Plexus › Lumbosacral plexus"}</text>{roots.map(([label,y])=><g key={label}><text x="90" y={Number(y)+6} fill="#49627c" fontSize="18" fontWeight="700">{label}</text><InteractivePath id={upper?'brachial-plexus':'lumbosacral-plexus'} label={upper?'Brachial plexus':'Lumbosacral plexus'} d={"M130 "+y+" C240 "+y+" "+(trunkX-70)+" "+(320+(Number(y)-300)*.15)+" "+trunkX+" 350"} fill="none" stroke={PALETTE.nerve} strokeWidth={8} {...c}/></g>)}<InteractivePath id={upper?'brachial-plexus':'lumbosacral-plexus'} label={upper?'Brachial plexus cords':'Lumbosacral plexus'} d={"M"+trunkX+" 350 C"+(trunkX+85)+" 280 "+(trunkX+135)+" 300 "+(trunkX+195)+" 350 M"+trunkX+" 350 C"+(trunkX+85)+" 410 "+(trunkX+135)+" 400 "+(trunkX+195)+" 350"} fill="none" stroke="#6d9fb6" strokeWidth={18} {...c}/>{nerves.map(([id,label,y])=><g key={id}><InteractivePath id={id} label={label+" nerve"} d={"M"+(trunkX+190)+" 350 C"+(trunkX+285)+" 350 "+(trunkX+330)+" "+y+" 890 "+y} fill="none" stroke={PALETTE.nerve} strokeWidth={12} {...c}/><text x="800" y={Number(y)-10} fill="#49627c" fontSize="16" textAnchor="middle">{label}</text></g>)}<Overlay layer={layer} pathwayId={pathwayId} d={"M130 145 C270 145 "+trunkX+" 330 "+(trunkX+195)+" 350 L890 "+(upper?255:420)}/></SvgShell>;
}
function LimbNerveMap({ viewId, ...props }: Props) {
 const {layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props;const c={selectedId,hoveredId,pathwayId,onSelect,onHover};const upper=viewId==='upper-limb-nerves';const nerves: Array<[string,string,number,number,number,number]>=upper?[['musculocutaneous-nerve','Musculocutaneous',430,190,410,500],['median-nerve','Median',500,185,500,560],['ulnar-nerve','Ulnar',563,185,605,560],['radial-nerve','Radial',640,195,670,510]]:[['femoral-nerve','Femoral',440,155,432,445],['sciatic-nerve','Sciatic',510,150,520,430],['tibial-nerve','Tibial',520,430,500,625],['common-fibular-nerve','Common fibular',520,430,600,535]];
 return <SvgShell label={upper?"Upper limb peripheral nerves interactive map":"Lower limb peripheral nerves interactive map"}><path d={upper?"M372 130 C442 94 558 94 628 130 L690 352 L628 622 L566 651 L500 611 L434 651 L372 622 L310 352 Z":"M404 105 C465 70 535 70 596 105 L626 277 L676 620 L592 650 L545 392 L500 650 L455 392 L408 650 L324 620 L374 277 Z"} fill="#eff5fa" stroke={PALETTE.outline} strokeWidth={3}/>{nerves.map(([id,label,x1,y1,x2,y2])=><g key={id}><InteractivePath id={id} label={label+" nerve"} d={"M"+x1+" "+y1+" C"+x1+" "+((y1+y2)/2)+" "+x2+" "+((y1+y2)/2)+" "+x2+" "+y2} fill="none" stroke={PALETTE.nerve} strokeWidth={12} {...c}/><text x={x2} y={y2+26} fill="#49627c" fontSize="15" textAnchor="middle">{label}</text></g>)}<Overlay layer={layer} pathwayId={pathwayId} d={upper?"M500 180 L500 560":"M510 145 L520 430 L500 625"}/><text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">{upper?"PNS › Peripheral nerves › Upper limb":"PNS › Peripheral nerves › Lower limb"}</text></SvgShell>;
}
function NmjMap(props: Omit<Props, "viewId">) {
 const {layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props;const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
 return <SvgShell label="Neuromuscular junction interactive anatomy map"><InteractivePath id="motor-neuron" label="Motor neuron terminal" d="M111 336 C275 333 356 330 476 337" fill="none" stroke={PALETTE.nerve} strokeWidth={22} {...c}/><InteractivePath id="neuromuscular-junction" label="Neuromuscular junction" d="M477 303 C534 273 586 282 620 334 C587 388 534 398 477 367 Z" fill={PALETTE.deepNuclei} {...c}/><InteractivePath id="skeletal-muscle" label="Skeletal muscle fiber" d="M626 237 C760 203 862 263 895 352 C862 441 760 501 626 467 Z" fill={PALETTE.muscle} {...c}/><path d="M653 291 H846 M653 329 H865 M653 367 H846 M653 405 H820" stroke="#bd8989" strokeWidth="9" strokeLinecap="round"/><Overlay layer={layer} pathwayId={pathwayId} d="M120 336 L488 336 L625 351 L880 351"/><text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">Motor unit › Neuromuscular junction › Skeletal muscle</text></SvgShell>;
}


function BrainstemSection(props: Omit<Props, "viewId">) {
 const {layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props;const c={selectedId,hoveredId,pathwayId,onSelect,onHover};
 return <SvgShell label="Brainstem sectional interactive anatomy map"><InteractivePath id="midbrain" label="Midbrain section" d="M170 140 C296 65 704 65 830 140 L782 300 L218 300 Z" fill={PALETTE.brainstem} {...c}/><InteractivePath id="pons" label="Pons section" d="M147 334 C292 260 708 260 853 334 L800 490 L200 490 Z" fill={PALETTE.brainstem} {...c}/><InteractivePath id="medulla" label="Medulla section" d="M188 527 C320 475 680 475 812 527 L752 630 L248 630 Z" fill={PALETTE.brainstem} {...c}/><InteractivePath id="cranial-nerve-roots" label="Cranial nerve nuclei region" d="M348 177 L652 177 M320 371 L680 371 M344 565 L656 565" fill="none" stroke={PALETTE.cranial} strokeWidth={18} {...c}/><InteractivePath id="corticospinal-region" label="Corticospinal tract region" d="M366 218 L407 218 L395 272 L354 272 M593 218 L634 218 L646 272 L605 272 M357 404 L405 404 L414 465 L366 465" fill={PALETTE.motor} {...c}/><InteractivePath id="medial-lemniscus-region" label="Medial lemniscus region" d="M463 218 L537 218 L550 272 L450 272 M450 404 L550 404 L537 465 L463 465" fill={PALETTE.sensory} {...c}/><Overlay layer={layer} pathwayId={pathwayId} d="M500 108 L500 623"/><text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Brainstem › Sectional views</text></SvgShell>;
}
function DermatomeMap({ viewId, ...props }: Props) {
 const {layer,pathwayId,selectedId,hoveredId,onSelect,onHover}=props;const c={selectedId,hoveredId,pathwayId,onSelect,onHover};const posterior=viewId==='dermatome-posterior';const segments=[['c5-dermatome','C5',190,'#e7d3ef'],['c6-dermatome','C6',255,'#cde6f8'],['c7-dermatome','C7',320,'#c8eadb'],['c8-dermatome','C8',385,'#f5e3b5'],['t4-dermatome','T4',450,'#f1c8bf'],['t10-dermatome','T10',515,'#e4d2b4'],['l1-dermatome','L1',575,'#d2d6f5'],['l4-dermatome','L4',625,'#c7e5db']] as const;
 return <SvgShell label={posterior?"Posterior dermatome interactive map":"Anterior dermatome interactive map"}><path d="M428 105 C458 73 542 73 572 105 L596 208 L660 330 L594 455 L625 639 L549 649 L500 507 L451 649 L375 639 L406 455 L340 330 L404 208 Z" fill="#eff5fa" stroke={PALETTE.outline} strokeWidth={3}/>{segments.map(([id,label,y,fill])=><g key={id}><InteractivePath id={id} label={label+" dermatome"} d={"M382 "+y+" C445 "+(y-15)+" 555 "+(y-15)+" 618 "+y+" L600 "+(y+48)+" C540 "+(y+66)+" 460 "+(y+66)+" 400 "+(y+48)+" Z"} fill={fill} {...c}/><text x="500" y={y+31} textAnchor="middle" fill="#49627c" fontSize="17" fontWeight="700">{label}</text></g>)}<Overlay layer={layer} pathwayId={pathwayId} d="M500 165 L500 635"/><text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">{posterior?"Somatic maps › Dermatome › Posterior view":"Somatic maps › Dermatome › Anterior view"}</text></SvgShell>;
}


function CerebrumMedial(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const c = { selectedId, hoveredId, pathwayId, onSelect, onHover };
  return <SvgShell label="Cerebrum medial interactive anatomy map">
    <InteractivePath id="medial-frontal-cortex" label="Medial frontal cortex" d="M143 342 C153 172 292 89 458 105 L513 195 L448 364 L273 422 Z" fill={PALETTE.cortex} {...c} />
    <InteractivePath id="paracentral-lobule" label="Paracentral lobule" d="M410 108 C470 91 531 105 577 145 L559 241 L461 253 Z" fill={PALETTE.cortexAlt} {...c} />
    <InteractivePath id="precuneus" label="Precuneus" d="M578 145 C661 159 726 207 762 282 L676 344 L555 304 Z" fill="#d1e2f4" {...c} />
    <InteractivePath id="cuneus" label="Cuneus" d="M716 300 C778 331 799 397 770 450 L673 434 L652 359 Z" fill="#c6d9ed" {...c} />
    <InteractivePath id="lingual-gyrus" label="Lingual gyrus" d="M654 438 L770 455 C738 531 645 558 555 527 L568 436 Z" fill="#d7e8f3" {...c} />
    <InteractivePath id="cingulate-gyrus" label="Cingulate gyrus" d="M263 371 C344 262 492 229 626 299 L605 345 C487 293 365 321 294 410 Z" fill="#b9ddd2" {...c} />
    <InteractivePath id="corpus-callosum" label="Corpus callosum" d="M294 416 C365 334 493 329 596 378 L576 416 C479 377 376 388 323 450 Z" fill={PALETTE.whiteMatter} {...c} />
    <InteractivePath id="thalamus" label="Thalamus" d="M468 417 C506 384 559 410 559 457 C548 498 492 508 465 478 Z" fill={PALETTE.deepNuclei} {...c} />
    <InteractivePath id="brainstem" label="Brainstem" d="M485 488 L548 484 L569 617 L474 617 Z" fill={PALETTE.brainstem} {...c} />
    <InteractivePath id="cerebellum" label="Cerebellum" d="M608 449 C709 409 813 490 773 601 C696 648 615 596 582 536 Z" fill={PALETTE.cerebellum} {...c} />
    <Overlay layer={layer} pathwayId={pathwayId} d="M397 174 C420 274 442 345 479 409 L520 490 L523 611" />
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">CNS › Brain › Cerebrum › Medial view</text>
  </SvgShell>;
}
function SacralPlexusMap(props: Omit<Props, "viewId">) {
  const { layer, pathwayId, selectedId, hoveredId, onSelect, onHover } = props;
  const c = { selectedId, hoveredId, pathwayId, onSelect, onHover };
  const roots = [["L4", 170], ["L5", 235], ["S1", 300], ["S2", 365], ["S3", 430], ["S4", 495]] as const;
  return <SvgShell label="Sacral plexus interactive anatomy map">
    <text x="64" y="74" fill="#49627c" fontSize="18" fontWeight="700">PNS › Plexus › Sacral plexus</text>
    {roots.map(([label, y]) => <g key={label}><text x="95" y={y + 6} fill="#49627c" fontSize="18" fontWeight="700">{label}</text><InteractivePath id="sacral-plexus" label="Sacral plexus" d={"M135 " + y + " C280 " + y + " 325 " + (300 + (y - 300) * .16) + " 450 342"} fill="none" stroke={PALETTE.nerve} strokeWidth={9} {...c} /></g>)}
    <InteractivePath id="sciatic-nerve" label="Sciatic nerve" d="M450 342 C580 307 652 325 884 285" fill="none" stroke="#6d9fb6" strokeWidth={18} {...c} />
    <InteractivePath id="tibial-nerve" label="Tibial nerve" d="M566 322 C685 390 751 473 884 534" fill="none" stroke={PALETTE.nerve} strokeWidth={12} {...c} />
    <InteractivePath id="common-fibular-nerve" label="Common fibular nerve" d="M572 325 C680 294 772 240 884 202" fill="none" stroke={PALETTE.nerve} strokeWidth={12} {...c} />
    <InteractivePath id="pudendal-nerve" label="Pudendal nerve" d="M512 355 C594 412 683 446 784 465" fill="none" stroke="#ab85b7" strokeWidth={12} {...c} />
    <Overlay layer={layer} pathwayId={pathwayId} d="M135 300 C290 300 356 342 450 342 L884 285" />
  </SvgShell>;
}

function UnavailableView() {
  return <SvgShell label="View not yet published">
    <g transform="translate(500 340)">
      <circle r="78" fill="#eef5f8" stroke="#b9d9d5" strokeWidth="2" />
      <path d="M-33 7 H33 M0-33 V33" stroke="#0f8d83" strokeWidth="9" strokeLinecap="round" />
      <text y="125" textAnchor="middle" fill="#33556f" fontSize="20" fontWeight="700">This view is being redrawn as a project SVG.</text>
    </g>
  </SvgShell>;
}

export function NativeNeuroAtlas({ viewId, ...props }: Props) {
  if (viewId === "whole-neuraxis") return <WholeNeuraxis {...props} />;
  if (viewId === "brain-midsagittal") return <Midsagittal {...props} />;
  if (viewId === "cerebrum-medial") return <CerebrumMedial {...props} />;
  if (viewId === "cerebrum-lateral") return <CerebrumLateral {...props} />;
  if (viewId === "cerebrum-inferior") return <CerebrumInferior {...props} />;
  if (viewId === "brain-coronal") return <CerebrumCoronal {...props} />;
  if (viewId === "brain-axial") return <CerebrumAxial {...props} />;
  if (viewId === "brainstem-external") return <BrainstemExternal {...props} />;
  if (viewId === "brainstem-section") return <BrainstemSection {...props} />;
  if (viewId === "cerebellum") return <CerebellumView {...props} />;
  if (viewId === "spinal-cross-section") return <SpinalCrossSection {...props} />;
  if (viewId === "spinal-levels") return <SpinalLevels {...props} />;
  if (viewId === "brachial-plexus" || viewId === "lumbosacral-plexus") return <PlexusMap viewId={viewId} {...props} />;
  if (viewId === "sacral-plexus") return <SacralPlexusMap {...props} />;
  if (viewId === "upper-limb-nerves" || viewId === "lower-limb-nerves") return <LimbNerveMap viewId={viewId} {...props} />;
  if (viewId === "nmj-muscle") return <NmjMap {...props} />;
  if (viewId === "dermatome-anterior" || viewId === "dermatome-posterior") return <DermatomeMap viewId={viewId} {...props} />;
  return <UnavailableView />;
}

export const nativeNeuroViewIds = new Set(["whole-neuraxis", "cerebrum-lateral", "cerebrum-medial", "brain-midsagittal", "cerebrum-inferior", "brain-coronal", "brain-axial", "brainstem-external", "brainstem-section", "cerebellum", "spinal-levels", "spinal-cross-section", "brachial-plexus", "lumbosacral-plexus", "sacral-plexus", "upper-limb-nerves", "lower-limb-nerves", "dermatome-anterior", "dermatome-posterior", "nmj-muscle"]);
