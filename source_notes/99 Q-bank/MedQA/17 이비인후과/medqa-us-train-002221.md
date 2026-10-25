---
type: qbank
schema_version: 1
id: medqa-us-train-002221
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c5cfc80cb2a7e928c13fcc826a5a94e98598ed747bad43f6a7772d3447c659f
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "ototoxicity"
  - "cisplatin"
  - "sensorineural hearing loss"
question_type: adverse_effect
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uPjOuwnOyEsSDrgpzssq0gKFN1ZGRlbiBzZW5zb3JpbmV1cmFsIGhlYXJpbmcgbG9zcykubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 일주일 전부터 알아챈 청력 저하로 일차진료의를 방문했다. 고혈압과 당뇨병이 있고 최근 방광암을 진단받아 적절히 치료 중이다. 사냥을 하며 여가 시간에 자주 사격한다. 최근 접촉한 손자는 귀 통증으로 아목시실린을 복용 중이다. 신체검사에서 양측 청력이 감소되어 있다. Weber 검사는 어느 쪽에도 편위되지 않고 Rinne 검사에서는 공기전도가 골전도보다 크게 나타난다. 다음 중 이 환자 청력 저하의 가장 가능성 높은 원인은?

## 선택지

A. 약물 요법
B. 외이도염
C. 중이염
D. 노인성 난청

## 해설

원정답은 A, 약물 요법이다. 양측 청력저하가 새로 생겼지만 Rinne 검사에서 공기전도(AC)가 골전도(BC)보다 크고 Weber가 편위되지 않는 것은 대칭성 감각신경성 난청과 양립한다. 이를 양측 전도성 난청이라고 해석하면 안 되며, 음차검사만으로 정상 청력과 감각신경성 난청을 완전히 구분할 수도 없다. 최근 방광암 치료라는 맥락은 시스플라틴 같은 이독성 약물의 영향을 시사하지만 실제 약제명은 본문에 없으므로 이는 출제 맥락상 추론이지 확인된 복용 사실이 아니다. 방사선치료를 받았다는 정보도 없다. 노인성/소음성 난청도 고려하되 일주일 동안 새로 인지한 변화는 약물 확인과 청력검사를 요한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. AC>BC를 전도성 난청이라고 한 오류와 본문에 없는 방사선치료/시스플라틴 투여 단정 제거. 약물성 이독성은 치료 맥락상 추론임을 명시. 원정답 A 유지.
- 공식/학회 근거: https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8d170f6f-37d7-41ce-aae2-33307a6ef3ae
- 공식/학회 근거: https://www.nidcd.nih.gov/health/age-related-hearing-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002221
