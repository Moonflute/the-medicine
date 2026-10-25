---
type: qbank
schema_version: 1
id: medqa-us-test-001119
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:267f0d2b51aba520be0bf2c085bb09773e0a5b4136fae88ddf4772ddaee34c55
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "통풍"
  - "요산 일나트륨 결정"
  - "급성 통풍성 관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: mechanism
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

당뇨병과 만성 신장질환이 있는 40세 비만 남성이 하루 동안 발생한 엄지발가락의 극심한 통증, 부종, 발적으로 진료를 받으러 왔다. 외상이나 과거 유사 증상은 없고 오른쪽 첫째 발가락이 붉고 부어 있으며 통증 때문에 운동범위가 제한되었다. 가장 가능성 높은 관절질환과 관련된 침착물은?

## 선택지

A. 인산칼슘
B. 옥살산칼슘
C. 요산 일나트륨
D. 구리

## 해설


당뇨와 신장질환이 있는 환자에서 급성 첫째 발가락 통증·부종·발적은 통풍을 시사하며, 관절에 침착되는 물질은 요산 일나트륨 결정이다. 따라서 가장 가능성 높은 관절질환은 통풍이며 관련 침착물은 요산 일나트륨이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001119` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 첫 발가락 관절염과 통풍의 MSU 침착 C가 원문·해설과 일치. 임상진단 확정 또는 감염배제까지 승인하는 의미는 아님.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001119
