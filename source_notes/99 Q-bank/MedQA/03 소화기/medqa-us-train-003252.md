---
type: qbank
schema_version: 1
id: medqa-us-train-003252
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4eeabf9ac27c06652a0bc6a2c122e210ce9eb17f92c1d9bcbf9cef254c53448
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "irritable bowel syndrome"
  - "family history of colorectal cancer"
  - "alarm feature evaluation"
  - "colonoscopy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여성이 6개월 동안 지속되는 하복부 통증으로 내원했다. 통증은 배변 후 자주 호전되고 어떤 날은 설사, 다른 날은 4~5일 동안 배변이 없다. 글루텐프리 식단을 시작했지만 호전되지 않았고 오심, 구토, 혈변, 흑변은 없다. 전신불안장애와 갑상샘기능저하증이 있으며 아버지는 대장암 병력이 있다. 진찰에서 하복부 경미한 압통이 있지만 반발통이나 방어는 없고 구아이악검사는 음성이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 항근내막항체 역가
B. 대장내시경
C. 고섬유질 식단
D. 갑상샘 초음파

## 해설

배변과 연관된 반복 복통·교대 변비/설사는 IBS 양상이지만 대장암 1촌 가족력이 있어 이를 확인하고 대장내시경 B를 고려한다. 가족력 선별은 통상 40세 또는 최연소 환자의 진단 나이보다 10년 전 중 이른 시점에 시작한다. 환자는 43세이므로 45세 이상이라는 기존 설명은 잘못이다. 잠혈검사 음성이 대장암을 완전히 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 43세를45세이상으로 설명한 오류. 대장암 1촌 가족력 때문에40세부터 평가하는 근거로 B 유지; EMA 오역도 교정.
- https://gastro.org/clinical-guidance/risk-stratification-for-colorectal-cancer-screening-and-surveillance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003252
