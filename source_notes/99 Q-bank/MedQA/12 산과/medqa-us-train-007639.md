---
type: qbank
schema_version: 1
id: medqa-us-train-007639
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6bf2ba1b9ec4e631918ee9a51e77710640ae9d2008cdd0eef0ecf53e031020e3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "active-phase arrest"
  - "labor arrest"
  - "cesarean delivery"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2ZnOyEseq4sCDsoJXsp4Ag7J6l7JWgIChBY3RpdmUgUGhhc2UgQXJyZXN0IERpc29yZGVyKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 39주 산모가 파수 후 경부 7 cm에서 옥시토신을 투여받는다. 태아 상태는 안정적이다. 4시간 동안 경부가 더 열리지 않았지만 자궁 내압 측정에서 수축 강도가 계속 불충분하다. 다음 계획은?

## 선택지

A. 가능한 범위에서 옥시토신을 최적화하고 적절한 시간까지 재평가한다
B. 4시간이 지났으므로 수축 강도와 무관하게 즉시 제왕절개한다
C. 경부가 열리지 않았지만 흡입분만을 시행한다
D. 태아와 산모 모니터링을 중단하고 바로 귀가시킨다

## 해설

충분한 수축에서 4시간 동안 개대 변화가 없을 때와 구분한다. 수축이 불충분하고 산모·태아 상태가 안정적이면 옥시토신으로 촉진하며 보통 6시간 기준까지 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 하강이 전혀 없다는 오류 및 활동기 정지의 수축 강도 요건 수정.
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007639
- https://doi.org/10.1097/AOG.0000000000005447
