---
type: qbank
schema_version: 1
id: medqa-us-train-005891
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:59bd5947e7ab4595e746900921b88b46e58a89370668cf564b3fa783d4f41c44
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "지연성 사춘기"
  - "고환비대 지연"
  - "사춘기 평가"
  - "Delayed puberty"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

14세 4개월 남아가 또래보다 사춘기가 늦다고 걱정한다. 음모는 조금 있지만 양쪽 고환 용적은 각각 3mL다. 적절한 해석은?

## 선택지

A. 음모가 있으므로 사춘기가 정상적으로 시작됐다
B. 키 급성장이 없을 때만 지연으로 판단할 수 있다
C. 16세까지는 평가할 이유가 없다
D. 14세까지 고환이 커지지 않아 지연성 사춘기를 평가한다

## 해설

남아에서는 고환 용적이 약 4mL 이상으로 증가하는 것이 사춘기 시작의 기준이다. 음모는 부신성 안드로겐만으로도 생기므로 성선의 사춘기 시작을 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 남아의 고환 발달 시작을 12~14세로 좁힌 해설을 일반적 9~14세 범위와 14세 지연 기준으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005891
- https://pedsendo.org/clinical-resource/child-with-suspected-delayed-puberty/
