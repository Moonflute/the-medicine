import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const atlasPath = path.join(root, "source_notes", "10 Hubs", "03 \uC2E0\uACBD\uACC4 Hub", "_data", "nervous-system-atlas.json");
const atlas = JSON.parse(fs.readFileSync(atlasPath, "utf8"));

const clinical = (items) => ({ heading: "\uC784\uC0C1\uC801 \uC758\uC758 \uBC0F \uBCD1\uBCC0 \uC2DC \uC99D\uC0C1", items });
const item = (label, text) => ({ label, text });
const category = (id, group) => {
  const text = `${id} ${group}`.toLowerCase();
  if (/cortex|lobe|gyrus|sulcus|area|cerebral/.test(text)) return "cortex";
  if (/nerve|plexus|root|dermatome|myotome/.test(text)) return "peripheral";
  if (/tract|column|lemniscus|commissure|capsule|peduncle|pyramid/.test(text)) return "tract";
  if (/cerebell|vermis|olive/.test(text)) return "cerebellar";
  if (/spinal|horn|canal|cord/.test(text)) return "spinal";
  if (/nucleus|ganglion|thalamus|caudate|putamen|pallid|amygdala|hippocampus|hypothalamus/.test(text)) return "nuclear";
  if (/muscle|sphincter|skin|cornea|retina|cochlea|receptor|spindle/.test(text)) return "effector";
  return "network";
};

function clinicalItems(kind, en, relatedPathways, relatedReflexes) {
  const pathwayText = relatedPathways.length ? relatedPathways.join(", ") : "\uC778\uC811 \uC2E0\uACBD \uACBD\uB85C";
  const reflexText = relatedReflexes.length ? relatedReflexes.join(", ") : "\uAD00\uB828 neurological examination";
  if (kind === "cortex") return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en} \uBCD1\uBCC0\uC5D0\uC11C focal cortical deficit, language dysfunction, visuospatial deficit, seizure-related symptom \uB610\uB294 cognitive/behavioural change\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uC8FC\uC694 \uC9D5\uD6C4", "mental status, language, visual field, contralateral motor/sensory examination\uC744 \uC0C1\uD558\uC88C\uC6B0\uB85C \uBE44\uAD50\uD569\uB2C8\uB2E4."),
    item("\uAD6D\uC18C\uD654", `${pathwayText}\uC758 \uB3D9\uBC18 \uC774\uC0C1\uACFC dominant/non-dominant hemisphere\uB97C \uD568\uAED8 \uD574\uC11D\uD569\uB2C8\uB2E4.`),
    item("\uC8FC\uC758\uC810", "acute ischemia, haemorrhage, seizure-related deficit, mass effect\uB294 \uC720\uC0AC\uD55C focal sign\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC5B4 time course\uC640 imaging\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."),
  ];
  if (kind === "peripheral") return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en}\uC758 \uAE30\uB2A5 \uC774\uC0C1\uC740 \uD574\uB2F9 sensory territory\uC758 numbness/neuropathic pain, weakness \uB610\uB294 autonomic symptom\uC73C\uB85C \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uC8FC\uC694 \uC9D5\uD6C4", "sensory territory, myotome muscle power, deep tendon reflex, gait \uBC0F focal provocative test\uB97C \uBC18\uB300\uCABD\uACFC \uBE44\uAD50\uD569\uB2C8\uB2E4."),
    item("\uAD6D\uC18C\uD654", "nerve-root lesion, plexopathy, mononeuropathy\uB97C sensory pattern, weakness pattern, reflex change\uC758 \uC870\uD569\uC73C\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4."),
    item("\uAD00\uB828 NEx", `${reflexText}\uC640 \uD568\uAED8 \uD3C9\uAC00\uD569\uB2C8\uB2E4.`),
  ];
  if (kind === "tract") return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en}\uC758 \uBCD1\uBCC0\uC740 weakness, loss of proprioception/vibration, pain/temperature deficit \uB610\uB294 coordination deficit\uC73C\uB85C \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uC8FC\uC694 \uC9D5\uD6C4", "power, tone, deep tendon reflex, plantar response, joint position sense, vibration, pinprick\uC744 \uD568\uAED8 \uD655\uC778\uD569\uB2C8\uB2E4."),
    item("\uAD6D\uC18C\uD654", `${pathwayText}\uC758 decussation\uACFC laterality rule\uC744 \uAE30\uC900\uC73C\uB85C ipsilateral/contralateral pattern\uC744 \uD574\uC11D\uD569\uB2C8\uB2E4.`),
    item("\uC8FC\uC758\uC810", "acute spinal cord lesion\uC5D0\uC11C\uB294 spinal shock \uB54C\uBB38\uC5D0 reflex change\uAC00 \uC9C0\uC5F0\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
  ];
  if (kind === "cerebellar") return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en}\uC758 \uBCD1\uBCC0\uC5D0\uC11C ataxia, dysmetria, intention tremor, dysarthria, nystagmus \uB610\uB294 gait imbalance\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uC8FC\uC694 \uC9D5\uD6C4", "finger-to-nose, heel-to-shin, rapid alternating movement, gait, eye movement\uB97C \uD3C9\uAC00\uD569\uB2C8\uB2E4."),
    item("\uAD6D\uC18C\uD654", "cerebellar hemisphere lesion\uC740 \uB300\uCCB4\uB85C ipsilateral limb coordination deficit\uC744 \uBCF4\uC774\uBA70 brainstem sign\uC758 \uB3D9\uBC18 \uC5EC\uBD80\uB97C \uD655\uC778\uD569\uB2C8\uB2E4."),
  ];
  if (kind === "spinal") return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en}\uC758 \uC774\uC0C1\uC740 sensory level, segmental weakness, gait difficulty, bladder/bowel symptom \uB610\uB294 autonomic change\uB85C \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uC8FC\uC694 \uC9D5\uD6C4", "dermatome sensation, myotome power, deep tendon reflex, tone, plantar response, perianal sensation\uC744 \uCCB4\uACC4\uC801\uC73C\uB85C \uD655\uC778\uD569\uB2C8\uB2E4."),
    item("\uC8FC\uC758\uC810", "new bladder/bowel dysfunction, saddle anaesthesia, rapidly progressive weakness\uB294 urgent evaluation\uC774 \uD544\uC694\uD55C red flag\uC785\uB2C8\uB2E4."),
  ];
  if (kind === "nuclear") return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en}\uC774 \uD3EC\uD568\uB41C circuit\uC5D0 \uB530\uB77C motor initiation, movement selection, sensation, arousal, cognition \uB610\uB294 autonomic function\uC758 \uBCC0\uD654\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uC8FC\uC694 \uC9D5\uD6C4", "movement, sensation, eye movement, alertness, cognition \uBC0F associated long-tract sign\uC744 \uD568\uAED8 \uD3C9\uAC00\uD569\uB2C8\uB2E4."),
    item("\uAD6D\uC18C\uD654", `${pathwayText}\uC758 \uC5F0\uACB0\uACFC \uC778\uC811 structure\uC758 \uB3D9\uBC18 \uC18C\uACAC\uC744 \uD568\uAED8 \uD574\uC11D\uD569\uB2C8\uB2E4.`),
  ];
  return [
    item("\uC8FC\uC694 \uC99D\uC0C1", `${en}\uC758 \uAE30\uB2A5 \uC774\uC0C1\uC740 \uC778\uC811 \uAD6C\uC870\uC640 \uC5F0\uACB0 pathway\uC5D0 \uB530\uB77C focal neurological symptom \uB610\uB294 sign\uC73C\uB85C \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),
    item("\uD3C9\uAC00", `${reflexText}\uC640 \uAD00\uB828 neurological examination\uC744 \uBC18\uB300\uCABD\uACFC \uBE44\uAD50\uD569\uB2C8\uB2E4.`),
    item("\uAD6D\uC18C\uD654", `${pathwayText}\uC640 \uC778\uC811 anatomical network\uC758 \uB3D9\uBC18 \uC18C\uACAC\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.`),
  ];
}

for (const structure of atlas.structures) {
  const pathways = atlas.pathways.filter((p) => p.nodes?.includes(structure.id));
  const reflexes = atlas.reflexes.filter((r) => r.route?.includes(structure.id));
  const nearby = atlas.structures.filter((other) => other.id !== structure.id && other.viewIds?.some((view) => structure.viewIds?.includes(view))).slice(0, 8);
  const kind = category(structure.id, structure.group);
  structure.note = {
    anatomy: [item("\uC704\uCE58 / \uBC94\uC704", structure.summary), item("\uBD84\uB958", structure.group)],
    function: [item("\uAD00\uB828 \uACBD\uB85C", pathways.length ? pathways.map((p) => `${p.en}: ${p.primaryFunction ?? p.route}`).join(" ") : `${structure.en}\uC740(\uB294) \uC778\uC811 structure\uC640 \uD568\uAED8 \uD574\uC11D\uD569\uB2C8\uB2E4.`), ...(reflexes.length ? [item("\uAD00\uB828 NEx", reflexes.map((r) => r.label).join(", "))] : [])],
    clinical: clinicalItems(kind, structure.en, pathways.map((p) => p.en), reflexes.map((r) => r.label)),
    related: nearby.map((other) => ({ id: other.id, label: other.en, text: other.summary })),
    diseases: structure.links,
    sourceIds: structure.sourceIds ?? [],
  };
}

fs.writeFileSync(atlasPath, `${JSON.stringify(atlas, null, 2)}\n`, "utf8");
console.log(`Enriched ${atlas.structures.length} structure note payloads.`);
