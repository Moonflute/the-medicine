---
type: qbank
schema_version: 1
id: medqa-us-train-005310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd44bb4e4b951ce43fc5130d51989b1a699da90ca32d1bcc185b083a8cc720c2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "중증 화상"
  - "파크랜드 공식"
  - "화상 수액소생"
  - "Burns"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여자가 주택 화재에서 구조된 45분 후 응급실에 왔다. 혼란스럽고 호흡곤란이 있으며 가슴과 복부, 상지 전면에 2~3도 화상이 있고 입과 코에 검은 잔해가 있다. 키 165 cm, 체중 55 kg, 맥박 125회/분, 호흡수 29회/분, 혈압 105/65 mmHg이다. 파크랜드 공식에 따른 가장 적절한 수액요법은?

## 선택지

A. 향후 24시간 동안 정질액 6 L 정맥 투여
B. 8시간 동안 콜로이드 4 L 정맥 투여
C. 12시간 동안 콜로이드 8 L 정맥 투여
D. 6시간 동안 콜로이드 5 L 정맥 투여

## 해설

전면 몸통 18%와 양측 팔 전면 합계 9%를 합하면 TBSA는 약 27%이다. 전통적 Parkland 계산은 4mL×55kg×27=5,940mL이므로 보기 A의 약 6L 정질액이 맞다. 절반은 화상 발생 시점부터 첫 8시간, 나머지는 다음 16시간에 주는 계산이며 도착 후부터 새로 8시간을 세지 않는다. 실제 치료는 소변량·관류에 따라 조정하고, 현행 성인 대화상 지침의 2mL/kg/% 초기 추정과는 구별한다. 흡입손상/기도 위험도 동시에 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Rule of nines 계산을 30%가 아닌 27%로 교정. 명시된 Parkland 교육계산과 현행 초기 수액 권고를 구별.
- 공식/학회 근거: https://academic.oup.com/jbcr/article/45/3/565/7458089
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005310
