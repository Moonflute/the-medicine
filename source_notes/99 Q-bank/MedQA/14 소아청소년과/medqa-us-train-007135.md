---
type: qbank
schema_version: 1
id: medqa-us-train-007135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6f623735f61d1555b7c6dc02fa39b65375c4cf4ecb6b80fb285c63cca93e42c4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "낭성 섬유증"
  - "녹농균"
  - "흡입 토브라마이신"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW5DbGF2dWxhbmF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVG9icmFteWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltU3VsZmFtZXRob3hhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 여아가 한 달 동안 지속된 기침으로 부모와 함께 소아과에 내원했다. 2년 전 낭성 섬유증을 진단받아 정기적으로 흉부 물리치료를 받고 매년 독감 백신을 맞고 있다. 부모는 지난 한 달 동안 밤낮으로 기침하고 걸쭉하며 화농성이고 악취 나는 가래를 뱉는다고 한다. 이런 에피소드는 처음이라 걱정한다. 발열, 오한 또는 독감 유사 증상은 없다. 혈압은 100/60 mmHg, 맥박은 82회/분, 호흡수는 16회/분이다. 신체검사에서 하폐야 호흡음이 감소하고 호기성 천명이 들린다. 가래 배양에서 호기성, 유당을 발효하지 않으며 산화효소 양성인 그람음성 간균이 자랐다. 현재 증상을 치료한 후 고려할 예방요법은 무엇인가?

## 선택지

A. 경구 아목시실린/클라불란산
B. 흡입 토브라마이신
C. 경구 트리메토프림-설파메톡사졸
D. 경구 시프로플록사신

## 해설

배양 소견은 Pseudomonas aeruginosa에 부합한다. CF에서 초기 또는 새 녹농균 검출 시 흡입 tobramycin(B)을 이용한 근절 치료가 권장되며, 만성 감염에서는 억제 요법을 평가한다. 녹농균이 전혀 검출되지 않은 모든 환자의 일차 예방으로 투여한다는 의미가 아니다. Ciprofloxacin이 어떤 경우에도 효과가 없다는 주장도 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초기 녹농균 검출 후 근절/억제 치료와 감염 전 일률적 예방을 구별.
- https://www.cff.org/medical-professionals/eradication-initial-p-aeruginosa-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007135
