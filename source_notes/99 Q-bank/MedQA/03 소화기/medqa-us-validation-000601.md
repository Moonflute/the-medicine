---
type: qbank
schema_version: 1
id: medqa-us-validation-000601
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:244eefae59391b2265fb589f61fccfda9ae3dc7e82f88d1df9d194f1b91e6fe3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "천공성 소화성 궤양"
  - "복막염"
  - "복부 CT"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

소화성 궤양으로 외래 삼제요법을 받는 51세 남성이 갑자기 시작된 심한 복통으로 왔다. 복부가 약간 팽창하고 전반적인 압통과 반발통이 있으며 혈압 96/54 mmHg, 맥박 112회/분이다. 가장 적절한 다음 단계는?

## 선택지

A. 복부 방사선촬영
B. 복부 및 골반 CT
C. 헬리코박터 파일로리 검사
D. 혈청 가스트린 수치

## 해설


정답 B. 궤양 환자의 갑작스러운 복통과 반발통은 천공성 궤양을 의심하게 한다. 선택지 중 복부·골반 CT는 천공과 자유공기/누출 범위를 평가하는 민감한 검사다. 그러나 혈압 96/54와 빈맥이 있으므로 소생·정맥 항생제·긴급 외과 평가를 병행하며, 불안정하거나 명백한 복막염에서 CT를 기다려 필요한 수술을 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000601 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 천공 의심 CT B 유지하되 저혈압·복막자극에서 소생·항생제·외과 평가를 지연하는 검사 우선주의 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6947898/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000601
