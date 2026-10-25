---
type: qbank
schema_version: 1
id: medqa-us-train-003766
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e9325b5469873b07f261f904f5ce93b41271d169ab3cca8963f02c81aee08c1c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hematochezia"
  - "colorectal cancer screening"
  - "weight loss alarm symptom"
  - "colonoscopy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
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

41세 남성이 최근 두 차례 배변 후 변기에 선홍색 피가 보였고 체중이 8파운드 감소해 내원했다. 복통이나 배변습관 변화는 없었지만 혈변이 변에 섞여 있었다. 다음 중 진단을 위한 가장 적절한 다음 검사는?

## 선택지

A. 전혈구검사
B. 대장내시경
C. 바륨 관장
D. 항문경검사

## 해설


혈변과 체중 감소는 대장암 등 중대한 병변을 시사한다. 진단을 위해서는 직접 시각화가 가능한 대장내시경이 가장 적절하다. 따라서 정답은 B이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈변이 변에 섞이고 체중감소가 있어 항문질환만 가정하지 않고 대장내시경 B로 평가.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003766
