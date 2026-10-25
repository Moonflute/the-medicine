---
type: qbank
schema_version: 1
id: medqa-us-train-008259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9905d72843820722cd6399745a12acebc631e46fb4556f3646eb49d26c1b0293
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "urinary tract infection in pregnancy"
  - "asymptomatic bacteriuria"
  - "urine culture"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MDUg7Iug7J6lL-ustOymneyDgSDshLjqt6Drh6ggKEFzeW1wdG9tYXRpYyBCYWN0ZXJpdXJpYSkubWQ
  - MTIg7IKw6rO8L-ustOymneyDgSDshLjqt6Drh6ggKEFzeW1wdG9tYXRpYyBCYWN0ZXJpdXJpYSkubWQ
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 24주인 29세 초임부가 배뇨 시 작열감과 빈뇨로 내원했다. 발열이나 질 분비물은 없고 치골상부 불편감이 있지만 늑골척추각 압통은 없다. 소변검사에서 백혈구 에스터라제와 아질산염, 세균, 백혈구 55/HPF가 증가했다. 니트로푸란토인을 7일간 처방했다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 항생제에 시프로플록사신 추가
B. 항생제에 페니실린 추가
C. 신장 초음파
D. 소변 배양검사 의뢰

## 해설

임신 중 급성 방광염 증상은 소변 배양(D)으로 원인균과 감수성을 평가해야 한다. 가능하면 항생제 투여 전 검체를 채취하며, 이미 경험적 처방을 했더라도 치료가 끝날 때까지 배양 의뢰를 미루지 않는다. 결과에 따라 약제를 조정한다. 치료 종료 후 확인 배양의 시행 여부는 별도 판단이고, 이유 없이 다른 항생제를 추가하거나 합병증 없는 하부감염에서 신장 초음파를 우선하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 배양을7일치료완료후에만하듯한시간오해수정. 급성방광염의초기배양D와추후배양구별.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008259
