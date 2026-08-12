---
type: qbank
schema_version: 1
id: medqa-us-train-008301
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3755c1662e49fd37c46df4a9da3060f6c6222e50c85fcafcafe76b3c4850a6d4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "pulmonary embolism"
  - "heparin discontinuation"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 남자가 갑자기 시작된 흉막성 흉통과 운동 시 호흡곤란으로 응급실에 왔다. 폐암으로 외래 화학요법 중이다. 체온 98.9°F(37.2°C), 혈압 111/64 mmHg, 맥박 130회/분, 호흡수 25회/분, 산소포화도 90%이다. CT 혈관조영술에서 폐혈관 혈전이 보이고 헤파린을 시작했다. 6일 후 혈소판이 157,000에서 22,000/mm³로 감소했다. 가장 적절한 다음 처치는?

## 선택지

A. 수혈
B. 치료 변경 불필요
C. 혈소판 수혈
D. 헤파린 중단

## 해설


헤파린 투여 후 5~10일 내 혈소판이 급격히 감소하면 헤파린 유도 혈소판 감소증(HIT) 가능성이 높으며, 즉시 헤파린을 중단하고 대체 항응고제로 전환해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008301
