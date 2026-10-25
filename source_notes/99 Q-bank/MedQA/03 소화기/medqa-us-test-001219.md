---
type: qbank
schema_version: 1
id: medqa-us-test-001219
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:26d751c388ecf64825002344c24de651e984afbfe16c9823e7732bd27927e707
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "비르호프 림프절"
  - "위암"
  - "쇄골상 림프절병증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITslZQgKEdhc3RyaWMgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

56세 한국계 남성이 정기 건강검진을 받으러 왔다. 흡연과 좌식생활, 조절되는 제2형 당뇨병이 있고 왼쪽 쇄골상 림프절이 커져 있었다. 세침흡인이나 생검 외에 추가 평가에 포함할 검사는?

## 선택지

A. 흉부 방사선촬영
B. 상부위장관 내시경
C. 뇌 MRI
D. 목 초음파

## 해설

정답은 B이다. 무통성 좌측 쇄골상 림프절(Virchow node) 비대는 위암 등 복부 악성종양 전이와 연관될 수 있어 조직검사와 함께 위내시경으로 위 원발병변을 평가할 수 있다. 제시된 선택지에서 B가 가장 적합하지만 흉부 악성질환 등 다른 원인도 가능하며 흉부영상이 아무 도움이 없다는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Virchow node의 위암 연관은 유지하되 흉부영상 등은 전혀 도움이 없다는 단정 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001219
