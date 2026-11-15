---
type: qbank
schema_version: 1
id: medqa-us-train-004061
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6fd1f7de31aea2d6b8bdd093d461fddfe0758d3c3a26bd0d9bdf0237c92028a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "뇌부종"
  - "시신경유두부종"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 제1형 당뇨병 환자가 케톤산증 치료 7시간째 심한 두통과 혼돈을 보인다. 맥박 50회/분, 혈압 177/95 mmHg이고 호흡이 불규칙하다. 뇌손상이 의심될 때 어떤 처치를 하는가?

## 선택지

A. 뇌 CT에서 부종이 확인될 때까지 기다린다.
B. 요추천자로 뇌척수액 압력부터 잰다.
C. 3% 고장성 식염수 등으로 즉시 치료한다.
D. 5% 포도당액만 빠르게 투여한다.

## 해설

치료 중 신경학적 악화, 서맥과 고혈압은 뇌압 상승의 경고 소견이다. 케톤산증 관련 뇌손상이 의심되면 3% 고장성 식염수나 만니톨을 투여하며, 영상 검사 때문에 치료를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKA치료 후 뇌손상/Cushing반응 C는 유지. 유두부종 확인을 기다리며 처치를 지연하지 않도록 보완.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004061
- https://www.ispad.org/static/6dd62eae-c8cb-4b4a-84e1efc768505746/Ch11PediatricDiabetes.pdf
