---
type: qbank
schema_version: 1
id: medqa-us-train-001506
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c8f1ff1ca1c155e6d094328d4c6521af38b6167e27eed6e7b2313d3bc13fffa
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "diabetic nephropathy"
  - "active urinary sediment"
  - "cellular casts"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 피로와 식욕부진으로 일차진료에 내원했다. 무릎 아래 다리가 부어 있는 것도 걱정한다. 35년 동안 제2형 당뇨병이 있어 메트포르민과 글리부리드를 복용한다. 체온은 36.5°C (97.7°F), 혈압은 165/82 mm Hg, 맥박은 88회/분이다. 다음 중 존재하면 당뇨병성 신장질환 가능성이 낮아지는 소견은 무엇인가?

## 선택지

A. 신증후군 범위 단백뇨
B. 당뇨병성 망막병증
C. 소변검사의 세포 원주
D. 초음파에서 정상~큰 신장

## 해설

정답은 C이다. 전형적 당뇨병성 신장질환은 대체로 비활동성 요침사와 알부민뇨를 보인다. 세포원주 등 활동성 침전물이 있으면 다른 사구체염·간질성 병변 등을 고려하므로 DKD만의 가능성을 낮추는 소견이다. 신증후군 범위 단백뇨, 당뇨망막병증과 정상 또는 큰 신장은 DKD에 동반될 수 있다. 단백뇨 자체를 세포원주와 같은 활동성 요침사라고 분류하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKD는 활동성 요침사를 동반한다는 반대 설명을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001506
