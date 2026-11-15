---
type: qbank
schema_version: 1
id: medqa-us-train-002495
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b4fa62eb856443a3d048982885826fa030edb7061c299d028583ce87957db49
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "acute pyelonephritis"
  - "outpatient fluoroquinolone"
  - "costovertebral angle tenderness"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비임신 23세 여성이 급성 신우신염으로 진단됐다. 혈압은 안정적이고 구토 없이 약을 먹을 수 있으며 요로 폐쇄는 의심되지 않는다. 소변배양을 채취했고 지역 플루오로퀴놀론 내성률은 높다. 외래에서 적절한 초기 항생제 계획은?

## 선택지

A. 니트로푸란토인만 처방한다
B. 세팔렉신을 방광염과 같은 3일 요법으로 처방한다
C. 초기에 세프트리악손을 정맥 투여한 뒤 경구약을 사용하며 배양 결과에 맞춰 조정한다
D. 내성 위험을 고려하지 않고 레보플록사신 단독으로 시작한다

## 해설

국내 지침은 플루오로퀴놀론 내성이 높은 지역의 외래 신우신염에서 초기 세프트리악손 등 비경구 항생제를 먼저 권고한다. 이후 감수성에 맞춰 조정하며 니트로푸란토인은 신실질 감염에 적합하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 비임신 신우신염 외래치료 C는 가능하나 FQ 감수성·경구섭취·추적가능성 조건을 명시.
- https://uroweb.org/guidelines/urological-infections/chapter/the-guideline

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002495
- https://doi.org/10.3947/ic.2018.50.1.67
