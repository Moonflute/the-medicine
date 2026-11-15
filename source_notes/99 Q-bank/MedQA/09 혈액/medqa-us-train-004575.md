---
type: qbank
schema_version: 1
id: medqa-us-train-004575
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5acbc404e59c591951fcbf030e61327a7af19307445c8764a433e114f9d3ee59
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "면역성 혈소판감소성 자반증"
  - "소아 ITP"
  - "바이러스 감염 후 혈소판감소증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
question_type: management
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

5세 아이가 감기 뒤 멍과 점상출혈로 왔다. 활발하고 점막출혈은 없다. 혈소판은 36,000/μL이고 다른 혈구 수치와 말초도말은 정상이다. 단기간에 다시 진료받을 수 있을 때 적절한 처치는?

## 선택지

A. 지금 바로 정맥 면역글로불린을 투여한다
B. 장기 스테로이드를 시작한다
C. 출혈 시 대처를 안내하고 가까운 시일에 추적 관찰한다
D. 예방적으로 혈소판을 수혈한다

## 해설


피부에 국한된 가벼운 출혈이 있는 소아 면역성 혈소판감소증은 대개 경과 관찰이 가능하다. 혈소판 수만으로 치료하지 않고 점막·중증 출혈, 삶의 질과 추적 가능성을 함께 본다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004575 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 혈소판45,000을30,000미만으로 바꾼 해설 교정; 출혈이 경미한 소아 ITP 관찰 D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004575
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8958378/
