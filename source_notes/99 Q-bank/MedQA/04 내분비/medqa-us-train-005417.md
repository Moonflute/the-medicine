---
type: qbank
schema_version: 1
id: medqa-us-train-005417
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:61a44e1e2c8de29464500124af112a862d2c6f687735882f15bd16262224bf45
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "비타민 B6 결핍"
  - "수용성 비타민 결핍"
  - "말초신경병증"
  - "pyridoxine deficiency"
related_disease_slugs: []
question_type: diagnosis
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

17세 레슬링 선수가 체중을 두 체급 줄인 뒤 건조하고 갈라지는 피부, 입 주위 자극, 손발 저림, 과민성, 흥미 감소, 피로와 집중곤란을 보인다. 보충제를 사용하며 호모시스테인 11.2 μmol/L, 마그네슘 1.5 mEq/L이다. 가장 가능성 높은 진단은?

## 선택지

A. 수용성 비타민 결핍
B. 단백동화 스테로이드 사용
C. 피부 진균 감염
D. 바이러스 감염

## 해설

체급감량의 섭취제한과 구각/피부변화·감각저하·homocysteine 상승은 제시 중 수용성 비타민 결핍 A를 지지한다. 특정 B군 하나를 증상만으로 확진하지 않으며 보충제 성분·용량도 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 감량의 B군결핍 A는 유지하되 보충제 사용 자체를 결핍 입증으로 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005417
