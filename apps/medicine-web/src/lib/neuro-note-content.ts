import type { NeuroAtlas } from "@/lib/webdb";
import { relatedStructures } from "@/lib/neuro-notes";
import { genericStructureClinicalSection } from "@/lib/neuro-clinical-profiles";
import { structureClinicalOverrides as individualStructureClinicalOverrides } from "@/lib/neuro-structure-clinical-overrides";
import { cleanStructureClinicalOverrides } from "@/lib/neuro-structure-clinical-clean-overrides";

export type NeuroNoteSection = {
  heading: string;
  items: Array<{ label?: string; text: string }>;
};

const structureClinicalOverrides: Record<string, NeuroNoteSection> = {
  "frontal-lobe": {
    heading: "임상적 의의 및 병변 시 증상",
    items: [
      { label: "주요 증상", text: "executive dysfunction, impaired attention, apathy 또는 disinhibition, motor planning 저하가 나타날 수 있습니다." },
      { label: "주요 징후", text: "primary motor cortex 또는 corticospinal tract가 함께 침범되면 contralateral weakness, hyperreflexia, Babinski sign이 동반될 수 있습니다." },
      { label: "국소화", text: "dominant inferior frontal gyrus 병변은 Broca aphasia와 연관될 수 있고, medial frontal/anterior cingulate involvement는 abulia를 유발할 수 있습니다." },
      { label: "주의점", text: "행동 변화는 psychiatric disorder와 감별해야 하며, 병력과 formal cognitive examination을 함께 해석합니다." },
    ],
  },
  "parietal-lobe": {
    heading: "임상적 의의 및 병변 시 증상",
    items: [
      { label: "주요 증상", text: "contralateral sensory dysfunction, visuospatial impairment, neglect 또는 apraxia가 나타날 수 있습니다." },
      { label: "국소화", text: "non-dominant parietal lobe 병변은 contralateral neglect와, dominant parietal lobe 병변은 Gerstmann syndrome 또는 apraxia와 연관될 수 있습니다." },
      { label: "주의점", text: "visual field deficit와 neglect는 다르므로 confrontation test와 extinction test를 분리해 확인합니다." },
    ],
  },
  "temporal-lobe": {
    heading: "임상적 의의 및 병변 시 증상",
    items: [
      { label: "주요 증상", text: "memory impairment, auditory/language dysfunction, focal seizure symptom 또는 visual field deficit이 나타날 수 있습니다." },
      { label: "국소화", text: "dominant posterior temporal cortex 병변은 Wernicke aphasia와, optic radiation involvement는 contralateral superior quadrantanopia와 연관될 수 있습니다." },
      { label: "주의점", text: "episodic memory complaint는 hippocampus involvement, seizure semiology, medication effect를 함께 평가합니다." },
    ],
  },
  "occipital-lobe": {
    heading: "임상적 의의 및 병변 시 증상",
    items: [
      { label: "주요 증상", text: "contralateral homonymous visual field defect, visual distortion 또는 cortical visual symptom이 나타날 수 있습니다." },
      { label: "국소화", text: "primary visual cortex 병변은 contralateral homonymous hemianopia와 연관되며, macular sparing 여부는 병변 해석에 참고합니다." },
      { label: "주의점", text: "ocular disease와 구분하기 위해 visual acuity, pupillary response, visual field를 함께 확인합니다." },
    ],
  },
};

export function structureNoteSections(atlas: NeuroAtlas, structure: NeuroAtlas["structures"][number]): NeuroNoteSection[] {
  const views = (structure.viewIds ?? [])
    .map((id) => atlas.views.find((view) => view.id === id)?.label)
    .filter((label): label is string => Boolean(label));
  const pathways = atlas.pathways.filter((pathway) => pathway.nodes?.includes(structure.id));
  const reflexes = atlas.reflexes.filter((reflex) => reflex.route?.includes(structure.id));
  const related = relatedStructures(atlas, structure.id);
  const individualizedClinical = structureClinicalOverrides[structure.id] ?? cleanStructureClinicalOverrides[structure.id] ?? individualStructureClinicalOverrides[structure.id];
  if (structure.note) return [
    { heading: "\uD574\uBD80\uD559 \uC815\uBCF4", items: [...structure.note.anatomy, { label: "Atlas", text: views.length ? `${views.join(", ")}\uC5D0\uC11C \uC704\uCE58\uC640 \uC778\uC811 \uAD6C\uC870\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.` : "Atlas view\uAC00 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4." }] },
    { heading: "\uB2F4\uB2F9 \uAE30\uB2A5", items: structure.note.function },
    { heading: "\uC784\uC0C1\uC801 \uC758\uC758 \uBC0F \uBCD1\uBCC0 \uC2DC \uC99D\uC0C1", items: individualizedClinical?.items ?? structure.note.clinical },
    { heading: "\uAD00\uB828 \uAD6C\uC870", items: structure.note.related },
  ];

  const clinical = structureClinicalOverrides[structure.id] ?? cleanStructureClinicalOverrides[structure.id] ?? individualStructureClinicalOverrides[structure.id] ?? genericStructureClinicalSection(structure, pathways, reflexes) ?? {
    heading: "임상적 의의 및 병변 시 증상",
    items: [
      { label: "평가", text: `${structure.en}의 이상은 인접 구조, 관련 pathway 및 neurological examination을 함께 해석해 위치를 추정합니다.` },
      { label: "연관 질환", text: structure.links.length ? `아래의 linked disease note에서 ${structure.en}과 관련된 symptom 및 sign을 확인합니다.` : "현재 직접 연결된 disease note가 없습니다." },
    ],
  };

  return [
    {
      heading: "해부학 정보",
      items: [
        { label: "위치 / 범위", text: structure.summary },
        { label: "Atlas", text: views.length ? `${views.join(", ")}에서 위치와 인접 구조를 확인할 수 있습니다.` : "Atlas view가 아직 연결되지 않았습니다." },
      ],
    },
    {
      heading: "담당 기능",
      items: [
        { label: "관련 pathway", text: pathways.length ? pathways.map((pathway) => `${pathway.en}: ${pathway.primaryFunction ?? pathway.route}`).join(" ") : `${structure.en}은(는) 선택된 Atlas view의 anatomical relationship 안에서 해석합니다.` },
        ...(reflexes.length ? [{ label: "관련 NEx", text: reflexes.map((reflex) => reflex.label).join(", ") }] : []),
      ],
    },
    clinical,
    {
      heading: "관련 구조",
      items: related.map((item) => ({ label: item.en, text: item.summary })).slice(0, 8),
    },
  ];
}

export function pathwayNoteSections(pathway: NeuroAtlas["pathways"][number]): NeuroNoteSection[] {
  if (pathway.note) return [
    { heading: "\uD574\uBD80\uD559 \uC815\uBCF4", items: pathway.note.anatomy },
    { heading: "\uB2F4\uB2F9 \uAE30\uB2A5", items: pathway.note.function },
    { heading: "\uC784\uC0C1\uC801 \uC758\uC758 \uBC0F \uBCD1\uBCC0 \uC2DC \uC99D\uC0C1", items: pathway.note.clinical },
    { heading: "\uAD00\uB828 \uAD6C\uC870", items: pathway.note.related },
  ];
  return [
    {
      heading: "해부학 정보",
      items: [
        { label: "Origin", text: pathway.origin ?? pathway.route },
        { label: "Course", text: pathway.route },
        { label: "Decussation", text: pathway.decussation ?? "교차 여부는 route와 source를 확인합니다." },
        { label: "Termination", text: pathway.termination ?? "termination 정보가 아직 연결되지 않았습니다." },
      ],
    },
    { heading: "담당 기능", items: [{ label: "핵심 기능", text: pathway.primaryFunction ?? pathway.route }] },
    {
      heading: "임상적 의의 및 병변 시 증상",
      items: [
        { label: "병변 양상", text: pathway.lesionPattern ?? pathway.pattern },
        ...(pathway.laterality ? [{ label: "측성", text: pathway.laterality.description }] : []),
      ],
    },
  ];
}

export function reflexNoteSections(reflex: NeuroAtlas["reflexes"][number]): NeuroNoteSection[] {
  if (reflex.note) return [
    { heading: "Reflex arc", items: reflex.note.anatomy },
    { heading: "\uAC80\uC0AC \uBC29\uBC95", items: reflex.note.function },
    { heading: "\uC784\uC0C1\uC801 \uC758\uC758 \uBC0F \uC774\uC0C1 \uC18C\uACAC", items: reflex.note.clinical },
    { heading: "\uAD00\uB828 \uAD6C\uC870", items: reflex.note.related },
  ];
  return [
    { heading: "Reflex arc", items: [{ label: "회로", text: reflex.arc }] },
    {
      heading: "검사 방법",
      items: reflex.technique?.map((text) => ({ text })) ?? [{ text: "검사 방법 정보가 아직 연결되지 않았습니다." }],
    },
    {
      heading: "임상적 의의 및 이상 소견",
      items: [
        { label: "정상 반응", text: reflex.normal ?? "좌우 반응을 비교합니다." },
        { label: "이상 소견", text: reflex.abnormal ?? "병력과 다른 neurological sign을 함께 해석합니다." },
        { label: "위치추정", text: reflex.localization },
        ...(reflex.laterality ? [{ label: "측성", text: reflex.laterality.description }] : []),
      ],
    },
  ];
}
