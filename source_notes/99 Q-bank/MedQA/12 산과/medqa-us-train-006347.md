---
type: qbank
schema_version: 1
id: medqa-us-train-006347
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4784fbd2bdf31e57c7af35cac8a2c4a0104b204e05bdd18e313656d3452fba3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 수두 노출"
  - "수두-대상포진 바이러스"
  - "수두-대상포진 면역글로불린"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 39주인 21세 여성(Gravida 1, Para 0)이 산전 진찰을 위해 내원했다. 약간의 부종과 피로감이 있지만 전반적으로 건강하다. 최근 일주일 동안 방문했던 조카가 수두에 걸렸다. 본인은 수두를 앓은 적이 없고 수두-대상포진 바이러스 예방접종도 받지 않았다. 엽산 보충제와 임신 종합비타민을 복용 중이다. 체온은 37°C(98.6°F), 맥박은 분당 82회, 호흡수는 분당 15회, 혈압은 116/64 mm Hg이다. 골반 진찰에서 자궁 크기는 임신 39주에 해당한다. 수두-대상포진 바이러스 IgG 항체 역가는 음성이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 수두 백신
B. 안심시키기
C. 간시클로버 치료
D. 수두-대상포진 면역글로불린

## 해설

수두 면역이 없는 임산부가 의미 있는 노출을 겪었으므로 VariZIG(D)를 가능한 빨리, 노출 후 10일 이내 투여하는 것이 미국 CDC 권고이다. 수두 발생을 예방하거나 중증도를 낮추기 위한 것이며 태아 감염 예방을 보장하지 않는다. 임신 중 생백신은 금기이고 출산 후 접종을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VZIG 목적은 산모 감염 예방/완화이며 태아 감염 감소를 보장하지 않음.
- https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006347
