---
type: qbank
schema_version: 1
id: medqa-us-train-008262
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8001062d6b9a639e44c77ebfd4e582ac20db33f46d1e99f6e1d5a4a748040f35
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "developmental dysplasia of the hip"
  - "Ortolani maneuver"
  - "hip ultrasound"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cc64us7ISxIOqzoOq0gOygiCDsnbTtmJXshLHspp0gKERldmVsb3BtZW50YWwgRHlzcGxhc2lhIG9mIHRoZSBIaXApLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 4주 백인 아기가 정기검진을 위해 내원했다. 임신성 당뇨병이 식이와 운동으로 조절된 28세 초임부에게서 둔위로 제왕절개를 통해 임신 38주에 태어났다. 키, 체중, 머리둘레는 90백분위수이며 심폐검사는 정상이다. 누운 자세에서 좌측 다리가 우측보다 짧고 좌측 고관절을 외전하면서 대퇴골 대전자에 압력을 가하면 통증 없는 딸깍거림이 난다. 음순 피부 주름 비대칭과 천골 부위의 청색 반점이 있다. 가장 적절한 다음 처치는?

## 선택지

A. 6개월 후 추적 관찰
B. 고관절 초음파
C. 요천추 초음파
D. 고관절 X선

## 해설

정답은 B, 고관절 초음파이다. 둔위 출생력, 다리 길이 차이 및 외전 시의 clunk는 발달성 고관절 이형성/탈구를 의심하게 한다. 생후 4주에는 골화가 충분하지 않은 고관절의 연골과 안정성을 평가하기 위해 초음파가 적절하다. 이상 진찰 소견이 있으므로 6개월까지 기다리지 말고 소아정형외과 평가를 진행한다. 모든 생후 6개월 미만 영아에서 초음파가 항상 최선이라는 뜻은 아니며, 골화가 진행되는 약 4개월 이후에는 골반 방사선촬영도 적절한 선택이 될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 생후4주·둔위·다리길이차·Ortolani clunk는 DDH. 초음파 B 유지, 6개월 내 모든 영아에 초음파가 가장 민감하다는 일반화 수정 및 조기 전문의뢰 명시.
- 공식/학회 근거: https://www.aaos.org/quality/quality-programs/pediatric-developmental-dysplasia-of-the-hip/
- 공식/학회 근거: https://www.radiologyinfo.org/en/info/acs-dysplasia-hip-child

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008262
