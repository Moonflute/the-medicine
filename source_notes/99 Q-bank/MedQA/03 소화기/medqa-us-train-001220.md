---
type: qbank
schema_version: 1
id: medqa-us-train-001220
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e941164e2155fea241945b10ff235639f69fc1fba4dd379b21f27e4d6dc508ce
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "jaundice"
  - "palmar erythema"
  - "gynecomastia"
  - "ascites"
  - "hepatomegaly"
  - "edema"
  - "cirrhosis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: diagnosis
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

52세 남성이 지난 4주 동안 피부가 점진적으로 노랗게 변하여 내원하였다. 그는 또한 지난 몇 달 동안 식욕 부진과 다리가 부어 바지가 잘 맞지 않는 증상을 보고하였다. 심각한 질환에 대한 개인력이나 가족력은 없다. 흡연은 하지 않으며 특별한 날에 맥주 1~2잔을 마신다. 과거에는 여러 여성 파트너와 성생활을 했으나 최근에는 성관계에 흥미를 잃었다. 키는 178cm, 체중은 68kg이며 체질량지수(BMI)는 22kg/m2이다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 피부와 공막의 황달 및 수장 홍반(palmar erythema)이 관찰된다. 양측 유방 조직의 비대가 있다. 심폐 검진상 이상 소견은 없다. 복부는 팽만되어 있다. 간은 우측 늑골 하단 2~3cm 아래에서 촉진된다. 좌측 복부를 타진할 때 우측에서 진동(thrill)이 느껴진다. 간경정맥 역류(hepatojugular reflux)는 없다. 양측 무릎 아래로 부종이 있다. 이 환자의 상태에 대한 가장 가능성 있는 기저 원인은 무엇인가?

## 선택지

A. 만성 바이러스성 간염
B. 울혈성 간병증
C. 원발성 담즙성 간경변증
D. 비알코올성 지방간염

## 해설

정답은 A이다. 황달·수장홍반·여성형유방·성욕 감소·복수/말초부종은 만성 간경변 맥락이다. 음주가 적고 바이러스 노출 가능 병력이 있어 제시된 선택지 중 만성 바이러스간염이 가장 합당하지만 혈청 검사로 확인해야 한다. 본문에서 hepatojugular reflux는 음성이므로 양성 간정맥충진음이 있다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 음성 hepatojugular reflux를 양성 간정맥충진음으로 바꾼 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001220
