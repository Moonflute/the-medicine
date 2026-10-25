---
type: qbank
schema_version: 1
id: medqa-us-validation-000620
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a77be443e616a961540032398f5c1f27fbfd1c4addc0ee6148e1e345af622b5d
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부 선암"
  - "침윤성 자궁경부암"
  - "변형 근치적 자궁절제술"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
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

무증상 51세 여성의 질확대경에서 자궁경부 후순에 국한된 직경 2 cm 가시 병변이 보였다. 자궁경부 생검에서 선상피세포의 핵 과염색·비대, 유사분열 증가, 샘 융합, 간질 8 mm 침윤이 확인되었다. 병변은 자궁경부에 국한되어 있고 흉부 X선과 복부 초음파는 정상이다. 적절한 치료는?

## 선택지

A. 루프 전기절제술
B. 변형 근치적(베르트하임) 자궁절제술
C. 백금 기반 화학요법
D. 양측 난관난소절제술을 동반한 단순 자궁절제술

## 해설

2 cm 가시 병변과 8 mm 기질 침윤은 미세침윤 단계를 넘는 자궁경부 선암을 시사한다. 국한 병변에서 근치적 수술(B)은 가능한 치료이며 림프절 평가 등 병기검사가 필요하다. 침윤암이라고 전이성 암인 것은 아니다. 현재는 엄격한 저위험 조건에 따라 덜 광범위한 수술도 논의하므로 모든 선암의 유일한 표준으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 국한 자궁경부 선암의 수술 B는 유효한 보기다. 국소 침윤을 전이성으로 둔 오류를 교정하고 원문 종양 크기를 복원.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10176411/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000620
