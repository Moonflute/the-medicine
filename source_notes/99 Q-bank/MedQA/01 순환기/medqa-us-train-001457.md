---
type: qbank
schema_version: 1
id: medqa-us-train-001457
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd7e755a72d78313f9f6a2b68a11a10d3959bf5a8da3309bd905ee92ee2f3e81
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chronic venous insufficiency"
  - "venous stasis ulcer"
  - "post-thrombotic syndrome"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2VmOyngCDsoJXrp6XrpZggKFZhcmljb3NlIFZlaW4pLm1k
question_type: diagnosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

57세 남성이 사진과 같이 6개월 동안 지속된 오른쪽 종아리의 큰 상처로 내원했다. 10년 넘게 다리가 만성적으로 부어 있었고 어머니와 형제도 다리에 비슷한 문제가 있었다. 5년 전 해당 다리에 심부정맥혈전증이 확인되었으나 다른 과거력은 없다. 혈압은 126/84, 맥박은 62회/분이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 동맥성 궤양
B. 마졸린 궤양
C. 만성 정맥부전
D. 카포시 육종

## 해설


만성 하지 부종, 가족력, 과거 혈전증, 그리고 큰 정맥성 궤양은 만성 정맥부전을 시사한다. 이는 정맥 판막 손상과 정맥압 상승으로 발생한다. 따라서 가장 가능성 높은 진단은 만성 정맥부전이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 10년 하지부종과 같은 다리 DVT 이후 만성 상처는 정맥부전 C를 가장 지지. 누락 사진의 피부 모양은 새로 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001457
