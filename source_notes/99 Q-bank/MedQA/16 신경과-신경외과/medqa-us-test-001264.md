---
type: qbank
schema_version: 1
id: medqa-us-test-001264
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8af8bb2da13d276b10c811f4d5870bea9cd3dddb9d4ee0ee4e3d1ed3dd15141f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "정상압 수두증"
  - "보행장애"
  - "뇌실복강 단락술"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 환자가 보행장애와 요절박으로 평가받았다. MRI에서 정상압 수두증에 맞는 뇌실 확장이 있고 뇌척수액 검사 후 보행 속도가 뚜렷이 좋아졌다. 장기적으로 증상 개선을 기대할 시술은?

## 선택지

A. 뇌실복강 단락술
B. 정기 대량 요추천자를 영구 치료로 시행
C. 경동맥 내막절제술
D. 시상하부 뇌심부자극술

## 해설

뇌척수액 배액 뒤 보행이 개선되면 정상압 수두증에서 단락술 반응을 기대할 수 있다. 수술 적합성을 확인한 뒤 뇌실복강 단락을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 단락술이 CSF 배액을 감소시킨다는 반대 방향 오류 수정. NPH 임상삼징 및 선택된 환자에서 우회배액 A 설명.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/dementias

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001264
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7905302/
