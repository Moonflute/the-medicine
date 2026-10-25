---
type: qbank
schema_version: 1
id: medqa-us-test-000879
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b768df394ea9c9528c59a3228dcb7028c7bb455e353dfbeb89b3cf9ad3d787e1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "절단 손가락"
  - "사지 재접합"
  - "조직 보존"
related_disease_slugs: []
question_type: management
difficulty: standard
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

17세 고등학생이 목공 수업 중 새집을 만들다가 실수로 집게손가락을 절단했다. 손가락이 잘린 것을 알고 실신했으며 교사가 즉시 응급실로 데려와 20분 이내에 도착했다. 천식 병력이 있고 알부테롤 흡입기만 사용한다. 혈압은 122/78 mmHg이다. 진통제를 투여했고 절단된 손가락은 교실에 두고 왔지만 교장이 병원으로 가져오고 있다. 절단된 손가락을 운반하는 올바른 방법은?

## 선택지

A. 손가락을 얼음물에 담근다
B. 젖은 거즈로 손가락을 싼다
C. 젖은 거즈로 싸서 비닐봉지에 넣고 얼음 위에 둔다
D. 젖은 거즈로 싼 뒤 얼음물에 담근다

## 해설


절단 손가락은 생리식염수 등으로 살짝 적신 거즈로 감싸고 밀폐되는 방수 비닐봉지에 넣은 뒤, 그 봉지를 얼음이 든 용기에 놓아 간접 냉각한다(C). 조직을 얼음에 직접 대거나 물·얼음물에 직접 담그면 손상을 악화시킬 수 있다. 재접합 평가를 위해 환자와 함께 신속히 전문 치료기관으로 운반한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000879 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 절단지의 밀봉·간접 냉각을 명확히 하고 원문 혈압을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.orthoinfo.org/diseases--conditions/fingertip-injuries-and-amputations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000879
