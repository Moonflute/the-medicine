---
type: qbank
schema_version: 1
id: medqa-us-train-002861
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0867bc18fea8d1a49db6bf45b6a541cfc950cd54d8ecc343d92fe5e0128f7f3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "esophageal squamous cell carcinoma"
  - "progressive dysphagia"
  - "weight loss"
  - "tobacco and alcohol risk"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4TslZQgKEVzb3BoYWdlYWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: simple
answer: B
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

67세 남성이 고형식부터 시작한 연하곤란이 점점 심해져 물도 삼키기 어렵고 최근 체중이 줄었다. 타액은 삼킬 수 있고 활력징후는 안정적이다. 원인 확인을 위해 우선 시행할 검사는?

## 선택지

A. 식도내압검사
B. 상부위장관 내시경 및 의심 병변 조직검사
C. 24시간 식도 산도검사
D. 비디오투시 연하검사

## 해설


고형식에서 액체로 진행하는 연하곤란과 체중 감소는 식도 폐색성 병변의 경고 신호다. 내시경으로 내강을 확인하고 의심 병변에서 조직을 얻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002861 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행성 고형식→액체 연하곤란·체중감소와 흡연/음주력은 선택지 중 식도 편평세포암 C를 지지한다. 구취만으로 Zenker로 자동 분류하지 않고 전체 임상과 영어 원문을 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002861
- https://www.asge.org/home/resources/publications/guidelines/appropriate-use-of-gi-endoscopy
