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

57세 남성이 6개월째 낫지 않는 오른쪽 발목 궤양으로 내원했다. 같은 다리에 심부정맥혈전증 병력이 있다. 저녁이면 다리가 더 붓고, 안쪽 복사뼈 위에 갈색 색소침착과 얕고 불규칙한 궤양이 보인다. 발등동맥은 잘 만져진다. 궤양의 가장 가능성 높은 원인은?

## 선택지

A. 말초동맥질환
B. 당뇨병성 말초신경병증
C. 혈전후 만성 정맥부전
D. 피부 소혈관염

## 해설


이전 심부정맥혈전증에 더해 저녁에 심해지는 부종, 복사뼈 주변의 색소침착, 얕고 불규칙한 궤양은 혈전후 만성 정맥부전을 지지한다. 동맥성 궤양은 말단에 잘 생기고 동맥 관류 저하 단서가 동반되며, 신경병성 궤양은 감각저하와 발바닥 압박점이 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 10년 하지부종과 같은 다리 DVT 이후 만성 상처는 정맥부전 C를 가장 지지. 누락 사진의 피부 모양은 새로 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001457
