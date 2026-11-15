---
type: qbank
schema_version: 1
id: medqa-us-train-000756
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:213bbef0c13987a915fd0c84282a2c993e604ab8bc76d2ecfb799a06c6758445
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Psoriatic arthritis"
  - "Ankylosing spondylitis"
  - "Systemic lupus erythematosus"
  - "Secondary syphilis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 여성이 수개월간 양손 손가락 통증과 뻣뻣함을 겪고 있다. 손톱에 패임과 변색이 있고, 정강이와 등에 은백색 인설을 동반한 경계가 뚜렷한 붉은 판이 보인다. 류마티스인자와 항핵항체는 음성이다. 가장 가능성 높은 진단은?

## 선택지

A. 이차 매독
B. 강직성 척추염
C. 전신 홍반 루푸스
D. 건선 관절염

## 해설


건선에 합당한 피부 병변과 손톱 변화에 손가락 관절염이 동반되어 건선관절염이 가장 적절하다. 류마티스인자 음성만으로 진단하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-000756` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 사진은 누락되었지만 은백색 인설 판·손톱 변화·관절염·RF 음성이라는 텍스트로 PsA D 선택 가능. 그림을 실제 관찰했다고 기록하지 않음.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000756
