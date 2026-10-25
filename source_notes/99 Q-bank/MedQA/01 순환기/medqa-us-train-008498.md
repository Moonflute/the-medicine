---
type: qbank
schema_version: 1
id: medqa-us-train-008498
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f3bc27b752b2dda50fb5438b6d554bcc6078758dec84bc6eed3812c8d859593e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "lifestyle modification"
  - "weight loss"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 3개월 전 진료에서 혈압이 높게 측정된 뒤 추적 관찰을 위해 내원했다. 지역 고등학교 교사로 일한다. 주로 구내식당 음식과 포장 음식을 먹고 규칙적인 신체활동은 하지 않는다. 흡연이나 기분전환용 약물 사용은 없다. 매일 와인 2~3잔을 마신다. 고콜레스테롤혈증으로 아토르바스타틴을 복용한다. 키 165cm(5피트 5인치), 체중 82kg(181파운드), BMI 30.1kg/m²이다. 맥박 67회/분, 호흡수 18회/분, 혈압은 오른팔 152/87mmHg, 왼팔 155/92mmHg이다. 약물치료를 고려하기 전에 생활습관 개선으로 혈압을 낮추고 싶어 한다. 다음 중 이 환자의 수축기 혈압을 가장 크게 낮출 가능성이 높은 생활습관 변화는 무엇인가?

## 선택지

A. 체중 15kg(33파운드) 감량
B. 음주를 하루 최대 한 잔으로 줄이기
C. DASH 식단 채택
D. 주 5일, 하루 30분 걷기

## 해설

BMI 30.1 kg/m²인 환자가 체중을 15 kg 줄이면 상당한 혈압 감소를 기대할 수 있어 선택지 중 A가 적합하다. 감소폭은 감량 정도와 개인에 따라 다르며, 음주 감량, DASH 식이와 운동도 함께 권장된다. 이미 반복 측정에서 2기 고혈압 범위이므로 실제 진료에서는 생활습관만으로 약물 평가를 무기한 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 실제 비만과 15kg 감량이 제시된 문항의 A는 유지하되 모든 사람의 생활요법 효과 순위를 고정한 표현을 한정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008498
