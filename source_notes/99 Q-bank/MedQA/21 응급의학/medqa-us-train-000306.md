---
type: qbank
schema_version: 1
id: medqa-us-train-000306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:731c3142110464808677934d375df57a83e4444aa53b78b83d6c67d9fec38fa0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "concussion"
  - "post-concussion syndrome"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 가벼운 두부 외상 3일 뒤에도 두통과 집중 저하가 있다. 초기 CT와 현재 신경학적 진찰은 정상이고 새 위험 신호는 없다. 권장할 회복 계획은?

## 선택지

A. 증상이 완전히 없어질 때까지 어두운 방에서 절대 안정
B. 증상을 크게 악화시키지 않는 일상 활동부터 점차 재개하고 추적
C. 즉시 접촉 운동을 평소 수준으로 재개
D. 증상 변화와 관계없이 매일 CT 촬영

## 해설

뇌진탕 초기 24–48시간에는 상대적 휴식이 적절하며, 이후에는 증상을 크게 악화시키지 않는 활동을 점차 늘린다. 두통이 심해지거나 새 신경 증상이 생기면 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 3일째 뇌진탕 증상을 장기 post-concussive syndrome으로 확정하거나 무기한 완전 휴식으로 오해하지 않도록 C를 현행 회복지침에 맞게 설명한다.
- 공식/학회 근거: https://www.cdc.gov/traumatic-brain-injury/response/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000306
- https://bjsm.bmj.com/content/57/11/695
