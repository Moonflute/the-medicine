---
type: qbank
schema_version: 1
id: medqa-us-train-008282
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3437e5f5893dde19104065efb7de255ba0c6c2a506a4159658a8759fd5d732ab
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "ischemic stroke"
  - "intravenous alteplase contraindication"
  - "thrombocytopenia"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 환자가 2시간 전부터 실어증과 우측 위약을 보인다. 비조영 뇌 CT에서 출혈은 없고 혈압은 175/105 mmHg다. 면역성 혈소판감소증이 있고 오늘 혈소판이 95,000/μL다. 이 중 정맥 혈전용해를 피해야 하는 이유는?

## 선택지

A. 71세라는 나이
B. 증상 발생 후 2시간이 지남
C. 혈소판 100,000/μL 미만
D. 치료 전 혈압 175/105 mmHg

## 해설

이미 확인된 혈소판 수가 100,000/μL 미만이면 표준 정맥 혈전용해의 출혈위험 제외 기준에 해당한다. 대혈관폐색이 의심되면 별도로 혈전제거술 적격성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. tPA 제외 혈소판 기준을 100,000 이하에서 미만으로 교정한다. 원문의 ITP 병력을 최소 복원하며 C는 유지한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/10.1161/STR.0000000000000513

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008282
