---
type: qbank
schema_version: 1
id: medqa-us-train-008272
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:93241a4a48adeda7a3d9d959d5ca23ff830d6234af0e3eaa5aefc9db81e5903f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatic adenoma rupture"
  - "hemoperitoneum"
  - "oral contraceptive use"
  - "Hepatic adenoma"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

6 cm 간세포선종이 있던 27세 여성이 갑자기 우상복부 통증과 저혈압을 보였다. 초기 소생 후 촬영한 CT에서 혈복강과 선종에서의 동맥성 조영제 유출이 보인다. 현재 혈압이 유지되고 중재시술팀이 바로 가능하다. 적절한 지혈 처치는?

## 선택지

A. 경피 종괴 생검
B. 출혈 부위 간동맥 색전술
C. 피임약만 중단하고 경과 관찰
D. 내시경으로 위장관 지혈

## 해설


간세포선종이 파열돼 동맥성 출혈이 지속되면 소생과 함께 혈관 내 색전으로 지혈할 수 있다. 혈역학이 유지되지 않거나 색전이 불가능·실패하면 외과적 지혈을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008272 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 젊은 여성의 RUQ급통증·쇼크와 OCP B는 출혈성 간선종 의도에 부합. 간선종을 혈관종/혈관 종양으로 분류한 오류 교정; 누락 영상 확인을 주장하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008272
- https://doi.org/10.14309/ajg.0000000000002857
