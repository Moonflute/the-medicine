---
type: qbank
schema_version: 1
id: medqa-us-train-001971
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7ef60a412b3ba3d2e2508b37c9c4f63b71b14e2d50cee75efb5aacd698163b5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "catatonia"
  - "waxy flexibility"
  - "lorazepam challenge"
  - "Catatonia"
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 여성이 거의 움직이거나 말하지 않는다. 팔을 들어주면 그 자세를 유지하고, 팔을 옮길 때 부드럽고 일정한 저항이 느껴진다. 발열과 활력징후 이상은 없다. 원인을 평가하면서 시행할 초기 약물 시도는?

## 선택지

A. 할로페리돌
B. 브로모크립틴
C. 로라제팜
D. 벤즈트로핀

## 해설

무언증·자세 유지·납굴증은 긴장증의 단서다. 감시하에 로라제팜을 투여해 반응을 보며, 중증이거나 반응이 부족하면 전기경련치료를 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001971
- https://pubmed.ncbi.nlm.nih.gov/37039129/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 남자친구 자신이 이상행동한 것으로 읽히는 주어 오역과 허구 '베르니케-베르니케 테스트' 제거. 카타토니아에 로라제팜 원정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
