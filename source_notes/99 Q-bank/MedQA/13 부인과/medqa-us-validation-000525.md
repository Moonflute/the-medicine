---
type: qbank
schema_version: 1
id: medqa-us-validation-000525
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e86f796c9826efcee2b8a8e7e6d4a5ecfe4ec8878d88a4ba59e94bf24f850d7f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부암 선별검사"
  - "Pap 검사"
  - "변환대 성분 없음"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
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

23세 여성이 정기 산부인과 진료를 받으러 왔다. 자궁경부 세포검사에서 상피내 병변이나 악성은 없고 검체는 적절하지만 변환대 성분이 없다. 이 환자의 관리는?

## 선택지

A. 일반 선별 일정에 따라 3년 후 Pap 검사를 반복한다
B. 2주 이내에 반복하고 변환대에서 적절히 채취한다
C. 고위험 HPV 선별검사를 시행한다
D. 1년 후 HPV 검사와 Pap 검사를 시행한다

## 해설

검체는 평가 가능하고 세포검사 결과가 NILM이다. 21–29세에서 변환대 성분이 없다는 이유만으로 즉시 재채취·HPV 검사를 하지 않고 통상 3년 선별 간격을 따른다(A). 변환대 부재 자체가 병변이 없음을 확정하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 23세 NILM·검체 적절·변환대 성분 부재에서 3년 재검 A 유지. 변환대 부재 자체가 무병변을 증명한다는 논리 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000525
