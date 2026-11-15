---
type: qbank
schema_version: 1
id: medqa-us-train-000092
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0abc5ed846b8bf6e2f0a8e305dafaf3f58cff4719aeb1591b719aa624d0fbf7e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "influenza"
  - "asthma"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
---

# MedQA US 임상문제

## 문제

인플루엔자 유행 중 천식 환자가 어제부터 발열, 전신 근육통과 마른기침을 한다. 당일 검사 결과를 기다리는 중이다. 적절한 초기 치료는?

## 선택지

A. 신속검사가 양성일 때만 항바이러스제를 시작한다
B. 천식은 합병증 고위험이므로 오셀타미비르를 경험적으로 시작한다
C. 천식 환자에서도 흡입 자나미비르를 우선 사용한다
D. 불활성화 백신으로 현재 증상을 치료한다

## 해설


천식은 인플루엔자 합병증 위험을 높인다. 유행기 임상적으로 의심되면 치료를 늦추지 않으며, 흡입 자나미비르는 기도질환 환자에게 기관지경련 위험이 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000092 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 천식 고위험군의 1일째 인플루엔자 의심에서 조기 oseltamivir D 적절. 예방접종·amantadine으로 급성 치료 대체하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/flu/treatment/antiviral-drugs.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000092
- https://www.kdca.go.kr/bbs/kdca/55/310104/download.do
