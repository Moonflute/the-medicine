---
type: qbank
schema_version: 1
id: medqa-us-train-007259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d60cf330712b3096630b6d20691686794a6d72c8716a8b10054519ee3e6c1293
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "잠복결핵감염"
  - "이소니아지드"
  - "모유 수유"
  - "피리독신"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: management
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

최근 신생아 딸과 함께 미국으로 이민 온 33세 히스패닉 여성이 아기의 건강검진을 위해 무료 진료소를 방문했다. 미국으로 이민하거나 피난을 신청하는 사람에 대한 선별검사의 일환으로 산모와 아이 모두 결핵검사를 받았다. 아이의 정제단백유도체(PPD) 검사와 흉부 X선은 음성이었고, 산모의 흉부 X선도 음성이지만 PPD는 양성이었다. 현재 무증상이며 결핵 병력도 없다고 한다. 활력징후는 혈압 124/76 mmHg, 심박수 74회/분, 호흡수 14회/분이다. 피리독신을 보충하면서 9개월간 이소니아지드 치료를 시작하라는 권고를 받았다. 모유 수유 중이라 치료를 시작하면 아기에게 해가 될까 걱정한다. 다음 중 가장 적절한 답변은 무엇인가?

## 선택지

A. “치료 부작용보다 아기가 결핵에 감염될 위험이 더 크므로 모유 수유를 하면 안 됩니다.”
B. “피리독신이 모유를 통해 아기의 간을 손상할 수 있으므로 9개월 동안 모유 수유를 하면 안 됩니다.”
C. “피리독신이 이소니아지드로 인한 말초신경병증을 예방하므로 모유 수유를 해도 됩니다.”
D. “무증상이고 이소니아지드와 피리독신 모두 아기에게 해를 주지 않으므로 모유 수유를 해도 됩니다.”

## 해설


활동 질환이 배제된 LTBI 산모는 isoniazid와 pyridoxine을 복용하며 수유할 수 있다. 모유 내 일차 항결핵제 농도는 일반적으로 영아 독성을 일으키기에 낮다. 이것이 모유만으로 영아의 TB 치료/예방이 된다는 뜻은 아니고 영아 자신에게 필요하면 별도 용량을 준다.9개월 INH는 가능한 요법 중 하나이며 현재는 환자/상호작용에 따라 단기 rifamycin 요법도 사용한다. 산모의 간독성 감시와 영양 관리가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007259 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: INH+B6 복용 중 수유 D 유지; 어떤 상황에서도 절대 해가 없다는 일반화 및9개월 유일 요법 오해 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/clinical-care/pregnancy.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007259
