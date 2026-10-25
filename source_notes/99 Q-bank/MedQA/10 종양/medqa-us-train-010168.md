---
type: qbank
schema_version: 1
id: medqa-us-train-010168
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a29cd826c22eb9dca3c011a551f9eaa3d36ca663c319380aeb08b822a5d9d187
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "소세포폐암"
  - "의료정보 공개"
  - "환자 자율성"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: ethics
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 여성이 3주 전 시작된 체중 감소와 피가 섞인 기침으로 딸과 함께 내원했다. 20년 전 주요우울 삽화와 자살 시도가 있었으나 이후 정신 상태는 안정적이다. 혼자 살며 일상생활을 모두 스스로 수행한다. 40년 동안 매일 담배 한 갑을 피웠고 복용 약물은 없다. 흉부 X선에서 오른쪽 폐 중심부의 단일 결절이 보이고 기관지경 경기관지 생검에서 소세포폐암이 확인되었다. 복부 CT에서 간에 다발성 전이 병변이 있다. 환자는 이전에 딸을 의료 의사결정자로 지정했다. 의사가 진단을 알리려 하자 딸이 병실 밖에서 어머니에게 진단을 말하지 말아 달라고 요청한다. 의사가 취할 가장 적절한 행동은?

## 선택지

A. 환자에게 진실을 알고 싶은지 묻기
B. 환자에게 진단 공개
C. 딸에게 어머니에게 진단을 공개하도록 권유
D. 딸이 요청한 이유를 명확히 확인

## 해설


먼저 딸이 진단을 알리지 말라고 요청하는 이유와 두려움을 확인하는 D가 이 대화의 적절한 첫 대응이다. 그 뒤 판단능력이 있는 환자 자신의 정보 수령·가족 참여 선호를 확인하여 정직하고 공감적으로 소통한다. 의료대리인 지정만으로 현재 판단능력이 있는 환자의 알 권리가 사라지지 않고, 20년 전 자살시도만으로 일률적인 비공개를 정당화할 수도 없다. 가족에게 영구적 비밀 유지를 약속하는 것과 우선 우려를 탐색하는 것은 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010168 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정답 D와 달리 A 환자에게 먼저 묻기로 결론 내리던 해설 교정; 가족의 비공개 요청을 탐색한 뒤 환자의 정보 선호·판단능력을 존중.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010168
