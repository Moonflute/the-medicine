---
type: qbank
schema_version: 1
id: medqa-us-train-000487
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e3a68c63be5f58fe9f270dc665624de5cf2d421eb90a0319303fe2f3a15ac080
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "multiple sclerosis"
  - "central lung mass"
  - "lethargy"
  - "confusion"
  - "hyponatremia"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 지난 24시간 동안의 기면과 혼란으로 인해 아내에 의해 응급실로 이송되었다. 그는 또한 지난 1년간 가래가 동반된 기침을 해왔으며 지난 6개월 동안 10kg(22lb)의 체중 감소가 있었다. 그는 다발성 경화증(multiple sclerosis) 병력이 있으며 10년 넘게 급성 악화는 없었다. 지난 30년 동안 매일 담배 2갑을 피웠다. 그는 퇴근 후 매일 맥주 2잔을 마신다. 체온은 37.0°C(98.6°F), 맥박은 90회/분, 혈압은 130/90 mmHg, 호흡수는 22회/분이다. 진찰 결과, 환자는 기면 상태이며 자신의 이름이나 위치를 말하지 못한다. 신체 검진상 양측 폐에서 산재된 천명음(wheezing)이 들린다. 심부건 반사는 유도되지 않는다. 검사실 검사 결과는 다음과 같다: 혈청 Na+ 115 mEq/L, K+ 4.5 mEq/L, HCO3- 22 mEq/L, 포도당 70 mg/dL, 혈액요소질소(BUN) 8 mg/dL, 소변 삼투압 450 mOsmol/kg H2O, 소변 나트륨 70 mEq/L. 흉부 X-선 검사에서 중심부 폐 종괴가 확인되었다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 흉부 CT 촬영
B. 푸로세미드(furosemide) 투여
C. 고장성 식염수(hypertonic saline) 투여
D. 데메클로사이클린(demeclocycline) 투여

## 해설

정답은 C이다. Na115와 심한 혼돈·기면은 증상성 중증 저나트륨혈증으로 고장성 식염수의 신속하고 감시된 투여가 필요하다. 이는 초기 혈장 긴장도를 높여 저삼투성 뇌부종을 줄이기 위한 것이며, 과도한 교정은 삼투성 탈수초 위험을 일으킨다. 높은 요중 Na/삼투압과 중심 폐종괴는 SIADH를 시사한다. ADH는 부신에서 분비되는 호르몬이 아니며 종양의 이소성 분비도 가능하다. 반복 Na검사와 초기 증상 호전 목표 및 일일 교정한도를 지킨다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ADH를 부신호르몬으로 설명하고 고장성수액이 뇌부종을 악화시킨다는 역기전을 교정.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000487
