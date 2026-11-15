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

50세 남성이 기면과 심한 혼돈으로 응급실에 왔다. 혈청 나트륨은 115 mEq/L이고 혈청 삼투압은 낮다. 응급평가 중 흉부 영상에 폐문 종괴가 보인다. 저나트륨혈증으로 인한 신경학적 증상을 치료하기 위해 가장 먼저 할 일은?

## 선택지

A. 흉부 종괴의 조직검사가 끝날 때까지 기다린다
B. 이뇨제만 경구 투여한다
C. 혈청 나트륨과 신경 증상을 감시하며 3% 고장성 식염수를 투여한다
D. 수분 제한만 하고 다음 날 나트륨을 다시 확인한다

## 해설

중증 저삼투압성 저나트륨혈증에 기면과 심한 혼돈이 동반되면 뇌부종 위험이 있어 3% 고장성 식염수를 신속히 투여한다. 초기에는 증상을 완화할 만큼 교정하고, 나트륨을 반복 측정해 과교정을 피한다. 기저 원인은 동시에 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ADH를 부신호르몬으로 설명하고 고장성수액이 뇌부종을 악화시킨다는 역기전을 교정.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000487
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9351400/
