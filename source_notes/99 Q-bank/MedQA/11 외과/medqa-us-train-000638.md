---
type: qbank
schema_version: 1
id: medqa-us-train-000638
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e2f5eb99c24bced298a864cb7c096975a6bad829f119a145cd669383e15377e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "acute cholecystitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: management
difficulty: complex
answer: B
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

43세 여성이 6시간째 지속되는 우상복부 통증으로 내원했다. 머피 징후가 양성이고 초음파에서 담석과 담낭벽 비후가 확인됐다. 총담관은 확장되지 않았다. 전신 상태가 안정적이고 수술 금기가 없는 급성 결석성 담낭염의 치료는?

## 선택지

A. 내시경 역행 담췌관 조영술(ERCP)
B. 복강경 담낭 절제술
C. 경피적 담낭 배액술
D. 충격파 쇄석술

## 해설


지속되는 우상복부 통증, 머피 징후, 담석과 담낭벽 비후는 급성 결석성 담낭염에 부합한다. 수술 가능한 안정 환자에게는 조기 복강경 담낭절제술이 표준 치료다. 수술 위험이 매우 높은 경우 등에는 배액을 고려할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000638`와 직접 대조했다.
- 판정: Murphy 징후·지속 RUQ 통증에서 B 유지. 누락 초음파의 벽비후/주위액을 본 것처럼 기술한 해설과 벽이 얇아진다는 오류 제거. 텍스트만으로 선지 선택은 가능; Hb 단위 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7643471/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000638
- WSES 급성 결석성 담낭염 진료지침: https://pubmed.ncbi.nlm.nih.gov/33153472/
