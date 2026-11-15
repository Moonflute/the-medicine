---
type: qbank
schema_version: 1
id: medqa-us-train-004796
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3e3050c400559eda48ab875a35004efcc674d7fc318cc7a1f04d93c68e1e1bd
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "BI-RADS 3"
  - "유방촬영술 추적검사"
  - "유방 병변"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

51세 여성이 검진 이상으로 추가 진단 유방촬영을 받았다. 악성이 의심되는 촉진 소견은 없고 병변이 BI-RADS 3(양성 가능성이 높은 소견)으로 분류됐다. 다음 계획은?

## 선택지

A. 2년 후 국가암검진만 시행
B. 지금 바로 중심침생검
C. 약 6개월 후 진단 유방촬영
D. 지금 바로 유방 MRI

## 해설


완전한 진단 영상 평가에서 BI-RADS 3인 병변은 통상 6개월에 첫 단기 추적을 한다. 추적 중 의심스러운 변화가 있거나 임상 소견과 맞지 않으면 조직검사 등으로 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004796 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BI-RADS3의 6개월 유방촬영 추적 B 유지; 단층촬영으로 바꾼 검사명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/screening/mammograms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004796
- https://pubmed.ncbi.nlm.nih.gov/32427557/
