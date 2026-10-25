---
type: qbank
schema_version: 1
id: medqa-us-validation-001036
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5c9f118ba4aaf78fb939cc6b56892eb8bf0e0f2b693ba580577548dc986927e1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "면역성 혈소판감소성 자반증"
  - "혈소판감소증"
  - "정맥 면역글로불린"
  - "Immune thrombocytopenia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
question_type: management
difficulty: complex
answer: A
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

7세 여아가 20분 전부터 저절로 시작된 코피로 응급실에 왔다. 하지에 점상출혈이 있고 백혈구 11,300/μL, 혈색소 12.1 g/dL, 혈소판 15,000/μL이며 말초도말에서 형태가 정상인 혈소판이 소수 보인다. 2주 전 바이러스 감염을 앓았지만 그 외에는 건강했다. 가장 적절한 다음 처치는?

## 선택지

A. 정맥 면역글로불린 시작
B. 비장절제술 시행
C. 골수흡인 시행
D. 관찰

## 해설


바이러스 후 고립 혈소판감소는 급성 ITP에 부합한다. 20분째 계속되는 코피처럼 치료가 필요한 점막출혈이라면 선택지 중 IVIG(A)로 빠른 혈소판 상승을 도모할 수 있다. 하지만 혈소판 15,000/µL라는 수치만으로 모든 소아에게 IVIG를 의무 투여하지는 않는다. 출혈 정도·국소 지혈 반응·추적 여건에 따라 관찰도 가능하며 비생명위협 점막출혈에서는 짧은 스테로이드를 선호하는 지침도 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001036 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 소아 ITP의 지속 점막출혈에서 선택지 IVIG A는 고려 가능하나 plt15k 단독이 치료 기준이라는 오설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/
- https://cps.ca/documents/position/immune-thrombocytopenia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001036
