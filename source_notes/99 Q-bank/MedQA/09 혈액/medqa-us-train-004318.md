---
type: qbank
schema_version: 1
id: medqa-us-train-004318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:396d4c8378cdc3b954b74ee6f8f3188f87d2f587221616453db77d2c0cbedf5b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "반응성 혈소판증가증"
  - "소구성 빈혈"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

자궁근종으로 월경량이 많은 환자의 혈색소는 10.1g/dL, 페리틴은 6ng/mL, 혈소판은 54만/μL다. 다른 혈구는 정상이고 비장비대나 혈전은 없다. 철결핍성 빈혈을 치료할 때 혈소판에 대한 적절한 계획은?

## 선택지

A. 반응성 증가 가능성을 무시하고 즉시 하이드록시우레아를 시작한다
B. 철결핍과 출혈 원인을 치료한 뒤 혈소판 수를 다시 확인한다
C. 혈소판 수만으로 본태성 혈소판혈증을 확진한다
D. 급성 혈전이 없어도 혈소판 성분채집을 시행한다

## 해설


철결핍은 반응성 혈소판 증가를 일으킬 수 있다. 원인 치료 뒤에도 증가가 지속되거나 다른 단서가 나타나면 골수증식종양 등 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004318 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 잘못된 mL 혈구단위를 /µL로 교정;420,000의 경계 수준과 미세소구성 빈혈의 반응성 기전 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004318
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
- https://doi.org/10.1182/bloodadvances.2025015950
