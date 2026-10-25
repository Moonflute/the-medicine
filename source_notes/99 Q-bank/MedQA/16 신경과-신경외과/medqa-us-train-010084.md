---
type: qbank
schema_version: 1
id: medqa-us-train-010084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:587f77eff8219988c3803365f8945bb53a1ce204ae3cf8c680d2ca5be7b879cf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "손목터널증후군"
  - "정중신경병증"
  - "신경전도검사"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
difficulty: standard
answer: B
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 여성이 오른손에 반복되는 통증으로 일차진료의에게 내원했다. 통증은 밤에 가장 심해 여러 번 잠에서 깬다. 통증이 생기면 즉시 따뜻한 물에 손을 담그거나 손을 흔든다. 해당 손에 무감각 증상도 있다. 운전하거나 오른팔을 펴면 증상이 유발된다. 손 외상이나 동반된 근력 약화는 없다. 레보티록신으로 치료 중인 갑상선기능저하증 병력이 있다. 법률회사 비서로 일한다. 손목을 과도하게 굽히면 오른손 첫 세 손가락에 통증과 감각이상이 생긴다. 이 환자에서 확진에 사용하는 검사는?

## 선택지

A. 자기공명영상
B. 신경전도검사
C. 신경 생검
D. 틴엘 검사

## 해설

야간 정중신경 영역 증상과 손목 굴곡 유발은 수근관증후군에 맞는다. 신경전도검사(B)는 손목 부위 정중신경 전도 이상을 확인하고 중증도·다른 신경병증을 평가할 수 있다. 다만 현행 AAOS 지침은 전형적 사례에서 CTS-6 등 임상적 평가를 활용할 수 있어 모든 환자에게 일률적으로 NCS를 요구하지는 않는다. Tinel 검사는 보조 유발징후이고 MRI나 신경생검은 통상적인 확인검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NCS B는 필요한 경우 확인검사지만 모든 전형적 CTS에 필수라는 단정 교정.
- 공식/학회 근거: https://www.aaos.org/globalassets/quality-and-practice-resources/carpal-tunnel/carpal-tunnel-2024/cts-cpg.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010084
