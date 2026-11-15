---
type: qbank
schema_version: 1
id: medqa-us-train-006416
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec9f38b02d66d1a986706f074025dcac8172ecd4c99b8e91d8ce7208ec9cdcba
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "일차 매독"
  - "매독 하감"
  - "트레포네마 팔리둠 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

3주 전 통증 없는 생식기 궤양이 생겼다가 사라진 환자다. 치료력은 없고 정량 RPR과 트레포네마 특이 항체검사가 양성이다. 신경·안과·이과 증상이 없고 페니실린 알레르기도 없다. 적절한 치료는?

## 선택지

A. 벤자틴 페니실린 G를 1주 간격으로 총 3회 근육주사
B. 벤자틴 페니실린 G 근육주사 1회
C. 수용성 페니실린 G 10~14일 정맥 투여
D. 궤양이 사라졌으므로 치료하지 않는다

## 해설


최근에 발생한 경성하감 병력이 명확한 초기 매독은 벤자틴 페니실린 G 근육주사 1회로 치료한다. 궤양이 저절로 사라져도 감염이 없어졌다는 뜻은 아니며, 치료 뒤 혈청 역가를 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006416 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 남성 환자에 임신 가능 연령을 근거로 penicillin을 설명한 오연결 교정; D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006416
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
