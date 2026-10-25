---
type: qbank
schema_version: 1
id: medqa-us-train-000593
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86421330fa1bd8c4f793ba060b48069a251d26731250582cb4b58043569926e4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Gustilo IIIC injury"
  - "comminuted fracture"
  - "peroneal nerve injury"
  - "asthma"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
difficulty: standard
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

23세 남성이 자동차 사고 후 구급차를 통해 응급실로 이송되었다. 그는 몇 시간 동안 두 차량 사이에 끼어 있었다. 환자는 천식 병력이 있다. 그는 간헐적으로 알부테롤(albuterol) 흡입기를 사용한다. 환자는 운전자가 아니었으며, 사고 전 파티에서 맥주를 몇 잔 마셨다고 인정했다. 구급차 내에서의 활력 징후는 안정적이었다. 응급실 도착 즉시 환자는 평가 및 수술적 개입을 위해 수술실로 이송되었다. 환자의 오른쪽 다리는 경골 중간 부위의 Gustilo IIIC 손상과 심한 분쇄 골절이 있는 것으로 확인되었다. 왼쪽 다리도 유사한 손상을 입었으나 비골 신경(peroneal nerve) 손상이 동반되었다. 마취과 의사가 마취 유도를 시작한다. 이 환자에게 금기인 약물은 무엇인가?

## 선택지

A. 에토미데이트(Etomidate)
B. 할로탄(Halothane)
C. 네오스티그민(Neostigmine)
D. 석시닐콜린(Succinylcholine)

## 해설

양측 하지의 심한 압궤·혈관 손상과 장시간 압박은 횡문근 손상 및 고칼륨혈증 위험을 높인다. 탈분극성 근이완제 석시닐콜린(D)은 혈중 칼륨을 더 높일 수 있어 이 상황에서 피할 약으로 선택한다. 천식 자체가 석시닐콜린의 보편적 금기이거나 악성고열 소인을 의미하지는 않는다. 외상 후 탈신경·수용체 증가에 따른 별도의 금기는 급성기 이후 시간경과에 따라 발생하므로 몇 시간 된 손상을 그 기전과 곧바로 동일시하지 않는다. 실제로는 칼륨·근육손상과 대체 근이완제를 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 석시닐콜린 위험을 천식·히스타민·악성고열로 혼동한 해설을 광범위 압궤 손상과 고칼륨 위험으로 교정했다. 손상 후 수시간만으로 만성 탈신경 과민이 이미 생겼다고 단정하지 않는다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b990f84-9515-44bd-a97d-a97bbead065c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000593
