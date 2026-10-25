---
type: qbank
schema_version: 1
id: medqa-us-train-001666
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:deb9cbc8cbeffe71d34a4a4b9215860e735b8f841f772d23c233c6df33676296
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "celiac disease"
  - "gluten-sensitive enteropathy"
  - "malabsorption"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

이전에 건강했던 20세 여성이 4개월 동안 반복되는 복부 경련, 복부팽만 및 설사로 내원했다. 변은 기름지고 악취가 나며 물을 내려도 잘 내려가지 않는다. 그동안 6 kg (13.2 lb) 체중이 감소했고 창백함과 구각염이 있다. 헤모글로빈은 11 g/dL이며 전해질, 요소질소 및 크레아티닌은 정상이다. 잠혈은 음성이고 대변현미경에서 병원체나 백혈구가 없다. 24시간 대변 지방은 12 g이다. d-자일로스 25 g을 먹인 뒤 5시간 소변 농도는 2 g (정상 >4 g/5 h)이고 리팍시민 2주 치료 후에도 동일하다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 외분비 췌장기능부전
B. Tropheryma whipplei 감염
C. 소장 세균 과증식
D. 글리아딘 과민반응

## 해설


지방변, 체중 감소, 24시간 지방 12 g은 지방흡수 장애를 시사한다. d-자일로스 시험에서 소변에 2 g만 배출된 것은 소장 흡수 장애를 의미한다. 이는 셀리악병(글루텐 민감성 장염)과 일치한다. 따라서 셀리악병이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 지방변·빈혈과 낮은 d-xylose가 rifaximin 뒤에도 유지되어 소장점막질환/celiac D 지지. 췌장성 소화장애·SIBO와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001666
