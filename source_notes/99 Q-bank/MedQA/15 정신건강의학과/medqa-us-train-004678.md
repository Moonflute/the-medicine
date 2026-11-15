---
type: qbank
schema_version: 1
id: medqa-us-train-004678
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a905d3783f1d55a2820cfe97508d89ee422e6363a31bd5e5f396b28b61ae2fa6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "올란자핀"
  - "대사증후군"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
  - MDQg64K067aE67mEL-uMgOyCrOymne2bhOq1sCAoTWV0YWJvbGljIFN5bmRyb21lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

올란자핀을 시작한 지 3개월 된 환자가 이전보다 체중이 늘었다. 치료 전 혈당과 지질은 정상이었다. 추적할 항목으로 가장 적절한 것은?

## 선택지

A. 혈청 리튬 농도와 갑상샘기능
B. 절대호중구 수만 정해진 간격으로 검사
C. 혈청 프로락틴만 반복 검사
D. 체중·혈압과 혈당 또는 당화혈색소, 지질

## 해설


올란자핀은 체중 증가, 혈당 조절 악화와 지질 이상을 일으킬 수 있다. 치료 전 기준치를 확인한 뒤 대사 지표를 정기적으로 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004678
- https://www.nice.org.uk/guidance/cg178/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 올란자핀 재시작 후 장기 대사 모니터링인 HbA1c의 영한 선택지·답·해설 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
