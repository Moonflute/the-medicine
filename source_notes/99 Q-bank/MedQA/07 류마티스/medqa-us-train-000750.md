---
type: qbank
schema_version: 1
id: medqa-us-train-000750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a55d1bcff1d96f9ab076bd8805fa7fd57ffa09f45b1c3bd2f7b0562181c88f8
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Raynaud phenomenon"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvTGFuc29wcmF6b2xlLm1k
---

# MedQA US 임상문제

## 문제

42세 남성이 최근 새로 발생한 비대칭 레이노 현상과 손끝의 작은 궤양으로 내원했다. 손가락이 창백해졌다가 회복되지만 한쪽이 더 심하다. 결합조직병에 의한 이차성 레이노를 평가할 검사는?

## 선택지

A. 두부 CT
B. 혈청 요산만 검사
C. 심장 운동부하검사
D. 항핵항체 검사와 손톱주름 모세혈관 평가

## 해설


성인에 새로 시작된 비대칭 발작과 손끝 궤양은 이차성 원인의 단서다. 항핵항체와 손톱주름 모세혈관을 평가하고, 허혈이 지속되면 동맥 폐색도 신속히 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-000750` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 42세 남성의 새 비대칭 Raynaud·ESR 상승은 이차 원인 평가 D. 검사 필요 없다고 하면서 D를 억지 선택한 해설을 교체. 색변화가 본문에 충분해 사진은 필수 아님.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niams.nih.gov/health-topics/raynauds-phenomenon/diagnosis-treatment-and-steps-to-take

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000750
- https://doi.org/10.1093/rheumatology/keae394
