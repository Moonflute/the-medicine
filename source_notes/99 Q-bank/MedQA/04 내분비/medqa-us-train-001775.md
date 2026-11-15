---
type: qbank
schema_version: 1
id: medqa-us-train-001775
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:153d82b12d805bdf51e3cb347d0ba35dd5281b0d8d9aaeb45b1bbdef863997b0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pheochromocytoma"
  - "adrenal mass"
  - "catecholamine excess"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

부신 갈색세포종이 확인된 30세 남성이 계획 수술을 앞두고 있다. 현재 혈압 154/94 mmHg, 맥박 105회/분으로 급성 장기손상은 없다. 수술 전 혈압과 빈맥을 조절할 약물 순서는?

## 선택지

A. 독사조신으로 알파차단을 먼저 하고 필요하면 베타차단제를 추가한다
B. 프로프라놀롤을 먼저 쓰고 알파차단제를 추가한다
C. 프로프라놀롤만 쓴다
D. 차단제 없이 바로 선택 수술을 한다

## 해설


수술 전 알파차단을 먼저 한다. 빈맥 때문에 베타차단제가 필요해도 충분한 알파차단 후에 추가한다. 베타차단제를 먼저 쓰면 알파 매개 혈관수축이 심해질 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: metanephrine 증가·부신종괴/발작성 증상은 pheochromocytoma. 수술/β차단보다 α차단 A 선행 원칙 일치.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12819074/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001775
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8090459/
