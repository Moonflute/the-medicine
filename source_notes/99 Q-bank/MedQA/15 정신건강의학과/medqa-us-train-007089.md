---
type: qbank
schema_version: 1
id: medqa-us-train-007089
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f91c332259faf88f3fbca8fa10428915ecdad7034f3b65aab84892d2fe79c5f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 근긴장이상"
  - "할로페리돌 유발 추체외로 부작용"
  - "사경"
  - "안구운동발작"
  - "Acute dystonic reaction"
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

할로페리돌을 시작한 다음 날부터 목이 한쪽으로 돌아가고 눈이 위로 고정됐다. 환자는 의식이 명료하고 체온은 정상이며 기도 증상은 없다. 급성 증상을 완화할 약은?

## 선택지

A. 프로프라놀롤
B. 벤즈트로핀
C. 단트롤렌
D. 할로페리돌 추가 투여

## 해설

새로 시작한 도파민 차단제 뒤 발생한 통증성 사경과 안구편위는 급성 근긴장이상이다. 벤즈트로핀 같은 항콜린제가 치료에 쓰인다. 원인 약의 추가 투여를 재검토하고 기도 증상이 생기면 즉시 대응한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007089
- https://pubmed.ncbi.nlm.nih.gov/38502289/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 벤즈트로핀을 '무증상 부교감 차단제'로 설명한 비문 교정. 사경·안구운동발작의 항콜린 치료 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
