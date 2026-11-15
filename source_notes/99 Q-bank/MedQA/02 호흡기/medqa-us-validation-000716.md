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
explanation_status: "manual-reviewed"
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

55세 비흡연 남성의 우연히 발견된 9 mm 고형 폐결절이 얇은 절편 CT에서 3년간 크기와 모양이 변하지 않았다. 암이나 면역저하 병력은 없고 간유리 성분도 없다. 이 결절에 대해 어떻게 추적할까?

## 선택지

A. 결절의 정기 영상 추적을 종료한다
B. 결절 크기만을 근거로 즉시 PET/CT를 시행한다
C. 결절을 경피적으로 생검한다
D. 폐절제술을 의뢰한다

## 해설


2년 이상 크기 변화가 없는 고형 결절은 대개 악성 가능성이 매우 낮아 추가 추적이 필요하지 않다. 이 원칙을 성장이 느린 간유리·부분고형 결절에 그대로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동일 위치·크기의 고형 결절이 3년 안정적이며 비흡연·무증상으로 추가검사 불필요 A의 안정성 원칙과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000716
- https://pmc.ncbi.nlm.nih.gov/articles/3749714/
