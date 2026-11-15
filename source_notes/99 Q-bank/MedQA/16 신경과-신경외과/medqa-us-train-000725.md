---
type: qbank
schema_version: 1
id: medqa-us-train-000725
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d8e13f44cc3db5fc22bbf045e7b190b5cd60a224eb69395489ba0877662ae5a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "non-Hodgkin lymphoma"
  - "peripheral neuropathy"
question_type: risk_factor
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
  - MDkg7ZiI7JWhL-qzoOygkOuPhCDspp3tm4TqtbAgKEh5cGVydmlzY29zaXR5IFN5bmRyb21lKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
  - ZHJ1ZzoxMCDsooXslpEvQ3ljbG9waG9zcGhhbWlkZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
---

# MedQA US 임상문제

## 문제

림프종으로 병합 항암치료를 받은 67세 환자에게 양발 저림과 발목 힘 저하가 생겼다. 발목반사가 줄었고 변비도 새로 심해졌다. 이 말초·자율신경 이상과 가장 관련된 약은?

## 선택지

A. 리툭시맙
B. 빈크리스틴
C. 사이클로포스파마이드
D. 독소루비신

## 해설


빈크리스틴은 말초신경병증과 자율신경 이상을 일으킬 수 있다. 위약과 변비가 새로 나타나면 항암팀에서 신경독성의 중증도와 용량을 재평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000725
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=198600091
