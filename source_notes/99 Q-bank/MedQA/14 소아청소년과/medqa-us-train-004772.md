---
type: qbank
schema_version: 1
id: medqa-us-train-004772
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e99c66bef1583fba7e82a6530a4969015a39a8b983211f2aeb2549ac9c3b7750
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "선상 두개골 골절"
  - "소아 두부 외상"
  - "두개골 골절 관찰"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzsoIAg6rOo7KCIIChCYXNhbCBza3VsbCBmcmFjdHVyZSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 자전거에서 떨어져 머리부터 아스팔트에 부딪힌 지 1시간 후 어머니와 함께 응급실에 왔다. 의식 소실은 없었지만 사고 후 보채고 두통을 호소했다. 중대한 질환 병력과 복용약은 없다. 체온은 37.1°C (98.7°F), 맥박은 분당 115회, 호흡수는 분당 20회, 혈압은 100/65 mm Hg이다. 앞쪽 두피에 큰 멍이 있다. 신경학적 검사를 포함한 진찰에서 다른 이상은 없다. 비조영 두부 CT에서 함몰되지 않은 선상 두개골 골절과 2mm 벌어짐이 보인다. 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 입원 관찰
B. 귀가
C. 뇌 MRI
D. CT 혈관조영술

## 해설

단순 비함몰 선상 골절만 있고 완전히 회복한 소아는 안전한 보호·추적 조건하에 퇴원할 수 있다. 다만 이 환자는 사고 후 보챔과 두통이 지속되는 급성기이므로 입원 관찰(A)을 선택할 수 있다. 골절이 있다는 이유만으로 모든 환자에게 입원이나 추가 MRI·혈관조영이 필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 입원 불필요와 입원 정답이 충돌하는 해설을 교정. 골절 자체가 아니라 지속 보챔·두통을 관찰 근거로 명시.
- https://www.nice.org.uk/guidance/ng232/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004772
