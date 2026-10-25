---
type: qbank
schema_version: 1
id: medqa-us-validation-000647
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8d306225bbdb0a9e42b2985ba2e5bf5a9444fb1ac9933ff10b63ca82c63357d7
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "직장질루"
  - "산후 질분비물"
  - "분만 열상"
  - "Rectovaginal fistula"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

질식분만 2주 후인 31세 여성이 6일간의 악취 나는 황갈색 질분비물로 진료를 받으러 왔다. 분만 중 질 열상으로 광범위한 봉합이 필요했고, 질경검사에서 후질벽에 1.5 cm 진한 붉은 벨벳 모양 병변과 황갈색 분비물이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 세균성 질염
B. 직장질루
C. 질 흑색종
D. 방광질루

## 해설

광범위한 분만 열상 봉합 후 생긴 악취성 황갈색 분비물과 후질벽 병변은 직장질루(B)를 시사한다. 직장 내용물이 질로 배출될 수 있다는 점에서 방광질루의 소변 누출과 구분한다. 다만 실제 통로가 확인됐다는 정보를 추가하지 않으며, 흑색종이 항상 색소를 띤다는 주장만으로 다른 병변을 배제해서도 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 질 흑색종은 반드시 색소성이라는 절대적 배제 설명을 제거하고 산과 손상·분비물과 직장질루의 연결을 유지했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000647
