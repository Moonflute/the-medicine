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

27세 남성이 양쪽 무릎 통증으로 진료를 받으러 왔다. 2주 전 급성 설사를 했고 이후 배뇨 시 작열감과 간헐적인 눈 통증·충혈, 흐린 시야가 생겼다. 무릎 활액 백혈구 수는 51,000/μL였다. 가장 적절한 치료는?

## 선택지

A. 아세트아미노펜
B. 알로푸리놀
C. 인도메타신
D. 레플루노마이드

## 해설


설사 뒤 관절염·요도증상과 눈염증은 reactive arthritis를 시사하며 통증·염증 조절에는 NSAID인 indomethacin C가 보기 중 적절하다. 다만 관절액 WBC51,000/µL만으로 감염성 관절염을 배제할 수 없어 배양·결정 검사를 포함한 평가가 필요하다. 눈통증·시야흐림과 홍채 주위 충혈은 uveitis 가능성이 있어 안과 평가를 지연하지 않는다. Leflunomide 등은 모든 상황에서 무관한 약이 아니라 만성/불응 관절염에서 별도로 고려하는 DMARD이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000034 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ReA NSAID C 유지하되51,000관절액으로 감염배제 못하며 ciliary injection·시야흐림은 단순결막염으로 축소하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000034
