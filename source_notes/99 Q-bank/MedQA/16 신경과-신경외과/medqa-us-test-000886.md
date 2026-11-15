---
type: qbank
schema_version: 1
id: medqa-us-test-000886
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4424bb15c02909a5cdf000d54faca425376f7db464cf1204f1f5e01d89d3f69e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "디히드로에르고타민 독성"
  - "약물 유발 혈관경련"
  - "국소 신경학적 결손"
  - "Ergotamine toxicity"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 환자가 이전과 같은 편두통 발작의 급성기 약을 상담한다. 2년 전 허혈성 뇌졸중을 겪었다. 이 병력 때문에 피해야 할 약은?

## 선택지

A. 수마트립탄
B. 아세트아미노펜
C. 메토클로프라미드
D. 나프록센

## 해설

트립탄은 혈관수축 작용이 있어 뇌졸중이나 일과성 허혈발작 병력에서는 금기다. 항혈소판제 복용이나 신장·위장관 위험 등도 함께 확인해 대안을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 나프록센을 triptan 같은 혈관수축제로 분류한 오류 수정. 수마트립탄 직후 dihydroergotamine 병용 금기와 혈관연축 위험을 실제 원인으로 설명. C 유지.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/020148s026lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000886
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=201900721
