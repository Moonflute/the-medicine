---
type: qbank
schema_version: 1
id: medqa-us-train-007443
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d077dbbf3d65a94a0adde01c23bf16afec6cf8145f2a252ea00c4c14f581a704
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "회전근개 파열"
  - "어깨 충돌"
  - "근골격 초음파"
  - "팔 내리기 검사"
question_type: investigation
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0xpZG9jYWluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남자가 며칠 동안 지속된 심한 왼쪽 어깨 통증으로 내원했다. 넘어지거나 어깨를 다친 적은 없다. 양쪽 무릎 골관절염이 있으며 인도메타신으로 잘 조절된다. 대부분의 시간을 은퇴자 시설에서 보내고 운동은 하지 않는다. 활력징후는 정상이다. 왼쪽 상완골 대결절에 압통이 있지만 부종과 홍반은 없다. 팔을 수동적으로 90도 벌린 뒤 천천히 모으지 못하고 외회전은 통증으로 제한된다. 견봉하 리도카인 주사에도 증상이 호전되지 않는다. 왼쪽 어깨 X선에서 견봉과 상완골두의 경화가 보인다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 근골격 초음파
B. 수술적 고정
C. 상완골 생검
D. 안심시키기

## 해설

정답은 A, 근골격 초음파이다. 수동 외전한 팔을 천천히 내리지 못하는 drop-arm 소견과 국소 마취 후에도 호전되지 않는 기능장애는 단순 통증성 충돌보다 회전근개 파열 가능성을 높인다. X선만으로 힘줄의 연속성을 직접 평가하기 어려우므로 초음파로 파열 여부와 범위를 확인하는 것이 제시된 선택지 중 적절하다. MRI도 상황에 따라 적절한 대안이며, 초음파가 모든 어깨 병변에서 가장 유용하거나 유일한 확진검사라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. drop-arm 양성 및 리도카인 후 지속 약화는 단순 충돌보다 회전근개 파열을 시사. 초음파 A 유지, 검사 우월성 과장 제거.
- 공식/학회 근거: https://acsearch.acr.org/docs/69433/Narrative

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007443
