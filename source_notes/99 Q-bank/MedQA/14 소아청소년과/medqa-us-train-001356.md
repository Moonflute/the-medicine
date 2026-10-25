---
type: qbank
schema_version: 1
id: medqa-us-train-001356
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5975bc8c35c8cfb1874c5d889eed7e6138092b7e5b77315d98f2b94eb8e5636d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "17-alpha-hydroxylase enzyme deficiency"
  - "Müllerian duct agenesis"
  - "Androgen insensitivity"
  - "Pure gonadal dysgenesis"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yViOuTnOuhnOqykOu2iOqwkOydkSAoQW5kcm9nZW4gSW5zZW5zaXRpdml0eSkubWQ
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생리가 없는 17세 여학생이 의사에게 왔다. 심각한 질병의 개인력이나 가족력은 없다. 신체 검진상 정상적인 유방 발달을 보인다. 음모는 거칠고 허벅지 안쪽 표면까지 뻗어 있다. 골반 검진상 막힌 끝의 질주머니(blind vaginal pouch)이 보인다. 초음파 검사상 난소는 보이나 자궁은 보이지 않는다. 이 환자의 증상에 가장 가능성이 높은 근본 원인은 다음 중 무엇인가?

## 선택지

A. 17-알파-하이드록실라제 효소 결핍증
B. 뮬러관 무형성증 (Müllerian duct agenesis)
C. 안드로겐 불감증 (Androgen insensitivity)
D. 순수 생식선 형성 부전증 (Pure gonadal dysgenesis)

## 해설

정상 유방 발달과 음모, 확인되는 난소에 비해 자궁이 없고 질 끝이 막힌 소견은 뮐러관 무형성(B)을 시사한다. 난소는 뮐러관과 발생 기원이 달라 보존되며 에스트로겐 분비로 유방이 발달할 수 있다. 원문은 남성형 외음부나 외음부 골격 결손을 기술하지 않는다. 완전 안드로겐불감성증에서는 일반적으로 음모가 적고 난소가 보이지 않는다는 점이 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: blind vaginal pouch의 맹장 오역과 원문에 없는 남성형 외음부·골격 결손을 제거했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001356
