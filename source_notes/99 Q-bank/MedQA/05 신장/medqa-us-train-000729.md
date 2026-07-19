---
type: qbank
schema_version: 1
id: medqa-us-train-000729
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:77a60a654d49195f6002ad4e2f3333329b0c865eb86984fa1da6ea9e7fe61602
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "type 2 diabetes mellitus"
  - "hypertension"
  - "chronic atrial fibrillation"
  - "ischemic cardiomyopathy"
  - "hyperkalemia"
  - "chronic renal failure"
  - "renal tubular acidosis"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 남성이 정기 검진을 위해 일차 진료 의원을 방문했다. 과거력상 제2형 당뇨병, 고혈압, 만성 심방세동, 허혈성 심근병증이 있다. 3개월 전 마지막 방문 시 고칼륨혈증이 발견되어 당시 복용 중이던 lisinopril과 spironolactone을 중단했다. 현재 복용 중인 약물은 coumadin, aspirin, metformin, glyburide, metoprolol, furosemide, amlodipine이다. 체온은 37도, 혈압 154/92 mmHg, 심박수 80회/분, 호흡수 16회/분이다. 신체 검진상 경정맥압 상승, S3 심음, 1+ 함요 부종이 관찰된다. 이번 방문 시 시행한 반복 검사 결과는 다음과 같다: 나트륨 138 mEq/L, 칼륨 5.7 mEq/L, 염화물 112 mEq/L, 중탄산염 18 mEq/L, BUN 29 mg/dL, 크레아티닌 2.1 mg/dL. 이 환자의 산-염기 및 전해질 이상을 유발한 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. Furosemide
B. 만성 신부전
C. 신세뇨관 산증
D. Amlodipine

## 해설


환자는 고칼륨혈증, 저중탄산혈증, 경미한 대사성 산증을 보이며, 이소성 이뇨제인 furosemide는 칼륨을 배설하므로 원인이 아니다. 만성 신부전은 고칼륨과 대사성 산증을 일으키지만, 환자는 급성 신세뇨관 산증(신세뇨관 산증)으로 인한 고칼륨과 비정상적인 산-염기 상태가 가장 일치한다. 따라서 원인은 신세뇨관 산증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000729
