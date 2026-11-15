---
type: qbank
schema_version: 1
id: medqa-us-train-000491
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e6abc429129ece2cbe5483a48e5f5a65056968b067c818df336200a112271c2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "Pyelonephritis"
  - "Uncomplicated cystitis"
  - "UTI"
  - "Acute obstructing nephrolithiasis"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDrsKnqtJHsl7wgKEFjdXRlIEN5c3RpdGlzKS5tZA
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 고열, 오한, 오른쪽 옆구리 통증으로 내원했다. 농뇨가 있고 CT에서 우측 요관결석이 소변 배출을 막아 수신증이 있다. 정맥 항생제를 시작했다. 감염 조절에 필요한 다음 조치는?

## 선택지

A. 요관 스텐트 또는 경피적 신루로 즉시 배액한다
B. 경구 항생제로 바꾸고 결석이 자연 배출되기를 기다린다
C. 체외충격파쇄석술부터 시행한다
D. 수액만 늘리고 다음 주에 초음파를 재검한다

## 해설


감염된 상부 요로의 폐색은 비뇨기계 응급이다. 항생제와 함께 즉시 배액하고, 결석 제거는 감염과 전신 상태가 안정된 뒤 시행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고열·전신 증상과 CVA압통, pyuria/nitrite 양성은 상부요로감염 A. 포괄 UTI보다 구체적 진단이며 단순방광염과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000491
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
