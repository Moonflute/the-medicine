---
type: qbank
schema_version: 1
id: medqa-us-train-003989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:866e157db2b07279e89d97826106282fc3e59a770c2fc1ce725689b97a0579f6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조증 삽화"
  - "양극성장애"
  - "감별진단을 위한 TSH"
  - "임신 검사"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

양극성장애로 리튬을 처음 시작하려 한다. 임신 가능성이 있는 환자에게 약물 시작 전 확인할 검사 조합은?

## 선택지

A. 신기능·전해질·칼슘·갑상샘기능과 임신 여부
B. 도파민 수치와 혈청 세로토닌
C. 당화혈색소와 지질 수치만
D. 흉부 X선과 심장초음파만

## 해설

리튬은 신장으로 배설되며 갑상샘과 칼슘 대사에 영향을 줄 수 있다. 투여 전 기준치와 임신 가능성을 확인하고, 심장 위험에 따라 심전도 등 다른 평가를 추가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003989
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. TSH 검사를 조증-우울증 구분 검사로 잘못 설명한 해설 수정. 가임기·발프로산 간독성 병력에서 리튬 고려 전 기본검사 맥락 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
