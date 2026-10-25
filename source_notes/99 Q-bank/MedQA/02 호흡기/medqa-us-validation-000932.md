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
question_type: mechanism
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

낭성섬유증 병력이 있는 20세 남성이 정기 진료를 받으러 왔다. 전반적으로 괜찮지만 최근 대변 횟수가 늘었고, 변이 묽고 기름져 변기에 자주 묻는다고 한다. 혈액응고인자 중 어떤 인자의 혈청 수치가 비정상일 가능성이 높은가?

## 선택지

A. II
B. V
C. VIII
D. XI

## 해설

낭성섬유증의 지방흡수장애는 비타민 K 결핍을 일으켜 응고인자 II, VII, IX, X의 기능을 저하시킬 수 있다. 제시된 선택지 중 비타민 K 의존 인자는 II(A)이다. 반감기가 짧아 먼저 영향을 받기 쉬운 것은 VII이며, II가 가장 먼저 감소한다는 설명은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비타민 K 결핍의 선택지 A는 유지하되 II가 가장 먼저 감소한다는 오류를 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000932
