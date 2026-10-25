---
type: qbank
schema_version: 1
id: medqa-us-validation-000511
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:182cb211df8454e26922e3d39fa3f2622559da9e973de8dd3f5b325cff79276c
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "재발성 요로감염"
  - "여성 요도 길이"
  - "신혼 방광염"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 배뇨 시 작열감으로 진료를 받으러 왔다. 신혼이며 지난 4개월 동안 비슷한 증상이 3회 있었다. 어제부터 배뇨통과 빈뇨, 맑은 질분비물이 생겼고 발열, 오한, 요통은 없다. 니트로푸란토인을 처방받은 후 남편은 괜찮은데 왜 자신만 자주 이런 증상이 생기는지 물었다. 가장 적절한 설명은?

## 선택지

A. 파트너가 무증상 보균자이기 때문이다
B. 이전 에피소드의 치료가 불충분했기 때문이다
C. 여성의 요도가 더 짧기 때문이다
D. 과거 클라미디아 감염이 재발한 것이다

## 해설

여성의 짧은 요도는 회음부의 장내 세균이 요도를 거쳐 방광으로 올라가기 쉽게 하는 해부학적 요인이므로 C가 적절하다. 일반적인 재발성 방광염이 남편의 무증상 STI 보균이나 과거 클라미디아 재발 때문이라고 단정할 수는 없다. 질분비물 등 비전형 증상이 있으면 다른 원인도 평가하지만 이 문항은 성별 감수성 차이의 기본 기전을 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 세균이 방광으로부터 상승한다는 역방향 해부 설명을 회음부에서 방광으로의 상행 감염으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000511
