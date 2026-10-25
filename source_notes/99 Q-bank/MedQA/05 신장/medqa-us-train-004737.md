---
type: qbank
schema_version: 1
id: medqa-us-train-004737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb1c8f2d7123dff654b3b6d6f41067f7fe9c1c2d6d371e4ebfd03b283a110cd9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "IgA 신병증"
  - "상기도 감염 후 혈뇨"
  - "사구체신염"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCrOq1rOyytOyniO2ZmC5tZA
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: mechanism
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

29세 여성이 2일 동안 간헐적인 짙은 소변과 경한 옆구리 통증으로 내원했다. 지난 5일 동안 기침, 인후통과 콧물도 있었다. 배뇨통은 없다. 복용하는 약과 알려진 알레르기는 없다. 체온은 37°C (98.6°F)이다. 등 진찰에서 늑골척추각 압통은 없다. 검사 결과 헤모글로빈 10.4 g/dL, 백혈구 8,000/mm3, 혈소판 200,000/mm3이다. 혈청 나트륨 135 mEq/L, 칼륨 4.9 mEq/L, 염소 101 mEq/L, 중탄산염 22 mEq/L, 요소질소 18 mg/dL, 크레아티닌 1.1 mg/dL이다. 소변은 노란색이고 혈액 3+, 단백 1+, 백혈구 에스테라제 음성이다. 신장과 방광 초음파는 정상이다. 이 환자 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 간질성 신장 염증
B. 신장 유두 괴사
C. 신장 사구체 손상
D. 요로상피 신생물

## 해설

상기도 감염과 거의 동시에 발생한 혈뇨와 단백뇨는 사구체성 손상 C, 특히 IgA신병증을 시사한다. Dipstick 양성만으로 적혈구 형태나 원주가 확인된 것은 아니므로 현미경검사와 단백뇨 정량 등이 필요하다. IgA신병증을 단순 일시적·항상 자연소실 질환으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동시인두염성 혈뇨의 IgA 가능성을 일시적 병변으로 단정한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004737
