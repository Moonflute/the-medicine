---
type: qbank
schema_version: 1
id: medqa-us-train-003180
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef36d9574347f32959d47903077da6453d9b5edc5107b868c74ddbe3d7ef53ac
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "isolated rib fractures"
  - "blunt chest trauma"
  - "conservative management"
  - "analgesia"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
difficulty: complex
answer: C
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

60세 남성이 콘크리트 블록에 왼쪽 옆구리를 부딪혀 넘어지고 25분 후 응급실에 왔다. 심한 왼쪽 흉통과 가벼운 호흡곤란이 있다. 제2형 당뇨병과 42갑년 흡연력이 있다. 체온 37.5°C, 맥박 102회/분, 호흡수 17회/분, 혈압 132/90 mmHg, 산소포화도 96%이다. 왼쪽 옆구리와 몸통에 찰과상, 상부 왼쪽 흉벽 압통과 뼈 마찰음, 양측 폐기저부 호흡음 감소가 있다. 외상 초음파는 음성이고 흉부 X선에서 전위 없는 왼쪽 4·5번 갈비뼈 골절과 깨끗한 폐야가 보인다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 지속적 양압환기
B. 중환자실 입원 및 감시
C. 적절한 진통과 보존적 치료
D. 내부 고정술

## 해설

안정된 산소화와 전위 없는 4·5번 두 갈비뼈 골절에는 적절한 진통·폐위생·호흡 관찰을 포함하는 보존적 치료(C)가 적합하다. 통증, 기저질환과 호흡기능 악화에 따라 입원 수준을 조정한다. 이 본문만으로 CPAP나 내부 고정을 우선할 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두 개 갈비뼈 골절을 단일 골절이라 한 오류와 ICU/수술 절대 불필요 단정 교정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003180
