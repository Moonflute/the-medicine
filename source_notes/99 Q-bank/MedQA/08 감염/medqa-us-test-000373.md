---
type: qbank
schema_version: 1
id: medqa-us-test-000373
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1c76924fd1cb90d55886b7086d1decce0e951ab4fa3e8b48cb50469a1040dabd
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "레지오넬라 폐렴"
  - "지역사회획득폐렴"
  - "저나트륨혈증"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ugiOyngOyYpOuErOudvCAoTGVnaW9uZWxsYSkubWQ
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

57세 남성이 혼돈으로 응급실에 왔다. 며칠 전 시작된 증상이 점차 악화되었다. 처음에는 발열과 기침이 있었으나 복통, 설사, 혼돈으로 진행되었다. 체온 102°F(38.9°C), 혈압 127/68 mmHg, 맥박 120회/분, 호흡 17회/분, 실내 공기 산소포화도 94%였다. 왼쪽 폐 하부에서 국소 수포음과 호흡음 감소가 있었고 질문에 부적절하게 대답하는 혼돈 상태였다. 혈색소 12 g/dL, 헤마토크릿 36%, 백혈구 16,500/mm³, 혈소판 190,000/mm³, 혈청 나트륨 130 mEq/L, 염소 100 mEq/L, 칼륨 4.3 mEq/L, 중탄산염 25 mEq/L, BUN 20 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.1 mg/dL, 칼슘 10.2 mg/dL였다. 현재 치료를 결정하는 데 가장 유용한 진단검사는?

## 선택지

A. 흉부 방사선촬영
B. 폐 생검
C. 객담 배양
D. 소변 항원검사

## 해설


폐렴·설사·혼돈·저나트륨혈증은 Legionella를 의심하게 하며 선지 중 소변항원검사(D)가 신속한 원인 확인에 유용하다. 주로 L. pneumophila 혈청군 1을 검출하므로 음성이라고 모두 배제할 수 없고 하기도 검체 배양/분자검사를 함께 확보하는 것이 권고된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000373 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Legionella 의심에서 소변항원 D 유지. 모든 균종·혈청형을 배제 가능한 단독 최상검사라는 일반화 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/legionella/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000373
