---
type: qbank
schema_version: 1
id: medqa-us-train-008081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2c592cded12411338bf31b538b34b7dc985a6525ba89deca9228e14d24a66cd
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "superior gluteal nerve injury"
  - "Trendelenburg sign"
  - "gluteus medius weakness"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-unkOy0iOyLoOqyvSDshpDsg4EubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 남아가 3주 동안 절뚝거려 내원했다. 만삭에 태어나 그동안 건강했고 예방접종은 최신이며 한 달 전 DTaP 5차를 받았다. 키와 체중은 50백분위수이다. 체온 37°C(98.6°F), 맥박 80회/분, 호흡수 28회/분이다. 오른쪽 다리만으로 서게 하자 왼쪽 골반이 처진다. 나머지 진찰은 정상이다. 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. L5 신경근병증
B. 척추 농양
C. 우측 총비골신경 손상
D. 우측 상둔신경 손상

## 해설

오른쪽 다리로 지지할 때 왼쪽 골반이 처지는 것은 오른쪽 고관절 외전근 약화의 Trendelenburg 징후다. 상둔신경은 중둔근·소둔근 등을 지배하여 한발 서기 때 반대쪽 골반을 유지하므로 오른쪽 상둔신경 손상(D)이 가장 직접적인 설명이다. L5 신경근병증도 외전근 약화를 만들 수 있으나 다른 신경근 소견이 없는 이 선지 비교에서는 D가 전형적이다. 백신을 둔부에 주사했다고 본문에 없으므로 접종이 원인이라고 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Trendelenburg 징후의 지지측과 반대측 골반 하강, 중둔근·소둔근의 상둔신경 지배를 명확히 했다. D를 유지하되 백신 접종 부위 신경손상을 사실처럼 추가하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008081
