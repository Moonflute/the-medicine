---
type: qbank
schema_version: 1
id: medqa-us-train-003773
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3724123ad74624665eacc47a353901a233b8f4aab9636566d947d874462bc24
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "uterine rupture"
  - "prior classical cesarean"
  - "fetal bradycardia"
  - "loss of fetal station"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2ge2MjOyXtCAoVXRlcmluZSBSdXB0dXJlKS5tZA
difficulty: complex
answer: A
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

이전 조산 때 고전적 제왕절개를 받았고 수술기록상 자궁체부에 세로로 절개했다. 이번 임신에서 경과가 안정적일 때 분만 상담으로 맞는 설명은?

## 선택지

A. 자궁파열 위험이 높아 진통 전에 계획 제왕절개를 준비한다
B. 피부 흉터가 가로라면 자궁 절개와 무관하게 질식분만을 권한다
C. 이번 태아가 두위이면 이전 자궁 절개 위치는 고려하지 않는다
D. 진통을 오래 유도하면 상부 자궁 흉터의 파열 위험이 낮아진다

## 해설

상부 자궁체부의 고전적 수직절개는 하부 횡절개보다 자궁파열 위험이 높다. 피부 흉터로 자궁 절개를 추정하지 말고 수술기록을 확인해 진통 전 제왕절개를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 상부 자궁 반흔의 위험을 하부 횡절개로 뒤집어 쓴 해설을 원문 자궁저부 제왕절개에 맞게 교정했다.
- https://www.acog.org/womens-health/faqs/vaginal-birth-after-cesarean-delivery

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003773
- https://doi.org/10.1002/ijgo.70406
