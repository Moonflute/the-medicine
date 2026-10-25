---
type: qbank
schema_version: 1
id: medqa-us-train-003595
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f81eb1336978e829edf5332c13804fffa14ab894b3821485cbbeb626783ba819
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "primary hyperparathyroidism"
  - "parathyroid adenoma"
  - "hypercalcemia"
  - "sestamibi localization"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 피로, 무기력, 뼈 통증, 산통 양상의 오른쪽 복통으로 내원했다. 혈청 칼슘은 12.3 mg/dL, 인은 1.1 mg/dL, 소변 칼슘은 증가했고 X선에서 전반적인 골감소증과 골막하 골흡수가 보였다. 부갑상샘호르몬은 현저히 상승했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 99mTc 세스타미비 스캔과 경부 초음파
B. 경부 CT
C. 골밀도검사(DEXA)
D. 세스타미비 스캔만 시행

## 해설

고칼슘혈증·낮은 인·비억제 PTH와 골/신장 합병증은 원발성 부갑상샘기능항진증을 뒷받침한다. 수술을 계획할 때 병변 위치결정을 위해 경부 초음파와 sestamibi A를 활용할 수 있다. 영상은 생화학적 진단을 대신하지 않으며 반드시 sestamibi가 양성이어야만 초음파를 시행하는 순서는 아니다. 음성 위치결정 영상도 수술 적응증 자체를 취소하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 생화학적으로 확인된 PHPT의 A는 수술 전 위치결정이지 진단 확정검사/양성 sestamibi 뒤 필수 순차 US라는 뜻 아님.
- https://asbmr.onlinelibrary.wiley.com/doi/full/10.1002/jbmr.4677

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003595
