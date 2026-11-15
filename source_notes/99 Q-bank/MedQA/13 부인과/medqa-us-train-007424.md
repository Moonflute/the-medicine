---
type: qbank
schema_version: 1
id: medqa-us-train-007424
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:580715994212b4d8a3671930264a9ebc1c2ce1c467c5395606dfbae5c9c55d38
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁 평활근종"
  - "과다월경"
  - "자궁근층 양성 종양"
  - "자궁근종"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 과다월경과 철결핍으로 치료받는다. 자궁경에서 자궁강 안으로 대부분 돌출된 2.5 cm 점막하 근종 하나가 확인됐다. 임신을 원하고 근종 제거를 선택했다. 적절한 수술은?

## 선택지

A. 자궁동맥 색전술
B. 자궁경 근종절제술
C. 자궁내막 소작술
D. 복강경 자궁절제술

## 해설


증상이 있고 자궁강으로 돌출된 점막하 근종은 자궁을 보존하면서 자궁경으로 제거할 수 있다. 자궁내막 소작과 자궁절제는 임신을 원하는 환자에게 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: nulliparous를 미혼으로 오역한 본문을 출산력 없음으로 교정했다. 자궁근종의 정답·설명은 유지한다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007424
- https://www.nice.org.uk/guidance/ng88/chapter/Recommendations
