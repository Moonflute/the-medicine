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

62세 남성이 1년간 보행곤란, 4개월간 반복 낙상, 6개월간 점점 심해지는 요절박과 인지저하로 진료를 받으러 왔다. 넓은 보폭의 느리고 짧은 보행, 시간 지남력 저하, 주의력 저하가 있었고 5분 후 세 물건 중 하나만 기억했다. 가장 적절한 치료는?

## 선택지

A. 뇌실 단락술
B. 아세타졸아미드
C. 측두엽 절제술
D. 도네페질

## 해설

보행장애·인지저하·요실금의 조합은 정상압수두증을 의심하게 한다. 적절한 뇌영상과 임상/배액반응 평가 등으로 치료 대상자를 선정한 뒤 뇌실 단락술(A)로 뇌척수액을 다른 체강으로 우회 배액하여 증상을 완화할 수 있다. 단락술의 목적은 배액을 줄이는 것이 아니라 추가 배액 경로를 제공하는 것이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 단락술이 CSF 배액을 감소시킨다는 반대 방향 오류 수정. NPH 임상삼징 및 선택된 환자에서 우회배액 A 설명.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/dementias

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001264
