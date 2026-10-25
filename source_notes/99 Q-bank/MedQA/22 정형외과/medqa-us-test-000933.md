---
type: qbank
schema_version: 1
id: medqa-us-test-000933
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2c2793b6f469b7efcf669f6bfc384c30a84b5a91c0b677324faa9c80742e4a0e
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골관절염"
  - "퇴행성 관절질환"
  - "기계적 무릎 통증"
question_type: diagnosis
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남성이 수년간 지속되었으나 최근 악화된 양측 무릎 통증으로 진료를 받으러 왔다. 계단을 오르거나 100야드 이상 오래 걸으면 아프고 하루 종일 활동할 때 악화되며 쉬면 호전된다. 아침 뻣뻣함은 거의 없고 대부분 기상 후 5~10분 정도였다. 양쪽 무릎 안쪽 뼈 구조의 압통, 염발음, 굴곡·신전 끝범위의 운동 제한, 차갑고 뼈가 커진 관절이 보였다. 이 상태의 추가 평가를 위해 필요한 검사는?

## 선택지

A. 전혈구검사
B. 적혈구침강속도
C. 무릎 MRI
D. 추가 검사가 필요하지 않다

## 해설

45세 이상에서 활동 관련 무릎 통증·짧은 아침강직과 골성 비대·염발음(crepitus)은 전형적인 골관절염 양상이다. 비전형 소견이 없는 이 사례에서는 진단을 위한 추가 혈액검사나 MRI가 통상 필요하지 않아 D가 적절하다. 감별 진단·합병증·수술 계획 등 별도 임상 필요가 생기면 영상검사를 고려할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전형 OA에서 추가 검사 불필요 D를 유지하고 염발음을 청진음으로 오역한 부분 및 어떤 영상도 치료 계획에 영향 없다는 절대 표현을 수정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG226/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000933
