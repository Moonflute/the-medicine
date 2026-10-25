---
type: qbank
schema_version: 1
id: medqa-us-validation-000736
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7dc0fdecb7989f0866dc4d23998a9d65fd8cbcaa0336f92893bc00aeccacb640
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부 편평세포암"
  - "자궁경부암 병기"
  - "임상 병기"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: standard
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
original_answer: B
answer_change_reason: "구식 임상 단독 병기 표현을 보정하고 질문을 골반 내 국소 침범 범위의 영상 평가로 최소 명확화. MRI만으로 전체 병기를 결정한다는 의미가 아니며 국소 평가의 정답 A와 원정답 B를 보존."
---

# MedQA US 임상문제

## 문제

45세 여성이 6개월간의 가벼운 무통성 성교 후 출혈과 최근 월경 사이 불규칙 출혈로 진료를 받으러 왔다. 골반검사에서 자궁경부 후순의 6 cm 괴사성 병변이 자궁경관과 뒤쪽 질 상부로 이어지고 자궁경부 이동성이 감소하였다. 생검에서 10 mm를 넘는 기질 침윤의 편평세포암이 확인되었다. 골반 내 국소 침범 범위를 평가하는 데 가장 적절한 영상검사는?

## 선택지

A. 골반 MRI
B. 임상 진찰
C. 골반 CT
D. PET-CT

## 해설

현행 자궁경부암 평가는 임상 진찰과 조직검사에 영상·병리 정보를 통합한다. 이처럼 큰 침윤암의 골반 내 종양 범위 평가에는 골반 MRI(A)가 적절하다. PET-CT는 림프절·원격전이 평가에 중요하다. 임상 진찰만으로 병기를 정하며 영상을 배제한다는 기존 설명은 현행 기준과 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 구식 임상 단독 병기 표현을 보정하고 질문을 골반 내 국소 침범 범위의 영상 평가로 최소 명확화. MRI만으로 전체 병기를 결정한다는 의미가 아니며 국소 평가의 정답 A와 원정답 B를 보존.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10176411/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000736
