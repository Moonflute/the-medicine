---
type: qbank
schema_version: 1
id: medqa-us-validation-000203
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7e6aa09709b01025d98f863360fbfd57507e878547ddc38cead9e1ed9d20c233
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "분만 진행 정지"
  - "활동성 진통"
  - "양막 파수"
  - "Arrest of labor"
question_type: management
related_disease_slugs: []
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

임신 39주 산모의 양막이 파열됐고 자궁경부는 6 cm 열려 있다. 옥시토신 투여 중 내압 카테터로 적절한 자궁수축을 확인했으나 4시간 동안 더 열리지 않았다. 태아 감시 결과는 정상이다. 다음 처치는?

## 선택지

A. 활동기 진행 정지로 판단해 제왕절개를 시행한다
B. 흡입분만을 시행한다
C. 경부가 완전히 열릴 때까지 정지로 판단할 수 없다
D. 양수주입으로 자궁수축을 강화한다

## 해설

양막파수 후 6 cm 이상에서 충분한 수축에도 4시간 이상 개대에 변화가 없으면 활동기 정지다. 수축이 불충분하면 옥시토신 투여 중 더 긴 관찰을 고려하며, 이 케이스는 적절한 수축이 확인됐다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 활동기 정지의 요건과 자궁내압 평가 가능성을 명시.
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000203
- https://doi.org/10.1097/AOG.0000000000005447
