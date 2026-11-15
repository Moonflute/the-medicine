---
type: qbank
schema_version: 1
id: medqa-us-train-001750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3566c56205eab8cc71cb2a1d3c5ac87988e75d787b9c765ed44fb25000bfd43
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "bilateral renal artery stenosis"
  - "ACE inhibitor"
  - "acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 남성이 캅토프릴을 시작한 지 1주 뒤 크레아티닌이 0.8에서 1.8 mg/dL로 올랐다. 탈수나 저혈압은 없고 영상에서 양측 중증 신동맥 협착이 확인됐다. 현재 약제와 관련해 할 조치는?

## 선택지

A. 혈압이 높으므로 캅토프릴을 증량한다
B. ARB를 캅토프릴에 추가한다
C. 캅토프릴을 보류하고 신관류·칼륨을 평가한다
D. 이 정도 크레아티닌 상승은 예상되는 범위라 같은 용량을 유지한다

## 해설

양측 신동맥이 좁으면 안지오텐신 II가 사구체 여과압 유지에 중요할 수 있다. ACE 억제제 시작 후 크레아티닌이 기저치보다 크게 상승했으므로 약을 보류하고 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI 유발 AKI를 신혈류 감소가 아니라 수출세동맥 확장/사구체여과압 감소로 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001750
- https://doi.org/10.1016/j.kint.2023.10.016
