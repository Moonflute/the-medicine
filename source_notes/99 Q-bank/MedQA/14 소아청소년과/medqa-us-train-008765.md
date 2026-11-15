---
type: qbank
schema_version: 1
id: medqa-us-train-008765
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e34c414ec33ccd5b4d911c3ae94735c98540f1609d8cc96b15458e464c87ca0f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "congenital toxoplasmosis"
  - "chorioretinitis"
  - "hydrocephalus"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2GoeyGjO2UjOudvOymiOuniOymnSAoVG94b3BsYXNtb3NpcykubWQ
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

신생아에게 양쪽 맥락망막염이 있다. 머리 영상에서 수두증과 함께 피질·기저핵 여러 부위에 산재한 석회화가 보인다. 가장 의심되는 선천 감염은?

## 선택지

A. 거대세포바이러스 감염
B. 톡소포자충증
C. 풍진
D. 매독

## 해설


맥락망막염, 수두증, 산재한 두개내 석회화의 조합은 선천 톡소포자충증을 시사한다. 영상만으로 확진하지 않고 산모·신생아 검사를 연계한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008765
- https://pubmed.ncbi.nlm.nih.gov/28138010/
