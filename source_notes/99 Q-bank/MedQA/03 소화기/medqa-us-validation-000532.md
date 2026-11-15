---
type: qbank
schema_version: 1
id: medqa-us-validation-000532
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0a249d60b0b690cd376717dca5e2427a0f746469924ff47e6c0ca632b855acf2
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담관염"
  - "담석"
  - "발열·황달·복통"
  - "Acute cholangitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzqtIDsl7wgKENob2xhbmdpdGlzKS5tZA
question_type: diagnosis
difficulty: simple
answer: C
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

42세 여성이 발열, 오한, 오른쪽 윗배 통증으로 내원했다. 공막에 황달이 있고 직접 빌리루빈과 알칼리인산분해효소가 상승했다. 초음파에서 총담관이 확장됐고 담낭벽은 두껍지 않다. 가장 가능성 높은 진단은?

## 선택지

A. 단순 담도산통
B. 급성 담낭염
C. 급성 담관염
D. 급성 바이러스성 간염

## 해설


발열·오한에 담즙정체와 총담관 확장이 동반되면 폐쇄된 담도의 감염을 의심한다. 급성 담낭염은 담낭벽 비후 등 담낭 자체의 염증이 중심이다. 담도산통만으로는 전신 감염 소견을 설명하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000532 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Charcot 삼징을 발열·황달·백혈구증가가 아닌 복통·발열·황달로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000532
- https://www.jshbps.jp/modules/en/index.php?content_id=47
