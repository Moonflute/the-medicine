---
type: qbank
schema_version: 1
id: medqa-us-train-004914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74354e1e2452df7b86a306cb364e3f8c62f8eb31176001c6f99faf7093549abb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "백일해"
  - "Tdap 예방접종"
  - "밀접 접촉자 예방적 항생제"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
question_type: prevention
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

8세 남아가 7일 동안 점점 심해지는 기침으로 내원했다. 기침은 발작적으로 5~10회 연속 발생하고 매번 깊고 시끄러운 숨을 들이쉰다. 기침 후 가끔 구토하며, 기침이 시작되기 전 1주일 동안 콧물이 있었다. 예방접종 기록은 없고 2주 된 여동생과 함께 산다. 어머니는 11년 전 Tdap를 접종했고 아버지의 예방접종 기록은 없다. 아이의 백혈구는 42,000/mm³이며 인후 배양과 PCR 결과를 기다리는 중이다. 이 가족에게 권고할 가장 적절한 조치는?

## 선택지

A. 아기와 아버지에게 경구 아지스로마이신을 투여하고 아버지에게 Tdap 접종
B. 모든 가족에게 경구 아지스로마이신을 투여하고 부모에게 Tdap 접종
C. 모든 가족에게 경구 에리트로마이신을 투여하고 아버지에게 Tdap 접종
D. 모든 가족에게 경구 아지스로마이신을 투여하고 아버지에게만 Tdap 접종

## 해설


임상적 백일해가 강하게 의심되고 같은 집에2주 신생아가 있어 환아 치료와 가족 밀접 접촉자 예방이 중요하다. Azithromycin은 신생아를 포함한 적절한 선택이며 CDC는 지표환자 기침 시작21일 내 가정 접촉자 PEP를 지지한다. 원문에서 어머니는 마지막 Tdap가11년 전, 아버지는 기록이 없어 적절한 백신 보완/정기 booster가 필요하므로 선택지 B가 부합한다. 모든 접촉자에게 직전 접종 시점과 무관하게 Tdap를 반복한다는 의미는 아니며 백신이 즉각 PEP 항생제를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004914 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 어머니 Tdap11년 전/아버지 기록 불명을 복원. 가족 PEP와 정기 booster B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pertussis/php/postexposure-prophylaxis/index.html
- https://www.cdc.gov/pertussis/hcp/vaccine-recommendations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004914
