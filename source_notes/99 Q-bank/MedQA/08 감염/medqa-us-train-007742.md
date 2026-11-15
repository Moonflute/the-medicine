---
type: qbank
schema_version: 1
id: medqa-us-train-007742
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e6fd89437a3a24722ecdd9d6ad18dd3cdca3aaf2d798df5c94c7f4116e7af68
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pertussis"
  - "paroxysmal cough"
  - "macrolide therapy"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

성인이 8일째 발작적으로 기침하고 기침 뒤 구토를 한다. 백일해 PCR 검체를 채취했고 결과는 아직 나오지 않았다. 같은 집에 생후 2개월 된 영아가 있다. 증상이 있는 성인에게 취할 조치는?

## 선택지

A. 결과가 확인될 때까지 약 없이 관찰한다
B. 결과와 무관하게 아목시실린을 시작한다
C. PCR을 기다리지 않고 아지트로마이신을 시작하고 격리한다
D. 백신을 추가 접종하고 현재 감염은 치료하지 않는다

## 해설


백일해가 강하게 의심되고 중증 위험이 큰 영아와 접촉하면 검사 결과 전에 적절한 항생제를 시작할 수 있다. 격리와 함께 영아 등 밀접 접촉자의 노출 후 예방도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007742 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 백일해 문항에 통역/가족 비공개 윤리 해설이 붙은 명백한 오연결을 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007742
