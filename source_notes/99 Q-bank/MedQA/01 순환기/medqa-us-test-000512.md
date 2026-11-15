---
type: qbank
schema_version: 1
id: medqa-us-test-000512
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7ee5cc8f31ba4fca16f4d8259a18bf301a21b5762b170823ae3b3831ea5248a3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "경동맥 협착"
  - "경동맥 잡음"
  - "일과성 허혈발작"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 오늘 아침 갑자기 왼손에 힘이 빠지고 감각이 둔해졌다가 15분 뒤 회복됐다. 현재 신경학적 진찰은 정상이고 오른쪽 경동맥 위에서 잡음이 들린다. 응급 뇌졸중 평가와 함께 경동맥 협착을 비침습적으로 평가할 검사는?

## 선택지

A. 경동맥 이중초음파
B. 경흉부 심초음파
C. 비조영 뇌 CT 단독
D. 뇌파검사

## 해설

일시적인 한쪽 손의 힘 빠짐과 반대쪽 경동맥 잡음은 경동맥 협착에 의한 뇌허혈 가능성을 높인다. 경동맥 이중초음파로 경부 경동맥 혈류와 협착을 평가할 수 있다. 검사 하나로 일과성 허혈발작의 전체 평가를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경동맥 잡음만의 무증상 선별이 아니라 좌측 일과성 신경증상이 있는 증상성 경동맥 평가임을 명시.
- https://esvs.org/wp-content/uploads/2023/03/ESVS-2023-Carotid-guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000512
