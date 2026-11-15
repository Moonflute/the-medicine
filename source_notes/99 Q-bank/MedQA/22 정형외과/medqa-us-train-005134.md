---
type: qbank
schema_version: 1
id: medqa-us-train-005134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a1e6bd65b639f6993c6b5e9c0256d25169e7075bc941aac3c4314671c587c78
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "슬개전 윤활낭염"
  - "무릎 윤활낭염"
  - "직업성 무릎 압박"
  - "Prepatellar bursitis"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yKrOqwnOuMgO2HtCDthrXspp0g7Kad7ZuE6rWwIChQYXRlbGxvZmVtb3JhbCBQYWluIFN5bmRyb21lKS5tZA
difficulty: complex
answer: A
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

바닥 시공 일을 하는 37세 남성이 무릎을 꿇는 일이 늘어난 뒤 무릎이 부었다. 무릎뼈 바로 앞에 물주머니처럼 말랑한 부종이 국한되어 있고, 수동 관절운동은 거의 아프지 않다. 가장 가능성 높은 진단은?

## 선택지

A. 슬개전 윤활낭염
B. 무릎 화농성 관절염
C. 거위발 윤활낭염
D. 내측 반월연골 파열

## 해설

반복적으로 무릎을 꿇으면 슬개골 바로 앞의 윤활낭이 자극받는다. 발열이나 뚜렷한 열감·홍반이 있으면 감염성 윤활낭염도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영문 직업(카펫 시공)과 병변 위치 over lower patella를 복원했다. 슬개전 윤활낭과 슬개하 영역을 혼동하는 번역을 바로잡아 B를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005134
