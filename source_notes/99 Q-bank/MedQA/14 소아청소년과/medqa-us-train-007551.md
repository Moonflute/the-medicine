---
type: qbank
schema_version: 1
id: medqa-us-train-007551
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ba7cdbd60225b0fc9b51ec9c8e820c9af89e8a7ccff8fb543d25043945890e5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 발열성 요로감염"
  - "급성 신우신염"
  - "신장 초음파"
  - "요로 기형 평가"
question_type: investigation
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13개월 여아가 보채서 계부와 함께 소아과에 내원했다. 밤새 울었고 먹지 않으며 달래지지 않았고 아침에 열감이 있었다고 한다. 마지막 기저귀에서 소변이 진하고 냄새가 강했다. 체온은 101°F(38.3°C), 혈압 100/72 mmHg, 맥박 128회/분, 호흡수 31회/분, 실내 공기 산소포화도 98%이다. 도뇨로 소변을 채취했더니 단백 음성, 포도당 음성, 백혈구 25/고배율 시야, 세균 다수, 백혈구 에스터라제 양성, 아질산염 양성이다. 항생제 치료와 함께 다음 중 무엇을 시행해야 하는가?

## 선택지

A. 예방적 항생제
B. 신장 초음파
C. 3주 후 소변 배양 반복
D. 배뇨방광요도조영술

## 해설

발열, 보챔과 도뇨 소변의 농뇨·세균뇨·아질산염은 발열성 요로감염을 지지하며 배양 확인과 적절한 항생제 치료가 필요하다. 제시된 선택지에서는 북미/CPS 접근에 따라 24개월 미만 첫 요로감염에서 신장·방광 초음파(B)로 구조 이상을 평가한다. 초음파 자체가 재발이나 장기손상을 예방하는 치료는 아니며, 정상 초음파가 방광요관역류를 배제하지도 않는다. 예방적 항생제, 일률적 VCUG나 호전 후 반복 배양은 모든 첫 감염에서 자동 시행하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초음파를 장기손상 예방에 필수라고 단정한 설명을 구조평가 목적과 북미/CPS 적용범위로 수정. B 유지.
- https://cps.ca/en/documents/position/management-urinary-tract-infections

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007551
