---
type: qbank
schema_version: 1
id: medqa-us-train-003576
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e164fa4f8b38031290b51d28242f4fad5c1dfa7816aac5abacf4fadc978e06cd
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "pernicious anemia"
  - "vitamin B12 deficiency"
  - "subacute combined degeneration"
  - "anti-intrinsic factor antibody"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
publication_status: "withheld"
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
---

# MedQA US 임상문제

## 문제

45세 여성이 피로와 발 저림으로 내원했다. 혈색소 8.0 g/dL, MCV 114 fL이고 혈청 비타민 B12가 낮다. 양발의 진동감각과 위치감각이 떨어져 있다. 비타민 B12 결핍의 원인이 자가면역 위염인지 확인하는 데 도움이 되는 검사는?

## 선택지

A. 항내인자 항체
B. 혈청 페리틴
C. 혈청 트랜스페린
D. 직접항글로불린검사

## 해설


항내인자 항체 양성은 자가면역 위염에 따른 비타민 B12 흡수장애를 지지한다. 이 검사는 B12 결핍 자체를 선별하는 검사라기보다 이미 확인된 결핍의 원인을 찾는 데 쓰며, 음성이라고 자가면역 위염을 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003576 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 다종 보충제 복용을 해설에 복원. 자가면역 위염 확인 anti-IF A와 B12 결핍 진단을 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003576
