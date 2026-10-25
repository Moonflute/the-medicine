---
type: qbank
schema_version: 1
id: medqa-us-train-007670
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:109341183282b0d3f57d8090966d310707c0e231fbb8793f0c25c2bcd69bbd2e
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "traumatic airway obstruction"
  - "cricothyrotomy"
  - "cannot intubate cannot oxygenate"
  - "Traumatic airway obstruction"
question_type: management
related_disease_slugs: []
difficulty: simple
answer: B
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

34세 남자가 싸움에 휘말린 후 구급차로 응급실에 왔다. 얼굴과 목에 뚜렷한 외상이 있고 입안은 피로 가득하다. 흡인으로 피를 제거한 지 수초 만에 입안이 다시 피로 빠르게 차오른다. 그 결과 환자는 말을 할 수 없다. 손상 때문에 직접 후두경검사도 실패했다. 활력징후는 맥박 102회/분, 혈압 110/75 mmHg, 산소포화도 97%이다. 이 시점에서 다음 중 무엇을 시행해야 하는가?

## 선택지

A. 기관내삽관
B. 윤상갑상막절개술
C. 비위관 삽입
D. 심폐소생술

## 해설

심한 안면·경부 손상과 계속 차오르는 출혈 때문에 직접 후두경으로 기도에 접근하지 못한 상황이다. 기도 소실과 흡인의 위험이 크므로 제시된 선택지 중 응급 전경부 기도 확보인 윤상갑상막절개술(B)이 적절하다. 현재 산소포화도가 97%라는 사실이 계속되는 기도 위협을 없애지는 않는다. 일반적으로 한 번의 삽관 실패만으로 항상 시행하는 술기는 아니며, 이 사례의 해부학적 손상과 지속 출혈을 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 윤상갑상막절개술의 잘못된 번역명을 교정한다. 계속 차오르는 혈액과 심한 안면·경부 손상으로 경구 기도 접근이 실패한 B의 맥락을 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007670
