---
type: qbank
schema_version: 1
id: medqa-us-train-001930
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3542dcd32f05ff6f0134940afe836822fb12bd5c5339d5c283352885ff447ad
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Volkmann ischemic contracture"
  - "compartment syndrome"
  - "ischemic muscle contracture"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: standard
answer: A
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

35세 남성이 한 달 전 단순 골절로 석고붕대를 한 왼쪽 상완골 골절 후 왼손목과 손가락 움직임이 제한되어 물리치료사에게 의뢰되었다. 보험을 잃어 추적진료를 받지 못했고 붕대를 제거한 뒤에야 문제를 알았다. 왼손은 창백하고 발톱처럼 굽어 있으며 단단하고 압통이 있다. 오른쪽 요골맥박은 2+, 왼쪽은 1+이고 손가락과 손목을 능동적으로 펴지 못하며 수동으로 펴도 어렵고 아프다. 다음 중 적절한 치료는 무엇인가?

## 선택지

A. 수술적 유리술
B. Corticosteroid 주사
C. Collagenase 주사
D. Botulinum toxin 주사

## 해설

정답은 A, 수술적 유리술이다. 골절 후 석고붕대를 한 뒤 한 달이 지나 고정된 손목·손가락 굴곡변형과 능동·수동 신전 제한이 나타난 것은 허혈성 근육 손상 후 발생한 Volkmann 구축에 부합한다. 이는 초기 급성 구획증후군 자체와 구별해야 하는 후유증이며, 구축 정도에 따른 전문적인 수술적 유리·재건 평가가 필요하다. 제시된 주사치료는 이 허혈성 구축을 해결하는 적절한 대안이 아니다. 새로 진행하는 통증이나 허혈 소견이 있다면 응급 신경혈관 평가를 별도로 시행해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 한 달 후 확립된 Volkmann 허혈성 구축을 급성 구획증후군과 혼동하지 않도록 해설 정정. 원정답 A 유지.
- 공식/학회 근거: https://www.aaos.org/acscpg2025
- 공식/학회 근거: https://medlineplus.gov/ency/article/001221.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001930
