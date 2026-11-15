---
type: qbank
schema_version: 1
id: medqa-us-train-002936
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:259ea8225ecbe4130051b2456d5f594dc1e71798173905555373666fef3f3671
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "physiologic neonatal jaundice"
  - "cephalohematoma differential"
  - "bilirubin monitoring"
  - "newborn jaundice"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: standard
answer: D
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

재태 39주 만삭아가 생후 36시간에 퇴원을 앞두고 있다. 잘 먹고 진찰은 정상이다. 총 빌리루빈은 생후 시간·재태주수·위험인자를 반영한 광선치료 기준보다 2mg/dL 낮다. 추가로 필요한 조치는?

## 선택지

A. 치료 기준보다 낮으므로 황달 추적은 생략한다
B. 정상 영아라도 퇴원 전에 반드시 광선치료한다
C. 생후 한 달에만 빌리루빈을 재검한다
D. 치료 기준에 가까워 4–24시간 안에 혈중 빌리루빈을 다시 확인하도록 계획한다

## 해설

광선치료를 받지 않은 신생아의 퇴원 후 재검 시점은 현재 수치와 광선치료 기준의 차이로 정한다. 기준까지 2mg/dL 남은 경우에는 단기간에 재검할 수 있도록 퇴원과 추적을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 실제 빌리루빈 8.7→8.3과 불일치하는 8 mg/dL 절대 기준을 삭제하고 시간·재태주수별 판단으로 교정.
- https://doi.org/10.1542/peds.2022-058859

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002936
