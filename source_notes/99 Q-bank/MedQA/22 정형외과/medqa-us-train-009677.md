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
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

25세 남성이 무릎을 비튼 뒤 관절선 통증과 잠김이 생겼다. 수동으로도 완전히 펴지지 않고 단순 X선에는 골절이 없다. 가장 적절한 다음 조치는?

## 선택지

A. 일반 운동치료 후 한 달 뒤 재평가
B. 혈관절증을 가정해 관절천자만 시행
C. 전위된 반월상연골 파열을 의심해 정형외과에 신속히 의뢰
D. 무릎 통증을 줄이기 위해 먼저 관절 내 스테로이드 주사

## 해설

외상 뒤 기계적으로 잠겨 끝까지 펴지지 않는 무릎은 전위된 반월상연골 파열 등을 시사한다. 신속히 정형외과에 의뢰해 영상 선택과 정복·봉합 필요성을 평가하고, 재활만 하며 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 인공와우가 모두 MRI 금기라는 낡은 전제를 사용하지 않고, 진짜 잠김 무릎의 긴급 정형외과·관절경 평가로 D를 설명했다.
- 공식/학회 근거: https://www.fda.gov/medical-devices/cochlear-implants/cochlear-implants-and-mri-safety
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/nhs-tayside-refguide/surgery-and-orthopaedics/orthopaedic-and-trauma-surgery/knee/mri-criteria/?topic=nursing-midwifery

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009677
- [AAOS: 급성 반월상연골 손상 진료지침](https://new.aaos.org/quality/quality-programs/acute-isolated-meniscal-pathology/)
