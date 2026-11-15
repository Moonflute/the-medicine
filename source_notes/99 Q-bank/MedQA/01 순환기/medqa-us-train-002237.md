---
type: qbank
schema_version: 1
id: medqa-us-train-002237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb9617979eec4a9e4d81f0b0d2bcec550174ca50c645e59755d92cc7ce34e86b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "stable angina"
  - "exercise stress testing"
  - "ST-segment depression"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 발병 초기 troponin 음성을 배제 진단으로 오해한 검사 선택지 교정."
curation_status: "revised"
curation_reason: "발병 초기 troponin 음성을 배제 진단으로 오해한 검사 선택지 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

36세 남성이 운동 중 시작된 흉골 뒤 압박감과 식은땀으로 내원했다. 초기 심전도에서 전외측 ST분절 하강이 보이고 첫 고감도 트로포닌은 음성이다. 증상이 시작된 지 30분밖에 지나지 않았으며 현재 흉통은 가라앉았다. 급성관상동맥증후군을 평가하기 위한 다음 단계는?

## 선택지

A. 첫 트로포닌이 음성이므로 귀가시킨다
B. 급성 허혈을 배제하기 전에 운동부하검사를 시행한다
C. CK-MB를 한 번 검사하고 결과가 정상이면 배제한다
D. 심전도와 고감도 트로포닌을 반복 확인한다

## 해설

발병 직후의 트로포닌 한 번으로 심근경색을 배제할 수 없다. 허혈을 시사하는 증상과 ST분절 변화가 있어 반복 심전도와 연속 고감도 트로포닌 검사가 필요하다. 지속·재발하는 허혈이나 불안정 소견이 있으면 검사만 기다리지 않고 긴급 관상동맥 평가를 진행한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 발병 초기 troponin 음성을 배제 진단으로 오해한 검사 선택지 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.jacc.org/doi/10.1016/j.jacc.2024.11.009

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002237
- https://doi.org/10.1161/CIR.0000000000001309

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
