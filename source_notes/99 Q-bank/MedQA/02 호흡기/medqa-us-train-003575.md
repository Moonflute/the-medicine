---
type: qbank
schema_version: 1
id: medqa-us-train-003575
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e77e5ae58ab7a467d4a5944c5c202e4952e78c12453d7206c058d5efc8da3347
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "exocrine pancreatic insufficiency"
  - "nasal polyps"
  - "congenital bilateral absence of vas deferens"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 남아가 반복되는 호흡기 감염과 올해 일곱 번째 부비동염 치료 후 추적 진료를 받으러 왔다. 어릴 때부터 부피가 크고 악취 나는 기름진 변이 있었으며 키와 체중은 각각 10백분위수와 5백분위수였다. 비강에는 여러 비강용종이 있었다. 추가 평가에서 가장 가능성 높은 소견은?

## 선택지

A. 아스피린 과민성
B. 정관 결손
C. 선택적 IgA 결핍
D. 메타콜린 유발검사 양성

## 해설


낭포성 섬유증은 췌장 외분비부전으로 지방변이 크고 악취가 나며, 비강 용종과 함께 선천성 양측 정관 결손이 동반된다. 따라서 가장 가능성 높은 소견은 정관 결손이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 호흡기감염·비용종·지방변·성장부진의 CF에서 정관 결손 B가 연관.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003575
