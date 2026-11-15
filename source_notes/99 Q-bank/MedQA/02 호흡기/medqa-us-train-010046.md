---
type: qbank
schema_version: 1
id: medqa-us-train-010046
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a63a6da78a1d1e88f0fcdde499c555b54f5a9c3e5422b7a6e1f3da9cee0f0fd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐쇄성 수면무호흡증"
  - "수면다원검사"
  - "코골이"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yImOuptCDrrLTtmLjtnaHspp0gKFNsZWVwIEFwbmVhIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 심부전으로 추적 중이다. 아내가 자는 동안 코골이와 반복해서 숨이 멎는 모습을 목격했고, 본인은 낮에 자주 졸린다고 한다. 폐쇄성 수면무호흡과 심부전과 연관된 중추성 무호흡을 구분할 검사는?

## 선택지

A. 야간 맥박산소측정 단독
B. 가정용 휴대기기로 산소포화도만 기록
C. 수면검사실에서 시행하는 수면다원검사
D. 심장초음파만 반복

## 해설


의미 있는 심장질환이 있으면 중추성 무호흡 등 다른 수면호흡장애도 가능하다. 검사실 수면다원검사는 수면 단계, 기류와 호흡 노력 등을 함께 측정해 무호흡 유형을 구분한다. 산소포화도만으로는 유형을 구분하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비만·코골이·주간졸림과 유의한 심장질환이 있어 실험실 수면다원검사 C가 적합하며 단순 야간 산소측정만으로 확진하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010046
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5337595/
