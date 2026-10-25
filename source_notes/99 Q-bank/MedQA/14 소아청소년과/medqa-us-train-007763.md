---
type: qbank
schema_version: 1
id: medqa-us-train-007763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:990ab576b06ea73c4ed7be5055093bd9ef7cd3f38f7b8ca055eea127b70644fe
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "hand-foot-and-mouth disease"
  - "Coxsackievirus"
  - "enterovirus"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY7KGx6rWs67ORIChIYW5kLUZvb3QtTW91dGggRGlzZWFzZSkubWQ
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 2일 동안 지속된 발열과 피부 발진으로 소아과에 왔다. 만삭에 정상 질식분만으로 태어났고 신생아기에는 문제가 없었다. 다리에 심한 통증이 있고 먹기 힘들어한다. 체온 38.6°C(101.4°F), 맥박 102회/분, 호흡수 22회/분이다. 신체검사에서 손, 발, 몸통에 여러 구진이 보인다. 신경학적 검사에서 하지 근력이 감소되어 있다. 구강 내 검사에서 경구개에 2 mm 크기의 붉은 반점이 여러 개 보인다. 다음 중 가장 가능성 높은 원인균은?

## 선택지

A. 콕사키바이러스
B. 단순포진바이러스
C. 거대세포바이러스
D. 파보바이러스 B19

## 해설

손발·구강 병변은 수족구병에 부합하고 보기 중 원인군은 Coxsackievirus(A)이다. Coxsackie A16/A6와 EV-A71은 모두 원인이 될 수 있으나 서로 같은 바이러스 명칭이 아니다. 실제 하지 근력저하는 단순 수족구병의 흔한 정상 소견이 아니며 신경학적 합병증을 신속히 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Coxsackievirus와 EV-A71을 동의어로 쓴 오류 교정 및 근력저하 경고 명시.
- https://www.cdc.gov/hand-foot-mouth/causes/
- https://www.paho.org/sites/default/files/2025-03/2025-mar-26-phe-epidemiological-alert-hand-foot-mouth-disease.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007763
