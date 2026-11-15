---
type: qbank
schema_version: 1
id: medqa-us-train-002536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec5712f07f20eecd83c476460a92762ee55b5b81f8f1a3f8e08648934a27aa34
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Sjögren syndrome"
  - "anti-Ro/SSA antibodies"
  - "congenital heart block"
question_type: diagnosis
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
difficulty: standard
answer: D
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

항Ro/SSA 항체가 확인된 쇼그렌증후군 산모의 태아가 임신 22주에 심박수 68회/분을 지속한다. 태아 심초음파에서 심방박동은 정상이지만 심실과 서로 독립적으로 뛴다. 의심되는 진단은?

## 선택지

A. 심실사이막결손 단독
B. 동성빈맥
C. 심방조동
D. 항체 관련 완전 방실차단

## 해설

모체 항Ro/SSA 항체는 태반을 통과해 태아 전도계에 손상을 줄 수 있다. 심방박동과 느린 심실박동이 독립적이면 완전 방실차단을 시사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항Ro/SSA 관련 태아 심장차단 위험을 1도로 한정한 잘못된 해설을 선천성 방실차단, 특히 완전 차단 위험으로 교정했다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24130

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002536
- https://onlinelibrary.wiley.com/doi/10.1002/art.41191
