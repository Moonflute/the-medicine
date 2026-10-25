---
type: qbank
schema_version: 1
id: medqa-us-train-003650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76b4346e81491e02fab1854b84ac11c5746d1abb33a77583df51b6ca429bc2fa
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "stage 1 pressure injury"
  - "nonblanchable erythema"
  - "pressure ulcer prevention"
  - "repositioning"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

심부전 악화로 3주간 입원 중인 72세 남성의 천골에 4×6 cm 크기의 창백하지 않는 홍반이 생겼다. 통증은 경미하고 가려움은 없었다. 다음 중 가장 가능성 높은 진단에 대한 최선의 관리는?

## 선택지

A. 메트포르민
B. 예방적 경구 시프로플록사신
C. 체위 변경
D. 국소 은설파디아진

## 해설

움직임이 제한된 환자 천골의 피부 손상 없이 지속하는 비창백성 홍반과 경한 압통은 1단계 압력손상을 시사한다. 체위변경(C), 압력 분산 표면과 피부·습기·영양 관리가 필요하다. 예방적 항생제나 silver sulfadiazine을 압력손상에 일률적으로 사용하지 않으며 metformin은 이 병변 치료제가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 압통이 없다는 해설을 본문/원문의 경한 압통으로 교정. 다른 선지 모두 궤양 치료라는 오류 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg179/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003650
