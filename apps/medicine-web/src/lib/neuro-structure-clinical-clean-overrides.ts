import type { NeuroNoteSection } from "@/lib/neuro-note-content";

type ClinicalItem = { label: string; text: string };
const clinical = (items: ClinicalItem[]): NeuroNoteSection => ({ heading: "\uC784\uC0C1\uC801 \uC758\uC758 \uBC0F \uBCD1\uBCC0 \uC2DC \uC99D\uC0C1", items });

/** High-yield focal localizations. Generic profiles cover every remaining atlas structure. */
export const cleanStructureClinicalOverrides: Record<string, NeuroNoteSection> = {
  "facial-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "ipsilateral facial weakness, incomplete eye closure, flattened nasolabial fold, hyperacusis \uB610\uB294 taste change\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uC8FC\uC694 \uC9D5\uD6C4", text: "forehead wrinkling, forceful eye closure, smile, lip pursing\uC744 \uC0C1\uD558\uC88C\uC6B0\uB85C \uBE44\uAD50\uD569\uB2C8\uB2E4." },
    { label: "\uAD6D\uC18C\uD654", text: "peripheral facial nerve lesion\uC740 forehead weakness\uB97C \uD3EC\uD568\uD558\uC9C0\uB9CC, supranuclear lesion\uC740 \uD754\uD788 forehead sparing\uC744 \uBCF4\uC785\uB2C8\uB2E4." },
  ]),
  "vagus-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "dysphagia, dysphonia, hoarseness, nasal speech \uB610\uB294 aspiration symptom\uC774 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uC8FC\uC694 \uC9D5\uD6C4", text: "palatal elevation, voice quality, cough, gag reflex \uBC0F swallowing safety\uB97C \uD3C9\uAC00\uD569\uB2C8\uB2E4." },
    { label: "\uC8FC\uC758\uC810", text: "bulbar symptom\uACFC aspiration risk\uAC00 \uC788\uC73C\uBA74 airway\uC640 nutrition safety\uB97C \uC6B0\uC120 \uD3C9\uAC00\uD569\uB2C8\uB2E4." },
  ]),
  "oculomotor-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "ptosis, diplopia, impaired adduction/elevation/depression, anisocoria\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uC8FC\uC758\uC810", text: "pupil-involving third nerve palsy\uB294 compressive lesion\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uBBC0\uB85C urgent assessment\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." },
  ]),
  "median-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "thumb, index, middle finger paresthesia, nocturnal hand numbness, thenar weakness\uC774 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uC8FC\uC694 \uC9D5\uD6C4", text: "thumb abduction, thenar bulk, sensory territory\uC640 provocative test\uB97C \uD3C9\uAC00\uD569\uB2C8\uB2E4." },
  ]),
  "ulnar-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "fourth/fifth digit paresthesia, intrinsic hand weakness, impaired finger abduction\uC774 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uAD6D\uC18C\uD654", text: "elbow lesion\uACFC wrist lesion\uC740 dorsal ulnar hand sensation\uACFC intrinsic/extrinsic muscle involvement\uC73C\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4." },
  ]),
  "cerebellar-hemisphere": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "ipsilateral limb ataxia, dysmetria, intention tremor, dysdiadochokinesia\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uC8FC\uC694 \uC9D5\uD6C4", text: "finger-to-nose, heel-to-shin, rapid alternating movement, gait\uB97C \uD3C9\uAC00\uD569\uB2C8\uB2E4." },
  ]),
  "optic-chiasm": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "crossing nasal retinal fiber \uBCD1\uBCC0\uC740 bitemporal hemianopia\uB85C \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uAD6D\uC18C\uD654", text: "midline chiasmal compression\uC740 pituitary region lesion\uACFC \uC5F0\uAD00\uB420 \uC218 \uC788\uC5B4 formal perimetry\uB85C \uD3C9\uAC00\uD569\uB2C8\uB2E4." },
  ]),
  "optic-radiation": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "retrochiasmal lesion\uC740 contralateral homonymous visual field defect\uB85C \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uAD6D\uC18C\uD654", text: "Meyer loop involvement\uC740 contralateral superior quadrantanopia, parietal pathway involvement\uC740 contralateral inferior quadrantanopia\uC640 \uC5F0\uAD00\uB429\uB2C8\uB2E4." },
  ]),
  "trigeminal-nucleus": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "facial pain/temperature sensory loss, impaired corneal reflex \uB610\uB294 masticatory weakness\uAC00 \uB3D9\uBC18\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uAD6D\uC18C\uD654", text: "facial sensory finding\uACFC crossed body sensory sign\uC758 \uC870\uD569\uC740 brainstem lesion localization\uC5D0 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4." },
  ]),
  "vestibulocochlear-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "vertigo, unilateral hearing loss, tinnitus, imbalance, nystagmus\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uC8FC\uC758\uC810", text: "acute vestibular syndrome\uC5D0\uC11C focal neurological sign\uC774 \uB3D9\uBC18\uB418\uBA74 posterior circulation stroke\uB97C \uBC30\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4." },
  ]),
  "sciatic-nerve": clinical([
    { label: "\uC8FC\uC694 \uC99D\uC0C1", text: "posterior thigh/leg pain, weakness below the knee, foot drop \uB610\uB294 sensory change\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
    { label: "\uAD6D\uC18C\uD654", text: "sciatic neuropathy\uB294 L5/S1 radiculopathy\uC640 \uAC10\uBCC4\uD558\uAE30 \uC704\uD574 hip extension, hamstring, ankle movement\uACFC sensory pattern\uC744 \uD568\uAED8 \uD3C9\uAC00\uD569\uB2C8\uB2E4." },
  ]),
};
