---
type: qbank
schema_version: 1
id: medqa-us-train-004534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86dd90a6150696a1fc0a3269ddcadb214e9282fce348dd6353adc44b691fdca4
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 단핵구증"
  - "Epstein-Barr 바이러스"
  - "비인두암"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qwkOyXvC5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

감염성 단핵구증으로 진단받은 20세 럭비 선수가 증상 시작 10일째 진료실에 왔다. 열은 내렸지만 비장이 아직 만져진다. 이번 주말 경기에 대해 어떻게 조언하는가?

## 선택지

A. 열이 내렸으므로 경기에 출전한다
B. 통증이 없으면 보호대를 착용하고 출전한다
C. 이번 경기는 쉬고, 회복과 경과를 확인한 뒤 단계별 복귀를 결정한다
D. 당일부터 충돌을 피하는 조건으로 팀 전체 훈련에 복귀한다

## 해설


초기에는 비장파열 위험 때문에 접촉 스포츠를 피한다. 증상 발생 약 3주 이후 회복 상태를 확인해 가벼운 비접촉 활동부터 시작하며, 접촉 운동 복귀는 별도로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004534 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: EBV와 비인두암 연관 B 유지; 현재 단핵구증이 곧 암 발생을 시사한다는 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004534
- https://pubmed.ncbi.nlm.nih.gov/37186809/
