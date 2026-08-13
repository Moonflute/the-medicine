---
type: qbank
schema_version: 1
id: medqa-us-train-008068
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a421ca2c95cf718e2614281dd51b67fd63f6edc1771a5a204bd8cfe5d3e64e0
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "amiodarone hepatotoxicity"
  - "transaminitis"
  - "drug-induced liver injury"
related_disease_slugs:
  - MTEg7Jm46rO8L-qwhCDshpDsg4EgKExpdmVyIEluanVyeSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
---

# MedQA US 임상문제

## 문제

63세 남자가 정기 건강검진을 위해 내원했다. 고혈압, 심방세동, 양극성장애, 무릎 골관절염이 있고 리시노프릴, 아미오다론, 라모트리진, 아세트아미노펜을 복용한다. 6개월 전 아미오다론을 시작했고 4개월 전 리튬을 라모트리진으로 변경했다. 활력징후와 진찰은 정상이다. AST 110 U/L, ALT 115 U/L이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 아미오다론 중단
B. 아세트아미노펜 중단
C. 6개월 후 검사 결과 추적
D. 음주 감소

## 해설


아미오다론은 간독성을 일으킬 수 있으므로 AST/ALT 상승 시 약물을 중단하는 것이 우선이다. 다른 선택지는 간독성 원인과 무관하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008068
