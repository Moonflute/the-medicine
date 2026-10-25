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
answer: A
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

엘러스-단로스 증후군이 있는 23세 여성이 춤을 추다가 무릎을 비튼 후 발생한 오른쪽 무릎 통증과 부종으로 응급실에 왔다. 지난해에도 2회의 비슷한 에피소드가 있어 보존적으로 치료받았다. 검사에서 오른쪽 무릎에 크고 압통이 있는 삼출액이 있고 슬개골이 가쪽으로 이동해 있었다. Lachman 검사, 후방서랍검사, Apley 검사는 음성이었다. 무릎 X선에서 관절 내 골연골 조각이 보였다. 다음 중 가장 적절한 치료는?

## 선택지

A. 관절경검사
B. 무릎 위 석고붕대
C. 전 무릎관절 치환술
D. 물리치료만 시행

## 해설

반복 슬개골 탈구와 관절내 골연골 조각이 있어 단순 물리치료만 하기보다 정복과 골연골 손상의 전문 평가가 필요하다. 주어진 선지에서는 관절경(A)이 조각과 관절면을 평가·치료하는 적절한 선택이다. 복원 가능한 큰 골연골 조각은 고정·복원을 고려하며 모든 조각을 일률적으로 제거하지 않는다. 반복 불안정성의 안정화 수술 필요성도 해부학적 위험인자와 연관 손상에 따라 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 반복 슬개골 탈구의 관절내 골연골 조각을 무조건 제거한다고 설명하지 않고 복원·고정 가능성을 먼저 평가하도록 교정했다. 선지 A의 수술적 관절경 평가를 유지한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-assessment-and-management-of-first-time-lateral-patellar-dislocation.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003369
