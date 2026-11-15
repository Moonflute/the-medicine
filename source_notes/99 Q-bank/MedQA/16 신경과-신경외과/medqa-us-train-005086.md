---
type: qbank
schema_version: 1
id: medqa-us-train-005086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31fb1b2b094ee5fbe93635e58457adcd509563643376e437f7f48ec340ab5f14
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "국소발작"
  - "양측 강직간대성 발작"
  - "발작 후 혼돈"
  - "Focal seizure"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: B
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

10세 아이의 오른쪽 입가가 먼저 반복해서 떨리기 시작했다. 잠시 뒤 의식을 잃고 양쪽 팔다리에 강직과 간대가 이어졌다. 이 발작의 분류는?

## 선택지

A. 처음부터 전신 강직간대발작
B. 국소에서 양측 강직간대발작으로 진행
C. 전형 결신발작
D. 경련성 실신

## 해설

한쪽 얼굴에서 뚜렷한 국소 운동 증상이 먼저 시작한 뒤 양측 강직간대로 퍼졌다. 시작부터 양측 네트워크를 침범하는 전신 발작과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초기 국소 안면 경련과 오라를 명확히 하여 처음부터 전신 발작인 D와 국소-양측 진행 A를 구별하는 해설로 교체했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005086
- https://pubmed.ncbi.nlm.nih.gov/40264351/
