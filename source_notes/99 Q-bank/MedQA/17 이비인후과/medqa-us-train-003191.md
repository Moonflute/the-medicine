---
type: qbank
schema_version: 1
id: medqa-us-train-003191
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:821784c7a34cd7e3d92ee1328935ce642a3efb5d30fc62a22ea48ddc75d1be94
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "otosclerosis"
  - "conductive hearing loss"
  - "Carhart notch"
  - "abnormal Rinne test"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ykkeydtOyXvCAoT3RpdGlzIG1lZGlhKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 환자의 양쪽 청력이 서서히 떨어진다. 고막은 정상인데 청력검사에서 양쪽에 기도–골도 차이가 있고 등골근반사가 잘 유발되지 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 메니에르병
B. 노인성 난청
C. 이경화증
D. 양측 전정신경초종

## 해설

이경화증은 등골을 고정시켜 정상 고막과 함께 전음성 난청을 일으킬 수 있다. 청력과 중이 기능 검사 결과를 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 이경화증 C는 유지하되 본문에 없는 Carhart notch를 관찰된 소견처럼 인용하지 않도록 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003191
- https://pubmed.ncbi.nlm.nih.gov/37647735/
