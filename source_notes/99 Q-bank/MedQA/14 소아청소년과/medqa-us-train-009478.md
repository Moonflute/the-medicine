---
type: qbank
schema_version: 1
id: medqa-us-train-009478
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f71fa23b5a391874584436f04f756bbb47039fa77ad5c54c5feecec1e65f00cc
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "epiglottitis"
  - "후두개염"
  - "Streptococcus pneumoniae"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIO2bhOuRkOqwnOyXvCAoQWN1dGUgRXBpZ2xvdHRpdGlzKS5tZA
difficulty: complex
answer: C
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

5세 남자가 인후통과 호흡곤란으로 응급실에 왔다. 어젯밤 시작되어 빠르게 악화되었으며 예방접종은 모두 받았다. 체온 103°F(39.4°C), 혈압 100/64 mmHg, 맥박 155회/분, 호흡수 29회/분, 산소포화도 95%이다. 아파 보이고 침을 흘리며 숨 쉬려고 몸을 앞으로 기울인다. 질문에 대답하지 않고 입을 벌려 구인두를 검사하라는 요청에도 따르지 않는다. 가장 가능성 높은 감염 원인은 무엇인가?

## 선택지

A. 칸디다 알비칸스
B. 헤모필루스 인플루엔자
C. 폐렴구균
D. 비리단스 연쇄구균

## 해설

고열·침흘림·삼각대 자세는 후두개염을 의심한다. Hib 접종 완료 소아에서도 다른 균에 의한 질환이 가능하며 보기 중 폐렴구균(C)이 타당하다. 다만 Hib와 다른 연쇄상구균도 원인이 될 수 있어 백신 시대의 모든 환자에서 폐렴구균이 최빈이라고 단정하지 않는다. 인두를 억지로 진찰하지 않고 숙련팀의 기도 평가가 우선이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 예방접종 시대의 후두개염 원인을 폐렴구균만으로 일반화한 설명 보정.
- https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009478
