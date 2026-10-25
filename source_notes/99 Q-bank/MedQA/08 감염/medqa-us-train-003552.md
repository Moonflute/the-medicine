---
type: qbank
schema_version: 1
id: medqa-us-train-003552
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c97f7c2e80134f258a2bf9f5760a5b39e1eb5dea5a1f80b28c9ebb62353ac08c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HSV esophagitis"
  - "HIV with low CD4 count"
  - "odynophagia"
  - "esophageal ulcers"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uLqOyInO2PrOynhCDqsJDsl7wgKEhlcnBlcyBTaW1wbGV4IEluZmVjdGlvbikubWQ
question_type: diagnosis
difficulty: standard
answer: A
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
---

# MedQA US 임상문제

## 문제

45세 남성이 2일간 지속된 연하통과 흉골 뒤 통증으로 내원했다. 최근 HIV 감염을 진단받았고 CD4 T세포 수는 80/mm3였다. 경험적 치료를 시작했지만 2주 후에도 호전이 없었다. 상부 내시경에서 상부 식도에 경계가 분명한 둥근 표재성 궤양이 여러 개 보였다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 단순헤르페스바이러스 감염
B. 하부식도괄약근의 일시적 이완
C. 근육층신경얼기 억제신경세포의 변성
D. 거대세포바이러스 감염

## 해설


내시경의 여러 작고 경계가 뚜렷한 원형 표재성 궤양은 선택지 중 HSV 식도염 A에 더 부합한다. CMV는 상대적으로 크고 깊은 선형 궤양이 전형적이지만 형태가 겹칠 수 있어 필요하면 생검으로 구분한다. HIV/CD4 수치만으로 HSV가 모든 식도염의 가장 흔한 원인이라고 단정하지 않는다. 일시적 LES 이완이나 억제신경 변성은 이 궤양 소견을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003552 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 작은 원형 표재성 식도궤양으로 HSV A 유지; CD4만으로 HSV가 모든 경우 가장 흔하다는 과장 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003552
