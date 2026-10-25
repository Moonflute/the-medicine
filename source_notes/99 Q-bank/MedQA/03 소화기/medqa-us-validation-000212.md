---
type: qbank
schema_version: 1
id: medqa-us-validation-000212
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7190f7d26d1111752bc69699f8e2d0f116d8c2e2091b38d4a8615dad7db14e74
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "당뇨병성 위마비"
  - "파킨슨병"
  - "위배출 지연"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
---

# MedQA US 임상문제

## 문제

63세 남성이 파킨슨병과 제2형 당뇨병이 있으며 수개월간 조기 포만감, 복부팽만, 속쓰림, 소화되지 않은 음식의 비혈성 구토, 변비로 진료를 받았다. 내시경에서 암은 배제되었다. 가장 적절한 치료는?

## 선택지

A. 온단세트론
B. 스코폴라민
C. 양성자펌프억제제
D. 에리트로마이신

## 해설


정답 D. 조기 포만감·음식 정체성 구토는 당뇨병/파킨슨병 관련 위마비를 의심하게 한다. 선택지 중 erythromycin은 motilin 수용체 작용으로 위배출을 촉진하며 주로 단기간 사용한다. 내성화, QT 연장과 약물 상호작용을 고려해야 하므로 파킨슨 위마비의 보편적인 장기 일차약은 아니다. 식이·혈당 조절과 객관적 위배출 평가도 중요하며 metoclopramide 같은 중추 도파민 차단제는 파킨슨병에서 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000212 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: erythromycin D는 제시 선택지 중 운동촉진제이나 파킨슨 위마비의 무조건 1차 장기약이라는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9373497/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000212
