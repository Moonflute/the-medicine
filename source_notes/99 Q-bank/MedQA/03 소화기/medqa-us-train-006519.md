---
type: qbank
schema_version: 1
id: medqa-us-train-006519
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a832a36a5520fab17914449f6b99cdc3732fcb427c644323b37d9fd089cb079
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "췌장 가성낭종"
  - "급성 췌장염 합병증"
  - "균일한 액체 저류"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqUg6rCA7ISx64Kt7KKFIChQYW5jcmVhdGljIFBzZXVkb2N5c3QpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

50세 백인 남성이 8시간 동안 지속된 등으로 방사되는 심한 복통, 오심 및 여러 차례 구토로 응급실에 내원했다. 특별한 과거력은 없다. 혈압은 90/60 mm Hg, 맥박은 분당 120회, 호흡수는 분당 20회, 체온은 37.8°C(100°F)이다. 진찰에서 심한 심와부 압통과 감소된 장음이 있다. 혈청 리파아제와 아밀라아제가 상승했고 빠르게 악화되어 한 달 동안 중환자실 치료를 받았다. 안정된 후 일반병동으로 전실되었으며 복부 CT에서 균일한 밀도의 경계가 잘 지어진 액체 저류가 보였다. 다음 중 발생한 상태를 가장 잘 설명하는 것은?

## 선택지

A. 췌장 가성낭종
B. 피막화 괴사
C. 급성 괴사성 저류
D. 췌장암

## 해설


급성 췌장염 후 CT에서 균일한 밀도의 경계가 뚜렷한 액체 저류는 가성낭종을 의미한다. 괴사성 변형은 불균일하고 고형성 물질이 포함된다. 따라서 가장 적절한 설명은 췌장 가성낭종이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염 약1개월후 균일한 액체의 피막성 저류는 pseudocyst A이며 고형괴사 포함 WON과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006519
