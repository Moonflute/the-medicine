---
type: qbank
schema_version: 1
id: medqa-us-train-006520
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dbdfd6fff03f71ed5f340f336a9dc85d2832661c43cd000e24e4f9270472fce5
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "파보바이러스 B19 감염"
  - "바이러스성 관절염"
  - "레이스 모양 발진"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIO2ZjeuwmCAoRXJ5dGhlbWEgSW5mZWN0aW9zdW0pLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

23세 여성이 미열과 콧물을 앓은 뒤 몸통에 레이스 모양 발진이 생기고 양쪽 손목·손가락 관절이 며칠 사이 붓고 아프다. 직장에서 최근 전염성 홍반에 걸린 아이를 돌봤다. 가장 가능성 높은 진단은?

## 선택지

A. 파보바이러스 B19 관절염
B. 전신홍반루푸스
C. 건선관절염
D. 통풍

## 해설


짧은 바이러스 전구증상 뒤 레이스 모양 발진과 대칭성 소관절염이 함께 나타나면 파보바이러스 B19 감염이 가장 가능성이 높다. 임신 중 노출이나 지속 증상이 있으면 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006520 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 바이러스 전구증상 뒤 짧은 기간의 대칭 손관절염과 레이스형 발진은 parvovirus B19 관절염 A에 부합한다. 원문·선지·해설을 직접 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006520
- https://www.cdc.gov/parvovirus-b19/about/index.html
