---
type: qbank
schema_version: 1
id: medqa-us-train-001734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f7c254c16b24bd629f27bc97ecdb0ebcc45f0693daa9cf4a59cacd71e4a821b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hepatitis C-associated membranoproliferative glomerulonephritis"
  - "mixed cryoglobulinemia"
  - "subendothelial immune complexes"
related_disease_slugs:
  - MDUg7Iug7J6lL-unieymneyLnSDthqDrpqzsvantjKXsl7wgKE1lbWJyYW5vcHJvbGlmZXJhdGl2ZSBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성의 HCV RNA가 양성이다. 촉지자색반, 혈뇨, 하루 1.1g의 단백뇨와 낮은 C4가 있고 혼합 한랭글로불린이 검출됐다. 신기능은 안정적이고 생명을 위협하는 장기 침범은 없다. 신장 증상의 원인 치료에 우선 포함할 것은?

## 선택지

A. 직접작용 항바이러스제
B. 고용량 스테로이드 단독
C. 혈장교환 단독
D. HCV 치료 없이 항히스타민제

## 해설


신기능이 안정적이고 중증 장기 침범이 없는 HCV 연관 사구체신염에는 직접작용 항바이러스제로 HCV를 치료한다. 급속 신기능 악화나 중증 혈관염이면 면역억제나 혈장교환도 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 A/해설 읽음. HCV 관련 면역복합체성 MPGN의 내피하 침착은 부종·단백뇨와 적혈구 원주의 혼합 신염/신증 양상에 일치. 병리 기전 검토이며 HCV 치료 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001734
- https://kdigo.org/guidelines/hepatitis-c-in-ckd/
