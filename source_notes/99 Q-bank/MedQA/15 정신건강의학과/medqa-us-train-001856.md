---
type: qbank
schema_version: 1
id: medqa-us-train-001856
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d5f13940d02e8a2d70e3e187b77ff37f893b5549741c486928a0c062ae842b6a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tardive dyskinesia"
  - "fluphenazine"
  - "antipsychotic adverse effect"
question_type: adverse_effect
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 남성이 추적진료를 위해 정신과에 왔다. 6개월 전 조현병 진단을 받고 fluphenazine을 복용 중이다. 약물로 증상이 잘 조절되어 더 이상 환청이 없고 망상과 다른 정신병적 증상도 크게 호전되었다. 그러나 정신과 의사는 대화 중 되돌릴 수 없을 가능성이 있는 부작용을 발견하고 약을 중단하라고 말한다. 의사가 관찰한 소견은 무엇이었을 가능성이 가장 높은가?

## 선택지

A. 안정 시 떨림
B. 다리를 계속 꼬았다 풀기
C. 걸을 때 자발운동 감소
D. 얼굴의 무도성 무정위운동

## 해설


플루페니진과 같은 전통적 항정신병제의 장기 사용은 안면의 무도성 무정위운동(불수의증)이라는 지연성 운동이상을 유발한다. 이는 영구적인 신경학적 손상을 초래할 수 있어 약물 중단이 권고된다. 관찰된 소견이 얼굴의 무도성 무정위운동이므로 정답은 D이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001856
