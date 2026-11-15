---
type: qbank
schema_version: 1
id: medqa-us-train-002789
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:53ed22bbc8f9753ef8a101482c8d4757a88d30e5707d81475b6b0880983980d5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "encephalitis"
  - "meningitis differential"
  - "altered mental status"
  - "empiric acyclovir"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsl7wgKE1lbmluZ29lbmNlcGhhbGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

두 환자 모두 발열, 두통과 뇌척수액 림프구 증가가 있다. 한 환자는 지남력이 명료하지만 다른 환자는 전신 상태가 안정된 뒤에도 이틀 넘게 혼돈이 지속된다. 두 번째 환자의 뇌실질 침범을 가장 강하게 뒷받침하는 추가 소견은?

## 선택지

A. 경부강직
B. 밝은 빛을 볼 때 두통 악화
C. 새로 발생한 국소 발작
D. 오심과 구토

## 해설


지속하는 의식·행동 변화에 국소 발작이 더해지면 단순 수막 자극보다 뇌염을 강하게 의심한다. 경부강직이나 광선공포는 수막염에서도 흔하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002789 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수막 자극 증상보다 뇌실질 기능장애를 시사하는 혼탁한 의식 A를 원문 대조 유지. 수막염에도 의식장애가 가능하다는 임상 감별의 한계 안에서 해석.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002789
- https://doi.org/10.1111/ene.70647
