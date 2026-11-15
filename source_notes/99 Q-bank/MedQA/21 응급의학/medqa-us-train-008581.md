---
type: qbank
schema_version: 1
id: medqa-us-train-008581
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a4be6909cb788f01799c9ec09de54e0411d25dbadbfb05cd507f405a358a42b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "massive transfusion"
  - "dilutional coagulopathy"
  - "hemorrhagic shock"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

외상 환자가 대량수혈 중이고 출혈이 계속된다. 체온과 이온화 칼슘을 교정 중이며 피브리노겐이 95 mg/dL로 확인됐다. 이 응고 이상을 직접 교정할 제제는?

## 선택지

A. 농축적혈구만 추가
B. 프로타민
C. 피브리노겐 농축제 또는 동결침전제
D. 헤파린

## 해설

심한 출혈과 낮은 피브리노겐이 함께 있으면 농축제나 동결침전제로 보충한다. 다른 혈액제제와 별도로 수치와 응고 상태를 추적하고 출혈원 통제를 계속한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동결침전제가 혈소판만 제공한다는 오류를 피브리노겐 보충으로 교정한다. 대량 수혈 중 A와 동시에 동맥 출혈 통제가 필요함을 명시한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations
- 공식/학회 근거: https://doi.org/10.1186/s13054-023-04327-7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008581
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/
