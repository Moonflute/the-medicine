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
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

흙이 묻은 깊은 손 열상을 충분히 세척하고 괴사 조직을 제거했다. 환자는 파상풍 기본접종을 마쳤고 마지막 접종은 6년 전이다. 이번 상처에 필요한 파상풍 예방은?

## 선택지

A. 백신과 파상풍 면역글로불린
B. 파상풍 면역글로불린만
C. 아무 예방도 필요 없음
D. 파상풍 함유 백신 추가접종

## 해설

기본접종을 완료한 사람도 오염된 상처에서는 마지막 접종이 5년 이상 지났으면 백신을 추가한다. 특별한 면역저하가 없으면 파상풍 면역글로불린은 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 피부판 열상 형태를 복원하고 tetanus vaccine과 TIG를 대체제로 설명한 오류 교정.
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-guidance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003915
- https://www.kdca.go.kr/bbs/kdca/55/259856/download.do
