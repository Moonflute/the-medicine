---
type: qbank
schema_version: 1
id: medqa-us-test-001213
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:61bb63b9f37641ffab3718f3d8d32bdb7019c41e8d771e789b12b6779caebe65
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "칼슘옥살산 결석"
  - "신장결석 예방"
  - "저염식"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: prevention
difficulty: standard
answer: B
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

47세 여성이 일주일 전 신장결석으로 응급실에 갔다가 4 mm 칼슘옥살산 결석을 배출한 후 재발 예방을 상담하러 왔다. 향후 신장결석 형성을 예방하는 가장 효과적인 방법은?

## 선택지

A. 칼슘 섭취 감소
B. 나트륨 섭취 감소
C. 견과류와 씨앗 섭취 증가
D. 크랜베리 주스로 소변 산성화

## 해설

정답은 B이다. 칼슘옥살산 결석에서 나트륨 섭취 감소는 요중 칼슘 배설을 줄이는 데 도움이 된다. 식이 칼슘을 과도하게 제한하면 장내 옥살산 흡수가 증가할 수 있어 일반적으로 정상 섭취를 유지한다. 견과·씨앗의 과량 섭취는 옥살산 부하를 늘릴 수 있다. 충분한 수분 섭취도 중요하며 B는 제시된 선택지 중 적절한 예방법이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 나트륨이 소변 칼슘 배설을 높이는 기전과 식이 칼슘 정상 섭취를 구별.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001213
