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
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

35세 환자가 자동차 충돌 후 응급실로 이송되었다. 외상 소생실에서 환자를 안정화하려면 기관내 삽관이 필요하다. 파편으로 대퇴동맥이 열상되어 많은 양의 출혈이 있었던 것으로 보인다. 농축 적혈구 13단위를 수혈했다. 활력징후는 체온 96.5°F, 심박수 150회/분, 혈압 90/40mmHg이다. 대퇴동맥을 직접 압박해도 계속 출혈한다. 지난 한 시간 안에 채취한 검사 결과는 아직 대기 중이다. 다음 중 무엇을 투여하는 것이 이 환자의 출혈을 멎게 할 가능성이 가장 높은가?

## 선택지

A. 신선동결혈장과 혈소판
B. 포도당
C. 생리식염수
D. 동결침전제

## 해설

적혈구만 13단위 투여한 뒤에는 혈소판과 응고인자 부족이 출혈을 악화시킬 수 있어 혈장과 혈소판을 포함한 균형 소생(A)이 필요하다. 동결침전제는 주로 피브리노겐을 보충하는 제제이며 혈소판을 제공하는 제제가 아니다. 실제로는 혈소판 수, 피브리노겐과 응고 상태에 따라 성분을 조절하고 저체온·저칼슘혈증도 교정한다. 열상된 대퇴동맥의 기계적 출혈은 혈액제제만으로 해결되지 않으므로 지혈대 등 적절한 임시 출혈 통제와 응급 혈관 수술을 병행해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동결침전제가 혈소판만 제공한다는 오류를 피브리노겐 보충으로 교정한다. 대량 수혈 중 A와 동시에 동맥 출혈 통제가 필요함을 명시한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations
- 공식/학회 근거: https://doi.org/10.1186/s13054-023-04327-7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008581
