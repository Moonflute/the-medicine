---
type: qbank
schema_version: 1
id: medqa-us-train-007577
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:738e5e01ef77b1d88e1cbfd4ec941435c2840e3ebdc7c7e4f7c2465a8e8e57e5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "교통성 수두증"
  - "뇌실 확장"
  - "뇌실복강 단락술"
  - "두개내압 상승"
  - "hydrocephalus"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15개월 아이의 머리둘레 백분위수가 빠르게 상승했다. 최근 구토와 처짐이 생겼고 대천문이 팽창했다. MRI에서 뇌실 전체가 확장됐고 소아신경외과는 진행성 수두증에 영구적 뇌척수액 우회가 필요하다고 판단했다. 적절한 시술은?

## 선택지

A. 뇌실복강 단락술
B. 요추천자 1회로 종결
C. 아세타졸아미드 장기 단독치료
D. 뇌수도관이 열려 있음에도 뇌수도관 성형술

## 해설

진행성 수두증에는 원인과 해부에 따라 수술로 뇌척수액을 우회한다. 뇌실복강 단락은 뇌실의 뇌척수액을 복강으로 지속 배액하는 방법이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. VP shunt를 ETV로 표기한 오류 교정. 4개 뇌실확장만으로 교통성 원인을 확정하지 않음.
- 공식/학회 근거: https://www.cns.org/guidelines/pediatric-hydrocephalus/4-cerebrospinal-fluid-shunt-endoscopic-third-ventr

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007577
- https://pubmed.ncbi.nlm.nih.gov/34791462/
