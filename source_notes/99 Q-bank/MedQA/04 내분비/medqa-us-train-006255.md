---
type: qbank
schema_version: 1
id: medqa-us-train-006255
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:449a7cc9e6c5611f8f4f964142314543028ac1c9f1ca19ddffee6bea0791b0d0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "뇌하수체기능저하증"
  - "뇌하수체 거대선종"
  - "시신경교차 압박"
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDquLDriqXsoIDtlZjspp0gKEh5cG9waXR1aXRhcmlzbSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성의 뇌하수체 거대선종이 시신경교차를 압박한다. 아침 코르티솔과 ACTH가 낮고, 유리 T4도 낮지만 TSH는 정상 범위다. 수술팀 평가와 함께 호르몬을 보충할 때 먼저 시작해야 하는 것은?

## 선택지

A. 레보티록신
B. 성장호르몬
C. 하이드로코르티손
D. 테스토스테론

## 해설


코르티솔 부족을 먼저 교정한다. 중추성 부신기능저하가 있는 상태에서 갑상선호르몬을 먼저 시작하면 부신위기를 유발할 수 있다. 자유 T4가 낮은데 TSH가 정상이라도 중추성 저하를 배제하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MRI거대선종·ACTH/LH/FSH/GH 결핍은 hypopituitarism C를 지지. 시야그림 누락돼도 제시 MRI/생화학으로 판단 가능.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006255
- https://www.endocrine.org/clinical-practice-guidelines/hormone-replacement-in-hypopituitarism
