---
type: qbank
schema_version: 1
id: medqa-us-train-006333
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:414b2dfca997c4ebd6ae7a7b979297d2816c733e45cd354445547208e2f401ff
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "급성 부고환염"
  - "성매개 감염"
  - "임균 및 클라미디아 감염"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-q4ieyEsSDrtoDqs6DtmZjsl7wgKEFjdXRlIGVwaWRpZHltaXRpcykubWQ
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 22세 남성이 5일 동안 점점 심해지는 음낭 통증과 부종으로 대학 보건진료소에 내원했다. 배뇨통과 빈뇨도 있다. 이런 통증은 처음이다. 평소 건강하다고 생각하며 복용하는 약은 없다. 성관계를 하는 상대는 한 명이고 콘돔은 일관되게 사용하지 않는다. 체온은 36.7℃(98.1℉), 혈압은 115/70 mm Hg, 맥박은 분당 84회, 호흡수는 분당 14회이다. 진찰에서 오른쪽 음낭이 붓고 압통이 있으며, 특히 오른쪽 고환 뒤쪽에서 심하다. 프렌 징후는 양성이다. 그 외 신체진찰은 특이사항이 없다. 도플러 초음파에서 고환 혈류가 증가되어 있다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 근육주사 세프트리악손과 경구 독시사이클린
B. 환자와 성 파트너에게 경구 메트로니다졸
C. 근치적 고환절제술
D. 수술적 탐색

## 해설

점진적인 음낭 통증, 부고환 부위 압통, 배뇨 증상과 증가한 혈류는 급성 부고환염에 합당하다. 성매개 원인이 의심되는 안정된 외래 환자의 CDC 권고는 ceftriaxone 근육주사와 경구 doxycycline 조합이므로 A의 경로를 IM으로 교정하였다. 원문에는 IV라고 되어 있었으나 이를 표준 외래 경로라고 그대로 설명하지 않았다. 원인균 NAAT와 배양, 파트너 평가 및 추적이 필요하며 Prehn 징후 하나만으로 염전을 배제해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 A도 IV이나 안정된 외래 STI 의심 급성 부고환염의 CDC 표준 투여경로는 ceftriaxone IM이므로 약물 조합·정답 A를 유지하며 경로만 교정.
- 공식/학회 근거: https://www.cdc.gov/std/treatment-guidelines/epididymitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006333
