---
type: qbank
schema_version: 1
id: medqa-us-train-009534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ae9343c654861554097b60e369ce5f7292dfccb52ea8a73b630bee2f293f1e6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "severe dehydration"
  - "중증 탈수"
  - "hypernatremia"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOuCmO2KuOulqO2YiOymnSAoSHlwZXJuYXRyZW1pYSkubWQ
difficulty: complex
answer: A
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

이전에 건강하던 2세 남아가 36시간 동안 지속된 발열과 많은 물설사로 응급실에 왔다. 어린이집의 여러 아이도 최근 며칠 동안 비슷한 증상이 생겼다. 부모가 부작용을 걱정해 정기 예방접종을 받지 않았다. 기면 상태이며 체온 38.1°C, 맥박 115회/분, 호흡수 25회/분, 혈압 90/58 mmHg이다. 눈이 움푹 들어가고 점막이 건조하며 모세혈관 재충만 시간은 3초이다. 헤마토크릿 52%, 백혈구 9,000/mm³, 혈소판 280,000/mm³, Na⁺ 151, K⁺ 3.2, HCO₃⁻ 19 mEq/L, BUN 56 mEq/L, 크레아티닌 1.0 mg/dL, 혈당 90 mg/dL이다. 초기 처치로 가장 적절한 것은 무엇인가?

## 선택지

A. 0.9% 생리식염수 정맥 투여
B. 로타바이러스 항원 대변 PCR
C. 0.45% 생리식염수 정맥 투여
D. 5% 포도당 수액 정맥 투여

## 해설

기면·탈수·재충만 지연은 유효순환혈액량 감소를 시사하여 초기 IV 0.9% saline(A)이 적절하다. 혈압 90/58만으로 저혈압을 확정하지 않는다. 순환 회복 후에는 나트륨과 수분 결핍을 반복 측정하며 서서히 교정한다. 저긴장성 수액이나 포도당수로 초기에 빠르게 나트륨을 낮추는 것은 뇌부종 위험이 있다. 원문 BUN의 mEq/L 표기는 통상 검사 단위와 맞지 않아 수치 해석에 주의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저혈압을 단정하지 않고 관류 저하의 초기 등장액과 후속 고나트륨 교정 속도를 구별.
- https://www.rch.org.au/clinicalguide/guideline_index/Hypernatraemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009534
