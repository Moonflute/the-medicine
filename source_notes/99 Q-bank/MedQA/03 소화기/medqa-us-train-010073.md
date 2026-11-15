---
type: qbank
schema_version: 1
id: medqa-us-train-010073
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b03aeac48848d9589f13121e64d06935bfa658bc30d024b667da71d17ee95ce
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "허혈성 대장염"
  - "저관류"
  - "복부 대동맥류 수술"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tl4jtmIjshLEg64yA7J6l7Je8IChJc2NoZW1pYyBDb2xpdGlzKS5tZA
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
---

# MedQA US 임상문제

## 문제

복부 대동맥류 개복 수술 때 저혈압과 다량 출혈이 있었던 68세 여성이 수술 3일 뒤 하복부 경련과 혈변을 보인다. 조영 CT에서 좌측 결장의 일부가 부어 있고 그 구간의 조영증강이 감소했다. 가장 가능성 높은 합병증은?

## 선택지

A. 마비성 장폐색
B. 위막성 대장염
C. 허혈성 대장염
D. 장유착에 의한 소장폐색

## 해설


대동맥 수술 전후의 저관류와 새 하복부 통증·혈변, 국소 결장 영상 변화는 허혈성 대장염을 시사한다. 복막 자극이나 관류 악화가 동반되면 장 괴사 가능성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010073 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대동맥 수술 후 출혈·혈압저하/승압제 노출 뒤 혈성 설사와 복통은 저관류성 허혈성 대장염 C에 부합. 단순 수술 후 장마비와 구별하여 원문·해설 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010073
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12775968/
