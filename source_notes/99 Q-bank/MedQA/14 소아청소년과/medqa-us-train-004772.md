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

7세 아이가 자전거에서 넘어졌다. CT에는 두개강내 출혈 없이 단순 비함몰 선상 두개골 골절만 있다. 관찰하는 동안 두통이 사라졌고 의식·신경 진찰은 정상이다. 보호자 관찰과 재진이 가능하고 학대 의심은 없다. 적절한 처치는?

## 선택지

A. 귀가하며 두통 악화·반복 구토·의식 변화가 생기면 재평가하도록 안내
B. 선상 골절은 모두 중환자실에 입원
C. 예방적 항경련제를 장기 처방
D. 특별한 증상이 없어도 CT 혈관조영을 시행

## 해설

신경학적으로 정상이고 추가 손상이 없는 단순 선상 골절은, 증상이 호전되고 안전한 관찰이 가능하면 경고 증상을 안내해 귀가시킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 입원 불필요와 입원 정답이 충돌하는 해설을 교정. 골절 자체가 아니라 지속 보챔·두통을 관찰 근거로 명시.
- https://www.nice.org.uk/guidance/ng232/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004772
