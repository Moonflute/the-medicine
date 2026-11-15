---
type: qbank
schema_version: 1
id: medqa-us-train-005855
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce5d476c2a3e61007db4b3bbd5fa7566922b2ed267b6bdeab8ef3a4fff2cac55
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "파보바이러스 B19 감염"
  - "태아 수종 위험"
  - "산모 혈청 IgG/IgM"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIO2ZjeuwmCAoRXJ5dGhlbWEgSW5mZWN0aW9zdW0pLm1k
difficulty: complex
answer: B
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

임신 9주인 여성이 진료를 받으러 왔다. 동거 중인 아들이 미열 후 양쪽 뺨이 붉어지고, 뒤이어 몸통과 팔다리에 발진이 퍼져 파보바이러스 B19 감염이 의심된다. 산모에게 가장 먼저 필요한 평가는?

## 선택지

A. 산모 혈청 풍진 IgM
B. 산모 혈청 파보바이러스 B19 IgG·IgM
C. 즉시 양수에서 파보바이러스 B19 PCR
D. 즉시 연속 태아 초음파부터 시작

## 해설

파보바이러스 B19 감염이 의심되는 아이와 접촉한 임신부에서는 먼저 산모의 특이 IgG·IgM으로 면역 여부와 최근 감염 가능성을 평가한다. 초기 검사가 너무 이른 경우에는 재검이 필요할 수 있다. 최근 감염이 확인되면 전문 진료로 연결해 태아 빈혈과 수종을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산모·신생아 모두 발진이라는 허위 서술 수정; 그림 없이도 접촉력·뺨 시작 발진으로 판단 가능.
- https://www.cdc.gov/parvovirus-b19/about/parvovirus-b19-in-pregnancy.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005855
