---
type: qbank
schema_version: 1
id: medqa-us-train-009695
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05a6bad57a42142efac267870950dae2c7ef41a4c85ae73749d150515bdf2ba3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatic hydatid cyst"
  - "간 포충낭종"
  - "Echinococcus granulosus"
  - "Hydatid disease"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOy2qeymnSAoRWNoaW5vY29jY29zaXMpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWxiZW5kYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

42세 여성이 한 달 동안 간헐적 복통과 복부팽만으로 내원했다. 통증은 명치에서 오른쪽 상복부로 이어지고 한 번에 2시간까지 지속되며 음식으로 악화되지 않는다. 심한 오심과 3일간 6회의 구토가 있었다. 동물보호소에서 동물에게 먹이를 주고 목욕시키는 일을 한다. 체온 37.3°C, 맥박 87회/분, 혈압 100/60 mmHg이고 우측 늑골연 아래 4 cm에 호흡에 따라 움직이는 압통 없는 종괴가 만져진다. 백혈구 6,800/mm³, 호산구 6%이며 복부 초음파에서 간 안에 딸낭이 있는 4 cm 단방성 낭종이 보인다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 내시경적 역행성 담췌관 조영술
B. 경구 메트로니다졸
C. 클린다마이신 정맥주사
D. 경구 알벤다졸

## 해설


정답 D. 동물 접촉력과 daughter cyst가 있는 간 낭종은 낭성 포충증을 시사한다. WHO 2025는 합병증 없는 간 CE2/CE3b 낭종이 5cm 이하이면 초기 albendazole 단독치료를 제안한다. 이 4cm 병변은 그 선택지와 부합하지만 실제 초음파 병기와 합병증을 평가해야 한다. 더 크거나 다른 병기·복잡성 병변에는 경피시술, 수술 또는 관찰 등 접근이 달라지므로 모든 포충낭종을 약물만으로 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009695 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 4cm daughter cyst 간 포충낭종에 albendazole D 유지; 모든 낭종의 단일 치료가 아닌 2025 WHO 병기·크기 조건 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK616294/table/ch3.tab4/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009695
