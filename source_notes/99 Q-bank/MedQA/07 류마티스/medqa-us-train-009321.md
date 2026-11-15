---
type: qbank
schema_version: 1
id: medqa-us-train-009321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f44e07232d965761678b67e7cf442decfb3d84c87fac88393a40937cffbea8d3
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "류마티스관절염"
  - "DMARD"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: standard
answer: A
publication_status: "withheld"
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FkYWxpbXVtYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

42세 여성이 8개월간 손목과 손가락의 통증 및 한 시간 이상 지속되는 아침 강직으로 내원했다. 양쪽 손목과 여러 근위지절관절에 활막염이 있고 항CCP 항체가 양성이다. 류마티스관절염으로 진단됐고 임신이나 간·신장질환 등 금기는 없다. 초기 질병조절 항류마티스약으로 적절한 것은?

## 선택지

A. 메토트렉세이트
B. 아달리무맙
C. 프레드니솔론
D. 디클로페낙

## 해설


대칭성 소관절 활막염과 항CCP 양성은 류마티스관절염을 지지한다. 금기가 없으면 메토트렉세이트가 초기 질병조절 치료의 중심이다. 소염진통제는 증상을 줄일 수 있지만 관절손상을 막는 질병조절 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009321 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제공되지 않은 손X선의 미란을 만들어 넣은 설명 교정; 지속 활막염과 질병변경 치료 의도 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1016/j.ard.2026.01.023

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009321
- EULAR 류마티스관절염 치료 권고 2025 개정: https://doi.org/10.1016/j.ard.2026.01.023
