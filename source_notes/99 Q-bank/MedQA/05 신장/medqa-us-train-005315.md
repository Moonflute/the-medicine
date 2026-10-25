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
question_type: mechanism
difficulty: complex
answer: "A"
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

55세 여자가 24시간 동안 심한 복통과 혈뇨로 내원했다. 24시간 소변 칼슘은 345 mg/일로 상승했고 비조영 복부 CT가 제시되어 있다. 수액과 아세트아미노펜으로 증상이 호전된 후 재발 예방 약물을 처방받았다. 이 약물은 네프론의 어느 부위에서 작용하는가?

## 선택지

A. 원위곡세뇨관
B. 헨레고리 굵은 상행각
C. 집합관
D. 헨레고리 하행각

## 해설

요중 칼슘 배설을 줄이는 thiazide를 의도한 문항으로 작용 부위는 원위곡세뇨관의 Na/Cl 공동수송체다. 24시간 요칼슘 상승이 제시되어 있어 약물 기전을 답하는 데 CT 형태를 창작할 필요는 없다. 실제 예방약 투여는 결석 성분·재발 위험·지속 고칼슘뇨와 식이·수분 관리에 대한 반응을 고려하며 모든 첫 결석에 일률 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: CT는 없지만 제시된 고칼슘뇨와 예방약의 작용 부위를 묻는 독립적 기전 문항으로 판정하여 유지; 실제 예방 적응증과 구분.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005315

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
