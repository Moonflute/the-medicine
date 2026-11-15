---
type: qbank
schema_version: 1
id: medqa-us-validation-000347
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0e23b8890695fcbc506a70fbe2208bcdd224afb5604523763ef672ef64953dc0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "고전적 열사병"
  - "체온조절 장애"
  - "시상하부 반응 저하"
  - "Heat stroke"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXtOyniO2ZmCAoSGVhdCBJbGxuZXNzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

폭염에 야외에 오래 있던 73세 남성이 혼돈 상태로 내원했다. 중심체온이 41.5℃다. 기도와 순환을 평가하면서 가장 시급히 할 처치는?

## 선택지

A. 아세트아미노펜을 주고 경과를 본다
B. 혈액검사 결과를 기다려 열사병을 확진한다
C. 이불로 덮고 체온을 한 시간 뒤 잰다
D. 즉시 적극적으로 냉각한다

## 해설

폭염 노출 뒤 심부 고체온과 의식 변화가 있으면 열사병을 의심한다. 기도·순환을 관리하면서 적극적 냉각을 지연하지 않는다. 해열제로 해결되는 발열과 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고전적 열사병에서 열 방출 실패라는 A를 유지하되 시상하부 파괴나 땀 분비 완전 소실이 모든 열사병의 필수 조건인 듯한 단정을 정리한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000347
- https://www.kdca.go.kr/bbs/kdca/55/312633/artclView.do
