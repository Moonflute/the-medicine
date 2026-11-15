---
type: qbank
schema_version: 1
id: medqa-us-train-001995
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa60a3c6e31f35290bd8407a14fcd996c723a38d877bdb40845832d37b2e98bd
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "diverticular bleeding"
  - "painless hematochezia"
  - "lower gastrointestinal bleeding"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Qg7Lac7ZiIIChEaXZlcnRpY3VsYXIgQmxlZWRpbmcpLm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 통증 없는 혈변으로 왔다. 소생 후 활력징후가 안정됐다. 대장내시경에서 게실 하나의 입구 안에 노출된 혈관에서 피가 계속 맺힌다. 내시경으로 접근할 수 있다. 지금 할 처치는?

## 선택지

A. 출혈 게실에 생검 시행
B. 출혈 혈관에 내시경 클립으로 지혈
C. 금식과 항생제만 시행
D. 출혈 위치와 관계없이 즉시 전체 결장절제술

## 해설

출혈 중인 게실이나 뚜렷한 노출 혈관은 내시경 지혈 대상이다. 위치와 접근성에 따라 클립 또는 결찰 등을 선택할 수 있다. 염증 소견이 없는 게실 출혈에 항생제가 지혈을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: B 정답인데 게실출혈에 항생제를 권한 모순을 교정. 원정답 B 유지, 초기 안정화와 원인 규명/지혈의 후속 단계 구별.
- https://www.giejournal.org/article/S0016-5107%2826%2906857-4/fulltext
- https://gi.org/patients/topics/lower-gi-bleeding/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001995
