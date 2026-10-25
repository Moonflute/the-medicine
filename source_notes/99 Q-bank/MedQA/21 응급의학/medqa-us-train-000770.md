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
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

38세 남성이 직장에서 의자에서 일어나던 중 의식을 잃어 응급실로 이송되었다. 환자는 6일 동안 진행성 기침, 호흡곤란, 발열, 오한이 있었으나 이러한 증상으로 진료를 받지는 않았다. 환자는 고통스러워 보이고, 안면 홍조가 있으며, 식은땀을 흘리고 있다. 키는 170cm, 체중은 120kg이며, 체질량지수(BMI)는 41.5kg/m2이다. 체온은 39.4°C, 맥박은 분당 129회, 호흡수는 분당 22회, 누운 자세에서의 혈압은 91/50mmHg이다. 우측 후흉곽에서 수포음(crackles)과 기관지 호흡음이 들린다. 좌측 상부 흉골 경계를 따라 2/6 등급의 수축기 중기 취성 잡음(midsystolic blowing murmur)이 들린다. 진찰상 전신적인 발한, 사지 홍조, 우측 후흉곽의 타진 시 둔탁음이 확인된다. 복부는 부드럽고 압통은 없다. 여러 간호사와 의사가 정맥로 확보를 시도했으나 실패하였다. 표준 무균 절차에 따라 우측 내경정맥에 대구경 중심정맥관을 삽입하였다. 이 환자의 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 심장초음파검사
B. 기관지내시경검사
C. 흉부 CT 촬영
D. 흉부 X선 촬영

## 해설

새로 우측 내경정맥 중심정맥관을 삽입했으므로 D, 흉부 X선은 카테터 끝의 위치와 기흉 등 흉부 시술 합병증을 확인하는 데 적절하다. 이 문항의 핵심은 단순히 기저 폐렴을 다시 확인하는 것이 아니다. 실제 진료에서는 초음파·심전도 기반 위치 확인 등 검증된 대체 방법과 응급도를 고려하며, 어떤 방법으로도 확인되지 않은 카테터를 당연히 안전하다고 가정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 우측 내경정맥 중심정맥관 직후 흉부 X선의 주목적은 폐렴 진단만이 아니라 카테터 위치 및 시술 합병증 확인임을 교정.
- 공식/학회 근거: https://www.asahq.org/sitecore/shell/~/media/sites/asahq/files/public/resources/standards-guidelines/practice-guidelines-for-central-venous-access.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000770
