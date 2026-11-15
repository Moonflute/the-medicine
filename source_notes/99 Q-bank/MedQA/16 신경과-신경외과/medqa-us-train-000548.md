---
type: qbank
schema_version: 1
id: medqa-us-train-000548
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:650e38e9434251a90e59fab76482c0333b30664da1938921db9b3035c4b624d0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "multiple sclerosis"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

다발성경화증 환자에게 고열과 배뇨통이 생겼다. 과거에도 있던 오른쪽 다리 저림이 열이 날 때만 심해지고, 열이 떨어지면 이전 상태로 돌아온다. 새로운 신경 결손은 없다. 초기 조치는?

## 선택지

A. 새 재발로 확정하고 즉시 혈장교환한다
B. 감염을 먼저 확인·치료하고, 열이 내려간 뒤 신경 증상을 재평가한다
C. 감염 평가 없이 고용량 정맥 스테로이드부터 시작한다
D. 질병조절제를 당일 교체하고 감염은 관찰한다

## 해설

감염과 발열로 과거 증상이 일시적으로 악화하는 가성재발이 가능하다. 감염을 치료하고 새 결손이 생기거나 악화가 지속되면 실제 재발을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일상 기능을 크게 떨어뜨린 MS 재발에는 C가 맞으며 혈장교환을 전혀 다른 적응증으로 배제한 오류를 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000548
