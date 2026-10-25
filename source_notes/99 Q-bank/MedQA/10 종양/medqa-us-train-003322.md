---
type: qbank
schema_version: 1
id: medqa-us-train-003322
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e61b7db610b24e6d6363eee23057c68f61cdd784f3f82386942b8cc4129e560
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "lymphangiosarcoma"
  - "Stewart-Treves syndrome"
  - "chronic lymphedema"
  - "postmastectomy angiosarcoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

93세 여성이 한 달 동안 커진 오른팔의 보라색 부위로 내원했다. 통증과 가려움은 없고 2년 전 기저세포암으로 모스수술을 받았으며 57년 전 오른쪽 유방의 침윤성 유관암으로 근치적 유방절제술을 받았다. 이후 오른쪽 상지에 만성 림프부종이 있었고 피부검사에서 상부 팔에 궤양을 동반한 서로 융합된 보라색 판이 세 개 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 림프관육종
B. 봉와직염
C. 편평태선
D. 카포시육종

## 해설


만성 림프부종 후 발생하는 혈관육종(스튜어트‑트레브스 증후군)은 피부에 푸른‑보라색 병변이 융합된 형태로 나타난다. 다른 선택지는 해당 병변과 맞지 않는다. 따라서 정답은 A이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003322 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유방절제 후 수십년 만성 림프부종 팔의 보라색 궤양성 판은 Stewart-Treves/림프관육종 A와 일치한다. 원문·선지·해설을 직접 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003322
