---
type: qbank
schema_version: 1
id: medqa-us-validation-000406
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ef22ef712f784b00bc3366e0ce2a78b20ca12b4d097870a1b901f9c41a061e11
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "말라리아"
  - "용혈성 빈혈"
  - "혈액도말검사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
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

우간다에서 귀국한 비면역 환자가 고열, 오한과 혈소판 감소로 진료 중이다. 첫 말라리아 혈액도말은 음성이지만 다른 원인은 아직 확인되지 않았다. 다음 검사 계획은?

## 선택지

A. 첫 도말 음성으로 말라리아를 배제한다
B. 항체 검사가 양성이면 다시 도말한다
C. 12~24시간 간격으로 도말을 반복해 총 세 회까지 확인한다
D. 열이 일정한 주기로 반복될 때만 도말한다

## 해설


의심이 높으면 초기 기생충 밀도가 낮아 첫 도말이 음성일 수 있다. 12~24시간 간격으로 반복해 한 번의 음성 결과만으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000406 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여행 후 발열·혈관내 용혈에서 말라리아 긴급 후·박층 도말 C 유지. 원문 Cr0.9인데 신부전이라고 덧붙인 오류와 1시간 보장/무조건 가장 빠른 검사 단정 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/malaria/hcp/clinical-guidance/evaluation-and-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000406
- https://www.cdc.gov/malaria/hcp/diagnosis-testing/index.html
