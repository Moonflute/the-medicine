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
question_type: diagnosis
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

크론병이 악화된 35세 여성이 피곤하다. 혈색소 10.5 g/dL, MCV 83 fL, CRP 상승, 페리틴 250 ng/mL, 트랜스페린 포화도 12%이고 총철결합능은 낮다. 이 빈혈 양상을 가장 잘 설명하는 것은?

## 선택지

A. 활동성 염증에 따른 철 이용 제한
B. 비타민 B12 결핍에 의한 거대적혈구 빈혈
C. 만성 출혈에 따른 단독 절대 철결핍
D. 급성 용혈

## 해설

활동성 염증에서 페리틴이 충분히 높고 트랜스페린 포화도와 총철결합능이 낮으면 염증에 따른 철 이용 제한을 시사한다. 크론병에는 절대적 철결핍도 섞일 수 있으므로 페리틴 하나만으로 판단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 활동성 Crohn의 단기 관해유도 A와 염증성 빈혈을 구분. 원문에서 누락된 현재 5-ASA·국소 budesonide를 복원.
- https://doi.org/10.14309/ajg.0000000000003465

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002033
- https://doi.org/10.1093/ecco-jcc/jjad108
