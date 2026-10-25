---
type: qbank
schema_version: 1
id: medqa-us-train-006576
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d436226ebab78a2d2e01774f179457afe328bebb653c4986b639d786f2262e67
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "난소암"
  - "복수"
  - "폐경 후 복부 팽만"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k
difficulty: complex
answer: C
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

54세 여성이 연례 검진을 위해 내원했다. 지난 1년 동안 체중이 증가한 것 외에는 다른 증상이 없다. 마지막 월경은 8개월 전이었다. 쉽게 배가 불러 덜 먹고 운동도 늘렸지만 뱃살이 빠지지 않는다고 한다. 남편과 성관계를 하지만 ‘나이가 많다’며 피임은 하지 않는다. 질 건조, 안면홍조, 발열, 복통 또는 비정상 질출혈은 없고 지난 1년 동안 간헐적인 변비가 있었다. 신체진찰은 복수파동을 동반한 경미한 복부 팽만 외에는 정상이다. 혈청 Na+ 138, Cl− 97, K+ 3.9 mEq/L, 혈액요소질소 21 mg/dL, 크레아티닌 1.4 mg/dL, 포도당 120 mg/dL, β-hCG 음성이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 자궁내막증
B. 폐경
C. 난소암
D. 임신

## 해설

조기 포만감, 복부 팽만 및 복수는 난소 악성종양을 시사하며 선택지 중 난소암(C)이 가장 적절하다. 마지막 월경이 8개월 전이라는 사실만으로 자연 폐경이 확정된 것은 아니며 일반적인 정의는 다른 원인 없이 12개월 연속 무월경이다. 폐경 여부를 과장하지 않아도 본문의 복부 소견으로 정답을 판단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 마지막 월경 8개월인 여성을 확정 폐경으로 표현한 오류를 교정하고 난소암을 시사하는 복수·조기 포만감 단서를 보존했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006576
