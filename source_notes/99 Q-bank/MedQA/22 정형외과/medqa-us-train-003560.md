---
type: qbank
schema_version: 1
id: medqa-us-train-003560
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95b38a901b9750eb18defda825c0fe46ef105a73408e23a3ddf2a7c481fece35
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "vertebral osteomyelitis"
  - "spondylodiscitis"
  - "CT-guided biopsy"
  - "spinal infection"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 3주간 지속된 심한 허리 통증으로 응급실에 왔다. 통증은 처음에는 활동할 때 악화되었지만 이제는 안정 시에도 있다. 제2, 제3 요추 극돌기 위에 압통과 심한 척추주위 경련이 있었다. ESR은 75 mm/h, CRP는 82 mg/L였다. 요추 X선에서 골 파괴와 부골 형성, 골막 반응이 보였고 MRI에서 해당 척추체의 T2 신호가 증가했지만 경막외 농양은 없었다. 혈액배양을 채취하고 진통제를 시작했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. CT 유도 생검
B. 수술적 변연절제술
C. 전립선특이항원 검사
D. 이소니아지드, 리팜핀, 피라진아미드, 에탐부톨

## 해설

진행하는 국소 요통, 높은 ESR·CRP와 척추 파괴·골수 신호 변화는 척추골수염을 시사한다. 혈역학·신경학적으로 안정하고 혈액배양으로 병원체가 아직 확인되지 않았다면 CT 유도 생검(A)으로 배양 및 병리 검체를 얻는 것이 적절하다. 혈액배양에서 적절한 원인균이 확인되는 일부 경우에는 생검이 필요하지 않을 수 있다. 패혈증이나 진행성 신경학적 손상이 있으면 생검 때문에 항생제·수술을 지연시키지 않는다. 결핵의 확증 없이 항결핵제를 일률적으로 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안정한 척추골수염 의심 환자의 병원체 미확인 상태에서 CT 유도 생검 A를 유지하되 모든 경우 필수라는 단정을 제한했다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003560
