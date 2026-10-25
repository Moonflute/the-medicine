---
type: qbank
schema_version: 1
id: medqa-us-train-000955
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f562901286afce17d6cde4a5d3e231c9784f73204fe8eb02a870d6cf92124a31
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "transposition of the great arteries"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA7ZiI6rSAIOyghOychCAoVHJhbnNwb3NpdGlvbiBvZiB0aGUgR3JlYXQgQXJ0ZXJpZXMpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 초산부 여성이 4700g(10lb 6oz)의 남아를 출산한 지 하루 후, 신생아의 입술과 손톱에 푸른 변색이 나타났다. 실내 공기에서의 산소 포화도는 81%이다. 진찰 결과 중심성 청색증이 확인되었다. 왼쪽 상부 흉골 경계에서 연속적인 기계음(machine-like murmur)이 들린다. 단일 S2 심음이 들린다. 보충 산소 투여로도 청색증은 호전되지 않는다. 심초음파 검사 결과 폐동맥은 후방 좌심실에서 기시하고 대동맥은 우심실에서 기시하며, 우심실과 좌심실 사이에 활발한 혈류가 관찰된다. 산모에 대한 추가 평가에서 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 공복 혈당 상승
B. 매독 선별 검사(RPR) 양성
C. 산전 알코올 사용
D. 산전 페니토인(phenytoin) 복용

## 해설

대동맥이 우심실, 폐동맥이 좌심실에서 나오는 것은 대혈관전위(TGA)이며 체순환·폐순환이 병렬로 이루어진다. 모체의 임신 전 당뇨병은 이런 선천성 심장기형과 연관되고 거대아 소견도 있어 공복 혈당 상승(A)이 가장 적합하다. 정상 대혈관의 교차 배치와 혼동하지 않으며, 태아의 심한 대사성 산증 자체가 전위 발생 원인이라고 단정한 기존 설명은 틀리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: TGA를대혈관교차와태아산증원인으로설명한기전오류교정. 모체DM연관A.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000955
