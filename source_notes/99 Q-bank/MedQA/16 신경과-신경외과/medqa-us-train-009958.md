---
type: qbank
schema_version: 1
id: medqa-us-train-009958
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b12f676ed89ff3fa477a3d2ab29a7ee76741c64f7273891a081e72a4315382a1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "척골신경병증"
  - "주관절 터널 증후군"
  - "신경 압박"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 환자가 팔꿈치를 굽힐 때 새끼손가락과 약지 안쪽이 저리다. 손바닥뿐 아니라 새끼손가락 쪽 손등 감각도 감소했고 손가락을 벌리는 힘이 약하다. 가장 가능성 높은 압박 위치는?

## 선택지

A. 팔꿈치의 척골신경
B. 손목 기용관의 척골신경
C. 손목터널의 정중신경
D. 위팔의 요골신경

## 해설

새끼손가락과 손가락 벌림 약화는 척골신경에 맞는다. 손등 감각 가지는 기용관보다 근위에서 분지하므로 손등까지 둔하고 팔꿈치 굴곡으로 유발되면 팔꿈치 압박이 더 적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 주관절터널의 척골신경을 수근관 정중신경으로 설명한 중대한 오연결 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009958
- https://www.orthoinfo.org/bodypart/elbow/ulnar-nerve-entrapment-at-the-elbow/
