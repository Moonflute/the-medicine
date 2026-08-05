import type { NeuroNoteSection } from "@/lib/neuro-note-content";

type Item = { label: string; text: string };
const clinical = (items: Item[]): NeuroNoteSection => ({ heading: "임상적 의의 및 병변 시 증상", items });

export const structureClinicalOverrides: Record<string, NeuroNoteSection> = {
  "precentral-gyrus": clinical([
    { label: "주요 증상", text: "contralateral weakness와 fine motor control 저하가 나타날 수 있으며, face·upper limb·lower limb의 분포는 motor homunculus에 따라 달라집니다." },
    { label: "주요 징후", text: "hyperreflexia, spasticity, pronator drift, Babinski sign 같은 upper motor neuron sign이 동반될 수 있습니다." },
    { label: "국소화", text: "lateral surface 병변은 face/upper limb, medial surface 병변은 lower limb weakness가 두드러질 수 있습니다." },
    { label: "주의점", text: "acute lesion 초기에는 weakness가 있으나 tone과 reflex 변화가 아직 뚜렷하지 않을 수 있습니다." },
  ]),
  "postcentral-gyrus": clinical([
    { label: "주요 증상", text: "contralateral numbness, impaired tactile discrimination, astereognosis 또는 impaired graphesthesia가 나타날 수 있습니다." },
    { label: "주요 징후", text: "light touch, pinprick, vibration, joint position sense 및 cortical sensory test를 비교합니다." },
    { label: "국소화", text: "감각 분포는 sensory homunculus와 연관되며, medial cortex 병변은 lower limb sensory deficit을 동반할 수 있습니다." },
  ]),
  "broca-area": clinical([
    { label: "주요 증상", text: "nonfluent speech, effortful output, impaired repetition, agrammatism이 나타날 수 있습니다." },
    { label: "주요 징후", text: "comprehension은 비교적 보존되지만 spontaneous speech와 naming이 감소할 수 있습니다." },
    { label: "국소화", text: "대개 dominant inferior frontal gyrus와 인접 precentral region의 lesion을 시사하며 right face/arm weakness가 동반될 수 있습니다." },
    { label: "주의점", text: "dysarthria와 aphasia를 구분하려면 writing, comprehension, naming, repetition을 모두 확인합니다." },
  ]),
  "wernicke-area": clinical([
    { label: "주요 증상", text: "fluent but paraphasic speech, impaired comprehension, impaired repetition이 나타날 수 있습니다." },
    { label: "주요 징후", text: "말의 유창성만으로 언어 기능이 정상이라고 판단하지 말고 command following과 naming을 확인합니다." },
    { label: "국소화", text: "대개 dominant posterior superior temporal cortex lesion과 연관되고, visual field deficit이 동반될 수 있습니다." },
  ]),
  "thalamus": clinical([
    { label: "주요 증상", text: "contralateral sensory loss, altered arousal, cognitive change, dysarthria 또는 thalamic pain syndrome이 나타날 수 있습니다." },
    { label: "주요 징후", text: "all sensory modality, attention, eye movement, memory 및 associated motor sign을 함께 확인합니다." },
    { label: "국소화", text: "vascular territory와 침범한 thalamic nucleus에 따라 양상이 달라지며, pure sensory syndrome은 대표적인 pattern입니다." },
  ]),
  "basal-ganglia": clinical([
    { label: "주요 증상", text: "bradykinesia, rigidity, resting tremor, dystonia, chorea, ballism 또는 gait initiation difficulty가 나타날 수 있습니다." },
    { label: "주요 징후", text: "speed and amplitude of repetitive movement, tone, posture, tremor, involuntary movement를 관찰합니다." },
    { label: "국소화", text: "hypokinetic syndrome과 hyperkinetic syndrome의 구분은 basal ganglia circuit localization에 도움이 됩니다." },
    { label: "주의점", text: "dopamine-blocking medication, metabolic disorder, functional movement disorder를 병력과 함께 감별합니다." },
  ]),
  "hippocampus": clinical([
    { label: "주요 증상", text: "new learning impairment, anterograde amnesia, disorientation 또는 temporal lobe seizure-related memory symptom이 나타날 수 있습니다." },
    { label: "주요 징후", text: "delayed recall, cueing response, orientation 및 seizure semiology를 평가합니다." },
    { label: "국소화", text: "bilateral hippocampal dysfunction은 심한 new memory formation 저하와 연관될 수 있습니다." },
  ]),
  "amygdala": clinical([
    { label: "주요 증상", text: "fear processing, emotional salience, autonomic response와 연관된 변화가 나타날 수 있습니다." },
    { label: "임상 맥락", text: "temporal lobe epilepsy에서는 experiential aura, autonomic symptom, altered affect가 동반될 수 있습니다." },
    { label: "주의점", text: "행동·정서 변화는 단일 amygdala lesion만으로 해석하지 않고 broader limbic network와 psychiatric history를 함께 평가합니다." },
  ]),
  "internal-capsule": clinical([
    { label: "주요 증상", text: "작은 lesion이라도 densely packed corticospinal 및 corticobulbar fiber 때문에 contralateral face-arm-leg weakness가 뚜렷할 수 있습니다." },
    { label: "주요 징후", text: "dysarthria, pronator drift, hyperreflexia 및 Babinski sign을 확인합니다." },
    { label: "국소화", text: "pure motor syndrome은 lacunar infarction을 포함한 internal capsule lesion을 시사할 수 있습니다." },
  ]),
  "midbrain": clinical([
    { label: "주요 증상", text: "diplopia, ptosis, anisocoria, vertical gaze abnormality, contralateral weakness 또는 ataxia가 나타날 수 있습니다." },
    { label: "주요 징후", text: "pupil, extraocular movement, eyelid position, long-tract sign 및 coordination을 함께 확인합니다." },
    { label: "국소화", text: "cranial nerve III sign과 contralateral long-tract sign의 조합은 midbrain lesion localization에 중요합니다." },
  ]),
  "pons": clinical([
    { label: "주요 증상", text: "facial weakness, diplopia, gaze palsy, dysarthria, ataxia 및 contralateral motor/sensory sign이 나타날 수 있습니다." },
    { label: "주요 징후", text: "abducens and facial nerve function, horizontal eye movement, corneal reflex, long-tract sign을 평가합니다." },
    { label: "주의점", text: "acute onset brainstem sign은 posterior circulation stroke를 우선 고려해 긴급 평가가 필요합니다." },
  ]),
  "medulla": clinical([
    { label: "주요 증상", text: "dysphagia, dysarthria, hoarseness, vertigo, nystagmus, crossed sensory finding 또는 gait ataxia가 나타날 수 있습니다." },
    { label: "주요 징후", text: "palatal movement, gag reflex, voice, swallowing, eye movement, pain/temperature sensation을 함께 평가합니다." },
    { label: "주의점", text: "dysphagia와 aspiration risk가 있으면 airway 및 swallowing safety를 우선 평가합니다." },
  ]),
  "spinal-cord": clinical([
    { label: "주요 증상", text: "bilateral weakness, sensory level, gait difficulty, bladder/bowel dysfunction 또는 autonomic instability가 나타날 수 있습니다." },
    { label: "주요 징후", text: "sensory level, tone, deep tendon reflex, plantar response, perianal sensation 및 anal tone을 체계적으로 확인합니다." },
    { label: "국소화", text: "anterior, posterior, central 또는 hemicord pattern과 segmental lower motor neuron sign을 조합해 해석합니다." },
    { label: "주의점", text: "acute spinal cord compression 또는 cauda equina syndrome 의심 소견은 urgent imaging과 specialist assessment가 필요합니다." },
  ]),
  "optic-nerve": clinical([
    { label: "주요 증상", text: "monocular visual loss, reduced visual acuity, dyschromatopsia 또는 pain with eye movement가 나타날 수 있습니다." },
    { label: "주요 징후", text: "relative afferent pupillary defect, color vision, fundus finding 및 visual field를 확인합니다." },
    { label: "국소화", text: "monocular visual deficit은 optic nerve 또는 retina lesion을 시사하며, chiasmal/retro-chiasmal lesion과 구분합니다." },
  ]),
  "facial-nerve": clinical([
    { label: "?? ??", text: "ipsilateral facial weakness, reduced eye closure, flattened nasolabial fold, hyperacusis ?? taste change? ??? ? ????." },
    { label: "?? ??", text: "forehead wrinkling? eye closure? ??? upper/lower face? ??? ?????." },
    { label: "???", text: "peripheral facial nerve lesion? forehead?? ?????, supranuclear lesion? ?? forehead sparing? ????." },
  ]),
  "vagus-nerve": clinical([
    { label: "?? ??", text: "dysphagia, dysphonia, hoarseness, nasal speech ?? aspiration symptom? ??? ? ????." },
    { label: "?? ??", text: "palatal elevation, voice quality, cough, gag reflex ? swallowing safety? ?????." },
    { label: "???", text: "bulbar symptom? aspiration risk? ??? airway? nutrition safety? ?? ?????." },
  ]),
  "oculomotor-nerve": clinical([
    { label: "?? ??", text: "ptosis, diplopia, impaired adduction/elevation/depression, anisocoria? ??? ? ????." },
    { label: "???", text: "pupil-involving third nerve palsy? compressive lesion ???? ???? ?? urgent assessment? ??? ? ????." },
  ]),
  "median-nerve": clinical([
    { label: "?? ??", text: "thumb, index, middle finger? paresthesia, nocturnal hand numbness, thenar weakness? ??? ? ????." },
    { label: "?? ??", text: "thumb abduction, thenar bulk, sensory territory ? provocative test? ?????." },
  ]),
  "ulnar-nerve": clinical([
    { label: "?? ??", text: "fourth/fifth digit paresthesia, intrinsic hand weakness, impaired finger abduction? ??? ? ????." },
    { label: "???", text: "elbow lesion? wrist lesion? dorsal ulnar hand sensation ? intrinsic/extrinsic muscle involvement? ?????." },
  ]),
  "cerebellar-hemisphere": clinical([
    { label: "?? ??", text: "ipsilateral limb ataxia, dysmetria, intention tremor, dysdiadochokinesia? ??? ? ????." },
    { label: "?? ??", text: "finger-to-nose, heel-to-shin, rapid alternating movement ? gait? ?????." },
  ]),
};
