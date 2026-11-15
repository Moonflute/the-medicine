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

생후 3일 된 신생아가 수유량 감소와 빠른 호흡을 보인다. 오른팔 혈압은 78/46 mmHg, 오른쪽 다리는 48/30 mmHg이고 대퇴동맥 맥박이 매우 약하다. 동맥관에 의존하는 하체 혈류가 의심된다. 긴급 심초음파를 준비하면서 하체 관류를 유지하기 위해 바로 시작할 약물은?

## 선택지

A. 알프로스타딜 정맥 주입
B. 인도메타신 정맥 투여
C. 이부프로펜 정맥 투여
D. 푸로세미드 정맥 투여

## 해설

대동맥축착 등 동맥관 의존성 병변이 의심되고 하체 관류가 저하된 신생아에게는 알프로스타딜(PGE₁)로 동맥관을 열어 하체 혈류를 유지한다. 심초음파와 소아심장 평가를 병행하고 무호흡에 대비한다. 인도메타신이나 이부프로펜은 동맥관을 닫는 약이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: alprostadil의 목적을 일반 혈관확장이 아니라 동맥관 개방 유지로 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=35d229e1-6947-435c-bf54-bfa09cca7e53

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000433
- https://pubmed.ncbi.nlm.nih.gov/38904587/
