---
type: qbank
schema_version: 1
id: medqa-us-validation-000034
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1dbb08428380b3b3eed8f4a6d5122b442fcc58a84de7fbc40a1cf28846c6c2fe
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "반응성 관절염"
  - "요도염"
  - "결막염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
  - MjAg67mE64eo6riw6rO8L-yalOuPhOyXvCAoVXJldGhyaXRpcykubWQ
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0xlZmx1bm9taWRlLm1k
---

# MedQA US 임상문제

## 문제

27세 남성이 장염에서 회복한 지 2주 뒤 두 무릎이 붓고 아프다. 관절액 배양과 결정 검사는 음성이고 전문 평가에서 반응성 관절염으로 진단했다. 감염이 지속되지 않고 신장·위장관 금기도 없다. 관절 증상의 초기 치료는?

## 선택지

A. 알로푸리놀
B. 고용량 항생제 장기 유지
C. 비스테로이드성 소염진통제
D. 메토트렉세이트 즉시 시작

## 해설


감염성 관절염을 제외한 초기 반응성 관절염에서 관절 증상은 소염진통제로 조절한다. 활성 감염이 있으면 별도로 치료하며, 지속되는 관절염은 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000034 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ReA NSAID C 유지하되51,000관절액으로 감염배제 못하며 ciliary injection·시야흐림은 단순결막염으로 축소하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000034
- https://www.nhs.uk/conditions/reactive-arthritis/
