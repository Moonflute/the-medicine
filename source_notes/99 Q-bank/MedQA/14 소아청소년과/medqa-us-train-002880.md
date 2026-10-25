---
type: qbank
schema_version: 1
id: medqa-us-train-002880
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a91caa1fc91c77c6dffae3d81dda2e2624bc532a11d6ce6cf67e7aa853f7e4ef
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "transposition of the great arteries"
  - "ventricular septal defect"
  - "neonatal cyanosis"
  - "parallel circulation"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA7ZiI6rSAIOyghOychCAoVHJhbnNwb3NpdGlvbiBvZiB0aGUgR3JlYXQgQXJ0ZXJpZXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
difficulty: complex
answer: D
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

28세 초임부가 4,700 g의 남아를 분만하도록 도움을 받은 다음 날, 신생아의 입술과 손발톱이 푸르게 변했다. 체온은 37.3°C, 맥박 166회/분, 호흡수 63회/분, 혈압 68/44 mmHg이며 실내 공기 산소포화도는 81%이다. 중심성 청색증이 있고 좌측 하부 흉골연에서 2/6 범수축기 잡음이 들리며 제2심음은 단일하다. 보충 산소를 투여해도 청색증은 호전되지 않는다. 흉부 X선에서 심장 음영이 커지고 종격동이 좁아져 있다. 다음 중 이 신생아의 진단과 연관된 심장 결손은?

## 선택지

A. 누두부 중격의 정렬
B. 대동맥과 폐동맥의 분리
C. 심내막 쿠션의 융합
D. 심실중격결손

## 해설

심한 신생아 청색증, 단일 제2심음과 좁은 종격동은 대혈관전위(d-TGA)를 시사한다. 대동맥과 폐동맥이 정상처럼 교차하지 않고 주로 평행하게 주행해 두 순환이 분리된다. VSD(D)는 동반될 수 있고 혈액 혼합 통로가 될 수 있다. 이는 보이지 않는 혈관 연결을 X선만으로 직접 관찰했다거나 VSD가 반드시 있다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 대혈관전위에서 대동맥/폐동맥이 교차한다는 해설을 평행 주행·분리된 순환과 VSD의 혼합 역할로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002880
