---
type: qbank
schema_version: 1
id: medqa-us-train-003159
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a16d8f445aec29602d602981f42e45b74d1c80234ff3a559455dad95182f0e14
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "factor V Leiden thrombophilia"
  - "activated protein C resistance"
  - "recurrent venous thromboembolism"
  - "inherited thrombophilia"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsoITshLHtlqXspp0gKEluaGVyaXRlZCBUaHJvbWJvcGhpbGlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

두 차례 명확한 유발 요인 없이 근위부 정맥혈전이 생긴 환자가 두 번째 급성기의 치료를 마쳤다. 출혈 위험은 낮다. 유전성 혈전성 소인 검사를 아직 하지 않았다. 재발 예방을 위한 기본 계획은?

## 선택지

A. 유전자 검사 결과가 나올 때까지 항응고제를 중단한다
B. 출혈 위험을 주기적으로 확인하면서 장기 항응고를 유지한다
C. 유전자 검사가 음성이면 항응고를 즉시 중단한다
D. 유전 결과와 무관하게 항응고 대신 아스피린으로 바꾼다

## 해설


유발 요인이 없는 정맥혈전이 재발하면 장기 항응고를 권고한다. 유전성 혈전성 소인 검사 결과가 이 치료 필요성을 대신 판단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003159 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정맥혈전 재발과 activated protein C 저항성에 factor V Leiden B가 부합하는 기초 응고기전 문항으로 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003159
- https://ashpublications.org/bloodadvances/article/4/19/4693/463998
