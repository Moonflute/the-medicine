---
type: qbank
schema_version: 1
id: medqa-us-validation-000300
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:deee7121e9c5bc5d49134e1319976bbe61223beca9dbe8a4d037be8cdc329dea
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "메토트렉세이트"
  - "메토트렉세이트 유발 폐렴"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
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

47세 여성이 류마티스관절염으로 메토트렉세이트를 시작한 지 8주 뒤 마른기침과 호흡곤란으로 왔다. 산소포화도 90%, 흉부 CT에서 새 양측 간유리음영이 보인다. 약제 관련 폐장염이 감별에 포함될 때 즉시 할 조치는?

## 선택지

A. 다음 외래까지 메토트렉세이트를 계속 복용한다
B. 메토트렉세이트를 증량한다
C. 메토트렉세이트를 보류하고 약제 폐장염과 감염을 긴급 평가한다
D. 항히스타민제만 추가하고 귀가한다

## 해설


메토트렉세이트 폐장염이 의심되면 약을 보류하고 산소화와 감염, 류마티스관절염 관련 폐질환을 신속히 평가한다. 간유리음영만으로 약물 독성을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000300 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RA 약제 부작용 문항에 신증후군·방광경 해설이 연결된 오연결 교체; C Pneumonitis를 폐렴이 아닌 비감염성 폐장염으로 복구.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/008085s072lbl.pdf
- https://doi.org/10.1016/j.ard.2026.01.023

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000300
- https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methotrexate
