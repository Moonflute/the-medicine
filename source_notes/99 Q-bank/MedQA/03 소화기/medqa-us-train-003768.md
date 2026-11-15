---
type: qbank
schema_version: 1
id: medqa-us-train-003768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f8d77085a7cb50d3b2228ebabd34efb58a70a8bc04df0c36c9bb77fd5460db0b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "pancreatic head adenocarcinoma"
  - "obstructive jaundice"
  - "resectable pancreatic cancer"
  - "pancreaticoduodenectomy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성의 황달을 평가하다 췌장두부 선암이 확인됐다. 다학제 병기 평가에서 원격 전이나 절제를 막는 혈관 침범은 없고 전신상태도 양호하다. 수술을 통한 근치 치료를 계획할 때 적절한 술식은?

## 선택지

A. 원위부 췌장절제술
B. 췌십이지장절제술
C. 중앙 췌장절제술
D. 담도 우회술만 시행

## 해설

절제 가능한 췌장두부암에는 췌십이지장절제술을 시행한다. 원위부 췌장절제술은 주로 체부·미부 종양에 사용한다. 약물치료의 시점은 다학제로 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장두부암의 Whipple B는 유지하되 종괴2.5cm만으로 절제가능/국소진행 병기를 단정한 오류.
- https://www.nice.org.uk/guidance/NG85/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003768
- https://pubmed.ncbi.nlm.nih.gov/34148794/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12546840/
