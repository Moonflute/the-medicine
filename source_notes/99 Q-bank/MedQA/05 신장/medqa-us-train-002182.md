---
type: qbank
schema_version: 1
id: medqa-us-train-002182
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c631b9cfdad304f15efd6255f6ed3ca05d388badf6408d85130eea40c238194d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hyperkalemia"
  - "missed hemodialysis"
  - "peaked T waves"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

투석 일정을 놓친 58세 남성이 전신 근력저하로 내원했다. K는 7.2 mmol/L이며 심전도에서 QRS가 넓어졌다. 혈중 칼륨을 낮출 치료를 준비하면서 심근을 즉시 안정화할 처치는?

## 선택지

A. 인슐린 피하 투여
B. 정맥 중탄산염 단독
C. 정맥 칼슘
D. 경구 칼륨 결합제 단독

## 해설


심전도 변화가 있는 고칼륨혈증에서는 정맥 칼슘으로 심근을 안정화한다. 칼슘은 칼륨 농도를 낮추지 않으므로 세포 내 이동과 체외 제거 치료를 함께 준비한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 투석 두 번 누락 후 상행성 근력저하·심계항진은 고K; 뾰족한 T파·QT 단축 C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002182
- https://guidelines.ukkidney.org/hyperkalaemia/
