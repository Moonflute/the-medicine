---
type: qbank
schema_version: 1
id: medqa-us-train-008707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6c89e613f4966e24898b28d45fc12c44a702da08025f72093700d5bf57e7c85
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "vitamin A deficiency"
  - "Bitot spots"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEEg6rKw7ZWN7KadIChWaXRhbWluIEEgRGVmaWNpZW5jeSkubWQ
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

낭성섬유증이 있는 3세 여아가 추적검사를 위해 내원했다. 어머니는 지난 4개월 동안 특히 저녁에 걸을 때 여러 번 넘어졌다고 한다. 현재 췌장효소 보충제, 알부테롤 흡입제, 아세틸시스테인을 복용한다. 키는 10백분위수, 체중은 5백분위수이다. 피부가 건조하고 몸통과 사지에 원뿔 모양의 융기된 구진이 보인다. 왼쪽 결막에 불규칙한 모양의 거품성 회색 반점이 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 아연 투여
B. 비타민 A 투여
C. 리보플라빈 투여
D. 루테인 투여

## 해설

췌장기능부전을 동반한 낭성섬유증에서는 지용성 비타민 흡수가 저하될 수 있다. 저녁에 자주 넘어지는 야맹증 의심 증상, 모낭성 각화와 결막의 거품성 회색 비토 반점은 비타민 A 결핍을 시사하므로 B가 적합하다. 비토 반점은 결막 병변이며 각막 반점으로 부르는 것은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비토 반점의 위치를 각막이 아닌 결막으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008707
