---
type: qbank
schema_version: 1
id: medqa-us-validation-000501
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8b4a272df35a493a2bcee771bd66f9bd1bf5ac6175bf168431c24aab6ec5b5de
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "췌장암"
  - "폐쇄성 황달"
  - "흡연"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: etiology
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

70세 남성이 한 달간의 명치 통증과 등으로의 방사통, 6개월간 10 kg 체중감소로 진료를 받으러 왔다. 치료하지 않은 제2형 당뇨병이 있고 50년 동안 하루 한 갑 흡연했으며 하루 맥주 2~3캔을 마신다. 황달과 혈당 260 mg/dL, 담낭 확장이 보인다. 이 상태에 기여했을 가능성이 가장 높은 것은?

## 선택지

A. 흡연력
B. 불량한 식습관
C. 알코올 사용력
D. 당뇨병

## 해설


황달·담낭 팽창·등으로 뻗치는 상복부 통증과 체중감소는 췌장암을 시사한다. 선택지 중 흡연 A는 가장 확립된 중요한 수정 가능 위험인자다. 당뇨도 연관되지만 신규 당뇨는 종양의 결과일 수도 있다. 이는 이 환자의 선택지 간 비교이며 유전 증후군·가족성 고위험 등까지 포함한 모든 상황에서 흡연이 절대적으로 가장 큰 위험이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000501 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제시된 네 위험인자 중 주요 수정 가능 위험인자인 흡연 A를 유지; 가족성 고위험까지 포함한 전 세계 절대 최강 인자로 확대하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000501
