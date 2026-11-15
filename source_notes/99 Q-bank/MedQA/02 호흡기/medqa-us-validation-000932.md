---
type: qbank
schema_version: 1
id: medqa-us-validation-000932
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b91d075149b5524f898c34b28bb2eea8326c5237680a7d5dea448e94ea6de07a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "췌장 외분비 기능부전"
  - "비타민 K 결핍"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2DgOuvvCBLIOqysO2VjSAoVml0YW1pbiBLIERlZmljaWVuY3kpLm1k
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: management
difficulty: simple
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

낭성섬유증을 앓는 20세 남성이 대변이 기름지고 잘 씻기지 않으며 최근 체중까지 줄었다고 한다. 대변 엘라스타제가 낮아 췌장 외분비기능부전이 확인됐다. 지방 흡수를 개선할 치료는?

## 선택지

A. 식사와 간식 때 췌장효소를 보충한다
B. 지방만 완전히 제한한다
C. 장기적으로 지사제만 복용한다
D. 췌장효소 대신 항생제를 장기간 투여한다

## 해설

낭성섬유증의 췌장 외분비기능부전은 지방 소화에 필요한 효소를 줄인다. 식사와 간식에 맞춰 췌장효소를 보충하고 체중·증상, 영양 상태와 지용성 비타민을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비타민 K 결핍의 선택지 A는 유지하되 II가 가장 먼저 감소한다는 오류를 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000932
- https://www.cff.org/medical-professionals/pancreatic-enzymes-clinical-care-guidelines
