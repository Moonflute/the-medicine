---
type: qbank
schema_version: 1
id: medqa-us-train-000899
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2e3227698c4e85fbe3b4ba0c2cd4927f80041dbdeb545edd767be21c91d6597
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "asthma"
  - "breast cancer"
  - "colon cancer"
  - "gonorrhea"
  - "chlamydia"
  - "syphilis"
  - "human immunodeficiency virus"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
  - MTMg67aA7J246rO8L-unpOuPhSAoU3lwaGlsaXMpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 소녀가 연례 검진을 위해 일차 진료 의사를 방문했다. 특별한 호소 증상은 없다. 과거력상 천식이 있으며 필요 시 알부테롤(albuterol) 흡입기를 사용한다. 특이한 수술력은 없다. 어머니는 유방암을 앓았고 할아버지는 대장암으로 사망했다. 8세까지 모든 소아기 정기 예방접종을 받았다. 학교 생활은 잘하고 있으나 수학을 싫어한다고 한다. 남자친구와 성관계를 맺고 있다. 콘돔을 일관되게 사용하며, 최근 둘 다 임질, 클라미디아, 매독, 인간면역결핍바이러스(HIV) 검사에서 음성 판정을 받았다. 환자는 피임에 대해 문의했다. 환자에게 피임 옵션에 대해 교육하는 것 외에, 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 현재 세포진 검사 및 인유두종바이러스(HPV) 검사를 시행하고 이후 3년마다 시행
B. 현재 세포진 검사 및 HPV 검사를 시행하고 이후 5년마다 시행
C. 현재 세포진 검사를 시행하고 이후 3년마다 시행
D. HPV 관련 선별검사는 시행하지 않고 HPV 백신을 접종함

## 해설

16세에 미접종 상태에서 시작하면 HPV백신3회 접종이 권고되어 D가 적절하다. 15세 전에 시작한 면역정상 청소년은 보통2회이며 접종은 감염 치료가 아닌 예방이다. 성생활을 한다고16세에 routinePap/HPV검사를 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HPV백신 접종횟수를 모든11–26세3회로 일반화한 오류 수정.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000899
