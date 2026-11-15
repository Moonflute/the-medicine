---
type: qbank
schema_version: 1
id: medqa-us-train-004773
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:baad664348cf681c8fa363ec46fbbc8829f12ad911adf326f42e72a3170cd461
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발골수종"
  - "고칼슘혈증"
  - "골수 생검"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
difficulty: complex
answer: D
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

70세 환자에게 전기영동으로 단클론 단백이 확인됐다. 골통과 빈혈이 있고 저선량 전신 CT에서 용해성 병변이 보인다. 다발골수종을 확진하기 위해 필요한 다음 검사는?

## 선택지

A. 혈청 단백 전기영동만 다시 시행
B. 뼈스캔 한 번으로 형질세포 확인
C. 소변 시험지 단백 검사로 형질세포 확인
D. 골수 흡인·생검으로 클론성 형질세포 평가

## 해설


골수에서 클론성 형질세포를 확인하고 골수종 정의 사건과 함께 해석한다. 단클론 단백만으로 활동성 다발골수종을 확정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004773 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CRAB 조합의 골수검사 A 유지하되 정상 PTH는 고칼슘 상황에서 부적절하게 비억제된 값일 수 있음을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004773
- https://www.myeloma.org/international-myeloma-working-group-imwg-criteria-diagnosis-multiple-myeloma
