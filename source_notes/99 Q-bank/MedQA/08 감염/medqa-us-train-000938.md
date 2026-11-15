---
type: qbank
schema_version: 1
id: medqa-us-train-000938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83ef24fc79de259a1a792f0781884c0f2951b1322ef80d8a115f2bd56247e8f8
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pleural effusion"
  - "consolidation"
  - "air bronchogram"
  - "loculated pleural effusion"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yVheyEsSDtnYnsiJggKE1hbGlnbmFudCBQbGV1cmFsIEVmZnVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

입원해 폐렴 치료를 받는 환자의 흉부 초음파에 여러 구획으로 나뉜 흉수가 보인다. 흉수를 채취했으며 pH는 7.10이다. 안전하게 접근 가능한 부위가 있다. 항생제와 함께 시행할 조치는?

## 선택지

A. 흉수는 그대로 두고 항생제만 유지한다
B. 흉수세포 검사 결과가 나올 때까지 처치하지 않는다
C. 이뇨제로 먼저 흉수를 줄인다
D. 영상 유도 흉관 배액을 시행한다

## 해설


폐렴 환자의 흉수 pH가 7.20 이하이면 감염성 흉수 가능성이 높다. 안전하게 접근할 수 있다면 항생제에 흉관 배액을 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000938 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무균성 흉수라는 역전 표현을 복잡성 폐렴연관 흉수/흉막감염으로 교정; 모든 감염성 흉수가 저포도당인 것은 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.brit-thoracic.org.uk/clinical-resources/guidelines/pleural-disease-full-guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000938
- https://thorax.bmj.com/content/78/Suppl_3/s1
