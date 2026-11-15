---
type: qbank
schema_version: 1
id: medqa-us-train-007182
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3bd164ec818a1472ab7e9ee86b170c466e1395b0b60fe6c00890b3f871e3bf33
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "편평세포암"
  - "장기이식 후 면역억제"
  - "각질 진주"
  - "피부암"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: standard
answer: B
publication_status: "withheld"
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

신장이식 후 면역억제제를 복용 중인 69세 남성에게 쉽게 피가 나는 얼굴 피부 병변이 생겼다. 생검에서 피부 편평세포암으로 진단됐다. 이 환자에서 중요한 위험인자는?

## 선택지

A. 비정형 모반
B. 면역억제
C. C형 간염 바이러스
D. 사람면역결핍바이러스

## 해설

고형장기 이식 뒤의 장기 면역억제는 피부 편평세포암 위험을 높인다. 병변 평가와 치료 후에도 자외선 차단과 피부 감시가 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 이식 후 면역억제 B는 맞지만 전층 이형성·keratin pearl을 단순 전구 병변이라고 부른 설명을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007182
