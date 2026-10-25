---
type: qbank
schema_version: 1
id: medqa-us-train-002236
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5fbc09cfbdec0a619c3d926d1fdc7459b910b929195db00f4703c8442e83450c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "high-grade squamous intraepithelial lesion"
  - "cervical intraepithelial neoplasia"
  - "LEEP"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: simple
answer: B
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

25세 여성이 정기 건강검진을 위해 내원했다. 마지막 방문은 3년 전이었다. 건강하고 1년 전 셋째 아이를 출산한 후 난관절제술을 받았다. 복용 약물은 없다. 신체검사는 정상이다. 자궁경부 세포검사에서 고등급 편평상피내병변이 보인다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 레이저 절제술
B. 루프 전기수술적 절제술
C. 12개월 후 세포검사를 반복한다
D. 자궁내막 샘플링을 포함한 질확대경검사

## 해설

비임신 25세 이상 HSIL에서는 위험에 따라 질확대경·생검 또는 신속 절제를 상담한다. 선택지 중 LEEP(B)는 가능한 진단·치료 선택이지만 HPV 정보가 없는 이 사례에서 무조건 필수인 것은 아니다. 가임력과 이득·위험을 설명하며, 자궁내막 샘플링은 이 25세 HSIL 환자의 일률적 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 25세이상HSIL에서신속절제는선택가능하나 모든HSIL세포검사의필수표준은아님.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002236
