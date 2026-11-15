---
type: qbank
schema_version: 1
id: medqa-us-train-002151
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3430ef97d2508bd4e67967fe50c138f943abb26aba6fe811aafa6c2930163be2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "familial hypocalciuric hypercalcemia"
  - "calcium-sensing receptor"
  - "hypocalciuria"
  - "Familial hypocalciuric hypercalcemia"
related_disease_slugs: []
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

32세 남성의 혈청 칼슘은 수년간 10.7~11.0 mg/dL이고 PTH는 정상 상한이다. 아버지와 누나도 증상 없는 경도 고칼슘혈증이 있다. 신기능과 비타민 D는 정상이고 티아지드를 복용하지 않는다. 칼슘/크레아티닌 청소율비는 0.006이다. 가장 가능성 높은 진단은?

## 선택지

A. 가족성 저칼슘뇨성 고칼슘혈증
B. 원발성 부갑상선기능항진증
C. 비타민 D 과다증
D. 악성종양 관련 고칼슘혈증

## 해설


오래된 경도 고칼슘혈증, 가족력, 낮은 요칼슘 배설을 함께 보면 가족성 저칼슘뇨성 고칼슘혈증이 가장 가능성이 높다. 청소율비만으로는 원발성 부갑상선기능항진증과 완전히 구별되지 않으므로 수술을 결정하기 전에 필요하면 유전자 검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고칼슘혈증·비억제 PTH와 저칼슘뇨의 조합은 FHH A에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002151
- https://doi.org/10.1002/jbmr.4677
