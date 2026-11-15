---
type: qbank
schema_version: 1
id: medqa-us-train-001383
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f4882233894ac2669791b6782960dc5fd1236230560d8a09281b01fc4577207b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "thrombosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: management
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

급성 폐색전증으로 헤파린과 와파린을 함께 시작한 지 6일 됐다. 혈소판이 18만에서 6만/μL로 떨어지고 새 정맥혈전이 확인됐다. 다른 원인은 뚜렷하지 않고 중증 출혈도 없다. 검사 결과를 기다리며 우선 할 처치는?

## 선택지

A. 헤파린만 중단하고 와파린은 계속한다
B. 와파린만 중단하고 헤파린을 증량한다
C. 혈전이 있어도 모든 항응고를 중단한 채 검사 결과를 기다린다
D. 헤파린과 와파린을 중단하고 비타민 K를 투여하며 비헤파린 항응고제로 전환한다

## 해설


임상 가능성이 높은 급성 헤파린 유발 혈소판감소증에서는 모든 헤파린을 중단하고 비헤파린 항응고제를 시작한다. 이미 시작한 와파린은 혈소판 회복 전에 사용하면 사지괴사 위험이 있어 중단하고 역전한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001383 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIT 사례에 붙은 SVT·심율동전환·verapamil 해설을 해당 혈전·혈소판감소 사례 설명으로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001383
