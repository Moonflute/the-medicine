---
type: qbank
schema_version: 1
id: medqa-us-train-002747
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29c4d34dd641b4a4354744bbc0c4801830d4a1fe524b41f98eeeaaf2ee3dfa2e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "seropositive inflammatory arthritis"
  - "osteoporosis risk"
  - "rheumatoid nodules"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

59세 폐경 여성이 류마티스관절염의 다른 치료를 조정하는 동안 3개월 이상 프레드니솔론을 복용할 예정이라고 한다. 알려진 골절은 없다. 시작 시 함께 할 조치는?

## 선택지

A. 골절 병력, DXA 등을 포함해 골절 위험을 평가하고 예방 계획을 세운다
B. 골통이 생길 때까지 평가를 미룬다
C. 혈청 칼슘이 정상이면 골 위험 평가를 생략한다
D. 2년 뒤에만 첫 골밀도검사를 한다

## 해설


글루코코르티코이드는 골절 위험을 높이므로 치료 초기에 골절력과 골밀도, 용량 등을 확인한다. 위험도에 따라 운동·영양과 골다공증 약제를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002747 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대칭성 미란성 RA는 전신·관절주위 골소실 및 골절 위험과 관련되어 골다공증 A가 적절하다. 다른 선지와의 상대적 연관을 묻는 원문 취지와 해설 일치.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002747
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6288607/
