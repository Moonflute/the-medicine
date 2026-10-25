---
type: qbank
schema_version: 1
id: medqa-us-train-005155
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b8562dddf73dc4dcee30b3bdd258f92ead09d64b822dcfc7d315768022b71d0
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "납중독"
  - "중금속 노출"
  - "소구성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

55세 남자가 피로와 기억력 변화로 응급실에 왔다. 몇 주 동안 혼란과 과민, 집중력 저하가 있었고 전신 근육·관절통과 변비가 있다. 혈압은 172/99 mmHg, 혈색소 9.0 g/dL, MCV 78 fL, 칼슘 10.2 mg/dL이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 길랭-바레 증후군
B. 중금속 노출
C. 철결핍
D. 전신홍반루푸스

## 해설


피로, 기억력 저하, 근육·관절통, 변비와 함께 미세소구성 빈혈(저MCV)과 고혈압이 동반된 경우, 납 등 중금속 노출이 흔한 원인이다. 중금속은 신경·근육 증상을 일으키며 빈혈을 유발한다. 따라서 중금속 노출이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005155 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경인지·변비·고혈압과 소구성 빈혈의 조합에서 선택지 중 납 등 중금속 노출 B가 가장 합당함을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005155
