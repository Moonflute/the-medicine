---
type: qbank
schema_version: 1
id: medqa-us-train-002413
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12195df6b88943767c9e117052b4aa43bcedc4b7f1deb611cf0ebda698508260
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "extravascular hemolysis"
  - "splenic sequestration"
  - "sickle cell disease"
  - "unconjugated hyperbilirubinemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

겸상적혈구병이 있는 3세 아이가 갑자기 창백해지고 왼쪽 윗배가 불러왔다. 비장이 평소보다 커졌고 혈색소는 9에서 5g/dL로 떨어졌으며 망상적혈구가 증가했다. 빈맥과 말초 관류 저하가 있다. 가장 가능성 높은 합병증은?

## 선택지

A. 급성 비장 격리 위기
B. 파르보바이러스에 의한 무형성 위기
C. 급성 흉부증후군
D. 철결핍성 빈혈

## 해설


갑자기 커진 비장에 적혈구가 격리되면 빈혈과 저혈량이 빠르게 진행한다. 망상적혈구가 증가한 점은 생성이 떨어지는 무형성 위기와 다르며 신속한 소생과 수혈 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002413 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈관외 용혈 D를 유지하면서 민족·비장비대만으로 SCD를 확정하지 않고 급성 비장 격리 가능성을 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002413
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12123041/
