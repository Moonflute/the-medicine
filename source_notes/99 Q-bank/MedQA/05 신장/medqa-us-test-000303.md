---
type: qbank
schema_version: 1
id: medqa-us-test-000303
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6aa1125789db4c7baf769610fb5ecc7c0d9a988c40516dd61aba09d2575c2ce9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "알포트증후군"
  - "유전성 신염"
  - "감각신경성 난청"
related_disease_slugs:
  - MDUg7Iug7J6lL-yVjO2PrO2KuCDspp3tm4TqtbAgKEFscG9ydCBTeW5kcm9tZSkubWQ
question_type: diagnosis
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 남아가 수개월 동안 점점 심해지는 청력 저하 때문에 병원에 왔다. 어머니는 아이가 알아듣도록 더 큰 소리로 말해야 한다고 한다. 좋아하는 책의 글씨도 선명하게 보이지 않아 읽기 어렵다고 호소한다. 아버지는 20대에 신장이식을 받았다. 활력징후와 신체진찰은 정상이었다. 혈청 요소질소 15 mg/dL, 크레아티닌 1.0 mg/dL였다. 소변에서 혈액 1+, 단백질 1+, 적혈구 고배율 시야당 15~17개, 백혈구 1~2개가 보였다. 청력검사에서 양측 고주파 감각신경성 난청이 확인되었고 안과검사에서 전방 원추수정체가 보였다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. 알포트증후군
B. 파브리병
C. 폰 히펠-린다우병
D. 결절성 경화증

## 해설

혈뇨·단백뇨와 고주파 감각신경성 난청, 전방 원추수정체는 Alport 증후군(A)의 특징적 조합이다. IV형 콜라겐 관련 COL4A3·COL4A4·COL4A5 변이로 발생하며 X연관형뿐 아니라 상염색체 유전형도 있다. 아버지의 신장질환 병력만으로 이 소아의 유전형을 X연관형이라고 확정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 모든 Alport를 X연관 COL4A5로 단정한 설명을 COL4A3/4/5 및 상염색체형 가능성으로 교정.
- https://academic.oup.com/ndt/article/40/6/1091/7915083

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000303
