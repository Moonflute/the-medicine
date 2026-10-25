---
type: qbank
schema_version: 1
id: medqa-us-train-001446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ec693375665c3adfe2b7854671f8c063e17167a09b1413f5347f0d1ef5c8e34
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "acute otitis media"
  - "penicillin allergy"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7J207Je8IChPdGl0aXMgTWVkaWEpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 3일 동안의 발열과 왼쪽 귀 통증으로 어머니와 함께 내원했다. 오늘 아침부터 왼쪽 귀를 자주 만졌다. 아토피피부염 병력이 있어 밤에 가려워 증상이 생긴 것은 아닌지 어머니가 걱정한다. 최근 악화는 많지 않았고 마지막 악화는 일주일 전 수영장에서 두 번째 생일을 축하할 때쯤 가라앉았다. 6개월 전 인두염 항생제 치료 후 두드러기가 발생한 적이 있다. 약은 복용하지 않는다. 체온은 38.5°C (101.3°F), 맥박은 110회/분, 호흡수는 25회/분, 혈압은 90/50 mm Hg이다. 이경검사에서 불투명하고 팽윤된 고막이 보인다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 국소 하이드로코르티손과 겐타마이신 귀방울
B. 아지트로마이신 경구 투여
C. 오플록사신 귀 치료
D. 고막천자

## 해설

팽윤·불투명 고막과 지속 귀통증은 급성 중이염에 맞다. 과거 항생제 뒤 두드러기가 있어 원인 약물·중증도를 확인하며, 마크롤리드는 베타락탐 알레르기 상황의 대안이므로 보기 중 B가 가능하다. 다만 일반적 1차약은 아목시실린이며 아지스로마이신은 주요 균에 효과가 떨어질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: AOM의 보기 중 아지스로마이신 B 유지. 항생제 뒤 두드러기 이력을 부정하고 아지스로마이신을 보편적 1차약으로 둔 오류 수정.
- https://cps.ca/en/documents/position/acute-otitis-media

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001446
