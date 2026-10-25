---
type: qbank
schema_version: 1
id: medqa-us-train-001480
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a1c733f3dc82e0dc7becb2a59bf5381d02341a92f1a96b3488b92b6724e1a7c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "type 1 diabetes mellitus"
  - "dehydration"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 하루 동안 무기력하고 여러 차례 오심과 구토가 있어 응급실에 내원했다. 2개월 동안 갈증이 증가했고 그동안 5.4 kg (11.9 lbs)이 감소했다. 그 외에는 건강하고 중증 질환 병력은 없다. 체온은 37.5°C (99.5°F), 혈압은 95/68 mm Hg, 맥박은 110회/분, 호흡수는 30회/분이다. 졸리고 약간 혼란스러우며 점막은 건조하다. 헤모글로빈 16.2 g/dL, 백혈구 9,500/mm3, 혈소판 380,000/mm3, 혈청 Na+ 130 mEq/L, K+ 5.5 mEq/L, Cl− 99 mEq/L, HCO3− 16 mEq/L, 크레아티닌 1.2 mg/dL, 포도당 570 mg/dL, 케톤 양성, 동맥혈 pH 7.25, pCO2 21 mm Hg이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 0.9% 생리식염수와 인슐린으로 정맥 수액
B. 5% 포도당과 0.45% 생리식염수로 정맥 수액
C. 0.9% 생리식염수와 염화칼륨으로 정맥 수액
D. 중탄산나트륨 정맥주사

## 해설

정답은 A이다. 고혈당·케톤양성·산증과 탈수는 DKA에 합당하다. 소아에서는 등장성 수액으로 초기 순환을 먼저 회복시킨 후 통상 1시간 이상 지난 시점에 K를 확인하면서 인슐린 주입을 시작한다. 인슐린 IV bolus는 피한다. A는 두 치료를 포함한다는 뜻이지 동시에 급속히 투여한다는 뜻은 아니며 K와 신경학적 상태를 반복 감시한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소아 DKA의 수액·인슐린 동시 즉시 투여라는 오독을 방지.
- https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001480
