---
type: qbank
schema_version: 1
id: medqa-us-train-000691
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5a7abbfa9bb5c22f0ad58fb5d819e5fc7b6a0881922c5ce738352bdfb479411
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Polycystic ovary syndrome"
  - "Congenital adrenal hyperplasia"
  - "Turner syndrome"
  - "Aromatase deficiency"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 46,XX 청소년은 출생 때 외부 생식기의 남성화가 있었고, 어머니도 당시 임신 중 목소리가 굵어지고 다모가 생겼다. 현재 유방 발달과 초경이 없고 자궁은 있으며 FSH가 높고 에스트라디올이 낮다. 가능성이 높은 원인은?

## 선택지

A. 21-수산화효소 결핍
B. 뮐러관 무형성
C. 완전 안드로겐 불감증
D. 아로마타제 결핍

## 해설

태반에서 안드로겐을 에스트로겐으로 전환하지 못하면 산모와 46,XX 태아 모두 남성화될 수 있다. 출생 후 에스트로겐 부족으로 유방 발달이 없고 성선자극호르몬이 높다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무의미한고키톤표현제거. 모체/태아남성화·유방미발달·골취약의아로마타제결핍D기전.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000691
- https://pubmed.ncbi.nlm.nih.gov/32623730/
