---
type: qbank
schema_version: 1
id: medqa-us-train-007422
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4e6d62abb82f4cac0420ae39a3d60a33f7b37793a3bd1603400786f129bc6603
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "거대세포바이러스 식도염"
  - "장기이식 후 감염"
  - "간시클로버"
  - "세포질 봉입체"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

27세 여자가 2일 동안 지속된 연하통으로 내원했다. 루푸스로 인한 말기 신장질환 때문에 3개월 전 신장이식을 받았다. 타크로리무스, 미코페놀레이트 모페틸, 프레드니손, 칼슘 보충제를 복용한다. 혈압은 120/80 mmHg, 맥박 72회/분, 호흡수 14회/분, 체온 38.0°C(100.4°F)이다. 식도경검사에서 주변 점막은 정상이고 원위부 식도에 뱀 모양 궤양이 보인다. 생검에서 큰 세포질 봉입체가 보인다. 다음 중 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 부데소니드
B. 플루코나졸
C. 간시클로버
D. 판토프라졸

## 해설


이식 후 면역억제와 원위 식도의 큰 serpiginous 궤양은 CMV 식도염을 의심하게 하며 선택지 C가 적절하다. CMV는 전형적으로 커진 세포의 핵내 봉입체 및 세포질 봉입체가 나타날 수 있어 세포질만의 형태로 확진하지 않고 병리/면역염색을 통합한다. Ganciclovir는 신기능에 맞춰 투여하고 골수억제 등을 감시하며 질환 중증도에 따라 정주/경구 valganciclovir 접근을 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007422 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CMV 식도염 ganciclovir C 유지; 핵/세포질 봉입체와 신기능·골수 독성 감시 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007422
