---
type: qbank
schema_version: 1
id: medqa-us-train-005749
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55ee59f8ab9afca77ec67505a483feee33e91d6e2019f4442806d897ba217d1c
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "백내장"
  - "수정체 경화"
  - "적색반사 소실"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-uwseuCtOyepSAoY2F0YXJhY3QpLm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 여성이 지난 1년 동안 악화된 통증 없는 흐린 시력으로 안과를 방문했다. 불빛 주변에 달무리가 보이고 특히 밤에 전조등 눈부심 때문에 운전하기 어렵다고 한다. 신체검사에서 적색반사가 없다. 다음 중 이 환자의 시각 증상을 일으키는 가장 가능성 높은 병리는 무엇인가?

## 선택지

A. 각막부종
B. 망막 변성
C. 수정체 경화
D. 시신경유두 손상

## 해설

고령에서 진행하는 무통성 시력저하, 야간 눈부심·달무리와 적색반사 소실은 백내장에 합당하다. C의 수정체 경화는 노화에 따른 핵경화성 백내장의 변화와 연결되며, 수정체 단백질·구조 변화로 혼탁과 빛 산란이 생겨 증상을 일으킨다. 적색반사 소실은 광학매체 혼탁의 단서이지 혼탁이 없다는 뜻이 아니다. 단순한 노안의 조절력 감소와는 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 백내장은 수정체 혼탁이 아니라는 정반대 설명을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005749
