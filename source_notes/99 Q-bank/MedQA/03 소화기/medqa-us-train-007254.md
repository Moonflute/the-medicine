---
type: qbank
schema_version: 1
id: medqa-us-train-007254
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6859286f9d16761e71badafdfd545a408618416e63c784e0b4377390e4ce32c6
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간이식 후 담도 합병증"
  - "황달"
  - "간 초음파"
  - "담도 폐색"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trj4Tqs4Qg7KeI7ZmYLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 간이식 3개월 뒤 새 황달로 왔다. 직접 빌리루빈과 알칼리인산분해효소가 이전보다 올랐다. 열과 저혈압은 없다. 담도와 이식 간의 혈류를 함께 확인할 첫 영상검사는?

## 선택지

A. 상부위장관 내시경
B. 흉부 CT
C. 비조영 단순 복부 X선
D. 도플러를 포함한 간 초음파

## 해설


이식 후 담즙정체 양상의 간검사 이상에서는 초음파로 담도와 혈관을 우선 평가한다. 도플러로 간동맥·문맥 등의 혈류를 확인한다. 초음파가 정상이더라도 담도 협착이 의심되면 MRCP 등 추가 검사가 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이식후새황달/RUQ통증의초기담도·혈관평가는간초음파 D가적절하며CMV만으로고정하지않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007254
