---
type: qbank
schema_version: 1
id: medqa-us-validation-000790
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:120ad69b023667a412067dfdfa3edee3023caf89122e003141c3403b1e593c55
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "약물 유발 루푸스"
  - "히드랄라진"
  - "나비모양 홍반"
  - "drug-induced lupus"
related_disease_slugs: []
question_type: etiology
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
---

# MedQA US 임상문제

## 문제

73세 남성이 관절통, 근육통, 피로와 코와 뺨을 가로지르는 나비모양 발진으로 진료를 받으러 왔다. 다음 중 이 상태를 유발했을 가능성이 가장 높은 약물은?

## 선택지

A. 베라파밀
B. 클로니딘
C. 히드랄라진
D. 테라조신

## 해설


제시한 약물 중 hydralazine C는 drug-induced lupus와 잘 알려진 연관이 있다. 관절통·근육통·피로와 루푸스양 피부병변이 약물 노출 후 생겼다면 이를 고려한다. 다만 malar rash가 약물유발 전신루푸스의 필수 또는 가장 전형적 소견이라는 뜻은 아니며 약물력·혈청검사와 다른 원인을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000790 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: hydralazine DIL C는 유지하되 butterflyrash가약물루푸스의전형필수징후라는 과장 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000790
