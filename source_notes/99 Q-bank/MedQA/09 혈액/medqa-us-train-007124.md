---
type: qbank
schema_version: 1
id: medqa-us-train-007124
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58895417c21058a6477b85c0f6e6a3eef8d08589886afc4e800f51d655bedc84
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "악성빈혈"
  - "비타민 B12 결핍"
  - "내인자 항체"
  - "거대적아구성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

비타민 B12 결핍과 신경 증상이 있었고, 항내인자 항체 양성과 위 조직검사로 자가면역 위염이 확인됐다. 근육주사로 빈혈이 회복됐다. 앞으로의 보충 계획은?

## 선택지

A. 혈색소가 정상화됐으므로 중단
B. 근육주사 비타민 B12를 평생 유지
C. 엽산으로만 교체
D. 다시 심한 빈혈이 생길 때만 한 차례 주사

## 해설


자가면역 위염으로 흡수장애가 지속되면 빈혈이 좋아져도 보충을 중단하지 않는다. 장기적인 근육주사 B12 보충과 증상 추적이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007124 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B12·folate·갑상선·알코올의 MCV 방향을 반대로 설명한 오류 교정; 원문900k 혈소판은 비전형임을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007124
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations
