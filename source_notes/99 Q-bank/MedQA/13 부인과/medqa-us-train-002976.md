---
type: qbank
schema_version: 1
id: medqa-us-train-002976
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a133a42d30bdb0e0cff884c1c1460af73c0b4a4bd928a18313a12d67b833a3b6
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Sheehan syndrome"
  - "postpartum hypopituitarism"
  - "postpartum hemorrhage"
  - "lactation failure"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDquLDriqXsoIDtlZjspp0gKEh5cG9waXR1aXRhcmlzbSkubWQ
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: B
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

대량 산후출혈 뒤 젖 분비가 없었던 여성이 4주 뒤 의식 저하와 저혈압으로 왔다. 혈당 44 mg/dL, 나트륨 124 mmol/L이며 코르티솔이 매우 낮다. 유리 T4는 낮지만 TSH는 상승하지 않았다. 소생과 함께 먼저 투여할 약은?

## 선택지

A. 레보티록신만 즉시 시작
B. 정맥 하이드로코르티손
C. 카베르골린
D. 에스트라디올

## 해설

산후 대량출혈 뒤 뇌하수체기능저하(쉬한증후군)로 인한 중추성 부신위기를 의심한다. 정맥 하이드로코르티손과 수액·포도당을 지체 없이 사용하고, 갑상샘호르몬은 글루코코르티코이드 보충 후 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산후PRL정상100은고정기준아님;Sheehan외뇌하수체질환·부신축평가보강.
- https://www.ajnr.org/content/ajnr/early/2008/02/22/ajnr.A1016.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002976
- https://www.endocrine.org/clinical-practice-guidelines/hormone-replacement-in-hypopituitarism
