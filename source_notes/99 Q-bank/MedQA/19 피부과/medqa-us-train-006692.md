---
type: qbank
schema_version: 1
id: medqa-us-train-006692
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ba0205b92e6ab27ed6c3b3f62a13741af136cf93f34cf56e28f1b3371dee681
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "피부형 포르피린증"
  - "포르피리아 큐타네아 타르다"
  - "사혈 치료"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-2PrOultO2UvOumsOymnSAoUG9ycGh5cmlhKS5tZA
difficulty: standard
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

42세 여성에게 햇빛 노출 뒤 양손 등에 물집이 반복된다. 혈장 포르피린이 상승했으나 소변 ALA와 포르포빌리노겐은 정상이다. 만발성 피부 포르피린증으로 확인됐고 빈혈 없이 철 저장량이 높다. 철을 줄이는 치료는?

## 선택지

A. 아파멜라노타이드
B. 탄수화물 부하
C. 정맥 헤민
D. 사혈

## 해설

광노출 부위 수포와 포르피린 상승은 만발성 피부 포르피린증을 시사한다. 철 과다가 있고 빈혈이 없다면 치료적 사혈로 철 저장량을 줄일 수 있다. 간질환, C형간염과 음주 등 관련 요인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광노출 수포·porphyrin 증가의 PCT D를 광역성 포르피린증으로 오역한 용어와 치료 목적을 교정한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/porphyria-cutanea-tarda

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006692
