---
type: qbank
schema_version: 1
id: medqa-us-train-005837
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f64d1645c9abc66d9dd1274e75b4cc76ca3e231e469ba316691f86fb742ed560
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "아메바성 간농양"
  - "Entamoeba histolytica"
  - "멕시코 여행력"
  - "Amoebic liver abscess"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsIQg64aN7JaRIChMaXZlciBBYnNjZXNzKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

유행 지역에 머물다 돌아온 36세 환자가 발열과 우상복부 통증을 호소한다. 영상에서 간 우엽 단일 농양이 있고, 최근 혈성 설사 때 대변에서 이질아메바가 확인됐지만 치료받지 않았다. 항아메바 혈청검사도 양성이다. 아메바성 간농양에 적절한 약물치료 순서는?

## 선택지

A. 파로모마이신만 투여한다
B. 메트로니다졸로 치료한 뒤 파로모마이신 등 장관 내 약제를 투여한다
C. 메트로니다졸만 투여하고 장관 내 약제는 생략한다
D. 세프트리악손만 투여한다

## 해설


조직 침범에는 메트로니다졸 같은 조직 작용 약제가 필요하다. 이후 장관 내에 남은 원충을 없애기 위해 파로모마이신 등 장관 내 약제를 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005837 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 아메바성 간농양 A의 주요 단서를 동물 접촉이 아닌 이전 혈성 설사·유행지역으로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005837
- https://www.cdc.gov/yellow-book/hcp/post-travel-evaluation/post-travel-diarrhea.html
