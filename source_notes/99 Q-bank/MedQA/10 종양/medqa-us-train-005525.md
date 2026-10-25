---
type: qbank
schema_version: 1
id: medqa-us-train-005525
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9deacf1a86cd8f9176d70356907dcdeab67af84601025a08396840508afdc68
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "전립선암 골전이"
  - "척추 전이성 병변"
  - "완화적 방사선치료"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
question_type: management
difficulty: standard
answer: D
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

59세 남자가 2개월 전부터 시작된 점점 심해지는 요통으로 내원했다. 통증은 둔한 통증에서 잠들기 어려울 정도의 지속적인 욱신거림으로 진행했고 ibuprofen과 acetaminophen으로 호전되지 않는다. 대변실금, 사지위약이나 감각이상은 없다. 전립선암으로 2년 전 양측 고환절제술을 받았고 이후 요실금이 있다. 현재 약물은 복용하지 않으며 천골·왼쪽 장골 전이가 있으며 MRI에서 L5 척추체에 새로운 경화성 병변이 보인다. 다음 중 가장 적절한 처치는?

## 선택지

A. 플루타미드
B. 척추 수술
C. 전립선절제술
D. 국소 방사선치료

## 해설


새 L5 골전이 부위의 지속 통증이 단순 진통제로 조절되지 않고 신경학적 압박 증상은 기술되지 않아, 보기 중 국소 방사선 D가 통증 완화에 적절하다. 수술 여부는 척추 불안정성·압박과 전신 상태에 따라 다르므로 모든 척추전이에 수술을 우선하지 않는다. 거세 이후 질환 진행에 대한 전신치료 재평가도 별도로 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005525 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 방사선 선택의 핵심인 신경결손 부재·거세치료력·진통제 실패 등이 한국어에서 누락되어 복구. 통증성 골전이 국소방사선 D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005525
