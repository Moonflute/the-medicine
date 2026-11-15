---
type: qbank
schema_version: 1
id: medqa-us-train-009541
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a40572e3de27fe0e2716d6d12396be10a27a3d7578c22fbe465b81ff1b0924e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "primary myelofibrosis"
  - "일차성 골수섬유증"
  - "JAK2 mutation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDqs6jsiJjshKzsnKDspp0gKFBNRikgKFByaW1hcnkgTXllbG9maWJyb3NpcyAoUE1GKSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

비장비대와 빈혈이 있는 환자의 말초도말에 눈물방울 적혈구, 유핵 적혈구와 미성숙 골수계 세포가 함께 보인다. 골수 흡인이 잘 되지 않았고 조직검사에서 비정상 거핵세포와 골수섬유화가 확인됐다. 이전 적혈구증가증이나 혈소판혈증은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 만성 림프구성 백혈병
B. 진성 적혈구증가증
C. 원발성 골수섬유증
D. 철결핍성 빈혈

## 해설


눈물방울 적혈구와 백적혈모구성 도말, 비장비대 및 골수섬유화는 원발성 골수섬유증을 지지한다. 조직 소견과 분자검사를 종합해 이차성 섬유화와 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009541 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 눈물방울/유핵적혈구·미성숙 골수계·dry tap·JAK2+/BCRABL−는 PMF D. PV는 적혈구만 증가한다는 부정확한 비교 수정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009541
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
