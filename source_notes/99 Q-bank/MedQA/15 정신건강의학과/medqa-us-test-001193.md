---
type: qbank
schema_version: 1
id: medqa-us-test-001193
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4938b8afcbeaa60ea12462a93ff01631ae703f4ed74ec42e237143797c7802f7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 식욕부진증"
  - "저체중 왜곡"
  - "인지행동치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 치어리딩 연습 중 쓰러져 응급실에 왔다. 혈압 88/55 mmHg, 맥박 55회/분이었고 수액을 투여받았다. 저체중이지만 자신을 뚱뚱하다고 주장하며 추가 수액과 병원 식사를 거부했다. 이 상태의 장기 관리로 가장 적절한 것은?

## 선택지

A. 인지행동치료
B. 입원 정신과 치료
C. 항우울제
D. 식욕촉진제

## 해설

저체중인데도 자신을 뚱뚱하다고 여기고 식사를 거부하는 양상은 신경성 식욕부진증에 부합한다. 질문은 장기 관리를 묻고 있으므로 제시된 선택지 중 섭식장애에 초점을 둔 인지행동치료가 적절하다. 다만 실신·저혈압·서맥이 있는 현재 상황에서는 신체적 안정화와 영양 평가·회복, 필요 시 입원 치료가 우선이며, 장기 치료도 영양·신체 모니터링과 정신치료를 결합한다. CBT만이 모든 환자의 유일한 최선 치료라는 의미는 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001193

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 장기 CBT 정답 유지. 불안정한 활력징후에서 즉각적 신체 안정화·영양 치료가 불필요하다는 인상을 제거하고 단일 최우수 단정 완화.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng69/chapter/Recommendations
