---
type: qbank
schema_version: 1
id: medqa-us-train-007300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee28daf8a00d39e51a69345eaad7604581144558669970552d8e750136ba1943
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "섬유선종"
  - "임신 중 유방 종괴"
  - "에스트로겐 반응성 종양"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 16주인 23세 여성의 만져지는 유방 종괴가 한 달 사이 빠르게 커졌다. 초음파에서 경계가 불규칙한 5 cm 고형 종괴로 BI-RADS 4에 해당한다. 다음 검사는?

## 선택지

A. 분만할 때까지 조직검사를 미룬다
B. 혈액 종양표지자로 조직 검사를 대신한다
C. 가돌리늄 조영 MRI만으로 양성 여부를 확정한다
D. 초음파 유도 중심침생검

## 해설


임신 중에도 의심스러운 유방 종괴를 기다리기만 해서는 안 된다. 초음파에서 의심되는 고형 병변은 초음파 유도 중심침생검으로 조직 진단을 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007300
- https://pubmed.ncbi.nlm.nih.gov/41193040/
