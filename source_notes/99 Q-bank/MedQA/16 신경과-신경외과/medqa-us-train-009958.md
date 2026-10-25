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

32세 남성이 3개월 동안 간헐적으로 발생한 오른손 저림과 무감각으로 내원했다. 증상은 저녁에 더 심하다. 외상력은 없다. 목수로 일하며 10년 동안 매일 담배 한 갑을 피웠고 매일 보드카 1파인트를 마신다. 불법 약물은 사용하지 않는다. 활력징후는 정상이다. 진찰에서 오른손 집기 근력이 감소되어 있고 오른쪽 손의 새끼손가락과 안쪽 면의 손등 및 손바닥에서 감각이 감소되어 있다. 다음 중 신경 압박이 발생한 가장 가능성 높은 부위는?

## 선택지

A. 주관절 터널
B. 요골신경 고랑
C. 기용관
D. 수근관

## 해설

새끼손가락 및 척측 손의 손바닥/손등 감각저하와 집기 약화는 척골신경 손상이다. 척골신경의 등쪽 피부가지는 손목보다 근위부에서 갈라지므로 손등 감각까지 저하되면 Guyon관보다 근위부인 주관절터널(A) 압박이 적합하다. 수근관은 정중신경 압박 부위로 이 감각 분포와 다르며, 본문에는 손목 굴곡근 약화가 관찰되었다는 내용이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 주관절터널의 척골신경을 수근관 정중신경으로 설명한 중대한 오연결 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009958
