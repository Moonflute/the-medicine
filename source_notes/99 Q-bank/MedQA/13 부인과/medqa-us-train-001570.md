---
type: qbank
schema_version: 1
id: medqa-us-train-001570
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea11f252f0d31f7725d36f81f1aa2637150aa034bbc8363dab6601403a4b363c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "uterine prolapse"
  - "hydronephrosis"
  - "pelvic organ prolapse"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDtg4jstpwgKFV0ZXJpbmUgUHJvbGFwc2UpLm1k
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 여성에게 질 입구 밖까지 내려오는 심한 자궁탈출이 있다. 배뇨가 어렵고 크레아티닌이 평소보다 상승했으며 양쪽 옆구리가 불편하다. 탈출에 의한 상부 요로 폐쇄를 확인할 검사는?

## 선택지

A. 방광 세포검사만 시행
B. 질 분비물 배양
C. 신장 초음파로 수신증 확인
D. 골반저 근전도검사

## 해설

심한 골반장기탈출은 요관을 꺾거나 압박해 수신증과 신기능저하를 일으킬 수 있다. 이런 징후가 있으면 잔뇨와 신기능을 확인하고 상부 요로 영상검사를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수신증과 요관확장을 동의어로 쓴 오류 및 기전 보강.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001570
- https://pubmed.ncbi.nlm.nih.gov/26194290/
