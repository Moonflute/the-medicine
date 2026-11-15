---
type: qbank
schema_version: 1
id: medqa-us-train-001870
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec87eb9354c2101bf6693113b470203aa8680667261b2db281981cae66f83e18
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "hepatocellular carcinoma"
  - "chronic hepatitis B"
  - "alpha-fetoprotein"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
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

56세 B형간염 간경변 환자의 감시 초음파에서 새로 2.2 cm 간 결절이 보인다. 다중시기 조영 CT에서 비테두리형 동맥기 과조영과 문맥기 세척이 보인다. 이런 전형적 소견일 때 가장 적절한 진단은?

## 선택지

A. 간세포암으로 영상 진단할 수 있다
B. AFP가 특정 수치를 넘을 때만 진단할 수 있다
C. 담관암으로 영상 진단할 수 있다
D. 결절의 기원이 간세포인지 확인하려면 항상 생검해야 한다

## 해설


간세포암 고위험 환자의 1 cm 이상 결절에서 전형적 동맥기 과조영과 문맥기 세척이 보이면 영상으로 진단할 수 있다. AFP만으로 진단하거나, 전형적인 소견에도 생검을 일률적으로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001870 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초음파에 없는 저에코 소견을 추가하지 않고 HCC의 세포기원을 묻는 정답 C에 맞췄다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001870
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10202234/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13542233/
