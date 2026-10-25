---
type: qbank
schema_version: 1
id: medqa-us-validation-000382
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f471faa8e3a8919dc6c43a492195702f72b42b58902b04f4e3b883c454226fe7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "메탄올 중독"
  - "고음이온차 대사성 산증"
  - "포메피졸"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXkO2LuOugjOq4gOumrOy9nCDspJHrj4UgKEV0aHlsZW5lIEdseWNvbCBQb2lzb25pbmcpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 노숙인 남성이 차고에서 술에 취한 채 발견되어 체포된 후 응급실에 왔다. 의식이 급격히 저하되어 있고 소변, 대변, 구토물로 뒤덮여 있다. 통증에 반응해 깨어나 기본적인 질문에 답하지만 시야가 흐리고 아무것도 볼 수 없다고 한다. 검사에서 나트륨 141, 염소 102, 칼륨 4.4, 중탄산염 14 mEq/L, BUN 25 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.4 mg/dL, 칼슘 10.2 mg/dL이다. 가장 적절한 초기 치료는?

## 선택지

A. 글루타티온 생성 촉진
B. 알코올 탈수소효소 억제
C. 무스카린 길항
D. 투석으로 제거

## 해설

시각 장애와 음이온차 증가 대사성 산증은 메탄올 중독을 시사한다. 포메피졸 등으로 알코올 탈수소효소를 억제하는 B를 즉시 시작하여 독성 대사산물의 추가 생성을 줄인다. 그러나 이미 발생한 시력 장애와 음이온차 25 mEq/L는 EXTRIP의 체외 제거 적응증에 해당하므로 긴급 혈액투석 평가·시행도 병행해야 한다. B를 먼저 시작할 수 있다는 사실이 D가 불필요하거나 해독제 반응을 기다린 뒤에만 투석한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 메탄올 의심에서 즉시 ADH 억제 B를 유지하되 시력 장애와 음이온차 25가 있어 투석도 시급하다는 현행 기준을 추가한다.
- 공식/학회 근거: https://www.extrip-workgroup.org/methanol

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000382
