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
answer: C
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

생후 64시간 된 여아가 퇴원을 앞두고 평가받고 있다. 임신 39주에 겸자 보조 질식분만으로 태어났고 산모는 만성 질환 없이 모든 산전 진료를 받았다. 산모 혈액형은 A+이다. 생후 1일에 두피 열상이 있었고 처음에는 모유수유가 어려웠으나 간호사의 도움으로 빠르게 호전되었다. 젖은 기저귀는 충분하다. 신체검사에서 공막 황달과 황달 피부가 보인다. 두피 열상은 변동이나 주위 홍반 없이 온전하다. 아기를 살짝 들어 올렸다가 놓으면 팔을 벌렸다가 안으로 당기며 크게 운다. 혈액형은 AB-, 총 빌리루빈 8.7 mg/dL, 직접 빌리루빈 0.5 mg/dL이고 6시간 후 총 빌리루빈은 8.3 mg/dL로 재측정되었다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 쿰스검사
B. 교환수혈
C. 관찰
D. 광선치료

## 해설

39주 생후 64–70시간에 총 빌리루빈이 8.7에서 8.3 mg/dL로 감소하고 수유·배뇨가 양호하므로, 제시된 선택지에서는 관찰(C)이 적절하다. 치료는 생후 시간, 재태주수와 신경독성 위험인자를 반영한 기준으로 결정한다. 8 mg/dL이라는 일률적인 치료 경계가 있는 것은 아니며 퇴원 후 추적을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 실제 빌리루빈 8.7→8.3과 불일치하는 8 mg/dL 절대 기준을 삭제하고 시간·재태주수별 판단으로 교정.
- https://doi.org/10.1542/peds.2022-058859

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002936
