---
type: qbank
schema_version: 1
id: medqa-us-train-000770
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b1dbb044d2be9e3a7bf676ca4ec32dc1fe4b4f86584845556ab00eef94370bc0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "pneumonia"
  - "sepsis"
  - "hypotension"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

응급실에서 초음파 유도로 우측 내경정맥에 중심정맥관을 넣었다. 위치를 확인하는 다른 방법은 사용하지 못했고 환자는 안정적이다. 관 끝의 위치와 시술 후 기흉을 함께 평가할 검사는?

## 선택지

A. 폐기능검사
B. 기관지내시경
C. 이동식 흉부 X선
D. 복부 조영 CT

## 해설

흉부 X선은 경부 중심정맥관 끝의 위치와 기흉을 평가하는 방법 중 하나다. 장비와 숙련도에 따라 초음파나 심전도 기반 위치 확인을 활용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 우측 내경정맥 중심정맥관 직후 흉부 X선의 주목적은 폐렴 진단만이 아니라 카테터 위치 및 시술 합병증 확인임을 교정.
- 공식/학회 근거: https://www.asahq.org/sitecore/shell/~/media/sites/asahq/files/public/resources/standards-guidelines/practice-guidelines-for-central-venous-access.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000770
