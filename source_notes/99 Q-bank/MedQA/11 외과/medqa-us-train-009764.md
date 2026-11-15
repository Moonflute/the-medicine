---
type: qbank
schema_version: 1
id: medqa-us-train-009764
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d063c51d3b3a26e8d5f1fe2e50bd6ce58d2d798b4c2766a173f96ea7acf874fc
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "관통성 경부 손상"
  - "경부 총상"
  - "혈관 손상"
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

31세 여성이 유리 파편에 베여 넓은목근을 넘는 목 관통상이 확인됐다. 혈역학적으로 안정적이며 활동성 대량 출혈, 커지는 혈종, 기도 위협은 없다. 혈관 손상 평가를 위한 첫 영상은?

## 선택지

A. 경동맥 도플러 초음파 단독
B. 경부 단순 X선
C. 경부 MRI
D. 경부 CT 혈관조영술(CTA)

## 해설


혈역학적으로 안정되고 즉시 수술이 필요한 징후가 없는 목 관통상에서 CTA는 혈관 손상의 위치와 범위를 평가하는 일차 영상이다. 기도 위협이나 대량 출혈이 있으면 영상보다 응급 처치가 먼저다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009764 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 목 관통상에서 안정적이며 활동성 출혈·확장혈종·기도위협 등 명백한 hard sign이 없어 CTA B로 혈관/손상 경로를 평가하는 것이 적절하다. 원문·해설과 ESVS2025 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2025/01/2025-Vascular-Trauma-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009764
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12928798/
