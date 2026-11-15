---
type: qbank
schema_version: 1
id: medqa-us-train-000757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ba942c6cce159f5a82b4b1f87c1ff351955dad20306ff476993c77f2a1582f2
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Vestibular migraine"
  - "Labyrinthitis"
  - "Benign Paroxysmal Positional Vertigo"
  - "Vestibular neuritis"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ydtOyEneymnSAoQmVuaWduIHBhcm94eXNtYWwgcG9zaXRpb25hbCB2ZXJ0aWdvKS5tZA
  - MTcg7J2067mE7J247ZuE6rO8L-yghOygleyLoOqyveyXvCAoVmVzdGlidWxhciBuZXVyaXRpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

편두통 병력이 있는 환자가 6개월간 30분에서 몇 시간 지속되는 현훈을 여섯 차례 겪었다. 절반 이상에서 빛공포와 평소와 같은 박동성 두통이 동반된다. 청력은 정상이고 자세 하나로 짧게 유발되지는 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 메니에르병
B. 후반고리관 이석증
C. 전정신경염
D. 전정편두통

## 해설


반복 현훈이 5분~72시간 지속되고 편두통 병력과 발작 중 편두통 특징이 있으면 전정편두통을 고려한다. 수초짜리 체위 유발 현훈이나 변동 청력저하와 감별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000757
- https://pubmed.ncbi.nlm.nih.gov/34719447/
