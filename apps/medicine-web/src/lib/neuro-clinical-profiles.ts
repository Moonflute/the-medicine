import type { NeuroAtlas } from "@/lib/webdb";
import type { NeuroNoteSection } from "@/lib/neuro-note-content";

type Structure = NeuroAtlas["structures"][number];
type Pathway = NeuroAtlas["pathways"][number];
type Reflex = NeuroAtlas["reflexes"][number];

function section(items: NeuroNoteSection["items"]): NeuroNoteSection {
  return { heading: "임상적 의의 및 병변 시 증상", items };
}

export function genericStructureClinicalSection(structure: Structure, pathways: Pathway[], reflexes: Reflex[]): NeuroNoteSection {
  const name = structure.en.toLowerCase();
  const pathwayNames = pathways.map((pathway) => pathway.en).join(", ");
  const reflexNames = reflexes.map((reflex) => reflex.label).join(", ");

  if (/lobe|gyrus|cortex|cortical|area/.test(name)) return section([
    { label: "주요 증상", text: "병변의 위치와 범위에 따라 contralateral motor 또는 sensory deficit, language dysfunction, visuospatial deficit, memory/behaviour change가 조합되어 나타날 수 있습니다." },
    { label: "주요 징후", text: "mental status examination, language assessment, visual field, motor and sensory examination으로 cortical sign을 체계적으로 확인합니다." },
    { label: "국소화", text: pathwayNames ? `${pathwayNames}의 동반 이상과 함께 해석하면 cortical lesion의 범위와 측성을 판단하는 데 도움이 됩니다.` : "dominant/non-dominant hemisphere와 인접 cortical area의 기능을 함께 고려합니다." },
    { label: "주의점", text: "급성 vascular lesion, seizure-related deficit, mass effect는 유사한 focal sign을 보일 수 있어 시간 경과와 imaging을 함께 평가합니다." },
  ]);

  if (/nerve|plexus|root/.test(name)) return section([
    { label: "주요 증상", text: "해당 nerve distribution의 numbness, neuropathic pain, weakness 또는 autonomic symptom이 나타날 수 있습니다." },
    { label: "주요 징후", text: "sensory territory, muscle power, deep tendon reflex 및 Tinel sign 등 국소 examination을 반대쪽과 비교합니다." },
    { label: "국소화", text: "root lesion, plexopathy, mononeuropathy는 sensory pattern, weakness pattern 및 reflex 변화의 조합으로 구분합니다." },
    { label: "주의점", text: "length-dependent polyneuropathy나 pain-limited effort가 focal peripheral nerve lesion을 모방할 수 있습니다." },
  ]);

  if (/tract|lemniscus|fasciculus|column|spinothalamic|pyramid/.test(name)) return section([
    { label: "주요 증상", text: "해당 pathway의 기능에 따라 weakness, loss of proprioception/vibration, loss of pain/temperature 또는 coordination deficit이 나타날 수 있습니다." },
    { label: "주요 징후", text: "power, tone, reflex, plantar response, joint position sense, vibration 및 pinprick을 함께 비교합니다." },
    { label: "국소화", text: pathwayNames ? `${pathwayNames}의 decussation과 laterality rule을 기준으로 ipsilateral/contralateral pattern을 해석합니다.` : "crossing level과 인접 long tract involvement를 함께 확인합니다." },
    { label: "주의점", text: "acute spinal cord lesion에서는 spinal shock 때문에 reflex 변화가 delayed될 수 있습니다." },
  ]);

  if (/thalamus|nucleus|ganglia|caudate|putamen|pallid|subthalamic|substantia/.test(name)) return section([
    { label: "주요 증상", text: "해당 deep gray structure의 circuit에 따라 motor initiation, movement selection, sensation, arousal 또는 cognition 변화가 나타날 수 있습니다." },
    { label: "주요 징후", text: "bradykinesia, rigidity, tremor, involuntary movement, sensory finding 및 cognitive change를 함께 평가합니다." },
    { label: "국소화", text: pathwayNames ? `${pathwayNames}의 circuit dysfunction과 연관해 해석합니다.` : "인접 thalamocortical 또는 basal ganglia circuit의 동반 소견을 확인합니다." },
    { label: "주의점", text: "medication-induced movement disorder와 degenerative disorder는 병력과 시간 경과가 중요합니다." },
  ]);

  if (/cerebell|peduncle|olive/.test(name)) return section([
    { label: "주요 증상", text: "ataxia, dysmetria, intention tremor, dysarthria, nystagmus 또는 gait imbalance가 나타날 수 있습니다." },
    { label: "주요 징후", text: "finger-to-nose, heel-to-shin, rapid alternating movement, gait 및 eye movement를 평가합니다." },
    { label: "국소화", text: "cerebellar lesion은 대체로 ipsilateral limb coordination deficit을 보이며, brainstem sign 동반 여부가 lesion level 판단에 중요합니다." },
    { label: "주의점", text: "acute vertigo에서는 peripheral vestibular disorder와 posterior circulation stroke를 구분해야 합니다." },
  ]);

  if (/spinal|cord|horn|dermatome|myotome/.test(name)) return section([
    { label: "주요 증상", text: "segmental weakness 또는 sensory change, radicular pain, gait difficulty, bladder/bowel symptom이 조합되어 나타날 수 있습니다." },
    { label: "주요 징후", text: "myotome power, dermatome sensation, deep tendon reflex, tone 및 long-tract sign을 함께 확인합니다." },
    { label: "국소화", text: "anterior horn, root, peripheral nerve, spinal cord lesion은 lower motor neuron sign과 upper motor neuron sign의 분포로 구분합니다." },
    { label: "주의점", text: "new bladder/bowel dysfunction, saddle anesthesia, rapidly progressive weakness는 urgent evaluation이 필요합니다." },
  ]);

  return section([
    { label: "주요 증상", text: `${structure.en}의 기능 이상은 인접 구조와 연결 pathway에 따라 focal neurological symptom 또는 sign으로 나타날 수 있습니다.` },
    { label: "평가", text: reflexNames ? `${reflexNames} 및 관련 neurological examination을 포함해 반대쪽과 비교합니다.` : "병력, neurological examination, 관련 pathway의 laterality를 함께 평가합니다." },
    { label: "국소화", text: pathwayNames ? `${pathwayNames}의 연관성을 함께 확인해 lesion level을 추정합니다.` : "단일 구조만으로 단정하지 않고 인접 anatomical network의 동반 소견을 확인합니다." },
  ]);
}
