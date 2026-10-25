---
type: qbank
schema_version: 1
id: medqa-us-train-006173
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcd434d42f3b1db68d56e13ecdd625a3c3a690df0b4c98abd1f52e4924415ac4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "로타바이러스 감염"
  - "소아 급성 위장염"
  - "예방접종 미시행"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISk7IKsIChEaWFycmhlYSkubWQ
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

어머니가 4세 아들을 악취 나는 설사, 복부 경련 및 발열이 7일 동안 지속되어 데려왔다. 구토도 있어 매우 걱정하고 있다. 아이는 어린이집에 다니며 가족과 친구에게서 감염된 사람이 있었다. 예방접종을 하지 않았고 신체검사에서 탈수되어 보인다. 대변검사에서 혈액세포, 고름 및 기생충은 음성이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 크립토스포리디움증
B. 과민성 장증후군
C. 노로바이러스 감염
D. 로타바이러스 감염

## 해설

미접종 4세 소아의 구토·발열·약 1주간 수양성 설사와 탈수는 보기 중 로타바이러스 감염(D)에 부합한다. 로타바이러스 증상은 보통 수일에서 약 1주 이상 지속될 수 있다. 임상 양상만으로 바이러스를 확정하지 않으며 노로바이러스 등도 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 4세·7일의 사례를 영아·3–5일로 바꾼 설명을 교정.
- https://www.cdc.gov/rotavirus/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006173
