---
type: qbank
schema_version: 1
id: medqa-us-validation-001200
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8c68516450cba62f8bd98fa393caecadafab9f44b1b907d599283a2ccef9fdae
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "이식 후 골다공증"
  - "글루코코르티코이드"
  - "압박골절"
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOuLpOqzteymneyEsSDsspnstpQg6rOo7KCIIChPc3Rlb3Bvcm90aWMgU3BpbmFsIEZyYWN0dXJlKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

만성 간부전으로 간이식을 받은 지 3개월 된 45세 남성이 앉은 높이에서 넘어져 발생한 허리 통증으로 진료를 받으러 왔다. 글루코코르티코이드와 사이클로스포린을 복용 중이며 요추 X선에서 L1 쐐기 압박골절, 골밀도검사 T점수는 −3.0이다. 혈청 testosterone과 creatinine은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 신성 골이영양증
B. 골감소증
C. 골연화증
D. 이식 관련 골다공증

## 해설


간이식 뒤 glucocorticoid·cyclosporine 노출과 낮은 골밀도, 앉은 높이에서 넘어진 뒤 생긴 척추 압박골절은 이식 관련 골다공증(D)을 지지한다. 이식 초기에도 골소실과 골절 위험이 증가할 수 있어 장기간 사용이 반드시 필요한 것은 아니다. 50세 미만 남성은 T-score만으로 WHO 골다공증 기준을 적용하지 않고 Z-score와 취약골절·이차 원인을 함께 해석한다. 정상 creatinine과 testosterone은 제시된 신성 골질환/저성선 원인을 덜 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001200 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 3개월 이식 후 골소실을 장기간 복용으로 단정하지 않고45세 남성의 T-score 해석 한계를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://iscd.org/official-positions-2023/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001200
