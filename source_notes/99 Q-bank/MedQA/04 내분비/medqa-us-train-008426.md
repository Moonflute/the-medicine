---
type: qbank
schema_version: 1
id: medqa-us-train-008426
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a46e649e84df7369cfba486147983290ceb64e397ebff2efd949a74aace54f4f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "toxic adenoma"
  - "toxic thyroid nodule"
  - "hyperthyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 여성이 단일 2.7cm 갑상선 결절에 의한 현성 갑상선기능항진증으로 진단됐다. 핵의학 검사에서는 그 결절만 강하게 섭취한다. 압박 증상이나 악성 의심 소견은 없고 임신·수유 중이 아니다. 수술을 원하지 않을 때 고려할 비수술적 근치 치료는?

## 선택지

A. 프로프라놀롤 장기 단독 치료
B. 레보티록신 억제 요법
C. 방사성요오드 치료
D. 메티마졸을 단기간 복용한 뒤 치료 종료

## 해설


독성 선종의 대표적인 근치 치료는 방사성요오드 또는 수술이다. 항갑상선제나 베타차단제는 수치나 증상을 조절할 수 있지만, 중단하더라도 자율 분비가 사라지는 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008426 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 텍스트에 단일 hot nodule과 나머지 억제가 명시되어 독성선종 C가 명확. 별도 스캔 이미지 불필요.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008426
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12230266/
