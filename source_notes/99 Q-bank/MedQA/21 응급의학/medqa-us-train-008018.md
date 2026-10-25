---
type: qbank
schema_version: 1
id: medqa-us-train-008018
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:539a21ce17f0d857b29fe3df3946513624429b7eefb057a9b42ed43f849deb90
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "exertional heat stroke"
  - "hypernatremia"
  - "initial isotonic fluid resuscitation"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXtOyniO2ZmCAoSGVhdCBJbGxuZXNzKS5tZA
  - MDUg7Iug7J6lL-qzoOuCmO2KuOulqO2YiOymnSAoSHlwZXJuYXRyZW1pYSkubWQ
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 열사병의 즉시 냉각을 누락한 수액 단독 선택지를 교정"
curation_status: "revised"
curation_reason: "열사병의 즉시 냉각을 누락한 수액 단독 선택지를 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

23세 남자가 마라톤을 완주한 후 의식변화로 응급실에 왔다. 비만과 불안 병력이 있으나 현재 복용 약물은 없다. 체온 104°F(40°C), 혈압 147/88 mmHg, 맥박 200회/분, 호흡수 33회/분, 산소포화도 99%이다. 점막이 건조하고 피부가 뜨겁고 붉으며 질문에 부적절하게 대답한다. 혈청 Na⁺ 165, Cl⁻ 100, K⁺ 4.0, HCO₃⁻ 22 mEq/L, BUN 30 mg/dL, 포도당 133 mg/dL, 크레아티닌 1.5 mg/dL이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 50% 생리식염수와 50% 포도당
B. 저장성 식염수
C. 젖산 링거액
D. 즉시 적극적인 전신 냉각을 시작하면서 ABC를 안정시키고 순환 상태·혈청 나트륨에 맞춰 수액 치료

## 해설

격렬한 운동 뒤 고체온과 중추신경계 이상이 동반되어 운동성 열사병을 우선 의심한다. 가능한 경우 냉수 침수 등 신속한 전신 냉각을 시작하면서 기도·호흡·순환을 평가하고 중심체온을 감시한다. 냉각을 수액 선택이나 추가 검사 때문에 미루지 않는다. 탈수와 Na 165 mEq/L의 고나트륨혈증도 함께 치료하되 수액 종류·속도는 혈역학과 발생 경과 및 연속 검사에 맞춰 조절한다. 생리식염수 단독을 모든 상황의 유일한 최선 치료로 제시하는 것은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 열사병의 즉시 냉각을 누락한 수액 단독 선택지를 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://journals.sagepub.com/doi/10.1177/10806032241227924

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008018

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
