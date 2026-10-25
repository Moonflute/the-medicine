---
type: qbank
schema_version: 1
id: medqa-us-test-000794
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a43a4e9e6ffa08c77ff2e9f74e1ac94f9781168c9657e8fb71a176dd3b41053c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "소아 결신발작"
  - "결신간질"
  - "에토숙시미드"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM67Cc7J6RIChBYnNlbmNlIFNlaXp1cmUpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

5세 여아가 학교에서 ‘멍하니 있는’ 일이 잦아 소아과에 왔다. 부모는 두부 외상이나 감염 병력이 없다고 했다. 혈압 106/74 mmHg, 심박수 69회/분, 호흡 14회/분이었고 발달은 정상이며 검사실 결과도 정상이었다. 뇌파에서 3 Hz 극파-서파 복합이 보였고(그림 참조) 약물치료를 시작하기로 했다. 일차 약물의 잠재적 부작용으로 부모에게 알려야 할 것은?

## 선택지

A. 안구진탕
B. 위장관 불편
C. 안면 발진과 혈뇨
D. 체중 증가와 모발 색 변화

## 해설


소아 결신발작 1차 치료제는 에토숙시미드이며, 가장 흔한 부작용은 위장관 불편감(구역, 구토, 복통)이다. 따라서 부모에게 알려야 할 주요 부작용은 위장관 불편이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정상발달의 멍함/3Hz 극서파는 결신발작이고 ethosuximide의 흔한 위장관 부작용 B 적절. EEG 소견이 본문에 명시되어 별도 이미지 없어도 판단 가능.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/080258Orig1s031.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000794
