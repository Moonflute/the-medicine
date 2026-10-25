---
type: qbank
schema_version: 1
id: medqa-us-train-000046
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b577b5431adfd179ff9e4c9d207624efe55d73063738beab012e86c0f386bec
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Rabies"
  - "광견병"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
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

27세 남성이 지난 3일간 지속되는 발열, 오심, 구토로 응급실에 내원했습니다. 진료를 기다리는 동안, 그는 빠르게 지남력 상실(disoriented)과 초조함(agitated)을 보였습니다. 진찰 시, 그는 다량의 구강 분비물과 전신 근육 연축(twitching)을 동반한 호흡 곤란의 명백한 징후를 보였습니다. 환자의 체온은 104°F (40°C), 혈압은 90/64 mmHg, 맥박은 88회/분, 호흡수는 18회/분이었고, 실내 공기(room air)에서 산소 포화도는 90%였습니다. 간호사가 비강 캐뉼라(nasal cannula)를 삽입하려고 하자, 환자는 두려워하며 공격적인 태도를 보였습니다. 환자는 진정되었고 기계 환기(mechanical ventilation)가 적용되었습니다. 다음 중 환자의 가장 가능성 높은 진단에 대한 위험 인자는 무엇입니까?

## 선택지

A. 오염된 소고기
B. 후두개 낭종
C. 모기 물림
D. 동굴 탐험

## 해설


발열 뒤 급격한 초조·혼돈, 다량 침 분비와 기류 자극에 대한 공포는 광견병 뇌염을 의심하게 한다. 동굴 탐험(D)은 박쥐와의 접촉 위험을 높일 수 있다. 단순한 동굴 공기 흡입이 일반적 감염경로라는 뜻은 아니며 실제 동물 노출을 확인해야 한다. 급성 수두증으로 설명한 기존 해설은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000046`와 직접 대조했다.
- 판정: 동굴 박쥐 노출 위험 D 유지. 급성 수두증이라는 다른 질환 오류를 광견병 뇌염·기류 자극 과민으로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/rabies/hcp/clinical-overview/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000046
