---
type: qbank
schema_version: 1
id: medqa-us-train-007082
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19e5f9686ad00797323d958f23331136199d50b47b23d7b2d6d226fd82a224c4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "이식증"
  - "철결핍성 빈혈"
  - "위장관 출혈"
  - "대변 잠혈"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsnqXqtIAg7Lac7ZiILm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

63세 여자가 지난 2개월 동안 악화된 피로와 의도하지 않은 6.8kg(15lb)의 체중 감소를 평가하기 위해 내원했다. 수개월 동안 흙과 점토를 이상하게 먹고 싶은 욕구가 있었다고 한다. 무릎 골관절염이 있어 아세트아미노펜을 복용한다. 맥박은 116회/분, 혈압은 125/84 mmHg이다. 신체검사에서 치아가 전반적으로 마모되어 있고 설하 주름에 흙이 보인다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 대변 잠혈검사 양성
B. 혈청 갑상선자극호르몬 농도 상승
C. 혈청 납 농도 상승
D. CD4+ T 림프구 수 감소

## 해설


흙/점토 같은 비식품을 먹고 싶은 이식증(pica)은 철결핍의 단서가 될 수 있다. 고령·피로·체중감소가 함께 있어 위장관 출혈/종양을 평가하는 맥락에서 대변 잠혈 양성 A가 가장 부합한다. 흙은 식물성 식품이 아니며 이식은 장기 이식을 뜻하지 않는다. 흙 섭취에 따른 납 노출도 가능하므로 C가 절대로 무관한 것은 아니지만 본문 출제 초점은 철결핍의 원인이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007082 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Pica를 위장관 이식증/식물성 물질 섭취라고 한 오역과 iron deficiency 연결 누락 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007082
