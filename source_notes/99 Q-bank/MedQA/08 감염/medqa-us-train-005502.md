---
type: qbank
schema_version: 1
id: medqa-us-train-005502
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8a80dbc863844c3bbbff5f4646e55607d3603eea765906a7431d14d8224bf51
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "장티푸스"
  - "Salmonella Typhi"
  - "장미진"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yepe2LsO2RuOyKpCAoVHlwaG9pZCBGZXZlcikubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-M67Cc7KeEIChFeGFudGhlbSBTdWJpdHVtKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

인도에서 귀국한 환자가 열흘간 지속된 고열과 복통으로 왔다. 장티푸스를 의심해 경험적 항생제를 준비 중이다. 아직 항생제를 쓰지 않았을 때 원인균과 감수성을 확인하는 데 우선할 검사는?

## 선택지

A. 혈액배양
B. Widal 항체검사 단독
C. 소변 일반검사
D. 대변 충란 검사

## 해설


장티푸스는 혈액배양이 주된 진단검사다. 항생제 전에 채취할 수 있으면 그렇게 하고, 혈청 응집검사만으로 확진하지 않는다. 귀국 후 발열에서는 말라리아 등 다른 중증 감염도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005502 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인도 여행·지속 고열·서맥성 반응·발진·백혈구감소의 enteric fever A를 원문 대조 유지. 없는 그림의 rose spot 형태를 추가하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005502
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/typhoid-and-paratyphoid-fever.html
