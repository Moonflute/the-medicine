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
answer: A
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

객담 항산균 도말과 결핵균 핵산증폭검사가 양성인 초치료 환자다. 신속 검사에서 이소니아지드·리팜핀 내성 소견이 없고 약제 내성 위험도 낮다. 공기주의를 적용했고 배양·감수성 결과는 아직 나오지 않았다. 기존 표준 6개월 치료에서 초기 약제 조합은?

## 선택지

A. 이소니아지드·리팜핀·피라진아미드·에탐부톨
B. 이소니아지드와 리팜핀만 투여
C. 리팜핀과 에탐부톨만 투여
D. 배양 결과 전에는 항결핵치료를 시작하지 않는다

## 해설


약제 감수성이 예상되는 폐결핵의 기존 6개월 요법은 네 약제로 시작한다. 환자가 활동성으로 진단되면 배양을 기다리며 치료를 미루지 않고, 최종 감수성에 따라 약제를 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007787 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 활동 TB 치료 D 유지;6개월이 유일 현행 요법은 아니며 신속 내성결과에 따라 조정함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/treatment/tuberculosis-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007787
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMjI4MTc4JTJGYXJ0Y2xWaWV3LmRvJTNG
