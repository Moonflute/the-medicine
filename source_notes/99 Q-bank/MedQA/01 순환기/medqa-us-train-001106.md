---
type: qbank
schema_version: 1
id: medqa-us-train-001106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84ea3aec32a37325880bd48120d7d60861c629831a3e9650aa7492795e5f1e81
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chronic obstructive pulmonary disease"
  - "narrow-complex tachycardia"
  - "atrial fibrillation"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 COPD 급성 악화로 내원했다. 심전도에서 분당 125회의 불규칙한 좁은 QRS 빈맥이 보인다. 같은 유도에서 세 가지 형태의 P파가 관찰되며, P파 사이에는 등전위선이 있고 PR 간격도 일정하지 않다. 이 리듬은?

## 선택지

A. 심방세동
B. 가변 방실전도를 동반한 심방조동
C. 다소성 심방빈맥
D. 동성빈맥에 동반된 간헐적 심방조기수축

## 해설

다소성 심방빈맥은 분당 100회를 넘는 불규칙한 리듬에 세 가지 이상의 뚜렷한 P파 형태가 보인다. 심방세동에는 일정하게 구분되는 P파가 없다. COPD 악화 등 유발 질환을 먼저 평가하고 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: QRS앞 P파/불규칙 PR을 AF라 한 오류를 MAT 의심으로 교정하고 산소를 조절 투여함을 명시.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001106
- https://doi.org/10.1093/eurheartj/ehz467
