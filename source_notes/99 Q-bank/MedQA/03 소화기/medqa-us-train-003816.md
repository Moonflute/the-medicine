---
type: qbank
schema_version: 1
id: medqa-us-train-003816
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:999420a4152dda3a8cbde351d190244cae98b10838295c90f2ebe24646042dab
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "unintentional weight loss"
  - "abdominal malignancy"
  - "pancreatic cancer evaluation"
  - "abdominal CT"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 수개월간 진행된 쇠약과 25파운드 체중감소, 간헐적 복통으로 내원했다. 수년 전 복통으로 응급실에 갔을 때 과음에 따른 간효소 상승과 우연히 발견된 담석이 있었다. 50갑년의 흡연력이 있다. 신체검사에서 쇠약해 보였고 복부 압통은 없으며 머피 징후는 음성이었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 복부 CT
B. 간 CT
C. HIDA 스캔
D. 금연 상담과 일차의료 추적

## 해설

진행하는 쇠약과 뚜렷한 비의도적 체중감소, 복통과 흡연력은 췌장암을 포함한 복강 내 악성질환 등의 평가가 필요한 경고징후다. 보기 중 A, 복부 CT가 간에만 국한한 CT보다 넓게 병변을 평가할 수 있어 적절하다.

과거 담석이 있었다는 사실만으로 이번 증상을 급성 담낭염으로 단정할 수 없다. 현재 복부 무압통과 음성 Murphy 징후도 HIDA 검사를 우선할 근거가 부족함을 시사한다. CT만으로 모든 악성질환을 확진·배제하는 것은 아니며 결과에 따라 추가 검사를 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 번역에서 생략된 과음 관련 간효소 상승/우연한 담석 병력과 복부 무압통을 복원하여 간 CT/HIDA 오답과의 비교 문맥 보존. CT로 악성 여부를 단번에 확정한다는 오해를 피하도록 해설 보완.
- https://www.cancer.gov/types/pancreatic/symptoms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003816
