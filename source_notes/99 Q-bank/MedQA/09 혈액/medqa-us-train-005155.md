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
question_type: investigation
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

오래된 건축물 도료를 제거하는 일을 하는 환자에게 변비와 복통, 집중력 저하가 생겼다. 소구성 빈혈이 있고 철검사로는 설명되지 않는다. 납중독을 확인하기 위한 검사는?

## 선택지

A. 머리카락의 중금속 종합 검사
B. 혈청 아연 농도
C. 정맥혈 납 농도
D. 소변 포르포빌리노겐 단독

## 해설


노출력과 임상상으로 납중독이 의심되면 정맥혈 납 농도를 확인한다. 적혈구 형태나 증상만으로 납중독을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005155 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경인지·변비·고혈압과 소구성 빈혈의 조합에서 선택지 중 납 등 중금속 노출 B가 가장 합당함을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005155
- https://www.who.int/publications/i/item/9789240037045
