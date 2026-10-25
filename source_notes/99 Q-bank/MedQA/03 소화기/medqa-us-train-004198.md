---
type: qbank
schema_version: 1
id: medqa-us-train-004198
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a08afc08f490418f608db62d8eec6c91bd0634b7192c343b5a06317488c5417
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "하부 위장관 출혈"
  - "급성 혈액 손실"
  - "수혈 전 검사"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tlZjrtoAg7JyE7J6l6rSAIOy2nO2YiCAoTG93ZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: D
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

71세 여자가 실신으로 응급실에 왔다. 그날 많은 양의 선홍색 혈변을 본 후 몇 분 뒤 어지러움을 느끼며 딸의 품으로 쓰러졌다. 당뇨병과 고혈압 병력이 있다. 체온 37.2°C, 혈압 155/94 mmHg, 맥박 82회/분, 호흡수 15회/분, 산소포화도 99%이다. 직장검사에서 대변 잠혈은 양성이지만 더 이상 혈변은 보지 않는다. 폐는 깨끗하고 복부는 부드럽고 압통이 없다. 헤모글로빈 7.1 g/dL, 헤마토크릿 25%, 백혈구 5,300/mm³, 혈소판 182,500/mm³이다. 큰 정맥로 2개를 확보하고 생리식염수를 투여했다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 대장내시경
B. 복부 CT
C. 농축 적혈구 수혈
D. 혈액형 검사 및 항체 선별

## 해설

현재 활력징후가 안정되고 출혈이 멎었지만 상당한 빈혈이 있어 type and screen D로 수혈을 준비한다. 이후 Hb·증상·출혈/관류상태에 따라 수혈과 출혈원 평가를 시행한다. 생명을 위협하는 불안정 출혈에서는 교차시험 완료를 기다리지 않고 응급출고 혈액을 사용할 수 있으므로 검사가 모든 응급수혈의 선행조건이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정화된 대량혈변/Hb7.1의 type&screen D 준비는 적절하나 응급수혈을 검사때문에 무조건 지연시키는 해설을 한정.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2026_a-2863-8314.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004198
