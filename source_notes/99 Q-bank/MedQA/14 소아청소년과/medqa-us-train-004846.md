---
type: qbank
schema_version: 1
id: medqa-us-train-004846
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9f9eb42ed86822ed2f58c676c42d9ae2211bb06cf0f573f37ff1f08d18faf8b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "메켈 게실"
  - "소아 무통성 하부위장관 출혈"
  - "테크네튬-99m 퍼테크네테이트 스캔"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: complex
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

2세 남아가 설사나 구토 없이 검붉은 변을 본 뒤 창백해져 내원했다. 우하복부 압통이 있고 대변 잠혈검사는 양성이며 혈색소는 9 g/dL, 혈소판 수는 정상이다. 다음 단계로 시행할 검사는?

## 선택지

A. 대변 배양검사
B. 우유 단백 제거 식이
C. 테크네튬-99m 퍼테크네테이트 스캔
D. 복부 초음파검사

## 해설

설사·구토 없이 검붉은 변과 빈혈이 생긴 어린 소아에서는 Meckel 게실의 이소성 위점막에 의한 출혈을 의심한다. Tc-99m pertechnetate 스캔(C)은 이소성 위점막을 검출하는 적절한 검사이다. 모든 장출혈에 보편적으로 가장 민감한 검사인 것은 아니며 음성도 완전 배제를 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Meckel 스캔을 모든 소아 출혈의 최고 민감도 검사로 일반화한 설명을 보정.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004846
