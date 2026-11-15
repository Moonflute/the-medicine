---
type: qbank
schema_version: 1
id: medqa-us-train-007311
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0f17157ce4e3a792cbd10c2f030601ade107f3043c58d72aee6a208ff08f8af
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "호지킨 림프종"
  - "B 증상"
  - "종격동 림프절병증"
  - "절제 림프절 생검"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YuOyngO2CqCDrprztlITsooUgKEhvZGdraW4gTHltcGhvbWEpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

60세 남성이 수개월 동안 커진 무통성 경부 림프절, 흠뻑 젖는 야간 발한, 체중 감소로 내원했다. CT에서 종격동 림프절도 커져 있고 경부 림프절은 안전하게 떼어낼 수 있다. 림프종을 확진하고 아형을 분류할 검사는?

## 선택지

A. 경부 림프절 절제생검
B. 경부 림프절 세침흡인세포검사만
C. 등쪽 장골에서 골수생검 먼저 시행
D. FDG PET/CT만 시행

## 해설


절제생검은 림프절 구조를 보존해 조직 형태와 면역표현형을 함께 평가할 수 있다. 세침흡인 단독이나 PET/CT만으로는 새 림프종의 아형을 확정하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007311 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행성 무통성 림프절·B증상·종격동 확대로 림프종을 의심할 때 조직구조를 평가하는 절제생검 D가 적절함을 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://oncologypro.esmo.org/content/download/233774/3945164/file/2019-ESMO-ESO-Course-Valencia-Understanding-Treating-Lymphomas-Challenges-Maria-Jose-Terol.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007311
- https://www.nice.org.uk/guidance/ng52/chapter/recommendations
