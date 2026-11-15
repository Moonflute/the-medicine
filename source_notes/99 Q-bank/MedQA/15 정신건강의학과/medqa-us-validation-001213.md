---
type: qbank
schema_version: 1
id: medqa-us-validation-001213
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:60f48f28d89115584d3cbbc9e00608cd7e002c8550d5c5c2b126d53441d4883c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공유정신병적 장애"
  - "피해망상"
  - "가족성 망상"
  - "Shared psychotic disorder"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

어머니와 성인 아들이 함께 진료를 받으며, 확인되지 않은 감시를 당한다는 같은 믿음을 말한다. 현재 신체 응급상황은 없다. 한 사람의 경험이 다른 사람에게 영향을 미쳤는지 평가하기 위한 첫 접근은?

## 선택지

A. 같은 믿음이므로 둘에게 같은 약을 즉시 처방한다
B. 두 사람이 함께 이야기한 내용만으로 두 사람 모두 같은 진단을 내린다
C. 증상 확인을 위해 한 사람에게 상대방을 설득하라고 한다
D. 두 사람을 각각 면담해 믿음의 시작과 독립적인 증상, 안전 문제를 확인한다

## 해설


가까운 두 사람이 같은 믿음을 보일 때는 독립적인 병력과 정신상태를 확인한다. 실제 피해나 환경적 설명, 문화적 맥락도 살피며 서로 같은 진단이라고 가정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001213
- https://www.nice.org.uk/guidance/cg178/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·모든 선지·답·해설 대조. 공유된 의심의 독립적 평가를 위해 어머니·아들을 따로 면담하는 초기 접근 타당; 실제 노출·폭력 위험 평가는 병행해야 함.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
