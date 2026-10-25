---
type: qbank
schema_version: 1
id: medqa-us-validation-000017
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:c1aeb0c97c34fa25ba3ab5cd35effa10322330cb9c2432983a71c135ad662d77
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심장압전"
  - "심인성 쇼크"
  - "중심정맥압"
  - "Cardiogenic shock"
question_type: investigation
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: standard
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

22세 남성이 왼쪽 흉부 자상으로 응급실에 왔다. 창백하고 졸리며 땀이 나고 맥박이 약하며 수축기혈압 86 mmHg, 산소포화도 88%, 경정맥 팽창, 양쪽 폐음은 같고 심음은 약했다. 수액을 시작했다. 저혈량성 쇼크보다 심장 충만 장애에 의한 폐쇄성 쇼크를 시사하는 소견은?

## 선택지

A. 혈청 크레아티닌 증가
B. 높은 중심정맥압
C. 기저결핍과 대사성 산증을 보이는 동맥혈가스
D. 백혈구 수 4,000/mm³ 미만

## 해설

저혈압, 경정맥 팽창과 심음 감소는 관통성 외상 후 심장압전을 시사한다. 심낭압 상승으로 심장 충만이 제한되면서 정맥압이 상승할 수 있어 보기 B가 이 기전을 지지한다. 이는 수축 기능 부전으로 정의되는 심인성 쇼크보다는 심장압전에 의한 폐쇄성 쇼크이다. 높은 CVP 자체는 심장압전에 특이적이지 않으며, 크레아티닌 상승이나 대사성 산증도 다른 쇼크에서 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 관통 흉부외상의 압전 소견은 심인성 수축 기능 부전보다 폐쇄성 충만 장애에 해당한다. 높은 CVP B의 출제 의도를 유지하면서 잘못된 쇼크 분류를 최소 교정한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000017
