---
type: qbank
schema_version: 1
id: medqa-us-validation-000089
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1ec8b9598ff8e6851e60fcbe71498e2f1e947b955b53f1ad8e482b7726866e09
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "모소낭종 농양"
  - "모소동"
  - "절개배농"
  - "Pilonidal abscess"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

24세 남성이 앉기 힘들 정도로 엉덩이 사이 위쪽이 아프다. 정중선에 작은 개구부와 홍반을 동반한 파동성 부종이 있다. 항문 주변에는 이상이 없다. 급성 모소낭 농양에서 우선 할 처치는?

## 선택지

A. 절개 및 배농
B. 항생제만 처방하고 배농은 하지 않는다
C. 급성 염증 상태에서 광범위 절제와 정중선 일차 봉합
D. 항문 괄약근 절개

## 해설


급성 모소낭 농양은 우선 절개·배농한다. 감염 범위에 따라 항생제를 추가할 수 있으며 재발이나 지속되는 모소동에 대한 근본 치료는 급성 염증이 가라앉은 뒤 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000089 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모소농양 진단·절개배농 B는 유지하고 원문 위험요인과 진찰 맥락을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000089
- https://doi.org/10.1093/bjs/znae237
