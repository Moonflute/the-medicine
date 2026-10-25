---
type: qbank
schema_version: 1
id: medqa-us-test-000379
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:896a4a57bcdc6a135d2e9ebe7bbe04e304e082b044cdb4fb6aa9eb0f9502cf9e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유문부 폐쇄"
  - "소화성 궤양"
  - "위출구 폐쇄"
  - "Gastric outlet obstruction"
related_disease_slugs: []
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 3일 동안 반복된 비담즙성 구토로 응급실에 왔다. 토물에는 소화되지 않은 음식이 섞여 있었고 오늘 짙은 갈색 구토를 두 번 했다. 같은 기간 조기 포만감도 있었다. 지난 일주일 동안 심한 발작성 명치 통증과 소화불량이 점점 심해졌다. 통증은 음식이나 일반의약품 제산제로 부분적으로 완화되지만 밤과 식후 몇 시간 뒤 악화된다. 이 기간 동안 체중이 2 kg(4.4 lb) 증가했다. 아버지는 3년 전 대장암 수술을 받았다. 환자는 15년 동안 매일 담배 한 갑을 피웠고 매일 맥주 2~3병을 마신다. 체온 37.1°C(98.8°F), 맥박 106회/분, 혈압 108/68 mmHg였다. 점막이 건조했고 복부 왼쪽 상복부에 경미한 압통과 명치 부위에 고실성 종괴가 있었다. 몸을 앞뒤로 흔들 때 청진기로 진탕음이 들렸고 장음은 감소했다. 직장 진찰은 정상이었으며 대변 잠혈검사는 양성이었다. 혈청 나트륨 135 mEq/L, 칼륨 3.3 mEq/L, 염소 97 mEq/L, 요소질소 46 mg/dL, 포도당 77 mg/dL, 크레아티닌 1.4 mg/dL였다. 이 환자 구토의 근본 원인은?

## 선택지

A. 염증과 부종
B. 비정상적인 위 회전
C. 종양성 증식
D. 벽으로 둘러싸인 췌장액 저류

## 해설

야간·공복에 악화되고 음식/제산제로 일부 호전되는 통증은 소화성 궤양을 시사한다. 비담즙성의 소화 안 된 음식 구토, 조기 포만감과 진탕음은 위출구 폐쇄를 지지한다. 급성 경과에서는 궤양 주변 유문·십이지장 구부의 염증과 부종(A)이 통과를 막는 기전으로 합당하다. 진탕음 자체만으로 원인이 확진되는 것은 아니며 종양 등 다른 폐쇄 원인은 실제 검사에서 감별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 위전이라는 오기 제거 및 소화성 궤양 관련 유문·십이지장 구부 염증/부종에 의한 위출구 폐쇄로 구체화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000379
