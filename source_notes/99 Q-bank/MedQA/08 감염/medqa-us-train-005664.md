---
type: qbank
schema_version: 1
id: medqa-us-train-005664
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:65fd3877e38f6a038bd755e87a0d1cd601144714931172fda95d2fca319639b0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "Streptococcus pyogenes"
  - "면역복합체 사구체신염"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: investigation
difficulty: complex
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

인공 대동맥판막을 가진 58세 환자가 발열하고, 혈액배양 두 세트에서 황색포도알균이 확인됐다. 경흉부 심초음파에서는 증식물이 보이지 않는다. 다음으로 가장 적절한 검사는?

## 선택지

A. 관상동맥 조영술
B. 운동부하 심초음파
C. 경식도 심초음파
D. 24시간 심전도

## 해설


인공판막과 황색포도알균 균혈증이 있으면 경흉부 검사 음성만으로 심내막염을 배제할 수 없다. 경식도 심초음파로 증식물과 판막 주변 합병증을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005664 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 박리성 심내막염이라는 부적절 용어 교정; 음성 TTE만으로 IE 배제할 수 없음을 명시하여 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005664
- https://doi.org/10.1093/eurheartj/ehad193
