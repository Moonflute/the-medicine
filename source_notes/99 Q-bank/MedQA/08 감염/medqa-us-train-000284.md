---
type: qbank
schema_version: 1
id: medqa-us-train-000284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cc262a8a0950d3702a7dbbff118eda5d5423063b3043b7c6fbceeeb61a76b6d5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infectious mononucleosis"
  - "scarlet fever"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISx7ZmN7Je0IChTY2FybGV0IEZldmVyKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

A군 사슬알균 신속항원검사 양성인 7세 아이가 인두염과 사포 같은 발진으로 왔다. 이전 페니실린 계열 약으로 아나필락시스를 겪었고, 이번 분리균의 아지트로마이신 감수성이 확인됐다. 적절한 항생제는?

## 선택지

A. 아목시실린
B. 세팔렉신
C. 아시클로버
D. 아지트로마이신

## 해설


즉시형 중증 페니실린 알레르기가 있으면 아목시실린과 세팔렉신을 피한다. 마크롤라이드 내성은 지역과 균주에 따라 달라 감수성이 확인된 이 사례에서는 아지트로마이신을 선택할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000284 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 갑상선염·결절성 발진 등 잘못 연결된 설명을 성홍열과 중증 즉시형 penicillin 알레르기 맥락으로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000284
- https://kdca.go.kr/bbs/kdca/55/304967/download.do
