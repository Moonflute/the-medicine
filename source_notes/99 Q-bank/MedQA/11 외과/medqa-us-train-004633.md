---
type: qbank
schema_version: 1
id: medqa-us-train-004633
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a906e4e79f61e2301ec3b7743bb532322a7fed3ad995e16b008d2752ad89b7d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "후복막 출혈"
  - "복부 둔상"
  - "출혈성 쇼크"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

33세 남성이 교통사고 뒤 수혈 중에도 혈압 78/42 mmHg다. 흉부와 복강 FAST에서는 자유액이 없고 골반 단순촬영에서 벌어진 불안정 골반 고리 골절이 확인됐다. 출혈 조절팀을 부르면서 할 초기 고정 조치는?

## 선택지

A. 정맥 조영 CT를 마칠 때까지 고정을 보류한다
B. 복강 내 출혈로 간주해 골반 고정 없이 개복 준비만 한다
C. 양쪽 대전자 높이에 골반 바인더를 적용한다
D. 장골능 위에 부드러운 복대를 느슨하게 댄다

## 해설


골반 고리 손상에 쇼크가 동반되면 대전자 높이에 골반 바인더를 적용해 골반을 안정시킨다. FAST는 골반 후복막 출혈을 배제하지 못한다. 수혈과 확정적 골반 출혈 조절을 동시에 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004633 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지속 쇼크에서 응급 출혈제어 B는 유지하며 FAST가 후복막 출혈을 잘 확인한다는 오해를 제한했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/education/clinical-guidance/Urotrauma.pdf
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004633
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5241998/
