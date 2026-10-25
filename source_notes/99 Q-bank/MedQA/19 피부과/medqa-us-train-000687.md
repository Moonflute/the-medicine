---
type: qbank
schema_version: 1
id: medqa-us-train-000687
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fde6a6ea7a33b8383ca50ea10e228ddb6c223cda950005c7b657c284543eb9ce
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Erythema multiforme"
  - "Herpes simplex virus"
  - "Herpes zoster"
  - "Stevens-Johnson syndrome"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uLpO2YlSDtmY3rsJggKEVyeXRoZW1hIE11bHRpZm9ybWUpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64uo7Iic7Y-s7KeE67CU7J2065-s7IqkIOqwkOyXvCAoSGVycGVzIFNpbXBsZXggVmlydXMgSW5mZWN0aW9uKS5tZA
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
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

47세 남성이 발진으로 인해 응급실에 내원하였다. 환자는 발진이 어젯밤에 시작되었으며 매우 걱정된다고 말한다. 환자는 새로운 세제나 덩굴옻나무(poison ivy)와 같은 환경적 자극에 노출된 기억이 없다고 한다. 환자는 최근 관절염과 새로 발생한 기침을 관리하기 위해 일차 진료 의사에게 진료를 받기 시작했다. 체온은 99.5°F(37.5°C), 혈압은 127/68 mmHg, 맥박은 125회/분, 호흡수는 18회/분, 실내 공기에서의 산소 포화도는 98%이다. 신체 검진상 등 상부에만 융합되는 홍반성 반점, 수포, 박리, 점막염이 관찰되는 것이 특징적이다. 심폐 검진과 복부 검진은 정상 범위 내에 있다. 구인두 검사 결과 궤양과 홍반이 관찰된다. 다음 중 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 다형홍반(Erythema multiforme)
B. 단순포진바이러스(Herpes simplex virus)
C. 대상포진(Herpes zoster)
D. 스티븐스-존슨 증후군(Stevens-Johnson syndrome)

## 해설

통증성 피부 미란·수포·박리와 구강 점막염의 조합은 선지 중 Stevens–Johnson syndrome(D)을 가장 지지한다. SJS/TEN은 대개 약물과 관련되며 감염 등 다른 연관 원인도 고려한다. 새로운 세제 노출이 없다는 사실이 약물 반응을 배제하지 않는다. 실제 박리 체표면적이 주어지지 않아 SJS/TEN 세부 분류를 면적만으로 확정할 수는 없다. 다형홍반을 항상 손발에만 국한된 질환으로 설명해서도 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 약물·감염과 무관한 전신 반응이라는 SJS 설명을 제거하고 상부 등 병변을 전신 확산으로 바꾸지 않는다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000687
