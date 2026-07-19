---
type: qbank
schema_version: 1
id: medqa-us-train-003331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e44c593515f896508610b890bfdcd03fcdb3ad4a1e1a01b15b37fcaf1c5cfc8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "intussusception"
  - "Meckel diverticulum"
  - "target sign on ultrasound"
  - "intermittent abdominal pain"
question_type: diagnosis
difficulty: complex
answer: B
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

6세 남아가 그날 아침 시작된 급성 간헐적 배꼽 주위 복통으로 응급실에 왔다. 통증은 오른쪽 하복부로 퍼지고 15~30분마다 발생하며 발작 중 무릎을 가슴 쪽으로 당긴다. 비담즙성 구토를 여러 차례 했고 3개월 전 비슷한 에피소드가 있었다. 복부 초음파에서 횡단면상 장의 동심원 고리가 보인다. 다음 중 상태의 가장 가능성 높은 기저 원인은?

## 선택지

A. 장 유착
B. 메켈 게실
C. 급성 충수염
D. 염전이 동반된 장회전이상

## 해설


간헐적 복통과 무릎을 가슴쪽으로 당기는 행동은 장중첩(intussusception)에서 흔히 보이는 증상이다. 초음파에서 장의 동심원 고리(target sign)는 장중첩을 시사한다. 메켈 게실은 장중첩의 가장 흔한 선행 병인으로, 이 경우가 가장 가능성 높은 기저 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003331
