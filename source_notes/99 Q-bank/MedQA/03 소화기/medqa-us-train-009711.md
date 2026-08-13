---
type: qbank
schema_version: 1
id: medqa-us-train-009711
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b9e25993f84de38979f5c579f2e685a3d27032269dc82fac5db49a320149b54c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Boerhaave syndrome"
  - "보어하브 증후군"
  - "esophageal rupture"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
---

# MedQA US 임상문제

## 문제

23세 남자가 피를 토해 응급실에 왔다. 알코올중독이 있고 이전에도 비슷한 증상으로 내원했다. 온단세트론을 투여했지만 계속 구토하던 중 갑자기 흉골 뒤 통증과 연하곤란이 생겼다. 체온 99°F(37.2°C), 혈압 117/60 mmHg, 맥박 122회/분, 호흡수 15회/분, 산소포화도 99%이다. 목과 쇄골 위에 피하기종이 만져진다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 식도 파열
B. 식도정맥류
C. 말로리-바이스 증후군
D. 긴장성 기흉

## 해설


구토와 흉골 뒤 통증이 급작히 나타난 뒤 목과 쇄골 위에 피하기종이 만져지는 경우, 구토로 인한 식도 내압 급증이 식도 파열(보어하베 증후군)을 일으킨다. 이는 급성 흉통, 연하곤란, 기흉과 구별된다. 따라서 가장 가능성 높은 진단은 식도 파열이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009711
