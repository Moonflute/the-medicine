---
type: qbank
schema_version: 1
id: medqa-us-train-008505
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b2ef835a48284e27854dadf731ec4a1237bc61da317d49414fe28c9c93cd3ae5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "excoriation disorder"
  - "body dysmorphic disorder"
  - "cognitive behavioral therapy"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2UvOu2gOucr-q4sOq4sOyepeyVoCAoRXhjb3JpYXRpb24gRGlzb3JkZXIpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOyytOydtO2YleyepeyVoCAoQm9keSBEeXNtb3JwaGljIERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 청소년이 다른 사람에게 거의 보이지 않는 얼굴의 흉터 때문에 하루 2시간씩 거울을 본다. 그 흉터가 심하게 흉하다고 느껴 등교를 피한다. 체중·체형에 대한 집착은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 사회불안장애
B. 피부뜯기장애
C. 신체이형장애
D. 신경성 식욕부진증

## 해설


다른 사람에게 거의 보이지 않는 외모 결함에 몰두하고 거울 확인 같은 반복 행동과 기능 저하가 동반되면 신체이형장애를 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008505
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. BDD의 CBT 답 유지. DBT·영양재활 등을 침습적 치료처럼 분류한 오류 삭제.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
