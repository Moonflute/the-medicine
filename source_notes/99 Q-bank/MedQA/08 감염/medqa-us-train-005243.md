---
type: qbank
schema_version: 1
id: medqa-us-train-005243
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:df9be74f3c393935e79c573cefaa0ee4356fdffd2639a660562ff04ef35a7c2e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HPV 예방접종"
  - "청소년 예방접종"
  - "사람유두종바이러스"
  - "Human papillomavirus infection"
related_disease_slugs:
  - MTMg67aA7J246rO8L-u-sOyhsSDsvZjrlJzroZzrp4ggKENvbmR5bG9tYSBBY3VtaW5hdHVtKS5tZA
question_type: prevention
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

19세 남자가 연례 건강검진을 받으러 왔다. 영유아와 10세까지의 예방접종은 완료했고 12세에 Tdap과 4가 수막구균 백신을 1회 접종했다. 다음 중 가장 적절한 추가 예방접종 권고는?

## 선택지

A. A형간염 백신
B. 대상포진 백신
C. 사람유두종바이러스 백신
D. 파상풍 및 감량 디프테리아 톡소이드 추가접종

## 해설


19세 미완료 HPV 백신은26세까지 catch-up 대상이므로 C가 적절하다.12세 Tdap 후7년이라 일반적인10년 Td/Tdap booster 시점이 아직 아니지만 과거 Tdap1회가 평생 파상풍/디프테리아 추가접종을 없애는 것은 아니다. 수막구균 등 전체 접종력 보완도 실제 진료에서 확인하며 이 문항은 주어진 선택지의 비교다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005243 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HPV catch-up C 유지; Tdap 과거 접종이면 평생 추가 불필요하다는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/
- https://www.cdc.gov/pertussis/hcp/vaccine-recommendations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005243
