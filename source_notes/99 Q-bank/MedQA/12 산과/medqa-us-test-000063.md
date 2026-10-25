---
type: qbank
schema_version: 1
id: medqa-us-test-000063
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9ce3d2759be18d5682686fce0921115a5c3c3fa0aaecb8507e14b739635e6a18
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 생리적 빈혈"
  - "혈액희석"
  - "정상 임신"
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg66qo7LK0IOuzgO2ZlCAoTWF0ZXJuYWwgQ2hhbmdlcyBEdXJpbmcgUHJlZ25hbmN5KS5tZA
question_type: other
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 16주인 23세 초임부가 정기 산전진료를 위해 내원했다. 피로가 늘었지만 그 외에는 건강하다. 엽산, 철분, 비타민 D를 보충한다. 혈압 110/70 mmHg, 심박수 분당 86회, 호흡수 분당 13회, 체온 36.6℃이고 신체검사는 정상이다. 전혈구검사에서 적혈구 390만/mm³, Hb 11.1 g/dL, Hct 32%, 망상적혈구 0.2%, MCV 90 fL, 혈소판 210,000/mm³, 백혈구 8,100/mm³이다. 다음 중 검사 결과의 원인을 확인하기 위해 필요한 검사는?

## 선택지

A. 혈청 철 수치
B. 혈청 B12 수치
C. 트랜스페린
D. 검사가 필요하지 않음

## 해설

임신 중에는 혈장량 증가가 적혈구량 증가보다 커서 혈색소와 헤마토크릿이 낮아질 수 있다. ACOG의 임신 2분기 빈혈 기준은 Hb 10.5 g/dL 미만 또는 Hct 32% 미만이며, 제시된 Hb 11.1 g/dL와 Hct 32%는 이 기준 미만이 아니다. MCV도 정상이고 다른 이상·위험 단서가 없어 선택지 중 D처럼 추가 원인검사 없이 통상 산전 추적을 지속할 수 있다. 망상적혈구 수치 하나만으로 모든 소견이 생리적이라고 단정하지 않으며, 피로가 악화되거나 빈혈·영양결핍이 의심되면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 16주 Hb11.1/Hct32는 ACOG2분기 빈혈기준 미만 아님. 망상적혈구 저하까지 생리적빈혈로 일괄단정한 해설 완화, D는 제시된 상황에 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10727057/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000063
