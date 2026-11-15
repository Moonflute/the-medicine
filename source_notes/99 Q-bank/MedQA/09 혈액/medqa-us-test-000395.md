---
type: qbank
schema_version: 1
id: medqa-us-test-000395
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c835f14ab82032624e58c04c7577418223998e5a96340b3a21e5818f00d7a857
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성질환 빈혈"
  - "류마티스관절염"
  - "헵시딘"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
---

# MedQA US 임상문제

## 문제

류마티스관절염이 활동성인 환자가 서서히 빈혈을 보인다. 철결핍이나 출혈을 시사하는 병력은 없고 C반응단백질이 높다. 어떤 철검사 조합이 염증성 빈혈에 가장 부합하는가?

## 선택지

A. 낮은 혈청 철, 높은 총철결합능, 낮은 페리틴
B. 높은 혈청 철, 낮은 총철결합능, 높은 트랜스페린 포화도
C. 높은 혈청 철, 높은 총철결합능, 낮은 페리틴
D. 낮은 혈청 철, 낮거나 정상인 총철결합능, 정상 또는 높은 페리틴

## 해설


염증은 철을 저장소에 가두고 트랜스페린 생성을 낮춘다. 혈청 철은 낮아도 페리틴은 정상 또는 높을 수 있다. 실제 환자에서는 철결핍이 함께 있는지도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000395 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RA 염증과 높은 ferritin·소구성 빈혈은 hepcidin 증가/철격리 C와 일치. 다른 출혈 원인이 반드시 없다는 의미는 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000395
- https://doi.org/10.1182/bloodadvances.2025015950
