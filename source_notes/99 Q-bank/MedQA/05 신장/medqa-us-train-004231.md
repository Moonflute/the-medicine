---
type: qbank
schema_version: 1
id: medqa-us-train-004231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79e8b2327b206fcc7bafba57f8c732999a0cf2bea8c445dcfec29ab0e2b31c99
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "B형간염 관련 막성 신병증"
  - "신증후군"
  - "상피하 면역복합체 침착"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-unieyEsSDsgqzqtazssrTsi6Dsl7wgKE1lbWJyYW5vdXMgTmVwaHJvcGF0aHkpLm1k
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

38세 남성의 신장 생검에서 막성 신병증이 확인됐다. 신증후군이 있고 HBsAg 양성, HBV DNA가 높다. B형간염 연관 신병증으로 판단했다. 신장 관리를 하면서 우선 병행할 치료는?

## 선택지

A. 신기능에 맞는 B형간염 항바이러스 치료
B. B형간염 치료 없이 고용량 스테로이드 단독
C. B형간염 치료 없이 리툭시맙부터 투여
D. HBV DNA가 높은 상태를 치료하지 않고 항체만 추적

## 해설


B형간염 관련 사구체질환에서는 바이러스 복제 억제가 중요하다. 신기능을 고려해 항바이러스제를 고르고, 면역억제가 필요한 경우 HBV 재활성화도 예방해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HBsAg+의 신증후군에서 HBV연관 membranous의 상피하침착 A가 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004231
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13430407/
