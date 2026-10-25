---
type: qbank
schema_version: 1
id: medqa-us-train-000267
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c043d760052a2151166ca19d531e62304d8a0fc93e950fec7e59e398417e9ce
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "monosymptomatic enuresis"
  - "Nocturnal enuresis"
question_type: management
related_disease_slugs: []
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 남아 환자가 지난 한 달간의 단일 증상성 야뇨증으로 내원했습니다. 이전 방문 시 시행한 소변 검사, 상세한 환자 병력, 수분 섭취, 배변, 배뇨 일지 모두에서 이상 소견은 없었습니다. 보호자와 환자는 교육 및 행동 치료를 위해 의뢰되었습니다. 야뇨증이 감소했지만 지속되었습니다. 환자와 어머니 모두 걱정을 표현하며 이 문제가 가능한 한 빨리 해결되기를 원합니다. 다음 관리 단계로 가장 적절한 것은 무엇입니까?

## 선택지

A. 행동 치료
B. DDAVP
C. 야뇨증 알람
D. Oxybutynin

## 해설

교육·행동관리에도 불편이 지속되면 경보기(C)를 선택할 수 있다. 효과에는 보통 수주가 걸려 가족의 참여가 중요하며 즉각적 해결책은 아니다. 단기·빠른 조절이 특별히 우선이면 데스모프레신도 유효한 대안이므로 선호·수분 제한 가능성 등을 함께 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 행동관리 후 경보기 C는 유효한 1차 능동치료다. 가장 빨리 효과가 난다는 해석을 피하고 약물 대안 설명.
- https://cps.ca/en/documents/position/evaluation-and-management-of-enuresis-in-the-general-paediatric-setting

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000267
