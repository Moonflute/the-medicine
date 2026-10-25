---
type: qbank
schema_version: 1
id: medqa-us-train-007906
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64f16cc4c5265fc7520299e76604f05e666be94830b28f4d129432b7500ad992
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pertussis"
  - "whooping cough"
  - "pneumothorax"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
question_type: prognosis
difficulty: complex
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

3세 여아가 2일간 지속된 기침으로 내원했다. 기침은 발작적으로 발생하고 때때로 이후 구토가 동반된다. 발작 후 깊게 숨을 들이마실 때 쌕쌕거리는 소리가 난다. 기침 때문에 잠을 잘 자지 못한다. 1주일 전 콧물과 미열이 있었다. 9개월 때 세기관지염으로 입원했다. 부모가 백신 합병증을 걱정해 예방접종이 완전하지 않다. 어린이집에 다니지만 비슷한 증상을 보이는 다른 아이는 없다. 전반적으로 건강해 보이고 심폐 진찰은 정상이다. 헤모글로빈 13.3 g/dL, 백혈구 41,000/mm³, 혈소판 230,000/mm³, ESR 31 mm/h이고 흉부 X선은 정상이다. 이 환자에게 다음 중 어떤 합병증 위험이 증가하는가?

## 선택지

A. 천식
B. 용혈성 빈혈
C. 심낭염
D. 기흉

## 해설


백일해의 whoop는 발작기침 뒤 시끄러운 흡기 소리다. 심한 기침 압력으로 pneumothorax D 같은 합병증이 발생할 수 있어 선택지 중 관련된다. 그러나 가장 흔한 합병증/사망 관련 합병증은 이차 세균성 폐렴이며 기흉이 가장 흔하다는 설명은 틀리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007906 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기흉 D의 드문 압력합병증을 가장 흔한 합병증이라고 한 빈도 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-16-pertussis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007906
