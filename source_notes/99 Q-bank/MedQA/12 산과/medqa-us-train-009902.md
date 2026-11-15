---
type: qbank
schema_version: 1
id: medqa-us-train-009902
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:beecbb53d78626e87277027c20bde52629a5e8bc47c8b0262c6d954306a2c50e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "목덜미 투명대"
  - "다운증후군 선별"
  - "PAPP-A"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
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

임신 12주에 태아 목덜미 투명대가 뚜렷하게 증가했다. 침습적 염색체 검사 결과는 정상이었으며 현재 임신 19주다. 다음 평가로 적절한 것은?

## 선택지

A. 정밀 구조 초음파와 태아 심장초음파
B. 염색체가 정상이므로 구조 평가는 필요 없다
C. 모체 혈청 쿼드검사만 시행
D. 분만 직전까지 추가 초음파를 하지 않는다

## 해설

목덜미 투명대 증가가 있었으면 염색체 검사 결과가 정상인 경우에도 심장 등 구조 이상 위험이 남는다. 국내 모체태아의학 지침은 2삼분기 정밀초음파와 태아 심장초음파를 권고한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: NT를 비특이 정상변이로 치부하지 않고 선별·진단 구분 및 CRL 범위 제한 명시.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2026/01/screening-for-fetal-chromosomal-abnormalities

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009902
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7834900/
