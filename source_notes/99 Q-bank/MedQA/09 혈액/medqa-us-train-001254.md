---
type: qbank
schema_version: 1
id: medqa-us-train-001254
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:420a938b35d13f3efb0483595fbf6e8cf4714511398cae9c982e0a74b574efa9
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "normocytic anemia"
  - "anemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: B
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

39세 여성이 지난 3개월 동안 점진적인 쇠약, 운동 불내성 및 간헐적 어지럼을 보인다. 과거력은 특이 사항이 없다. 흡연력은 18갑년이며 음주는 드물게 한다. 활력징후는 체온 36.6°C (97.8°F), 혈압 139/82 mm Hg, 맥박 분당 98회이다. 신체 진찰은 특이 소견이 없다. 검사실 소견은 다음과 같다: 헤모글로빈 9.2 g/dL, 적혈구 수 2.1 million/mm3, 평균적혈구용적(MCV) 88 μm3, 평균적혈구혈색소(MCH) 32 pg/cell, 백혈구 수 7,500/mm3. 다음 중 이 환자의 상태에 대한 최선의 다음 관리 단계는 무엇인가?

## 선택지

A. 혈청 페리틴 수치
B. 망상적혈구 수
C. 직접 항글로불린 검사
D. 골수 생검

## 해설


MCV88 fL의 정구성 빈혈에서는 망상적혈구 수(B)로 골수의 적절한 반응이 있는지 평가하는 것이 유용하다. 절대수와 빈혈 정도를 고려한 보정지수로 증가하면 출혈·용혈, 낮거나 부적절하게 정상이라면 생성저하를 우선 고려한다. Ferritin도 감별 과정에서 필요할 수 있지만 이 단계의 원문 정답은 B이다. 제시된 RBC·Hb·MCV·MCH 수치의 산술적 불일치는 원문에도 있어 원인 진단을 특정 수치 조합만으로 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001254 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정답 B와 반대로 ferritin A를 결론 내린 해설을 망상적혈구 기반 빈혈 분류로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/lab-tests/reticulocyte-count/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001254
