---
type: qbank
schema_version: 1
id: medqa-us-train-009461
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:49fc14316b5f0a1984b1597a263e8d91ac7ab680605545ceec7ac25417c22dee
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
  - "강직성 척추염"
  - "acute anterior uveitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

강직성 척추염으로 경추 움직임이 제한된 33세 남성이 미끄러져 넘어지고 심한 목 통증을 호소한다. 신경학적 진찰은 정상이고 단순촬영에서 뚜렷한 골절은 보이지 않는다. 척추 정렬을 보호하면서 할 다음 검사는?

## 선택지

A. 단순촬영이 정상이므로 영상 평가를 끝낸다
B. 수동 굽힘·폄 촬영으로 통증을 재현한다
C. 일주일 후 DXA만 시행한다
D. 척추 CT로 경추와 다른 부위 골절을 평가한다

## 해설


강직된 척추는 작은 외상에도 불안정 골절이 생기며 단순촬영에서 놓치기 쉽다. 기존 정렬을 보호하며 CT로 평가하고, 신경학적 이상이나 인대 손상 의심 시 MRI를 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009461 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전방척추관절염·방사성 변화라는 깨진 용어와 다른 신경합병증 연관없다는 과장 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009461
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6130102/
