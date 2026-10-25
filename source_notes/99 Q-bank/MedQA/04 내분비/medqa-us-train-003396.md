---
type: qbank
schema_version: 1
id: medqa-us-train-003396
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8637f996d4c80415ced9fb8fada9417e92c9d306d5a3d9bda22382a94311b7db
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "immobilization hypercalcemia"
  - "recent fracture"
  - "hypercalcemia"
  - "bone resorption"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
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

17세 남아가 2개월 전 지붕에서 떨어져 척추골절을 입은 뒤 추적 진료를 받으러 왔다. 현재는 건강해 보인다. 아버지는 1형 다발성 내분비 종양증이 있다. 검사에서 혈색소 13.7 g/dL, 크레아티닌 0.7 mg/dL, 총단백 7.0 g/dL, 알부민 4.1 g/dL, 칼슘 11.4 mg/dL, 인 5.3 mg/dL, 알칼리성 인산분해효소 100 U/L였다. 이 검사 결과의 가장 가능성 높은 원인은?

## 선택지

A. 사르코이드증
B. 부동화
C. 가성 고칼슘혈증
D. 종양수반 증후군

## 해설

척추골절 뒤 부동화가 지속되면 기계적 하중 감소로 골흡수가 증가하여 고칼슘혈증이 생길 수 있다(B). 이는 임상적으로 평가·관찰이 필요한 이상이며 단순히 무해한 생리 현상이라고 표현해서는 안 된다. 정상 알부민의 실제 고칼슘혈증이고, 부동화 맥락과 높은 인은 PTH 의존성 원인과의 비교에 도움이 된다. MEN1 가족력이 있으므로 실제 진료에서는 PTH 등 다른 원인 평가도 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 부동화 고칼슘혈증을 병적이지 않은 생리 현상으로 축소한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003396
