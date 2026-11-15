---
type: qbank
schema_version: 1
id: medqa-us-train-005699
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:85e05e6be05db03ded2e01c84f4f4dd617e8611b52f5795790c90471470960c8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 다음증"
  - "물 제한 검사"
  - "저나트륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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

30세 여성이 하루 소변을 4 L 본다. 혈당·신장기능은 정상이고 물을 많이 마실 때는 소변 삼투질농도가 160 mOsm/kg이다. 감독하 수분제한 뒤 데스모프레신 투여 전에 소변 삼투질농도가 850 mOsm/kg까지 올랐다. 가장 가능성 높은 진단은?

## 선택지

A. 중추성 요붕증
B. 신성 요붕증
C. 일차성 다음증
D. 고혈당에 의한 삼투성 이뇨

## 해설


수분제한만으로 소변이 충분히 농축되면 항이뇨호르몬 분비와 신장 반응이 보존됐음을 시사한다. 심한 농축 장애가 있는 요붕증과 달리 과도한 물 섭취가 이 소견을 잘 설명한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저Na의 과음수와 수분제한후 요농축650 회복은 일차성 다음증 C를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005699
- https://pubmed.ncbi.nlm.nih.gov/30067922/
