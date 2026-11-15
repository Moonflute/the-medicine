---
type: qbank
schema_version: 1
id: medqa-us-train-007948
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f20a083b96d947a898475f29cf53d5a088c9fa3ae0a5fe022976a64a6286cdeb
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "IgA vasculitis"
  - "leukocytoclastic vasculitis"
  - "Henoch-Schönlein purpura"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Zek64W47Z2QLeyJlOudvOyduCDsnpDrsJjspp0gKEhlbm9jaC1TY2hvbmxlaW4gUHVycHVyYSkubWQ
question_type: monitoring
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

6세 남아가 IgA 혈관염으로 진단됐다. 발진과 복통은 호전됐고 처음 혈압과 소변검사는 정상이다. 늦게 나타나는 신염을 발견하기 위한 계획은?

## 선택지

A. 증상이 재발할 때까지 소변검사를 하지 않는다
B. 혈압과 소변을 정기적으로 확인하고 적어도 6개월 동안 소변검사를 반복한다
C. 발진이 사라졌어도 예방 목적으로 매년 신장 생검을 한다
D. 혈청 IgA만 한 번 재검한다

## 해설


IgA 혈관염의 신장 침범은 나중에 증상 없이 생길 수 있다. 첫 소변검사가 정상이어도 적어도 6개월 동안 요검사를 반복하고, 혈압·단백뇨와 신기능을 상황에 맞춰 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007948 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 상기도감염 후 하지자반·관절통·복통의 IgA 혈관염과 leukocytoclastic vasculitis B가 일치하는 기본 병리를 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007948
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11666671/
