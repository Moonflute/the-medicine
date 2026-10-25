---
type: qbank
schema_version: 1
id: medqa-us-train-009677
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50c0fc698eb649e0b75b02d8bbbdcde87f085e1a29c08c8b523ffcfb3c0820dd
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "meniscal tear"
  - "반월상연골 파열"
  - "locked knee"
question_type: investigation
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남자가 2주 동안 지속된 왼쪽 무릎 통증으로 내원했다. 농구 중 ‘뚝’ 소리를 듣고 시작되었으며 이후 달릴 수 없다. 천식과 알레르기 비염이 있고 선천성 양측 감각신경성 난청으로 인공와우를 이식했다. 왼쪽 무릎 내측 관절선 압통, 완전 신전 불가, 신전 시 딸깍거리는 소리가 있고 X선은 정상이다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 왼쪽 무릎 관절천자
B. 개방 반월상연골 봉합
C. 왼쪽 무릎 MRI
D. 왼쪽 무릎 관절경검사

## 해설

외상 후 내측 관절선 통증·클릭에 더해 완전 신전이 불가능한 잠김 무릎은 전위된 반월상연골 파열을 의심하게 하므로 긴급 정형외과 평가와 관절경을 통한 치료(D)가 적절하다. 실제 기계적 잠김이 명확하면 영상 때문에 치료를 지연하지 않는 경로를 사용할 수 있다. 다만 인공와우가 있다는 사실만으로 모든 MRI가 금기인 것은 아니며 기종별 MR Safe/Conditional/Unsafe 조건을 확인한다. 반월상연골 손상은 MRI에서만 확인된다는 기존 설명도 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 인공와우가 모두 MRI 금기라는 낡은 전제를 사용하지 않고, 진짜 잠김 무릎의 긴급 정형외과·관절경 평가로 D를 설명했다.
- 공식/학회 근거: https://www.fda.gov/medical-devices/cochlear-implants/cochlear-implants-and-mri-safety
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/nhs-tayside-refguide/surgery-and-orthopaedics/orthopaedic-and-trauma-surgery/knee/mri-criteria/?topic=nursing-midwifery

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009677
