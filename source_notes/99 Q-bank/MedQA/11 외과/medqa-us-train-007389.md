---
type: qbank
schema_version: 1
id: medqa-us-train-007389
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea3e99ecb882d4495fb5d3ccb0314a29ca7140bb2b00b6172f742ea12e09bdfe
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "지연성 비장 파열"
  - "비장 손상"
  - "케어 징후"
  - "혈복강"
related_disease_slugs:
  - MTEg7Jm46rO8L-u5hOyepSDshpDsg4EgKFNwbGVuaWMgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

34세 남성이 둔상 뒤 비장 열상으로 비수술 치료 중이다. 입원 3일째 새 왼쪽 상복부 통증이 생겼다. 혈압은 안정적이지만 조영 CT에서 1.6 cm 비장동맥 가성동맥류와 비장 실질 내 활동성 조영제 유출이 보인다. 비장을 보존하면서 출혈을 막을 처치는?

## 선택지

A. 퇴원하고 증상이 생기면 재내원
B. 복부 단순촬영으로 크기만 비교
C. 혈관조영과 비장동맥 색전술
D. 혈역학적 상태와 관계없이 비장절제술

## 해설


혈역학적으로 안정된 비장 외상에서 활동성 출혈이나 위험도가 높은 가성동맥류에는 혈관 내 색전을 시행해 지혈과 비장 보존을 시도할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007389 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 외상3일 뒤 급격한 LUQ 통증·쇼크·Kehr 양상은 지연성 비장손상을 시사하여 비장 실질 저밀도 C가 맞다. 원문·해설 일치; 질문의 가정적 CT를 불안정 환자에서 수술 전 필수로 권한 것은 아니다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007389
- https://pubmed.ncbi.nlm.nih.gov/36224617/
