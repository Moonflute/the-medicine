---
type: qbank
schema_version: 1
id: medqa-us-train-009242
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4725e11a647bf84d55d0b6339251153af5f80773bb455814cd1668ec568415bc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "celiac disease"
  - "셀리악병"
  - "dermatitis herpetiformis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: standard
answer: B
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

24세 여성이 오랜 기간 지속된 설사로 내원했다. 반복되는 악취 나는 묽은 변과 지난 3년간 35파운드의 체중 감소가 있다. 2개월 전 팔꿈치와 전완에 ‘가렵고 울퉁불퉁한’ 발진이 생겼다가 호전되었다. 최근 캠핑이나 해외여행은 하지 않았다. 진찰에서 마르고 결막과 피부가 창백하며 복부가 약간 팽창되어 있다. 다음 중 이 환자의 진단을 확진할 검사는 무엇인가?

## 선택지

A. 대변 잠혈검사
B. 소장 내시경 및 생검
C. 혈청 항조직 트랜스글루타미나제 항체 검사
D. 대변 배양

## 해설


정답 B. 만성 흡수장애·체중감소와 팔꿈치/전완의 심한 소양성 발진은 포진상피부염을 동반한 셀리악병을 시사한다. 선택지 중 소장(십이지장) 생검은 융모 위축 등을 확인하여 진단하는 검사다. 일반적 평가에는 gluten 섭취 중 total IgA와 IgA-tTG 검사가 포함되며 IgA 결핍이면 IgG 기반 검사를 고려한다. 이 사례에는 비생검 진단을 적용할 높은 항체가 등이 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009242 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소양성 신전부 발진은 단순 두드러기가 아닌 포진상피부염 연관성; 성인 장생검 B의 맥락과 혈청검사 조건 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/36602836/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009242
