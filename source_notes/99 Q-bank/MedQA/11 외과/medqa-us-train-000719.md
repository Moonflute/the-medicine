---
type: qbank
schema_version: 1
id: medqa-us-train-000719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d3aeca008c1dc608ecd87fdf9534a5d0c803b55f6c9484d0743a0585376cfe66
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "cirrhosis"
  - "Boerhaave syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

알코올 남용 및 간경변증(cirrhosis) 병력이 있는 33세 남성이 심한 구토를 주소로 응급실에 내원하였다. 환자는 공격적이고, 호전적이며, 감정 기복이 심하여 화학적 억제(chemical restraint)가 필요한 상태이다. 환자는 계속 구토를 하며 구토물에서 혈액이 관찰된다. 체온은 99.2°F(37.3°C), 혈압은 139/88 mmHg, 맥박은 106회/분, 호흡수는 17회/분, 실내 공기에서 산소 포화도는 100%이다. 신체 검진 중 환자는 갑작스러운 흉통을 호소한다. 심장 청진 시 으드득거리는 소리(crunching and rasping sound)가 들린다. 가장 가능성이 높은 진단의 병태생리는 무엇인가?

## 선택지

A. 확장되고 굴곡진 정맥
B. 점막 열상
C. 심낭액 저류
D. 전층 열상

## 해설


심한 구토 뒤 갑작스러운 흉통과 심박동에 맞춘 마찰성 소리는 식도 전층 파열(Boerhaave 증후군)과 종격동 기종을 시사한다. 따라서 D이다. 이 소리를 혈액과 공기가 섞여 생기는 현상으로 설명하는 것은 부정확하며 점막에 국한된 Mallory-Weiss 열상과 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000719`와 직접 대조했다.
- 판정: 구토 후 흉통·Hamman 소리와 Boerhaave 전층 파열 D 유지. 소리를 공기와 혈액이 섞인 결과로 잘못 설명한 부분 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000719
