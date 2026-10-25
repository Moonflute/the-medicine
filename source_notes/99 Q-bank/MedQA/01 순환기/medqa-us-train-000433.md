---
type: qbank
schema_version: 1
id: medqa-us-train-000433
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:67560d5b80879bf6cd9783b336a74df20721f579a3fc6c88d63c5dfc35e82de5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "coarctation of the aorta"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 24시간 된 여아가 신생아실에서 청색증을 보여 발견되었다. 산모는 임신 1회, 출산 0회인 건강한 여성으로 임신 38주에 정상 질식 분만으로 태어났으며 정기적인 산전 진찰을 받았다. 환아는 재태 연령에 비해 작다. 환아는 하지 청색증과 함께 목 뒤에 그물 모양의 종괴를 보인다. 활력 징후는 맥박 150회/분, 호흡 48회/분, 혈압은 우측 팔 120/80 mm Hg, 좌측 팔 124/82 mm Hg, 우측 다리 80/40 mm Hg, 좌측 다리 85/45 mm Hg이다. 대퇴 맥박은 1+이며 지연되어 있다. 심장 진찰에서 견갑골 사이 부위(interscapular area)에 연속성 잡음이 들린다. 폐 청진상 양측 폐 기저부에서 미세한 수포음이 들린다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 알프로스타딜(alprostadil) 투여
B. 동맥조영술(arteriogram)
C. 심장초음파검사(echocardiography)
D. 하지 도플러 검사(lower extremity Doppler)

## 해설

정답은 A이다. 신생아의 상하지 혈압 차이·지연된 대퇴맥과 하체 청색증은 동맥관 의존성 중증 대동맥축착을 의심하게 한다. alprostadil(PGE1)은 동맥관을 열어 하체 전신 관류를 유지하는 가교 처치이다. 단순한 혈관확장제 투여라는 설명으로 대체하지 않는다. 심초음파와 소아심장 전문 치료를 긴급히 진행하며 무호흡 등 부작용에 대비한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: alprostadil의 목적을 일반 혈관확장이 아니라 동맥관 개방 유지로 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=35d229e1-6947-435c-bf54-bfa09cca7e53

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000433
