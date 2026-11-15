---
type: qbank
schema_version: 1
id: medqa-us-train-007978
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92e3efb6f23570759d5d617cb7b3704d67e8150250499cd792a5f8627869b5b1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "salicylate toxicity"
  - "mixed respiratory alkalosis and metabolic acidosis"
  - "supportive care"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCtOumrOyLpOyCsCDspJHrj4UgKFNhbGljeWxhdGUgUG9pc29uaW5nKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이명과 빈호흡으로 온 환자가 살리실산염 중독으로 확인됐다. 중등도 중독이고 신기능은 정상이며 폐부종과 의식 저하는 없다. 독성학팀이 체액과 칼륨을 교정 중이다. 배설을 촉진하는 치료는?

## 선택지

A. 정맥 중탄산나트륨으로 소변을 알칼리화한다
B. 아세트아미노펜을 투여한다
C. 이뇨제만 투여한다
D. 혈액과 소변을 산성화한다

## 해설

중탄산나트륨으로 소변 pH를 올리면 살리실산 배설이 늘어난다. 칼륨과 산염기를 감시하고, 의식 장애·폐부종·심한 산증 등 중증 소견이 있으면 즉시 투석을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 살리실산 중독의 초기 지지요법 D를 유지하되 정상에 가까운 pH가 경증을 보장하거나 수액만으로 충분하다는 오해를 피한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC4371029/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007978
