---
type: qbank
schema_version: 1
id: medqa-us-train-002274
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1402dc2798e60b296384461aa96a2e1151e95f95d7a846f9099ded71c5b59474
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "severe hyponatremia"
  - "rapid sodium correction"
  - "osmotic demyelination syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: adverse_effect
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

67세 여성이 행동 변화로 보호자들에게 이끌려 응급실에 왔다. 요양원에 거주하며 이상행동, 요실금, 보행곤란이 관찰되었다. 검사에서 혈청 나트륨 120 mEq/L로 심한 저나트륨혈증이 있고, 소변에는 농뇨나 아질산염 없이 세균뇨가 있다. 혼란스러워 질문에 적절히 답하지 못하고 현재 연도가 1982년이라고 생각한다. 이 환자를 치료할 때 나타날 수 있는 합병증은?

## 선택지

A. 중추신경계 감염
B. 뇌부종
C. 설사와 장내 세균총 파괴
D. 삼투성 탈수초화

## 해설


심한 저나트륨혈증을 급속히 교정하면 뇌세포 탈수와 탈수초화가 발생한다. 이는 삼투성 탈수초증후군(Osmotic demyelination syndrome)이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Na120 혼돈 환자 저Na 치료의 과교정 합병증은 삼투성 탈수초 D; 빠른 정상화를 권하지 않는 해설.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002274
