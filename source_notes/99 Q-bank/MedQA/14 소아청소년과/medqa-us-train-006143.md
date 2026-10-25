---
type: qbank
schema_version: 1
id: medqa-us-train-006143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e141c124091875e95b619c6ba44673cfce25f167bd56587c20dc0939d614ab3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "취약 X 증후군"
  - "CGG 반복 확장"
  - "발달 지연"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
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

2세 남아가 영유아 건강검진을 위해 부모와 함께 내원했다. 9개월 전 검진에서 아직 말을 시작하지 않았다. 부모는 아들이 눈맞춤을 피하고 어린이집에 친구가 없다고 한다. 만삭으로 태어나 건강했으나 6개월 전 중이염을 앓았다. 키는 95백분위수, 체중은 20백분위수, 머리둘레는 95백분위수이다. 수줍어 보이고 체온은 37°C(98.6°F), 맥박은 분당 120회, 혈압은 100/55 mmHg이다. 얼굴이 길고 귀가 크며 말을 하지 않는다. 두 블록을 쌓으라는 지시를 따르지 않고 검사 내내 어머니의 지갑을 열었다 닫으며 눈맞춤을 하지 않는다. 다음 중 진단을 가장 잘 확증할 소견은 무엇인가?

## 선택지

A. 추가 X 염색체
B. X 염색체 FMR1의 CGG 삼염기 반복 확장
C. 페닐알라닌 수산화효소 활성 결함
D. 동일 염색체 3개

## 해설

발달/언어 지연과 자폐 양상, 긴 얼굴·큰 귀는 취약X증후군을 시사한다. X염색체 FMR1의 비정상적인 CGG 반복 확장(B)이 핵심이며 전형적 완전변이는 200회 초과 반복과 유전자 침묵에 관련된다. 단순히 CGG 서열이 있다는 사실만으로 확진하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정상인에게도 존재하는 CGG 반복의 단순 존재가 아니라 FMR1의 병적 확장을 뜻함을 명확히 했다.
- https://medlineplus.gov/genetics/condition/fragile-x-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006143
