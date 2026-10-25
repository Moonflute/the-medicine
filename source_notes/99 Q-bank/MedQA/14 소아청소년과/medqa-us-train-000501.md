---
type: qbank
schema_version: 1
id: medqa-us-train-000501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ba915bc2766171edaa7a219b80c75b6a2df1fb5b3f259c99afab29e0f9ba4d0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "pyloric stenosis"
  - "Necrotizing enterocolitis"
  - "Duodenal atresia"
  - "Hirschsprung's disease"
  - "Meconium ileus"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE64yAIOuCoOusuCDtmJHssKnspp0gKEh5cGVydHJvcGhpYyBQeWxvcmljIFN0ZW5vc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOq0tOyCrOyEsSDsnqXsl7wgKE5lb25hdGFsIE5lY3JvdGl6aW5nIEVudGVyb2NvbGl0aXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISg7LKcIOqxsOuMgCDqsrDsnqXspp0gKENvbmdlbml0YWwgQWdhbmdsaW9uaWMgTWVnYWNvbG9uKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
difficulty: standard
answer: B
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

분만 6시간 후, 3050g(6lb 12oz)의 남아가 수유 불내성과 수차례의 담즙성 구토를 보였습니다. 이 환아는 건강한 35세 산모에게서 정상 질식 분만을 통해 만삭으로 태어났습니다. 임신 과정은 합병증이 없었으나, 산모는 산전 검진을 여러 번 받지 않았습니다. 환아의 형은 영아기에 유문협착증(pyloric stenosis)으로 수술을 받은 적이 있습니다. 활력 징후는 정상 범위 내에 있습니다. 신체 검진상 눈구석주름(epicanthus), 위로 치켜 올라간 눈꺼풀, 낮게 위치한 귀, 단일 가로 손금(single transverse palmar crease)이 관찰됩니다. 폐 청진음은 정상입니다. 좌측 중하부 흉골 경계에서 2/6 등급의 전수축기 잡음(holosystolic murmur)이 들립니다. 복부 검진상 상복부 팽만과 오목한 형태의 하복부가 관찰됩니다. 장기 비대는 없습니다. 복부 X-선 사진이 제시되었습니다. 가장 가능성이 높은 진단은 무엇입니까?

## 선택지

A. 괴사성 장염(Necrotizing enterocolitis)
B. 십이지장 폐쇄(Duodenal atresia)
C. 히르슈슈프룽병(Hirschsprung's disease)
D. 태변 장폐색(Meconium ileus)

## 해설

다운증후군을 시사하는 외형과 출생 직후 담즙성 구토, 상복부 팽만·오목한 하복부는 십이지장 폐쇄(B)에 부합한다. 전형적인 이중기포(double-bubble) 징후는 위와 근위 십이지장에 찬 공기이며 양쪽 장벽을 뜻하지 않는다. 현재 참조 X선은 포함되어 있지 않아 실제 영상 소견은 검수하지 않았고 서술된 증상·외형과 진단 연관성에 한해 정답을 유지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 양장벽더블볼이라는해부/영상기전오류교정. 영상은없지만Down/출생직후담즙구토/근위폐색으로B판단가능범위명시.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000501
