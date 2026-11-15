---
type: qbank
schema_version: 1
id: medqa-us-train-006648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19816be64c43361508df03a9b9c515e35124162cd474896fc3d17c6d9350a755
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "투석 중 저혈압"
  - "초여과"
  - "혈액투석 합병증"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
curation_status: "revised"
curation_reason: "초여과 중단이 핵심이며 혈류량 감소를 일률 필수로 가르치지 않도록 A의 부수 조작을 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

61세 남성이 혈액투석 도중 갑자기 어지러워하고 혈압이 142/90에서 84/52 mmHg로 떨어졌다. 맥박 118회/분이고 가슴통증과 숨참은 없다. 투석과 관련해 우선 할 처치는?

## 선택지

A. 초여과를 일시 중단하고 혈압과 관류를 다시 확인한다
B. 초여과를 유지하며 1L 수액을 일괄 투여한다
C. 초여과를 유지하면서 산소만 공급한다
D. 혈색소 확인 없이 농축 적혈구를 투여한다

## 해설

투석 중 증상성 저혈압이 생기면 초여과를 멈추고 순환을 평가한다. 필요하면 상태에 맞춰 소량의 등장성 수액을 투여하고, 출혈·부정맥·감염 등 가능성도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006648
- https://www.kjim.org/journal/view.php?number=170694

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 초여과 중단이 핵심이며 혈류량 감소를 일률 필수로 가르치지 않도록 A의 부수 조작을 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6798406/
