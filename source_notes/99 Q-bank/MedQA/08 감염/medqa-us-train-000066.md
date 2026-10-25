---
type: qbank
schema_version: 1
id: medqa-us-train-000066
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d5093100b99dbbce9c718949d5471f6be93d762d3079980de065f94d51e4eafb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "phenytoin"
  - "seizures"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
---

# MedQA US 임상문제

## 문제

9세 여아가 재발성 발작으로 정맥 phenytoin을 잘못 투여받은 후 소생되었습니다. 이 사건은 당국에 보고되었습니다. 철저한 조사를 통해 사건을 초래한 다양한 원인이 밝혀졌습니다. 한 가지 중요한 발견은 환자 인계 중에 처방한 선임 레지던트와 받은 1년차 레지던트 간의 phenytoin 용량에 대한 구두 오해였습니다. 향후 이 특정 오류의 위험을 최소화하기 위해 가장 적절한 관리는 다음 중 어떤 것을 시행하는 것입니까?

## 선택지

A. Closed-loop communication
B. Near miss
C. Root cause analysis
D. Sentinel event

## 해설


구두 전달 오류는 의사-간 커뮤니케이션 실패에서 비롯된다. 폐쇄형 커뮤니케이션(closed-loop communication)은 확인과 피드백을 포함해 지시를 명확히 하여 동일한 오류를 방지한다. 따라서 위험 최소화를 위한 최적 관리법은 폐쇄형 커뮤니케이션이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000066 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 구두 처방의 되읽기·확인으로 closed-loop communication A가 오류 최소화에 직접 대응. 실제 위해 발생 사건을 near miss로 바꾸지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000066
