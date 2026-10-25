---
type: qbank
schema_version: 1
id: medqa-us-train-003765
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03b5073f752d3b15280a25dfede1b2b86e68f20beb72544634dca0f28b77731f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "central precocious puberty"
  - "gonadotropin-dependent puberty"
  - "GnRH agonist"
  - "leuprolide"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 조기 성발달로 내원했다. 기름진 얼굴 피부, 거친 액와모, Tanner 3단계 음모와 Tanner 2단계 고환이 있고 골연령은 10세였다. 기저 LH와 FSH가 상승했으며 뇌 MRI는 정상이었다. 다음 중 가장 적절한 다음 치료는?

## 선택지

A. 방사선치료
B. 류프로라이드 치료
C. 고환 초음파
D. 관찰

## 해설

7세 남아의 고환발달·상승 gonadotropin과 빠른 골연령은 중추성 성조숙증에 부합한다. GnRH agonist인 leuprolide B를 지속적으로 투여하면 초기 자극 뒤 뇌하수체 GnRH receptor 탈감작/down-regulation으로 LH/FSH와 성호르몬 분비를 억제한다. 정상적인 박동성 GnRH 자극과 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Leuprolide 지속투여는 receptor down-regulation으로 억제하는데 지속 자극만으로 억제한다고 한 설명 보완.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003765
