---
type: qbank
schema_version: 1
id: medqa-us-train-001687
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1a80b1efb3afaf5ac7191a5e34d81963d92e70521cefb9705780f48022003bb
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "cyclophosphamide hemorrhagic cystitis"
  - "mesna"
  - "uroprotection"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y2nO2YiOyEsSDrsKnqtJHsl7wgKEhlbW9ycmhhZ2ljIEN5c3RpdGlzKS5tZA
question_type: prevention
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

62세 여성이 3일 전부터 호전되지 않는 복통과 혈뇨로 내원했다. 치골상부에 중등도 날카로운 작열통이 있고 빈뇨와 절박뇨가 점점 심해졌다. 복부 평활근육종 병력이 있고 간 전이로 새로운 치료를 시작했다. 15갑년 흡연력과 경미한 백혈구감소증이 있으며 소변 시험지 혈액은 3+이다. 다음 중 이 증상을 예방했을 가능성이 가장 높은 약물의 설명은 무엇인가?

## 선택지

A. 세포 내 수용체에 결합해 포도당신생을 촉진하는 유전자를 활성화하고 항염증 효과를 내는 약물
B. 항종양제와 함께 투여하여 방광 이행상피의 염증을 줄이는 티올
C. BCR-ABL 티로신키나제를 억제해 세포증식을 차단하고 세포자멸사를 유도하는 단일클론항체
D. 디히드로폴산 환원효소를 억제해 세포 합성·분열에 필요한 퓨린 생성을 막는 항엽산제

## 해설


항암치료 후 혈뇨·치골상부 통증은 ifosfamide 또는 cyclophosphamide 등의 acrolein 관련 출혈성 방광염을 고려하게 한다. Mesna는 thiol 화합물로 소변의 acrolein을 결합·해독하여 요로상피 손상을 줄이므로 B가 가장 적절하다. 이 문항에는 실제 항암제명이 없으므로 cyclophosphamide를 투여받았다고 단정하지 않는다. Mesna는 항암효과를 내는 약제가 아니며 실제 혈뇨에서는 감염·종양 등 다른 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001687 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Mesna B 기전은 유지하되 명시되지 않은 항암제를 cyclophosphamide로 확정하지 않았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/dictionaries/cancer-drug/def/mesna

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001687
