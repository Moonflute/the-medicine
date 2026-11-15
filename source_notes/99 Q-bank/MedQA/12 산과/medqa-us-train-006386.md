---
type: qbank
schema_version: 1
id: medqa-us-train-006386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea8a16c53d7e2b750e516b4d796ab66e141b1c7716aefa5494a9697e0371374f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "포상기태"
  - "완전 포상기태"
  - "임신성 융모성 질환"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: A
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 초기 환자에게 질출혈과 심한 구토가 있다. 자궁은 주수보다 크고 β-hCG가 매우 높다. 질식 초음파에 여러 작은 낭이 있는 자궁내 조직이 보이고 배아는 보이지 않는다. 포상기태가 의심될 때 다음 처치는?

## 선택지

A. 흡인술로 자궁내용물을 제거해 병리검사를 하고 이후 β-hCG를 추적한다
B. 항암치료를 먼저 시작하고 조직검사는 생략
C. β-hCG만 추적하고 자궁 안 조직을 그대로 둠
D. 포상기태가 의심되는 모든 환자에게 즉시 자궁절제술 시행

## 해설

포상기태가 의심되면 대개 흡인술로 제거하고 병리검사로 확인한다. 제거 후에는 연속 β-hCG 검사로 지속 영양막질환을 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 양성 임신검사 10주 전을 임신10주로 혼동한 오류 수정.
- https://www.cancer.gov/types/gestational-trophoblastic/patient/gtd-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006386
- https://pubmed.ncbi.nlm.nih.gov/40631439/
