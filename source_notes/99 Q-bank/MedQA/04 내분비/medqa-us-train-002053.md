---
type: qbank
schema_version: 1
id: medqa-us-train-002053
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e36fe0246e777b9bdc98002f7e182c52d315d5a0f7565a7e920a5993fbd7996c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "constitutional growth delay"
  - "short stature"
  - "delayed bone age"
  - "growth hormone deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7LK07KeI7ISxIOyEseyepSDrsI8g7IKs7LaY6riwIOyngOyXsCAoQ29uc3RpdHV0aW9uYWwgRGVsYXkgb2YgR3Jvd3RoIGFuZCBBZG9sZXNjZW5jZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCA7Iug7J6lIChTaG9ydCBTdGF0dXJlKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rCA7KGx7ISxIOuLqOyLoOymnSAoRmFtaWxpYWwgU2hvcnQgU3RhdHVyZSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
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

15세 남자 청소년이 또래보다 키가 작다는 이유로 부모와 함께 소아과를 방문했다. 과거력에는 반복적이거나 만성적인 특정 질환이 없다. 체중 증가나 감소, 변비, 피부 건조, 두통도 없다. 부모의 키는 정상이다. 신체검사에서 영양 상태와 발달 상태가 양호하고 활력징후는 정상이다. 전신 신체검사는 완전히 정상이다. 성적 발달은 Tanner 2단계이다. 성장곡선을 보면 출생 시 키와 체중은 정상 범위였으나 생후 6개월 이후 키와 체중 곡선이 평균에서 점점 벗어나 5백분위수에 가까워졌다. 왼손 X선에서 골연령 지연이 보인다. 다음 중 이 남아의 저신장을 가장 잘 설명하는 원인은?

## 선택지

A. 체질성 성장 지연
B. 가족성 저신장
C. 선천성 부신과형성
D. 성장호르몬 결핍

## 해설

전반적으로 건강한 사춘기 지연 청소년에서 골연령 지연과 늦은 성성숙은 체질성 성장·사춘기 지연 A에 부합한다. 가족성 저신장은 보통 골연령이 역연령과 비슷하다. 성장속도와 성장곡선을 추적하여 다른 원인을 배제해야 하며, 5세에 키의 정점에 도달해야 한다는 기존 문장은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 사춘기·골연령 지연은 체질성 성장지연 A. 해설의 5세 키 정점 설명은 근거 없음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002053
