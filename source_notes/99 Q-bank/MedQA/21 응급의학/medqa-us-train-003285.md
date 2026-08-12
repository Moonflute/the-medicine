---
type: qbank
schema_version: 1
id: medqa-us-train-003285
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b334be3f2c90ab9d66158dce457ae0beef53b343739c24ea933f133649a9d380
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "massive hemothorax"
  - "ongoing intrathoracic bleeding"
  - "thoracotomy indication"
  - "penetrating chest trauma"
  - "Hemothorax"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남성이 흉부에 여러 발의 총상을 입고 응급실로 이송되었다. 현장에서 반응이 없어 삽관되었고 혈압 87/52 mmHg, 맥박 120회/분이다. 오른쪽 폐에서 호흡음이 감소되고 타진 시 둔탁하며 흉부 X선에서 오른쪽 흉강에 큰 액체가 보인다. 적극적인 수액 소생 후 흉관을 삽입했는데 처음 700 cc의 선혈과 이후 5시간 동안 시간당 300 cc가 나왔다. 추적 X선에서 상당한 잔여 우측 혈흉이 보인다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 흉관을 잠근다
B. 흉관을 수봉에 연결한다
C. 흉관을 제거한다
D. 개흉술

## 해설


흉관 삽입 후 지속적인 혈액 배출(시간당 > 200 mL)은 대량 혈흉으로, 보존적 관리로는 출혈을 멈출 수 없다. 즉시 개흉술을 시행해 출혈 원인을 직접 확인하고 지혈해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003285
