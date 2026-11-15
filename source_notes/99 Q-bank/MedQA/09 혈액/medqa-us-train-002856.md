---
type: qbank
schema_version: 1
id: medqa-us-train-002856
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ffcc3e85663d4e6e66647b3b8a68ab39009aa240ffb79faa2aa6e3deb1dc0230
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "isoniazid-induced sideroblastic anemia"
  - "latent tuberculosis treatment"
  - "microcytic anemia with high iron"
  - "pyridoxine deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: adverse_effect
difficulty: complex
answer: D
publication_status: "withheld"
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

39세 남성이 잠복결핵으로 이소니아지드를 복용하기 시작한 지 3개월 뒤 피로와 호흡곤란으로 내원했다. 혈색소 7.8 g/dL, MCV 71 fL이며 혈청 철과 페리틴은 높다. 골수 철 염색에서 고리철적모구가 보인다. 이 환자의 빈혈 원인으로 가장 적절한 것은?

## 선택지

A. 철결핍
B. 염증으로 인한 철 격리
C. 만성콩팥병으로 인한 적혈구생성인자 부족
D. 이소니아지드에 의한 피리독신 의존성 헴 합성 장애

## 해설


이소니아지드는 피리독신 이용에 영향을 줘 피리독신 의존 효소인 ALA 합성효소를 통한 헴 합성을 떨어뜨릴 수 있다. 철과 페리틴이 높고 골수에 고리철적모구가 보이는 점이 철결핍빈혈과 구별되는 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002856 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B6-heme 합성 장애를 myoglobin 합성 장애·유리성 빈혈로 부른 오류를 sideroblastic anemia로 교정; 실제 INH 복용은 원문에 미명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b46d1d-2300-457d-a7bd-a88a3f8d2235

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002856
