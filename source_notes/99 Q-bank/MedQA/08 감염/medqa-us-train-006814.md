---
type: qbank
schema_version: 1
id: medqa-us-train-006814
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a34340540a0aa03b281f24515aead111fe47788ac7b63ab3837727980c92303
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "시가독소 생성 대장균"
  - "용혈성 요독 증후군"
  - "혈성 설사"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDsmpTrj4Ug7Kad7ZuE6rWwIChIZW1vbHl0aWMgVXJlbWljIFN5bmRyb21lLCBIVVMpLm1k
question_type: management
difficulty: complex
answer: B
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

같은 식사에 참석한 여러 사람이 발열 없이 혈성 설사를 했다. 환자는 활력징후가 안정적이고 대변에서 시가독소 생성 대장균이 확인됐다. 초기 처치로 적절한 것은?

## 선택지

A. 항생제와 지사제를 함께 투여한다
B. 수분을 보충하고 혈소판·혈색소·신기능을 추적하며, 항생제와 장운동억제제는 피한다
C. 혈변이 멎으면 검사 없이 바로 추적을 종료한다
D. 시가독소가 확인됐으므로 예방적으로 혈장교환을 시행한다

## 해설


이 감염에서는 항생제와 장운동억제제를 피한다. 수분 상태를 교정하고, 뒤늦게 발생할 수 있는 용혈성요독증후군을 알아보기 위해 혈구 수와 신기능을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006814 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈성 설사가 곧 STEC 확진이라는 설명 교정; 급성 신손상 후 HUS B 위험 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006814
- https://doi.org/10.3947/ic.2019.51.2.217
- https://www.idsociety.org/practice-guideline/infectious-diarrhea/
