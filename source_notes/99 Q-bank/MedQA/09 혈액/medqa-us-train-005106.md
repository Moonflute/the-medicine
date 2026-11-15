---
type: qbank
schema_version: 1
id: medqa-us-train-005106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68141de2eb2bbc15f41b4b1a890d816c2bfe397b865f5f39a6fe79ae0a02d22c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "재생불량성 위기"
  - "파보바이러스 B19"
  - "Parvovirus B19 infection"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
question_type: diagnosis
difficulty: complex
answer: A
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

겸상적혈구병 환자가 감기 증상 며칠 뒤 창백해졌다. 혈색소는 평소 9g/dL에서 5.7g/dL로 떨어졌고 망상적혈구 수는 현저히 낮다. 비장 크기는 평소와 같고 백혈구와 혈소판은 보존됐다. 가장 가능성 높은 원인은?

## 선택지

A. 파르보바이러스 B19에 의한 일시적 무형성 위기
B. 급성 비장 격리 위기
C. 급성 자가면역 용혈
D. 장기간의 엽산 과다 복용

## 해설


급격한 빈혈에 망상적혈구가 오히려 감소하면 적혈구 생성 저하를 의심한다. 파르보바이러스 B19는 만성 용혈질환 환자에서 일시적 무형성 위기를 일으킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005106 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 SpO₂99%인데 저산소증을 추가하고 일시 적혈구계 무형성을 범혈구 재생불량성빈혈로 설명한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005106
- https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/parvovirus.html
