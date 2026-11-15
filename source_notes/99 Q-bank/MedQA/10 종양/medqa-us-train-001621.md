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
question_type: investigation
difficulty: standard
answer: A
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
---

# MedQA US 임상문제

## 문제

40세 남성의 대장내시경에서 대장과 직장에 수백 개의 선종이 발견됐다. 어머니도 50세에 대장암을 진단받았다. 유전 상담과 함께 가장 우선 의심할 유전자 변이는?

## 선택지

A. APC 유전자 병적 변이
B. MLH1 유전자 병적 변이
C. STK11 유전자 병적 변이
D. SMAD4 유전자 병적 변이

## 해설


젊은 나이에 대장과 직장에 선종이 수백 개 생겼다면 APC 관련 가족성 선종성 용종증을 의심한다. 유전 상담 및 생식세포 검사로 확인하고 가족 검사와 예방적 수술 계획을 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001621 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무수한 대장 선종·대장암 가족력과 APC 기능소실/Wnt 경로의 B 연관이 원문·선지·해설과 일치한다. Mismatch-repair 유전자의 Lynch 양상과 구분했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001621
- https://fascrs.org/ascrs/media/files/2024-Polyposis-CPG.pdf
