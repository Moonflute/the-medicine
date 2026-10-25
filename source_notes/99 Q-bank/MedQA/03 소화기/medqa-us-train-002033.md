---
type: qbank
schema_version: 1
id: medqa-us-train-002033
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:93e24625e1105b2b4d99f1f69c4654fa80269ffcb77e14e03cf6262e57208699
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "anemia of chronic disease"
  - "Crohn disease"
  - "inflammation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
  - MTMg67aA7J246rO8L-uwlOultO2GqOumsOyDmOyXvCAoQmFydGhvbGluIEdsYW5kIEluZmxhbW1hdGlvbikubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 3개월간 악화되는 피로로 내원했다. 크론병으로 3년 전 진단받아 5-aminosalicylic acid와 국소 budesonide를 사용 중이며 하루 약 7회의 비혈성 경한 통증 설사가 있다. 창백하며 체온 37.9°C (100.2°F), 맥박 92/min, 혈압 110/65 mmHg이다. 혈색소 10.5 g/dL, MCV 83 μm3, 망상적혈구 0.2%, 혈청 철 21 μg/dL, 총철결합능 176 μg/dL (정상 240–450)이다. 다음 중 가장 적절한 치료의 다음 단계는 무엇인가?

## 선택지

A. 경구 prednisone 치료
B. 피하 erythropoietin 주사
C. 정맥 metronidazole 치료
D. 경구 vitamin B12 보충

## 해설

저혈청 철·낮은 TIBC·저망상적혈구는 활동성 염증에 동반된 빈혈을 시사한다. 기존 약물에도 하루 7회 설사와 발열 등 활동성이 지속되어 선택지 중 경구 prednisone A를 단기 관해유도로 고려한다. 스테로이드는 빈혈 자체의 일반 치료나 장기 유지요법이 아니다. Ferritin·TSAT로 동반 철결핍을 평가하고 필요하면 철을 보충하며 장기 관해유지 치료는 별도로 계획한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 활동성 Crohn의 단기 관해유도 A와 염증성 빈혈을 구분. 원문에서 누락된 현재 5-ASA·국소 budesonide를 복원.
- https://doi.org/10.14309/ajg.0000000000003465

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002033
