---
type: qbank
schema_version: 1
id: medqa-us-train-005278
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1aff827cdce25cc01e1119c02477179ba568159a551d9932621694306176b2d2
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유전성 대장암"
  - "린치증후군 의심"
  - "조기 대장내시경 선별"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

18세 남자가 대학에 가기 전 진료를 받으러 왔다. 아버지와 친할아버지, 삼촌이 비교적 젊은 나이에 대장암을 앓았으나 아버지의 APC 유전자 검사는 음성이었다. 가족 중 치과 이상이나 다른 악성종양은 없다. 이 환자에게 권장되는 대장암 선별 프로토콜은?

## 선택지

A. 25세부터 1~2년마다 대장내시경
B. 40세부터 5년마다 대장내시경
C. 50세부터 10년마다 대장내시경
D. 예방적 결장절제술

## 해설


가족에 대장암이 조기 발생했지만 APC 검사가 음성인 경우, 유전성 대장암 위험이 낮다. 따라서 25세부터 1~2년 간격으로 대장내시경을 시행해 조기 발견을 목표로 한다. 이는 권장 선별 프로토콜이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005278
