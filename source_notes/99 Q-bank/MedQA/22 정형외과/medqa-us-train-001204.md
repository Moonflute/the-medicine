---
type: qbank
schema_version: 1
id: medqa-us-train-001204
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f85d6e2eadd5775709b61818079753ad439378369606ecbb6bab34d0d1d1f34
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "multiple myeloma"
  - "hip fracture"
  - "femoral neck fracture"
question_type: prevention
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0ZlYnV4b3N0YXQubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 평지에서 넘어져 대퇴경부 골절 수술을 받았다. 영상에서 종양 의심 소견은 없고 높은 에너지 외상도 아니었다. 퇴원 전 재골절을 줄이기 위해 할 일은?

## 선택지

A. 골절이 유합되면 뼈 상태는 더 이상 평가하지 않는다
B. 젊은 환자가 아니므로 재골절 예방은 하지 않는다
C. 칼슘만 먹고 새 골절이 생기면 다시 검사한다
D. 골다공증과 낙상 위험을 평가하고 항골절 치료를 계획한다

## 해설

낮은 에너지의 고관절 골절은 취약골절이다. 골밀도와 별개로 재골절 위험이 높으므로 골다공증 평가·치료와 낙상 예방을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고령 취약성 골절의 A를 유지하되 낙상을 외상 없음으로 바꾸고 비흡연 환자에게 흡연 위험을 추가한 오류를 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001204
