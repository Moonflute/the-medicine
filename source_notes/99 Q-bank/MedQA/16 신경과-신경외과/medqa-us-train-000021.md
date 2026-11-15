---
type: qbank
schema_version: 1
id: medqa-us-train-000021
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:39469986d51f97ce6f81e21c3faac2a93f47bdb7eb8ac5324f985999f52f9a6a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "인격 장애"
  - "전이성 전립선암"
  - "마미 증후군"
  - "원추 증후군"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rp4jrr7jspp3tm4TqtbAgKENhdWRhIEVxdWluYSBTeW5kcm9tZSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

전이성 전립선암 환자에게 새 허리 통증, 진행하는 양쪽 다리 위약과 회음부 감각저하가 생겼다. 종양에 의한 척수 또는 마미 압박을 의심한다. 즉시 할 조치는?

## 선택지

A. MRI 결과가 나올 때까지 스테로이드를 투여하지 않는다
B. 신경학적 증상과 관계없이 외래 방사선 일정을 잡는다
C. 덱사메타손을 신속히 시작하면서 응급 MRI와 전문팀 평가를 진행한다
D. 진통제에 반응하면 신경학적 평가를 미룬다

## 해설

암 환자의 새 신경 결손은 악성 척추 신경 압박의 응급 신호다. 영상과 감압·방사선 평가를 서두르면서 덱사메타손을 사용한다. 비종양성 마미 압박에 일괄 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 스테로이드 선행을 모든 마미증후군에 일반화한 해설 수정. 전립선암 전이성 압박의 맥락에서 dexamethasone과 긴급MRI A 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng234/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000021
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations
