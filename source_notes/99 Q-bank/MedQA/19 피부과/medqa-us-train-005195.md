---
type: qbank
schema_version: 1
id: medqa-us-train-005195
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc318578d993909545494e01fa6fe8c6a600b350bf6e035f07060f46300456c9
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "중등도-중증 판상 건선"
  - "건선성 관절염"
  - "메토트렉세이트"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-qxtOyEoCAoUHNvcmlhc2lzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여성이 넓은 판상 건선과 함께 3개월째 손가락 관절의 부종과 아침 경직을 호소한다. 말초 건선관절염이 확인됐다. 초기 전통적 합성 질병조절항류마티스약(csDMARD) 중 피부 병변도 함께 치료할 약은?

## 선택지

A. 콜히친
B. 하이드록시클로로퀸
C. 나프록센
D. 메토트렉세이트

## 해설

말초 건선관절염은 관절 손상을 막기 위한 질병조절치료가 필요하다. 피부 병변이 뚜렷하면 초기 csDMARD로 메토트렉세이트를 우선 고려한다. 광선치료는 관절염을 치료하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광범위 건선·말초관절 증상의 MTX C를 유지하되 모든 중증 건선의 유일한 일차약으로 단정하지 않도록 한다.
- 공식/학회 근거: https://ard.bmj.com/content/83/6/706
- 공식/학회 근거: https://www.aad.org/member/clinical-quality/guidelines/psoriasis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005195
- https://pubmed.ncbi.nlm.nih.gov/38499325/
