---
type: qbank
schema_version: 1
id: medqa-us-train-000265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:414e2e6daa072da4155769183305254d36e5a44304eb7782f72283416df93441
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "osteogenesis imperfecta"
  - "Osteogenesis imperfecta"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rOo7ZiV7ISx67aA7KCE7KadIChPc3Rlb2dlbmVzaXMgSW1wZXJmZWN0YSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 여아가 정기 검진을 위해 일차 진료 의사를 방문했다. 의사는 의대생에게 신체 검진을 수행하도록 했다. 의대생은 청력 장애와 그림 A 및 B에 나타난 소견을 확인했다. 방사선 사진상 치유된 상완골의 다발성 과거 골절 징후가 보인다. 부모를 문진한 결과, 환아는 음식을 매우 가리며 주로 시리얼과 파스타로 구성된 식단을 섭취한다는 사실을 알게 되었다. 환아 질환의 가장 가능성 높은 병인은 무엇인가?

## 선택지

A. 골밀도 감소
B. 연골의 광물화 결함
C. 제1형 콜라겐 결핍
D. 아스코르브산(ascorbic acid)의 식이 결핍

## 해설

어린 나이의 반복 골절과 청력장애는 골형성부전증(osteogenesis imperfecta)을 지지하며 제1형 콜라겐의 양적 또는 질적 이상(C)이 원인이다. 제한된 식단은 비타민 결핍 등 감별을 위한 정보이지 유전성 콜라겐 결함을 유발하는 기전이 아니다. 제공되지 않은 사진에서 청색공막·치아 소견을 보았다고 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 다발골절·청력장애의 OI C는 본문으로 지지되어 사진만으로 보류하지 않는다. 편식이 콜라겐 유전결함의 원인인 것처럼 적은 해설을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000265
