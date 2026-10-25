---
type: qbank
schema_version: 1
id: medqa-us-train-007250
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64b1364f1163cd10b7574432507d336042f9fbff1910136dca52cef996c86e90
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "경증 지속성 천식"
  - "천식 조절"
  - "부데소니드-포르모테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL01vbWV0YXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남자가 지난 4개월 동안 반복되는 호흡곤란과 비생산성 기침으로 내원했다. 일주일에 두 번 증상이 발생하고 휴식하면 저절로 호전된다. 한 달에 두 번 밤에 호흡곤란으로 깬다. 맥박은 73회/분, 호흡수는 13회/분, 혈압은 122/70 mmHg이며 실내 공기 산소포화도는 98%이다. 신체검사에서 이상은 없다. 폐활량검사에서 FVC 95%, FEV1/FVC 0.85, FEV1은 예측치의 81%이다. 다음 중 가장 적절한 초기 약물치료는 무엇인가?

## 선택지

A. 부데소니드와 포르모테롤 흡입기
B. 플루티카손 흡입기
C. 경구 몬테루카스트 나트륨
D. 모메타손 흡입기와 경구 자피를루카스트

## 해설

이 정도의 증상 빈도를 보이는 성인에서 A의 저용량 부데소니드/포르모테롤을 필요할 때 항염증 완화제로 사용하는 것은 GINA가 선호하는 초기 전략이다. 경증 천식이라도 SABA 단독이 아니라 ICS를 포함한 치료가 필요하다. 모든 환자에게 정기적인 고용량 ICS/LABA가 필수라는 뜻은 아니며, 진단과 흡입기 사용법, 치료 반응을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경증천식A를정기LABA병용만의보편1차가아닌필요시저용량ICS/formoterol로명료화.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007250
