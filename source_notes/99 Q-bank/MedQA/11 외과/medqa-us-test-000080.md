---
type: qbank
schema_version: 1
id: medqa-us-test-000080
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e2a0090628990fa5ab3f23092b6abe222d3c93591e40890cfe0b89c895291ee6
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "우심실 관통상"
  - "심장 손상"
  - "심장 봉합"
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 남성이 흉부 관통상으로 내원했다. 혈압이 떨어지고, 외상 초음파에서 심낭 내 혈액과 우심실 허탈이 보인다. 맥박은 있으나 수혈 중에도 쇼크가 지속된다. 확정적 치료는?

## 선택지

A. 심낭천자 후 심낭 배액만 유지
B. 응급 수술로 심낭을 감압하고 심장 출혈을 조절
C. 흉관 삽입만 하고 혈압 반응을 기다림
D. 흉부 CTA를 먼저 찍고 나서 수술 여부를 결정

## 해설


외상성 심장압전은 심장 손상과 심낭 내 혈액을 수술로 해결해야 한다. 심낭천자는 필요시 임시 조치일 뿐 손상 부위를 복구하지 못하며 응고된 피가 충분히 빠지지 않을 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000080 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 우심실 관통상 봉합이라는 원문 정답은 유지하되 창상 크기와 단일 봉합법의 보편적 표준이라는 단정을 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://journals.lww.com/jtrauma/Documents/2024%20TA%20Online%20Issue%20Proof_V2.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000080
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/
