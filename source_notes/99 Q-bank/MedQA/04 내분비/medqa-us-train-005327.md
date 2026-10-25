---
type: qbank
schema_version: 1
id: medqa-us-train-005327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:583848e20c6a7aa58056667a8ace40b2661d81275aa242b4bc727116a6d7324d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "발기부전"
  - "대사증후군"
  - "당뇨병 선별검사"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
  - MDQg64K067aE67mEL-uMgOyCrOymne2bhOq1sCAoTWV0YWJvbGljIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: B
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

47세 남자가 2년 동안 점점 심해지는 발기 유지 장애로 내원했다. 성욕 저하나 우울감은 없고 20갑년 흡연력, 중심성 비만, 혈압 145/90 mmHg가 있다. 원인을 평가하기 위해 시행할 검사로 가장 적절한 것은?

## 선택지

A. 혈장 칼슘
B. 공복 혈청 포도당
C. 총 혈청 빌리루빈
D. 난포자극호르몬

## 해설


발기부전은 당뇨병과 같은 대사성 질환과 밀접하게 연관된다. 공복 혈당 검사는 당뇨병 여부를 확인하는 가장 기본적인 선별 검사이며, 당뇨병이 발기부전의 주요 원인일 수 있다. 따라서 가장 적절한 검사는 공복 혈청 포도당이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 중심비만·고혈압 동반 점진 ED에서 당뇨 원인평가 공복혈당 B가 제시검사 중 적절.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005327
