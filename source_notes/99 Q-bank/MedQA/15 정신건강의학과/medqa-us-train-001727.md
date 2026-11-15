---
type: qbank
schema_version: 1
id: medqa-us-train-001727
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0f83585be2e53f2545e4f1128ca5f1faed4e3d5e3e0eda455fe7e8265fb1cbc2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "open-ended communication"
  - "medication adherence"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압 환자의 혈압이 여러 번 높게 나왔다. 약을 추가하기 전에 실제 복용과 어려움을 알아보려 한다. 가장 적절한 질문은?

## 선택지

A. “약을 제때 잘 드시고 계시죠?”
B. “지난 일주일 동안 언제 어떻게 드셨나요? 놓친 날에는 어떤 일이 있었나요?”
C. “혈압이 높은 건 약을 거르셔서 그런 것 아닌가요?”
D. “일단 약을 늘려도 괜찮겠죠?”

## 해설


기간을 구체화해서 실제 복용과 걸림돌을 비난 없이 묻는다. 복용이 어려웠던 이유를 알아야 처방을 늘릴지, 부작용·비용·일정 문제를 먼저 해결할지 판단할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001727
- https://www.nice.org.uk/guidance/cg76/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 모든 영한 선지와 답 대조. 복약 여부를 유도·예단하지 않는 개방형 원인 탐색 질문을 묻는 의사소통 해설 적절.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
