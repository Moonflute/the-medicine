---
type: qbank
schema_version: 1
id: medqa-us-train-001709
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:476f6c668f4f8df8f181d5ec047de6f8dd9a4021db4af11a05838ce189030409
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "esophageal button battery"
  - "foreign body ingestion"
  - "endoscopic removal"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66y86rG0IOyCvO2CtCAoRm9yZWlnbiBCb2R5IEluZ2VzdGlvbikubWQ
difficulty: standard
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

2세 아이가 단추전지를 삼킨 지 한 시간 됐다. 증상은 없지만 X선에서 전지가 식도에 걸려 있다. 가장 적절한 조치는?

## 선택지

A. 금식 시간을 채울 때까지 내시경을 미룬다
B. 두 시간 뒤 X선에서 움직이지 않았을 때만 제거한다
C. 즉시 전문팀에 연락해 응급 내시경으로 제거한다
D. 위로 내려갈 때까지 기다리고 대변에서 확인한다

## 해설

식도의 단추전지는 증상이 없어도 짧은 시간에 중증 손상을 일으킬 수 있다. 금식 시간을 기다리지 않고 가능한 한 빨리 제거한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 식도 단추전지 즉시 제거 D 유지. 2시간 이내에서만 응급이라는 잘못된 조건 교정.
- https://www.poison.org/battery/guideline

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001709
- https://pubmed.ncbi.nlm.nih.gov/33555169/
- https://doi.org/10.1002/jpn3.70485
