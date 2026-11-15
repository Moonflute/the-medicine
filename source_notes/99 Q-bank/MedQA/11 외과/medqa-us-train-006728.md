---
type: qbank
schema_version: 1
id: medqa-us-train-006728
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c80119b9c1c3fb87d5f95c13182c816d44ccf2ae577cd1e6abdcb0705c838cf1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "수술 후 출혈"
  - "기계적 지혈 불충분"
  - "정상 응고검사"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4sO2DgCDsiJjsiKAg7ZuEIO2VqeuzkeymnSAoT3RoZXIgUG9zdG9wZXJhdGl2ZSBDb21wbGljYXRpb25zKS5tZA
question_type: management
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

52세 남성이 결장 수술 6시간 뒤 복부팽만과 어지럼을 호소한다. 배액관에 선홍색 피가 빠르게 차고, 혈액제제 소생 중에도 혈압은 78/47 mmHg다. 다음 조치는?

## 선택지

A. 즉시 수술팀과 함께 재수술을 준비해 출혈을 조절한다
B. 혈색소가 한 번 더 떨어질 때까지 관찰한다
C. 수혈을 멈추고 응고검사부터 반복한다
D. 복부 CT 결과가 나올 때까지 출혈 조치를 미룬다

## 해설


수술 직후 계속되는 실혈과 소생에 반응하지 않는 저혈압은 즉각적인 출혈원 조절이 필요한 상황이다. 수혈과 소생을 병행하며 영상 검사 때문에 수술을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006728 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 선별응고검사로 모든 출혈질환·혈소판 기능장애를 배제한다는 단정을 제한했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006728
- https://doi.org/10.1186/s13054-023-04327-7
