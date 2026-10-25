---
type: qbank
schema_version: 1
id: medqa-us-train-002494
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:526effcb15aabd2a27aa8c3450f50ca93458f6b073c81b87292c03021a6fb8ab
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Holt-Oram syndrome"
  - "atrial septal defect"
  - "radial ray anomaly"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
difficulty: standard
answer: B
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

5세 여아가 예방접종과 신체검사를 위해 내원했다. 전반적으로 건강하지만 오른손 엄지가 없고 왼손 엄지가 짧고 변형되어 있다. 심장 청진에서 넓고 고정된 S2 분열과 왼쪽 흉골 경계의 중간 음조 수축기 박출 잡음이 들리며 심초음파에서 청색증이 없는 좌우 단락 선천성 심장결손이 확인되었다. 다음 중 가장 가능성 높은 유전증후군은?

## 선택지

A. 알라질 증후군
B. 홀트-오람 증후군
C. 마르팡 증후군
D. 윌리엄스-보이렌 증후군

## 해설

엄지 결손/저형성 같은 요골측 상지 기형과 ASD를 시사하는 고정된 제2심음 분열은 심장-손 증후군인 홀트-오람증후군(B)에 부합한다. TBX5 병적 변이와 관련된다. 요골측(radial) 기형은 방사선(radiation) 기형이라는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: radial 기형을 방사선 기형으로 잘못 쓴 해설을 요골측 상지 기형으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002494
