---
type: qbank
schema_version: 1
id: medqa-us-train-008300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f405bcc87b1de6a51f2074b64ed0788bec72037bea4240db6179dacb095c9ec3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Chlamydia trachomatis cervicitis"
  - "mucopurulent cervicitis"
  - "azithromycin"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyXvCAoQ2VydmljaXRpcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신하지 않은 23세 여성의 점액고름성 자궁경부염에서 클라미디아 핵산증폭검사가 양성이고 임균은 음성이다. 약제 금기는 없고 7일 복용이 가능하다. 국내 진료지침의 우선 치료는?

## 선택지

A. 아지스로마이신 경구 1회
B. 세프트리악손 근육주사 1회
C. 독시사이클린 경구 7일
D. 메트로니다졸 경구 7일

## 해설

국내 지침의 비임신 성인 단순 클라미디아 감염 1차 치료는 독시사이클린 100 mg을 하루 두 번 7일 사용하는 것이다. 아지스로마이신 1회는 대안이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 아지스로마이신 A는 현재 대체요법으로 유효하여 유지. 일률적 1차약 표현을 교정.
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm
- https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008300
- https://www.icurology.org/DOIx.php?id=10.4111%2Ficu.20230322
