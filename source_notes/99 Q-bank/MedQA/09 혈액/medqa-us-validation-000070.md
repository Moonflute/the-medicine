---
type: qbank
schema_version: 1
id: medqa-us-validation-000070
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7232572fc3ef68c525547d8c4dedca82bd6d6f85bf80ebc212a8837b8fb6944d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "호중구감소증"
  - "급성 골수성 백혈병"
  - "감염 예방"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2YuOykkeq1rOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: prevention
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병 유도 화학요법을 시작한 지 7일 후 56세 남성에게 백혈구감소증이 생겼다. 호중구 감소 외에 증상은 없고 진찰도 정상이다. 혈색소 9g/dL, 백혈구 1,500/mm³(분절호중구 50%), 혈소판 85,000/mm³이다. 합병증 위험을 줄이기 위해 가장 적절히 투여할 것은?

## 선택지

A. 시프로플록사신
B. 과립구집락자극인자
C. 반코마이신
D. 현재 약물 예방이 필요하지 않다

## 해설


AML 유도요법 후에는 깊고 오래 지속될 호중구감소가 예상되어 fluoroquinolone 예방(A)을 고려하는 고위험군이다. 원문 WBC 1,500/µL와 호중구 50%로 현재 ANC는 약 750/µL이며, 이 수치 하나만으로 모든 환자에게 예방약을 권하는 것은 아니다. 예상 깊이·기간, 점막염·지역 내성·금기를 함께 판단한다. 발열이 발생하면 예방이 아닌 신속한 경험적 치료로 전환한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000070 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AML 유도요법은 예상 심한 장기 호중구감소 고위험으로 fluoroquinolone 예방 A 가능. 현재 ANC750 자체를 모든 호중구감소 예방 적응증으로 확대하지 않고 원문 CBC 복원.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/globalassets/idsa/practice-guidelines/jco.18.00374.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000070
