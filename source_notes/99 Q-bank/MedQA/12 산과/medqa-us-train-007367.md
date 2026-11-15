---
type: qbank
schema_version: 1
id: medqa-us-train-007367
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3239d0d0bc87b448cf29babcee079e0ee999a6e7909b51954972563be9e07a14
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "다운증후군"
  - "목덜미 투명대 증가"
  - "융모막융모검사"
  - "산전 선별검사"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
difficulty: simple
answer: C
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

임신 13주 산모의 태아 목덜미 투명대가 4.5 mm다. 상담 후 기다리지 않고 염색체 진단검사를 받길 원한다. 현재 주수에 시행할 수 있는 검사는?

## 선택지

A. 모체 혈액 세포유리 DNA 검사
B. 모체 혈청 쿼드검사
C. 융모막융모검사
D. 임신 13주에 통상 시행하는 양수검사

## 해설

융모막융모검사는 이 시기에 시행할 수 있는 침습적 진단검사다. 양수검사는 보통 15주 이후에 하며, 혈액 선별검사로 염색체 이상을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CVS가 모든 확진법보다 정확하다는 과장 대신 13주 시점 적합성을 설명.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2026/01/screening-for-fetal-chromosomal-abnormalities

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007367
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7834900/
- https://pubmed.ncbi.nlm.nih.gov/33496085/
