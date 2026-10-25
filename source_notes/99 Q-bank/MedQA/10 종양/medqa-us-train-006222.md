---
type: qbank
schema_version: 1
id: medqa-us-train-006222
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fdec029120a0cda69daab86de5b47786cb48a6d68a804697e1ebd7a981b4b177
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유관내 유두종"
  - "혈성 유두 분비물"
  - "유관 확장"
related_disease_slugs:
  - MTMg67aA7J246rO8L-q0gOuCtCDsnKDrkZDsooUgKEludHJhZHVjdGFsIFBhcGlsbG9tYSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
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

41세 여성이 3개월 동안 지속된 우측 유두 출혈로 내원했다. 다른 유방은 출혈이 없고 월경은 규칙적이다. 어머니는 53세에 유방암으로 사망했다. 흡연과 음주는 하지 않으며 활력징후와 심폐 및 복부검사는 정상이다. 우측 유방을 누르면 만져지는 종괴 없이 출혈이 있고 액와 림프절병증은 없다. 초음파에서 잘 경계된 단일 종괴를 둘러싼 확장된 유관이 보인다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 침윤성 유관암
B. 유방 파제트병
C. 유두상 암종
D. 유관내 유두종

## 해설


일측 혈성 유두분비와 확장된 유관 안의 경계가 좋은 단일 종괴는 유관내 유두종 D가 가장 전형적이다. 종괴가 확장된 유관을 둘러싼다는 뜻은 아니다. 유두종은 대개 양성이지만 이 소견만으로 악성이나 비정형 병변을 완전히 배제할 수 없어 영상·조직 일치성에 맞춰 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006222 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 확장된 유관 안에 종괴가 있는 원문을 반대로 해설한 표현 교정 및 악성 배제 없이 안심시키는 표현 완화.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006222
