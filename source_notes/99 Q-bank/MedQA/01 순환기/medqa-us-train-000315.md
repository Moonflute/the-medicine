---
type: qbank
schema_version: 1
id: medqa-us-train-000315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87a09836cdf2f38bba349e0e153f3cb3d5e9167ce3b60201b63bbfb8e8155b63
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "atrial fibrillation"
  - "stable angina pectoris"
  - "dehydration"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

82세 여성이 화장실에 가려고 일어서자 어지럽고 시야가 흐려지더니 수 초간 의식을 잃었다. 바로 의식을 회복했다. 최근 식사량이 줄었고 티아지드계 이뇨제를 복용하고 있다. 누워서 잰 혈압은 125/72 mmHg, 기립 2분 뒤 혈압은 96/59 mmHg이며 같은 어지럼이 재현된다. 심전도는 동율동이다. 가장 가능성 높은 실신 원인은?

## 선택지

A. 발작성 심방세동
B. 체액 감소와 약물의 영향을 받은 기립저혈압
C. 전신 강직간대발작
D. 중증 대동맥판협착

## 해설


일어선 뒤 3분 이내에 수축기혈압이 20 mmHg 이상 또는 이완기혈압이 10 mmHg 이상 떨어지며 증상이 재현되면 기립저혈압을 지지한다. 섭취 감소와 이뇨제는 기여할 수 있다. 자세 변화와 증상의 관계가 비특이적인 BUN 상승보다 직접적인 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기립 직후 실신과 건조 점막·낮은 혈압은 volume depletion/신전성 azotemia로 BUN상승 B를 지지. 현재 규칙맥을 AF로 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000315
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
