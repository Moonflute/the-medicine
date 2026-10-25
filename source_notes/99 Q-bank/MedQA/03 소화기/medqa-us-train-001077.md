---
type: qbank
schema_version: 1
id: medqa-us-train-001077
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ecfff7b46f74e0f7a29289c79469a3865632640bb16a1eca9b032eb3ca77b9cc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "autoimmune thyroid disease"
  - "Crohn disease"
  - "malabsorption"
  - "Zollinger-Ellison syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
question_type: mechanism
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

49세 여성이 지난 2주간의 보행 곤란과 어지러움으로 내원하였다. 환자는 또한 4개월간 피로감, 속쓰림, 설사를 겪었다. 대변은 악취가 나고 잘 내려가지 않는다. 지난 4개월 동안 2.2kg(5lb)의 체중 감소가 있었다. 복용 중인 약물은 일반의약품 제산제뿐이다. 어머니는 자가면역 갑상선 질환과 크론병(Crohn disease)을 앓고 있다. 키는 150cm(4ft 11in), 체중은 43kg(95lb)이며, 체질량지수(BMI)는 19.1kg/m2이다. 활력징후는 정상 범위 내에 있다. 신체 검진상 넓은 보행 기저(wide-based gait)가 관찰된다. 모든 사지의 근력과 근긴장도는 정상이다. 손의 빠른 교대 운동(rapid alternating movement)은 장애가 있다. 복부는 부드러우며 상복부에 경미한 압통이 있다. 혈색소 농도는 11.1 g/dL이며, 비타민 E와 비타민 D 수치는 감소하였다. 상부 위장관 내시경 검사에서 위 전정부와 십이지장 하행부에 여러 개의 궤양이 관찰된다. 이 환자 증상의 가장 가능성 있는 기저 기전은 무엇인가?

## 선택지

A. 췌장 효소의 불활성화
B. 장 융모로의 T. whipplei 침윤
C. 글루텐에 대한 장내 염증 반응
D. 소장 세균 과증식

## 해설

다발성 위·십이지장 궤양과 지방변은 과다 위산 분비를 보이는 가스트린종/Zollinger–Ellison 증후군을 고려하게 한다. 십이지장 내 과도한 산은 췌장효소, 특히 리파아제를 불활성화하여 지방소화와 지용성 비타민 흡수를 저해할 수 있다(A). 비타민 E 결핍은 신경학적 이상과 연결될 수 있다. 췌장이 효소를 아예 만들거나 활성화하지 못한다는 의미가 아니라 산에 의한 효소 기능 저하가 핵심이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 과다 위산이 췌장효소를 불활성화하는 ZES 기전을 명료화하고 원문부터 잘못된 Hb mg/dL 단위를 g/dL로 바로잡음(숫자 11.1 보존).
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001077
