---
type: qbank
schema_version: 1
id: medqa-us-validation-000716
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ecf01bdddadfd1225759bfd49d742cd2d17f0c9e93dcbcfd6efd0ce7dbbf8ef8
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "고립성 폐결절"
  - "3년간 안정"
  - "폐암 평가"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: investigation
difficulty: standard
answer: A
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

35세 남성이 군 입대 전 검사에서 오른쪽 폐 중간 영역의 9 mm 고립성 폐결절을 발견했다. 3년 전 촬영에서도 같은 위치와 크기로 보였고 흡연력이나 증상은 없다. 다음 평가 단계는?

## 선택지

A. 추가 검사는 필요하지 않다
B. 얇은 절편 CT
C. 양전자방출단층촬영
D. 12개월 후 추적하고 변하지 않으면 종료

## 해설


9 mm 고립 결절이 3년간 크기·모양 변동이 없고 위험인자가 없으므로 추가 검사가 필요하지 않다. Fleischner 지침에 따라 관찰만 하면 된다. 따라서 A.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동일 위치·크기의 고형 결절이 3년 안정적이며 비흡연·무증상으로 추가검사 불필요 A의 안정성 원칙과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000716
