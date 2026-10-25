---
type: qbank
schema_version: 1
id: medqa-us-validation-000136
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e8e15084001a2c2249f7442481dd7e8354786480f0bfda42f7228a13335329e1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "보툴리눔 중독"
  - "식품매개 보툴리누스증"
  - "호흡근 마비"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uztO2ItOumrOuIlCDspJHrj4UgKEJvdHVsaXNtKS5tZA
question_type: prognosis
difficulty: complex
answer: C
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

27세 여성이 다리의 진행성 근력저하와 호흡곤란으로 응급실에 왔다. 알래스카에서 하이킹과 캠핑을 하고 산에서 물을 마셨으며 이틀 전 교통사고가 있었지만 치료를 받지 않았다. 최근 설사를 앓았고 현재 종합비타민 외 복용약은 없다. 하지 근력 1/5, 몸통 근력 2/5, 감각저하가 진행되어 삽관했다. 가장 가능성 높은 진단과 관련된 위험인자는?

## 선택지

A. 북위도에 거주하는 여성
B. 진드기 많은 숲에서 하이킹
C. 캠프파이어로 조리한 고기 섭취
D. 중심성 경추 외상

## 해설


최근 설사 뒤 다리에서 몸통으로 진행하는 심한 위약과 감각저하는 Guillain–Barré 증후군을 시사한다. 선행 Campylobacter 장염은 관련 위험요인이므로 선택지 중 충분히 익지 않은 고기 노출을 의도한 C가 가장 부합한다. 캠프파이어 조리 자체가 위험이라는 뜻은 아니며 부적절한 가열·오염이 문제다. 보툴리눔증은 보통 하행성 마비와 보존된 감각으로 나타나 이 사례의 설명으로 맞지 않는다. 원문의 최근 설사와 감각저하를 보존하고, 실제 진단에는 반사·신경전도 등 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000136 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 상행성 운동/감각 저하·설사 후 호흡부전은 GBS 의도인데 보툴리눔증 하행성 무감각보존 기전으로 잘못 연결됨. 원문 최근 설사 복원, C는 덜 익힌 고기→Campylobacter→GBS 위험으로 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/ene.16073
- https://www.cdc.gov/campylobacter/hcp/clinical-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000136
