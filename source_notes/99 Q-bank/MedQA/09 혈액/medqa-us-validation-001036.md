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

면역성 혈소판감소증으로 추적 중인 9세 아이가 갑자기 두통과 의식저하를 보인다. 두부 CT에서 급성 뇌출혈이 보이고 혈소판은 4,000/μL다. 신경외과·혈액 진료팀을 호출했다. 지금 시작할 응급치료에 포함할 조합은?

## 선택지

A. 정맥 면역글로불린과 고용량 스테로이드, 혈소판 수혈
B. 정맥 면역글로불린만 투여하고 혈소판 수혈은 피한다
C. 호전될 때까지 관찰한 뒤 경구 스테로이드
D. 리툭시맙 단독

## 해설


두개내 출혈은 면역성 혈소판감소증의 위중한 출혈이다. 빠른 지혈을 위해 면역치료와 혈소판 수혈을 병행하며, 일반적인 무출혈 환자와 달리 혈소판 수혈을 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001036 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 소아 ITP의 지속 점막출혈에서 선택지 IVIG A는 고려 가능하나 plt15k 단독이 치료 기준이라는 오설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/
- https://cps.ca/documents/position/immune-thrombocytopenia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001036
- https://doi.org/10.1182/bloodadvances.2025018818
