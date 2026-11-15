---
type: qbank
schema_version: 1
id: medqa-us-train-000897
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d1313b42c44c940017c545a89d6d2c767ad966255469d92a03c20d2d96d48dff
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV"
  - "Toxoplasma"
  - "pneumonia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJhdmFzdGF0aW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

치료를 중단한 HIV 환자가 발열과 진행성 편측 위약으로 왔다. CD4는 60/μL, 톡소포자충 IgG는 양성이고 MRI에서 양측 기저핵에 여러 고리 조영증강 병변과 주변 부종이 보인다. 우선 할 원인 치료는?

## 선택지

A. 정맥 간시클로버를 시작한다
B. 생검 결과가 나올 때까지 특이 치료를 하지 않는다
C. 트리메토프림/설파메톡사졸 등 톡소포자충 뇌염 치료를 시작하고 임상·영상 반응을 평가한다
D. 전신 스테로이드만 사용한다

## 해설


진행된 HIV 감염에서 양성 톡소포자충 IgG와 전형적인 다발성 병변이 있으면 치료를 우선 시작할 수 있다. 악화하거나 10~14일 안에 반응이 없으면 다른 진단과 생검 필요성을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000897 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열·급성 국소 신경결손의 영상 우선 평가를 유지하되 톡소플라스마증으로 미리 확정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000897
