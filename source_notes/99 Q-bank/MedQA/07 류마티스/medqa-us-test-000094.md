---
type: qbank
schema_version: 1
id: medqa-us-test-000094
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c2e7fb8d02d055c9d0de7760b856cb6789601a8a8f3b4eb1e8b06cd34c5dfa5b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "환축추 불안정성"
  - "류마티스관절염"
  - "척수 압박"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

오래된 류마티스관절염으로 손 변형이 있는 54세 여성이 목 통증과 새 보행장애로 내원했다. 양쪽 다리에서 과반사와 바빈스키 징후가 확인된다. 환축추 불안정성과 경수 압박이 의심될 때 다음 조치는?

## 선택지

A. 목을 수동으로 굽히고 펴면서 통증을 재현한다
B. 근육이완제를 처방하고 다음 달에 재진한다
C. 경추를 보호한 상태로 응급 MRI와 척추 전문 평가를 진행한다
D. 정상 손목 X선을 확인한 후 귀가시킨다

## 해설


류마티스관절염의 경추 불안정성이 척수를 압박할 수 있다. 새로운 척수병증 소견이 있으면 경추를 조작하지 말고 보호하면서 응급 MRI를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000094` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대칭성 변형성 손관절염과 경수증의 위험 RA D 유지. 골절로 단정하지 않고 환축추 불안정성·경수 압박의 연결로 교정; 위험한 조작을 권하지 않음.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000094
- https://acsearch.acr.org/docs/69484/Narrative/
