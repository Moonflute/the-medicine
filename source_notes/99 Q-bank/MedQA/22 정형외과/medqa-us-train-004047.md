---
type: qbank
schema_version: 1
id: medqa-us-train-004047
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c385bd4d15b93f4c5f441ff4c72feb51c45bcb331cef6e295c40cd5461c1376f
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "드퀘르벵 건초염"
  - "산후 건초염"
  - "엄지 힘줄"
  - "De Quervain tenosynovitis"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-uTnO2AmOultOuytSDrs5EgKERlIFF1ZXJ2YWluJ3MgVGVub3N5bm92aXRpcykubWQ
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

출산한 지 두 달 된 25세 여성이 아이를 자주 안은 뒤 엄지 쪽 손목이 아프다. 엄지를 손바닥 안으로 굽혀 잡고 손목을 새끼손가락 쪽으로 움직이면 통증이 재현된다. 가장 가능성 높은 진단은?

## 선택지

A. 드퀘르벵 건초염
B. 손목터널증후군
C. 주상골 골절
D. 새끼손가락 쪽 손목 충돌증후군

## 해설

요골 손목 통증과 엄지 힘줄을 당길 때 재현되는 통증은 드퀘르벵 건초염을 시사한다. 손목터널증후군은 정중신경 영역의 야간 저림이 더 전형적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 드퀘르벵 초기 휴식/NSAID 답 D 유지. 부목 고정과 외상 후 영상이 무조건 불필요하다는 기존 해설의 위험한 일반화 수정.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/de-quervains-tendinosis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004047
