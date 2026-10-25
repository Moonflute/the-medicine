---
type: qbank
schema_version: 1
id: medqa-us-train-001802
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28faf21640ebede4b83582e26a146e30cd3613bb8fcf6df5a85eb53c836640b5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Chiari II malformation"
  - "myelomeningocele"
  - "hydrocephalus"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
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

4세 남아가 2주간 진행한 두통과 목 통증 때문에 내원했다. 그동안 여러 차례 어지럼과 팔·손의 저림이 있었다. 1년 전 넘어져 탈구된 어깨를 폐쇄정복술로 치료했고, 출생 직후 허리 아래의 주머니 모양 돌출을 수술로 제거했다. 체온 36.7°C (98°F), 맥박 80/min, 혈압 100/80 mm Hg이다. 목은 유연하다. 신경학적 검사에서 양측 감각신경성 난청이 있고 대근육 운동은 정상이다. 안저검사에서 양측 시신경유두 부종이 보인다. 뇌 MRI가 제시되어 있다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 수모세포종
B. 뇌실내 출혈
C. Chiari II 기형
D. 전정신경초종

## 해설

출생 직후 수술한 요부 주머니 모양 돌출은 척수수막류를 시사하며 이는 Chiari II 기형(C)과 강하게 연관된다. 소뇌·뇌간 하방 전위와 CSF 흐름 장애로 수두증 및 두개내압 상승이 발생할 수 있다. 뇌실내출혈은 Chiari II의 필수 동반 소견이 아니다. 실제 MRI는 제공되지 않았지만 출생 병력과 임상 소견이 선지 중 C를 가장 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수수막류 병력과 후두개와 증상의 Chiari II C는 본문으로 지지되며 뇌실내출혈 동반과 보지 못한 MRI 확인 문구를 제거한다.
- 공식/학회 근거: https://www.ninds.nih.gov/sites/default/files/2025-05/chiari-malformation.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001802
