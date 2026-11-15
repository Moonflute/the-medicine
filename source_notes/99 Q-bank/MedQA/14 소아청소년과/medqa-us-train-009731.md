---
type: qbank
schema_version: 1
id: medqa-us-train-009731
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f997caa2e1456706a1a8af9898b9bce5b9a5aeb551d300e8baf6c2e2e7f9916b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "congenital CMV infection"
  - "선천성 CMV 감염"
  - "periventricular calcifications"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

생후 5일 신생아에게 소두증, 점상출혈과 간비장비대가 있다. 뇌 초음파에서 뇌실 주변 석회화가 보인다. 선천성 거대세포바이러스 감염을 확인하려면?

## 선택지

A. 지금 소변에서 CMV PCR을 시행한다
B. 생후 6주에 소변에서 CMV PCR을 처음 시행한다
C. 신생아 CMV IgG 양성 여부만 확인한다
D. 산모 CMV IgG가 양성이면 신생아 감염으로 확진한다

## 해설


선천성 CMV는 생후 3주 이내 소변 등 적절한 검체에서 바이러스를 확인해 진단한다. 늦게 처음 확인되면 출생 뒤 감염과 구분하기 어려워진다. IgG 양성만으로는 확진할 수 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009731
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10999471/
- https://publications.aap.org/pediatrics/article/158/4/e2026078595/209466/Care-of-the-Infant-With-Congenital-Cytomegalovirus
