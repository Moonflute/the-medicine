---
type: qbank
schema_version: 1
id: medqa-us-test-001055
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:88e722e414c602dacf3c317833113208805c5453aa291b290fe738296ee95aaa
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "회전근개 파열"
  - "극상근 손상"
  - "낙하팔 징후"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-2ajOyghOq3vOqwnO2MjOyXtCAoUm90YXRvciBDdWZmIFRlYXIpLm1k
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

69세 남성이 오른쪽 어깨 통증으로 진료를 받으러 왔다. 주말에 아들을 도와 이사한 뒤 통증과 근력저하가 생겼고 운동을 위해 역기를 들자 악화되었다. 오른쪽 상지의 외회전이 현저히 약하고 팔을 머리 위로 올렸다가 천천히 내리게 하면 갑자기 팔을 떨어뜨리며 아파했다. 오른팔 외전 근력은 1/5였다. 가장 가능성 높은 손상 근육은?

## 선택지

A. 극상근
B. 극하근
C. 소원근
D. 삼각근

## 해설

낙하팔 징후와 심한 외전 약화는 극상근을 포함한 회전근개 파열을 지지하여 선지 중 A가 가장 적절하다. 극상근은 외전 시작과 골두 안정화에 기여한다. 외회전은 주로 극하근·소원근의 기능이므로 외회전 약화 자체만을 극상근의 고유 기능 소실로 설명해서는 안 된다. 큰 회전근개 파열에서 여러 기능 이상이 함께 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 낙하팔·외전 약화의 극상근 A를 유지하되 외회전 담당 및 가장 큰 힘이라는 잘못된 해부 설명을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001055
