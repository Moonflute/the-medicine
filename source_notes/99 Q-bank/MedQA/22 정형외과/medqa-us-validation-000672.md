---
type: qbank
schema_version: 1
id: medqa-us-validation-000672
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:11afc56bf04c465033c987bf5185d2be90d6b057b8d493b561ff402e156658f3
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "연골육종"
  - "골반 골종양"
  - "골용해성 병변"
  - "chondrosarcoma"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

56세 남성이 한쪽 엉덩이의 깊은 통증이 수개월간 심해져 내원했다. 골반 영상에서 장골에 골파괴와 피질 침범을 동반한 종괴가 있고, 기질 안에 고리와 호 모양의 석회화가 보인다. 의심되는 종양은?

## 선택지

A. 골수종
B. 골연골종
C. 유잉육종
D. 연골육종

## 해설

성인의 골반 골파괴성 종괴에 고리·호 모양 연골기질이 보이면 연골육종을 의심한다. 영상만으로 확진하지 않고 종양 전문팀에서 생검을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 연골육종이 10–30세에 흔하다는 연령 오류를 주로 40세 이후 성인으로 바로잡고 본문에 없는 확정 연골성 석회화 모양은 추가하지 않았다.
- 공식/학회 근거: https://www.cancer.gov/types/bone/bone-fact-sheet

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000672
