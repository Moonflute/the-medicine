---
type: qbank
schema_version: 1
id: medqa-us-train-009621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bbb64451260cec6f5ce95115f3e97282b03043aed8ef42e3199ef4eb61df431b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "recurrent urinary tract infection in pregnancy"
  - "임신 중 재발성 요로감염"
  - "nitrofurantoin prophylaxis"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 24주인 22세 여성이 배뇨 시 작열감으로 내원했다. 자궁은 배꼽 위까지 커져 있다. 소변 배양에서 대장균이 100,000 CFU 이상 검출되었고 7주 전에도 적절한 치료로 호전된 요로감염이 있었다. 가장 적절한 관리는 무엇인가?

## 선택지

A. 니트로푸란토인
B. 세팔렉신
C. 니트로푸란토인 투여 후 임신 나머지 기간 예방적으로 계속 투여
D. 세팔렉신 투여 후 임신 나머지 기간 정맥 항생제 예방

## 해설

임신 중 두 번째 UTI이므로 현재 감염을 치료하고 감수성에 맞는 저용량 일일 억제요법을 고려할 수 있어 C가 제시된 선택지 중 가장 포괄적이다. 근거는 제한적이며 모든 환자에서 가장 안전·효과적인 유일한 방법이라고 하지 않는다. 니트로푸란토인 G6PD 결핍·분만 근접 등 주의사항과 대체약을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 재발 UTI 억제요법은 필수가 아닌 고려 사항이며 감수성·개별 금기 반영.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009621
