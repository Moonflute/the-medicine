---
type: qbank
schema_version: 1
id: medqa-us-train-007531
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6f6f11baeddeff79251b55a407ab61e4b45eeade374cc169755c5fb9627eeb9b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 HGSIL"
  - "고등급 편평상피내병변"
  - "질확대경검사"
  - "자궁경부 생검"
  - "Cervical intraepithelial neoplasia"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 10주 산모의 자궁경부 세포검사에서 고등급 편평상피내병변(HSIL)이 나왔다. 침윤암을 배제하기 위한 다음 조치는?

## 선택지

A. 조직 평가 없이 임신 중 LEEP부터 시행
B. 질확대경으로 평가하고 의심되는 부위를 필요한 경우 생검
C. 자궁경부관 소파술을 우선 시행
D. 고등급 소견도 출산할 때까지 평가하지 않음

## 해설

임신 중에도 HSIL이면 질확대경으로 침윤 가능성을 평가하고 필요시 표적 생검한다. 자궁경부관 소파술은 하지 않으며 암이 의심되지 않는 한 절제 치료는 보통 산후로 미룬다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 중 HSIL의 질확대경·적응증별 생검 및 치료 제한 보강.
- https://www.asccp.org/wp-content/uploads/2025/09/ASCCP_Management-of-Abnormal-Cervical-Cancer-Screening-Tests-in-Pregnancy.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007531
- https://www.asccp.org/clinical-practice/practice-pearls/tips-for-best-practices-on-management-of-abnormal-cervical-cancer-screening-tests-in-pregnancy/
