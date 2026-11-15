---
type: qbank
schema_version: 1
id: medqa-us-train-004040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:39d1f53fb14471d0017735070f9fe57735495edf20c0136e0e3b74097809af41
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "소세포폐암"
  - "부적절한 항이뇨호르몬 분비 증후군"
  - "저나트륨혈증"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

흡연 중인 61세 남성이 만성 기침과 체중 감소로 내원했다. 혈청 나트륨이 127 mmol/L이고 검사에서 부적절한 항이뇨 증후군(SIADH)으로 확인됐다. 이 부종양 증후군과 가장 관련이 높은 폐암은?

## 선택지

A. 소세포폐암
B. 폐 편평세포암
C. 폐 대세포암
D. 폐선암

## 해설


소세포폐암은 이소성 항이뇨호르몬 분비로 SIADH를 일으킬 수 있다. 낮은 나트륨 수치 하나만으로 SIADH를 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004040 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 저나트륨혈증만으로 SIADH 확진을 전제하지 않고 소세포폐암과의 전형적 연관을 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004040
