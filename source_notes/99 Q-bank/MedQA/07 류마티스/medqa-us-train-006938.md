---
type: qbank
schema_version: 1
id: medqa-us-train-006938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74915a26fde19466256783e4e7cff0a73f5733604d8cbd8d363a625ca6e2ef79
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "compression fracture"
  - "osteoporosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU2ltdmFzdGF0aW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

65세 폐경 여성이 가벼운 물건을 들다가 척추 압박골절을 입었다. 영상에서 이전 척추 취약골절도 보이고 DXA T점수는 -3.1이다. 이차성 원인과 금기를 확인했다. 국내 권고에 맞는 골절 예방 계획은?

## 선택지

A. 칼슘과 비타민 D만 보충한다
B. 새 골절이 생길 때까지 약을 미룬다
C. 골형성 촉진 치료를 우선 고려하고 이후 골흡수 억제 치료로 이어간다
D. 통증이 사라지면 치료가 필요 없다

## 해설


최근 척추 취약골절과 다발골절은 매우 높은 골절 위험에 해당한다. 국내 권고는 이런 경우 골형성 촉진제를 우선 고려하고, 이후 골흡수 억제제로 효과를 유지하도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006938 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흡연이 제시된 선지 중 위험인자라는 범위를 모든 골절 위험인자 중 최강이라는 일반화와 구분했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006938
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10721382/
