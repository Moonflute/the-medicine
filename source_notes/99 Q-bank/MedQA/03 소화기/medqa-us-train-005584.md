---
type: qbank
schema_version: 1
id: medqa-us-train-005584
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a4baf269c1a4c3955765d653d5b0b05ba94919f66a9796ff1b0246cffd9fca6d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "철결핍성 빈혈"
  - "위장관 출혈"
  - "대장암 평가"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsnqXqtIAg7Lac7ZiILm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

50세 남성의 혈색소가 11.8 g/dL, 페리틴은 8 ng/mL다. 눈에 띄는 출혈이나 빈혈을 설명할 다른 원인은 없다. 철분을 보충하면서 출혈 원인을 찾기 위해 필요한 검사는?

## 선택지

A. 상부위장관 내시경만 시행
B. 대장내시경만 시행
C. 상부위장관 내시경과 대장내시경
D. 소장 캡슐내시경을 먼저 시행

## 해설


성인 남성의 원인 불명 철결핍빈혈은 육안적 출혈이 없어도 위와 대장 병변을 평가한다. 소장 평가는 양방향 내시경 결과와 치료 반응을 보고 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 성인 남성 철결핍빈혈·잠혈양성의 원인평가는 상하부 내시경 C에 부합. 가족력만으로 상부검사를 추가하는 의미 아님.
- https://gastro.org/news/aga-recommends-bidirectional-endoscopy-for-most-patients-with-iron-deficiency-anemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005584
- https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/
