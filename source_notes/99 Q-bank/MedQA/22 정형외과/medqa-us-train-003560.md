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
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

70세 남성의 요통이 3주간 악화돼 쉬어도 아프다. CRP가 높고 MRI에서 인접 요추 종판과 추간판에 척추 감염이 의심된다. 혈액배양 두 세트는 음성이고 혈압과 하지 신경 진찰은 안정적이다. 원인균 확인을 위한 다음 검사는?

## 선택지

A. CT 유도 척추·추간판 생검
B. 전신 뼈스캔
C. 반복 요추 단순촬영
D. 뇌척수액 배양

## 해설

척추 골수염이 의심되지만 혈액배양으로 원인균을 확인하지 못한 안정 환자에서는 영상 유도 조직 채취로 배양과 병리 검사를 시행한다. 패혈증이나 진행하는 신경결손이 있으면 검체 채취 때문에 치료를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안정한 척추골수염 의심 환자의 병원체 미확인 상태에서 CT 유도 생검 A를 유지하되 모든 경우 필수라는 단정을 제한했다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003560
- [대한감염학회 등: 국내 골관절감염 항균요법 권고안](https://icjournal.org/src/sm/ic-46-125-s001.pdf)
- [IDSA: 척추 골수염 진료 지침](https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/)
