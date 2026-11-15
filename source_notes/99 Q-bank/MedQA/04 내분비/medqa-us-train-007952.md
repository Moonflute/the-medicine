---
type: qbank
schema_version: 1
id: medqa-us-train-007952
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69b6f86928c503baeb9fd0529b7249bcf5b6501a949d6c47ce98e95dbf9f7d85
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperprolactinemia"
  - "primary hypothyroidism"
  - "TRH-mediated prolactin elevation"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

36세 여성이 레보티록신을 6개월 중단한 뒤 피로, 월경불순과 양측 유즙 분비가 생겼다. 임신 검사는 음성이다. TSH 32 mIU/L, 유리 T4 0.4 ng/dL, 프로락틴 62 ng/mL이고 두통이나 시야 이상은 없다. 다음 처치는?

## 선택지

A. 카베르골린을 먼저 투여한다
B. 뇌하수체 수술을 의뢰한다
C. 증상이 없어질 때까지 약 없이 지켜본다
D. 레보티록신을 재개하고 프로락틴을 재평가한다

## 해설


명백한 원발성 갑상선기능저하가 프로락틴 상승을 일으킬 수 있다. 갑상선기능을 먼저 교정하고 재검한다. 정상화 후에도 고프로락틴혈증이 지속되면 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007952 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 중단된 LT4와 TSH16.3에서 TRH 증가–prolactin 상승–유즙분비의 원발성 갑상선기능저하 D 기전은 일치.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007952
- https://www.nature.com/articles/s41574-023-00886-5
