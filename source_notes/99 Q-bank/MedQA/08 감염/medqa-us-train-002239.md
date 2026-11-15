---
type: qbank
schema_version: 1
id: medqa-us-train-002239
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0f639ed29b844768a58a74a66dd26f67e76b1843a17ffea2064477e908e457f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "secondary syphilis"
  - "Jarisch-Herxheimer reaction"
  - "benzathine penicillin"
  - "ibuprofen"
  - "Syphilis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: adverse_effect
difficulty: complex
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGhlbnlsZXBocmluZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

초기 매독을 벤자틴 페니실린 G로 치료한 2시간 뒤 미열, 오한, 두통과 근육통이 생겼다. 혈압과 산소포화도는 안정적이고 새 두드러기, 입술 부종이나 천명은 없다. 가장 가능성 높은 원인은?

## 선택지

A. 페니실린 유발 아나필락시스
B. 야리시-헤르크스하이머 반응
C. 약제 관련 혈청병
D. 치료에 불응한 신경매독

## 해설


매독 치료 후 수 시간 내 발생한 일시적 발열과 근육통은 야리시-헤르크스하이머 반응에 부합한다. 두드러기, 기도 증상이나 순환 이상이 나타나면 아나필락시스로 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002239 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Jarisch–Herxheimer 반응의 해열 진통 B 유지. Ceftriaxone이 항생제가 아니라는 오류와 phenylephrine을 아나필락시스 치료로 보는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002239
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
