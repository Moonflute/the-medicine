---
type: qbank
schema_version: 1
id: medqa-us-train-009258
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f89654d1fedf3db1f510a62e3b7b95fc5220e2bae6b7d98d329cb0ca2e26575f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "iron deficiency anemia"
  - "철결핍성 빈혈"
  - "restless legs syndrome"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
---

# MedQA US 임상문제

## 문제

47세 여성이 쇠약감, 호흡곤란, 어지럼증으로 내원했다. 증상은 4개월 전 서서히 시작되어 점점 악화되었다. 자궁근종에 의한 만성 월경과다 병력이 있다. 체온 36.9°C, 혈압 135/82 mmHg, 맥박 97회/분이다. 신체검사는 정상이다. 혈색소 9.2 g/dL, 평균적혈구용적 74 μm³, 평균적혈구혈색소 21 pg/cell, 망상적혈구 0.4%, 혈청 페리틴 10 ng/mL이다. 이 환자의 상태에서 특이적으로 나타나는 소견은 무엇인가?

## 선택지

A. 고유감각 소실
B. 골 변형
C. 다리 궤양
D. 하지불안 증후군

## 해설


월경과다, 소구성 빈혈과 낮은 ferritin은 철결핍성 빈혈을 지지한다. 하지불안증후군(D)은 철결핍과 연관되어 선택지 중 가장 적절하다. 다만 철결핍에만 특이적인 증상은 아니며, 모든 철결핍 환자에서 발생하거나 단일 도파민 수용체 이상만으로 설명되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009258 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 월경과다·저 ferritin의 철결핍과 하지불안 D 연결 유지. 하지불안을 철결핍에만 특이적이라거나 도파민 수용체 기능저하로 단정한 과도한 표현 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009258
