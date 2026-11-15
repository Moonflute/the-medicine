---
type: qbank
schema_version: 1
id: medqa-us-train-007941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a09a885ae6590c3b9fe697b33b9f2c14f8db4ed2609302c401f67f3829bd84c3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic peripheral neuropathy"
  - "microvascular damage"
  - "type 2 diabetes mellitus"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: investigation
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
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 64세 남성이 양쪽 발바닥이 무디다고 한다. 발 피부는 온전하고 맥박은 촉지된다. 진동감각 검사와 함께 발 궤양 위험을 높이는 보호감각 소실을 확인할 검사는?

## 선택지

A. 발목상완지수
B. 표재정맥 도플러 초음파
C. 발목 단순촬영
D. 10g 모노필라멘트 검사

## 해설


10g 모노필라멘트로 발바닥 보호감각을 평가한다. 포괄적 발 검진에서는 진동감각 등 다른 신경검사와 함께 피부·변형·말초혈류도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007941 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 당뇨신경병증의 미세혈관 손상 D는 기전 일부이며 B12 위험·정상MCV의 한계 언급; 원문 약제 누락만으로 정상판정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/diabeticnerveproblems.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007941
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
