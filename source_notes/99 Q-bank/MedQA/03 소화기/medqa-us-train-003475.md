---
type: qbank
schema_version: 1
id: medqa-us-train-003475
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa1736ba458b362c67c595a5450ab13105dc1cadcec07a1c37ab332a0f5dbe71
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "gastroesophageal reflux disease"
  - "dysphagia alarm symptom"
  - "esophageal stricture"
  - "upper endoscopy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7ZiR7LCpIChFc29waGFnZWFsIFN0cmljdHVyZSkubWQ
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

56세 여성이 커피와 기름진 음식으로 악화되는 속쓰림, 트림, 심와부 통증으로 내원했다. 최근에는 평소 증상에 더해 삼키기 어려운 증상도 생겼다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 니센 위저부주름술
B. 생활습관 변화 - 식후 눕지 않고, 매운 음식을 피하며, 소량씩 먹는다
C. H2 수용체 길항제 시험 투여
D. 상부 내시경

## 해설


위식도 역류증 환자에서 삼킴곤란은 알람 증상이며, 식도 협착 가능성을 배제하기 위해 상부 내시경이 필요하다. 치료만으로는 원인을 확인할 수 없다. 따라서 가장 적절한 다음 조치는 상부 내시경이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기존 GERD에 새 dysphagia는 경고증상, 상부내시경 D로 협착/악성 등 평가.
- https://doi.org/10.14309/ajg.0000000000001538

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003475
