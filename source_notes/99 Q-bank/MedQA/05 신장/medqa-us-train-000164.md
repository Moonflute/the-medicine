---
type: qbank
schema_version: 1
id: medqa-us-train-000164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2dc6211bf76dbd2556bc277d8c44b4c80109958e39a80a2a0ca2d17879fc5f60
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "autosomal dominant polycystic kidney disease"
  - "bipolar disorder"
  - "nephrogenic diabetes insipidus"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
  - MDQg64K067aE67mEL-y9qe2Mpeq4sOybkCDsmpTrtpXspp0gKE5lcGhyb2dlbmljIERpYWJldGVzIEluc2lwaWR1cykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 신장의 바소프레신 저항성으로 소변을 하루 6L 이상 본다. 검사 중 저혈량과 저혈압은 등장성 수액으로 교정했지만 혈청 Na 153 mmol/L이고 묽은 소변이 계속 나온다. 다음 처치는?

## 선택지

A. 물을 제한한다
B. 3% 식염수를 투여한다
C. 수분 결핍과 진행 중인 소변 손실을 계산해 자유수를 보충하고 나트륨을 추적한다
D. 데스모프레신만 반복 투여한다

## 해설

신장의 바소프레신 저항성에서는 자유수 손실로 고나트륨혈증이 지속될 수 있다. 순환을 먼저 안정시킨 뒤 자유수를 보충하고 교정 속도와 소변량을 모니터링한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HCTZ를 삼투성이뇨제라 한 오류 및 농축능 회복이라는 설명 교정.
- https://www.nature.com/articles/s41581-024-00897-z.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000164
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10175862/
