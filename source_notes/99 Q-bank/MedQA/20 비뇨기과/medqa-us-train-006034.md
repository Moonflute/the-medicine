---
type: qbank
schema_version: 1
id: medqa-us-train-006034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96b438703d78634313f07102ad78a105505f9df49f414d64cdefedb340912808
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "신세포암"
  - "혈뇨"
  - "고형 신장 종괴"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
  - MDUg7Iug7J6lL-2YiOuHqC5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 2개월 동안 점점 심해지는 좌측 옆구리 팽만감으로 내원했다. 최근 지속적인 통증이 있고 고혈압으로 로사르탄과 히드로클로로티아지드를 복용한다. 30갑년 흡연력 외에는 과거력이 없다. 체온은 37.7°C(99.9°F), 맥박은 분당 76회, 호흡수는 분당 14회이다. 좌측 옆구리에 10×10cm 종괴가 만져진다. 혈액검사에서 혈색소 19.5 g/dL, 백혈구 5,000/mm³, 혈소판 250,000/mm³이고 소변검사에서 혈액 2+, 이형적이지 않은 적혈구 45/HPF가 보인다. 복부 CT에서 좌측 신장에서 기원한 큰 고형 종괴가 확인된다. 다음 중 이 소견에 특이적인 질환은 무엇인가?

## 선택지

A. 혈관근육지방종
B. 신세포암
C. 이행세포암
D. 윌름스 종양

## 해설

신장 기원 큰 고형 종괴, 혈뇨와 높은 Hb 19.5 g/dL은 B, 신세포암에 합당하다. 일부 RCC는 EPO 생성에 따른 적혈구증가증을 일으킬 수 있어 이 수치가 중요한 부종양 단서이다. 흡연·고혈압도 위험요인이다. 임상과 CT가 RCC를 강하게 시사하지만 최종 조직형 확진과 영상상 가장 유력한 진단은 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. RCC의 EPO 관련 적혈구증가증을 없다고 설명한 정반대 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006034
