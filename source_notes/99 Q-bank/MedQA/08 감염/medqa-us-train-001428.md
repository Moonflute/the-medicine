---
type: qbank
schema_version: 1
id: medqa-us-train-001428
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:91febe0999f23055105b7cbf67cb38cb51139ef59393b3a7c3c1f8376db284b0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "disseminated histoplasmosis"
  - "choroiditis"
  - "immunosuppression"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ynhOq3oC5tZA
question_type: investigation
difficulty: complex
answer: B
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

한 달 넘게 발열과 체중감소가 지속되는 환자의 영상에서 양쪽 폐에 고르게 분포하는 미세 결절이 보인다. 전신 림프절이 커져 속립성 결핵을 의심하지만 투베르쿨린 피부검사는 음성이다. 적절한 다음 조치는?

## 선택지

A. 피부검사 음성으로 결핵을 배제한다
B. 폐결핵 가능성에 대해 공기주의를 적용하고 객담 또는 침범 부위에서 결핵균 검사를 진행한다
C. 배양 없이 피부검사를 반복하는 것만으로 확진한다
D. 활동성 여부 평가 없이 잠복결핵 단독요법으로 시작한다

## 해설


중증·파종성 결핵에서는 피부검사가 음성일 수 있다. 영상·임상 의심이 높으면 적절한 검체의 핵산증폭검사와 배양 등으로 활동성 결핵을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001428 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 누락 흉부영상 소견은 꾸미지 않고 문장으로 제공된 맥락·맥락막 병변과 음성TST 한계를 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001428
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMjI4MTc4JTJGYXJ0Y2xWaWV3LmRvJTNG
