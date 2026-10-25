---
type: qbank
schema_version: 1
id: medqa-us-train-002675
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8895f9ac9be0a92798d3bd51ffbdd4c7339f85c0b29829cd8a33a2eee9096776
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pheochromocytoma"
  - "adrenal medulla"
  - "chromaffin cells"
  - "catecholamine excess"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

40세 여성이 수개월간 반복되는 발한, 심계항진, 창백, 진통제로 호전되지 않는 발작성 두통으로 내원했다. 혈압 220/120 mmHg, 맥박 110회/분이고 안저에서 고혈압성 망막 변화가 보인다. 이 상태를 유발하는 종양은 다음 중 어디에서 발생하는가?

## 선택지

A. 부신 겉질 사구대
B. 부신 겉질 망상대
C. 부신 크롬친화세포
D. 부신외 크롬친화세포

## 해설


반복되는 발한·심계항진·두통과 220/120 mmHg의 급성 고혈압은 카테콜라민 과다증을 시사한다. 카테콜라민을 분비하는 종양인 pheochromocytoma는 부신 수질의 크로모아핀 세포에서 발생한다. 따라서 정답은 부신 크로모아핀 세포이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 발작성 두통·발한·심계항진·고혈압의 pheochromocytoma는 부신수질 chromaffin cell C에서 발생.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002675
