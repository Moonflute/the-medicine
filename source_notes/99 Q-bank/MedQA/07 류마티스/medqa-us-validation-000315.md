---
type: qbank
schema_version: 1
id: medqa-us-validation-000315
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:46854c75b94b74a76129f216d942a8f64d91826b68ea91a706f68fa4e4ee7ee1
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "쇼그렌증후군"
  - "구강건조증"
  - "안구건조증"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: standard
answer: C
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
---

# MedQA US 임상문제

## 문제

70세 여성이 수개월간 양쪽 눈의 이물감과 입 마름이 있어 음식을 삼킬 때 물을 자주 마신다. 건조를 유발하는 약을 쓰지 않는다. 쇼그렌증후군의 초기 평가에 도움이 되는 검사는?

## 선택지

A. 치료 반응을 보기 위한 스테로이드 시험 투약
B. 심전도와 운동부하검사
C. 쉬르머 검사와 항SSA/Ro 항체
D. 이하선 절제 생검부터 시행

## 해설


쉬르머 검사는 눈물 분비를 객관화하고 항SSA/Ro는 쇼그렌증후군을 뒷받침한다. 필요하면 안구 염색, 침 분비량 또는 소타액선 생검을 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000315 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 깨진 검사명을 Schirmer로 복구; anti-La·Schirmer가 모두필수/단독확정은 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5650478/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000315
- https://doi.org/10.1093/rheumatology/keae152
