---
type: qbank
schema_version: 1
id: medqa-us-train-008232
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50eb5e681a0bea8e8d7bd35d2f33cb8c3c017af4bf22e0603d44bd327902e6fb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Ebstein anomaly"
  - "prenatal lithium exposure"
  - "tricuspid valve displacement"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jeh7Iqk7YOA7J24IOq4sO2YlSAoRWJzdGVpbiBBbm9tYWx5KS5tZA
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

양극성장애와 원인 불명의 심장 부정맥 병력이 있는 19세 여성이 두근거림과 흉통으로 내원했다. 리튬과 프로카인아미드를 정기적으로 복용했지만 2주 전 약이 떨어져 재처방을 받지 못했다. 혈압 130/90 mm Hg, 맥박 110회/분, 호흡수 18회/분이며 심전도에서 간헐적인 심실상성 빈맥성 부정맥과 우각차단이 보인다. 심초음파에서 우심방 확장과 삼첨판이 심첨 쪽으로 내려간 소견이 있다. 이 환자가 태아기에 노출되었을 가능성이 가장 높은 약물은?

## 선택지

A. 기분안정제
B. 항우울제
C. 인슐린
D. 항고혈압제

## 해설

삼첨판의 심첨부 전위와 우심방 확장은 엡스타인 기형에 합당하다. 태내 리튬 노출은 이 기형과 연관되어 있어 선택지 중 기분안정제(A)가 적합하다. 환자 본인의 현재 리튬 복용이나 중단 이력은 어머니의 임신 중 복용을 입증하지 않으며, 모든 엡스타인 기형이 리튬 노출로 생기는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 환자 본인의 현재 리튬 복용을 태내 노출의 증거로 오인한 설명을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008232
