---
type: qbank
schema_version: 1
id: medqa-us-train-001334
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ba81181769eb73a25dfd8870298d35739912e8665df5cc6b712277d6bd18e2a
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic sclerosis"
  - "scleroderma esophagus"
  - "Raynaud phenomenon"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

전신경화증이 있는 44세 여성이 고형식부터 시작해 최근 액체도 삼키기 어렵고 체중이 5kg 줄었다. 역류 치료에도 진행한다. 단순 식도운동장애로 결론 내리기 전에 먼저 할 검사는?

## 선택지

A. 위산 억제제 증량 후 6개월만 관찰
B. 근전도 검사
C. 상부위장관 내시경
D. 시작부터 식도 내압검사만 시행

## 해설


전신경화증은 식도운동을 떨어뜨리지만 진행성 연하곤란과 체중 감소는 협착이나 암을 평가해야 할 경고 증상이다. 내시경으로 구조적 원인을 먼저 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-001334` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Raynaud·손가락 피부경화·석회화·혈관확장의 제한피부경화증 맥락과 식도 평활근 위축/섬유화 C가 일치.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001334
- https://doi.org/10.14309/AJG.0000000000001538
