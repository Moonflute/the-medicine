---
type: qbank
schema_version: 1
id: medqa-us-train-001059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7905139c41ee48c434385f73b3d5c0e41abf1448ae1582214c4c66af0d83c731
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "chickenpox"
  - "pregnancy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
difficulty: complex
answer: C
publication_status: "withheld"
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

23세 여성이 수두 예방접종을 받으러 왔다. 수두에 걸린 적도 접종받은 적도 없고, 수두 IgG는 음성이다. 마지막 월경은 6주 전이고 소변 임신반응검사는 양성이다. 수두 백신 접종 시기는?

## 선택지

A. 오늘 바로 접종한다
B. 임신 2분기에 접종한다
C. 출산 후 접종한다
D. 수유가 끝날 때까지 접종을 미룬다

## 해설

수두 백신은 생백신이므로 임신 중에는 접종하지 않는다. 면역이 없는 임신부는 출산 후 접종할 수 있으며, 모유 수유가 끝날 때까지 기다릴 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 양성 소변검사 이후 모든 경우 혈청검사가 필수라는 과도한 설명 수정.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001059
- 부산광역시 감염병포털, 임신 중 접종 금기 백신: https://www.busan.go.kr/bsi/othervaccin
