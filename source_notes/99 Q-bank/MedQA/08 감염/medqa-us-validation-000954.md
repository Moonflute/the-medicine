---
type: qbank
schema_version: 1
id: medqa-us-validation-000954
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:728c9d2e247da84ac4f9a13c7c568683282524270e92a17b568dac10d288f60f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 감염"
  - "폐포자충 폐렴"
  - "톡소플라스마증"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDIg7Zi47Z2h6riwL-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: prevention
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

항레트로바이러스 치료를 시작한 지 얼마 안 된 HIV 환자의 CD4가 74/μL이며 톡소포자충 IgG는 양성이다. 활동성 감염은 없고 약물 알레르기도 없다. 폐포자충 폐렴과 톡소포자충 뇌염을 함께 예방할 약제는?

## 선택지

A. 아지트로마이신
B. 트리메토프림/설파메톡사졸
C. 플루코나졸
D. 흡입 펜타미딘

## 해설


CD4가 100/μL 미만이고 톡소포자충 IgG가 양성이면 톡소포자충 예방이 필요하다. 트리메토프림/설파메톡사졸은 폐포자충과 톡소포자충을 함께 예방할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000954 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV-PCP의 TMP-SMX 유지 예방은 toxoplasma 예방 B도 제공. 현재 질환 치료와 이후 이차예방 목적을 구분하여 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000954
