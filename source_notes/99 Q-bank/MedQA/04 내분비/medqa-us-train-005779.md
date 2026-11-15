---
type: qbank
schema_version: 1
id: medqa-us-train-005779
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0cf4563f676f4c0d4c47620cf7135f8259a38c0646dbe0bb09c77803af4ad4c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "선천성 갑상선기능저하증"
  - "갑상선 발생 이상"
  - "신생아 황달과 제대탈장"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
difficulty: standard
answer: A
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

생후 26일 영아에게 수유 저하와 오래가는 황달이 있다. 정맥혈 검사에서 TSH가 연령 정상범위보다 크게 높고 유리 T4는 낮다. 선천성 일차 갑상선기능저하증이 확인됐을 때 다음 처치는?

## 선택지

A. 원인 영상검사를 기다리지 말고 레보티록신 시작
B. 영상에서 갑상선이 없다고 확인된 경우에만 치료
C. 생후 3개월에 다시 검사할 때까지 기다림
D. 요오드가 든 보충제로 치료

## 해설

선천성 갑상선기능저하증에서는 신경 발달을 위해 레보티록신을 빨리 시작한다. 초음파나 핵의학 검사로 원인을 확인할 수 있지만 이를 기다리며 치료를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선천갑상선저하 A의 구막 오타와 다른 질환은 전혀 설명 못한다는 단정 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005779
- https://doi.org/10.1089/thy.2020.0333
