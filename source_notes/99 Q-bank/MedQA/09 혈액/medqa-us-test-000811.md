---
type: qbank
schema_version: 1
id: medqa-us-test-000811
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:18183c9042dd42bb146d6ff6e4f0b0e70cce9ba43a483d46dcb3852d2912a5f4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "구형적혈구"
  - "비장비대"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
question_type: investigation
difficulty: complex
answer: A
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

이전에 건강했던 49세 여성이 선택적 담낭절제술 전 정기 혈액검사를 받았다. 혈색소 12.1 g/dL, MCV 85 μm³, MCHC 47%, 망상적혈구 3.4%, 백혈구 9,700/mm³, 혈소판 229,000/mm³였다. 말초혈액도말에서 구형적혈구가 보였고 쿰스검사는 음성이었다. 공막 황달과 중등도 비장비대가 있었다. 기저 질환의 진단에 가장 적절한 검사는?

## 선택지

A. Eosin-5-maleimide 결합검사
B. CD55/CD59 유세포분석
C. 파보바이러스 B19 항체
D. 간기능검사

## 해설


구형적혈구·Coombs 음성 용혈 소견과 비장비대는 유전성 구형적혈구증을 시사하며 EMA 결합검사(A)가 진단을 뒷받침한다. 이 질환은 ankyrin·spectrin·band3 등 여러 막단백 복합체 결함과 관련되므로 대부분 band3 결함이라고 단정하지 않는다. 원문의 MCHC 47%는 매우 높은 값이어서 단위·측정 재확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000811 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Coombs음성 구형적혈구·황달·비장비대와 EMA A 유지. 대부분 band3 결함이라는 부정확한 유전자 일반화 교정, 비정상적으로 높은 MCHC는 재확인 주의.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/genetics/condition/hereditary-spherocytosis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000811
