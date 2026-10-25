---
type: qbank
schema_version: 1
id: medqa-us-validation-000631
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e9de99c56640309430a2ca695652f0a82e57da044cf7aaaacaac206088a5ad2d
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골형성부전증"
  - "청색 공막"
  - "벌집뼈"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rOo7ZiV7ISx67aA7KCE7KadIChPc3Rlb2dlbmVzaXMgSW1wZXJmZWN0YSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

8세 남아가 경미한 외상 후 반복적으로 골절된 병력이 있고, 청색을 띠는 공막과 정상 피부·성장 상태가 있다. 골격조사에서 가장 가능성 높은 소견은?

## 선택지

A. 치유된 오른쪽 견갑골 골절
B. 장골 피질의 간유리 모양
C. 장골 골간단의 확장과 컵 모양 변화
D. 두개골의 봉합뼈(Wormian bones)

## 해설

청색 공막과 경미한 외상 후 반복 골절은 골형성부전증을 시사한다. 두개골 봉합 사이에 생기는 추가 골편인 봉합뼈 또는 봉합사이뼈(Wormian bones, D)가 나타날 수 있다. 이는 '벌집뼈'라는 골조직 모양을 뜻하지 않으며 이 소견 자체가 골형성부전증에만 특이한 것도 아니다. 골간단의 컵 모양 변화는 구루병, 간유리 모양은 다른 골질환의 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Wormian bones를 벌집뼈로 오역한 선지와 해설을 봉합뼈(봉합사이뼈)로 교정했다. 정답 D와 원래 해부학적 의미는 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000631
