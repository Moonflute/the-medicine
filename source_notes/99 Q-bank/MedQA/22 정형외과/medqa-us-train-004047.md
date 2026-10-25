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
question_type: 임상증례 객관식
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-uTnO2AmOultOuytSDrs5EgKERlIFF1ZXJ2YWluJ3MgVGVub3N5bm92aXRpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

25세 산모가 손목 통증으로 일차의료기관을 방문했다. 40주에 건강한 신생아를 출산했으며, 1주 전부터 손목 통증이 시작되어 계속 악화되었다. 최근 걷다가 넘어지면서 팔을 뻗어 바닥을 짚었다. 회계사로 재택근무를 하며 하루 약 8시간 타이핑하거나 재무제표를 작성한다. 여가에는 경쟁적인 사이클 선수로, 출산 후 강도 높은 훈련을 시작했다. 레보티록신으로 치료 중인 갑상샘기능저하증 병력이 있다. 손목을 보아도 만져도 이상은 없지만, 엄지를 굽힌 상태에서 손목을 자쪽으로 편위시키면 통증이 유발된다. 나머지 검사는 정상이다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 손목 방사선 촬영
B. 엄지 스파이카 석고붕대
C. 근무 중과 밤에 착용할 손목 보호대
D. 휴식과 이부프로펜

## 해설

정답은 D, 휴식과 이부프로펜이다. 산후 반복적인 손목 사용과 엄지를 굽히고 손목을 척측 편위할 때 유발되는 통증은 드퀘르벵 건초염을 시사한다. 활동 조절과 금기가 없는 경우의 NSAID는 적절한 보존적 치료이다. 엄지와 손목을 지지하는 탈착식 부목도 사용할 수 있으므로 '고정이 필요 없다'는 단정은 옳지 않다. 선택지 B의 석고붕대는 통상적인 초기 탈착식 부목과 구별한다. 최근 손을 짚고 넘어진 병력이 있으므로 실제 진료에서 해부학적 코담배갑 압통 등 골절 의심 소견이 있으면 주상골 등 손상에 대한 영상 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 드퀘르벵 초기 휴식/NSAID 답 D 유지. 부목 고정과 외상 후 영상이 무조건 불필요하다는 기존 해설의 위험한 일반화 수정.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/de-quervains-tendinosis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004047
