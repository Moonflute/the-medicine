---
type: qbank
schema_version: 1
id: medqa-us-train-003038
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:67ff318975fbf9d28ada98a9a02c7bb4728f9b9fb3540c1aacf5b8315f78d080
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "gestational diabetes mellitus"
  - "untreated maternal hyperglycemia"
  - "neonatal hypocalcemia"
  - "fetal complications"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신성 당뇨병의 혈당 조절이 충분하지 않았던 산모가 39주에 출산했다. 신생아는 겉보기에는 건강하고 호흡은 안정적이다. 초기 수유와 함께 선별할 이상은?

## 선택지

A. 신생아 갑상샘기능항진증
B. 신생아 고칼슘혈증
C. 신생아 당뇨병성 케톤산증
D. 신생아 저혈당

## 해설


당뇨병 산모의 아기는 태아기 고인슐린혈증이 출생 직후에도 지속돼 저혈당 위험이 있다. 증상이 없어도 일찍 수유하고 위험군 혈당 감시를 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 오답 선지 omphalocele을 제대탈출로 번역한 해부학적 오역을 배꼽탈장으로 바로잡았다. 신생아 저칼슘혈증 정답 A는 유지한다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003038
- https://pubmed.ncbi.nlm.nih.gov/33835840/
