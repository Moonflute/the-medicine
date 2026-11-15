---
type: qbank
schema_version: 1
id: medqa-us-train-003369
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a89394ffb65d470e29635c15129f34317aa1442ec6a566fb3b248fab24495840
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "recurrent patellar dislocation"
  - "osteochondral fragment"
  - "Ehlers-Danlos syndrome"
  - "arthroscopy"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yXmOufrOyKpC3ri6jroZzsiqQg7Kad7ZuE6rWwIChFaGxlcnMtRGFubG9zIFN5bmRyb21lKS5tZA
difficulty: standard
answer: D
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

23세 여성의 외측 슬개골 탈구를 정복했다. 무릎에 큰 혈관절증이 있고 영상에서 관절 내에 떨어져 나온 골연골 조각이 있다. 다음 조치는?

## 선택지

A. 반복 탈구라도 무조건 관찰만 한다
B. 바로 달리기 운동을 시작한다
C. 관절액을 한 번 빼고 추가 평가는 하지 않는다
D. 전문의에게 의뢰해 골연골 조각의 고정 또는 제거를 평가한다

## 해설

관절 안 유리 골연골 조각은 정복 후에도 관절면 손상과 잠김을 일으킬 수 있다. 크기·위치에 따라 복원하거나 제거할지를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 반복 슬개골 탈구의 관절내 골연골 조각을 무조건 제거한다고 설명하지 않고 복원·고정 가능성을 먼저 평가하도록 교정했다. 선지 A의 수술적 관절경 평가를 유지한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-assessment-and-management-of-first-time-lateral-patellar-dislocation.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003369
