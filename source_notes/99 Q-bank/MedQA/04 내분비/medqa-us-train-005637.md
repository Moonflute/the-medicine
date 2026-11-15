---
type: qbank
schema_version: 1
id: medqa-us-train-005637
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:583570a26b4f542b36bfc7a8372e751a2b72ea547d4e19e8503aebf6e3127295
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "중증 고혈당"
  - "기저-식사 인슐린 요법"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 제2형 당뇨병 환자가 메트포르민을 먹는데도 최근 체중이 줄고 다뇨가 생겼다. 혈당 370 mg/dL, HbA1c 11%다. 케톤산증과 고삼투성 응급은 배제했다. 어떤 치료를 우선 시작하는가?

## 선택지

A. 인슐린을 포함한 요법
B. 메트포르민 증량만
C. SGLT2 억제제 단독으로 교체
D. 식이 상담만 하고 3개월 뒤 재검

## 해설


체중 감소·다뇨를 동반한 현저한 고혈당은 인슐린 치료를 우선 고려할 상황이다. 필요하면 이후 안정된 혈당과 당뇨병 유형에 맞춰 치료를 조정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈당370·A1c11과 체중감소/다뇨의 catabolic 고혈당은 기저-식사 insulin A를 지지.
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005637
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
