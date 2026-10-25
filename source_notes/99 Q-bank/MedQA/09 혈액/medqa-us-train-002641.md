---
type: qbank
schema_version: 1
id: medqa-us-train-002641
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b6cfa16c6ae2a64422cd2cf5ef9fbb7b62cfa84a17dcf412800b9f63d7f50f87
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "tumor lysis syndrome"
  - "severe hyperkalemia"
  - "calcium chloride"
related_disease_slugs:
  - MTAg7KKF7JaRL-yiheyWkSDsmqntlbQg7Kad7ZuE6rWwIChUdW1vciBMeXNpcyBTeW5kcm9tZSkubWQ
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병으로 항암치료 중인 51세 남성이 입원 4일째 의식저하가 발생했다. 혈압 94/50 mmHg, 맥박 52회/분, 호흡 14회/분이며 양쪽 폐기저부 수포음과 천명이 있다. 심전도에서 뾰족한 T파와 넓어진 QRS 복합체가 보인다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 글루카곤
B. 피하 일반 인슐린
C. 폴리스티렌 설포네이트
D. 염화칼슘

## 해설


AML 항암치료 뒤 종양용해증후군에 의한 고칼륨혈증이 의심되며, 뾰족한 T파와 QRS 확장은 즉각적인 심장막 안정화가 필요한 소견이다. 보기 중 정맥 calcium chloride D가 우선이다. Calcium은 혈중 K를 낮추지 않으므로 심전도·전해질을 긴급 확인하면서 정맥 insulin-glucose 및 적절한 K 제거 치료를 병행한다. 피하 insulin은 응급 작용이 느리고 결합제만으로 즉각적인 부정맥 위험을 해결할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002641 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ECG 변화 동반 고칼륨혈증의 calcium D 유지, 칼륨 제거 효과가 없고 병행 치료가 필요함을 명확화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002641
