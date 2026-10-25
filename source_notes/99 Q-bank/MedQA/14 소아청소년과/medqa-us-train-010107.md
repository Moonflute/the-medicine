---
type: qbank
schema_version: 1
id: medqa-us-train-010107
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:409f042d4ac1bbe6963aa83d57498b02cf368e0681d6047122e63a5d0d152c02
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 패혈증"
  - "조기 양막 파수"
  - "경험적 항생제"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 5일, 체중 2,200g인 남아 신생아가 수유 곤란과 보챔으로 내원했다. 양막 조기 파수가 합병된 임신 36주에 태어났고 아프가 점수는 1분 5점, 5분 8점이었다. 기면 상태이며 체온 38.5°C, 맥박 분당 170회, 호흡수 분당 63회이다. 공막 황달, 늑골하 함몰, 콧벌렁거림, 모세혈관 재충만 시간 4초가 보인다. 검사와 흉부 X선 촬영을 예약했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 메티마졸 치료
B. 계면활성제 치료
C. 암피실린과 겐타마이신 치료
D. 기관내 삽관

## 해설

발열·기면·수유 저하·호흡곤란과 관류 저하는 신생아 패혈증을 의심하게 한다. 보기 중 ampicillin과 gentamicin(C)의 즉각적 경험적 항생제 치료가 적절하다. 가능하면 신속히 배양을 얻되 영상이나 검사 결과를 기다려 항생제를 지연하지 않고 호흡·순환 지지를 병행한다. 수막염 가능성과 지역 내성에 따라 요법을 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신생아 패혈증의 항생제를 검사 예약 때문에 지연하지 않으며 안정화도 병행하도록 명확화.
- https://www.rch.org.au/clinicalguide/guideline_index/Recognition_of_the_seriously_unwell_neonate_and_young_infant/
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010107
