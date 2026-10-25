---
type: qbank
schema_version: 1
id: medqa-us-train-010161
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35ffd627355f9d308df1b4597ac07dd5b3e06b344b77c866f906933cc02f7d79
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "영아돌연사증후군"
  - "바로 눕혀 재우기"
  - "수면 안전"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JiB7JWEIOq4ieyCrCDspp3tm4TqtbAgKFN1ZGRlbiBJbmZhbnQgRGVhdGggU3luZHJvbWUpLm1k
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

생후 4개월 아프리카계 미국인 남아가 건강검진을 위해 소아과에 내원했다. 만삭 정상 질식분만으로 태어나 지금까지 건강했고 4세 형은 겸상적혈구병이 있다. 모유만 먹고 비타민 D를 보충하며 예방접종은 최신이다. 건강해 보이고 키는 70백분위수, 체중은 75백분위수이며 심폐 진찰은 정상이다. 어머니는 이 연령대에 영아돌연사증후군이 흔하다는 이야기를 듣고 더 알고 싶어 한다. 다음 중 이를 예방하기 위한 가장 중요한 권고는?

## 선택지

A. 부모와 함께 재우기
B. 바로 누운 자세로 재우기
C. 아기 주변에서 아무도 담배를 피우지 않도록 하기
D. 가정에서 심폐 모니터링

## 해설

모든 수면에서 바로 눕혀 재우기(B)가 핵심이다. 단단하고 평평한 별도 수면 공간을 사용하고 같은 방에서 지내되 침대를 공유하지 않으며, 담배 연기와 부드러운 침구를 피한다. 가정 심폐 모니터가 SIDS 예방을 대체하지 않는다. 특정 기전 하나로 예방 효과를 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: SIDS 감소 권고를 보존하고 기전의 과잉 확정 대신 안전 수면 원칙으로 교정.
- https://doi.org/10.1542/peds.2022-057991

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010161
