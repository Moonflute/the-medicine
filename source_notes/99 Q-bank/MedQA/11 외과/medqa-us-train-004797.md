---
type: qbank
schema_version: 1
id: medqa-us-train-004797
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6b6ef31e90a9d8574d17999a75806d7d7797e020f828571c17a92c52243e5c1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "서혜부 탈장"
  - "간접 서혜부 탈장"
  - "발살바 수기 돌출"
  - "indirect inguinal hernia"
related_disease_slugs:
  - MTEg7Jm46rO8L-yDheq1tCDtg4jsnqUgKEluZ3VpbmFsIEhlcm5pYSkubWQ
question_type: management
difficulty: standard
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

37세 비임신 여성에게 서 있거나 힘줄 때 커지는 오른쪽 서혜부 돌출이 있다. 누우면 들어가며 통증은 가볍고 구토나 압통은 없다. 진찰에서 서혜부 탈장이 확인됐다. 다음 계획은?

## 선택지

A. 외과에 의뢰해 대퇴탈장 가능성을 확인하고 계획 수술을 상의한다
B. 감돈될 때까지 수술 없이 관찰만 한다
C. 오늘 응급 개복술을 시행한다
D. 진단이 확인됐으므로 탈장대만 평생 착용한다

## 해설


비임신 여성의 서혜부 탈장은 대퇴탈장이 섞여 있고 감돈·교액 위험이 더 높아 적기에 외과 평가와 계획 수술을 상의한다. 쉽게 정복되고 교액 소견이 없으면 응급 개복술은 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004797 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여성의 간접 서혜부 탈장을 고환관으로 설명한 해부학 오류를 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004797
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5809582/
