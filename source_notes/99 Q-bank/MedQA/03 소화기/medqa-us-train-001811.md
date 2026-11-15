---
type: qbank
schema_version: 1
id: medqa-us-train-001811
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9280959e6fa414457f9d3089f4e480a88361c09c18d222dca69f6136ecf77f4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "inflammatory bowel disease"
  - "ulcerative colitis"
  - "colorectal cancer evaluation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: A
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

26세 남성이 5주째 하복부 통증과 혈성 설사를 한다. 대변 감염검사는 음성이고 활력은 안정적이다. 장 확장이나 복막 자극 소견은 없다. 염증성 장질환의 진단과 범위 평가를 함께 할 다음 검사는?

## 선택지

A. 말단 회장까지 대장내시경을 시행하고 여러 분절에서 조직 채취
B. 대변 칼프로텍틴만 검사하고 내시경 생략
C. 복부 단순 X선 반복
D. 경험적 스테로이드 투여 후 검사 없이 반응 관찰

## 해설

안정적 환자의 IBD 초기 평가에서는 회장대장내시경과 분절별 조직검사로 염증의 분포와 유형을 확인한다. 심한 급성 대장염에서 전체 대장내시경을 피하고 제한적으로 평가하는 상황과 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 없는 체중감소를 검사 근거로 만든 해설 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001811
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
