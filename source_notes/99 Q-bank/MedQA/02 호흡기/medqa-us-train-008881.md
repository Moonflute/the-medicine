---
type: qbank
schema_version: 1
id: medqa-us-train-008881
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea7e83b7e947e800e9ad23fd697f5e9d447ab14febb0b219bd83f4a3276ce46b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "chronic bronchitis"
  - "hemoptysis"
  - "chronic obstructive pulmonary disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 과체중 남성이 20갑년 흡연력으로 일차진료를 받으러 왔다. 지난 한 달 동안 기침 발작 후 피가 묻은 휴지를 여러 번 보았다. 실내 공기 산소포화도 93% 외 활력징후는 정상이다. 지난 5년 동안 기침이 점점 악화되어 호전된 적이 거의 없고 호흡곤란도 악화되어 집 계단을 오르기 힘들다고 한다. 이 환자 객혈의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 급성 폐부종
B. 폐농양
C. 만성 기관지염
D. 응고장애

## 해설

장기 흡연, 만성 기침과 진행하는 호흡곤란은 제시된 선택지 중 만성기관지염(C)을 지지한다. 다만 가래의 성상이 원문에 제시된 것은 아니며, 고령 흡연자의 새 객혈을 만성기관지염으로만 확정하여 평가를 생략해서는 안 된다. 영상 등으로 폐암과 다른 출혈 원인을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선지 중 만성기관지염 C를 지지하되 없는 점액성 가래를 추가하거나 암 평가를 생략하는 오용을 제한.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008881
