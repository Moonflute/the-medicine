---
type: qbank
schema_version: 1
id: medqa-us-train-003915
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:973a88914088f7be6dbf61e061edd5b2259db5238c846d7a716d0b2f2a723c55
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "contaminated laceration"
  - "avulsion injury"
  - "tetanus prophylaxis"
  - "moist sterile dressing"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 술집 싸움 후 오른손에 흙이 묻은 4 cm 피부 열상으로 내원했다. 피부판은 척측에서만 붙어 있었다. 상처를 세척하고 변연절제했으며 주변에 경한 홍반만 있고 고름은 없었다. 6년 전 파상풍 예방접종을 받았다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 상처 가장자리를 긴장 상태로 맞추고 리팜핀을 투여한다
B. 피부이식 수술과 파상풍 백신
C. 습윤 멸균 드레싱과 파상풍 백신
D. 피판술과 시프로플록사신

## 해설

흙으로 오염된 피부판 열상은 세척·변연절제 뒤 습윤 멸균 드레싱과 조직 생존성 평가가 필요하다. 일차접종 완료자도 오염/중대 상처에서 마지막 접종이 5년 이상 지났으면 booster가 필요하므로 C가 적합하다. TIG는 백신의 단순 대체제가 아니며, 접종력 불명/미완료 또는 특정 면역저하 등 적응증에 따라 추가한다. 장력으로 억지 봉합하거나 적응증 없이 이식/피판술을 즉시 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 피부판 열상 형태를 복원하고 tetanus vaccine과 TIG를 대체제로 설명한 오류 교정.
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-guidance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003915
