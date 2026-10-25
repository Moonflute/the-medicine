---
type: qbank
schema_version: 1
id: medqa-us-validation-001225
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:03b12a3c36bd63e866e0432139ae46a0037d6f18bae24e9a53ee2cdf058540a8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "불안정형 협심증"
  - "활동성 흉통"
  - "관상동맥질환"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: diagnosis
difficulty: complex
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

만성 신장질환이 있는 72세 남성이 활동할 때 반복되는 흉통으로 진료를 받으러 왔다. 이전에는 잔디를 깎을 때 아팠지만 이제는 우편물을 받으러 짧은 거리를 걸어도 통증이 생기며 앉아 쉬면 저절로 호전된다. 심전도는 이전과 같고 첫 트로포닌은 0.06 ng/mL로 이전 검사값과 같았다. 가장 가능성 높은 진단은?

## 선택지

A. 비ST분절 상승 심근경색
B. 안정형 협심증
C. 불안정형 협심증
D. 변이형 협심증

## 해설

이전보다 훨씬 적은 활동에도 흉통이 생기는 진행성(crescendo) 양상은 불안정 협심증(C)을 시사한다. 휴식하면 호전된다는 사실만으로 안정형으로 분류하지 않는다. 첫 트로포닌이 기저치와 같더라도 연속 측정과 ECG로 급성 심근경색을 평가해야 하며, 원문의 CKD 배경도 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 악화되는 운동역치가 핵심인 crescendo 협심증을 단순한 휴식 시 호전 자체와 구별. 영어 원문의 CKD와 첫 트로포닌 0.06 ng/mL가 기저값과 같다는 정보를 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001225
