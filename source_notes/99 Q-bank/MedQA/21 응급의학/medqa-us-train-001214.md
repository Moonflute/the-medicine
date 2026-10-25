---
type: qbank
schema_version: 1
id: medqa-us-train-001214
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d430026530c1c2604468d0c68659645f73add72fc0ec94406f557baa9dd3ec4b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Cushing reflex"
  - "intracranial hypertension"
question_type: mechanism
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 교통사고 후 1시간 만에 응급실로 이송되었다. 자전거를 타던 중 통제력을 잃고 반대편 차선의 차량과 충돌하였다. 도착 시 환자는 의식이 없다. 정맥 내 헤로인 사용 과거력이 있다. 맥박은 분당 56회, 호흡은 분당 8회로 불규칙하며, 혈압은 196/102 mm Hg이다. 신체 검진상 왼쪽 뺨에 2cm 열상, 왼쪽 가슴에 3cm 열상이 관찰된다. 얼굴과 가슴에 다수의 찰과상이 있다. 통증 자극에 눈을 뜨고 사지를 굴곡한다. 동공은 산대되어 있고 빛에 느리게 반응한다. 왼쪽 폐에서 호흡음이 감소되어 있다. 기관은 중앙에 위치한다. 경정맥 팽대는 없다. 심장 검진상 이상 소견은 없다. 복부는 부드럽고 압통은 없다. 왼쪽 무릎과 오른쪽 발목이 부어 있고 관절 가동 범위가 제한되어 있다. 두 개의 대구경 말초 정맥 카테터를 삽입하였다. 환자는 삽관 후 기계 환기를 시작하였다. 외상 초음파 검사(FAST)는 음성이다. 왼쪽 가슴 상처에 폐쇄 드레싱을 적용하였다. 환자는 뇌 비조영 CT 촬영이 예정되어 있다. 이 환자의 고혈압의 근본 원인은 무엇인가?

## 선택지

A. 교감신경 반응 증가
B. 흉강 내 압력 증가
C. 뇌간 압박
D. 외상 후 혈관 연축

## 해설

외상 후 의식저하와 산대·느린 동공반응, 고혈압·서맥·불규칙 호흡은 두개내압 상승과 쿠싱 반응을 강하게 시사한다. 뇌관류압이 떨어지면 뇌간 허혈을 줄이려 교감신경성 혈관수축과 전신혈압 상승(A)이 생기고, 상승한 혈압에 대한 압수용체 반사로 서맥이 동반된다. 따라서 단순히 교감신경이 서맥을 직접 만든다는 설명이나 뇌압 상승이 없다는 기존 설명은 잘못이다. 뇌간 압박은 임상적 위험 결과일 수 있으나 질문의 고혈압 직접 기전은 교감반응이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 쿠싱 반응을 두개내압 상승이 없는 상태라고 설명한 오류를 뇌관류 저하에 대한 교감신경 반사와 압수용체성 서맥으로 교정했다. 고혈압의 직접 기전 A를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001214
