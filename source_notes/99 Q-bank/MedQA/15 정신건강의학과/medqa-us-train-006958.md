---
type: qbank
schema_version: 1
id: medqa-us-train-006958
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0024d2240e7b89529e5896f2659575600ebf7596c28226ba874e86202dcfd8ba
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "베르니케 뇌병증"
  - "코르사코프 증후군"
  - "티아민 결핍"
  - "전향성 기억상실"
question_type: prognosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uyoOultOuLiOy8gC3svZTrpbTsgqzsvZTtlIQg7Kad7ZuE6rWwIChXZXJuaWNrZS1Lb3JzYWtvZmYgU3luZHJvbWUpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남자가 구급차로 응급실에 이송되었다. 길에서 비틀거리며 걷는 모습으로 발견되었고, 술 냄새가 났으며 최근 사건에 관한 질문에 제대로 대답하거나 병력을 말하기 어려워했다. 급성 에탄올 중독으로 진단되었다. 밤새 정맥 수액을 맞고 잠을 잔 후 회복되어 말이 많아졌다. 그는 자신을 전쟁 영웅, 영화배우, 유명 교수라고 주장하는 터무니없는 개인사를 이야기한다. 신체검사에서 영양실조 상태로 마르고 헝클어져 있으며 경미하게 초조해 보인다. 관자놀이가 위축되어 있고 결막이 창백하다. 이 환자에게 티아민을 포함한 적극적인 치료를 시행했을 때 호전되지 않을 증상은 무엇인가?

## 선택지

A. 전향성 기억상실
B. 운동실조
C. 안근마비
D. 혼돈

## 해설

만성 알코올 사용·영양실조와 작화증은 코르사코프 기억장애를 시사한다. 제시된 증상 중 전향성 기억상실은 티아민 치료 뒤에도 특히 지속되기 쉬워 원문 정답이다. 베르니케뇌병증의 안구운동 이상·혼돈·보행장애는 치료로 호전될 수 있으나 회복 정도와 속도는 다르다. 모든 기억장애가 반드시 회복되거나 전향성 기억상실이 어느 환자에서도 전혀 호전되지 않는다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006958

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 티아민이 기억력을 회복시킨다면서 전향성 기억상실은 절대 호전 안 된다는 모순과 선지 문자 참조 제거. 코르사코프 기억장애의 상대적 지속성으로 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
