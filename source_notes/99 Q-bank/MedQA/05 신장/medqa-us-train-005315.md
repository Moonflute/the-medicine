---
type: qbank
schema_version: 1
id: medqa-us-train-005315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a505057e0e96dc06f4553b2e4c8e0edd6273d608404c604b92e7ce9ead51c4c0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "고칼슘뇨증"
  - "칼슘 신장결석"
  - "티아지드 이뇨제"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: prevention
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
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "CT는 없지만 제시된 고칼슘뇨와 예방약의 작용 부위를 묻는 독립적 기전 문항으로 판정하여 유지; 실제 예방 적응증과 구분."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 여성이 물 섭취량을 늘리고 저염식으로 바꾼 뒤에도 칼슘옥살산 결석이 재발한다. 24시간 소변 칼슘은 반복해서 360 mg/일이고 소변 구연산과 요산 배설, 혈청 칼슘은 정상이다. 재발 예방을 위해 고려할 약물은?

## 선택지

A. 티아지드계 이뇨제
B. 푸로세미드
C. 알로푸리놀
D. 세벨라머

## 해설

식이·수분 조절로도 재발하고 고칼슘뇨가 지속되면 티아지드계 약제로 요칼슘 배설을 줄이는 것을 고려할 수 있다. 혈압, 전해질과 부작용을 함께 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: CT는 없지만 제시된 고칼슘뇨와 예방약의 작용 부위를 묻는 독립적 기전 문항으로 판정하여 유지; 실제 예방 적응증과 구분.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005315
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
- https://doi.org/10.1097/JU.0000000000005228

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
