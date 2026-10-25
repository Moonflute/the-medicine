---
type: qbank
schema_version: 1
id: medqa-us-train-001498
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a498d1025f17a463b9209cd1b651916d55cc3b416c83a4112622c1eff5c14aa
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "extravascular hemolysis"
  - "splenomegaly"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: simple
answer: B
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
---

# MedQA US 임상문제

## 문제

SS-헤모글로빈 병력이 있는 2세 여아가 어머니가 발견한 복부 종괴로 소아과에 내원했다. 비장이 만져질 정도로 커져 있고 손바닥과 결막이 매우 창백하다. 혈청 합토글로빈 수치는 정상이다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 적혈구 생성 감소
B. 혈관외 용혈
C. 보체 매개 용혈
D. 용혈성요독증후군

## 해설


어린 HbSS 환자의 빈혈·비장비대와 정상 haptoglobin은 선택지 중 비장에서의 혈관외 적혈구 제거(B)에 가장 부합한다. Haptoglobin은 혈관내로 유리된 hemoglobin을 결합하므로 혈관외 용혈에서 반드시 감소하는 것은 아니다. 비장에 혈액이 급격히 저류되는 급성 비장 격리는 별도 응급 기전이며, 이를 적혈구 파괴와 완전히 같은 현상으로 설명하지 않는다. 급성 창백·비장 크기 증가나 순환저하가 있다면 즉시 격리 위기 여부를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001498 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 haptoglobin과 비장 비대의 혈관외 제거 기전을 유지하되 비장 격리를 용혈과 동일시하는 설명을 구분했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001498
