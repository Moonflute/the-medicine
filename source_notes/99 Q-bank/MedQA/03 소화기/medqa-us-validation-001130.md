---
type: qbank
schema_version: 1
id: medqa-us-validation-001130
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3b4888c4f515b42d1d5b89152673ffc32eac028ed0131eb6ff4d224b137841df
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "졸링거-엘리슨 증후군"
  - "가스트린종"
  - "재발성 소화성 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
---

# MedQA US 임상문제

## 문제

42세 여성이 만성 복통으로 진료를 받으러 왔다. 6년 전 십이지장 제2부 궤양과 심한 식도염을 진단받았고, 헬리코박터 파일로리 제균과 장기간 판토프라졸 치료에도 십이지장 및 위궤양이 자주 재발한다. 가장 가능성 높은 기저 원인은?

## 선택지

A. 만성 알코올 섭취
B. 가스트린 분비 종양
C. 원발성 부갑상선기능항진증
D. 담배 사용

## 해설


재발성 위·십이지장 궤양이 헬리코박터 치료에도 지속되는 경우, 가스트린 분비 종양(가스트린oma)으로 인한 과다 가스트린 분비가 원인일 수 있다. 따라서 가장 가능성 높은 기저 원인은 가스트린 분비 종양이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001130 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제균 확인 후에도 비전형 부위 십이지장궤양·심한 식도염이 반복되는 사례의 gastrinoma B 병태생리 추론을 유지. 실제 확진 검사 결과를 만들지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001130
