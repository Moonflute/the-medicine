---
type: qbank
schema_version: 1
id: medqa-us-train-006362
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d75861bd1fd03f85b17e471db78dad2603453344ecb25385de4fec0564df322b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 식욕부진증"
  - "섭식장애"
  - "부프로피온 발작 위험"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOyytCDspp3sg4Eg67CPIOq0gOugqCDsnqXslaAgKFNvbWF0aWMgU3ltcHRvbSBhbmQgUmVsYXRlZCBEaXNvcmRlcnMpLm1k
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 어머니와 함께 응급실에 내원했다. 어머니는 오늘 아침 딸이 창백하고 만지면 차가우며 침대 옆에 쓰러져 있는 것을 발견했다. 과거에 의학적 또는 정신과적 병력은 없지만, 지난 3개월 동안 월경을 하지 않았다고 한다. 응급실에서 환자는 의식이 명료하고 지남력이 정상이다. 누운 자세에서 혈압은 80/60 mm Hg, 심박수는 분당 55회이다. 신체진찰에서 창백하고 매우 마른 모습이다. 소변 임신검사는 음성이다. 섭식장애가 의심된다. 다음 중 어떤 치료 선택이 금기인가?

## 선택지

A. 부프로피온
B. 인지행동치료
C. 선택적 세로토닌 재흡수 억제제
D. 올란자핀

## 해설

현저한 저체중·무월경·쇠약은 신경성 식욕부진증을 의심하게 한다. 부프로피온은 현재 또는 과거의 신경성 식욕부진증/폭식증에서 발작 위험 때문에 금기이다. 단순히 체중 감소나 식욕 억제만이 금기의 유일한 기전이라고 설명하지 않는다. 현재 실신과 저혈압은 신체적 안정화·영양 및 전해질 평가가 필요한 별도 긴급 문제이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006362

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 contraindicated를 단순 회피보다 금기로 정확히 표현. 식욕 억제 때문에만 발작 위험이라는 불확실 기전 대신 진단 관련 허가 금기 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2563ea9f-6e29-2747-e054-00144ff88e88&type=display
