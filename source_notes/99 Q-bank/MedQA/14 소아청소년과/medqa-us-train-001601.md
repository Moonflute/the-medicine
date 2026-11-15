---
type: qbank
schema_version: 1
id: medqa-us-train-001601
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd0afa39d73be4b79301d7af999c7e2f3b11bb2d7224f562ed383e66486507b8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Duchenne muscular dystrophy"
  - "pseudohypertrophy"
  - "creatine kinase"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv65Kk7IS8IOq3vOuUlOyKpO2KuOuhnO2UvCAoRHVjaGVubmUgTXVzY3VsYXIgRHlzdHJvcGh5KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 남아가 자주 넘어지고 계단을 오르기 힘들어한다. 일어설 때 손으로 허벅지를 짚으며, 양쪽 종아리가 굵고 혈청 크레아틴키나아제는 정상 상한의 40배다. 뒤시엔 근이영양증을 확인할 검사는?

## 선택지

A. SMN1 유전자 복제수 검사
B. DMD 유전자 결실·중복 검사와 필요시 염기서열 분석
C. 신경전도검사 단독
D. 항아세틸콜린수용체 항체

## 해설


근위부 약화와 종아리 가성비대, 현저한 크레아틴키나아제 상승은 디스트로핀병증을 시사한다. DMD 유전자 검사가 일차 확진 검사이며, 결실·중복이 없으면 다른 병적 변이를 찾는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001601
- https://pubmed.ncbi.nlm.nih.gov/29395989/
