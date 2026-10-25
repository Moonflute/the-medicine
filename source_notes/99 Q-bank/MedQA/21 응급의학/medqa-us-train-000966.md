---
type: qbank
schema_version: 1
id: medqa-us-train-000966
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8513724826975fed17b19d38b25f527dd0faa1ff9cb5df3907e581ad20dfe916
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "caustic ingestion"
  - "chemical burn"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlO2VmeusvOyniO2ZlOyDgSAoQ2hlbWljYWwgQnVybikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 변기 세정제 한 병을 마신 후 1시간 동안 지속된 복통으로 어머니와 함께 응급실에 내원했다. 어머니는 아이가 병원으로 오는 길에 한 번 구토를 했으며 구토물에 혈액은 섞여 있지 않았다고 보고했다. 환아는 연하통(pain with swallowing)을 호소한다. 환아는 불편해 보인다. 맥박 산소포화도 측정 결과 산소포화도는 82%이다. 진찰 결과 심한 타액 분비가 관찰된다. 구강 검사상 경미한 구강 홍반과 후두개(epiglottis) 부위의 홍반이 관찰되나 화상은 없다. 흉부 X-선 검사상 이상 소견은 없다. 환아는 중환자실에 입원했다. 기관 삽관이 시행되었고 산소 공급과 정맥 수액 소생술이 시작되었다. 오염된 옷은 모두 제거되었다. 이 환아의 치료를 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 상부 위장관 내시경 검사 시행
B. 위 세척 시행
C. 바륨 상부 위장관 조영술 시행
D. 활성탄 투여

## 해설

부식성 세정제 섭취 후 연하통·침흘림·구토·저산소증이 있어 기도를 먼저 확보하고 안정화한 뒤 상부 위장관 내시경(A)으로 손상 정도를 평가한다. 증상성 환자에서는 일반적으로 섭취 후 12–24시간 내 평가를 고려한다. 구강 화상이 보이지 않아도 식도·위 손상은 배제되지 않는다. 위세척·구토 유도·활성탄은 부식제 손상을 평가·치료하는 적절한 대안이 아니다. 천공 등 금기가 의심되면 내시경 전 별도 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 입안에 화상이 없다는 원문을 화학화상이 확인된 것처럼 바꾼 해설을 수정했다. 기도 확보 후 증상성 부식제 섭취의 내시경 A는 유지한다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Corrosives_-_Caustic_Poisoning/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000966
