---
type: qbank
schema_version: 1
id: medqa-us-train-009949
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15b2bcf6eeb6a9371bbdca3cd0b51c501b14cbe825ba2607e18856b60dc62ce6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "엑세나타이드"
  - "GLP-1 수용체 작용제"
  - "심혈관 결과"
  - "Type 2 diabetes mellitus"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: mechanism
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

심근경색 병력이 있는 57세 제2형 당뇨병 환자가 메트포르민을 복용 중이다. HbA1c는 7.9%다. 심혈관 사건 감소 효과가 입증된 GLP-1 수용체작용제를 추가하려면 보기 중 무엇을 고르는가?

## 선택지

A. 엑세나타이드
B. 둘라글루타이드
C. 릭시세나타이드
D. 시타글립틴

## 해설


GLP-1 수용체작용제라고 해서 심혈관 근거가 모두 같지는 않다. 둘라글루타이드는 심혈관 사건 감소가 입증됐다. 심혈관질환을 동반한 제2형 당뇨병에서는 이런 근거가 있는 약을 우선 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009949 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: exenatide 자체의 MACE 감소 입증과 class효과를 혼동한 해설 교정; B를 효과 없음 확정 아닌 superiority 미입증으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nejm.org/doi/abs/10.1056/NEJMoa1612917

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009949
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12620687/
