---
type: qbank
schema_version: 1
id: medqa-us-train-007291
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:26e7d34ebb8658c39966eac80bdd1bf6e61813554ec0d8b627b126e9ba8a9ee4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골반염"
  - "난관 반흔"
  - "난관 인자 난임"
  - "불임"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 경험이 없는 27세 여성이 1년 동안 남편과 주 1~2회 규칙적으로 성관계를 했지만 임신하지 못해 난임 평가를 받으러 내원했다. 최근 남편의 정액검사에서 정자 수는 정상이다. 2년 전 발열과 하복부 통증을 동반한 질환을 앓았으나 치료 없이 호전되었다. 초경은 12세였고 월경은 28일 간격으로 규칙적이며 4~5일 지속된다. 결혼 전 남성 파트너 4명과 성생활을 했고 에스트로겐과 프로게스테론 복합 경구피임약을 꾸준히, 차단 피임은 간헐적으로 사용했다. 임신을 위해 1년 전 경구피임약을 중단했다. 키는 165cm(5피트 5인치), 체중은 84kg(185lb), BMI는 30.8kg/m²이다. 신체검사에서 이상은 없다. 이 환자의 난임을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 다낭성 난소 증후군
B. 경구피임약 장기 사용
C. 일차성 난소기능부전
D. 난관 반흔

## 해설

과거 발열과 하복부 통증을 동반한 질환, 성매개감염 노출 가능성은 과거 골반염과 이후 난관 반흔을 시사한다. 난관 손상은 난자와 정자의 이동·만남을 방해하므로 D가 가장 적절하다. 원문은 임신 경험이 없는 여성으로, 이 사례를 이차 난임이라고 부르거나 난관 반흔이 모든 이차 난임의 가장 흔한 원인이라고 일반화할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: nulligravid→미혼 오역 및 임신력이 없는 환자를 이차 난임이라고 단정한 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007291
