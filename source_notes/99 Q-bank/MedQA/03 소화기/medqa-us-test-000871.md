---
type: qbank
schema_version: 1
id: medqa-us-test-000871
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6bcd5962101ef6ad0190e4c510ae020eefd778e1866107fb1794ecf77bc52641
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "궤양성 대장염"
  - "염증성 장질환"
  - "연속성 대장염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

41세 남성이 수개월 동안 혈성 설사, 배변 절박감과 체중 감소를 겪었다. 대변 감염검사는 음성이다. 대장내시경에서 직장부터 간만곡까지 끊기지 않고 이어지는 취약한 염증성 점막이 확인됐다. 가장 가능성 높은 진단은?

## 선택지

A. 궤양성 대장염
B. 대장 크론병
C. 과민성장증후군
D. 현미경적 대장염

## 해설


직장에서 시작해 연속적으로 퍼지는 점막 염증과 혈성 설사는 궤양성 대장염을 지지한다. 크론병에서는 병변이 불연속적이거나 깊은 궤양과 협착 등이 동반될 수 있다. 조직검사와 감염 배제 소견을 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 직장부터 간만곡까지 연속 점막 병변과 혈변·tenesmus는 UC A. Crohn skip lesion이나 기능성 장질환과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000871
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714434/
