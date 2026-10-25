---
type: qbank
schema_version: 1
id: medqa-us-train-009468
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d3441835aa87b15057031bcb89bf29c6f8836f443b92dd56013ed9364c33fd58
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "iron deficiency anemia"
  - "철결핍성 빈혈"
  - "occult gastrointestinal bleeding"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: investigation
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

56세 여성이 정기 건강검진을 위해 내원했다. 최근 쇠약감과 일상 운동 중 호흡곤란을 느낀다. 과거력은 특이사항이 없고 6년 넘게 월경출혈이 없었다. 20년 넘게 하루 반 갑을 피웠으며 가끔 맥주나 와인을 마신다. 수년간 간헐적 두통에 이부프로펜을 복용한다. 혈압 115/60 mmHg, 맥박 68회/분, 호흡수 14회/분, 체온 36.8℃이며 결막 창백 외에는 정상이다. 혈색소 7.5 g/dL, MCV 75 μm³, 백혈구 5,500/mm³, 혈소판 520,000/mm³, 망상적혈구 9%, 혈청 철 30 μg/dL, 페리틴 4 μg/L, TIBC 450 μg/dL이다. 말초도말에서 다염성 대적혈구가 보인다. 평가의 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 위장관 내시경
B. 헤모글로빈 전기영동
C. JAK2 돌연변이
D. 추가 검사는 필요하지 않음

## 해설


낮은 ferritin과 혈청 철, 높은 TIBC 및 소구성 빈혈로 철결핍이 확인된다. 폐경 후 여성에서 원인 규명을 위한 위장관 내시경(A)이 필요하며, 통상 상부내시경과 대장내시경을 함께 고려한다. NSAID 사용만으로 원인을 확정하거나 위내시경만으로 평가를 끝내지 않는다. 원문의 망상적혈구 9%와 다염성 대적혈구는 단순 미치료 철결핍의 전형적 소견과 달라 추가 확인이 필요하지만 철결핍 자체를 부정하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009468 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 폐경 후 확실한 철결핍에서 GI endoscopy A 유지. 위내시경 하나만으로 한정한 해설을 상·하부 양방향 평가로 수정; 원문의 retic9%와 소구성/다염성 혼재는 임의 보정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/news/aga-recommends-bidirectional-endoscopy-for-most-patients-with-iron-deficiency-anemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009468
