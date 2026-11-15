---
type: qbank
schema_version: 1
id: medqa-us-train-009058
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5734e0823616dc591af0b9d653bcc3f136a592624a61fe6d3f6ae2375b33a35f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral arterial disease"
  - "intermittent claudication"
  - "erectile dysfunction"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

49세 남성이 6개월 동안 걸을 때마다 양쪽 엉덩이와 허벅지가 아프고 발기가 어려워졌다고 한다. 허리를 굽히지 않고 서서 쉬어도 통증은 몇 분 안에 가라앉는다. 흡연력과 고혈압이 있고 양쪽 대퇴동맥 맥박이 약하다. 가장 가능성 높은 병변 위치는?

## 선택지

A. 대동맥–장골동맥 분지부
B. 한쪽 슬와동맥
C. 양쪽 하지 심부정맥
D. 요추 척추관

## 해설


엉덩이·허벅지의 운동유발 통증, 양측 대퇴맥 감소와 발기부전의 조합은 대동맥–장골동맥 폐색질환을 시사한다. 척추관협착의 신경성 파행은 자세에 따라 달라질 수 있으나 약해진 대퇴맥은 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 발기부전과 둔부·대퇴부 혈관성 파행의 조합은 대동맥-장골동맥 폐색을 시사하며 양측 대퇴맥 감소 A가 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009058
- https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/05/09/15/00/2024-guideline-for-lower-extremity-pad
