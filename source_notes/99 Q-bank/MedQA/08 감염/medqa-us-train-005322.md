---
type: qbank
schema_version: 1
id: medqa-us-train-005322
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:afb5bdf43c6ca4c36183ef0fd7ffac0bbf86d8ee48fd3d8665d097c16b4d3b7f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "전염성 단핵구증"
  - "엡스타인-바 바이러스"
  - "모노스팟 검사"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
question_type: investigation
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

22세 남자가 2주 동안 발열, 인후통과 점점 심해지는 피로로 내원했다. 편도 삼출, 후경부 림프절병증과 비장비대가 있다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 아목시실린
B. 모노스팟 검사
C. 추가 평가가 필요하지 않다
D. 신속 연쇄상구균 검사

## 해설


발열·삼출 인두염·후경부 림프절병증·비장비대는 단핵구증에 부합한다. 선택지 B Monospot은 이종친화항체를 검출하는 보조검사다. 음성으로 배제하거나 양성만으로 EBV 특이 확진을 내리지 않으며 필요한 경우 EBV 특이 항체를 평가한다. 진단 전 amoxicillin을 일률 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005322 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Heterophile을 이질성으로 번역한 오류 교정; Monospot B의 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/epstein-barr/php/laboratories/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005322
