---
type: qbank
schema_version: 1
id: medqa-us-train-004104
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:36c5fa10a72d46e55ad42c52c01c61f982b14d165110b50f95a6fb322ba035bc
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 혈관종증"
  - "HIV/AIDS"
  - "바르토넬라 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
---

# MedQA US 임상문제

## 문제

치료받지 않은 HIV 환자에게 출혈하기 쉬운 붉은 피부 결절이 여러 개 생겼다. 생검에서 혈관 증식과 호중구 침윤이 보이며 조직의 Bartonella PCR이 양성이다. 환자는 안정적이고 피부 외 중증 장기 침범은 확인되지 않았다. 적절한 항생제는?

## 선택지

A. 독시사이클린
B. 세팔렉신
C. 트리메토프림/설파메톡사졸
D. 아목시실린/클라불란산

## 해설


진행된 HIV 감염에서 세균성 혈관종증은 카포시육종과 비슷하게 보일 수 있다. 바르토넬라 감염이 확인된 경우 독시사이클린 또는 에리트로마이신을 사용하며, 침범 부위와 중증도에 따라 치료를 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004104 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 베르트병이라는 잘못된 진단명을 세균성 혈관종증으로 교정; erythromycin C 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/bartonellosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004104
