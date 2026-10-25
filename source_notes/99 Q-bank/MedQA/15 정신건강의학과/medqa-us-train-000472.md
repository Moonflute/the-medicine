---
type: qbank
schema_version: 1
id: medqa-us-train-000472
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:629c3a650efd8b6b432d4bf52d281c29c367876080ac41f1096d796e8629e935
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "serotonin syndrome"
question_type: mechanism
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 지난 2시간 동안 발생한 두통과 식은땀 증가로 응급실에 내원했다. 환자는 또한 두근거림과 메스꺼움을 호소한다. 어제, 환자는 치료 저항성 우울증 치료를 위해 벤라팍신(venlafaxine)을 새로 처방받았다. 환자는 4주 동안 시탈로프람(citalopram)을 복용했으나, 우울 증상이 호전되지 않아 3일 전에 중단했다. 흡연이나 음주는 하지 않는다. 체온은 39°C(102.2°F), 맥박은 120회/분, 혈압은 150/90 mm Hg이다. 정신 상태 검사에서 환자는 사람에 대해서만 지남력이 있고, 장소나 시간에 대한 지남력은 없다. 검사상 모든 사지에서 떨림이 관찰된다. 보행 장애가 있다. 심부건 반사는 양측 모두 3+이다. 이 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 비정상적인 라이아노딘 수용체(ryanodine receptor)
B. 중추신경계 세로토닌 활성 증가
C. 도파민 수용체 차단
D. 항콜린성 독성

## 해설

새 벤라팍신 투여 후 고열·발한·혼돈·떨림과 항진된 반사는 과도한 세로토닌성 활성(B)에 의한 세로토닌증후군을 시사한다. 최근 중단한 시탈로프람이 남아 있을 가능성과 새 SNRI의 작용이 관련될 수 있다. SSRI 중단 자체가 세로토닌 재흡수 억제를 증가시킨다는 뜻은 아니다. 공식 허가정보도 SNRI/SSRI 단독 또는 다른 세로토닌성 약물과 함께 사용할 때 이 증후군을 경고한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: SSRI 중단 자체가 재흡수 억제를 증가시킨다는 해설을 잔존 약물과 새 SNRI의 세로토닌성 작용으로 교정했다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b23e4bd-b6ab-42f2-b389-0be0b7e11b92

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000472
