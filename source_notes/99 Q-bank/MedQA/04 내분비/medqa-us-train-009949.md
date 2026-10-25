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

57세 여성이 건강검진을 위해 내원했다. 과거력으로 제2형 당뇨병과 심근경색 병력이 있다. 아스피린, 리시노프릴, 메토프롤롤, 아토르바스타틴, 메트포르민을 복용한다. HbA1c는 7.9%, 공복혈당은 8.9 mmol/L(160 mg/dL)이다. 다음 중 이 환자에서 엑세나타이드 사용에 관한 가장 올바른 설명은?

## 선택지

A. 메트포르민과 병용할 수 없다.
B. 심혈관계 결과를 개선하지 않는다.
C. 이 약물을 사용하는 환자에서 저혈당 위험이 높다.
D. 이 약물은 인슐린과 병용해서는 안 된다.

## 해설


정답 B. EXSCEL에서 주1회 exenatide는 주요 심혈관사건에 대해 위약 대비 비열등성을 보였으나 유의한 우월성은 입증하지 못했다. 따라서 B의 의미는 심혈관 이득이 증명된 약제로 선택하는 근거가 없다는 것이지 어떤 이득도 절대로 없다고 입증됐다는 뜻은 아니다. 일부 다른 GLP-1RA의 입증된 심혈관 이득을 exenatide에 그대로 적용하지 않는다. Metformin 병용이 가능하며 insulin/SU 없이는 저혈당 위험이 낮다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009949 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: exenatide 자체의 MACE 감소 입증과 class효과를 혼동한 해설 교정; B를 효과 없음 확정 아닌 superiority 미입증으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nejm.org/doi/abs/10.1056/NEJMoa1612917

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009949
