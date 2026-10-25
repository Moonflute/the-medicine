---
type: qbank
schema_version: 1
id: medqa-us-train-004926
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7f05bdfe70fef388f948613b878eb1c36751423c114f093c8d82cfc1a9c10a7
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "족근관증후군"
  - "경골신경 포착"
  - "발바닥 감각이상"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-unkOy0iOyLoOqyvSDshpDsg4EubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남자가 발바닥을 따라 통증과 저림이 있어 내원했다. 장거리 달리기를 해왔고 최근 달리거나 쉬고 있을 때에도 발바닥의 화끈거리고 쑤시는 통증이 심해져 때로는 무감각해진다. 아킬레스건, 전방십자인대, 내측 반월상연골을 수술한 병력이 있다. 현재 발바닥 통증은 없지만 저림과 감각이상은 지속되고 근력은 5/5, 하지 반사는 2+이다. 가장 가능성 높은 진단은?

## 선택지

A. 총비골신경 압박
B. 추간판 탈출증
C. 족근관증후군
D. 족저근막염

## 해설

족근관증후군(C)은 안쪽 복사뼈 뒤 굽힘근지지띠 아래에서 경골신경 또는 그 말단 분지가 압박되어 발바닥의 작열감·저림·감각이상을 유발하는 상태다. 이 환자처럼 초기에는 근력이 정상일 수 있지만 감각만 항상 손상되는 질환이라는 뜻은 아니다. 족저근막염은 주로 발꿈치의 기계적 통증으로 나타나며 지속적인 발바닥 감각이상을 덜 잘 설명한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 족근신경이라는 불명확한 용어와 감각만 손상된다는 일반화를 경골신경 압박의 해부학으로 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004926
