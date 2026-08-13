---
type: qbank
schema_version: 1
id: medqa-us-train-000200
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a16e49bdcef6e73013a429c05b6e59e83bf69ebf2e59b86fe775d0421ad42ade
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "Hypertensive retinopathy"
  - "Diabetic retinopathy"
  - "Cystoid macular edema"
  - "Age-related macular degeneration"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-qzoO2YiOyVleunneunieuzkeymnSAoaHlwZXJ0ZW5zaXZlIHJldGlub3BhdGh5KS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDrp53rp4nrs5Hspp0gKERpYWJldGljIFJldGlub3BhdGh5KS5tZA
  - MTgg7JWI6rO8L-uCmOydtOq0gOugqO2ZqeuwmOuzgOyEsSAoYWdlIHJlbGF0ZWQgbWFjdWxhciBkZWdlbmVyYXRpb24pLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

62세 여성이 양쪽 눈의 시야 흐림이 심해져 내원하였다. 환자는 시야 흐림 때문에 독서가 어렵다고 말하지만, 책을 눈높이보다 아래나 위로 들고 보면 조금 더 잘 보인다고 하였다. 또한 물체를 볼 때 밝은 빛이 필요하다고 한다. 증상은 8년 전 시작되었으며 시간이 지남에 따라 점진적으로 악화되었다고 한다. 환자는 고혈압과 제2형 당뇨병을 앓고 있다. 현재 복용 중인 약물은 글리부라이드(glyburide)와 리시노프릴(lisinopril)이다. 암슬러 격자(Amsler grid)를 볼 때, 중심부의 선들이 물결치고 휘어져 보인다고 한다. 검안경을 통해 관찰한 망막 이미지가 제시되었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 고혈압 망막병증
B. 당뇨 망막병증
C. 낭포성 황반부종
D. 연령 관련 황반변성

## 해설


점진적 시력 저하, Amsler 격자에서 왜곡, 중심 황반 변성 소견은 연령 관련 황반변성(AMD)과 일치한다. 고혈압·당뇨성 망막병증은 혈관 변화가 특징이며, 낭포성 황반부종은 OCT 소견이 다르다. 따라서 연령 관련 황반변성이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000200
