---
type: qbank
schema_version: 1
id: medqa-us-train-009363
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cdf9b4cf8dd674ad3e24de4bab6196a7d68aff5ee7d36dfd2424868ebb8ef37d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "vomiting-induced metabolic alkalosis"
  - "구토 유발 대사성 알칼리증"
  - "hypokalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

54세 남자가 3일 동안 먹거나 마실 때마다 비혈성·비담즙성 구토를 하여 내원했다. 점점 쇠약해지고 구토는 호전되지 않는다. 설사, 발열, 오한은 없으며 여러 음식을 시식한 최근 사건과 관련이 있을 수 있다고 생각한다. 체온 97.5°F(36.4°C), 혈압 133/82 mmHg, 맥박 105회/분, 호흡수 15회/분, 산소포화도 98%이다. 쇠약해 보이고 점막이 건조하지만 복부 압통은 없다. 다음 중 가장 가능성 높은 검사 변화는 무엇인가?

## 선택지

A. 음이온차 대사산증과 저칼륨혈증
B. 대사성 알칼리증과 저칼륨혈증
C. 정상 음이온차 대사산증과 저칼륨혈증
D. 호흡성 산증과 고칼륨혈증

## 해설


정답 B. 지속 구토로 위산과 염소가 소실되어 대사성 알칼리증이 생긴다. 체액 감소는 renin–angiotensin–aldosterone계를 활성화하고 신장의 칼륨·수소 이온 배설을 증가시켜 저칼륨혈증과 알칼리증을 유지한다. 따라서 예상되는 조합은 대사성 알칼리증과 저칼륨혈증이다. 단순히 칼륨 재흡수가 감소해서만 발생한다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009363 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 구토의 위산·염소 소실과 체액 감소에 따른 신장 K/H 배설로 저칼륨 대사성 알칼리증을 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009363
