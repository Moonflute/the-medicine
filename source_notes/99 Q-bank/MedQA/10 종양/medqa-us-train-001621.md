---
type: qbank
schema_version: 1
id: medqa-us-train-001621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27554b6fdd371b8c6c4c3ba880e5b5740a29e7d1dbf6aa42c7090eb96b39f6da
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "familial adenomatous polyposis"
  - "APC mutation"
  - "colorectal cancer"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: mechanism
difficulty: standard
answer: B
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

40세 남성이 직장 출혈로 내원했다. 어머니가 50세에 대장암으로 사망해 걱정된다. 다른 가족력은 모른다. 신체 및 직장수지검사는 정상이다. 대장내시경에서 왼쪽 결장에 4–15 mm 크기의 선종이 무수히 많다. 다음 중 질환의 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. DNA 불일치 복구 유전자 돌연변이
B. APC 유전자 돌연변이
C. RB1 유전자 불활성화
D. BRCA1 및 BRCA2 유전자 불활성화

## 해설


다발성 선종은 APC 유전자의 기능 상실로 발생하는 가족성 선종성 폴립증(FAP)의 전형적인 병리이다. APC 돌연변이는 Wnt 신호 억제를 잃게 하여 선종 형성을 촉진한다. 따라서 가장 가능성 높은 기전은 APC 유전자 돌연변이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001621
