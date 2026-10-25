---
type: qbank
schema_version: 1
id: medqa-us-train-002644
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:813391d00ccce1eb24221088d2f8f9b6fc391d749e27042a7d4be55616a202e0
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "nasal foreign body"
  - "unilateral foul-smelling discharge"
  - "foreign body extraction"
  - "Nasal foreign body"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 여아가 3주간 지속된 왼쪽 콧구멍의 악취 나는 분비물로 내원했다. 한 차례 피가 섞인 액체가 나왔고 4일간 입으로 숨 쉬며 비강 내 화농성 점액성 분비물이 보인다. 코 내시경으로 진단이 확인되었다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 비강을 통한 천자와 스텐트 삽입
B. 이물 제거
C. 아데노이드절제술
D. 비강 내 글루코코르티코이드

## 해설

어린이의 지속적인 편측 악취·혈성 화농성 비루는 비강 이물을 시사하며 내시경으로 확인되었다. B, 이물 제거가 원인 치료이다. 이물의 종류와 위치, 협조도에 맞춰 안전한 제거 방법을 선택하고 반복적인 맹목적 시도는 피한다. 단추형 배터리나 자석, 깊이 박힌 이물 또는 제거 실패 등은 긴급 이비인후과 처치가 필요할 수 있으므로 다른 처치가 언제나 불필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진단 확정된 비강 이물은 제거 B가 타당하나 모든 경우 다른 시술이 불필요하다는 단정을 제거.
- 공식/학회 근거: https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/foreign-body-nose

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002644
