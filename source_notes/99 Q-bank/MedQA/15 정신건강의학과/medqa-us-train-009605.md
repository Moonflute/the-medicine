---
type: qbank
schema_version: 1
id: medqa-us-train-009605
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86f5d438113054edf921af9214349dd449d4e4ae577f29fe1f1913ec556c5cb9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "schizophrenia relapse"
  - "조현병 재발"
  - "delusional perception"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

진찰과 필요한 검사를 마쳤지만, 급성 정신병 증상이 있는 환자가 “병실에 감시 장치가 있습니다. 너무 무섭습니다”라고 말한다. 가장 적절한 첫 반응은?

## 선택지

A. “감시받는 것 같아서 무서울 수 있겠어요. 저는 감시 장치를 확인하지 못했어요. 무엇이 가장 불안한지 말씀해 주시겠어요?”
B. “그럴 수도 있겠군요. 누가 감시하는지 같이 찾아봅시다.”
C. “전혀 근거가 없는 말입니다. 맞다는 증거부터 대 보세요.”
D. “그 이야기는 하지 않는 게 좋습니다. 다른 이야기를 하죠.”

## 해설


환자의 두려움은 인정하되 망상 내용에는 동의하지 않는다. 차분히 경험을 듣고 자신이나 타인에게 즉각적인 위험이 없는지 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009605
- https://www.health.nsw.gov.au/mentalhealth/psychosocial/strategies/Pages/communicating-psychosis.aspx

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문과 한국어 의사소통 선지 전부 및 본문·답·해설 대조. 통증 경험을 인정하며 개방형으로 탐색하고 위협·단정하지 않는 응답 적절.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
