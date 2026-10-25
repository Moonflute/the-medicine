---
type: qbank
schema_version: 1
id: medqa-us-train-010106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b2a44b6f381a179cd5c5ca2c05250164cb10e94bc59a06c394e2eda3a081d7aa
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유당불내증"
  - "수소 호기 검사"
  - "락타아제 결핍"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jyg64u5IOu2iOuCtOymnSAoTGFjdG9zZSBJbnRvbGVyYW5jZSkubWQ
question_type: investigation
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

6세 여아가 어머니와 처음 소아과에 내원했다. 가족이 중국에서 막 이주했으며 딸이 미국 식단에 적응하기 어려워하는 것 같다고 한다. 특히 우유나 치즈를 먹으면 복부 불편감과 가스 증가가 생긴다. 소아과 의사가 진단 검사를 의뢰했다. 다음 중 이 환자에서 가장 가능성 높은 결과는?

## 선택지

A. 음성 수소 호기 검사
B. 양성 수소 호기 검사
C. 양성 테크네튬-99 스캔
D. 비정상 복부 초음파

## 해설


우유 섭취 후 복부 불편감과 가스는 유당불내증을 의심하게 한다. 유당불내증 환자는 장내 세균이 유당을 발효하면서 수소를 생성하므로 수소 호기 검사가 양성으로 나타난다. 따라서 양성 수소 호기 검사가 가장 가능성 높은 결과이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010106 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유제품 후 증상과 lactase 결핍의 대장 발효에 따른 유당 수소호기검사 B 양성 예상은 원문·선지·해설과 일치.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010106
