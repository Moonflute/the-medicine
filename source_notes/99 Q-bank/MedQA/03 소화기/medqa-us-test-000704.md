---
type: qbank
schema_version: 1
id: medqa-us-test-000704
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:35d67a68e6727471aeea82361fbe14c66d41d206b6df4e3742f58699e4a34254
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "췌장암"
  - "폐쇄성 황달"
  - "CA 19-9"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

55세 백인 남성이 황달과 등으로 방사되는 심한 복통으로 작은 지역 병원에서 상급병원으로 이송되었다. 48시간 동안 발열 없이 활력징후는 안정적이었다. 총 빌리루빈 7 mg/dL, 직접 빌리루빈 6.4 mg/dL, AST 100, ALT 40, ALP 480 IU/L, 포도당 160 mg/dL였다. 고혈압과 당뇨병 병력이 있고 10대 초반부터 담배를 피웠다. 진찰에서 중등도 황달, 팽창되고 타진상 둔탁한 복부, 배꼽 주위 압통이 있었다. 다음 중 상승할 것으로 예상되는 종양표지자는?

## 선택지

A. CA 125
B. 데스민
C. CA 27-29
D. CA 19-9

## 해설


폐쇄성 황달과 췌장암이 의심되는 환자에서 CA 19-9는 가장 흔히 상승하는 종양표지자이다. 따라서 예상되는 상승 표지자는 CA 19-9이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐쇄성 황달·등으로 방사하는 복통과 흡연 위험의 췌장 악성질환 맥락에서 CA19-9 D가 관련 표지자. 표지자 단독 확진 문항은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000704
