---
type: qbank
schema_version: 1
id: medqa-us-validation-000670
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5aa54cc3320786f255c1c9422fe7c64164e34471c525e11ee50a89671537d410
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "과민성장증후군"
  - "로마 IV 기준"
  - "복통과 배변 관련성"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
question_type: diagnosis
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
---

# MedQA US 임상문제

## 문제

22세 여성이 배변으로 호전되는 설사와 복부경련으로 진료를 받으러 왔다. 시험 기간에 증상이 심해지고 신체진찰과 검사 결과는 정상이다. 가장 가능성 높은 질환에 대한 Rome IV 진단 기준은?

## 선택지

A. 증상이 최소 6개월 존재
B. 배변으로 호전되지 않는 증상
C. 연속 3개월 동안 주 1일 이상 증상이 있고 진단 전 최소 6개월부터 시작
D. 대변 굳기 변화 없음

## 해설


정답 C. 질문에서 명시한 Rome IV는 최근 3개월 동안 평균 주 1일 이상의 반복 복통, 배변 관련성·배변 횟수 변화·형태 변화 중 두 가지 이상과 진단 최소 6개월 전 증상 시작을 요구한다. 배변 관련성은 반드시 호전만 의미하지 않는다. 2026년 Rome V는 복통 또는 불편감과 더 낮은 빈도 문턱(월 3일)을 포함하므로 이 선택지를 현행 모든 기준의 동일 문구라고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000670 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 현 선지 C는 Rome IV 기준으로서만 정확하므로 질문의 기준 버전을 명시; 2026 Rome V와 혼동하지 않게 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://theromefoundation.org/rome-iv/rome-iv-criteria/
- https://theromefoundation.org/rome-v-criteria/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000670
