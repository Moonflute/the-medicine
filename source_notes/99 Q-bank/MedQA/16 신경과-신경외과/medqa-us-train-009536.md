---
type: qbank
schema_version: 1
id: medqa-us-train-009536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54d1352388ac8ddd15d25455939e0beaa3961eaf657943bbb32ebcddf780c559
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "normal pressure hydrocephalus"
  - "정상압수두증"
  - "ventriculoperitoneal shunt"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
difficulty: complex
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 여성이 1년 동안 걷기와 방향 전환이 점점 어려워지고 소변을 참기 힘들어졌다. 최근 기억력도 떨어졌다. 두부 CT에서 뇌고랑의 위축에 비해 뇌실이 크게 확장됐다. 요추천자로 뇌척수액을 제거한 뒤 보행이 뚜렷이 호전됐지만 수일 만에 다시 나빠졌다. 장기 증상 개선을 위해 고려할 치료는?

## 선택지

A. 아세타졸아미드 장기 투여
B. 내시경적 제3뇌실 개창술
C. 경막외 혈액 봉합술
D. 뇌실복강 단락술

## 해설

보행장애·인지저하·배뇨증상에 뇌실 확장이 동반되어 정상압수두증을 시사한다. 뇌척수액 제거 후 보행 호전은 단락술 반응 가능성을 높이는 소견이다. 수술 위험과 다른 보행장애 원인을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NPH 션트 D 유지. 혈액봉합술을 출혈성 수두증 치료로 설명한 오류와 acetazolamide 적응증 오류 교정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC7905302/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009536
