---
type: qbank
schema_version: 1
id: medqa-us-train-005805
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c4860116698dc113d6adbbb561973bc8092bb7065995ef8758eeabb7eb2af5a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "휴일 심장 증후군"
  - "발작성 심방세동"
  - "알코올 유발 부정맥"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u2gOygleunpS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 남성이 전날 과음한 뒤 두근거림으로 내원했다. 처음 심전도에서 P파가 없는 불규칙한 좁은 QRS 리듬이었고 1시간 후 동율동으로 돌아왔다. 혈압은 안정적이고 심부전이나 갑상샘 이상은 없다. 급성기 이후 가장 적절한 계획은?

## 선택지

A. 과음을 피하도록 상담하고 재발과 뇌졸중 위험을 평가한다
B. 동율동으로 회복했어도 즉시 동기화 심율동전환을 한다
C. 재발 예방 목적으로 아데노신을 정기 투여한다
D. 음주가 계기였으므로 재발이나 뇌졸중 위험 평가를 생략한다

## 해설

과음은 심방세동을 유발할 수 있다. 이미 동율동이고 안정적이므로 즉시 심율동전환할 이유는 없다. 유발인자를 줄이고, 재발 여부와 항응고 필요성은 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자연 동율동 전환 후 관찰 A는 유지하되 모든 AF에서 약물·추적 불필요라고 일반화하지 않음.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005805
