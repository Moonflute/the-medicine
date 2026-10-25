---
type: qbank
schema_version: 1
id: medqa-us-train-005204
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba6331f62e75a2d8ded368a02ea5ee7a6af94e93c193841f86436d6fa1779f8c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신경모세포종"
  - "신경능선 세포"
  - "히르슈스프룽병"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK966qo7IS47Y-s7KKFIChOZXVyb2JsYXN0b21hKS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 여아가 빠르고 무작위적인 수평·수직 안구운동과 간헐적인 사지·머리 경련으로 내원했다. CT에서 정중선을 가로지르는 복부 종괴가 보이고 24시간 소변 호모바닐린산과 바닐릴만델산이 상승했다. 이 환자의 진단과 같은 세포에서 병리학적으로 기원하는 질환은?

## 선택지

A. 두개인두종
B. 히르슈스프룽병
C. 파리노 증후군
D. 털모양세포성 성상세포종

## 해설

정중선을 가로지르는 복부 종괴, 증가한 HVA/VMA 및 안구간대·근간대 양상은 신경모세포종을 시사한다. 이는 신경능선 유래 교감신경 계통 종양이다. 히르슈스프룽병(B)은 신경능선 세포의 장관 이동·발달 이상으로 장 신경절이 없는 질환으로 같은 발생 세포 계통과 관련되지만 종양이 아니다. 환아의 복부 종괴를 히르슈스프룽병 자체라고 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 히르슈스프룽병을 신경능선 유래 종양으로 잘못 정의하고 환아의 실제 종양과 혼동한 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005204
