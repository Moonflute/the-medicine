---
type: qbank
schema_version: 1
id: medqa-us-train-001185
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b5e42f3399a15b70e17326a0f149cf210c5b0c97da1b31fd4f03f3f43e962e9
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "gastroesophageal reflux"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4개월 된 여아가 지난 3주 동안 수유 후 10~15분 뒤에 역류와 구토를 하여 병원에 내원하였다. 환아는 모유와 분유를 혼합 수유 중이다. 재태 주령 38주에 출생하였으며 출생 시 체중은 2966g이었다. 현재 체중은 5878g이다. 환아는 건강해 보인다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 복부는 부드럽고 압통은 없으며 장기 비대도 관찰되지 않는다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 식도 pH 모니터링
B. 복부 초음파
C. 판토프라졸(Pantoprazole) 치료
D. 자세 요법

## 해설

성장과 진찰이 정상인 수유 후 역류에는 과수유 회피·수유 방법 상담과 깨어 있을 때 안아 주기 등 보존적 접근(D)이 적절하다. 잘 때는 등을 대고 평평한 단단한 면에 눕히며 경사면·엎드림·옆으로 재우기를 역류 치료로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정상 성장 영아 역류의 보존관리 D 유지. 수면 중 머리 올리기 권고 삭제.
- https://www.rch.org.au/clinicalguide/guideline_index/gastrooesophageal_reflux_disease_in_infants/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001185
