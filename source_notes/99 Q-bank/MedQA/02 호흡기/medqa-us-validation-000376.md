---
type: qbank
schema_version: 1
id: medqa-us-validation-000376
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a8f115cb82f6a7946dabaa6615cc41a5935880a5e91bdb7ff4eb65ea15efe3fe
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "만성 기관지염"
  - "알부테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 여성이 지속되는 기침으로 진료를 받으러 왔다. 수개월 동안 기침 빈도가 늘었고 노란 가래가 간헐적으로 나온다. 아침에 가래가 더 많으며 약 35년 동안 하루 3갑 가까이 피운 연쇄흡연자다. 지난 2년간 기침이 지속되었고 3개월 이상 완전히 없었던 적은 없다. 진찰에서 하폐야에 가벼운 호기성 천명이 들린다. FEV1은 83%, 기관지확장제 후 FEV1/FVC는 0.65이다. 금연과 폐렴구균·인플루엔자 예방접종을 권고받았다. 현재 증상 완화에 가장 적절한 약물은?

## 선택지

A. 알부테롤
B. 플루티카손
C. 독시사이클린
D. 프레드니손

## 해설

기관지확장제 후 FEV1/FVC 0.65는 지속적인 기류제한을 지지하며 만성 가래 기침은 만성기관지염 양상이다. 현재 선택지 중 A의 알부테롤이 필요시 증상 완화에 적합하다. 발열이나 급격한 호흡 악화가 제시된 것은 아니므로 급성 악화라고 단정하지 않는다. 지속 증상이 많으면 장기작용 기관지확장제 필요성도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정기 COPD의 현재 증상 완화를 급성 악화 치료로 바꾼 해설을 교정.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000376
