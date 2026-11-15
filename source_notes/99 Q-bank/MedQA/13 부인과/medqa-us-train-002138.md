---
type: qbank
schema_version: 1
id: medqa-us-train-002138
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f547274a329f42ec307325e2ca8ba70f17469b57f91a65a69eaa7acb50e3f03
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "primary amenorrhea"
  - "hypergonadotropic hypogonadism"
  - "FSH"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YG065287J247Y6g7YSwIOymne2bhOq1sCAoS2xpbmVmZWx0ZXIgU3luZHJvbWUpLm1k
difficulty: simple
answer: A
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

16세 여아에게 초경과 유방 발달이 모두 없다. 임신검사는 음성이고 골반 초음파에서 자궁이 보인다. 난소성 문제와 시상하부·뇌하수체성 문제를 처음 나누는 혈액검사는?

## 선택지

A. FSH와 에스트라디올
B. CA-125와 혈청 AFP
C. 프로게스테론 단독
D. 공복 인슐린과 당화혈색소

## 해설

낮은 에스트라디올과 높은 FSH는 난소성 기능저하를, 낮거나 부적절하게 정상인 FSH는 중추성 문제를 시사한다. 지연 사춘기는 사춘기 발달과 다른 호르몬도 종합해 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 측정하지않은 고FSH를 확정하지 않고 원발/중추성 감별검사로 설명.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002138
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/
