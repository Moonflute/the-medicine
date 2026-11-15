---
type: qbank
schema_version: 1
id: medqa-us-train-004748
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5937f02b41d962987c364a16c99fb757987ad588f4410487e715759c445690da
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골형성부전증"
  - "반복 골절"
  - "난청"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rOo7ZiV7ISx67aA7KCE7KadIChPc3Rlb2dlbmVzaXMgSW1wZXJmZWN0YSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 여아가 작은 충격에도 여러 번 장골 골절을 경험했다. 공막이 푸른빛이고 아버지도 어린 시절 반복 골절과 성인기 청력 저하가 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 골형성부전증
B. 마판증후군
C. 구루병
D. 혈우병

## 해설

가벼운 외상에도 반복되는 골절에 청색 공막과 가족력이 동반되면 골형성부전증을 의심한다. 일부 환자는 청력 저하가 동반된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 흉추 convexity를 전만으로 반대로 번역한 것을 후만으로 교정했다. 유전성 취약골절과 청력장애 B는 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004748
