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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병으로 유도항암을 받는 환자다. 열이나 활동성 감염은 없지만 절대호중구수가 100/μL 미만인 상태가 7일 넘게 지속될 것으로 예상된다. 기관의 내성 자료를 고려했을 때 항균 예방 계획으로 적절한 것은?

## 선택지

A. 모든 환자에게 정맥 반코마이신을 예방적으로 투여한다
B. 위험도에 맞춰 플루오로퀴놀론 계열의 항균 예방을 고려한다
C. 호중구감소가 아무리 깊어도 항균 예방을 고려하지 않는다
D. 발열이 새로 생겨도 예방 약제만 유지하며 관찰한다

## 해설


매우 깊고 오래 지속될 호중구감소는 세균 감염 고위험이다. 항균 예방을 검토하되 지역 내성과 부작용을 고려하고, 열이 나면 즉시 경험적 치료가 필요한지 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000070 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AML 유도요법은 예상 심한 장기 호중구감소 고위험으로 fluoroquinolone 예방 A 가능. 현재 ANC750 자체를 모든 호중구감소 예방 적응증으로 확대하지 않고 원문 CBC 복원.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/globalassets/idsa/practice-guidelines/jco.18.00374.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000070
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3110859/
- https://www.idsociety.org/practice-guideline/antimicrobial-prophylaxis-for-adult-patients-with-cancer-related-immunosuppression/
