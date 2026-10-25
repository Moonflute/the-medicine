---
type: qbank
schema_version: 1
id: medqa-us-train-007787
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6566cfc70e18fc89d1a746270de02bc87db33ec0d3f6f96e0827fb904309dd7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "active pulmonary tuberculosis"
  - "acid-fast bacilli"
  - "RIPE therapy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

28세 여성이 2개월간 지속된 피로와 미열로 내원했다. 지난 4주 동안 호흡곤란, 가래를 동반한 기침, 체중 5.4 kg 감소가 점점 심해졌다. 3개월 전 중국에서 2개월간 여행하고 돌아왔다. 마른 체형이며 체온 37.9°C(100.2°F), 맥박 75회/분, 혈압 125/70 mm Hg이다. 전경부 및 후경부 림프절병증이 있고, 청진에서 좌측 하엽에 수포음이 들린다. 백혈구 11,300/mm³, 적혈구침강속도 90 mm/h이다. 흉부 X선에서 좌측 하엽의 반점형 침윤과 동측 폐문 확대가 보인다. 객담 현미경검사에서 항산균이 보이고 PCR이 양성이다. 객담 배양 결과를 기다리는 중이다. 환자를 공기감염 격리실에 배치한 후 가장 적절한 다음 처치는?

## 선택지

A. 치료 시작 전 배양 결과를 기다린다
B. 인터페론-감마 방출 검사
C. 흉부 CT
D. 2개월간 이소니아지드, 리팜핀, 피라진아미드, 에탐부톨을 투여한 후 4개월간 이소니아지드와 리팜핀을 투여

## 해설


AFB와 TB PCR 양성인 활동 폐결핵은 격리·신고와 함께 치료를 시작하고 배양을 기다리지 않는다. D의2HRZE/4HR은 약제감수성 폐결핵에 유효한6개월 표준 옵션이다. 신속 분자내성검사/배양 감수성에 따라 조정하고 일부 적격 환자에는4개월 요법도 가능하므로6개월을 유일 최신 요법으로 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007787 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 활동 TB 치료 D 유지;6개월이 유일 현행 요법은 아니며 신속 내성결과에 따라 조정함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/treatment/tuberculosis-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007787
