---
type: qbank
schema_version: 1
id: medqa-us-train-005674
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e9a1a460b4b2bfb391e967ec2c6f37f4b16211689a8033aaca41cf3d9a8debf7
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "간질부 임신"
  - "자궁외임신"
  - "난관-자궁 접합부 임신"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

임신반응이 양성인 24세 여성이 한쪽 골반통으로 왔다. 질식 초음파에서 자궁내막강은 비어 있고, 임신낭은 자궁 바깥쪽 모서리의 난관 벽내 부분에 있으며 그 주위 자궁근층이 3 mm로 얇다. 가장 의심되는 진단은?

## 선택지

A. 간질부 자궁외임신
B. 자궁경부 임신
C. 자궁내막강 안쪽에 착상한 정상 임신
D. 완전 포상기태

## 해설


자궁강 밖의 근위 난관이 자궁근층을 지나는 부분에 착상하면 간질부 임신이다. 얇은 근층이 임신낭을 둘러싸며 파열 때 큰 출혈이 생길 수 있어 신속히 전문 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005674
- https://pubmed.ncbi.nlm.nih.gov/33354626/
