---
type: qbank
schema_version: 1
id: medqa-us-train-008501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d5dc41b446856a60231e6431526b2fd854bf46b2d21e3e3f233366f30c6262e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperosmolar hyperglycemic state"
  - "type 2 diabetes mellitus"
  - "hyperglycemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 65세 여성이 배뇨통과 다뇨 뒤 심한 탈수와 혼돈으로 내원했다. 혈당 980 mg/dL, 혈청 Na 140 mmol/L, 유효 삼투질농도 334 mOsm/kg, pH 7.38, 중탄산염 24 mmol/L, 혈중 β-하이드록시부티레이트 0.8 mmol/L이다. 혈당 이상에 따른 진단은?

## 선택지

A. 당뇨병성 케톤산증
B. 당뇨병성 케톤산증과 고삼투압성 위기의 혼합
C. 정상혈당 케톤산증
D. 고삼투압성 고혈당 상태

## 해설


심한 고혈당과 고삼투압이 있으나 유의한 케톤혈증이나 대사성 산증이 없어 고삼투압성 고혈당 상태에 맞는다. 동반 요로감염 여부를 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008501 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 D와 다른 저혈당 해설을 사례에 맞춘 HHS 의심 설명으로 교체; 본문에 없는 저혈당 소견·검사값 추가 금지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/11343900/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008501
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.2337/dci24-0032
