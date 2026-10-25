---
type: qbank
schema_version: 1
id: medqa-us-train-007143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e81301bb848e89424c3ad8de3895dee8fb9ba1905dcfa01fe2dabbdec6a34684
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "헤르팡지나"
  - "콕사키바이러스 A"
  - "수족구병"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY7KGx6rWs67ORIChIYW5kLUZvb3QtTW91dGggRGlzZWFzZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 2일 동안 지속된 발열, 오한, 권태감, 인후통으로 내원했다. 그 외에는 건강했고 발달도 연령에 맞게 정상이다. 복용 약물은 없고 예방접종은 최신 상태이다. 체온은 38.4°C(101.4°F), 맥박은 84회/분, 호흡수는 16회/분, 혈압은 121/71 mmHg이며 실내 공기 산소포화도는 100%이다. 진찰에서 인두 뒤쪽에 1~2mm 크기의 산재한 구진수포성 병변과 양측 편도의 전반적인 홍반이 보인다. 이 환자의 소견을 일으킨 원인과 가장 관련 있는 질환은 무엇인가?

## 선택지

A. 류마티스열
B. 버킷 림프종
C. 감염성 심내막염
D. 수족구병

## 해설

후구인두의 작은 구진수포와 인후통은 herpangina에 부합하며 흔히 Coxsackie A 등 enterovirus가 원인이다. 같은 원인군에 연관되는 질환은 수족구병(D)이다. 손발 병변이 제시되지 않은 이 환자 자체를 수족구병으로 확정하는 질문은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 현 사례의 herpangina와 동일 원인군에 연관되는 수족구병을 구별.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007143
