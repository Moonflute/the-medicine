---
type: qbank
schema_version: 1
id: medqa-us-train-003735
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:88a00f0396c1add23df84668c8ea92a5d8aba5a2632d8ef86fa71aa6bcfd130e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chronic venous insufficiency"
  - "varicose veins"
  - "dependent edema"
  - "compression stockings"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2VmOyngCDsoJXrp6XrpZggKFZhcmljb3NlIFZlaW4pLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 여성이 2개월간 점점 심해지는 양쪽 다리 부종으로 내원했다. 하지에 2+ 함요부종과 여러 개의 늘어나고 구불구불한 정맥이 보였으며, 폐와 심장 진찰은 정상이었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 복부와 골반 CT
B. 경화요법
C. 압박스타킹
D. 항고혈압제 조절

## 해설

기립 관련 부종·정맥류·피부소양과 정상 심폐진찰은 만성 정맥질환을 시사한다. 선택지 중 압박스타킹 C는 초기 증상완화에 적절하며 동맥혈류를 확인한다. 지속 증상과 축성 역류가 확인되고 중재에 적합하면 정맥중재를 고려할 수 있어 모든 환자에게 장기간 압박만 우선하거나 일정기간을 의무화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정맥부전 압박 C는 초기 증상완화에 가능하나 모든 환자에서 장기 압박만 1차라는 해설을 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11523430/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003735
