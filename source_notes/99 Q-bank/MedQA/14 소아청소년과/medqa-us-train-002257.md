---
type: qbank
schema_version: 1
id: medqa-us-train-002257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3568d13762223f5770d0164f946f84d317a3eaa50d95d4a9a362fd5229b96860
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "gastroesophageal reflux disease"
  - "infant reflux"
  - "thickened feeds"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
difficulty: complex
answer: D
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

3개월 분유수유 영아가 대부분의 수유 뒤 눈에 띄게 많이 게운다. 수유량과 조유 방법을 점검해 과량 수유를 줄였지만 계속된다. 체중은 잘 늘고 피나 담즙이 섞인 구토와 수유 거부는 없다. 증상 완화에 추가로 고려할 조치는?

## 선택지

A. 검사 없이 장기 양성자펌프억제제를 시작한다
B. 잠잘 때 경사면에 옆으로 눕힌다
C. 일반 분유를 물에 더 묽게 탄다
D. 소아 진료팀과 함께 농축 수유를 시도하고 성장과 반응을 본다

## 해설

위험 신호 없이 눈에 보이는 역류가 지속되면 수유량을 점검한 뒤 농축 수유를 고려할 수 있다. 수면 시에는 계속 평평한 면에 바로 눕힌다. 수유 거부나 성장 둔화가 새로 나타나면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 역류와 수유거부·성장 백분위 하락의 수유농축 B 유지. 위험 수면 자세를 배제하고 추적 필요성 보완.
- https://www.rch.org.au/clinicalguide/guideline_index/gastrooesophageal_reflux_disease_in_infants/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002257
- https://naspghan.org/wp-content/uploads/2024/01/PedGERD-Summary-revised-January-2024.pdf
